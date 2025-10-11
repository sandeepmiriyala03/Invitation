// Your GOTRA_GANA_MAP data array
const GOTRA_GANA_MAP = [
  { gotra: "కాశ్యప", gana: "కాశ్యప", details: "కాశ్యప, అవత్సార, వైధృవేతి,  ఇతి త్రయార్షేయః(గ్రంథస్థం) అనికొందరున్నూ, కాశ్యప, అవత్సార, నైధృవ, రేవరైభ, శల్య, శాండిల్యేతి సప్తార్షేయ" },
  { gotra: "భారద్వాజ", gana: "ఆంగీరస", details: "అంగీరస, బార్హస్పత్య, భారద్వాజేతి ఇతి త్రయార్షేయః" },
  { gotra: "కౌండిన్య", gana: "వశిష్ట", details: "వాశిష్ఠ, మైత్రావరుణ, కౌండిన్యేతి  ఇతి త్రయార్షేయః" },
  { gotra: "శ్రీవత్సస", gana: "భృగు", details: "భార్గవ, చ్యావన, అమ్నవా, ఓర్వ, జామదగ్నేతి, ఇతి పంచార్షేయః" },
  { gotra: "కౌశిక", gana: "విశ్వామిత్ర", details: "విశ్వామిత్ర, అఘమర్షణ, కౌశికేతి ఇతి త్రయార్షేయః (వైశ్వామిత్ర, దైవరాత, జౌడలేతి అని గ్రంథస్థం)" },
  { gotra: "ఆత్రేయ", gana: "అతి", details: "ఆత్రేయ, అర్చనానన, శ్వావాన్వేతి ఇతి త్రయార్షేయః" },
  { gotra: "హరీత", gana: "అగస్త్య", details: "అగస్త్య, గార్గేయ, విద్యుత్తేతి ఇతి త్రయార్షేయః (అని వాడుకలోకలదు). అగస్త్యోతి ఏకార్షేయమని ధర్మసింధువు నంది కలదు" },
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
  { gotra: "సాంఖ్యామన", gana: "వాశిష్ట", details: "వాశిష్ట, శక్తి, శాంక్యాయన ఇతి త్రయార్షేయః" }
];

// DOM Elements
const nameInput = document.getElementById("nameInput");
const gotraSelect = document.getElementById("gotraSelect");
const ganaInput = document.getElementById("ganaInput");
const generateBtn = document.getElementById("generateBtn");
const finalMessageEl = document.getElementById("finalMessage");
const errorMessagesEl = document.getElementById("errorMessages");
const actionButtons = document.getElementById("actionButtons");

const downloadBtn = document.getElementById("downloadBtn");
const playAudioBtn = document.getElementById("playAudioBtn");
const stopAudioBtn = document.getElementById("stopAudioBtn");
const whatsappShareBtn = document.getElementById("whatsappShareBtn");
const welcomeTextEl = document.getElementById("welcomeText");
const resetBtn = document.getElementById("resetBtn");
const notificationEl = document.getElementById("notification"); // Assuming a new element for notifications/toasts

let audioPlaying = false;
let currentUtterance = null;
const STORAGE_KEY = "veda_pravar_profile";

// --- Utility Functions ---

/**
 * Displays a non-intrusive toast notification.
 * @param {string} message The message to display.
 * @param {string} type 'success' or 'error'.
 */
function showNotification(message, type = 'success') {
    if (!notificationEl) {
        // Fallback to alert if notification element is not available
        console.warn(`Notification element not found. Message: ${message}`);
        return;
    }
    notificationEl.textContent = message;
    notificationEl.className = `notification ${type} visible`;
    // Add ARIA live region attributes for accessibility
    notificationEl.setAttribute('role', 'status'); 
    notificationEl.setAttribute('aria-live', 'polite'); 

    // Auto-hide after 3 seconds
    setTimeout(() => {
        notificationEl.classList.remove('visible');
        notificationEl.removeAttribute('role');
        notificationEl.removeAttribute('aria-live');
    }, 3000);
}

