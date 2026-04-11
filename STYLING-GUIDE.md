# STYLING QUICK REFERENCE

## 🎨 KEY STYLE FILES TO MODIFY

### 1. Main Layout Styles (`src/routes/+layout.svelte`)
```css
<style>
    /* Lines 100-200: Global styles, navigation, footer */
    
    /* Color Variables */
    :root {
        --bg-dark: #0a0a0a;
        --text-light: #f0f0f0;
        --accent-gold: #8b7355;
        --border-color: #333;
    }
    
    /* Typography */
    body {
        font-family: 'Times New Roman', serif;
        background: var(--bg-dark);
        color: var(--text-light);
        line-height: 1.6;
    }
    
    /* Navigation */
    nav a {
        color: var(--text-light);
        text-decoration: none;
        padding: 0 15px;
        transition: color 0.3s;
    }
    
    nav a:hover {
        color: var(--accent-gold);
    }
</style>
```

### 2. Homepage Styles (`src/routes/+page.svelte`)
```css
<style>
    /* Lines 50-150: Hero section, service cards */
    
    .hero {
        text-align: center;
        padding: 60px 0;
        background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8));
    }
    
    .service-card {
        background: rgba(0,0,0,0.6);
        border: 1px solid var(--accent-gold);
        padding: 25px;
        margin: 20px 0;
        transition: transform 0.3s;
    }
    
    .service-card:hover {
        transform: translateY(-5px);
        border-color: #fff;
    }
</style>
```

### 3. Career Page Styles (`src/routes/careers/+page.svelte`)
```css
<style>
    /* Lines 100-300: Job listing, application form */
    
    .job-listing {
        background: rgba(0,0,0,0.8);
        border: 1px solid var(--accent-gold);
        padding: 30px;
        margin: 30px 0;
    }
    
    .application-form {
        background: #111;
        padding: 30px;
        border: 2px solid var(--accent-gold);
    }
    
    input, textarea {
        width: 100%;
        background: rgba(0,0,0,0.9);
        color: var(--text-light);
        border: 1px solid var(--accent-gold);
        padding: 12px;
        font-family: 'Times New Roman', serif;
    }
    
    button {
        background: var(--accent-gold);
        color: #000;
        border: none;
        padding: 12px 30px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s;
    }
    
    button:hover {
        background: #fff;
        transform: translateY(-2px);
    }
</style>
```

### 4. Access Portal Styles (`src/routes/access/+page.svelte`)
```css
<style>
    /* Lines 150-400: Terminal interface, login form */
    
    .access-container {
        min-height: 100vh;
        background: #000;
        color: #0f0;  /* Terminal green */
        font-family: 'Courier New', monospace;
    }
    
    .terminal-window {
        background: #000;
        border: 2px solid #0f0;
        border-radius: 8px;
        box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
    }
    
    .terminal-header {
        background: #0f0;
        color: #000;
        padding: 8px 15px;
        font-weight: bold;
        text-align: center;
    }
    
    input {
        background: #000;
        color: #0f0;
        border: 1px solid #0f0;
        font-family: 'Courier New', monospace;
    }
    
    input:focus {
        border-color: #0ff;
        box-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
    }
</style>
```

### 5. Archive Interface Styles (`src/routes/archive/+page.svelte`)
```css
<style>
    /* Lines 200-500: Archive monitor, sidebar, content */
    
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
    }
    
    .sidebar {
        width: 280px;
        background: #111;
        border-right: 2px solid #0f0;
        padding: 20px;
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
    }
    
    .accordion-header {
        width: 100%;
        background: #000;
        color: #0f0;
        border: 1px solid #0f0;
        padding: 15px;
        font-family: 'Courier New', monospace;
        cursor: pointer;
        transition: all 0.2s;
    }
    
    .accordion-header:hover {
        background: #003;
        border-color: #0ff;
        color: #0ff;
    }
</style>
```

## 🔄 THEME VARIATIONS

### Corporate Blue Theme
```css
:root {
    --bg-primary: #1a1a2e;
    --bg-secondary: #16213e;
    --text-primary: #eee;
    --text-secondary: #ccc;
    --accent-color: #4a69bd;
    --border-color: #0f3460;
}

body {
    background: linear-gradient(135deg, var(--bg-primary), var(--bg-secondary));
}
```

### Vintage Sepia Theme
```css
:root {
    --bg-primary: #2c1810;
    --bg-secondary: #3d2317;
    --text-primary: #f4e4bc;
    --text-secondary: #d4c4a4;
    --accent-color: #8b4513;
    --border-color: #5d3a1a;
}

body {
    background: radial-gradient(circle, var(--bg-primary), var(--bg-secondary));
    font-family: 'Garamond', 'Georgia', serif;
}
```

### Matrix Green Theme
```css
:root {
    --bg-primary: #000;
    --bg-secondary: #001100;
    --text-primary: #0f0;
    --text-secondary: #0a0;
    --accent-color: #0ff;
    --border-color: #003300;
}

body {
    font-family: 'Courier New', monospace;
    text-shadow: 0 0 5px currentColor;
}

/* Add scrolling effect */
@keyframes matrix-scroll {
    0% { transform: translateY(-10px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
}

.nav-item {
    animation: matrix-scroll 0.5s ease-in;
}
```

## 📱 RESPONSIVE DESIGN ADJUSTMENTS

### Mobile Optimization
```css
@media (max-width: 768px) {
    .archive-body {
        flex-direction: column;
    }
    
    .sidebar {
        width: 100%;
        height: auto;
    }
    
    .terminal-window {
        margin: 10px;
        max-width: calc(100vw - 20px);
    }
    
    .service-cards {
        grid-template-columns: 1fr;
    }
    
    nav {
        flex-direction: column;
        gap: 10px;
    }
}

@media (max-width: 480px) {
    body {
        font-size: 14px;
    }
    
    .hero h1 {
        font-size: 2rem;
    }
    
    .terminal-body {
        padding: 15px;
    }
    
    .ascii-logo pre {
        font-size: 10px;
    }
}
```

## 🎭 ANIMATION EFFECTS

### Typing Effect
```css
@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}

.typewriter {
    width: 0;
    animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid currentColor;
}
```

### Glitch Effect
```css
@keyframes glitch {
    0%, 100% { transform: translate(0); }
    10% { transform: translate(-2px, 2px); }
    20% { transform: translate(-2px, -2px); }
    30% { transform: translate(2px, 2px); }
    40% { transform: translate(2px, -2px); }
}

.glitch-effect {
    animation: glitch 0.3s infinite;
}
```

### Fade In Effect
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: fadeInUp 0.8s ease-out;
}
```

## 🔧 QUICK STYLING TIPS

1. **Global Changes:** Modify `:root` variables in `+layout.svelte`
2. **Component-Specific:** Each `.svelte` file has its own `<style>` section
3. **Consistent Branding:** Use CSS custom properties (variables)
4. **Test Responsiveness:** Always check mobile view
5. **Performance:** Use `transform` and `opacity` for animations
6. **Accessibility:** Maintain sufficient color contrast ratios

## 📋 STYLING CHECKLIST

- [ ] Color scheme matches your ARG theme
- [ ] Typography is readable and atmospheric
- [ ] Navigation is intuitive
- [ ] Forms are styled consistently
- [ ] Terminal/archive sections feel authentic
- [ ] Mobile responsiveness works
- [ ] Animations enhance (don't distract from) experience
- [ ] Loading states are handled
- [ ] Error messages are styled appropriately
