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
		<strong>To:</strong> Inspector Zachary Wakefield &lt;z.wakefield@calyptra-internal.com&gt;<br>
		<strong>Date:</strong> ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}<br>
		<strong>Subject:</strong> New OSS Candidate - Immediate Review Required
	</div>
	<div class="email-body">
		<p>Inspector Wakefield,</p>
		
		<p>We have a new application for the Office Support Specialist position. Given the... sensitive nature of the materials they would be handling, I'm forwarding this directly to you per Protocol 7.</p>
		
		<p><strong>Applicant:</strong> ${email}<br>
		<strong>Application Time:</strong> ${timestamp}</p>
		
		<p><strong>Their response to the screening question:</strong></p>
		<blockquote style="margin: 15px 0; padding: 10px; background: #f9f9f9; border-left: 3px solid #ccc;">
		"${reason}"
		</blockquote>
		
		<p>I've done the preliminary checks:</p>
		<ul>
			<li>✓ Hair length inquiry sent</li>
			<li>✓ Metal utensil screening initiated</li>
			<li>⚠ Religious affiliation verification pending</li>
			<li>? Custodian helmet preference unknown</li>
		</ul>
		
		<p>Please advise on next steps. The 1971 digitization project is behind schedule and we need someone who won't ask questions about the squeaky filing cabinets.</p>
		
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
		<strong>From:</strong> Inspector Zachary Wakefield &lt;z.wakefield@calyptra-internal.com&gt;<br>
		<strong>To:</strong> Margaret Chen &lt;m.chen@calyptra-internal.com&gt;<br>
		<strong>CC:</strong> Douglas Moore &lt;d.moore@calyptra-internal.com&gt;<br>
		<strong>Date:</strong> ${new Date().toLocaleDateString()} ${new Date(Date.now() + 15*60000).toLocaleTimeString()}<br>
		<strong>Subject:</strong> RE: New OSS Candidate - Immediate Review Required
	</div>
	<div class="email-body">
		<p>Margaret,</p>
		
		<p>I've reviewed the application. Their response shows... interesting qualities. However, I have concerns.</p>
		
		<p>Cross-referencing with the Brittany White incident from 2001, anyone handling the 1971 materials must understand the gravity. These aren't just old files - they're evidence of events that certain agencies would prefer remained buried.</p>
		
		<p>Before proceeding:</p>
		<ol>
			<li>Run them through the standard background check</li>
			<li>Verify no connections to federal agencies (you know which ones)</li>
			<li>Confirm they understand the meaning of discretion</li>
			<li>Most importantly - do they have experience with historical documents? The filing system is... particular.</li>
		</ol>
		
		<p>Douglas, what's your read on this? Your instincts about applicants have been reliable since the '08 incident.</p>
		
		<p>If they pass initial screening, we'll need to discuss the NDA requirements and the special protocols for Building C access.</p>
		
		<div class="signature">
			Inspector Z. Wakefield<br>
			Senior Investigator<br>
			Calyptra Watch & Guard<br>
			"Truth has consequences"
		</div>
	</div>
</div>

