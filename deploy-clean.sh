#!/bin/bash

# Clean deployment script for production
echo "🔍 Deploying Calyptra Watch & Guard..."

# Check if .env file exists, if not create template
if [ ! -f .env ]; then
    echo "📧 Creating .env template..."
    cat > .env << EOF
EMAIL_USER=contact@watchandguard.us
EMAIL_PASS=YOUR_EMAIL_PASSWORD_HERE
EMAIL_HOST=smtp.dreamhost.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_TO=contact@watchandguard.us
NODE_ENV=production
EOF
    echo "⚠️  Please edit .env file with your actual credentials"
    exit 1
fi

echo "✅ Environment variables loaded from .env"

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# Build the application
echo "🏗️  Building application..."
npm run build

# Initialize database if it doesn't exist
echo "🗄️  Setting up database..."
if [ ! -f applicants.db ]; then
    node init-db.cjs
    echo "✅ Database initialized"
else
    echo "✅ Database already exists"
fi

echo "✅ Deployment complete!"
echo "📧 Email notifications configured"
echo "🌐 Application ready"
echo ""
echo "To start the application:"
echo "  npm start"
echo "  OR"
echo "  pm2 start build/index.js --name calyptra-app"
