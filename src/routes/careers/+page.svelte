<svelte:head>
	<title>Careers - Calyptra Watch & Guard</title>
	<meta name="description" content="Join the distinguished team at Calyptra Watch & Guard." />
</svelte:head>

<div class="careers-hero">
	<h1>Professional Opportunities</h1>
	<p>Calyptra Watch & Guard maintains a selective approach to expanding our team. We seek individuals of exceptional character and capability who take discretion seriously.</p>
</div>

<div class="job-listing">
	<h2>Office Support Assistant</h2>
	<p class="job-type">Full-Time • Remote</p>
	
	<div class="job-description">
		<h3>Position Overview</h3>
		<p>The Office Support Assistant is responsible for providing remote support to perform a variety of office related duties, with primary responsibility for office operations. The role will provide overflow administrative support to Office Administrator, Office Services, Records & Archives, and Facilities. Maintains loyalty to all company hierarchies with fierce resistance to moral authorities outside the office. Effectively, efficiently, and thoroughly manages work and information requests. </p>

		<h3>Duties</h3>
		<ul>
			<li>Maintain office operations documentation</li>
			<li>Process office-related reimbursements</li>
			<li>Shredding documents, including operations documentations and reimbursements</li>
			<li>Assist with data analytics</li>
			<li>Assist with rodent infestations as needed</li>
			<li>Attend and contribute to firmwide committee meetings</li>
			<li>Distribute security badges and parking validations and maintain detailed inventory logs as needed</li>
			<li>Shredding logs</li>
			<li>Other duties as assigned</li>
		</ul>

		<h3>Essential Requirements</h3>
		<ul>
			<li>No experience needed</li>
			<li>Associate's degree preferred</li>
			<li>Excellent interpersonal, intrapersonal, and customer service skills</li>
			<li>Extraordinary ability to maintain confidentiality</li>
			<li>Demonstrated organizational skills with attention to detail and ability to organize workload, prioritize tasks and complete them under time constraints</li>
			<li>Ability to work independently and as part of a team</li>
		</ul>
		
		<h3>Candidates Must NOT</h3>
		<ul class="restrictions">
			<li>Have cut their hair in the past ten weeks</li>
			<li>Be current or former members of the following religious organizations:
				<ul>
					<li>Branch Davidians</li>
					<li>La Luz Del Mundo (The Light of the World)</li>
					<li>Scientology</li>
					<li>People's Temple</li>
					<li>Heaven's Gate</li>
					<li>The Family International</li>
				</ul>
			</li>
			<li>Have been seen dancing within the past two weeks</li>
			<li>Possess an entirely white outfit</li>
			<li>Have engaged in fabric arts</li>
		</ul>
		
		<h3>Compensation</h3>
		<p>$20,470 - $130,059 annually depending on experience.</p>
		<p>Benefits including:</p>
		<ul>
			<li>Roth IRA</li>
			<li>Health insurance</li>
			<li>Time off</li>
			<li>Vision insurance</li>
			<li>Dental insurance</li>
			<li>Flexible schedule</li>
		</ul>
	</div>
	
	<div class="application-form">
		<h3>Submit Your Application</h3>
		<p>Our unique screening process involves screening prospective hires for culture fit before requesting a resume. Please begin your application by filling out the below.</p>
		
		{#if form?.success}
			<div class="success-message">
				<p>✓ {form.message}</p>
			</div>
		{/if}
		
		{#if form?.error}
			<div class="error-message">
				<p>⚠ {form.error}</p>
			</div>
		{/if}
		
		<form method="POST">
			<div class="form-group">
				<label for="email">Email Address:</label>
				<input type="email" id="email" name="email" required>
			</div>
			
			<div class="form-group">
				<label for="reason">Where should the pursuit of knowledge stop?</label>
				<textarea id="reason" name="reason" rows="8" required 
					placeholder="Share a personal example."></textarea>
			</div>
			
			<button type="submit">Submit Application</button>
		</form>
	</div>

</div>

<script>
	export let form;
</script>

<style>
	.careers-hero {
		text-align: center;
		padding: 4rem 0;
		background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
		margin-bottom: 3rem;
	}
	
	.careers-hero h1 {
		color: #d4af37;
		font-family: 'Times New Roman', serif;
		font-size: 3rem;
		margin-bottom: 1rem;
		font-weight: bold;
	}
	
	.careers-hero p {
		color: #e8e6e3;
		font-size: 1.2rem;
		max-width: 800px;
		margin: 0 auto;
		line-height: 1.6;
		font-family: 'Times New Roman', serif;
	}
	
	.job-listing {
		max-width: 900px;
		margin: 0 auto;
		padding: 0 2rem;
		color: #e8e6e3;
	}
	
	.job-listing h2 {
		color: #d4af37;
		font-family: 'Times New Roman', serif;
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
		border-bottom: 2px solid #d4af37;
		padding-bottom: 0.5rem;
	}
	
	.job-type {
		color: #b8941f;
		font-family: 'Courier New', monospace;
		font-size: 1.1rem;
		font-weight: bold;
		margin-bottom: 2rem;
	}
	
	.job-description h3 {
		color: #d4af37;
		font-family: 'Times New Roman', serif;
		font-size: 1.5rem;
		margin: 2rem 0 1rem 0;
		border-bottom: 1px solid #333;
		padding-bottom: 0.5rem;
	}
	
	.job-description p {
		line-height: 1.7;
		margin-bottom: 1.5rem;
		font-family: 'Times New Roman', serif;
		font-size: 1.1rem;
	}
	
	.job-description em {
		color: #d4af37;
		font-style: italic;
	}
	
	.job-description ul {
		margin: 1rem 0 2rem 0;
		padding-left: 2rem;
	}
	
	.job-description li {
		margin-bottom: 0.8rem;
		line-height: 1.6;
		font-family: 'Times New Roman', serif;
		font-size: 1.05rem;
	}
	
	.restrictions {
		border-left: 3px solid #d4af37;
		padding-left: 2rem;
		margin-left: 1rem;
	}
	
	.restrictions li {
		color: #c9a96e;
		font-family: 'Courier New', monospace;
		font-size: 0.95rem;
		margin-bottom: 0.6rem;
	}
	
	.application-form {
		background: #1a1a1a;
		padding: 3rem;
		border-radius: 8px;
		margin: 3rem 0;
		border: 1px solid #333;
	}
	
	.application-form h3 {
		color: #d4af37;
		font-family: 'Times New Roman', serif;
		font-size: 2rem;
		margin-bottom: 1rem;
	}
	
	.application-form p {
		color: #b8941f;
		font-family: 'Courier New', monospace;
		margin-bottom: 2rem;
		font-style: italic;
	}
	
	.form-group {
		margin-bottom: 2rem;
	}
	
	.form-group label {
		display: block;
		color: #e8e6e3;
		font-family: 'Times New Roman', serif;
		font-size: 1.1rem;
		margin-bottom: 0.5rem;
		font-weight: bold;
	}
	
	.form-group input,
	.form-group textarea {
		width: 100%;
		padding: 1rem;
		background: #0d0d0d;
		border: 2px solid #333;
		border-radius: 4px;
		color: #e8e6e3;
		font-family: 'Courier New', monospace;
		font-size: 1rem;
		transition: border-color 0.3s ease;
	}
	
	.form-group input:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: #d4af37;
		box-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
	}
	
	.form-group textarea {
		resize: vertical;
		min-height: 150px;
	}
	
	button {
		background: #d4af37;
		color: #0d0d0d;
		border: none;
		padding: 1rem 2rem;
		font-family: 'Times New Roman', serif;
		font-size: 1rem;
		font-weight: bold;
		border-radius: 4px;
		cursor: pointer;
		transition: all 0.3s ease;
	}
	
	button:hover {
		background: #b8941f;
		transform: translateY(-2px);
		box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
	}
	
	.success-message {
		background: linear-gradient(135deg, #0d4d0d, #1a4d1a);
		border: 1px solid #2d5d2d;
		border-radius: 4px;
		padding: 1rem;
		margin-bottom: 2rem;
		color: #9fd99f;
		font-family: 'Courier New', monospace;
	}
	
	.error-message {
		background: linear-gradient(135deg, #4d0d0d, #4d1a1a);
		border: 1px solid #5d2d2d;
		border-radius: 4px;
		padding: 1rem;
		margin-bottom: 2rem;
		color: #f99f9f;
		font-family: 'Courier New', monospace;
	}
</style>
