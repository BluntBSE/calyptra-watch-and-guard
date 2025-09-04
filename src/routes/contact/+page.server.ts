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
		const name = data.get('name')?.toString();
		const email = data.get('email')?.toString();
		const phone = data.get('phone')?.toString();
		const matter = data.get('matter')?.toString();
		const message = data.get('message')?.toString();
		const confidentiality = data.get('confidentiality')?.toString();

		if (!name || !email || !matter || !message) {
			return fail(400, { error: 'Please complete all required fields before submitting.' });
		}

		if (!email.includes('@')) {
			return fail(400, { error: 'Please provide a valid correspondence address.' });
		}

		// Generate timestamp
		const timestamp = new Date().toLocaleString('en-US', {
			timeZone: 'America/New_York',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		});

		// Create professional contact form email
		const contactEmail = `
Subject: New Client Inquiry - ${matter}
From: Calyptra Watch & Guard <${process.env.EMAIL_FROM}>
To: Contact <contact@watchandguard.us>
Date: ${timestamp}

═══════════════════════════════════════════════════════════════════════════════════════════
                              CALYPTRA WATCH & GUARD
                                Client Inquiry Form
                              Received: ${timestamp}
═══════════════════════════════════════════════════════════════════════════════════════════

CLIENT INFORMATION:
───────────────────────────────────────────────────────────────────────────────────────────
Name:               ${name}
Email:              ${email}
Phone:              ${phone || 'Not provided'}
Matter Type:        ${matter}
Confidentiality:    ${confidentiality === 'elevated' ? 'ELEVATED - Requires Special Handling' : 'Standard'}

INQUIRY DETAILS:
───────────────────────────────────────────────────────────────────────────────────────────
${message}

═══════════════════════════════════════════════════════════════════════════════════════════
                        This inquiry has been automatically logged.
                     Next steps will be determined by case assessment team.
═══════════════════════════════════════════════════════════════════════════════════════════

──────────────────────────────────────────────────────────────────────────────────────────
Calyptra Watch & Guard - Confidential Private Investigation Services
Est. 1923 | "Aliis Si Licet, Tibi Non Licet"
──────────────────────────────────────────────────────────────────────────────────────────
`;

		try {
			// Send to both email addresses using SendGrid
			await sgMail.send({
				from: process.env.EMAIL_FROM,
				to: ['contact@watchandguard.us', 'to.rowan.meyer@gmail.com'],
				subject: `New Client Inquiry - ${matter}`,
				text: contactEmail
			});

			// Save contact inquiry to database
			try {
				await saveApplicant(email, `CONTACT: ${matter} | ${name} | ${phone || 'No phone'} | ${message.substring(0, 200)}...`);
				console.log('Contact saved to database:', email);
			} catch (dbError) {
				console.error('Database error:', dbError);
				// Don't fail the form if database save fails
			}

			return { 
				success: true, 
				message: 'Your confidential inquiry has been received and logged. We will review your matter and respond within 48 business hours.' 
			};
		} catch (error) {
			console.error('Contact form error:', error);
			return fail(500, { 
				error: 'Your inquiry could not be transmitted at this time. Please try again or contact us directly at contact@watchandguard.us' 
			});
		}
	}
};
