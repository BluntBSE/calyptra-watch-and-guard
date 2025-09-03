<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Calyptra Watch & Guard - Secure Since 1961</title>
	<meta name="description" content="Calyptra Watch & Guard provides confidential private investigation services and assistance with unorthodox intruders." />
	{@html `<!-- ALIIS SI LICET, TIBI NON LICET |
	watchandguard.us/access - ARCHIVE1971-->`}
</svelte:head>

{@html `<!-- ALIIS SI LICET, TIBI NON LICET |
	watchandguard.us/access - ARCHIVE1971-->`}

<div class="app">
	<header>
		<nav>
			<div class="nav-container">
				<div class="logo">
					<a href="/">
						<h1>Calyptra Watch & Guard</h1>
						<span class="tagline">Secure Since 1961</span>
					</a>
				</div>
				<ul class="nav-links">
					<li><a href="/">Home</a></li>
					<li><a href="/careers">Careers</a></li>
					<li><a href="/contact">Contact</a></li>
				</ul>
			</div>
		</nav>
	</header>

	<main>
		{@render children?.()}
	</main>

	<footer>
		<div class="footer-container">
			<div class="footer-section">
				<h3>Calyptra Watch & Guard</h3>
				<p>Providing discreet investigative services to distinguished clients since 1961. Established tradition, modern methods.</p>
			</div>
			<div class="footer-section">
				<h3>Services</h3>
				<ul>
					<li>Corporate Investigations</li>
					<li>Personal Surveillance</li>
					<li>Asset Recovery</li>
				</ul>
			</div>
			<div class="footer-section">
				<div class="disclaimer-content">
					<div class="disclaimer-image">
						<img src="/images/sixth-history-white-alpha.png" alt="Sixth History Logo" />
					</div>
					<div class="disclaimer-text">
						<p><a href="https://store.steampowered.com/app/3869880/The_Matter_of_Being/">Common Logic</a> is independent from and unaffiliated with <a href="https://weatherfactory.biz/">Weather Factory</a>.</p>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-bottom">
			<p>&copy; 2025 Calyptra Watch & Guard. Confidentiality Assured. | Licensed Private Investigation Agency</p>
		</div>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: 'Courier New', 'Lucida Console', Monaco, monospace;
		line-height: 1.7;
		color: #e8e6e3;
		background-color: #0d0d0d;
		background-image: 
			radial-gradient(circle at 20% 80%, rgba(120, 119, 109, 0.1) 0%, transparent 50%),
			radial-gradient(circle at 80% 20%, rgba(120, 119, 109, 0.05) 0%, transparent 50%),
			radial-gradient(circle at 40% 40%, rgba(120, 119, 109, 0.03) 0%, transparent 50%);
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'Times New Roman', serif;
		font-weight: normal;
		color: #f5f3f0;
		text-shadow: 0 0 10px rgba(245, 243, 240, 0.1);
	}

	:global(::selection) {
		background: rgba(139, 129, 101, 0.3);
		color: #f5f3f0;
	}

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	header {
		background: linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%);
		color: #e8e6e3;
		padding: 0;
		border-bottom: 1px solid #2a2a2a;
		position: sticky;
		top: 0;
		z-index: 100;
		backdrop-filter: blur(10px);
	}

	.nav-container {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem 3rem;
	}

	.logo a {
		text-decoration: none;
		color: #e8e6e3;
	}

	.logo h1 {
		margin: 0;
		font-size: 1.9rem;
		font-weight: normal;
		font-family: 'Times New Roman', serif;
		color: #d4af37;
		letter-spacing: 0.5px;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
	}

	.tagline {
		font-size: 0.8rem;
		color: #8b8165;
		font-style: italic;
		font-family: 'Times New Roman', serif;
		letter-spacing: 1px;
	}

	.nav-links {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 2.5rem;
	}

	.nav-links a {
		color: #e8e6e3;
		text-decoration: none;
		font-weight: normal;
		font-family: 'Times New Roman', serif;
		font-size: 1rem;
		transition: all 0.3s ease;
		position: relative;
		padding: 0.5rem 0;
		letter-spacing: 0.5px;
	}

	.nav-links a:hover {
		color: #d4af37;
	}

	.nav-links a::after {
		content: '';
		position: absolute;
		width: 0;
		height: 1px;
		bottom: 0;
		left: 0;
		background: linear-gradient(90deg, transparent, #d4af37, transparent);
		transition: width 0.4s ease;
	}

	.nav-links a:hover::after {
		width: 100%;
	}

	main {
		flex: 1;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 3rem;
		width: 100%;
	}

	footer {
		background: linear-gradient(180deg, #0d0d0d 0%, #000000 100%);
		color: #8b8165;
		margin-top: auto;
		border-top: 1px solid #2a2a2a;
	}

	.footer-container {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 3rem;
		padding: 4rem 3rem 3rem;
	}
	.footer-section a{
		color:white;
	}

	.footer-section h3 {
		margin-bottom: 1.5rem;
		color: #d4af37;
		font-family: 'Times New Roman', serif;
		font-size: 1.1rem;
		letter-spacing: 0.5px;
	}

	.footer-section ul {
		list-style: none;
		padding: 0;
	}

	.footer-section ul li {
		padding: 0.4rem 0;
		color: #8b8165;
		font-family: 'Courier New', monospace;
		font-size: 0.9rem;
		position: relative;
		padding-left: 1.2rem;
	}

	.footer-section ul li::before {
		content: '—';
		position: absolute;
		left: 0;
		color: #d4af37;
	}

	.footer-section p {
		color: #8b8165;
		margin: 0.6rem 0;
		font-family: 'Courier New', monospace;
		font-size: 0.9rem;
		line-height: 1.6;
	}

	.footer-section img {
		max-width: 100px;
		height:auto;
		margin: 10px 0;
	}

	/* Book-like disclaimer layout */
	.disclaimer-content {
		display: flex;
		align-items: flex-start;
		gap: 1.5rem;
		padding: 1rem;
	}

	/* Fix alignment between h3 elements in footer sections */
	.footer-section h3 {
		margin-top: 0;
		margin-bottom: 1.5rem;
	}

	.disclaimer-image {
		flex-shrink: 0;
		width: 80px;
	}

	.disclaimer-image img {
		width: 100%;
		height: auto;
		opacity: 0.8;
		filter: brightness(0.9);
	}

	.disclaimer-text {
		flex: 1;
		padding-left: 0.5rem;
	}

	.disclaimer-text p {
		margin: 0.25rem 0;
		font-size: 0.85rem;
		color: #c0c0c0;
		line-height: 1.4;
	}

	.footer-bottom {
		border-top: 1px solid #2a2a2a;
		text-align: center;
		padding: 2rem 3rem;
		color: #5a5a5a;
		font-size: 0.8rem;
		font-family: 'Courier New', monospace;
		letter-spacing: 0.5px;
	}

	@media (max-width: 768px) {
		.nav-container {
			flex-direction: column;
			gap: 1.5rem;
			padding: 1.5rem 2rem;
		}

		.nav-links {
			gap: 1.5rem;
		}

		main {
			padding: 0 2rem;
		}

		.footer-container {
			grid-template-columns: 1fr;
			padding: 3rem 2rem 2rem;
		}

		.footer-bottom {
			padding: 2rem;
		}
	}
</style>
