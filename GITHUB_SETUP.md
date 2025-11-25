# 🚀 GitHub Push Guide

Follow these steps to safely push your project to GitHub with API keys protected.

## ✅ Pre-Push Checklist

Before pushing to GitHub, verify:

- [x] All API keys removed from source code
- [x] API keys moved to `.env.local` file
- [x] `.env.local` is in `.gitignore`
- [x] `.env.example` created with placeholder values
- [x] README.md updated with setup instructions

## 📋 Step-by-Step Instructions

### Step 1: Verify API Keys are Hidden

Run this command to check if any API keys are in your code:
```bash
git grep -i "AIzaSy\|sk-proj\|sk-sbx\|sk-ZDX" || echo "✅ No API keys found in git-tracked files"
```

### Step 2: Initialize Git Repository (if not already done)

```bash
# Navigate to your project folder
cd "c:\Users\nk\stanfx-final (3)"

# Initialize git (skip if already initialized)
git init

# Check git status
git status
```

### Step 3: Stage Your Files

```bash
# Add all files (excluding those in .gitignore)
git add .

# Verify what will be committed (make sure .env.local is NOT listed)
git status
```

### Step 4: Commit Your Changes

```bash
git commit -m "Initial commit: StanFX Image Editor with AI features"
```

### Step 5: Create GitHub Repository

1. Go to https://github.com/new
2. Enter repository name: `stanfx` (or your preferred name)
3. Choose **Private** or **Public** (Private recommended if API keys were ever committed)
4. Do NOT initialize with README (we already have one)
5. Click "Create repository"

### Step 6: Connect to GitHub and Push

```bash
# Add your GitHub repository as remote (replace YOUR_USERNAME and YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Rename default branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Alternative: Using GitHub Desktop

1. Open GitHub Desktop
2. Click "Add" → "Add Existing Repository"
3. Choose your project folder: `c:\Users\nk\stanfx-final (3)`
4. Click "Publish repository"
5. Choose repository name and visibility
6. Click "Publish Repository"

## 🔒 Security Verification

After pushing, verify your API keys are NOT visible:

1. Go to your GitHub repository page
2. Use GitHub's search (press `/` then type):
   - Search for: `AIzaSy` (should find nothing)
   - Search for: `sk-proj` (should find nothing)
   - Search for: `sk-sbx` (should find nothing)

3. Check that `.env.local` is NOT in the repository
4. Confirm `.env.example` exists with placeholder values

## ⚠️ If API Keys Were Accidentally Committed

If you accidentally committed API keys in the past:

### Option 1: Rotate Your Keys (RECOMMENDED)
1. Generate new API keys from each service
2. Update your `.env.local` with new keys
3. Revoke the old keys that were exposed

### Option 2: Clean Git History (Advanced)
```bash
# Use git-filter-repo to remove sensitive data
# Only do this if you understand git history rewriting
git filter-repo --path .env.local --invert-paths
git push origin --force --all
```

## 🎉 Success!

Your project is now safely on GitHub with API keys protected!

### Next Steps:
- Add collaborators if needed
- Set up GitHub Actions for CI/CD
- Enable Dependabot for security updates
- Add a LICENSE file

### For Collaborators:
Share these instructions with team members:
1. Clone the repository
2. Copy `.env.example` to `.env.local`
3. Add their own API keys to `.env.local`
4. Run `npm install` and `npm run dev`

## 📞 Support

If you encounter any issues:
- Check `.gitignore` includes `.env.local`
- Verify environment variables are loaded correctly
- Make sure you're using the latest version of Node.js

---

**Remember**: Never share your `.env.local` file or commit it to version control!
