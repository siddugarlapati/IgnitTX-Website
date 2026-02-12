# IgniteXT - Engineering Ecosystem Platform

An AI-powered open-source engineering ecosystem helping students clear backlogs, master core subjects, build real-world projects, and become industry-ready developers.

## 🚢 Deploy to Vercel (Production Ready)

**Quick Deploy:**
```bash
npm install -g vercel
vercel --prod
```

📖 **Deployment Guides:**
- `QUICK_DEPLOY.md` - 5-minute deployment guide
- `DEPLOYMENT_GUIDE.md` - Detailed deployment instructions with troubleshooting

---

## 🚀 Features

- **Real-time On-Demand Classes**: WebSocket-powered live updates and dynamic enrollment
- **Mentor Applications**: Student and faculty mentor onboarding system
- **Contributor System**: Track and manage open-source contributors
- **Contact Form**: Direct communication with database storage
- **Database Persistence**: All data saved to Supabase PostgreSQL

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Backend**: Node.js + Express + Socket.IO
- **Database**: Supabase (PostgreSQL)
- **Real-time**: WebSocket connections

## 📦 Quick Setup

### Prerequisites
- Node.js v18+
- Supabase account (free tier works)

### 1. Install Dependencies

```bash
# Run the install script
chmod +x install.sh
./install.sh

# Or manually:
npm install
cd backend && npm install && cd ..
```

### 2. Setup Supabase Database

1. Go to [Supabase Dashboard](https://supabase.com/dashboard/project/isrkbkrznjnirzihdzzr)
2. Open **SQL Editor**
3. Copy and run the SQL from `backend/supabase-schema.sql`

### 3. Configure Environment

**Frontend (.env.local):**
```env
VITE_API_URL=http://localhost:3001
GEMINI_API_KEY=your_api_key_here
```

**Backend (backend/.env):**
```env
PORT=3001
CLIENT_URL=http://localhost:5173
SUPABASE_URL=https://isrkbkrznjnirzihdzzr.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlzcmtia3J6bmpuaXJ6aWhkenpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3MzIwNDAsImV4cCI6MjA4NjMwODA0MH0.PxnUgb8TWpC6uQ4Kbo0_WlsCdg3WxdOUaThOHmfIY9U
```

### 4. Add Logo

Replace `public/logo.png` with your actual logo image.

### 5. Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

**Open:** http://localhost:5173

## 🎯 Key Pages

- **Home** - Platform overview and statistics
- **Roadmaps** - Engineering learning paths
- **On-Demand** - Real-time class requests and enrollment
- **AI Tools** - AI-powered learning assistants
- **Community** - Mentor applications and network
- **Contribute** - Contributor onboarding
- **Contact** - Direct communication form

## 🗄️ Database Schema

The platform uses Supabase PostgreSQL with the following tables:

### on_demand_requests
- `id` (TEXT) - Unique request ID
- `topic` (TEXT) - Class topic
- `field` (TEXT) - Engineering field
- `initiator` (TEXT) - Person who created request
- `count` (INTEGER) - Number of enrolled students
- `type` (TEXT) - 'ONLINE' or 'OFFLINE'
- `status` (TEXT) - 'QUEUED', 'SYNCING', or 'PREPARING_CLUSTER'
- `created_at` (TIMESTAMPTZ) - Creation timestamp

### class_applications
- Student enrollment applications with name, roll, github, message

### mentor_applications
- Mentor onboarding data for students and teachers

### contact_submissions
- Contact form messages with email tracking

### contributor_applications
- Contributor profiles and motivations

See `backend/supabase-schema.sql` for complete schema.

## 🔌 API Endpoints

- `GET /api/health` - Server health check
- `GET /api/on-demand-requests` - Fetch all class requests
- `POST /api/on-demand-requests` - Create new request
- `POST /api/class-applications` - Apply to join class
- `POST /api/mentor-applications` - Submit mentor application
- `POST /api/contact` - Submit contact form
- `POST /api/contributor-applications` - Apply as contributor

## 🔄 Real-time Features

### WebSocket Events
- `new_request` - Broadcast when new class request is created
- `request_updated` - Broadcast when enrollment count changes

### Test Real-time Updates
1. Open the app in two browser windows
2. Navigate to "ON_DEMAND" in both
3. Create a request in window 1
4. See it appear instantly in window 2
5. Apply to join in window 2
6. Watch count update in window 1

## 🛠️ Development

### Frontend
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Backend
```bash
cd backend
npm run dev      # Start with auto-reload
npm start        # Production mode
```

## 🐛 Troubleshooting

### Backend won't start
```bash
# Check if port 3001 is in use
lsof -i :3001
# Kill the process if needed
kill -9 <PID>
```

### Frontend can't connect
- Ensure backend is running on port 3001
- Check `.env.local` has correct API URL
- Verify Supabase credentials in `backend/.env`

### No data showing
- Run the SQL schema in Supabase SQL Editor
- Check Supabase dashboard for table data
- Review browser console for errors

### WebSocket connection failed
- Ensure backend server is running
- Check CORS settings in `backend/server.js`
- Verify Socket.IO client version matches server

## 🚢 Production Deployment

### Environment Variables

**Frontend:**
```env
VITE_API_URL=https://api.yourdomain.com
```

**Backend:**
```env
PORT=3001
CLIENT_URL=https://yourdomain.com
SUPABASE_URL=https://isrkbkrznjnirzihdzzr.supabase.co
SUPABASE_ANON_KEY=your_production_key
NODE_ENV=production
```

### Build and Deploy

**Frontend:**
```bash
npm run build
# Deploy the 'dist' folder to your hosting service
```

**Backend:**
```bash
cd backend
npm install -g pm2
pm2 start server.js --name ignitext-backend
pm2 save
pm2 startup
```

### Nginx Configuration

```nginx
# Frontend
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}

# Backend API
server {
    listen 80;
    server_name api.yourdomain.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 📊 Viewing Data

### Supabase Dashboard
1. Go to **Table Editor** in Supabase
2. Select any table to view/edit data
3. Use filters and sorting

### SQL Queries
```sql
-- View all requests
SELECT * FROM on_demand_requests ORDER BY created_at DESC;

-- View applications for a specific request
SELECT * FROM class_applications WHERE request_id = 'req-1';

-- Count total applications
SELECT COUNT(*) FROM class_applications;

-- Recent contact submissions
SELECT * FROM contact_submissions ORDER BY created_at DESC LIMIT 10;
```

## 🔒 Security

The schema includes Row Level Security (RLS) policies:
- Public read access to `on_demand_requests`
- Public insert on all tables
- Public update on `on_demand_requests`

To modify security, go to **Authentication** > **Policies** in Supabase.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

MIT License

## 🔗 Links

- [AI Studio App](https://ai.studio/apps/temp/1)
- [Supabase Dashboard](https://supabase.com/dashboard/project/isrkbkrznjnirzihdzzr)

---

**Note:** Please manually delete `backend/README.md` if you want to remove all extra documentation files.

Built with ⚡ by the IgniteXT Foundation
