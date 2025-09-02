<script lang="ts">
	// About page for Calyptra Watch & Guard
</script>

<svelte:head>
	<title>About Us - Calyptra Watch & Guard</title>
	<meta name="description" content="Learn about Calyptra Watch & Guard, our distinguished history, and our approach to confidential private investigation services." />
</svelte:head>

<div class="about-hero">
	<div class="container">
		<h1>About Calyptra Watch & Guard</h1>
		<p>Established 1923. Nearly a century of discreet investigative excellence for distinguished clientele.</p>
	</div>
</div>

<section class="about-content">
	<div class="container">
		<div class="about-section">
			<h2>Our Heritage</h2>
			<p>Founded in the aftermath of the Great War by former military intelligence officers, Calyptra Watch & Guard has maintained an unbroken tradition of discretion and results for nearly one hundred years. Our methods have evolved with the times, but our commitment to confidentiality and thoroughness remains unchanged.</p>
			<p>The firm takes its name from the protective covering that shields the delicate parts of a flower—a fitting metaphor for our role in safeguarding our clients' most sensitive interests from public scrutiny.</p>
		</div>

		<div class="about-section">
			<h2>Our Distinction</h2>
			<div class="features-grid">
				<div class="feature">
					<h3>Generational Experience</h3>
					<p>Nearly a century of investigative tradition, with methods refined through generations of practice and an ever-expanding network of contacts worldwide.</p>
				</div>
				<div class="feature">
					<h3>Selective Clientele</h3>
					<p>We maintain the privilege of choosing our cases, ensuring each investigation receives the full attention and resources it merits.</p>
				</div>
				<div class="feature">
					<h3>Ironclad Discretion</h3>
					<p>Our investigations are conducted under seal of professional privilege. Client confidentiality is protected by both legal precedent and personal honor.</p>
				</div>
				<div class="feature">
					<h3>Methodical Thoroughness</h3>
					<p>Every case is approached with systematic precision, leaving no avenue unexplored and no detail overlooked in pursuit of truth.</p>
				</div>
			</div>
		</div>

		<div class="about-section">
			<h2>Our Methods</h2>
			<p>The art of investigation requires patience, precision, and an understanding of human nature that cannot be taught in any academy. Our approach combines time-tested techniques with modern resources:</p>
			<ul>
				<li><strong>Systematic Documentation:</strong> Every detail recorded, cross-referenced, and preserved according to legal standards.</li>
				<li><strong>Discrete Observation:</strong> Surveillance conducted with such subtlety that subjects remain unaware of our presence.</li>
				<li><strong>Network Intelligence:</strong> Decades of cultivated contacts across industries, institutions, and social circles worldwide.</li>
				<li><strong>Legal Precision:</strong> All methods employed within strict adherence to applicable laws and professional standards.</li>
			</ul>
		</div>

		<div class="about-section image-section">
			<div class="about-text">
				<h2>Traditional Values, Modern Methods</h2>
				<p>While our commitment to old-world professionalism remains unwavering, we employ the most current investigative technologies and techniques. Our offices retain the atmosphere of a bygone era—rich leather, polished wood, and the comforting tick of grandfather clocks—but our methods are thoroughly contemporary.</p>
				<p>Each case begins with a consultation in our private chambers, where clients may speak freely knowing their words will never leave these walls. From there, we deploy resources both traditional and modern to achieve the desired outcome.</p>
			</div>
			<div class="about-image">
				<img src="https://placekitten.com/600/400" alt="Traditional private investigation office" class="vintage-office">
			</div>
		</div>

		<div class="credentials-section">
			<h2>Credentials & Associations</h2>
			<div class="credentials-grid">
				<div class="credential">
					<h4>Licensed Private Investigation Agency</h4>
					<p>Fully licensed and bonded across multiple jurisdictions, with standing to conduct investigations internationally through established partnerships.</p>
				</div>
				<div class="credential">
					<h4>Professional Associations</h4>
					<p>Members in good standing of the National Association of Legal Investigators and International Association of Private Investigators.</p>
				</div>
				<div class="credential">
					<h4>Judicial Recognition</h4>
					<p>Our investigations and testimony have been accepted in courts of law for over ninety years, establishing precedent for professional standards.</p>
				</div>
				<div class="credential">
					<h4>Continuing Education</h4>
					<p>Our investigators maintain current certifications in surveillance techniques, evidence handling, and legal procedure while preserving traditional investigative arts.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.about-hero {
		background: linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%);
		color: #e8e6e3;
		padding: 5rem 0;
		text-align: center;
		margin: 3rem -3rem 0;
		border-bottom: 1px solid #2a2a2a;
		position: relative;
	}

	.about-hero::before {
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

	.about-hero h1 {
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

	.about-hero p {
		font-size: 1.1rem;
		color: #b8b5a7;
		max-width: 700px;
		margin: 0 auto;
		font-family: 'Courier New', monospace;
		letter-spacing: 0.5px;
		position: relative;
		z-index: 1;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 3rem;
	}

	.about-content {
		padding: 5rem 0;
	}

	.about-section {
		margin-bottom: 5rem;
	}

	.about-section h2 {
		font-size: 2.5rem;
		color: #d4af37;
		margin-bottom: 2rem;
		font-family: 'Times New Roman', serif;
		font-weight: normal;
		letter-spacing: 0.5px;
	}

	.about-section p {
		font-size: 1rem;
		color: #b8b5a7;
		line-height: 1.8;
		margin-bottom: 1.8rem;
		font-family: 'Courier New', monospace;
	}

	.about-section ul {
		color: #b8b5a7;
		line-height: 1.7;
		font-family: 'Courier New', monospace;
		list-style: none;
		padding: 0;
	}

	.about-section li {
		margin-bottom: 1.5rem;
		position: relative;
		padding-left: 2rem;
		border-bottom: 1px solid rgba(139, 129, 101, 0.2);
		padding-bottom: 1rem;
	}

	.about-section li:last-child {
		border-bottom: none;
	}

	.about-section li::before {
		content: '▸';
		position: absolute;
		left: 0;
		color: #d4af37;
		font-weight: bold;
		font-size: 1.2rem;
	}

	.about-section strong {
		color: #d4af37;
		font-family: 'Times New Roman', serif;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 3rem;
		margin-top: 3rem;
	}

	.feature {
		background: linear-gradient(145deg, #1a1a1a 0%, #0f0f0f 100%);
		padding: 3rem 2rem;
		border: 1px solid #2a2a2a;
		border-left: 4px solid #d4af37;
		position: relative;
		transition: all 0.3s ease;
	}

	.feature:hover {
		border-color: #d4af37;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
	}

	.feature h3 {
		color: #d4af37;
		margin-bottom: 1.5rem;
		font-size: 1.3rem;
		font-family: 'Times New Roman', serif;
		font-weight: normal;
		letter-spacing: 0.5px;
	}

	.feature p {
		margin: 0;
		color: #b8b5a7;
		line-height: 1.6;
		font-family: 'Courier New', monospace;
		font-size: 0.9rem;
	}

	.image-section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
		margin: 6rem 0;
		padding: 3rem;
		background: linear-gradient(145deg, #111111 0%, #0a0a0a 100%);
		border: 1px solid #2a2a2a;
	}

	.about-text h2 {
		margin-bottom: 2rem;
	}

	.vintage-office {
		width: 100%;
		height: auto;
		border: 3px solid #d4af37;
		filter: sepia(30%) contrast(110%) brightness(85%);
		transition: all 0.3s ease;
	}

	.vintage-office:hover {
		filter: sepia(20%) contrast(105%) brightness(95%);
		box-shadow: 0 15px 40px rgba(212, 175, 55, 0.2);
	}

	.credentials-section {
		background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
		padding: 4rem 3rem;
		border: 1px solid #2a2a2a;
		margin-top: 4rem;
		position: relative;
	}

	.credentials-section::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(90deg, transparent, #d4af37, transparent);
	}

	.credentials-section h2 {
		text-align: center;
		margin-bottom: 3rem;
		color: #d4af37;
	}

	.credentials-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 3rem;
	}

	.credential {
		text-align: center;
		padding: 2rem;
		background: linear-gradient(145deg, #111111 0%, #0a0a0a 100%);
		border: 1px solid #2a2a2a;
		transition: all 0.3s ease;
	}

	.credential:hover {
		border-color: #d4af37;
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
	}

	.credential h4 {
		color: #d4af37;
		margin-bottom: 1.5rem;
		font-size: 1.2rem;
		font-family: 'Times New Roman', serif;
		font-weight: normal;
		letter-spacing: 0.5px;
	}

	.credential p {
		color: #b8b5a7;
		font-size: 0.9rem;
		line-height: 1.6;
		margin: 0;
		font-family: 'Courier New', monospace;
	}

	@media (max-width: 768px) {
		.about-hero {
			margin: 2rem -2rem 0;
		}

		.about-hero h1 {
			font-size: 2.3rem;
		}

		.about-section h2 {
			font-size: 2rem;
		}

		.features-grid,
		.credentials-grid {
			grid-template-columns: 1fr;
		}

		.image-section {
			grid-template-columns: 1fr;
			gap: 2rem;
			padding: 2rem;
		}

		.credentials-section {
			padding: 3rem 2rem;
		}

		.container {
			padding: 0 2rem;
		}
	}
</style>
