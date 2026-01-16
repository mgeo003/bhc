# Deployment Instructions

## Password Protection

**Access Code:** `Cursor127127`

The site is password-protected. Users must enter the access code on the login page to access any content.

## Zip File Ready

The file `bhc-documentation-hub.zip` is ready for upload to AWS Amplify.

## Upload to AWS Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "New app" → "Deploy without Git provider"
3. Drag and drop `bhc-documentation-hub.zip`
4. Wait for deployment (usually 2-5 minutes)
5. Your site will be available at: `https://xxxxx.amplifyapp.com`

## Entry Point

- **Login Page:** `login.html` (password: Cursor127127)
- **Main Hub:** `index.html` (protected, redirects to login if not authenticated)

## How It Works

1. User visits the site → redirected to `login.html`
2. User enters password: `Cursor127127`
3. Upon successful authentication, redirected to `index.html`
4. Session is stored in browser (sessionStorage)
5. All protected pages check authentication before loading

## Protected Pages

All main documentation pages are protected:
- `index.html` - Main hub
- `DEVELOPER_PITCH.html` - Developer pitch
- `design-mockups/ARCHITECTURE_PLAN.html` - Architecture plan
- `design-mockups/ARCHITECTURE_COMPARISON.html` - Architecture comparison
- `design-mockups/index.html` - Mockups hub

## Notes

- Password is stored in JavaScript (client-side)
- Session persists until browser is closed
- For production, consider implementing server-side authentication
- Current implementation is suitable for documentation access control
