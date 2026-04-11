# Calyptra Securities - ARG Website

A Svelte-based website for the "Calyptra Securities" ARG (Alternate Reality Game) with a cultist simulator theme.

## Overview

This website presents as a professional security company but serves as an entry point for players into your ARG. The job application system is designed to capture player information and automatically send them ARG entry instructions.

## Features

- **Professional Business Website**: Complete with services, about page, and contact information
- **Job Listings**: Multiple fictional security positions
- **Application System**: Collects email and cover letter (no resume required)
- **ARG Integration**: Automatically processes applications for game entry

## Pages

- **Home** (`/`): Hero section and service overview
- **Services** (`/services`): Detailed service descriptions  
- **About** (`/about`): Company background and credentials
- **Jobs** (`/jobs`): Available positions with application links
- **Job Application** (`/jobs/apply`): Application form for players
- **Contact** (`/contact`): Contact information and inquiry form

## How to Process Job Applications

### Current Setup

The job applications are handled by the server action in `/src/routes/jobs/apply/+page.server.ts`. Currently, it:

1. Validates the form data
2. Logs the application to console
3. Generates a unique code word for each applicant
4. Creates personalized ARG entry email content
5. Redirects to success page

### To Implement Full ARG Integration

1. **Database Storage**: Replace console logging with database storage
2. **Email Service**: Integrate with an email provider (e.g., SendGrid, Mailgun)
3. **ARG Portal**: Create the secure portal referenced in the emails

### Email Integration Example

```javascript
// In +page.server.ts, replace the console.log with:
import { sendEmail } from './email-service';

await sendEmail(
  application.email,
  'Application Received - Next Steps',
  emailContent
);
```

### Data Structure

Each application contains:
```typescript
{
  position: string,        // Job position applied for
  email: string,          // Player's email
  coverLetter: string,    // Player's response (key for ARG screening)
  submittedAt: Date,      // Timestamp
  codeWord: string        // Generated unique identifier
}
```

## ARG Integration Points

### 1. Application Screening
The cover letter responses can be screened for:
- Keywords indicating ARG interest
- References to unusual experiences
- Curiosity about unconventional work

### 2. Automated Email Response
The system generates personalized emails with:
- Unique code words for tracking
- Instructions for next phase
- Hints about the ARG nature
- Links to secure portals

### 3. Code Word System
Each applicant gets a unique code like `THRESHOLD-847` based on their email hash. Use this for:
- Tracking player progress
- Personalizing experiences
- Managing game state

## Development

```bash
npm install
npm run dev
```

The site runs on `http://localhost:5173`

## Email Template

The current ARG entry email includes:
- Professional security company tone
- Evaluation codes for tracking
- Mysterious instructions
- Hints about unconventional nature
- Warnings about discretion

## Next Steps for ARG Implementation

1. **Set up email service** (SendGrid, Mailgun, etc.)
2. **Create player database** to track applications
3. **Build ARG portal** for next phase
4. **Implement email templates** with better personalization
5. **Add admin dashboard** to review applications
6. **Create screening algorithms** for automatic vs manual review

## Security Considerations

- All form data should be sanitized
- Email addresses should be validated
- Consider rate limiting on applications
- Store minimal personal data
- Implement proper GDPR compliance if needed

## Customization

To modify the ARG entry flow:
- Edit email templates in `+page.server.ts`
- Modify application questions in `/jobs/apply/+page.svelte`
- Update job descriptions in `/jobs/+page.svelte`
- Adjust company lore in `/about/+page.svelte`

The website maintains a professional appearance while hiding ARG elements in plain sight through:
- Ambiguous service descriptions
- Mysterious testimonials
- Unusual job requirements
- Subtle hints in the copy
