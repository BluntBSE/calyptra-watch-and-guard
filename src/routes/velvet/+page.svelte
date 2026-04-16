<script lang="ts">
    let copied = false;
    let copyTimeout: ReturnType<typeof setTimeout>;

    async function copyLink() {
        try {
            await navigator.clipboard.writeText(window.location.href);
            copied = true;
            clearTimeout(copyTimeout);
            copyTimeout = setTimeout(() => {
                copied = false;
            }, 2000);
        } catch {
            // Fallback for older browsers
            const textArea = document.createElement("textarea");
            textArea.value = window.location.href;
            textArea.style.position = "fixed";
            textArea.style.opacity = "0";
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
            copied = true;
            clearTimeout(copyTimeout);
            copyTimeout = setTimeout(() => {
                copied = false;
            }, 2000);
        }
    }
</script>

<svelte:head>
    <title>???</title>
    <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="velvet-overlay">
    <div class="background-image">
        <img src="/images/velvet-bg.png" alt="" />
    </div>

    <div class="modal-container">
        <div class="modal">
            <div class="modal-image">
                <img
                    class="placeholder-image"
                    src="/images/velvet-square.png"
                    alt="Velvet reward"
                />
            </div>

            <div class="modal-body">
                <p class="secret-text">
                    You've found a secret. Use the link below to unlock the
                    <span class="highlight">'Velvet'</span> reward tier when
                    supporting
                    <a
                        href="https://store.steampowered.com/app/3869880/The_Matter_of_Being/"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><em>The Matter of Being</em></a
                    >, an upcoming game set in the world of
                    <a
                        href="https://store.steampowered.com/app/718670/Cultist_Simulator/"
                        target="_blank"
                        rel="noopener noreferrer"><em>Cultist Simulator</em></a
                    >. This link can be shared with others.
                </p>

                <div class="links">
                    <a
                        href="https://www.kickstarter.com/projects/tmob/the-matter-of-being/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="link kickstarter-link"
                    >
                        <span class="link-icon">✶</span>
                        View the Kickstarter Page
                    </a>
                    <a
                        href="https://www.kickstarter.com/projects/tmob/488435865?secret_reward_token=5941f42c"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="link kickstarter-link"
                    >
                        <span class="link-icon">★</span>
                        Unlock the Velvet Tier on Kickstarter
                    </a>

                    <a
                        href="https://discord.gg/CAE6atnwqw"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="link discord-link"
                    >
                        <span class="link-icon">◈</span>
                        Join the Discord
                    </a>
                </div>
                <p class="secret-text">Got here pre-launch? You can come back any time. Already supported
                us? You can change your backer tier. If you want to keep your existing
                pledge and just want the "Velvet" role, send us a message on KS or
                @BluntBSE on Discord. There is one more secret to be found for those
                foolish enough to take risky jobs.</p>
            </div>
        </div>
    </div>
</div>

