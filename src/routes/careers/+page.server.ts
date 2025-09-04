import { fail } from '@sveltejs/kit';
import sgMail from '@sendgrid/mail';
import type { Actions } from './$types';
import dotenv from 'dotenv';
import { saveApplicant } from '$lib/database.js';

// Load environment variables
dotenv.config();

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email')?.toString();
		const reason = data.get('reason')?.toString();

		if (!email || !reason) {
			return fail(400, { error: 'Email and reason are required' });
		}

		// Debug: Log SendGrid config
		console.log('SendGrid config:', {
			hasApiKey: !!process.env.SENDGRID_API_KEY,
			from: process.env.EMAIL_FROM
		});

		// Generate timestamp
		const timestamp = new Date().toLocaleString('en-US', {
			timeZone: 'America/New_York',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		});

		// Create a believable email thread that looks like internal correspondence
		const emailThread = `
<!DOCTYPE html>
<html>
<head>
	<style>
		body { font-family: 'Courier New', monospace; background: #f8f8f8; color: #333; padding: 20px; line-height: 1.4; }
		.email-container { background: white; border: 1px solid #ddd; margin-bottom: 20px; }
		.email-header { background: #f0f0f0; padding: 10px; border-bottom: 1px solid #ddd; font-size: 12px; }
		.email-body { padding: 15px; }
		.forward-line { color: #666; font-style: italic; margin: 10px 0; }
		.signature { color: #666; font-size: 11px; margin-top: 15px; border-top: 1px solid #eee; padding-top: 10px; }
	</style>
</head>
<body>

<!-- Email 1: HR to Inspector -->
<div class="email-container">
	<div class="email-header">
		<strong>From:</strong> Margaret Chen &lt;m.chen@calyptra-internal.com&gt;<br>
		<strong>To:</strong> Inspector Zachary Bakefield &lt;z.Bakefield@calyptra-internal.com&gt;<br>
		<strong>Date:</strong> ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}<br>
		<strong>Subject:</strong> New OSS Candidate - Immediate Review Required
	</div>
	<div class="email-body">
		<p>Response A</p>

		<div class="signature">
			Margaret Chen<br>
			HR Director<br>
			Calyptra Watch & Guard<br>
			"Some doors should remain closed"
		</div>
	</div>
</div>

<!-- Email 2: Inspector's Reply -->
<div class="email-container">
	<div class="email-header">
		<strong>From:</strong> Inspector Zachary Bakefield &lt;z.Bakefield@calyptra-internal.com&gt;<br>
		<strong>To:</strong> Margaret Chen &lt;m.chen@calyptra-internal.com&gt;<br>
		<strong>CC:</strong> Douglas Moore &lt;d.moore@calyptra-internal.com&gt;<br>
		<strong>Date:</strong> ${new Date().toLocaleDateString()} ${new Date(Date.now() + 15*60000).toLocaleTimeString()}<br>
		<strong>Subject:</strong> RE: New OSS Candidate - Immediate Review Required
	</div>
	<div class="email-body">
	<p>Response B</p>
	</div>
</div>

<!-- Email 3: Detective Moore's Input -->
<div class="email-container">
	<div class="email-header">
		<strong>From:</strong> Detective Douglas Moore &lt;d.moore@calyptra-internal.com&gt;<br>
		<strong>To:</strong> Inspector Zachary Bakefield &lt;z.Bakefield@calyptra-internal.com&gt;<br>
		<strong>CC:</strong> Margaret Chen &lt;m.chen@calyptra-internal.com&gt;<br>
		<strong>Date:</strong> ${new Date().toLocaleDateString()} ${new Date(Date.now() + 45*60000).toLocaleTimeString()}<br>
		<strong>Subject:</strong> RE: New OSS Candidate - My Assessment
	</div>
	<div class="email-body">
		<p>Response C</p>
		<div class="signature">
			Detective Douglas Moore<br>
			Criminal Investigations Division<br>
			Calyptra Watch & Guard<br>
		</div>
	</div>
</div>

<!-- Final Email: HR Follow-up -->
<div class="email-container">
	<div class="email-header">
		<strong>From:</strong> Margaret Chen &lt;m.chen@calyptra-internal.com&gt;<br>
		<strong>To:</strong> ${email}<br>
		<strong>Date:</strong> ${new Date().toLocaleDateString()} ${new Date(Date.now() + 75*60000).toLocaleTimeString()}<br>
		<strong>Subject:</strong> Your Recent Application - Next Steps
	</div>
	<div class="email-body">
		<div class="forward-line">
			--- FORWARDED MESSAGE ---<br>
			<em>Note: This email thread was automatically forwarded as part of our transparency initiative. Please disregard any references to internal protocols.</em>
		</div>
		
		<p>Response 0</p>

		<div class="signature">
			Margaret Chen<br>
			HR Director<br>
			Calyptra Watch & Guard<br>
			contact@watchandguard.us<br>
		</div>
	</div>
</div>

</body>
</html>
		`;

		try {
			console.log('SendGrid API ready');

			const mailOptions = {
				from: `"Margaret Chen - HR Director" <${process.env.EMAIL_FROM}>`,
				to: email, // Send to the applicant
				// Uncomment the line below and add your personal email to test delivery
				// to: 'your-personal-email@gmail.com',
				subject: `Re: Your Application - Internal Review Complete`,
				html: emailThread,
				text: `
=== EMAIL THREAD FORWARDED ===

From: Margaret Chen <m.chen@calyptra-internal.com>
To: Inspector Zachary Bakefield <z.bakefield@calyptra-internal.com>
Subject: New OSS Candidate - Immediate Review Required

Inspector Bakefield,

We have a new application for the Office Support Specialist position. Given the sensitive nature of the materials they would be handling, I'm forwarding this directly to you per Protocol 7.

Applicant: ${email}
Application Time: ${timestamp}

Their response to the screening question:
"${reason}"

I've done the preliminary checks:
✓ Hair length inquiry sent
✓ Metal utensil screening initiated
⚠ Religious affiliation verification pending
? Custodian helmet preference unknown

Please advise on next steps. The 1971 digitization project is behind schedule and we need someone who won't ask questions about the squeaky filing cabinets.

Margaret Chen, HR Director

---

From: Inspector Zachary Bakefield <z.Bakefield@calyptra-internal.com>
To: Margaret Chen <m.chen@calyptra-internal.com>
CC: Douglas Moore <d.moore@calyptra-internal.com>
Subject: RE: New OSS Candidate - Review

RESPONSE D

---

From: Detective Douglas Moore <d.moore@calyptra-internal.com>
Subject: RE: New OSS Candidate - My Assessment

RESPONSE E

Detective Douglas Moore

---

LAST RESPONSE?

Margaret Chen
HR Director
Calyptra Watch & Guard
				`
			};

			console.log('Sending email with options:', {
				from: mailOptions.from,
				to: mailOptions.to,
				subject: mailOptions.subject
			});

			const info = await sgMail.send(mailOptions);
			
			console.log('Email sent successfully!');
			console.log('Message ID:', info[0].headers?.['x-message-id']);
			console.log('Response:', info[0].statusCode);
			console.log('Accepted:', [email]);
			console.log('Rejected:', []);

			// Save to database after successful email send
			try {
				await saveApplicant(email, reason);
				console.log('✅ Applicant saved to database');
			} catch (dbError) {
				console.error('⚠️  Database save failed, but email was sent:', dbError);
				// Don't fail the request - email was sent successfully
			}

			return { success: true, message: 'Application submitted successfully. You will be contacted if you meet our... particular requirements.' };

		} catch (error) {
			console.error('Failed to send email:', error);
			if (error instanceof Error) {
				console.error('Error details:', {
					message: error.message,
					name: error.name,
					stack: error.stack
				});
			}
			return fail(500, { error: 'Failed to submit application. Please try again later.' });
		}
	}
};
