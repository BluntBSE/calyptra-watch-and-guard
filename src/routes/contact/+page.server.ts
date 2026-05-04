import { fail } from "@sveltejs/kit";
import sgMail from "@sendgrid/mail";
import type { Actions } from "./$types";
import dotenv from "dotenv";
import { saveApplicant } from "$lib/database.js";

// Load environment variables
dotenv.config();

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const name = data.get("name")?.toString();
        const email = data.get("email")?.toString();
        const phone = data.get("phone")?.toString();
        const matter = data.get("matter")?.toString();
        const message = data.get("message")?.toString();
        const confidentiality = data.get("confidentiality")?.toString();

        if (!name || !email || !matter || !message) {
            return fail(400, {
                error: "Please complete all required fields before submitting.",
            });
        }

        if (!email.includes("@")) {
            return fail(400, {
                error: "Please provide a valid correspondence address.",
            });
        }

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

<div class="email-container">
	<div class="email-header">
		<strong>From:</strong> Margaret Chen &lt;m.chen@calyptra-internal.com&gt;<br>
		<strong>To:</strong> Brittany White &lt;b.white@calyptra-internal.com&gt;, Douglas Moore &lt;d.moore@calyptra-internal.com&gt;, Gregory Glass &lt;g.glass@calyptra-internal.com&gt;<br>
		<strong>CC:</strong> ${email}<br>
		<strong>Date:</strong> ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}<br>
		<strong>Subject:</strong> RE: Contact Form Submission - ${matter}
	</div>
	<div class="email-body">
		<p>While reviewing this contact form submission, I notice the job posting is still up on the website. I thought we agreed that we were going to see if the C-----e could handle the data entry stuff for us for now? I don't appreciate that people are still able to apply right now.</p>

		<p>Please let me know when this will be resolved.</p>

		<div class="signature">
			Margaret Chen<br>
			Chief Detective<br>
			Calyptra Watch &amp; Guard<br>
			m.chen@calyptra-internal.com
		</div>
	</div>
</div>

<div class="email-container">
	<div class="email-header">
		<strong>From:</strong> Brittany White &lt;b.white@calyptra-internal.com&gt;<br>
		<strong>To:</strong> Margaret Chen &lt;m.chen@calyptra-internal.com&gt;, ${email}<br>
		<strong>Date:</strong> ${new Date().toLocaleDateString()} ${new Date(Date.now() + 12 * 60000).toLocaleTimeString()}<br>
		<strong>Subject:</strong> RE: Contact Form Submission - ${matter}
	</div>
	<div class="email-body">
		<p>Did you intend to CC the candidate on this email, Margaret? And the rest of the department? In any case, as you can see, we are apparently no longer hiring for this role at this time, but that may change in the near future. Please keep an eye on our website if you are still interested in a role with us.</p>

		<div class="signature">
			Brittany White<br>
			HR Specialist<br>
			Calyptra Watch &amp; Guard<br>
			b.white@calyptra-internal.com
		</div>
	</div>
</div>

<div class="email-container">
	<div class="email-header">
		<strong>From:</strong> Douglas Moore &lt;d.moore@calyptra-internal.com&gt;<br>
		<strong>To:</strong> Margaret Chen &lt;m.chen@calyptra-internal.com&gt;, Brittany White &lt;b.white@calyptra-internal.com&gt;, Gregory Glass &lt;g.glass@calyptra-internal.com&gt;, ${email}<br>
		<strong>Date:</strong> ${new Date().toLocaleDateString()} ${new Date(Date.now() + 34 * 60000).toLocaleTimeString()}<br>
		<strong>Subject:</strong> RE: Contact Form Submission - ${matter}
	</div>
	<div class="email-body">
		<p>Hey guys,</p>

		<p>Is the password to the intranet still PEAC0CK123? I can't log in.</p>

		<div class="signature">
			Douglas Moore Jr.<br>
			Calyptra Watch &amp; Guard<br>
			d.moore@calyptra-internal.com
		</div>
	</div>
</div>

<div class="email-container">
	<div class="email-header">
		<strong>From:</strong> Gregory Glass &lt;g.glass@calyptra-internal.com&gt;<br>
		<strong>To:</strong> Margaret Chen &lt;m.chen@calyptra-internal.com&gt;, Brittany White &lt;b.white@calyptra-internal.com&gt;, Douglas Moore &lt;d.moore@calyptra-internal.com&gt;, ${email}<br>
		<strong>Date:</strong> ${new Date().toLocaleDateString()} ${new Date(Date.now() + 41 * 60000).toLocaleTimeString()}<br>
		<strong>Subject:</strong> RE: Contact Form Submission - ${matter}
	</div>
	<div class="email-body">
		<p>DOUGLAS you CANNOT put passwords in emails like this! Now I have to change it! I'm limiting your access to the Litvin project you're working on. Please just log in to <a href="https://watchandguard.us/access">https://watchandguard.us/access</a> with the password "ARCHIVE1971".</p>

		<div class="signature">
			Gregory Glass<br>
			IT Specialist<br>
			Calyptra Watch &amp; Guard<br>
			g.glass@calyptra-internal.com
		</div>
	</div>
