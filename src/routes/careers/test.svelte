<svelte:head>
	<title>Careers - Calyptra Watch & Guard</title>
</svelte:head>

<h1>Careers at Calyptra Watch & Guard</h1>
<p>Professional opportunities for qualified individuals.</p>

<div class="job-listing">
	<h2>Office Support Specialist</h2>
	<p>Contract position with special clearance requirements.</p>

	<h3>Requirements:</h3>
	<ul>
		<li>Absolute discretion required</li>
		<li>Experience with document management</li>
		<li>Ability to maintain confidentiality</li>
		<li>Hair length must remain consistent during employment</li>
	</ul>

	<form>
		<div>
			<label for="email">Email:</label>
			<input type="email" id="email" name="email" required>
		</div>

		<div>
			<label for="reason">Why do you want this position?</label>
			<textarea id="reason" name="reason" required></textarea>
		</div>

		<button type="submit">Apply</button>
	</form>
</div>

<style>
	:global(body) {
		background: #0b0b0b;
		color: #e8e6e3;
		font-family: 'Times New Roman', serif;
	}

	h1 {
		color: #ffc67e;
		text-align: center;
		font-size: 2.5rem;
		margin: 2rem 0;
	}

	.job-listing {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}

	h2 {
		color: #ffc67e;
		border-bottom: 2px solid #ffc67e;
		padding-bottom: 0.5rem;
	}

	form {
		background: #1a1a1a;
		padding: 2rem;
		border-radius: 8px;
		margin-top: 2rem;
	}

	label {
		display: block;
		margin: 1rem 0 0.5rem 0;
		font-weight: bold;
	}

	input, textarea {
		width: 100%;
		padding: 0.8rem;
		background: #0b0b0b;
		border: 2px solid #333;
		border-radius: 4px;
		color: #e8e6e3;
		font-family: 'Courier New', monospace;
	}

	textarea {
		height: 100px;
		resize: vertical;
	}

	button {
		background: #ffc67e;
		color: #0b0b0b;
		border: none;
		padding: 1rem 2rem;
		font-weight: bold;
		border-radius: 4px;
		cursor: pointer;
		margin-top: 1rem;
	}

	button:hover {
		background: #d9a05c;
	}
</style>
