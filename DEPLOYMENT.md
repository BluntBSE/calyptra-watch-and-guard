# Deployment Guide for DreamHost

## Prerequisites
- DreamHost VPS or Dedicated hosting
- Domain name configured
- SSH access to your server

## Step 1: Prepare Your App for Production

### Update package.json
```json
{
  "scripts": {
    "build": "vite build",
    "start": "node build",
    "dev": "vite dev",
    "preview": "vite preview"
  }
}
```

### Install production dependencies
```bash
npm install nodemailer pm2
```

### Create production environment file
```bash
# .env.production
NODE_ENV=production
EMAIL_USER=noreply@yourdomain.com
EMAIL_PASS=your_password
ORIGIN=https://yourdomain.com
```

## Step 2: Build for Production
```bash
npm run build
```

## Step 3: Upload to DreamHost

### Option A: Using SSH/SCP
```bash
# Build locally
npm run build

# Upload to server
scp -r build/ user@server.dreamhost.com:/path/to/your/domain/
scp package*.json user@server.dreamhost.com:/path/to/your/domain/
scp -r node_modules/ user@server.dreamhost.com:/path/to/your/domain/
```

### Option B: Git deployment (Recommended)
```bash
# On your server
git clone https://github.com/yourusername/calyptra-2.git
cd calyptra-2
npm install
npm run build
```

## Step 4: Start the Application

### Using PM2 (Process Manager)
```bash
# Install PM2 globally
npm install -g pm2

# Start your app
pm2 start build/index.js --name calyptra-securities

# Save PM2 configuration
pm2 save

# Set up auto-start on boot
pm2 startup
```

### Configure reverse proxy (if needed)
If using Apache, create `.htaccess`:
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://localhost:3000/$1 [P,L]
```

## Step 5: Set up Email

### Create email account on DreamHost
1. Go to DreamHost Panel > Mail > Manage Email
2. Create: noreply@yourdomain.com
3. Note the SMTP settings

### Configure environment variables
```bash
# On server
echo "EMAIL_USER=noreply@yourdomain.com" >> .env.production
echo "EMAIL_PASS=your_password" >> .env.production
```

## Step 6: Test Everything

### Test the application
```bash
curl https://yourdomain.com
```

### Test email functionality
Submit a job application and check:
1. Console logs in PM2: `pm2 logs calyptra-securities`
2. Email delivery
3. Data storage

## Maintenance Commands

### View logs
```bash
pm2 logs calyptra-securities
```

### Restart application
```bash
pm2 restart calyptra-securities
```

### Update application
```bash
git pull
npm install
npm run build
pm2 restart calyptra-securities
```

### Monitor resource usage
```bash
pm2 monit
```

## Alternative: Docker Deployment (Optional)

If you prefer Docker:

### Dockerfile
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY build ./build
COPY static ./static
EXPOSE 3000
CMD ["node", "build"]
```

### Deploy with Docker
```bash
docker build -t calyptra-securities .
docker run -d -p 3000:3000 --name calyptra-app calyptra-securities
```

## Security Considerations

### Environment Variables
- Never commit `.env` files to git
- Use strong passwords for email accounts
- Consider using app passwords instead of main email password

### SSL Certificate
- Enable SSL through DreamHost panel
- Update ORIGIN in environment variables to use https://

### Rate Limiting
Consider adding rate limiting to prevent spam applications:
```typescript
// Basic rate limiting example
const submissionTimes = new Map();

export const actions = {
  default: async ({ request, getClientAddress }) => {
    const clientIP = getClientAddress();
    const now = Date.now();
    const lastSubmission = submissionTimes.get(clientIP);
    
    if (lastSubmission && now - lastSubmission < 60000) { // 1 minute cooldown
      return fail(429, { error: 'Please wait before submitting another application.' });
    }
    
    submissionTimes.set(clientIP, now);
    // ... rest of your code
  }
};
```
