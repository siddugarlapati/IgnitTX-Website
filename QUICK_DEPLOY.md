# Quick Deploy to Vercel

## Fastest Way to Deploy (5 minutes)

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Deploy Frontend
```bash
# From project root
vercel --prod
```

When prompted:
- Set up and deploy? → **Y**
- Which scope? → Select your account
- Link to existing project? → **N**
- Project name? → **ignitext** (or your choice)
- Directory? → **./** (press Enter)
- Override settings? → **N**

### 4. Deploy Backend
```bash
cd backend
vercel --prod
```

When prompted:
- Set up and deploy? → **Y**
- Project name? → **ignitext-backend**
- Directory? → **./** (press Enter)

### 5. Update Environment Variables

**Frontend (in Vercel Dashboard):**
1. Go to your frontend project
2. Settings → Environment Variables
3. Add:
   ```
   VITE_API_URL=https://your-backend-url.vercel.app
   ```
4. Redeploy

**Backend (in Vercel Dashboard):**
1. Go to your backend project
2. Settings → Environment Variables
3. Add:
   ```
   CLIENT_URL=https://your-frontend-url.vercel.app
   SUPABASE_URL=https://jwkaxzatydstkjbnqxcf.supabase.co
   SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3a2F4emF0eWRzdGtqYm5xeGNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5MTI3NTYsImV4cCI6MjA4NjQ4ODc1Nn0.V0XWdUpcxgUMRLrDyXGF6NYmVF-nXVXu0NAnrOuvC6o
   NODE_ENV=production
   ```
4. Redeploy

### 6. Done! 🎉

Your URLs will be:
- Frontend: `https://ignitext.vercel.app`
- Backend: `https://ignitext-backend.vercel.app`

## Alternative: Deploy via GitHub

1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "Add New Project"
4. Import your repository
5. Deploy!

## Important Notes

⚠️ **WebSocket Limitation**: Socket.IO may not work perfectly on Vercel's serverless functions. If you need real-time features, consider deploying the backend to:
- Railway.app (recommended)
- Render.com
- Heroku

For now, the basic API functionality will work fine on Vercel.

## Need Help?

See `DEPLOYMENT_GUIDE.md` for detailed instructions and troubleshooting.