// Inject spinner CSS via JavaScript (Existing, kept for completeness)
function injectSpinnerStyles() {
    const styleId = 'pravar-styles';
    if (document.getElementById(styleId)) return; // Prevent duplicate injection

    const styleContent = `
        /* Basic Notification/Toast Style */
        .notification {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 10px 20px;
            border-radius: 5px;
            color: white;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
            pointer-events: none; /* Allows clicks on elements below it */
        }
        .notification.visible {
            opacity: 1;
        }
        .notification.success {
            background-color: #4CAF50;
        }
        .notification.error {
            background-color: #F44336;
        }

        .spinner {
          font-weight: 600;
          color: #6A1B9A;
          font-size: 1rem;
          text-align: center;
          margin-bottom: 10px;
          user-select: none;
        }
        .spinner::after {
          content: '';
          display: inline-block;
          width: 0.7em;
          height: 0.7em;
          margin-left: 0.3em;
          border-radius: 50%;
          background-color: currentColor;
          animation: blink 1.4s infinite ease-in-out both;
        }
        @keyframes blink {
          0%, 80%, 100% {
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
        }
    `;

    const styleTag = document.createElement('style');
    styleTag.id = styleId;
    styleTag.type = 'text/css';
    styleTag.appendChild(document.createTextNode(styleContent));
    document.head.appendChild(styleTag);
}

// Call this function once at the start to add the CSS styles
injectSpinnerStyles();

// Create the notification element dynamically if it doesn't exist
function setupNotificationElement() {
    if (!document.getElementById('notification')) {
        const div = document.createElement('div');
        div.id = 'notification';
        div.className = 'notification';
        document.body.appendChild(div);
    }
}
setupNotificationElement();

// --- Core Logic ---

/**
 * Populates Gotra dropdown dynamically.
 */
function populateGotraDropdown() {
    // Clear existing options except the first placeholder
    gotraSelect.length = 1;

    // Get unique gotras, sort them for better UX, and append options
    const uniqueGotras = [...new Set(GOTRA_GANA_MAP.map(item => item.gotra.trim()))].sort();
    uniqueGotras.forEach(gotra => {
        const option = document.createElement("option");
        option.value = gotra;
        option.textContent = gotra;
        gotraSelect.appendChild(option);
    });
}


/**
 * Update Gana input on Gotra change
 */
function updateGanaField() {
    const selectedGotra = gotraSelect.value.trim();
    const match = GOTRA_GANA_MAP.find(item => item.gotra.trim() === selectedGotra);
    ganaInput.value = match ? match.gana.trim() : "";
    // Clear previous message/errors on selection change
    clearMessagesAndActions();
    clearErrors();
}

/**
 * Clear final message display and action buttons
 */
function clearMessagesAndActions() {
    finalMessageEl.textContent = "";
    finalMessageEl.style.display = "none";
    actionButtons.style.display = "none";
    welcomeTextEl.style.display = "none";
    handleStopAudio(); // Ensure audio stops
}

/**
 * Clear errors display
 */
function clearErrors() {
    errorMessagesEl.textContent = "";
}

/**
 * Show errors
 * @param {string[]} errors - Array of error messages.
 */
function showError(errors) {
    errorMessagesEl.textContent = `❌ లోపాలు: \n${errors.join("\n")}`;
    errorMessagesEl.style.display = 'block';
}

/**
 * Generate Pravara text message using template literals for clarity.
 * @param {string} name - User's name.
 * @param {string} gotra - User's Gotra.
 * @param {string} gana - User's Gana.
 * @param {string} details - Pravara Rushi details.
 * @returns {string} The formatted Pravara text.
 */
function getPravarText(name, gotra, gana, details) {
    return `
నమస్కారము ${name} గారికి ,
పేరు : ${name}
గోత్రః: ${gotra}
గణః: ${gana}
చతుస్సాగర పర్యంతం గోబ్రాహ్మణేభ్యః శుభం భవతు ।
${details} ప్రవరాన్విత ${gotra} గోత్రః: శుక్ల యజుర్వేదాంతర్గత కాణ్వ శాఖాధ్యాయీ కాత్యాయన సూత్రః ${name} శర్మాఽహం భో అభివాదయే ॥
 ధన్యవాదములు,
ఇది ప్రోగ్రామ్ ద్వారా స్వయంచాలకంగా రూపొందించబడింది.
`.trim();
}

/**
 * Build and display final message
 * @param {string} name - User's name.
 * @param {string} gotra - User's Gotra.
 * @param {string} gana - User's Gana.
 * @param {string} details - Pravara Rushi details.
 */
