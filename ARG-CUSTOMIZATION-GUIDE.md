# CALYPTRA WATCH & GUARD ARG - CUSTOMIZATION GUIDE

This guide covers how to customize all aspects of your ARG (Alternate Reality Game) website.

## 🎯 QUICK OVERVIEW

Your ARG has these main components:
1. **Public Website** - Professional front for Calyptra Watch & Guard PI agency
2. **Job Application Portal** - Mysterious recruitment system with email automation
3. **Secret Archive Access** - Hidden document repository behind password protection
4. **Database System** - Tracks all participants for follow-up marketing

---

## 🏢 PUBLIC WEBSITE CUSTOMIZATION

### Main Layout (`src/routes/+layout.svelte`)
**Company Name & Branding:**
```svelte
<!-- Line ~20: Change company name -->
<h1><a href="/">Calyptra Watch & Guard</a></h1>

<!-- Line ~30: Update navigation menu -->
<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/services">Services</a>
    <a href="/contact">Contact</a>
    <a href="/careers">Careers</a>  <!-- This leads to your ARG entry point -->
</nav>

<!-- Line ~50: Footer contact info -->
<p>📧 contact@watchandguard.us | 📞 (555) 123-4567</p>
<p>📍 San Francisco, CA | Licensed & Bonded</p>
```

**Styling Changes:**
```css
/* Line ~100: Main color scheme */
:root {
    --primary-bg: #0a0a0a;      /* Dark background */
    --primary-text: #f0f0f0;    /* Light text */
    --accent-color: #8b7355;    /* Old money gold */
    --border-color: #333;       /* Subtle borders */
}

/* Line ~120: Typography */
body {
    font-family: 'Times New Roman', serif;  /* Change to your preferred font */
    background: var(--primary-bg);
    color: var(--primary-text);
}
```

### Homepage (`src/routes/+page.svelte`)
**Hero Section:**
```svelte
<!-- Line ~10: Main headline -->
<h1>Professional Investigation Services</h1>
<p>Discreet. Thorough. Confidential.</p>

<!-- Line ~20: Service descriptions -->
<div class="service">
    <h3>Corporate Security</h3>
    <p>Your description here...</p>
</div>
```

### About Page (`src/routes/about/+page.svelte`)
**Company Story:**
```svelte
<!-- Line ~15: Company history -->
<h2>Our Story</h2>
<p>Founded in 1971, Calyptra Watch & Guard has been...</p>

<!-- Line ~30: Team members (fake but believable) -->
<div class="team-member">
    <h3>Margaret Chen</h3>
    <p>HR Director & Operations</p>
</div>
```

### Services Page (`src/routes/services/+page.svelte`)
**Service Offerings:**
```svelte
<!-- Line ~15: List your fake services -->
<div class="service-card">
    <h3>Background Investigations</h3>
    <p>Comprehensive background checks...</p>
</div>
```

### Contact Page (`src/routes/contact/+page.svelte`)
**Contact Information:**
```svelte
<!-- Line ~15: Update contact details -->
<p><strong>Email:</strong> contact@watchandguard.us</p>
<p><strong>Phone:</strong> (555) 123-4567</p>
<p><strong>Address:</strong> Your fake address</p>
```

---

## 💼 JOB APPLICATION PORTAL (ARG ENTRY POINT)

### Job Listing (`src/routes/careers/+page.svelte`)
**Job Description:**
```svelte
<!-- Line ~20: Job title and requirements -->
<h2>Office Support Specialist</h2>
<p>We seek candidates comfortable with:</p>
<ul>
    <li>Historical document digitization</li>
    <li>Confidential file management</li>
    <li>Working with sensitive materials from 1971 archives</li>
    <!-- Add your cryptic requirements here -->
</ul>

<!-- Line ~40: Application form -->
<form method="POST" use:enhance>
    <input name="email" type="email" placeholder="Your email" required />
    <textarea name="reason" placeholder="Why do you want this unusual position?" required></textarea>
    <button type="submit">Submit Application</button>
</form>
```

