# Database Setup Guide

## Problem
The Engineering Labs form submissions are not working because the database tables haven't been created in Supabase yet.

## Solution

Follow these steps to set up your Supabase database:

### Step 1: Access Supabase SQL Editor

1. Go to [https://supabase.com](https://supabase.com)
2. Sign in to your account
3. Select your project: `jwkaxzatydstkjbnqxcf`
4. Click on **SQL Editor** in the left sidebar (or go to the SQL tab)

### Step 2: Run the Schema

1. Click **New Query** button
2. Copy the entire contents of `COPY_THIS.sql` (in the root folder)
3. Paste it into the SQL editor
4. Click **Run** or press `Ctrl+Enter` (Windows/Linux) or `Cmd+Enter` (Mac)

### Step 3: Verify Tables Were Created

After running the schema, you should see a success message. To verify:

1. Go to **Table Editor** in the left sidebar
2. You should see these tables:
   - `on_demand_requests`
   - `class_applications`
   - `contact_submissions`
   - `mentor_applications`
   - `contributor_applications`

### Step 4: Test the Connection

Run the test script to verify everything is working:

```bash
cd backend
node test-connection.js
```

You should see all green checkmarks (✅) indicating the tables exist.

### Step 5: Start the Backend Server

```bash
cd backend
npm start
```

You should see:
```
🚀 Server running on port 3001
📡 WebSocket server ready for real-time updates
🗄️  Connected to Supabase
```

### Step 6: Start the Frontend

In a new terminal:

```bash
npm run dev
```

### Step 7: Test the Application

1. Open your browser to `http://localhost:5173`
2. Navigate to the **Engineering Labs** page
3. Fill out the session or mentor request form
4. Click **Submit Session Request** or **Submit Mentor Request**
5. You should see a success message
6. Check your Supabase dashboard - you should see the data in the `on_demand_requests` table

## Troubleshooting

### Issue: "Could not find the table in the schema cache"

**Solution:** The tables haven't been created yet. Go back to Step 1 and run the SQL schema.

### Issue: "permission denied for table"

**Solution:** The RLS (Row Level Security) policies might not be set correctly. The schema includes policies to allow public access. Make sure you ran the entire schema file.

### Issue: Backend server won't start

**Solution:** 
1. Make sure you're in the `backend` directory
2. Run `npm install` to install dependencies
3. Check if port 3001 is already in use: `lsof -i :3001` (Mac/Linux) or `netstat -ano | findstr :3001` (Windows)

### Issue: Frontend can't connect to backend

**Solution:**
1. Make sure the backend server is running on port 3001
2. Check the browser console for errors
3. Verify the API_URL in `services/api.ts` is correct (should be `http://localhost:3001`)

## Database Schema Overview

### on_demand_requests
Stores class requests initiated by users.

### class_applications
Stores applications from students who want to join a class.

### contact_submissions
Stores general contact form submissions.

### mentor_applications
Stores applications from people who want to become mentors.

### contributor_applications
Stores applications from people who want to contribute to projects.

## Current Status

✅ Backend server is running on port 3001
❌ Database tables need to be created in Supabase

**Next Action:** Follow Step 1-2 above to create the tables in Supabase.
