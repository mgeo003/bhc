# AWS Amplify Deployment Guide

This guide will help you deploy the BHC Connect documentation and design mockups to AWS Amplify.

## Prerequisites

1. AWS Account
2. AWS Amplify Console access
3. Git repository (GitHub, GitLab, Bitbucket, or CodeCommit)

## Deployment Steps

### Option 1: Deploy from Git Repository (Recommended)

1. **Push to Git Repository**
   ```bash
   git add .
   git commit -m "Add complete documentation and design mockups"
   git push origin main
   ```

2. **Connect to AWS Amplify**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
   - Click "New app" → "Host web app"
   - Select your Git provider (GitHub, GitLab, Bitbucket)
   - Authorize and select your repository
   - Select the branch (usually `main`)

3. **Configure Build Settings**
   - AWS Amplify will auto-detect the `amplify.yml` file
   - Or use these build settings:
     ```yaml
     version: 1
     frontend:
       phases:
         build:
           commands:
             - echo "No build required - static HTML"
       artifacts:
         baseDirectory: /
         files:
           - '**/*'
     ```

4. **Review and Deploy**
   - Review the settings
   - Click "Save and deploy"
   - Wait for deployment to complete (usually 2-5 minutes)

5. **Access Your Site**
   - Once deployed, Amplify provides a URL like: `https://main.xxxxx.amplifyapp.com`
   - You can also set up a custom domain

### Option 2: Deploy via Amplify CLI

1. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. **Initialize Amplify**
   ```bash
   amplify init
   ```
   - Select your environment
   - Choose "Hosting with Amplify Console"

3. **Add Hosting**
   ```bash
   amplify add hosting
   ```
   - Select "Hosting with Amplify Console"
   - Choose "Manual deployment"

4. **Publish**
   ```bash
   amplify publish
   ```

### Option 3: Manual Upload (Quick Test)

1. **Zip the Files**
   ```bash
   # From the project root
   zip -r bhc-docs.zip . -x "*.git*" -x "*.DS_Store" -x "node_modules/*"
   ```

2. **Upload to Amplify**
   - Go to AWS Amplify Console
   - Click "New app" → "Deploy without Git provider"
   - Drag and drop the zip file
   - Wait for deployment

## File Structure for Amplify

```
/
├── index.html                    (Master navigation hub)
├── DEVELOPER_PITCH.html          (Main pitch document)
├── schema.html                   (Schema viewer)
├── schema.prisma                 (Downloadable schema file)
├── design-mockups/
│   ├── index.html                (Mockups hub)
│   ├── ARCHITECTURE_PLAN.html    (Architecture plan)
│   ├── ARCHITECTURE_COMPARISON.html (Architecture comparison)
│   ├── design-system.html        (Design system)
│   ├── auth/                     (3 auth pages)
│   ├── clinician/                (6 clinician pages)
│   ├── provider/                 (3 provider pages)
│   ├── admin/                    (4 admin pages)
│   └── assets/                   (CSS, JS, images)
└── amplify.yml                   (Amplify config)
```

## Important Notes

1. **No Build Required**: All files are static HTML, so no build process is needed
2. **Relative Paths**: All links use relative paths and will work on Amplify
3. **Assets**: Make sure `design-mockups/assets/` folder is included
4. **Custom Domain**: You can add a custom domain in Amplify settings

## Troubleshooting

### 404 Errors
- Ensure `index.html` is in the root directory
- Check that all file paths are relative (not absolute)
- Verify `amplify.yml` has correct baseDirectory: `/`

### Missing Assets
- Ensure `design-mockups/assets/` folder is committed to Git
- Check that CSS/JS files are using relative paths

### Build Failures
- Since this is static HTML, build should always succeed
- If issues occur, check `amplify.yml` configuration

## Custom Domain Setup

1. In Amplify Console, go to your app
2. Click "Domain management"
3. Add your custom domain
4. Follow DNS configuration instructions
5. SSL certificate is automatically provisioned

## Cost Estimate

- **AWS Amplify Hosting**: Free tier includes:
  - 5 GB storage
  - 15 GB data transfer per month
  - 1,000 build minutes per month
  
- **Beyond Free Tier**: ~$0.15/GB storage, $0.15/GB data transfer

For this documentation site, you'll likely stay within the free tier.

## Next Steps

After deployment:
1. Share the Amplify URL with your team
2. Set up a custom domain (optional)
3. Enable branch previews for PR reviews (optional)
4. Set up automatic deployments from main branch
