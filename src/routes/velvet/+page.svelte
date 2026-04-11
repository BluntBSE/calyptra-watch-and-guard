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
                    supporting <em>The Matter of Being</em>, an upcoming game
                    set in the world of <em>Cultist Simulator</em>. This link
                    can be shared.
                </p>

                <div class="links">
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
                        href="https://store.steampowered.com/app/3869880/The_Matter_of_Being/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="link steam-link"
                    >
                        <span class="link-icon">⬡</span>
                        View on Steam
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
        align-items: center;
        justify-content: flex-end;
        overflow: hidden;
        background: #0a0a0a;
    }

    .background-image {
        position: absolute;
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
        z-index: 1;
        padding: 2rem 4rem 2rem 2rem;
        display: flex;
        align-items: center;
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
        overflow: hidden;
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

    .links {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .link {
        display: flex;
        align-items: center;
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
        overflow: hidden;
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

    @media (max-width: 768px) {
        .velvet-overlay {
            justify-content: center;
            align-items: flex-end;
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
