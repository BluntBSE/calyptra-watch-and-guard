<svelte:head>
	<title>Careers - Calyptra Watch & Guard</title>
	<meta name="description" content="Join the distinguished team at Calyptra Watch & Guard." />
</svelte:head>

<div class="careers-hero">
	<h1>Professional Opportunities</h1>
	<p>Calyptra Watch & Guard maintains a selective approach to expanding our team. We seek individuals of exceptional character and capability who understand the weight of confidentiality and the art of discretion.</p>
</div>

<div class="job-listing">
	<h2>Office Support Specialist</h2>
	<p class="job-type">Contract • Hybrid • Special Clearance Required</p>
	
	<div class="job-description">
		<h3>Position Overview</h3>
		<p>Specialized administrative role for maintaining office operations, records management, and document processing. This position requires absolute discretion and loyalty to company hierarchies with fierce resistance to moral authorities outside the office. <em>Doesn't ask questions.</em></p>
		
		<h3>Essential Requirements</h3>
		<ul>
			<li>Extraordinary ability to maintain confidentiality regarding all matters</li>
			<li>Experience with document digitization and secure disposal methods</li>
			<li>Demonstrated organizational skills for sensitive archival materials</li>
			<li>Ability to work with squeaky filing systems without complaint</li>
			<li>Proficiency in shredding operations and maintaining destruction logs</li>
			<li>Assistance with rodent infestations as needed</li>
			<li>Hair length must remain consistent during employment period</li>
		</ul>
		
		<h3>Candidates Must NOT</h3>
		<ul class="restrictions">
			<li>Have cut their hair in the past ten weeks</li>
			<li>Be current or former members of certain religious organizations</li>
			<li>Have touched metal utensils within the past two weeks</li>
			<li>Have been seen dancing within the past two weeks</li>
			<li>Look poor in uniform black attire</li>
			<li>Speak excessively (per Inspector Wakefield's request)</li>
			<li>Have crushed insects under oppressive footwear</li>
			<li>Have engaged in fabric arts or defended personhood against guardians</li>
		</ul>
		
		<h3>Compensation</h3>
		<p>$20,470 - $130,059 annually depending on... qualifications. This is a chance to catch a rare glimpse into the dawn of civilization and the web of psychic energy that created our modern world.</p>
	</div>
	
	<div class="application-form">
		<h3>Submit Your Application</h3>
		<p>Only serious inquiries will be considered. Incomplete applications will not receive responses.</p>
		
		<form id="applicationForm">
			<div class="form-group">
				<label for="email">Email Address:</label>
				<input type="email" id="email" name="email" required>
			</div>
			
			<div class="form-group">
				<label for="reason">Why do you desire such an occult position?</label>
				<textarea id="reason" name="reason" rows="8" required 
					placeholder="Explain your motivations and qualifications for this unique role. Be thorough and honest."></textarea>
			</div>
			
			<button type="submit">Submit Application</button>
		</form>
	</div>

</div>

<script>
	document.addEventListener('DOMContentLoaded', function() {
		const form = document.getElementById('applicationForm');
		
		if (form) {
			form.addEventListener('submit', function(e) {
				e.preventDefault();
				
				const email = document.getElementById('email').value;
				const reason = document.getElementById('reason').value;
				
				console.log('=== APPLICATION SUBMITTED ===');
				console.log('Email:', email);
				console.log('Reason:', reason);
				
				alert('Your application has been received. Please check your email for further instructions.');
				form.reset();
			});
		}
	});
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
</style>