function buildMessage(name, gotra, gana, details) {
    finalMessageEl.textContent = getPravarText(name, gotra, gana, details);
    finalMessageEl.style.display = "block";
    actionButtons.style.display = "flex";
    // Using setTimeout to ensure focus happens after display update
    setTimeout(() => finalMessageEl.focus(), 0); 
}

/**
 * Save current data to localStorage
 * @param {string} name - User's name.
 * @param {string} gotra - User's Gotra.
 * @param {string} gana - User's Gana.
 * @param {string} details - Pravara Rushi details.
 */
function saveProfile(name, gotra, gana, details) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ name, gotra, gana, finalMessageDetails: details }));
    } catch (e) {
        console.error("Profile save error", e);
    }
}

/**
 * Load saved data from localStorage and restore UI state
 */
function loadProfile() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            const data = JSON.parse(saved);
            if (data.name) nameInput.value = data.name;
            if (data.gotra) {
                // Ensure the select element has the option before setting value
                gotraSelect.value = data.gotra;
                updateGanaField(); // Update Gana field based on loaded Gotra
            }
            if (data.name) {
                welcomeTextEl.textContent = `${data.name} గారు, మీ చివరి ప్రవర వివరాలు లోడ్ అయ్యాయి.`;
                welcomeTextEl.style.display = "block";
            }
            if (data.finalMessageDetails && data.gotra && data.name) {
                buildMessage(data.name, data.gotra, data.gana, data.finalMessageDetails);
            }
        } catch (e) {
            console.error("Profile load error", e);
            localStorage.removeItem(STORAGE_KEY); // Clear corrupt data
        }
    }
}

/**
 * Validate inputs before generating
 * @param {string} name - User's name.
 * @param {string} gotra - User's Gotra.
 * @param {string} gana - User's Gana.
 * @returns {string[]} An array of validation errors.
 */
function validateInputs(name, gotra, gana) {
    const errors = [];
    if (!name || name.length < 3) errors.push("పేరు తప్పనిసరి, కనీసం 3 అక్షరాలు ఉండాలి");
    if (!gotra) errors.push("గోత్రం తప్పనిసరి");
    // Optionally validate Gana, although it's auto-populated
    if (!gana) errors.push("గణము కనుగొనబడలేదు. దయచేసి గోత్రాన్ని మళ్లీ ఎంచుకోండి.");
    
    return errors;
}

// --- Event Handlers ---

/**
 * Handle Generate button click
 */
function handleGenerate() {
    clearErrors();
    clearMessagesAndActions(); 

    const name = nameInput.value.trim();
    const gotra = gotraSelect.value.trim();
    const gana = ganaInput.value.trim();

    const errors = validateInputs(name, gotra, gana);
    if (errors.length) {
        showError(errors);
        return;
    }

    const match = GOTRA_GANA_MAP.find(item => item.gotra.trim() === gotra && item.gana.trim() === gana);
    if (!match) {
        showError(["ఎంచుకున్న గోత్రము లేదా గణము డేటాలో కనుగొనబడలేదు. దయచేసి వివరాలను సరిచూసుకోండి."]);
        return;
    }

    buildMessage(name, gotra, gana, match.details);
    saveProfile(name, gotra, gana, match.details);
    welcomeTextEl.textContent = `${name} గారి ప్రవర వివరాలు విజయవంతంగా సృష్టించబడ్డాయి.`;
    welcomeTextEl.style.display = "block";
    showNotification('ప్రవర వివరాలు రూపొందించబడ్డాయి!', 'success');
}


/**
 * Download text file handler
 */