</div>

<div class="email-container">
	<div class="email-header">
		<strong>From:</strong> Brittany White &lt;b.white@calyptra-internal.com&gt;<br>
		<strong>To:</strong> Margaret Chen &lt;m.chen@calyptra-internal.com&gt;, Gregory Glass &lt;g.glass@calyptra-internal.com&gt;, Douglas Moore &lt;d.moore@calyptra-internal.com&gt;, ${email}<br>
		<strong>Date:</strong> ${new Date().toLocaleDateString()} ${new Date(Date.now() + 48 * 60000).toLocaleTimeString()}<br>
		<strong>Subject:</strong> RE: Contact Form Submission - ${matter}
	</div>
	<div class="email-body">
		<p>The candidate is still in this thread. Let's continue this on my new email, please.</p>
		<p>PS: Gregory, didn't you just include a password in an email?</p>
		<div class="signature">
			Brittany White<br>
			HR Specialist<br>
			Calyptra Watch &amp; Guard<br>
			b.white@calyptra-internal.com
		</div>
	</div>
</div>

</body>
</html>
		`;

        try {
            const mailOptions = {
                from: `"Brittany White - HR" <${process.env.EMAIL_FROM}>`,
                to: email, // Send to the contact form submitter
                subject: `RE: Contact Form Submission - ${matter}`,
                html: emailThread,
                text: `
From: Margaret Chen <m.chen@calyptra-internal.com>
To: Brittany White <b.white@calyptra-internal.com>, Douglas Moore <d.moore@calyptra-internal.com>, Gregory Glass <g.glass@calyptra-internal.com>
CC: ${email}
Subject: RE: Contact Form Submission - ${matter}

While reviewing this contact form submission, I notice the job posting is still up on the website. I thought we agreed that we were going to see if the C-----e could handle the data entry stuff for us for now? I don't appreciate that people are still able to apply right now.

Please let me know when this will be resolved.

Margaret Chen, Chief Detective

---

From: Brittany White <b.white@calyptra-internal.com>
To: Margaret Chen, ${email}
Subject: RE: Contact Form Submission - ${matter}

Did you intend to CC the candidate on this email, Margaret? In any case, as you can see, we are apparently no longer hiring for this role at this time, but that may change in the near future. Please keep an eye on our website if you are still interested in a role with us.

Brittany White, HR Specialist

---

From: Douglas Moore <d.moore@calyptra-internal.com>
To: Margaret Chen, Brittany White, Gregory Glass, ${email}
Subject: RE: Contact Form Submission - ${matter}

Hey guys,

Is the password to the intranet still PEAC0CK123? I can't log in.

Douglas Moore Jr.

---

From: Gregory Glass <g.glass@calyptra-internal.com>
To: Margaret Chen, Brittany White, Douglas Moore, ${email}
Subject: RE: Contact Form Submission - ${matter}

DOUGLAS you CANNOT put passwords in emails like this! Now I have to change it! I'm limiting your access to the Litvin project you're working on. Please just log in to https://watchandguard.us/access with the password "ARCHIVE1971".

Gregory Glass, IT Specialist

---

From: Brittany White <b.white@calyptra-internal.com>
To: Margaret Chen, Gregory Glass, Douglas Moore, ${email}
Subject: RE: Contact Form Submission - ${matter}

The candidate is still in this thread. Let's continue this on my new email, please.
PS: Gregory, didn't you just include a password in an email?

Brittany White, HR Specialist
				`,
            };

            await sgMail.send(mailOptions);

            // Save contact inquiry to database
            try {
                await saveApplicant(
                    email,
                    `CONTACT: ${matter} | ${name} | ${phone || "No phone"} | ${message.substring(0, 200)}...`,
                );
                console.log("Contact saved to database:", email);
            } catch (dbError) {
                console.error("Database error:", dbError);
                // Don't fail the form if database save fails
            }

            return {
                success: true,
                message:
                    "Your inquiry has been submitted successfully. You will be contacted if you meet our requirements.",
            };
        } catch (error) {
            console.error("Contact form error:", error);
            if (error instanceof Error) {
                console.error("Error details:", {
                    message: error.message,
                    name: error.name,
                    stack: error.stack,
                });
            }
            return fail(500, {
                error: "Failed to submit inquiry. Please try again later.",
            });
        }
    },
};
