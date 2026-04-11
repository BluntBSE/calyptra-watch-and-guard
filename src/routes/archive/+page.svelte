<!-- CWG Archive Monitor Interface -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	
	let authenticated = false;
	let activeSection = '';

	onMount(() => {
		// Check authentication
		if (typeof window !== 'undefined') {
			authenticated = sessionStorage.getItem('cwg_authenticated') === 'true';
			if (!authenticated) {
				goto('/access');
			}
		}
	});

	function toggleSection(sectionId: string) {
		activeSection = activeSection === sectionId ? '' : sectionId;
	}

	function logout() {
		if (typeof window !== 'undefined') {
			sessionStorage.removeItem('cwg_authenticated');
		}
		goto('/access');
	}

	// PDF download function
	function downloadPDF(filename: string) {
		const link = document.createElement('a');
		link.href = `/pdfs/${filename}`;
		link.download = filename;
		link.target = '_blank';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		
		console.log(`Archive access: Downloaded ${filename} at ${new Date().toISOString()}`);
	}
</script>

<svelte:head>
	<title>CWG Archive Monitor</title>
</svelte:head>

{#if authenticated}
<div class="archive-container">
	<header class="archive-header">
		<div class="header-left">
			<h1>CWG ARCHIVE MONITOR v3.2.1</h1>
			<div class="status-bar">
				<span class="status-item">STATUS: <span class="status-online">ONLINE</span></span>
				<span class="status-item">USER: ARCHIVE_ADMIN</span>
				<span class="status-item">SESSION: {new Date().toLocaleString()}</span>
			</div>
		</div>
		<button class="logout-btn" on:click={logout}>LOGOUT</button>
	</header>

	<div class="archive-body">
		<nav class="sidebar">
			<div class="nav-section">
				<h3>ARCHIVE SECTIONS</h3>
				<ul class="nav-list">
					<li class="nav-item disabled">Personnel Files</li>
					<li class="nav-item disabled">Case Reports</li>
					<li class="nav-item disabled">Financial Records</li>
					<li class="nav-item disabled">Correspondence</li>
					<li class="nav-item disabled">Equipment Manifests</li>
					<li class="nav-item disabled">Training Materials</li>
					<li 
						class="nav-item active-section" 
						class:expanded={activeSection === 'digitization'}
						on:click={() => toggleSection('digitization')}
						role="button"
						tabindex="0"
						on:keydown={(e) => e.key === 'Enter' && toggleSection('digitization')}
					>
						1971 Digitization Project ▼
					</li>
					<li class="nav-item disabled">Legal Documents</li>
					<li class="nav-item disabled">Property Records</li>
					<li class="nav-item disabled">Client Database</li>
					<li class="nav-item disabled">Surveillance Logs</li>
				</ul>
			</div>

			<div class="system-info">
				<h4>SYSTEM STATUS</h4>
				<div class="info-line">Storage: 2.4TB / 8TB</div>
				<div class="info-line">Active Connections: 1</div>
				<div class="info-line">Last Backup: 48hrs ago</div>
				<div class="info-line warning">Maintenance Due</div>
			</div>
		</nav>

		<main class="content-area">
			{#if activeSection === 'digitization'}
				<div class="content-section">
					<h2>1971 DIGITIZATION PROJECT</h2>
					<div class="project-description">
						<p>Historical document digitization initiative</p>
						<p>Status: COMPLETED | Classification: RESTRICTED</p>
						<p>Access Level: ARCHIVE_ADMIN only</p>
					</div>

					<div class="file-accordion">
						<div class="accordion-section">
							<button 
								class="accordion-header"
								on:click={() => downloadPDF('case-report-1971-001.pdf')}
							>
								📄 Case Report 1971-001: "The Whitmore Incident"
								<span class="download-indicator">⬇ DOWNLOAD</span>
							</button>
						</div>

						<div class="accordion-section">
							<button 
								class="accordion-header"
								on:click={() => downloadPDF('evidence-log-1971-summer.pdf')}
							>
								📄 Evidence Log: Summer 1971 Operations
								<span class="download-indicator">⬇ DOWNLOAD</span>
							</button>
						</div>

						<div class="accordion-section">
							<button 
								class="accordion-header"
								on:click={() => downloadPDF('interview-transcripts-batch-3.pdf')}
							>
								📄 Interview Transcripts - Batch 3
								<span class="download-indicator">⬇ DOWNLOAD</span>
							</button>
						</div>

						<div class="accordion-section">
							<button 
								class="accordion-header"
								on:click={() => downloadPDF('site-photos-restricted.pdf')}
							>
								📄 Site Documentation (Photographic Evidence)
								<span class="download-indicator">⬇ DOWNLOAD</span>
							</button>
						</div>

						<div class="accordion-section">
							<button 
								class="accordion-header"
								on:click={() => downloadPDF('final-report-1971-classified.pdf')}
							>
								📄 Final Investigation Report - CLASSIFIED
								<span class="download-indicator">⬇ DOWNLOAD</span>
							</button>
						</div>
					</div>

					<div class="access-warning">
						<p>⚠ WARNING: These documents contain sensitive historical information.</p>
						<p>All downloads are logged and monitored. Unauthorized distribution is prohibited.</p>
					</div>
				</div>
			{:else}
				<div class="default-content">
					<h2>ARCHIVE MONITOR</h2>
					<div class="welcome-message">
						<p>Welcome to the Calyptra Watch & Guard Archive System</p>
						<p>Select a section from the sidebar to access archived materials.</p>
						<p>System initialized: {new Date().toLocaleString()}</p>
					</div>

					<div class="recent-activity">
						<h3>RECENT SYSTEM ACTIVITY</h3>
						<div class="activity-log">
							<div class="log-entry">2025-09-02 21:45 - Archive access granted</div>
							<div class="log-entry">2025-09-02 18:32 - System backup initiated</div>
							<div class="log-entry">2025-09-02 14:15 - Maintenance check completed</div>
							<div class="log-entry">2025-09-01 22:08 - User session terminated</div>
							<div class="log-entry">2025-09-01 20:45 - File access: Personnel/Archive</div>
						</div>
					</div>
				</div>
			{/if}
		</main>
	</div>
</div>
{/if}

<style>
	.archive-container {
		min-height: 100vh;
		background: #000;
		color: #0f0;
		font-family: 'Courier New', monospace;
		font-size: 13px;
	}

	.archive-header {
		background: #111;
		border-bottom: 2px solid #0f0;
		padding: 15px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.header-left h1 {
		color: #0f0;
		margin: 0 0 10px 0;
		font-size: 18px;
		font-weight: bold;
	}

	.status-bar {
		display: flex;
		gap: 20px;
		font-size: 11px;
	}

	.status-item {
		color: #0a0;
	}

	.status-online {
		color: #0f0;
		animation: blink 2s infinite;
	}

	.logout-btn {
		background: #330;
		color: #f00;
		border: 1px solid #f00;
		padding: 8px 15px;
		font-family: 'Courier New', monospace;
		cursor: pointer;
		font-size: 11px;
		transition: all 0.2s;
	}

	.logout-btn:hover {
		background: #f00;
		color: #000;
	}

	.archive-body {
		display: flex;
		height: calc(100vh - 100px);
	}

	.sidebar {
		width: 280px;
		background: #111;
		border-right: 2px solid #0f0;
		padding: 20px;
		overflow-y: auto;
	}

	.nav-section h3 {
		color: #0f0;
		margin: 0 0 15px 0;
		font-size: 14px;
		border-bottom: 1px solid #0a0;
		padding-bottom: 5px;
	}

	.nav-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.nav-item {
		padding: 8px 0;
		cursor: pointer;
		border-bottom: 1px solid #333;
		transition: all 0.2s;
	}

	.nav-item.disabled {
		color: #555;
		cursor: not-allowed;
	}

	.nav-item.active-section {
		color: #0ff;
		font-weight: bold;
		cursor: pointer;
	}

	.nav-item.active-section:hover {
		background: #003;
		padding-left: 10px;
	}

	.system-info {
		margin-top: 30px;
		padding-top: 20px;
		border-top: 1px solid #333;
	}

	.system-info h4 {
		color: #0f0;
		margin: 0 0 10px 0;
		font-size: 12px;
	}

	.info-line {
		font-size: 11px;
		color: #0a0;
		margin: 5px 0;
	}

	.info-line.warning {
		color: #fa0;
		animation: blink 3s infinite;
	}

	.content-area {
		flex: 1;
		padding: 20px;
		overflow-y: auto;
		background: #000;
	}

	.content-section h2, .default-content h2 {
		color: #0f0;
		margin: 0 0 20px 0;
		font-size: 16px;
		border-bottom: 2px solid #0f0;
		padding-bottom: 10px;
	}

	.project-description {
		background: #111;
		border: 1px solid #0a0;
		padding: 15px;
		margin-bottom: 25px;
	}

	.project-description p {
		margin: 5px 0;
		color: #0a0;
	}

	.file-accordion {
		margin-bottom: 25px;
	}

	.accordion-section {
		margin-bottom: 10px;
	}

	.accordion-header {
		width: 100%;
		background: #000;
		color: #0f0;
		border: 1px solid #0f0;
		padding: 15px;
		text-align: left;
		font-family: 'Courier New', monospace;
		cursor: pointer;
		transition: all 0.2s;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.accordion-header:hover {
		background: #003;
		border-color: #0ff;
		color: #0ff;
	}

	.download-indicator {
		color: #fa0;
		font-size: 11px;
		font-weight: bold;
	}

	.access-warning {
		background: #330;
		border: 1px solid #fa0;
		padding: 15px;
		color: #fa0;
	}

	.access-warning p {
		margin: 5px 0;
		font-size: 11px;
	}

	.welcome-message {
		background: #111;
		border: 1px solid #0a0;
		padding: 20px;
		margin-bottom: 25px;
	}

	.welcome-message p {
		margin: 8px 0;
		color: #0a0;
	}

	.recent-activity h3 {
		color: #0f0;
		margin: 0 0 15px 0;
		font-size: 14px;
	}

	.activity-log {
		background: #111;
		border: 1px solid #333;
		padding: 15px;
	}

	.log-entry {
		color: #0a0;
		font-size: 11px;
		margin: 5px 0;
		border-bottom: 1px dotted #333;
		padding: 3px 0;
	}

	@keyframes blink {
		0%, 50% { opacity: 1; }
		51%, 100% { opacity: 0.5; }
	}

	@media (max-width: 768px) {
		.archive-body {
			flex-direction: column;
		}
		
		.sidebar {
			width: 100%;
			height: auto;
		}
		
		.status-bar {
			flex-wrap: wrap;
			gap: 10px;
		}
	}
</style>
