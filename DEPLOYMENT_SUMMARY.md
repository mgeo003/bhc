# AWS Amplify Deployment - Quick Start

## What's Included

This package contains **24 HTML files** ready for deployment:

### Main Documentation (3 files)
- `index.html` - Master navigation hub (⭐ START HERE)
- `DEVELOPER_PITCH.html` - Complete project pitch
- `schema.html` - Database schema viewer

### Architecture Documents (2 files)
- `design-mockups/ARCHITECTURE_PLAN.html` - Enterprise architecture plan
- `design-mockups/ARCHITECTURE_COMPARISON.html` - Technology comparison

### Design Mockups (19 files)
- `design-mockups/index.html` - Mockups navigation hub
- `design-mockups/design-system.html` - Component library
- **Auth (3):** login, register-clinician, register-provider
- **Clinician (6):** dashboard, search-results, provider-detail, saved-list, contact-log, submit-review
- **Provider (3):** dashboard, edit-profile, settings
- **Admin (4):** dashboard, providers, users, analytics

## Quick Deployment Steps

### 1. Push to Git
```bash
git add .
git commit -m "Add complete documentation hub"
git push origin main
```

### 2. Deploy to Amplify
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "New app" → "Host web app"
3. Connect your Git repository
4. Amplify will auto-detect `amplify.yml`
5. Click "Save and deploy"

### 3. Access Your Site
- Amplify provides a URL: `https://main.xxxxx.amplifyapp.com`
- Share this URL with your team
- Optionally add a custom domain

## File Structure

All files use **relative paths** and will work correctly on Amplify:
- Root: `index.html` (master hub)
- Documentation: `DEVELOPER_PITCH.html`, `schema.html`
- Architecture: `design-mockups/ARCHITECTURE_*.html`
- Mockups: `design-mockups/*.html` and subdirectories

## Cost

- **Free Tier**: 5 GB storage, 15 GB transfer/month
- This site will likely stay within free tier
- Beyond free tier: ~$0.15/GB storage + transfer

## Navigation

The master `index.html` provides organized navigation to:
- All documentation
- All architecture plans
- All 18 design mockups
- Database schema

All pages include navigation back to the hub.

## Support Files

- `amplify.yml` - Amplify build configuration (no build needed)
- `.amplifyignore` - Files to exclude from deployment
- `DEPLOYMENT_GUIDE.md` - Detailed deployment instructions

---

**Ready to deploy!** Follow the steps above or see `DEPLOYMENT_GUIDE.md` for detailed instructions.
