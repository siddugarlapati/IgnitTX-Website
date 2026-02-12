#!/bin/bash

# IgniteXT GitHub Push Script
# This script helps you push your code to GitHub

echo "🚀 IgniteXT GitHub Push Script"
echo "================================"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Git not initialized. Initializing now..."
    git init
    git branch -M main
    echo "✅ Git initialized"
    echo ""
fi

# Show current status
echo "📊 Current Git Status:"
git status --short
echo ""

# Ask for commit message
echo "💬 Enter commit message (or press Enter for default):"
read commit_message

if [ -z "$commit_message" ]; then
    commit_message="Update: Redesign homepage and prepare for deployment"
fi

# Add all changes
echo ""
echo "📦 Adding all changes..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "$commit_message"

# Check if remote exists
if ! git remote | grep -q origin; then
    echo ""
    echo "🔗 No remote repository found."
    echo "Enter your GitHub repository URL:"
    echo "Example: https://github.com/IgniteXT-vivek/ignitext-platform.git"
    read repo_url
    
    if [ ! -z "$repo_url" ]; then
        git remote add origin "$repo_url"
        echo "✅ Remote added: $repo_url"
    else
        echo "❌ No URL provided. Please add remote manually:"
        echo "git remote add origin YOUR_REPO_URL"
        exit 1
    fi
fi

# Push to GitHub
echo ""
echo "🚀 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🎉 Next steps:"
    echo "1. Visit your GitHub repository to verify"
    echo "2. Deploy to Vercel: vercel --prod"
    echo "3. See QUICK_DEPLOY.md for deployment guide"
else
    echo ""
    echo "❌ Push failed. Common solutions:"
    echo "1. Check your GitHub credentials"
    echo "2. Make sure the repository exists on GitHub"
    echo "3. Try: git pull origin main --rebase"
    echo "4. See GIT_PUSH_GUIDE.md for detailed help"
fi