<!-- Email 3: Detective Moore's Input -->
<div class="email-container">
	<div class="email-header">
		<strong>From:</strong> Detective Douglas Moore &lt;d.moore@calyptra-internal.com&gt;<br>
		<strong>To:</strong> Inspector Zachary Wakefield &lt;z.wakefield@calyptra-internal.com&gt;<br>
		<strong>CC:</strong> Margaret Chen &lt;m.chen@calyptra-internal.com&gt;<br>
		<strong>Date:</strong> ${new Date().toLocaleDateString()} ${new Date(Date.now() + 45*60000).toLocaleTimeString()}<br>
		<strong>Subject:</strong> RE: New OSS Candidate - My Assessment
	</div>
	<div class="email-body">
		<p>Wakefield, Margaret,</p>
		
		<p>I've done some preliminary research on this candidate. Clean record, but that's not always telling in our line of work.</p>
		
		<p>What interests me is their response. Shows curiosity but also hints at understanding that some things are better left unexamined. That's the kind of mindset we need for someone who'll be handling the sensitive materials.</p>
		
		<p>However, I recommend we proceed with the standard protocol:</p>
		
		<p><strong>Phase 1:</strong> Initial contact and interest gauge<br>
		<strong>Phase 2:</strong> Background verification through our usual channels<br>
		<strong>Phase 3:</strong> If cleared, limited exposure to non-classified materials<br>
		<strong>Phase 4:</strong> Full briefing on the nature of our... historical collection</p>
		
		<p>Margaret, can you draft the initial response? Keep it professional but include the standard coded language so they understand this isn't a typical office position.</p>
		
		<p>One more thing - make sure they understand the filing cabinet situation. After what happened to Brittany, we can't have another incident with someone trying to "fix" things that are better left as they are.</p>
		
		<div class="signature">
			Detective Douglas Moore<br>
			Criminal Investigations Division<br>
			Calyptra Watch & Guard<br>
			"Every secret has a guardian"
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
		
		<p>Dear Applicant,</p>
		
		<p>Thank you for your interest in the Office Support Specialist position at Calyptra Watch & Guard. We have reviewed your application and found your response... intriguing.</p>
		
		<p>As you can see from the attached correspondence, your application has generated significant interest from our senior staff. This level of attention is unusual for entry-level positions, but then again, this is not a typical role.</p>
		
		<p>We would like to schedule an initial conversation to discuss:</p>
		<ul>
			<li>Your experience with confidential materials</li>
			<li>Your comfort level with historical documentation</li>
			<li>Your thoughts on workplace discretion</li>
			<li>Your tolerance for... unusual filing systems</li>
		</ul>
		
		<p>If you remain interested after reviewing this correspondence, please reply with your availability for a phone screening in the next week.</p>
		
		<p><strong>Note:</strong> This position requires absolute confidentiality and may involve materials that some find disturbing. We appreciate your understanding that not all of our clients' cases involve conventional matters.</p>
		
		<div class="signature">
			Margaret Chen<br>
			HR Director<br>
			Calyptra Watch & Guard<br>
			contact@watchandguard.us<br>
			"Some questions are better left unasked"
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
To: Inspector Zachary Wakefield <z.wakefield@calyptra-internal.com>
Subject: New OSS Candidate - Immediate Review Required

Inspector Wakefield,

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

From: Inspector Zachary Wakefield <z.wakefield@calyptra-internal.com>
To: Margaret Chen <m.chen@calyptra-internal.com>
CC: Douglas Moore <d.moore@calyptra-internal.com>
Subject: RE: New OSS Candidate - Review

Margaret,

I've reviewed the application. Their response shows interesting qualities. However, I have concerns.

Cross-referencing with the Brittany White incident from 2001, anyone handling the 1971 materials must understand the gravity. These aren't just old files.

Before proceeding:
1. Run standard background check
2. Verify no federal agency connections
3. Confirm understanding of discretion
4. Experience with historical documents?

Douglas, what's your read on this?

Inspector Z. Wakefield

---

From: Detective Douglas Moore <d.moore@calyptra-internal.com>
Subject: RE: New OSS Candidate - My Assessment

I recommend standard protocol:
Phase 1: Initial contact
Phase 2: Background verification
Phase 3: Limited material exposure
Phase 4: Full briefing if cleared

Margaret, draft the initial response with coded language. And make sure they understand about the filing cabinets.

Detective Douglas Moore

---

FINAL MESSAGE TO APPLICANT:

Dear Applicant,

Thank you for your interest in the Office Support Specialist position. We have reviewed your application and found your response intriguing.

As you can see from the forwarded correspondence, your application has generated significant interest. This is unusual for entry-level positions, but this is not a typical role.

We would like to schedule an initial conversation to discuss your experience with confidential materials and historical documentation.

If you remain interested after reviewing this correspondence, please reply with your availability for a phone screening.

Note: This position requires absolute confidentiality and may involve materials that some find disturbing.

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
