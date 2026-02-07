// --- TAB SWITCHING LOGIC ---
function openTab(tabId, btn) {
    // Hide all content cards
    document.querySelectorAll('.content-card').forEach(el => el.classList.remove('active'));
    // Deactivate all buttons
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    
    // Show selected tab and activate button
    document.getElementById(tabId).classList.add('active');
    btn.classList.add('active');
}

// --- MUSIC TOGGLE LOGIC ---
function toggleMusic() {
    const audio = document.getElementById('bg-music');
    if(audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// --- PHOTO LIKE ANIMATION ---
function likePhoto(el) {
    // Create heart element
    const heart = document.createElement('div');
    heart.innerText = '❤️';
    
    // Style heart
    heart.style.position = 'absolute'; 
    heart.style.top = '50%'; 
    heart.style.left = '50%';
    heart.style.transform = 'translate(-50%, -50%) scale(0)'; 
    heart.style.fontSize = '3rem';
    heart.style.pointerEvents = 'none';
    
    // Apply animation defined in CSS
    heart.style.animation = 'popHeart 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
    
    el.appendChild(heart);
    
    // Remove after animation completes
    setTimeout(() => heart.remove(), 1000);
}

// --- ROSE SENDING LOGIC ---
let count = 0;
const sweetMessages = ["My Love ❤️", "My Cutu 😘", "My Baby 👶", "Mera Shona ✨", "Mera Rashogulla 🍬", "I Love You!"];

function sendRose(e) {
    count++;
    
    // Update text
    document.getElementById('counter').innerText = `Roses: ${count}`;
    document.getElementById('garden').innerHTML += '🌹 ';
    
    // Trigger floating popup
    createFloatingPopup(e.clientX, e.clientY);
    
    // Alert every 10 roses
    if (count % 10 === 0) { 
        setTimeout(() => { 
            alert(`Wow! You've sent ${count} roses! I love you so much, my Rashogulla! ❤️`); 
        }, 100); 
    }
}

// --- FLOATING POPUP LOGIC ---
function createFloatingPopup(x, y) {
    const msg = document.createElement('div');
    msg.classList.add('floating-msg');
    
    // Random message
    msg.innerText = sweetMessages[Math.floor(Math.random() * sweetMessages.length)];
    
    // Position near click with slight random offset
    const randomX = Math.random() * 60 - 30; 
    msg.style.left = (x + randomX) + 'px'; 
    msg.style.top = y + 'px';
    
    // Fallback for mobile center if coordinates are 0
    if (x === 0 && y === 0) { 
        msg.style.left = '50%'; 
        msg.style.top = '50%'; 
        msg.style.transform = 'translate(-50%, -50%)'; 
    }
    
    document.body.appendChild(msg);
    
    // Remove after animation
    setTimeout(() => msg.remove(), 2000);
}