<script lang="ts">
	export let form;
</script>

<svelte:head>
	<title>Contact Us - Calyptra Watch & Guard</title>
	<meta name="description" content="Contact Calyptra Watch & Guard for confidential consultations regarding private investigation services." />
</svelte:head>

{#if form?.success}
	<div class="success-message">
		<div class="container">
			<div class="success-content">
				<h1>Inquiry Received</h1>
				<p>{form.message}</p>
				<p>Please ensure your provided contact information is secure, as our communications contain sensitive information.</p>
				<div class="success-note">
					<p><strong>Reference Number:</strong> CWG-{Date.now().toString().slice(-6)}</p>
					<p><em>Please retain this reference number for your records.</em></p>
				</div>
			</div>
		</div>
	</div>
{:else}
	<div class="contact-hero">
		<div class="container">
			<h1>Confidential Consultation</h1>
			<p>Sensitive matters require discrete discussion. All inquiries are handled with complete confidentiality.</p>
		</div>
	</div>

	<section class="contact-content">
		<div class="container">


			<div class="inquiry-form-section">
				<h2>Submit Confidential Inquiry</h2>
				<p>Complete this form to begin the consultation process. All information transmitted securely and reviewed only by authorized personnel.</p>
				
				<form method="POST" class="inquiry-form">
					{#if form?.error}
						<div class="error-message" role="alert">
							{form.error}
						</div>
					{/if}

					<div class="form-row">
						<div class="form-group">
							<label for="name">Full Name *</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								placeholder="Your complete name"
							/>
						</div>
						
						<div class="form-group">
							<label for="phone">Telephone</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								placeholder="Preferred contact number"
							/>
						</div>
					</div>

					<div class="form-group">
						<label for="email">Electronic Mail *</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							placeholder="your.name@example.com"
						/>
						<small>Secure email address preferred</small>
					</div>

					<div class="form-group">
						<label for="matter">Nature of Matter *</label>
						<select id="matter" name="matter" required>
							<option value="">Please select...</option>
							<option value="corporate">Corporate Investigation</option>
							<option value="personal">Personal Surveillance</option>
							<option value="background">Background Verification</option>
							<option value="asset">Asset Recovery</option>
							<option value="matrimonial">Matrimonial Matter</option>
							<option value="estate">Estate Investigation</option>
							<option value="other">Other (specify in message)</option>
						</select>
					</div>

					<div class="form-group">
						<label for="confidentiality">Confidentiality Level</label>
						<select id="confidentiality" name="confidentiality">
							<option value="standard">Standard Professional Discretion</option>
							<option value="enhanced">Enhanced Confidentiality Required</option>
							<option value="maximum">Maximum Security - Anonymous Consultation</option>
						</select>
						<small>Determines our communication protocols</small>
					</div>

					<div class="form-group">
						<label for="message">Details of Inquiry *</label>
						<textarea
							id="message"
							name="message"
							required
							rows="6"
							placeholder="Please provide relevant details about your situation. Include any time constraints or special considerations. This information remains strictly confidential."
						></textarea>
					</div>

					<div class="form-notice">
						<p><strong>Confidentiality Notice:</strong> This inquiry form is transmitted via encrypted connection. All communications are protected under attorney-client privilege where applicable and professional investigator confidentiality agreements. We do not share client information with third parties under any circumstances.</p>
					</div>

					<button type="submit" class="submit-btn">
						Submit Confidential Inquiry
					</button>
				</form>
			</div>
		</div>
	</section>
{/if}

<style>
	.contact-hero {
		background: linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%);
		color: #e8e6e3;
		padding: 5rem 0;
		text-align: center;
		margin: 3rem -3rem 0;
		border-bottom: 1px solid #2a2a2a;
		position: relative;
	}

	.contact-hero::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: 
			radial-gradient(circle at 25% 75%, rgba(212, 175, 55, 0.04) 0%, transparent 50%),
			radial-gradient(circle at 75% 25%, rgba(212, 175, 55, 0.02) 0%, transparent 50%);
		pointer-events: none;
	}

	.contact-hero h1 {
		font-size: 3.2rem;
		margin-bottom: 1.5rem;
		font-weight: normal;
		font-family: 'Times New Roman', serif;
		color: #d4af37;
		letter-spacing: 1px;
		text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8);
		position: relative;
		z-index: 1;
	}

	.contact-hero p {
		font-size: 1.1rem;
		color: #b8b5a7;
		font-family: 'Courier New', monospace;
		letter-spacing: 0.5px;
		position: relative;
		z-index: 1;
	}

	.success-message {
		background: linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%);
		color: #e8e6e3;
		padding: 8rem 0;
		margin: 3rem -3rem 0;
		text-align: center;
	}

	.success-content h1 {
		font-size: 3rem;
		color: #d4af37;
		margin-bottom: 2rem;
		font-family: 'Times New Roman', serif;
		font-weight: normal;
	}

	.success-content p {
		font-size: 1rem;
		line-height: 1.8;
		margin-bottom: 1.5rem;
		font-family: 'Courier New', monospace;
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 1.5rem;
	}

	.success-note {
		background: linear-gradient(145deg, #1a1a1a 0%, #0f0f0f 100%);
		border: 1px solid #d4af37;
		padding: 2rem;
		margin: 3rem auto;
		max-width: 500px;
	}

	.success-note p {
		margin: 0.5rem 0;
		color: #d4af37;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 3rem;
	}

	.contact-content {
		padding: 5rem 0;
	}

	.contact-info {
		margin-bottom: 6rem;
	}

	.contact-section {
		margin-bottom: 4rem;
	}

	.contact-section h2 {
		font-size: 2.2rem;
		color: #d4af37;
		margin-bottom: 2rem;
		font-family: 'Times New Roman', serif;
		font-weight: normal;
		letter-spacing: 0.5px;
	}

	.office-details {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 3rem;
	}

	.contact-method {
		background: linear-gradient(145deg, #1a1a1a 0%, #0f0f0f 100%);
		padding: 2.5rem 2rem;
		border: 1px solid #2a2a2a;
		transition: all 0.3s ease;
	}

	.contact-method:hover {
		border-color: #d4af37;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
	}

	.contact-method h3 {
		color: #d4af37;
		font-size: 1.3rem;
		margin-bottom: 1rem;
		font-family: 'Times New Roman', serif;
		font-weight: normal;
		letter-spacing: 0.5px;
	}

	.contact-method p {
		color: #b8b5a7;
		margin: 0.7rem 0;
		font-family: 'Courier New', monospace;
		font-size: 0.95rem;
	}

	.office-location {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: center;
		background: linear-gradient(145deg, #1a1a1a 0%, #0f0f0f 100%);
		padding: 3rem;
		border: 1px solid #2a2a2a;
	}

	.office-image {
		width: 100%;
		height: auto;
		border: 2px solid #d4af37;
		filter: sepia(30%) contrast(110%) brightness(85%);
	}

	.location-details p {
		color: #b8b5a7;
		margin: 1rem 0;
		font-family: 'Courier New', monospace;
		line-height: 1.7;
	}

	.location-details strong {
		color: #d4af37;
		font-family: 'Times New Roman', serif;
	}

	.inquiry-form-section {
		background: linear-gradient(145deg, #111111 0%, #0a0a0a 100%);
		padding: 4rem;
		border: 1px solid #2a2a2a;
		border-top: 3px solid #d4af37;
	}

	.inquiry-form-section h2 {
		font-size: 2.2rem;
		color: #d4af37;
		margin-bottom: 1rem;
		font-family: 'Times New Roman', serif;
		font-weight: normal;
		letter-spacing: 0.5px;
	}

	.inquiry-form-section > p {
		color: #b8b5a7;
		font-family: 'Courier New', monospace;
		line-height: 1.7;
		margin-bottom: 3rem;
	}

	.inquiry-form {
		max-width: 800px;
		margin: 0 auto;
	}

	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin-bottom: 2rem;
	}

	.form-group {
		margin-bottom: 2rem;
	}

	.form-group label {
		display: block;
		color: #d4af37;
		font-family: 'Times New Roman', serif;
		font-size: 1.1rem;
		margin-bottom: 0.7rem;
		letter-spacing: 0.5px;
	}

	.form-group input,
	.form-group select,
	.form-group textarea {
		width: 100%;
		padding: 1rem;
		background: #0d0d0d;
		border: 1px solid #3a3a3a;
		color: #e8e6e3;
		font-family: 'Courier New', monospace;
		font-size: 0.95rem;
		transition: all 0.3s ease;
	}

	.form-group input:focus,
	.form-group select:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: #d4af37;
		box-shadow: 0 0 10px rgba(212, 175, 55, 0.2);
	}

	.form-group small {
		display: block;
		color: #8b8165;
		font-family: 'Courier New', monospace;
		font-size: 0.8rem;
		margin-top: 0.5rem;
		font-style: italic;
	}

	.form-notice {
		background: linear-gradient(145deg, #1a1a1a 0%, #0f0f0f 100%);
		border: 1px solid #3a3a3a;
		padding: 2rem;
		margin: 2rem 0;
	}

	.form-notice p {
		color: #b8b5a7;
		font-family: 'Courier New', monospace;
		font-size: 0.85rem;
		line-height: 1.6;
		margin: 0;
	}

	.error-message {
		background: linear-gradient(145deg, #2a1a1a 0%, #1a0f0f 100%);
		border: 1px solid #8b4545;
		color: #ff8888;
		padding: 1rem;
		margin-bottom: 2rem;
		font-family: 'Courier New', monospace;
		font-size: 0.9rem;
	}

	.submit-btn {
		background: linear-gradient(145deg, #d4af37 0%, #b8941f 100%);
		color: #0d0d0d;
		border: none;
		padding: 1.5rem 3rem;
		font-size: 1rem;
		font-family: 'Times New Roman', serif;
		font-weight: normal;
		letter-spacing: 1px;
		cursor: pointer;
		transition: all 0.3s ease;
		width: 100%;
	}

	.submit-btn:hover:not(:disabled) {
		background: linear-gradient(145deg, #b8941f 0%, #d4af37 100%);
		box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
	}

	.submit-btn:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	@media (max-width: 768px) {
		.contact-hero {
			margin: 2rem -2rem 0;
		}

		.contact-hero h1 {
			font-size: 2.3rem;
		}

		.container {
			padding: 0 2rem;
		}

		.form-row {
			grid-template-columns: 1fr;
		}

		.office-details,
		.office-location {
			grid-template-columns: 1fr;
		}

		.inquiry-form-section {
			padding: 3rem 2rem;
		}
	}
</style>
