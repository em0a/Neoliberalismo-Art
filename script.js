const itemsData = [
    { 
        id: "A1", 
        name: "Malinis na Tubig", 
        icon: "💧", 
        cost: "3 Oras na Kayod", 
        realCost: "Pribatisasyon (Maynilad & Manila Water)", 
        desc: "Likas na yaman naman ang tubig, pero noong 90s, binenta ng gobyerno sa mga pribadong kumpanya sa ilalim ng National Water Crisis Act (RA 8041). Ngayon, kailangan mo nang magpa-subscribe buwan-buwan para lang hindi ka mauhaw.",
        refLink: "https://laws.chanrobles.com/republicacts/81_republicacts.php?id=8045"
    },
    { 
        id: "A2", 
        name: "Kuryente sa Bahay", 
        icon: "⚡", 
        cost: "Puyat at Pagod", 
        realCost: "Deregulasyon (EPIRA Law)", 
        desc: "Isinuko nang buo ang power sector sa malayang merkado sa pamamagitan ng Electric Power Industry Reform Act (RA 9136). Kaya heto tayo ngayon, nagtitiis sa isa sa pinakamahal na singil sa kuryente sa buong Asya para lang gumana ang mga gadget natin.",
        refLink: "https://www.officialgazette.gov.ph/2001/06/08/republic-act-no-9136/"
    },
    { 
        id: "A3", 
        name: "Dignidad sa Biyahe", 
        icon: "🚊", 
        cost: "2 Oras na Bawas-Buhay", 
        realCost: "Public-Private Partnerships (PPP)", 
        desc: "Trinatong negosyo ang public transport imbes na serbisyo sa pamamagitan ng Build-Operate-Transfer Law (RA 7718). Binabayaran mo ang bawat sakay gamit ang oras na ninanakaw sa buhay mo habang nakapila sa siksikang MRT at LRT.",
        refLink: "https://ppp.gov.ph/wp-content/uploads/2015/01/BOT-IRR-2012_FINAL.pdf"
    },
    { 
        id: "B1", 
        name: "Regular na Trabaho", 
        icon: "💼", 
        cost: "Boses at Karapatan", 
        realCost: "Flexible Labor (Endo Loophole)", 
        desc: "Pinapanatili kang kontraktwal ng mga legal na butas tulad ng DOLE Department Order No. 174 para makaiwas ang kumpanya sa pagbibigay ng 13th month pay, SSS, at HMO. Gagamitin ka lang ng limang buwan, tapos itatapon para palitan ng bago.",
        refLink: "https://www.dole9portal.com/qms/references/QP-OO2-11/DO%20174-17.pdf"
    },
    { 
        id: "B2", 
        name: "Buhay sa Pinas", 
        icon: "✈️", 
        cost: "Pamilyang Iiwanan", 
        realCost: "Labor Export Policy ng Estado", 
        desc: "Mula pa sa serye ng Presidential Decrees noong 70s at pinalakas ng Migrant Workers Act (RA 8042), ginawang permanenteng solusyon ang pag-export sa mga utak at lakas natin para mabuhay ang ekonomiya sa remittance imbes na magtayo ng sariling matatag na lokal na industriya.",
        refLink: "https://www.officialgazette.gov.ph/1995/06/07/republic-act-no-8042/"
    },
    { 
        id: "B3", 
        name: "Makataong Edukasyon", 
        icon: "🎓", 
        cost: "Mental Health Mo", 
        realCost: "K-12 & Market-Driven Curriculum", 
        desc: "Ang Enhanced Basic Education Act (RA 10533) ay hindi idinesenyo para matuto kang mag-isip o maglingkod para sa bayan, kundi para maging perpekto, semi-skilled, at murang robot na swak agad sa panlasa ng mga dayuhang BPO at banyagang kumpanya.",
        refLink: "https://www.officialgazette.gov.ph/2013/05/15/republic-act-no-10533/"
    },
    { 
        id: "C1", 
        name: "Lokal na Bigas", 
        icon: "🌾", 
        cost: "Magsasakang Baon sa Utang", 
        realCost: "Rice Tariffication Liberalization", 
        desc: "Dahil sa Rice Tariffication Law (RA 11203), binuksan ang bansa sa murang imported na bigas habang pinabayaan ang sarili nating mga magsasaka na walang sapat na proteksyon. Pinili nating paboran ang dayuhang kalakal kapalit ng pagpatay sa sariling agrikultura.",
        refLink: "https://www.officialgazette.gov.ph/2019/02/14/republic-act-no-11203/"
    },
    { 
        id: "C2", 
        name: "Sapat na Healthcare", 
        icon: "🏥", 
        cost: "Lahat ng Savings Mo", 
        realCost: "Korporatisasyon ng mga Ospital", 
        desc: "Sa ilalim ng neoliberalismo, ang kalusugan ay isang luxury item. Kahit may Universal Health Care Act (RA 11223), korporatisado pa rin ang sistema kaya ang choice mo lang ay maubos ang pera sa pribadong ospital o pumila buong araw sa gobyerno para sa hininga.",
        refLink: "https://www.officialgazette.gov.ph/2019/02/20/republic-act-no-11223/"
    },
    { 
        id: "C3", 
        name: "Sapat na Pondo sa Sinta", 
        icon: "🏫", 
        cost: "Budget Cuts sa SUCs", 
        realCost: "Fiscal Austerity Mandate", 
        desc: "Sinasadyang bawasan ang pondo ng mga pampublikong unibersidad tulad ng PUP sa ilalim ng taunang General Appropriations Act (GAA) upang mapilitan silang mag-commercialize ng mga pasilidad at unti-unting gawing negosyo ang edukasyon.",
        refLink: "https://www.dbm.gov.ph/wp-content/uploads/GAA/GAA2026/VolumeIA/SUCS/B5.pdf"
    }
];

