# IgniteXT Vercel Deployment Guide

## Prerequisites
- GitHub account
- Vercel account (sign up at https://vercel.com)
- Your Supabase database should be set up (run COPY_THIS.sql)

## Step 1: Prepare Your Repository

1. Make sure all your code is committed to Git:
```bash
git add .
git commit -m "Prepare for Vercel deployment"
```

2. Push to GitHub:
```bash
git push origin main
```

If you don't have a GitHub repository yet:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/IgniteXT-vivek/your-repo-name.git
git push -u origin main
```

## Step 2: Deploy Frontend to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to https://vercel.com and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. Add Environment Variables (click "Environment Variables"):
   ```
   VITE_API_URL=https://your-backend-url.vercel.app
   ```
   (You'll update this after deploying the backend)

6. Click "Deploy"

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? **ignitext** (or your preferred name)
   - Directory? **./`** (press Enter)
   - Override settings? **N**

5. For production deployment:
```bash
vercel --prod
```

## Step 3: Deploy Backend to Vercel

The backend needs to be deployed separately as a Vercel Serverless Function.

1. Create a new directory for backend deployment:
```bash
cd backend
```

2. Create `vercel.json` in the backend folder:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
```

3. Deploy backend:
```bash
vercel
```

4. Note the backend URL (e.g., `https://your-backend.vercel.app`)

## Step 4: Update Environment Variables

1. Go to your frontend project in Vercel Dashboard
2. Go to Settings → Environment Variables
3. Update `VITE_API_URL` with your backend URL:
   ```
   VITE_API_URL=https://your-backend.vercel.app
   ```

4. Redeploy the frontend:
   - Go to Deployments tab
   - Click the three dots on the latest deployment
   - Click "Redeploy"

## Step 5: Configure Backend Environment Variables

1. Go to your backend project in Vercel Dashboard
2. Go to Settings → Environment Variables
3. Add these variables:
   ```
   PORT=3001
   CLIENT_URL=https://your-frontend.vercel.app
   SUPABASE_URL=https://jwkaxzatydstkjbnqxcf.supabase.co
   SUPABASE_ANON_KEY=your_anon_key_here
   NODE_ENV=production
   ```

4. Redeploy the backend

## Step 6: Test Your Deployment

1. Visit your frontend URL (e.g., `https://ignitext.vercel.app`)
2. Test the Engineering Labs form submission
3. Check if data is being saved to Supabase
4. Test all navigation and features

## Troubleshooting

### Frontend Issues

**Build fails:**
- Check if all dependencies are in `package.json`
- Run `npm install` and `npm run build` locally first
- Check build logs in Vercel dashboard

**Environment variables not working:**
- Make sure they start with `VITE_`
- Redeploy after adding environment variables
- Check browser console for API URL

### Backend Issues

**API not responding:**
- Check backend deployment logs in Vercel
- Verify environment variables are set
- Check CORS settings in `server.js`

**Database connection fails:**
- Verify Supabase credentials
- Make sure tables are created (run COPY_THIS.sql)
- Check Supabase dashboard for errors

### CORS Issues

If you get CORS errors, update `backend/server.js`:
```javascript
const io = new Server(httpServer, {
  cors: {
    origin: ['https://your-frontend.vercel.app', 'http://localhost:5173'],
    methods: ['GET', 'POST']
  }
});

app.use(cors({
  origin: ['https://your-frontend.vercel.app', 'http://localhost:5173']
}));
```

## Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Go to Settings → Domains
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (can take up to 48 hours)

## Automatic Deployments

Vercel automatically deploys when you push to GitHub:
- Push to `main` branch → Production deployment
- Push to other branches → Preview deployment

## Monitoring

- View deployment logs in Vercel Dashboard
- Check Analytics tab for traffic insights
- Monitor Supabase dashboard for database activity

## Important Notes

1. **Free Tier Limits:**
   - Vercel Free: 100GB bandwidth/month
   - Supabase Free: 500MB database, 2GB bandwidth

2. **Environment Variables:**
   - Never commit `.env` files to Git
   - Always use Vercel's environment variables feature

3. **Backend Limitations:**
   - Vercel serverless functions have a 10-second timeout
   - WebSocket connections may not work on Vercel (consider using Vercel's Edge Functions or deploy backend elsewhere)

4. **Alternative Backend Hosting:**
   If WebSocket/Socket.IO doesn't work well on Vercel, consider:
   - Railway.app
   - Render.com
   - Heroku
   - DigitalOcean App Platform

## Quick Deploy Commands

```bash
# Deploy frontend
vercel --prod

# Deploy backend
cd backend
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs
```

## Support

- Vercel Docs: https://vercel.com/docs
- Vercel Discord: https://vercel.com/discord
- Supabase Docs: https://supabase.com/docs

---

Your IgniteXT platform is now ready for production! 🚀
