import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { createClient } from '@supabase/supabase-js';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST']
  }
});

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL || 'https://isrkbkrznjnirzihdzzr.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlzcmtia3J6bmpuaXJ6aWhkenpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3MzIwNDAsImV4cCI6MjA4NjMwODA0MH0.PxnUgb8TWpC6uQ4Kbo0_WlsCdg3WxdOUaThOHmfIY9U';

const supabase = createClient(supabaseUrl, supabaseKey);

app.use(cors());
app.use(express.json());

// Socket.IO connection
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// API Routes

// Get all on-demand requests
app.get('/api/on-demand-requests', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('on_demand_requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    res.json(data || []);
  } catch (error) {
    console.error('Error fetching requests:', error);
    res.status(500).json({ error: error.message });
  }
});

// Create new on-demand request
app.post('/api/on-demand-requests', async (req, res) => {
  try {
    const { id, topic, field, initiator, type = 'ONLINE' } = req.body;
    
    const { data, error } = await supabase
      .from('on_demand_requests')
      .insert([{
        id,
        topic,
        field,
        initiator,
        type,
        status: 'QUEUED',
        count: 1
      }])
      .select()
      .single();

    if (error) throw error;
    
    // Broadcast to all connected clients
    io.emit('new_request', data);
    
    res.status(201).json(data);
  } catch (error) {
    console.error('Error creating request:', error);
    res.status(500).json({ error: error.message });
  }
});

// Apply to join a class
app.post('/api/class-applications', async (req, res) => {
  try {
    const { request_id, name, roll, github, message } = req.body;
    
    // Insert application
    const { data: appData, error: appError } = await supabase
      .from('class_applications')
      .insert([{ request_id, name, roll, github, message }])
      .select()
      .single();

    if (appError) throw appError;
    
    // Update count in on_demand_requests
    const { data: requestData, error: updateError } = await supabase.rpc(
      'increment_request_count',
      { request_id }
    );

    // If RPC doesn't exist, do it manually
    if (updateError) {
      const { data: currentRequest } = await supabase
        .from('on_demand_requests')
        .select('count')
        .eq('id', request_id)
        .single();

      const { data: updatedRequest, error: manualError } = await supabase
        .from('on_demand_requests')
        .update({ 
          count: (currentRequest?.count || 1) + 1,
          status: 'SYNCING'
        })
        .eq('id', request_id)
        .select()
        .single();

      if (manualError) throw manualError;
      
      // Broadcast update to all clients
      io.emit('request_updated', updatedRequest);
    } else {
      // Fetch updated request
      const { data: updatedRequest } = await supabase
        .from('on_demand_requests')
        .select('*')
        .eq('id', request_id)
        .single();

      io.emit('request_updated', updatedRequest);
    }
    
    res.status(201).json({ 
      id: appData.id,
      message: 'Application submitted successfully'
    });
  } catch (error) {
    console.error('Error submitting application:', error);
    res.status(500).json({ error: error.message });
  }
});

// Submit mentor application
app.post('/api/mentor-applications', async (req, res) => {
  try {
    const {
      role,
      full_name,
      github,
      branch,
      year,
      room_number,
      experience_years,
      teaching_count,
      project_url,
      motivation
    } = req.body;
    
    const { data, error } = await supabase
      .from('mentor_applications')
      .insert([{
        role,
        full_name,
        github,
        branch,
        year,
        room_number,
        experience_years,
        teaching_count,
        project_url,
        motivation
      }])
      .select()
      .single();

    if (error) throw error;
    
    res.status(201).json({ 
      id: data.id,
      message: 'Mentor application submitted successfully'
    });
  } catch (error) {
    console.error('Error submitting mentor application:', error);
    res.status(500).json({ error: error.message });
  }
});

// Submit contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([{ name, email, subject, message }])
      .select()
      .single();

    if (error) throw error;
    
    res.status(201).json({ 
      id: data.id,
      message: 'Contact form submitted successfully'
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ error: error.message });
  }
});

// Submit contributor application
app.post('/api/contributor-applications', async (req, res) => {
  try {
    const { full_name, github, engineering_path, motivation } = req.body;
    
    const { data, error } = await supabase
      .from('contributor_applications')
      .insert([{ full_name, github, engineering_path, motivation }])
      .select()
      .single();

    if (error) throw error;
    
    res.status(201).json({ 
      id: data.id,
      message: 'Contributor application submitted successfully'
    });
  } catch (error) {
    console.error('Error submitting contributor application:', error);
    res.status(500).json({ error: error.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 3001;

httpServer.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 WebSocket server ready for real-time updates`);
  console.log(`🗄️  Connected to Supabase`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  httpServer.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