let selectedItem = null;
let coinInserted = false;
let isAnimating = false;
let audioUnlocked = false;

const grid = document.getElementById("windowGrid");
const terminal = document.getElementById("screenTerminal");
const coinSlot = document.getElementById("coinSlot");
const slotHole = document.getElementById("slotHole");
const lifeToken = document.getElementById("lifeToken");
const chute = document.getElementById("chute");
const flapText = document.getElementById("flapText");
const modalOverlay = document.getElementById("modalOverlay");
const closeBtn = document.getElementById("closeBtn");
const startScreen = document.getElementById("startScreen");
const bootBtn = document.getElementById("bootBtn");

function unlockAudio() {
    if (audioUnlocked) return;
    
    if (typeof SOUNDS !== 'undefined') {
        Object.keys(SOUNDS).forEach(key => {
            const sound = SOUNDS[key];
            sound.play().then(() => {
                sound.pause();
                sound.currentTime = 0;
            }).catch(() => {});
        });
        
        if (typeof startBackgroundMusic === "function") {
            startBackgroundMusic();
        }

        audioUnlocked = true;
        console.log("Audio System & BGM: Unlocked Successfully");
    }
}

bootBtn.onclick = (e) => {
    e.stopPropagation(); 
    
    unlockAudio();
    if (typeof playSound === "function") playSound('click');
    
    startScreen.style.opacity = "0";
    setTimeout(() => {
        startScreen.style.display = "none";
    }, 500);
};

itemsData.forEach(item => {
    const slot = document.createElement("div");
    slot.className = "item-slot";
    slot.id = `slot-${item.id}`;
    slot.onclick = () => selectItem(item);
    slot.innerHTML = `
        <div class="item-code">${item.id}</div>
        <div class="item-icon">${item.icon}</div>
        <div class="item-name">${item.name}</div>
        <div class="item-cost">PRESYO: ${item.cost}</div>
    `;
    grid.appendChild(slot);
});