function handleDownload() {
    if (!finalMessageEl.textContent) return showNotification("దయచేసి ముందుగా వివరాలు రూపొందించండి.", 'error');
    const blob = new Blob([finalMessageEl.textContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${nameInput.value.replace(/ /g, '_') || "pravar"}_pravar.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showNotification('ప్రవర వివరాలు డౌన్‌లోడ్ అయ్యాయి.', 'success');
}

/**
 * WhatsApp share handler
 */
function handleWhatsAppShare() {
    if (!finalMessageEl.textContent) {
        showNotification("దయచేసి ముందుగా వివరాలు రూపొందించండి.", 'error');
        return;
    }
    // Using web share API if available, otherwise fallback to standard link
    if (navigator.share) {
        navigator.share({
            title: 'వేద ప్రవర వివరాలు',
            text: finalMessageEl.textContent,
        }).catch((error) => console.log('Error sharing', error));
    } else {
        const url = `https://wa.me/?text=${encodeURIComponent(finalMessageEl.textContent)}`;
        window.open(url, "_blank");
    }
}

/**
 * Play audio handler using SpeechSynthesis in Telugu
 */
function handlePlayAudio() {
    if (audioPlaying || !finalMessageEl.textContent) return;
    if (!('speechSynthesis' in window)) return showNotification("మీ బ్రౌజర్ ఆడియో ప్లేబ్యాక్ (టెక్స్ట్-టు-స్పీచ్) మద్దతు ఇవ్వదు.", 'error');
    
    window.speechSynthesis.cancel(); // Stop any pending speech

    currentUtterance = new SpeechSynthesisUtterance(finalMessageEl.textContent);
    
    // Attempt to find a specific Telugu voice for better quality
    const voices = window.speechSynthesis.getVoices();
    const teluguVoice = voices.find(voice => voice.lang === 'te-IN' || voice.lang === 'te');

    if (teluguVoice) {
        currentUtterance.voice = teluguVoice;
    }
    
    currentUtterance.lang = "te-IN";
    currentUtterance.pitch = 0.9; // Slightly higher
    currentUtterance.rate = 0.85; // Slightly slower for clarity

    currentUtterance.onstart = () => {
        audioPlaying = true;
        playAudioBtn.style.display = "none";
        stopAudioBtn.style.display = "inline-block";
        showNotification('ఆడియో ప్లే అవుతోంది...', 'success');
    }

    currentUtterance.onend = () => {
        audioPlaying = false;
        playAudioBtn.style.display = "inline-block";
        stopAudioBtn.style.display = "none";
        showNotification('ఆడియో ప్లేబ్యాక్ పూర్తయింది.', 'success');
    };

    currentUtterance.onerror = (e) => {
        audioPlaying = false;
        playAudioBtn.style.display = "inline-block";
        stopAudioBtn.style.display = "none";
        showNotification("ఆడియో ప్లేబ్యాక్ లో లోపం. మళ్ళీ ప్రయత్నించండి.", 'error');
        console.error("Speech Synthesis Error:", e.error);
    };

    window.speechSynthesis.speak(currentUtterance);
}

/**
 * Stop audio playback
 */
function handleStopAudio() {
    if (!audioPlaying) return;

    window.speechSynthesis.cancel();
    audioPlaying = false;
    playAudioBtn.style.display = "inline-block";
    stopAudioBtn.style.display = "none";
    showNotification('ఆడియో ప్లేబ్యాక్ నిలిపివేయబడింది.', 'error');
}

/**
 * Reset form and clear storage
 */
function handleReset() {
    if (!confirm("మీ వివరాలను మరియు సేవ్ చేసిన ప్రొఫైల్‌ను పూర్తిగా తొలగించాలనుకుంటున్నారా?")) return;

    nameInput.value = "";
    // Reset select to the placeholder value (assuming it's '')
    gotraSelect.value = ""; 
    ganaInput.value = "";
   errorMessagesEl.style.display = "none";
   errorMessagesEl.textContent = "";
    clearErrors();
    clearMessagesAndActions();
    
    localStorage.removeItem(STORAGE_KEY);
    showNotification("ఫారం మరియు సేవ్ చేసిన వివరాలు తొలగించబడ్డాయి.", 'error');
}

/**
 * Initialize the application: setup listeners and load data.
 */
function init() {
    // Note: window.speechSynthesis.getVoices() is often asynchronous, 
    // so it's best called inside an event or function like handlePlayAudio.
    
    populateGotraDropdown();
    loadProfile();

    // Attach event listeners
    gotraSelect.addEventListener("change", updateGanaField);
    generateBtn.addEventListener("click", handleGenerate);
 
    downloadBtn.addEventListener("click", handleDownload);
    playAudioBtn.addEventListener("click", handlePlayAudio);
    stopAudioBtn.addEventListener("click", handleStopAudio);
    whatsappShareBtn.addEventListener("click", handleWhatsAppShare);
    resetBtn.addEventListener("click", handleReset);

    // Initial state cleanup
    if (finalMessageEl.textContent.length === 0) {
        actionButtons.style.display = "none";
        finalMessageEl.style.display = "none";
    }
}

// Event Listeners
window.addEventListener("DOMContentLoaded", init);

// Fix for Voice loading issue in some browsers
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = init; 
}