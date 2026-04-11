<script lang="ts">
    // Homepage for Calyptra Securities
</script>

<svelte:head>
    <title>
        Calyptra Watch & Guard - Distinguished Private Investigation Services
    </title>
</svelte:head>

<div class="hero">
    <div class="hero-content">
        <h1>Your Security Experts</h1>
        <p class="hero-subtitle">
            Since 1961, Calyptra Watch & Guard has provided confidential
            investigative and security services.
        </p>
    </div>
</div>

<section class="services-preview">
    <div class="container">
        <h2>Our Services</h2>
        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon">📧</div>
                <h3>Evictions</h3>
                <p>
                    Discreet removal of unwelcome tenants that cannot be removed
                    by normal and corporeal means.
                </p>
            </div>
            <div class="service-card">
                <div class="service-icon">🔍</div>
                <h3>Translation</h3>
                <p>
                    We are able to translate documents written in Mandaic,
                    Sanskrit, and Lakeside Latin.
                </p>
            </div>
            <div class="service-card">
                <div class="service-icon">💼</div>
                <h3>Asset Recovery</h3>
                <p>
                    Location and recovery of missing persons, stolen property,
                    and assets impercetible.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="why-choose">
    <div class="container">
        <div class="why-choose-content">
            <div class="why-choose-text">
                <h2>Why Choose Calyptra Watch & Guard?</h2>
                <p>
                    Our team has been trusted by governments worldwide to handle
                    matters for which there is no legal precedent.
                </p>
                <ul>
                    <li>
                        <strong>Established Reputation:</strong> Nearly a five
                        combined centuries of experience to clienteles across
                        history.
                    </li>
                    <li>
                        <strong>Powerful Network:</strong> Our teams enjoy the
                        support of moles worldwide.
                    </li>
                    <li>
                        <strong>Select Clientele:</strong> We maintain the right
                        to accept only cases that align with our standards and
                        capabilities.
                    </li>
                </ul>
            </div>
            <div class="why-choose-image">
                <img
                    src="/images/recovery.png"
                    alt="Etruscan figure from the St. Petersburg Hermitage"
                    class="vintage-image"
                />
                <p>
                    CWG was involved in the recovery of this artifact during the
                    2007 incident at the St. Petersburg Hermitage
                </p>
            </div>
        </div>
    </div>
</section>

<section class="testimonials">
    <div class="container">
        <h2>Client Testimonials</h2>
        <div class="testimonials-grid">
            <div class="testimonial">
                <blockquote>
                    "The discretion and professionalism exhibited during our
                    family matter was exemplary. Results were delivered exactly
                    as promised, without unnecessary fanfare."
                </blockquote>
                <cite>Chairman Emeritus, Continental Banking Corporation</cite>
            </div>
            <div class="testimonial">
                <blockquote>
                    "When our board required sensitive background verification,
                    Calyptra's thoroughness and confidentiality proved
                    invaluable to our decision-making process."
                </blockquote>
                <cite>Senior Partner, Whitmore & Associates</cite>
            </div>
            <div class="testimonial">
                <blockquote>
                    "Their old-fashioned approach to client service, their vast
                    historical knowledge, and their revolutionary technologies
                    were all of incredible help during our situation."
                </blockquote>
                <cite>Estate Administrator, Blackwood Trust</cite>
            </div>
        </div>
    </div>
</section>