function selectItem(item) {
    if (isAnimating) return;
    
    document.querySelectorAll('.item-slot').forEach(s => s.classList.remove('selected'));
    selectedItem = item;
    document.getElementById(`slot-${item.id}`).classList.add('selected');

    if (!coinInserted) {
        if (typeof playSound === "function") playSound('click');
        
        let nextHTML = `
            PINILI: [${item.id}] ${item.name.toUpperCase()}<br>
            HALAGANG DAPAT PALITAN: ${item.cost.toUpperCase()}<br>
            <span style="color:var(--neon-amber)">[SYSTEM: KULANG ANG KAPITAL. IHULOG ANG BARYA NG BUHAY MO PARA IPROSESO.]</span><br>
            <span class="blink">_</span>
        `;
        
        if (typeof glitchTextEffect === "function") {
            glitchTextEffect(terminal, nextHTML, 300);
        } else {
            terminal.innerHTML = nextHTML;
        }
        
        if (typeof triggerSlotSpark === "function") triggerSlotSpark(true); 
    } else {
        dispenseItem();
    }
}

function playCoinAnimation(callback) {
    if (isAnimating) return;
    isAnimating = true;

    const tokenRect = lifeToken.getBoundingClientRect();
    const slotRect = slotHole.getBoundingClientRect();

    const deltaX = slotRect.left - tokenRect.left + (slotRect.width / 2) - (tokenRect.width / 2);
    const deltaY = slotRect.top - tokenRect.top + (slotRect.height / 2) - (tokenRect.height / 2);

    lifeToken.style.transition = "transform 0.4s ease-in, opacity 0.4s ease-in";
    lifeToken.style.transform = `translate(${deltaX}px, ${deltaY}px) scaleX(0.3) rotate(-15deg)`;

    setTimeout(() => {
        lifeToken.style.transition = "transform 0.3s linear, opacity 0.3s ease-out";
        lifeToken.style.transform = `translate(${deltaX}px, ${deltaY}px) scaleX(0.05) scaleY(0.2) translateY(30px)`;
        lifeToken.style.opacity = "0";

        setTimeout(() => {
            isAnimating = false;
            callback();
        }, 300);
    }, 400);
}

function processPayment() {
    if (coinInserted || isAnimating) return;

    playCoinAnimation(() => {
        coinInserted = true;
        if (typeof playSound === "function") playSound('coinInsert');
        
        if (typeof triggerSlotSpark === "function") triggerSlotSpark(false); 
        lifeToken.style.display = "none";

        if (selectedItem) {
            dispenseItem();
        } else {
            let nextHTML = `
                [KAPITAL: OK]<br>
                LIFESPAN EXTRACTED. KINUHA NA NG SISTEMA ANG ORAS MO.<br>
                PUMILI KUNG ALING KARAPATAN ANG GUSTO MONG BILHIN MULA SA MERKADO...<br>
                <span class="blink">_</span>
            `;
            if (typeof glitchTextEffect === "function") {
                glitchTextEffect(terminal, nextHTML, 300);
            } else {
                terminal.innerHTML = nextHTML;
            }
        }
    });
}

function dispenseItem() {
    if (!selectedItem || !coinInserted) return;

    const itemToDispense = selectedItem;

    if (typeof shakeMachine === "function") shakeMachine();
    if (typeof glitchScreen === "function") glitchScreen();

    let nextHTML = `
        <span style="color:var(--neon-red)">[GINAGAWANG KALAKAL ANG BUHAY...]</span><br>
        SYSTEM: BINABAGO ANG KARAPATAN MO BILANG PRODUKTO...<br>
        TRANSAKSYON: OK. NAKUHA NA NG MERKADO ANG LABOR MO.<br>
        <span style="color:var(--neon-blue)">IPINAPALABAS NA ANG RESIBO SA CHUTE.</span>
    `;
    
    if (typeof glitchTextEffect === "function") {
        glitchTextEffect(terminal, nextHTML, 500);
    } else {
        terminal.innerHTML = nextHTML;
    }

    document.getElementById(`slot-${itemToDispense.id}`).classList.remove('selected');
    flapText.style.opacity = "0";
    
    const oldReceipt = chute.querySelector('.dispensed-receipt');
    if(oldReceipt) oldReceipt.remove();

    setTimeout(() => {
        if (typeof playSound === "function") playSound('dispense');
        
        const receipt = document.createElement("div");
        receipt.className = "dispensed-receipt";
        receipt.innerText = `📄 [RESIBO: ${itemToDispense.id}] - I-CLICK PARA MAKITA ANG HALAGA NG BUHAY MO`;
        
        receipt.onclick = () => openReceipt(itemToDispense);
        chute.appendChild(receipt);
    }, 500);

    selectedItem = null;
    coinInserted = false;
}

