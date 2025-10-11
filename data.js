// =================================================================
// పూర్తి JavaScript కోడ్ (UI ఇంజెక్షన్ #id1 ద్వారా)
// =================================================================

// 1. స్థిర డేటా (GOTRA_GANA_MAP)
const GOTRA_GANA_MAP = [
    { gotra: "కాశ్యప", gana: "కాశ్యప", details: "కాశ్యప, అవత్సార, వైధృవేతి,  ఇతి త్రయార్షేయః(గ్రంథస్థం) అనికొందరున్నూ, కాశ్యప, అవత్సార, నైధృవ, రేవరైభ, శల్య, శాండిల్యేతి సప్తార్షేయ" },
    { gotra: "భారద్వాజ", gana: "ఆంగీరస", details: "అంగీరస, బార్హస్పత్య, భారద్వాజేతి ఇతి త్రయార్షేయః" },
    { gotra: "కౌండిన్య", gana: "వశిష్ట", details: "వాశిష్ఠ, మైత్రావరుణ, కౌండిన్యేతి  ఇతి త్రయార్షేయః" },
    { gotra: "శ్రీవత్స", gana: "భృగు", details: "భార్గవ, చ్యావన, అమ్నవా, ఓర్వ, జామదగ్నేతి, ఇతి పంచార్షేయః" },
    { gotra: "కౌశిక", gana: "విశ్వామిత్ర", details: "విశ్వామిత్ర, అఘమర్షణ, కౌశికేతి ఇతి త్రయార్షేయః (వైశ్వామిత్ర, దైవరాత, జౌడలేతి అని గ్రంథస్థం)" },
    { gotra: "ఆత్రేయ", gana: "అతి", details: "ఆత్రేయ, అర్చనానన, శ్వావాన్వేతి ఇతి త్రయార్షేయః" },
    { gotra: "హరీత", gana: "అగస్త్య", details: "అగస్త్య, గార్గేయ, విద్యుత్తేతి ఇతి త్రయార్షేయః (అని వాడుకలోకలదు). అగస్త్యోతి ఏకార్షేయమని ధర్మసింధువు నందు కలదు" },
    { gotra: "పరాశర", gana: "వశిష్ట", details: "వాశిష్ట, శాక్త్య, సారాశర్యేతి ఇతి త్రయార్షేయః" },
    { gotra: "అశ్వలాయన", gana: "ఆంగీరస", details: "ఆంగీరస, ఆయాస్య, గౌతమేతి ఇతి త్రయార్షేయః" },
    { gotra: "కౌండిల్య", gana: "కాశ్యప", details: "కాశ్యప, అసిత, దైవలేతి ఇతి త్రయార్షేయః" },
    { gotra: "వశిష్ఠ", gana: "వశిష్ట", details: "వాశిష్ట, ఇన్ద్ర ప్రమద, ఆభరద్వనేతి ఇతి త్రయార్షేయః" },
    { gotra: "శౌనక", gana: "భృగు", details: "భార్గవ, శౌనకూత్ర, గార్త్సమదేతి ఇతి త్రయార్షేయః" },
    { gotra: "విశ్వామిత్ర", gana: "విశ్వామిత్ర", details: "వైశ్వామిత్ర, అఘమర్షణ, కౌశికేతి ఇతి త్రయార్షేయః" },
    { gotra: "ఋక్షా", gana: "ఆంగీరస", details: "ఆంగీరస, బార్హస్పత్య, భారద్వాజ, వాన్దనమాతవదనేతి ఇతి త్రయార్షేయః" },
    { gotra: "ముద్దల", gana: "ఆంగీరస", details: "ఆంగీరస భార్మ్యస్వ, మౌన్గల్యేతి ఇతి త్రయార్షేయః" },
    { gotra: "ధనంజయ", gana: "విశ్వామిత్ర", details: "వైశ్వామిత్ర, మాధుచ్ఛందన, ధానంజయేతి ఇతి త్రయార్షేయః" },
    { gotra: "కణ్వ", gana: "ఆంగీరస", details: "ఆంగీరస, ఆజామిళ్ళకాణ్వేతి ఇతి త్రయార్షేయః" },
    { gotra: "సాంఖ్యామన", gana: "వాశిష్ట", details: "వాశిష్ట, శక్తి, శాంక్యాయన ఇతి త్రయార్షేయః" },
];