<style>
    .velvet-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10000;
        display: flex;
        align-items: safe center;
        justify-content: flex-end;
        overflow-y: auto;
        background: #0a0a0a;
    }

    .background-image {
        position: fixed;
        inset: 0;
        z-index: 0;
    }

    .background-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        display: block;
        opacity: 0.6;
    }

    /* Gradient scrim on the right to help the modal read */
    .background-image::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
            to right,
            transparent 30%,
            rgba(10, 10, 10, 0.6) 60%,
            rgba(10, 10, 10, 0.85) 100%
        );
        pointer-events: none;
    }

    .modal-container {
        position: relative;
        margin: auto 0;
        z-index: 1;
        padding: 2rem 4rem 2rem 2rem;
        display: flex;
        align-items: safe center;
        justify-content: flex-end;
        max-width: 520px;
        width: 100%;
    }

    .modal {
        background: linear-gradient(
            145deg,
            rgba(20, 18, 15, 0.95) 0%,
            rgba(12, 10, 8, 0.97) 100%
        );
        border: 1px solid rgba(255, 198, 126, 0.25);
        box-shadow:
            0 25px 60px rgba(0, 0, 0, 0.7),
            0 0 80px rgba(255, 198, 126, 0.05),
            inset 0 1px 0 rgba(255, 198, 126, 0.1);
        padding: 2.5rem;
        max-width: 440px;
        width: 100%;
        backdrop-filter: blur(20px);
        animation: fadeSlideIn 0.8s ease-out;
    }

    @keyframes fadeSlideIn {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .modal-image {
        margin-bottom: 2rem;
        text-align: center;
    }

    .placeholder-image {
        width: 100%;
        aspect-ratio: 1 / 1;
        background: linear-gradient(145deg, #1a1816 0%, #0f0e0c 100%);
        border: 1px solid rgba(255, 198, 126, 0.15);
        position: relative;
        overflow-y: auto;
    }

    .placeholder-image::after {
        content: "";
        position: absolute;
        inset: 0;
        background:
            linear-gradient(
                45deg,
                transparent 48%,
                rgba(255, 198, 126, 0.06) 50%,
                transparent 52%
            ),
            linear-gradient(
                -45deg,
                transparent 48%,
                rgba(255, 198, 126, 0.06) 50%,
                transparent 52%
            );
        background-size: 30px 30px;
    }

    .modal-body {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .secret-text {
        color: #c8c4b8;
        font-family: "Courier New", "Lucida Console", Monaco, monospace;
        font-size: 0.92rem;
        line-height: 1.8;
        margin: 0;
    }

    .highlight {
        color: #ffc67e;
        font-weight: bold;
        font-family: "Times New Roman", serif;
        font-size: 1.05rem;
        letter-spacing: 0.5px;
    }

    .secret-text em {
        color: #e8e6e3;
        font-style: italic;
        font-family: "Times New Roman", serif;
    }

    .secret-text a {
        color: #e8e6e3;
        text-decoration: underline;
        text-decoration-color: rgba(255, 198, 126, 0.4);
        text-underline-offset: 2px;
        transition: all 0.3s ease;
    }

    .secret-text a:hover {
        color: #ffc67e;
        text-decoration-color: #ffc67e;
    }

    .links {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .link {
        display: flex;
        align-items: safe center;
        gap: 0.75rem;
        padding: 1rem 1.25rem;
        text-decoration: none;
        font-family: "Times New Roman", serif;
        font-size: 0.95rem;
        letter-spacing: 0.3px;
        transition: all 0.35s ease;
        border: 1px solid rgba(255, 198, 126, 0.15);
        background: rgba(255, 198, 126, 0.03);
        color: #c8c4b8;
        position: relative;
        overflow-y: auto;
    }

    .link::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 198, 126, 0.06),
            transparent
        );
        transition: left 0.5s ease;
    }

    .link:hover::before {
        left: 100%;
    }

    .link:hover {
        border-color: rgba(255, 198, 126, 0.5);
        color: #ffc67e;
        background: rgba(255, 198, 126, 0.08);
        box-shadow: 0 4px 20px rgba(255, 198, 126, 0.1);
        transform: translateX(-4px);
    }

    .link-icon {
        color: #ffc67e;
        font-size: 1.1rem;
        flex-shrink: 0;
        opacity: 0.7;
        transition: opacity 0.3s ease;
    }

    .link:hover .link-icon {
        opacity: 1;
    }

    .kickstarter-link {
        border-color: rgba(255, 198, 126, 0.3);
        background: rgba(255, 198, 126, 0.06);
        color: #ffc67e;
    }

    .kickstarter-link:hover {
        background: rgba(255, 198, 126, 0.15);
        border-color: #ffc67e;
        box-shadow: 0 4px 30px rgba(255, 198, 126, 0.2);
    }

    .copy-link {
        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        font-family: "Times New Roman", serif;
        font-size: 0.95rem;
        transition: all 0.35s ease;
    }

    .copy-link.copied {
        border-color: rgba(144, 238, 144, 0.4);
        color: #90ee90;
        background: rgba(144, 238, 144, 0.08);
    }

    .copy-link.copied .link-icon {
        color: #90ee90;
        opacity: 1;
    }

    @media (max-width: 768px) {
        .velvet-overlay {
            justify-content: center;
            align-items: safe flex-end;
        }

        .background-image::after {
            background: linear-gradient(
                to bottom,
                transparent 20%,
                rgba(10, 10, 10, 0.7) 50%,
                rgba(10, 10, 10, 0.92) 100%
            );
        }

        .modal-container {
            padding: 1.25rem;
            max-width: 100%;
            justify-content: center;
            margin-bottom: 1rem;
        }

        .modal {
            padding: 1.75rem;
            max-width: 100%;
        }

        .placeholder-image {
            max-width: 200px;
            margin: 0 auto;
            display: block;
        }

        .secret-text {
            font-size: 0.85rem;
        }
    }
</style>