### Email Response System (`src/routes/careers/+page.server.ts`)
**SMTP Configuration:**
```typescript
// Line ~15: Email settings (update in .env file)
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-password
EMAIL_HOST=smtp.your-provider.com
EMAIL_PORT=587
```

**Email Thread Content:**
```typescript
// Line ~50: Customize the mysterious email thread
const emailThread = `
<!-- Your custom HTML email content -->
<h3>INTERNAL CORRESPONDENCE - CONFIDENTIAL</h3>
<p>From: Margaret Chen HR Director</p>
<p>To: Inspector Wakefield</p>
<p>Subject: New Applicant Review</p>

<p>We have a new candidate for the 1971 project...</p>
<!-- Create your believable internal emails here -->
`;
```

---

## 🔐 SECRET ARCHIVE ACCESS

### Login Portal (`src/routes/access/+page.svelte`)
**Access Code:**
```typescript
// In src/routes/access/+page.server.ts, Line ~3:
const ACCESS_CODE = 'ARCHIVE1971'; // Change this password
```

**Terminal Styling:**
```css
/* Line ~100: Terminal appearance */
.terminal-window {
    background: #000;
    border: 2px solid #0f0;  /* Change terminal color scheme */
    color: #0f0;             /* Green terminal text */
}

/* Line ~150: ASCII logo */
.ascii-logo pre {
    /* Replace with your custom ASCII art */
}
```

### Archive Interface (`src/routes/archive/+page.svelte`)
**System Branding:**
```svelte
<!-- Line ~25: Archive system title -->
<h1>CWG ARCHIVE MONITOR v3.2.1</h1>

<!-- Line ~35: Status information -->
<span class="status-item">USER: ARCHIVE_ADMIN</span>
<span class="status-item">SESSION: {new Date().toLocaleString()}</span>
```

**Fake Archive Sections:**
```svelte
<!-- Line ~60: Modify disabled sections -->
<li class="nav-item disabled">Personnel Files</li>
<li class="nav-item disabled">Case Reports</li>
<li class="nav-item disabled">Financial Records</li>
<!-- Add/remove fake sections as needed -->

<!-- Line ~70: Your active section -->
<li class="nav-item active-section" on:click={() => toggleSection('digitization')}>
    1971 Digitization Project ▼
</li>
```

**PDF Downloads:**
```svelte
<!-- Line ~110: Customize downloadable documents -->
<button on:click={() => downloadPDF('case-report-1971-001.pdf')}>
    📄 Case Report 1971-001: "The Whitmore Incident"
</button>

<button on:click={() => downloadPDF('evidence-log-1971-summer.pdf')}>
    📄 Evidence Log: Summer 1971 Operations
</button>
<!-- Add more documents as needed -->
```

---

## 📄 PDF CONTENT MANAGEMENT

### Adding PDFs
**File Locations:**
```bash
# Development (local)
static/pdfs/your-document.pdf

# Production (server)
/var/www/calyptra/build/client/pdfs/your-document.pdf
```

**Expected Filenames:**
- `case-report-1971-001.pdf`
- `evidence-log-1971-summer.pdf`
- `interview-transcripts-batch-3.pdf`
- `site-photos-restricted.pdf`
- `final-report-1971-classified.pdf`

**To Use Different Names:**
```svelte
<!-- Update in src/routes/archive/+page.svelte -->
<button on:click={() => downloadPDF('your-custom-name.pdf')}>
    📄 Your Custom Document Title
</button>
```

---

## 🗄️ DATABASE & EMAIL MANAGEMENT

### Viewing Applicants
```bash
# Check all applications
node check-db.cjs

# Export opted-in users (for marketing)
node export-opted-in.cjs

# Export all users (for analysis)
node export-all.cjs
```

### Managing Opt-in Status
```bash
# Update someone's email preferences
# Edit update-opt-in.cjs, then run:
node update-opt-in.cjs
```