// 2. స్టైల్స్‌ను డైనమిక్‌గా జోడించే ఫంక్షన్ (CSS Injection)
function applyStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Telugu:wght@400;600;700&display=swap');
        body {
            font-family: 'Noto Serif Telugu', serif, sans-serif;
            background-color: #fff8dc;
            color: #4e342e;
            margin: 0; padding: 1rem;
        }
        /* NOTE: The 'container' style will be applied inside the #id1 wrapper */
        
        .container {
            max-width: 480px;
            margin: 0 auto;
            background: #fff9db;
            border-radius: 0.5rem;
            padding: 1.5rem;
            box-shadow: 0 4px 6px rgb(0 0 0 / 0.1);
        }
        h2 {
            text-align: center;
            margin-bottom: 1.5rem;
            font-weight: 700;
        }
        label {
            display: block;
            margin-bottom: 1rem;
            font-weight: 600;
        }
        input[type="text"],
        select,
        input[disabled] {
            width: 100%;
            padding: 0.5rem 0.75rem;
            border: 1px solid #ccc;
            border-radius: 0.25rem;
            font-size: 1rem;
            color: #4e342e;
            box-sizing: border-box;
        }
        input[disabled] {
            background-color: #e0e0e0;
            cursor: not-allowed;
        }
        button {
            width: 100%;
            background-color: #fdd835;
            color: #4e342e;
            font-weight: 700;
            padding: 0.75rem;
            border: none;
            border-radius: 0.25rem;
            cursor: pointer;
            margin-top: 1rem;
            transition: background-color 0.3s ease;
        }
        button:hover { background-color: #fbc02d; }
        .error {
            color: #b00020;
            font-weight: 700;
            margin-bottom: 1rem;
        }
        pre.message-box {
            background-color: #fff3e0;
            border-radius: 0.25rem;
            padding: 1rem;
            font-weight: 600;
            white-space: pre-wrap;
            color: #4e342e;
            margin-top: 1.5rem;
            max-height: 300px;
            overflow-y: auto;
        }
        .buttons-row {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 1rem;
        }
        .buttons-row button {
            flex: 1;
            min-width: 130px;
            background-color: #2196f3;
            color: white;
            padding: 0.5rem;
            border-radius: 0.25rem;
            font-weight: 600;
            cursor: pointer;
            border: none;
            transition: background-color 0.3s ease;
        }
        .buttons-row button:hover { background-color: #1976d2; }
        .buttons-row button.audio-stop {
            background-color: #424242;
        }
        .buttons-row button.audio-stop:hover {
            background-color: #212121;
        }
        .buttons-row button.download {
            background-color: #4caf50;
        }
        .buttons-row button.download:hover {
            background-color: #388e3c;
        }
        .buttons-row button.share {
            background-color: #009688;
        }
        .buttons-row button.share:hover {
            background-color: #00796b;
        }
        .welcome-text {
            background-color: #dcedc8;
            color: #33691e;
            text-align: center;
            font-weight: 600;
            padding: 0.75rem;
            border-radius: 0.25rem;
            margin-bottom: 1rem;
        }
        .reset-button {
            background-color: #d32f2f;
            color: white;
            margin-top: 2rem;
        }
        .reset-button:hover {
            background-color: #b71c1c;
        }
    `;
    document.head.appendChild(style);
}

// 3. UI యొక్క HTML స్ట్రక్చర్‌ను సృష్టించడం (Dynamic UI Generation)
function createUI(appRoot) {
    if (!appRoot) {
        console.error("Error: The root element (id1) was not found.");
        return;
    }

    appRoot.innerHTML = `
        <div class="container" role="main" aria-label="ప్రవర వివరాలు ఫారం">
            <div id="welcomeText" class="welcome-text" style="display:none"></div>

            <h2>ప్రవర వివరాలు</h2>

            <div id="errorMessages" class="error" aria-live="assertive"></div>

            <label for="nameInput">
                పేరు <span aria-hidden="true" style="color:#b00020;">*</span>
            </label>
            <input
                type="text"
                id="nameInput"
                placeholder="మీ పేరు నమోదు చేయండి"
                maxlength="30"
                aria-required="true"
            />

            <label for="gotraSelect">
                గొత్రం <span aria-hidden="true" style="color:#b00020;">*</span>
            </label>
            <select id="gotraSelect" aria-required="true">
                <option value="">ఎంచుకోండి</option>
            </select>

            <label for="ganaInput">
                గణము <span aria-hidden="true" style="color:#b00020;">*</span>
            </label>
            <input type="text" id="ganaInput" disabled aria-readonly="true" />

            <button id="generateBtn" type="button">ప్రవర వివరాలు చూపించు</button>

            <pre id="finalMessage" class="message-box" style="display:none" tabindex="0" aria-live="polite"></pre>

            <div id="actionButtons" class="buttons-row" style="display:none">
                <button type="button" id="copyBtn" aria-label="కాపీ చేయి">📋 కాపీ చేయి</button>
                <button type="button" id="downloadBtn" class="download" aria-label="TXT డౌన్లోడ్">⬇️ TXT డౌన్లోడ్</button>
                <button type="button" id="playAudioBtn" aria-label="ఆడియో ప్లే">🔊 ఆడియో</button>
                <button type="button" id="stopAudioBtn" class="audio-stop" aria-label="ఆడియో ఆపు" style="display:none">⏹ ఆడియో ఆపు</button>
                <button type="button" id="whatsappShareBtn" class="share" aria-label="WhatsAppలో పంచుకోండి">📲 WhatsAppలో పంచుకోండి</button>
            </div>

            <button id="resetBtn" type="button" class="reset-button" aria-label="డాటా తొలగించు / రీసెట్">డాటా తొలగించు / రీసెట్</button>
        </div>
    `;
}

// 4. క్విజ్ లాజిక్ ఫంక్షన్లు (Element References and Handlers)

let nameInput;
let gotraSelect;
let ganaInput;
let generateBtn;
let finalMessageEl;
let errorMessagesEl;
let actionButtons;
let copyBtn;
let downloadBtn;
let playAudioBtn;
let stopAudioBtn;
let whatsappShareBtn;
let welcomeTextEl;
let resetBtn;
let audioPlaying = false;
let currentUtterance = null; 

function getElementReferences() {
    nameInput = document.getElementById("nameInput");
    gotraSelect = document.getElementById("gotraSelect");
    ganaInput = document.getElementById("ganaInput");
    generateBtn = document.getElementById("generateBtn");
    finalMessageEl = document.getElementById("finalMessage");
    errorMessagesEl = document.getElementById("errorMessages");
    actionButtons = document.getElementById("actionButtons");
    copyBtn = document.getElementById("copyBtn");
    downloadBtn = document.getElementById("downloadBtn");
    playAudioBtn = document.getElementById("playAudioBtn");
    stopAudioBtn = document.getElementById("stopAudioBtn");
    whatsappShareBtn = document.getElementById("whatsappShareBtn");
    welcomeTextEl = document.getElementById("welcomeText");
    resetBtn = document.getElementById("resetBtn");
}

function populateGotraOptions() {
    if (!gotraSelect) return;
    const uniqueGotras = [...new Set(GOTRA_GANA_MAP.map(item => item.gotra))];
    uniqueGotras.forEach(g => {
        const option = document.createElement("option");
        option.value = g;
        option.textContent = g;
        gotraSelect.appendChild(option);
    });
}

function updateGana() {
    if (!gotraSelect || !ganaInput) return;
    const selectedGotra = gotraSelect.value;
    const match = GOTRA_GANA_MAP.find(item => item.gotra === selectedGotra);
    ganaInput.value = match ? match.gana : "";
}

function clearErrors() {
    if (errorMessagesEl) errorMessagesEl.textContent = "";
}

function showError(errors) {
    if (errorMessagesEl) errorMessagesEl.textContent = errors.join("\n");
}

function getPravarText(name, gotra, gana, details) {
    const fullPravar = `
నమస్కారము ${name} గారికి ,
--------------------------------------------------
పేరు : ${name}
గోత్రః: ${gotra}
గణః: ${gana}
ప్రవర:
చతుస్సాగర పర్యంతం గోబ్రాహ్మణేభ్యః శుభం భవతు ।
${details} ప్రవరాన్విత ${gotra} గోత్రః: శుక్ల యజుర్వేదాంతర్గత కాణ్వ శాఖాధ్యాయీ కాత్యాయన సూత్రః ${name} శర్మాఽహం భో అభివాదయే ॥

--------------------------------------------------
ధన్యవాదాలు,
ఇది వాజసనేయీ సంధ్యావందనం ప్రోగ్రామ్ ద్వారా స్వయంచాలకంగా రూపొందించబడింది.
`.trim();
    return fullPravar;
}

function buildMessage(name, gotra, gana, details) {
    if (!finalMessageEl || !actionButtons) return;
    handleStopAudio(); 
    finalMessageEl.textContent = getPravarText(name, gotra, gana, details);
    finalMessageEl.style.display = "block";
    actionButtons.style.display = "flex";
    finalMessageEl.focus();
}

function saveProfile(name, gotra, gana, details) {
    try {
        localStorage.setItem("veda_pravar_profile", JSON.stringify({ name, gotra, gana, finalMessageDetails: details }));
    } catch (e) {
        console.warn("లోకల్ స్టోరేజ్ సేవ్ చేయడంలో లోపం.", e);
    }
}

function loadProfile() {
    if (!nameInput || !gotraSelect || !ganaInput) return;
    const saved = localStorage.getItem("veda_pravar_profile");
    if (saved) {
        try {
            const data = JSON.parse(saved);
            if (data.name) nameInput.value = data.name;
            if (data.gotra) gotraSelect.value = data.gotra;
            
            updateGana(); 

            if (data.name && welcomeTextEl) {
                welcomeTextEl.textContent = `${data.name} గారు, మీ వివరాలు లోడ్ అయ్యాయి.`;
                welcomeTextEl.style.display = "block";
            }
            
            if (data.finalMessageDetails && data.name && data.gotra && data.gana) {
                buildMessage(data.name, data.gotra, data.gana, data.finalMessageDetails);
            }
        } catch (e) {
            console.error("ప్రొఫైల్ లోడ్ చేయడంలో లోపం", e);
            localStorage.removeItem("veda_pravar_profile"); 
        }
    }
}

function validateInputs(name, gotra, gana) {
    let errors = [];
    if (!name || name.trim().length < 2) errors.push("పేరు తప్పనిసరి, కనీసం 2 అక్షరాలు ఉండాలి");
    if (!gotra) errors.push("గోత్రం తప్పనిసరి");
    if (!gana) errors.push("గణము తప్పనిసరి");
    return errors;
}

function handleGenerate() {
    clearErrors();
    const name = nameInput.value.trim();
    const gotra = gotraSelect.value;
    const gana = ganaInput.value;

    const errors = validateInputs(name, gotra, gana);
    if (errors.length) {
        showError(errors);
        finalMessageEl.style.display = "none";
        actionButtons.style.display = "none";
        return;
    }

    const match = GOTRA_GANA_MAP.find(item => item.gotra === gotra && item.gana === gana);
    
    if (!match) {
        showError(["ఎంచుకున్న గోత్రానికి ప్రవర వివరాలు సరిగా లేవు."]);
        finalMessageEl.style.display = "none";
        actionButtons.style.display = "none";
        return;
    }

    buildMessage(name, gotra, gana, match.details);
    saveProfile(name, gotra, gana, match.details);

    if (welcomeTextEl) {
        welcomeTextEl.textContent = `${name} గారి ప్రవర వివరాలు విజయవంతంగా సృష్టించబడ్డాయి.`;
        welcomeTextEl.style.display = "block";
    }
}

async function handleCopy() {
    if (!finalMessageEl.textContent) return;
    try {
        await navigator.clipboard.writeText(finalMessageEl.textContent);
        alert("✅ ప్రవర వివరాలు కాపీ అయ్యాయి");
    } catch {
        alert("❌ కాపీ విఫలమైంది, దయచేసి మళ్లీ ప్రయత్నించండి");
    }
}

function handleDownload() {
    if (!finalMessageEl.textContent) return;
    const blob = new Blob([finalMessageEl.textContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${nameInput.value || "pravar"}_pravar.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function handleWhatsAppShare() {
    if (!finalMessageEl.textContent) {
        alert("దయచేసి ముందుగా వివరాలన్ని పూర్తి చేసి, ప్రవరను రూపొందించండి.");
        return;
    }
    const url = `https://wa.me/?text=${encodeURIComponent(finalMessageEl.textContent)}`;
    window.open(url, "_blank");
}

function handlePlayAudio() {
    if (audioPlaying || !finalMessageEl.textContent || !('speechSynthesis' in window)) {
        if (!('speechSynthesis' in window)) alert("మీ బ్రౌజర్‌లో ఆడియో ప్లేబ్యాక్ (Text-to-Speech) సపోర్ట్ లేదు.");
        return;
    }

    window.speechSynthesis.cancel(); 
    
    currentUtterance = new SpeechSynthesisUtterance(finalMessageEl.textContent);
    currentUtterance.lang = "te-IN";
    currentUtterance.pitch = 0.8;
    currentUtterance.rate = 0.9;

    currentUtterance.onend = () => {
        audioPlaying = false;
        playAudioBtn.style.display = "inline-block";
        stopAudioBtn.style.display = "none";
    };
    
    currentUtterance.onerror = (event) => {
        console.error("Speech Synthesis Error:", event.error);
        audioPlaying = false;
        playAudioBtn.style.display = "inline-block";
        stopAudioBtn.style.display = "none";
        alert(`ఆడియో ప్లేబ్యాక్ లో లోపం: ${event.error}. దయచేసి తిరిగి ప్రయత్నించండి.`);
    };
    
    window.speechSynthesis.speak(currentUtterance);
    audioPlaying = true;
    playAudioBtn.style.display = "none";
    stopAudioBtn.style.display = "inline-block";
}

function handleStopAudio() {
    if(window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
    audioPlaying = false;
    if(playAudioBtn) playAudioBtn.style.display = "inline-block";
    if(stopAudioBtn) stopAudioBtn.style.display = "none";
}

function handleReset() {
    handleStopAudio(); 
    
    if (confirm("మీ వివరాలను, లోకల్ స్టోరేజ్‌లోని సేవ్ చేసిన డాటాతో సహా, పూర్తిగా తొలగించాలనుకుంటున్నారా?")) {
        nameInput.value = "";
        gotraSelect.value = "";
        ganaInput.value = "";
        
        finalMessageEl.textContent = "";
        finalMessageEl.style.display = "none";
        errorMessagesEl.textContent = "";
        welcomeTextEl.textContent = "";
        welcomeTextEl.style.display = "none";
        actionButtons.style.display = "none";
        
        localStorage.removeItem("veda_pravar_profile");
        alert("రీసెట్ పూర్తయింది. అన్ని వివరాలు తొలగించబడ్డాయి.");
    }
}

// 5. అప్లికేషన్‌ను ప్రారంభించే ప్రధాన ఫంక్షన్.
function initializeApp() {
    // #id1 ఎలిమెంట్ ను appRoot గా పొందండి
    const appRoot = document.getElementById('id1');

    if (!appRoot) {
        console.error("Initialization Failed: Could not find the root element with ID 'id1'.");
        return;
    }

    applyStyles();
    createUI(appRoot); // appRoot లోకి UI ని సృష్టించండి
    getElementReferences();
    populateGotraOptions();
    
    // ఈవెంట్ లిజనర్‌లను జోడించండి
    gotraSelect.addEventListener("change", updateGana);
    generateBtn.addEventListener("click", handleGenerate);
    copyBtn.addEventListener("click", handleCopy);
    downloadBtn.addEventListener("click", handleDownload);
    playAudioBtn.addEventListener("click", handlePlayAudio);
    stopAudioBtn.addEventListener("click", handleStopAudio);
    whatsappShareBtn.addEventListener("click", handleWhatsAppShare);
    resetBtn.addEventListener("click", handleReset);

    // సేవ్ చేసిన డేటాను లోడ్ చేయండి
    loadProfile();
}

// DOM కంటెంట్ లోడ్ అయిన తర్వాత అప్లికేషన్‌ను ప్రారంభించండి
document.addEventListener('DOMContentLoaded', initializeApp);