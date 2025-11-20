// Egg Crack Animation - JavaScript File
// Add this to your JS file

// CHANGE THIS to your desired redirect URL
const REDIRECT_URL = "https://www.example.com";

let clickCount = 0;
let isExploded = false;

// Initialize the egg animation
function initEggAnimation() {
    const eggWrapper = document.querySelector('.egg-wrapper');
    const egg = document.querySelector('.egg');
    const message = document.querySelector('.egg-message');
    
    if (!eggWrapper) {
        console.error('Egg wrapper not found. Make sure your HTML has the correct structure.');
        return;
    }
    
    // Add click event
    eggWrapper.addEventListener('click', handleEggClick);
}

// Handle egg click
function handleEggClick() {
    if (isExploded) return;
    
    const egg = document.querySelector('.egg');
    const message = document.querySelector('.egg-message');
    
    clickCount++;
    
    // Add shake animation
    egg.classList.add('shake');
    setTimeout(() => egg.classList.remove('shake'), 500);
    
    // Show progressive cracks
    if (clickCount === 1) {
        showCrack(1);
        updateMessage("Keep cracking for a surprise...");
    } else if (clickCount === 2) {
        showCrack(2);
    } else if (clickCount === 3) {
        showCrack(3);
    } else if (clickCount === 4) {
        showCrack(4);
        updateMessage("Almost there! One more crack! 🎉");
    } else if (clickCount === 5) {
        // Explode!
        explodeEgg();
    }
}

// Show crack lines
function showCrack(crackNumber) {
    const crack = document.querySelector(`.crack-${crackNumber}`);
    if (crack) {
        crack.classList.add('visible');
    }
}

// Update message text
function updateMessage(text) {
    const message = document.querySelector('.egg-message');
    if (message) {
        message.textContent = text;
    }
}

// Explode the egg
function explodeEgg() {
    isExploded = true;
    
    const eggWrapper = document.querySelector('.egg-wrapper');
    const egg = document.querySelector('.egg');
    const message = document.querySelector('.egg-message');
    const container = document.querySelector('.egg-container');
    
    // Hide message and egg
    if (message) message.style.display = 'none';
    if (egg) egg.style.opacity = '0';
    
    // Create shell pieces
    createShellPieces(container);
    
    // Create particles
    createParticles(container);
    
    // Create confetti
    createConfetti();
    
    // Show surprise content
    setTimeout(() => {
        showSurprise(container);
    }, 300);
    
    // Show reset button
    setTimeout(() => {
        showResetButton(container);
    }, 800);
    
    // Redirect after 3 seconds
    setTimeout(() => {
        window.location.href = REDIRECT_URL;
    }, 3000);
}

// Create shell pieces
function createShellPieces(container) {
    const pieces = [
        { class: 'shell-1', x: -250, y: 150, rotate: -220 },
        { class: 'shell-2', x: 250, y: 150, rotate: 220 },
        { class: 'shell-3', x: -80, y: -180, rotate: -120 },
        { class: 'shell-4', x: 120, y: -160, rotate: 140 }
    ];
    
    pieces.forEach(piece => {
        const shell = document.createElement('div');
        shell.className = `shell-piece ${piece.class}`;
        container.appendChild(shell);
        
        setTimeout(() => {
            shell.classList.add('explode');
        }, 10);
    });
}

// Create burst particles
function createParticles(container) {
    const colors = ['#ffd700', '#ffed4e', '#ff6b6b', '#4ecdc4'];
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.background = colors[i % colors.length];
        
        const angle = (i * Math.PI * 2) / 20;
        const distance = 150 + Math.random() * 100;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        container.appendChild(particle);
        
        setTimeout(() => {
            particle.style.transform = `translate(${x}px, ${y}px) scale(0)`;
            particle.classList.add('burst');
        }, 10);
    }
}

// Create confetti
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#a29bfe'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.background = colors[i % colors.length];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-20px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0%';
        confetti.style.setProperty('--x-offset', (Math.random() - 0.5) * 200 + 'px');
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        
        document.body.appendChild(confetti);
        
        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, 3500);
    }
}

// Show surprise content
function showSurprise(container) {
    const surprise = document.createElement('div');
    surprise.className = 'surprise-content';
    surprise.innerHTML = `
        <div class="surprise-emoji">🎉</div>
        <div class="surprise-text">SURPRISE!</div>
        <p class="redirecting-text">Redirecting...</p>
    `;
    container.appendChild(surprise);
    
    setTimeout(() => {
        surprise.classList.add('show');
    }, 10);
}

// Show reset button
function showResetButton(container) {
    const resetBtn = document.createElement('button');
    resetBtn.className = 'reset-btn';
    resetBtn.textContent = 'Try Again';
    resetBtn.onclick = resetAnimation;
    container.appendChild(resetBtn);
    
    setTimeout(() => {
        resetBtn.classList.add('show');
    }, 10);
}

// Reset animation
function resetAnimation() {
    clickCount = 0;
    isExploded = false;
    
    // Remove all dynamic elements
    document.querySelectorAll('.shell-piece, .particle, .surprise-content, .reset-btn').forEach(el => el.remove());
    
    // Reset egg
    const egg = document.querySelector('.egg');
    const message = document.querySelector('.egg-message');
    
    if (egg) egg.style.opacity = '1';
    if (message) {
        message.style.display = 'block';
        message.textContent = '🥚 Crack the egg to go to secret page';
    }
    
    // Hide all cracks
    document.querySelectorAll('.crack-svg').forEach(crack => {
        crack.classList.remove('visible');
    });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEggAnimation);
} else {
    initEggAnimation();
}