<style>
    .hero {
        background: linear-gradient(180deg, #1a1a1a 0%, #0b0b0b 100%);
        color: #e8e6e3;
        padding: 6rem 0;
        text-align: center;
        margin: 3rem -3rem 0;
        border-bottom: 1px solid #2a2a2a;
        position: relative;
    }

    .hero::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image:
            radial-gradient(
                circle at 30% 70%,
                rgba(255, 198, 126, 0.05) 0%,
                transparent 50%
            ),
            radial-gradient(
                circle at 70% 30%,
                rgba(255, 198, 126, 0.03) 0%,
                transparent 50%
            );
        pointer-events: none;
    }

    .hero-content {
        max-width: 800px;
        margin: 0 auto;
        padding: 0 3rem;
        position: relative;
        z-index: 1;
    }

    .hero h1 {
        font-size: 3.5rem;
        margin-bottom: 2rem;
        font-weight: normal;
        font-family: "Times New Roman", serif;
        color: #ffc67e;
        letter-spacing: 1px;
        text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8);
        line-height: 1.2;
    }

    .hero-subtitle {
        font-size: 1.1rem;
        margin-bottom: 3rem;
        line-height: 1.8;
        color: #b8b5a7;
        font-family: "Courier New", monospace;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 3rem;
    }

    .hero-buttons {
        display: flex;
        gap: 2rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    .btn {
        padding: 1.2rem 2.5rem;
        text-decoration: none;
        border-radius: 0;
        font-weight: normal;
        font-family: "Times New Roman", serif;
        font-size: 1rem;
        letter-spacing: 0.5px;
        transition: all 0.4s ease;
        border: 1px solid #ffc67e;
        position: relative;
        overflow: hidden;
    }

    .btn::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 198, 126, 0.1),
            transparent
        );
        transition: left 0.5s ease;
    }

    .btn:hover::before {
        left: 100%;
    }

    .btn-primary {
        background: rgba(255, 198, 126, 0.1);
        color: #ffc67e;
        border: 1px solid #ffc67e;
    }

    .btn-primary:hover {
        background: #ffc67e;
        color: #0b0b0b;
        box-shadow: 0 4px 20px rgba(255, 198, 126, 0.3);
    }

    .btn-secondary {
        background: transparent;
        color: #e8e6e3;
        border: 1px solid #a68b6b;
    }

    .btn-secondary:hover {
        background: #a68b6b;
        color: #0b0b0b;
        border: 1px solid #a68b6b;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 3rem;
    }

    .services-preview {
        padding: 6rem 0;
        background: #0b0b0b;
    }

    .services-preview h2 {
        text-align: center;
        margin-bottom: 4rem;
        font-size: 2.8rem;
        color: #ffc67e;
        font-family: "Times New Roman", serif;
        font-weight: normal;
        letter-spacing: 1px;
    }

    .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 3rem;
    }

    .service-card {
        background: linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%);
        padding: 3rem 2rem;
        border: 1px solid #2a2a2a;
        text-align: center;
        transition: all 0.4s ease;
        position: relative;
        overflow: hidden;
    }

    .service-card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, transparent, #ffc67e, transparent);
        opacity: 0;
        transition: opacity 0.4s ease;
    }

    .service-card:hover::before {
        opacity: 1;
    }

    .service-card:hover {
        transform: translateY(-8px);
        border-color: #ffc67e;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    }

    .service-icon {
        font-size: 3rem;
        margin-bottom: 2rem;
        filter: sepia(100%) hue-rotate(25deg) saturate(200%);
    }

    .service-card h3 {
        color: #ffc67e;
        margin-bottom: 1.5rem;
        font-size: 1.4rem;
        font-family: "Times New Roman", serif;
        font-weight: normal;
        letter-spacing: 0.5px;
    }

    .service-card p {
        color: #b8b5a7;
        line-height: 1.7;
        font-family: "Courier New", monospace;
        font-size: 0.9rem;
    }

    .why-choose {
        padding: 6rem 0;
        background: #0f0f0f;
        border-top: 1px solid #2a2a2a;
        border-bottom: 1px solid #2a2a2a;
    }

    .why-choose-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;
        align-items: center;
    }

    .why-choose h2 {
        color: #ffc67e;
        font-size: 2.5rem;
        margin-bottom: 2rem;
        font-family: "Times New Roman", serif;
        font-weight: normal;
        letter-spacing: 0.5px;
    }

    .why-choose p {
        color: #b8b5a7;
        font-size: 1rem;
        margin-bottom: 2.5rem;
        line-height: 1.8;
        font-family: "Courier New", monospace;
    }

    .why-choose ul {
        list-style: none;
        padding: 0;
    }

    .why-choose li {
        padding: 1rem 0;
        color: #b8b5a7;
        position: relative;
        padding-left: 2rem;
        font-family: "Courier New", monospace;
        line-height: 1.6;
        border-bottom: 1px solid rgba(166, 139, 107, 0.2);
    }

    .why-choose li:last-child {
        border-bottom: none;
    }

    .why-choose li::before {
        content: "▸";
        position: absolute;
        left: 0;
        color: #ffc67e;
        font-weight: bold;
        font-size: 1.2rem;
    }

    .why-choose strong {
        color: #ffc67e;
        font-family: "Times New Roman", serif;
    }

    .vintage-image {
        width: 100%;
        height: auto;
        border: 2px solid #ffc67e;
        filter: sepia(20%) contrast(120%) brightness(90%);
        transition: all 0.3s ease;
    }

    .vintage-image:hover {
        filter: sepia(10%) contrast(110%) brightness(100%);
        box-shadow: 0 10px 30px rgba(255, 198, 126, 0.2);
    }

    .testimonials {
        padding: 6rem 0;
        background: #0b0b0b;
    }

    .testimonials h2 {
        text-align: center;
        margin-bottom: 4rem;
        font-size: 2.8rem;
        color: #ffc67e;
        font-family: "Times New Roman", serif;
        font-weight: normal;
        letter-spacing: 1px;
    }

    .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 3rem;
    }

    .testimonial {
        background: linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%);
        padding: 3rem;
        border-left: 4px solid #ffc67e;
        border-top: 1px solid #2a2a2a;
        border-right: 1px solid #2a2a2a;
        border-bottom: 1px solid #2a2a2a;
        position: relative;
    }

    .testimonial::before {
        content: '"';
        position: absolute;
        top: 1rem;
        left: 1.5rem;
        font-size: 4rem;
        color: rgba(255, 198, 126, 0.3);
        font-family: "Times New Roman", serif;
        line-height: 1;
    }

    .testimonial blockquote {
        font-style: italic;
        margin: 2rem 0 2rem 0;
        color: #e8e6e3;
        line-height: 1.7;
        font-family: "Times New Roman", serif;
        font-size: 1rem;
        position: relative;
        z-index: 1;
    }

    .testimonial cite {
        color: #a68b6b;
        font-size: 0.9rem;
        font-family: "Courier New", monospace;
        letter-spacing: 0.5px;
    }

    .testimonial cite::before {
        content: "— ";
        color: #ffc67e;
    }

    @media (max-width: 768px) {
        .hero {
            margin: 2rem -2rem 0;
        }

        .hero h1 {
            font-size: 2.5rem;
        }

        .hero-subtitle {
            font-size: 1rem;
        }

        .hero-buttons {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }

        .why-choose-content {
            grid-template-columns: 1fr;
            gap: 3rem;
        }

        .services-grid,
        .testimonials-grid {
            grid-template-columns: 1fr;
        }

        .container {
            padding: 0 2rem;
        }

        .service-card,
        .testimonial {
            padding: 2rem;
        }
    }
</style>
