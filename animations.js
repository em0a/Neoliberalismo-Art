const SOUNDS = {
    click: new Audio('sounds/click.mp3'),       
    coinInsert: new Audio('sounds/insert.mp3'), 
    shake: new Audio('sounds/thud.mp3'),        
    dispense: new Audio('sounds/drop.mp3'),     
    error: new Audio('sounds/error.mp3')        
};

function playSound(soundKey) {
    if (SOUNDS[soundKey]) {
        SOUNDS[soundKey].currentTime = 0; 
        SOUNDS[soundKey].play().catch(err => {});
    }
}

function startBackgroundMusic() {
    const bgm = document.getElementById('bgMusic');
    if (bgm) {
        bgm.volume = 0.25; 
        bgm.play().catch(err => {});
    }
}

function shakeMachine() {
    const machine = document.querySelector('.vending-container');
    if (!machine) return;

    playSound('shake');

    let intensity = 12;   
    let duration = 600;    
    let startTime = Date.now();
    const originalBoxShadow = machine.style.boxShadow;

    function executeShake() {
        let elapsed = Date.now() - startTime;
        if (elapsed < duration) {
            let x = (Math.random() - 0.5) * intensity;
            let y = (Math.random() - 0.5) * intensity;
            machine.style.transform = `translate(${x}px, ${y}px) scale(1.01)`;
            machine.style.boxShadow = `0px 0px 30px rgba(255, 51, 51, 0.8), 8px 8px 0px #ff3333`;
            requestAnimationFrame(executeShake);
        } else {
            machine.style.transform = 'translate(0px, 0px) scale(1)';
            machine.style.boxShadow = originalBoxShadow;
        }
    }
    requestAnimationFrame(executeShake);
}

function glitchScreen() {
    const screen = document.getElementById('screenTerminal');
    if (!screen) return;

    screen.style.backgroundColor = '#440000';
    screen.style.color = '#ff3333';
    screen.style.boxShadow = 'inset 0 0 30px #ff0000';
    
    setTimeout(() => {
        screen.style.backgroundColor = '#001100';
        screen.style.color = '#00ff66';
        screen.style.boxShadow = 'inset 0 0 10px #000';
    }, 200);
}

function triggerSlotSpark(activate) {
    const slot = document.getElementById('slotHole');
    if (!slot) return;
    
    if (activate) {
        slot.style.animation = 'slotSpark 0.1s infinite alternate';
    } else {
        slot.style.animation = 'none';
        slot.style.background = '#050505';
    }
}

function glitchTextEffect(targetElement, finalHTML, duration = 400) {
    const chars = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,^`'.";
    const startTime = Date.now();
    
    function updateText() {
        let elapsed = Date.now() - startTime;
        if (elapsed < duration) {
            let randomStr = "";
            let length = 40; 
            for(let i = 0; i < length; i++) {
                randomStr += chars[Math.floor(Math.random() * chars.length)];
                if (i > 0 && i % 8 === 0) randomStr += " ";
            }
            targetElement.innerHTML = `<span style="color: var(--neon-red)">${randomStr}</span>`;
            requestAnimationFrame(updateText);
        } else {
            targetElement.innerHTML = finalHTML;
        }
    }
    requestAnimationFrame(updateText);
}
