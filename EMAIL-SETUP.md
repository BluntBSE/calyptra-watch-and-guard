# Email Integration Setup

## Option 1: DreamHost SMTP (Recommended for simplicity)

### Install nodemailer
```bash
npm install nodemailer
npm install @types/nodemailer --save-dev
```

### Create email service
```typescript
// src/lib/email.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  host: 'smtp.dreamhost.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER, // your@domain.com
    pass: process.env.EMAIL_PASS  // your email password
  }
});

export async function sendEmail(to: string, subject: string, html: string) {
  try {
    await transporter.sendMail({
      from: '"Calyptra Securities" <noreply@yourdomain.com>',
      to,
      subject,
      html
    });
    console.log('Email sent successfully to:', to);
  } catch (error) {
    console.error('Email error:', error);
    throw error;
  }
}
```

### Environment variables (.env)
```
EMAIL_USER=noreply@yourdomain.com
EMAIL_PASS=your_email_password
```

## Option 2: Third-party service (More reliable)

### SendGrid (Free tier: 100 emails/day)
```bash
npm install @sendgrid/mail
```

```typescript
// src/lib/email.ts
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function sendEmail(to: string, subject: string, html: string) {
  const msg = {
    to,
    from: 'noreply@yourdomain.com',
    subject,
    html
  };
  
  await sgMail.send(msg);
}
```

### Mailgun (Free tier: 5,000 emails/month)
```bash
npm install mailgun-js
```

## Data Storage Options

### Option 1: Simple File Storage
```typescript
// src/lib/storage.ts
import { writeFile, appendFile } from 'fs/promises';
import path from 'path';

export async function saveApplication(application: JobApplication) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    ...application
  };
  
  // Append to CSV file
  const csvLine = `"${logEntry.timestamp}","${logEntry.email}","${logEntry.position}","${logEntry.coverLetter.replace(/"/g, '""')}"\n`;
  await appendFile('applications.csv', csvLine);
  
  // Also save individual files
  const filename = `application-${Date.now()}-${Math.random().toString(36).substr(2, 9)}.json`;
  await writeFile(path.join('applications', filename), JSON.stringify(logEntry, null, 2));
}
```

### Option 2: SQLite Database (Better for queries)
```bash
npm install sqlite3
npm install @types/sqlite3 --save-dev
```

```typescript
// src/lib/database.ts
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function initDatabase() {
  const db = await open({
    filename: './applications.db',
    driver: sqlite3.Database
  });
  
  await db.exec(`
    CREATE TABLE IF NOT EXISTS applications (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL,
      position TEXT NOT NULL,
      cover_letter TEXT NOT NULL,
      code_word TEXT NOT NULL,
      submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      email_sent BOOLEAN DEFAULT FALSE
    )
  `);
  
  return db;
}

export async function saveApplication(application: JobApplication & { codeWord: string }) {
  const db = await initDatabase();
  await db.run(
    'INSERT INTO applications (email, position, cover_letter, code_word) VALUES (?, ?, ?, ?)',
    [application.email, application.position, application.coverLetter, application.codeWord]
  );
}
```