### Database Schema
```sql
-- Main table: applicants
id INTEGER PRIMARY KEY
email TEXT NOT NULL
reason TEXT NOT NULL
submitted_at DATETIME
opt_in_communication TEXT DEFAULT 'yes'
status TEXT DEFAULT 'new'
follow_up_count INTEGER DEFAULT 0
last_contacted DATETIME
notes TEXT
ip_address TEXT
user_agent TEXT
```

---

## 🎨 STYLING CUSTOMIZATION

### Color Schemes
**Current Theme (Old Money/Typewriter):**
```css
/* Dark, expensive, mysterious */
--bg-primary: #0a0a0a;
--text-primary: #f0f0f0;
--accent-gold: #8b7355;
--border-subtle: #333;
```

**Alternative Themes:**
```css
/* Corporate Blue */
--bg-primary: #1a1a2e;
--text-primary: #eee;
--accent-color: #16213e;

/* Vintage Green Terminal */
--bg-primary: #000;
--text-primary: #0f0;
--accent-color: #0a0;

/* Warm Sepia */
--bg-primary: #2c1810;
--text-primary: #f4e4bc;
--accent-color: #8b4513;
```

### Typography
**Current Fonts:**
```css
/* Main site */
font-family: 'Times New Roman', serif;

/* Terminal/Archive sections */
font-family: 'Courier New', monospace;
```

**Alternative Font Stacks:**
```css
/* Professional */
font-family: 'Georgia', 'Times', serif;

/* Modern */
font-family: 'Helvetica Neue', 'Arial', sans-serif;

/* Mysterious */
font-family: 'Garamond', 'Times New Roman', serif;
```

---

## 🚀 DEPLOYMENT CONFIGURATION

### Environment Variables (`.env` file)
```bash
# Email Configuration
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-secure-password
EMAIL_HOST=smtp.your-provider.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_TO=your-email@domain.com
NODE_ENV=production
```

### Deployment Script (`deploy-clean.sh`)
```bash
#!/bin/bash
# Modify this script for your server setup
echo "🔍 Deploying Calyptra Watch & Guard..."

# Install dependencies
npm ci --only=production

# Build application
npm run build

# Initialize database
node init-db.cjs

# Start with PM2 (or your process manager)
pm2 start build/index.js --name calyptra-app
```

---

## 🔧 DEVELOPMENT WORKFLOW

### Local Development
```bash
# Start development server
npm run dev

# Check database
node check-db.cjs

# Test email system (update debug@debug.com to your email)
# Visit: http://localhost:5173/careers

# Test archive access
# Visit: http://localhost:5173/access
# Password: ARCHIVE1971
```

### Building for Production
```bash
# Build the application
npm run build

# Test production build
npm run preview
```

### Git Management
```bash
# Add changes (sensitive files are auto-ignored)
git add *
git commit -m "Update ARG content"
git push

# Files that are safely ignored:
# - .env (credentials)
# - *.db (user data)
# - *.csv (exports)
# - deploy.sh (has passwords)
```

---

## 📝 CONTENT CHECKLIST

### Before Going Live:
- [ ] Update company name and branding
- [ ] Customize job description with your ARG hooks
- [ ] Create mysterious email thread content
- [ ] Set secure access password for archive
- [ ] Upload your PDF documents
- [ ] Test email system with real SMTP
- [ ] Update contact information
- [ ] Customize color scheme and fonts
- [ ] Test full user journey: website → apply → email → archive → PDFs

### Ongoing Management:
- [ ] Monitor applicant database
- [ ] Export opted-in users for follow-up campaigns
- [ ] Update PDF content as ARG progresses
- [ ] Track archive access logs
- [ ] Respond to any direct emails from participants

---

## 🆘 TROUBLESHOOTING

### Common Issues:
**Email not sending:** Check SMTP settings in `.env`
**Archive login fails:** Verify password in `src/routes/access/+page.server.ts`
**PDFs not downloading:** Ensure files exist in `static/pdfs/`
**Database errors:** Run `node debug-db.cjs` to check structure

### Support:
- Check console logs for detailed error messages
- Test each component individually
- Verify environment variables are loaded
- Ensure all required packages are installed

---

*Last updated: September 2025*
*For: Calyptra Watch & Guard ARG System*