function openReceipt(item) {
    if (typeof playSound === "function") playSound('click');
    
    document.getElementById("receiptDate").innerText = "TIMESTAMP: " + new Date().toLocaleString();
    document.getElementById("receiptContent").innerHTML = `
        <p><strong>KARAPATANG BINILI:</strong> <span style="color:var(--neon-red)">${item.name.toUpperCase()}</span></p>
        <p><strong>HALAGANG KINATAS SA'YO:</strong> ${item.cost}</p>
        <p><strong>DAHILAN SA SISTEMA:</strong> <u>${item.realCost}</u></p>
        <hr style="border: 1px dashed #000">
        <p style="text-align:justify; font-style:italic;">"${item.desc}"</p>
        <hr style="border: 1px dashed #000">
        
        <button class="ref-document-btn" onclick="window.open('${item.refLink}', '_blank')">
            🌐 BUKSAN ANG OPISYAL NA DOKUMENTO / BATAS
        </button>
        
        <p style="text-align:center; font-weight:bold; margin-top:15px; font-size:0.95rem;">SALAMAT SA PAGBEBENTA NG ORAS AT BUHAY MO PARA LANG MASUSTENTUHAN ANG MALAYANG MERKADO.</p>
    `;
    modalOverlay.style.display = "flex";
}

function closeModal() {
    modalOverlay.style.display = "none";
    if (typeof playSound === "function") playSound('click');
    
    const receipt = chute.querySelector('.dispensed-receipt');
    if(receipt) receipt.remove();
    
    lifeToken.style.transition = "none";
    lifeToken.style.transform = "none";
    lifeToken.style.opacity = "1";
    lifeToken.style.display = "flex";
    flapText.style.opacity = "1";
    
    terminal.innerHTML = `
        [SYSTEM REBOOTED]<br>
        READY ULIT ANG MAKINA PARA KATASIN ANG SUSUNOD MONG PUHUNAN...<br>
        <span class="blink">_</span>
    `;
}

closeBtn.onclick = closeModal;

coinSlot.onclick = () => {
    if (!selectedItem && !coinInserted && !isAnimating) {
        if (typeof playSound === "function") playSound('error');
        if (typeof glitchScreen === "function") glitchScreen();
        
        let errHTML = `
            <span style="color:var(--neon-red)">[ERROR: WALANG TARGET DATA]</span><br>
            PUMILI MUNA NG PROYEKTONG BIBILHIN BAGO MAG-LIQUIDATE NG KAPITAL...<br>
            <span class="blink">_</span>
        `;
        if (typeof glitchTextEffect === "function") {
            glitchTextEffect(terminal, errHTML, 400);
        } else {
            terminal.innerHTML = errHTML;
        }
        return;
    }
    if (!coinInserted && !isAnimating) processPayment();
};

lifeToken.addEventListener("dragstart", (e) => {
    if (isAnimating || coinInserted) {
        e.preventDefault();
        return;
    }
    e.dataTransfer.setData("text/plain", "coin");
});

coinSlot.addEventListener("dragover", (e) => {
    e.preventDefault();
});

coinSlot.addEventListener("drop", (e) => {
    e.preventDefault();
    if (!selectedItem) {
        if (typeof playSound === "function") playSound('error');
        if (typeof glitchScreen === "function") glitchScreen();
        
        let errHTML = `
            <span style="color:var(--neon-red)">[ERROR: WALANG TARGET DATA]</span><br>
            PUMILI MUNA NG PROYEKTONG BIBILHIN BAGO MAG-LIQUIDATE NG KAPITAL...<br>
            <span class="blink">_</span>
        `;
        if (typeof glitchTextEffect === "function") {
            glitchTextEffect(terminal, errHTML, 400);
        } else {
            terminal.innerHTML = errHTML;
        }
        return;
    }
    if (!coinInserted && !isAnimating) {
        processPayment();
    }
});
