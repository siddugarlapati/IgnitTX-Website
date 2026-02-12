# Quick Fix: Engineering Labs Not Working

## The Problem
The "Submit Session Request" or "Submit Mentor Request" button shows "Failed to submit request" because the database tables don't exist in Supabase yet.

## The Solution (2 minutes)

### Step 1: Open Supabase SQL Editor
Click this link (it will open in your browser):
👉 **https://supabase.com/dashboard/project/jwkaxzatydstkjbnqxcf/sql/new**

### Step 2: Copy & Paste the SQL
1. Open the file: `COPY_THIS.sql` (in the root folder)
2. Select ALL the text (Ctrl+A or Cmd+A)
3. Copy it (Ctrl+C or Cmd+C)
4. Go back to the Supabase SQL Editor tab
5. Paste it (Ctrl+V or Cmd+V)
6. Click the **"Run"** button (or press Ctrl+Enter)

### Step 3: Verify It Worked
You should see a success message like:
```
Success. No rows returned
```

### Step 4: Test the Connection
In your terminal, run:
```bash
cd backend
node test-connection.js
```

You should see green checkmarks (✅) for all tables.

### Step 5: Refresh Your Browser
Go back to your application and try submitting a session request in Engineering Labs. It should work now!

## What This Does
The SQL script creates 5 tables in your Supabase database:
- `on_demand_requests` - Stores class requests
- `class_applications` - Stores student applications
- `contact_submissions` - Stores contact form data
- `mentor_applications` - Stores mentor applications
- `contributor_applications` - Stores contributor applications

## Still Having Issues?

### Check if backend is running:
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

### Check browser console:
1. Open your browser's Developer Tools (F12)
2. Go to the Console tab
3. Look for any error messages
4. If you see connection errors, make sure the backend is running

### Check Supabase Dashboard:
1. Go to: https://supabase.com/dashboard/project/jwkaxzatydstkjbnqxcf
2. Click "Table Editor" in the sidebar
3. You should see all 5 tables listed

## Need Help?
If you're still stuck, check the backend server logs for error messages.
