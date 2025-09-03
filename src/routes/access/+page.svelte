<!-- Login portal for CWG Archive access -->
<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	
	export let form;

	let password = '';
	let isLoading = false;

	onMount(() => {
		// Check if already authenticated
		if (typeof window !== 'undefined' && sessionStorage.getItem('cwg_authenticated') === 'true') {
			goto('/archive');
		}
	});

	// Handle form enhancement for better UX
	const handleSubmit = () => {
		isLoading = true;
		return async ({ result, update }) => {
			if (result.type === 'redirect') {
				// Store authentication in session before redirect
				sessionStorage.setItem('cwg_authenticated', 'true');
			}
			await update();
			isLoading = false;
		};
	};
</script>

<svelte:head>
	<title>CWG Access Portal</title>
</svelte:head>

<div class="access-container">
	<div class="terminal-window">
		<div class="terminal-header">
			<div class="terminal-title">CALYPTRA WATCH & GUARD :: SECURE ACCESS</div>
		</div>
		
		<div class="terminal-body">
			<div class="ascii-logo">
				<pre>
  ██████╗██╗    ██╗ ██████╗ 
 ██╔════╝██║    ██║██╔════╝ 
 ██║     ██║ █╗ ██║██║  ███╗
 ██║     ██║███╗██║██║   ██║
 ╚██████╗╚███╔███╔╝╚██████╔╝
  ╚═════╝ ╚══╝╚══╝  ╚═════╝ 
				</pre>
			</div>

			<div class="access-form">
				<div class="system-info">
					<p>ARCHIVE ACCESS TERMINAL v2.1.7</p>
					<p>AUTHORIZED PERSONNEL ONLY</p>
					<p>All access attempts are logged and monitored.</p>
				</div>

				<div class="login-section">
					<form method="POST" use:enhance={handleSubmit}>
						<label for="access-code">ACCESS CODE:</label>
						<input 
							id="access-code"
							name="password"
							type="password" 
							bind:value={password}
							placeholder="Enter authorization code"
							disabled={isLoading}
							autocomplete="off"
							required
						/>
						
						{#if form?.error}
							<div class="error-message">
								ERROR: {form.error}
							</div>
						{/if}

						<button 
							type="submit"
							disabled={isLoading || !password}
							class="access-button"
						>
							{isLoading ? 'AUTHENTICATING...' : 'ACCESS ARCHIVE'}
						</button>
					</form>
				</div>

				<div class="warning-text">
					<p>⚠ WARNING: Unauthorized access is prohibited</p>
					<p>This system is monitored. Violations will be prosecuted.</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.access-container {
		min-height: 100vh;
		background: #000;
		color: #0f0;
		font-family: 'Courier New', monospace;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
	}

	.terminal-window {
		background: #000;
		border: 2px solid #0f0;
		border-radius: 8px;
		width: 100%;
		max-width: 600px;
		box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
	}

	.terminal-header {
		background: #0f0;
		color: #000;
		padding: 8px 15px;
		font-weight: bold;
		text-align: center;
	}

	.terminal-title {
		font-size: 14px;
		letter-spacing: 1px;
	}

	.terminal-body {
		padding: 30px;
	}

	.ascii-logo {
		text-align: center;
		color: #0f0;
		margin-bottom: 30px;
		font-size: 12px;
	}

	.system-info {
		text-align: center;
		margin-bottom: 30px;
		color: #0a0;
	}

	.system-info p {
		margin: 5px 0;
		font-size: 12px;
	}

	.login-section {
		margin-bottom: 30px;
	}

	label {
		display: block;
		margin-bottom: 10px;
		color: #0f0;
		font-weight: bold;
	}

	input {
		width: 100%;
		background: #000;
		color: #0f0;
		border: 1px solid #0f0;
		padding: 12px;
		font-family: 'Courier New', monospace;
		font-size: 14px;
		margin-bottom: 15px;
		box-sizing: border-box;
	}

	input:focus {
		outline: none;
		border-color: #0ff;
		box-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
	}

	input::placeholder {
		color: #060;
	}

	.access-button {
		width: 100%;
		background: #000;
		color: #0f0;
		border: 2px solid #0f0;
		padding: 12px;
		font-family: 'Courier New', monospace;
		font-size: 14px;
		font-weight: bold;
		cursor: pointer;
		transition: all 0.2s;
	}

	.access-button:hover:not(:disabled) {
		background: #0f0;
		color: #000;
		box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
	}

	.access-button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.error-message {
		background: #330;
		border: 1px solid #f00;
		color: #f00;
		padding: 10px;
		margin-bottom: 15px;
		text-align: center;
		animation: blink 1s infinite;
	}

	@keyframes blink {
		0%, 50% { opacity: 1; }
		51%, 100% { opacity: 0.5; }
	}

	.warning-text {
		text-align: center;
		color: #880;
		font-size: 11px;
	}

	.warning-text p {
		margin: 5px 0;
	}

	@media (max-width: 768px) {
		.access-container {
			padding: 10px;
		}
		
		.terminal-body {
			padding: 20px;
		}
		
		.ascii-logo pre {
			font-size: 10px;
		}
	}
</style>
