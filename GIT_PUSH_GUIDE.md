# Push to GitHub Guide

## Step 1: Check Git Status

```bash
git status
```

This shows you what files have changed.

## Step 2: Add All Changes

```bash
git add .
```

This stages all your changes for commit.

## Step 3: Commit Your Changes

```bash
git commit -m "Redesign homepage and prepare for Vercel deployment"
```

## Step 4: Check Remote Repository

```bash
git remote -v
```

If you don't see a remote, add one:

```bash
git remote add origin https://github.com/IgniteXT-vivek/your-repo-name.git
```

Replace `your-repo-name` with your actual repository name.

## Step 5: Push to GitHub

```bash
git push origin main
```

Or if your branch is named `master`:

```bash
git push origin master
```

If this is your first push:

```bash
git push -u origin main
```

## If You Don't Have a GitHub Repository Yet

### 1. Create a new repository on GitHub
- Go to https://github.com/new
- Repository name: `ignitext-platform` (or your choice)
- Description: "IgniteXT - Engineering Ecosystem Platform"
- Keep it Public or Private (your choice)
- **DO NOT** initialize with README, .gitignore, or license
- Click "Create repository"

### 2. Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: IgniteXT platform"
```

### 3. Add Remote and Push

```bash
git branch -M main
git remote add origin https://github.com/IgniteXT-vivek/your-repo-name.git
git push -u origin main
```

## Quick Commands (Copy & Paste)

```bash
# Check status
git status

# Add all changes
git add .

# Commit with message
git commit -m "Redesign homepage and prepare for Vercel deployment"

# Push to GitHub
git push origin main
```

## Common Issues

### Issue: "fatal: not a git repository"
**Solution:** Initialize git first:
```bash
git init
```

### Issue: "remote origin already exists"
**Solution:** Update the remote URL:
```bash
git remote set-url origin https://github.com/IgniteXT-vivek/your-repo-name.git
```

### Issue: "failed to push some refs"
**Solution:** Pull first, then push:
```bash
git pull origin main --rebase
git push origin main
```

### Issue: Authentication failed
**Solution:** Use a Personal Access Token instead of password:
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select scopes: `repo` (all)
4. Copy the token
5. Use it as your password when pushing

Or use SSH:
```bash
git remote set-url origin git@github.com:IgniteXT-vivek/your-repo-name.git
```

## Verify Your Push

After pushing, go to:
```
https://github.com/IgniteXT-vivek/your-repo-name
```

You should see all your files there!

## Next Steps After Pushing

1. Deploy to Vercel (see `QUICK_DEPLOY.md`)
2. Set up automatic deployments (Vercel will auto-deploy on push)
3. Add a README badge for deployment status

---

Need help? Check the GitHub documentation: https://docs.github.com/en/get-started
