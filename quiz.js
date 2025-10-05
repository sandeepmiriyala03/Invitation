// =================================================================
// 1. ప్రశ్నల డేటా (25 మెరుగుపరచిన ప్రశ్నలు)
// =================================================================

const questions = [
  // యాజ్ఞవల్క్య మహర్షికి సంబంధించిన మెరుగుపరచిన ప్రశ్నలు
  { q: "యాజ్ఞవల్క్య మహర్షి ఏ వేదానికి ప్రవర్తకుడు?", options: ["శుక్ల యజుర్వేదం", "కృష్ణ యజుర్వేదం", "సామవేదం"], answer: 0 },
  { q: "యాజ్ఞవల్క్య మహర్షి రచించిన ధర్మ శాస్త్ర గ్రంథం ఏది?", options: ["యాజ్ఞవల్క్య స్మృతి", "మనుస్మృతి", "పరాశర స్మృతి"], answer: 0 },
  { q: "యాజ్ఞవల్క్య మహర్షి ప్రధాన ఉపనిషత్తు ఏది?", options: ["బృహదారణ్యక ఉపనిషత్తు", "చాందోగ్య ఉపనిషత్తు", "కేన ఉపనిషత్తు"], answer: 0 },
  { q: "యాజ్ఞవల్క్య మహర్షి రచించిన ముఖ్యమైన బ్రాహ్మణ గ్రంథం ఏది?", options: ["శతపథ బ్రాహ్మణం", "ఐతరేయ బ్రాహ్మణం", "తైత్తిరీయ బ్రాహ్మణం"], answer: 0 },
  { q: "యాజ్ఞవల్క్య మహర్షి  భార్య పేరు?", options: ["మైత్రేయి", "కాత్యాయిని", "సునంద"], answer: 1 },
  { q: "యాజ్ఞవల్క్య మహర్షి  ఎవరు, వీరితో బ్రహ్మజ్ఞానం గురించి చర్చించారు?", options: ["మైత్రేయి", "కాత్యాయిని", "గార్గి"], answer: 0 },
  { q: "యాజ్ఞవల్క్యుడు ఎవరి శిష్యుడిగా వేదాలను అభ్యసించారు?", options: ["వైశంపాయనుడు", "కణ్వ మహర్షి", "భాస్కలుడు"], answer: 0 },
  { q: "గురువు శాపం తర్వాత, యాజ్ఞవల్క్యుడు వేద జ్ఞానాన్ని తిరిగి ఎవరి నుండి పొందారు?", options: ["సూర్య భగవానుడు", "వాయు దేవుడు", "ఇంద్రుడు"], answer: 0 },
  { q: "యాజ్ఞవల్క్యుడు బ్రహ్మజ్ఞానం గురించి ప్రసిద్ధి చెందిన వాక్యం?", options: ["నేతి నేతి (ఇది కాదు, ఇది కాదు)", "తత్త్వమసి", "అహం బ్రహ్మాస్మి"], answer: 0 },
  { q: "బృహదారణ్యక ఉపనిషత్తులో యాజ్ఞవల్క్య మహర్షి ఎవరితో ఆత్మ తత్వం గురించి వాదించారు?", options: ["గార్గి", "మండన మిశ్రుడు", "ఉద్దాలక ఆరుణి"], answer: 0 },
  { q: "యాజ్ఞవల్క్య మహర్షి జన్మస్థలం ఎక్కడ ఉన్నట్లు పురాణాలు చెబుతాయి?", options: ["మిథిలా ప్రాంతం", "అయోధ్య", "కాశీ"], answer: 0 },
  { q: "యాజ్ఞవల్క్యుడు ఏ దైవాన్ని ఆరాధించి యజుర్వేదాన్ని తిరిగి పొందారు?", options: ["సూర్యుడు (వాజీరూపం)", "అగ్ని", "విష్ణువు"], answer: 0 },
  { q: "యాజ్ఞవల్క్య మహర్షి 'త్రికాల సంధ్యా' అంటే ఏ సమయాలలో సంధ్యావందనం చేయడం?", options: ["ఉదయం, మధ్యాహ్నం, సాయంత్రం", "ఉదయం మరియు సాయంత్రం", "రాత్రి, తెల్లవారుజాము, మధ్యాహ్నం"], answer: 0 },
  { q: "యాజ్ఞవల్క్యుడు తన భార్యలకు ఆస్తిని పంచుతూ బోధించినది?", options: ["ఆత్మజ్ఞానం", "ధర్మశాస్త్రం", "కర్మఫలం"], answer: 0 },
  { q: "యాజ్ఞవల్క్య స్మృతిలో ఎన్ని కాండలు (విభాగాలు) ఉన్నాయి?", options: ["మూడు (ఆచార, వ్యవహార, ప్రాయశ్చిత్త)", "రెండు", "నాలుగు"], answer: 0 },
  { q: "మిత్రుడుగా యాజ్ఞవల్క్యుడికి సహాయం చేసిన రాజు?", options: ["జనక మహారాజు", "దశరథ మహారాజు", "పాండురాజు"], answer: 0 },
  { q: "శుక్ల యజుర్వేదంలోని రెండు శాఖలు?", options: ["మాధ్యందిన, కాణ్వ", "శకల, బాష్కల", "తైత్తిరీయ, మైత్రాయణీ"], answer: 0 },
  { q: "యాజ్ఞవల్క్యుడు తన గురువుకి కోపం తెప్పించినందుకు ఏమి వదిలేశాడు?", options: ["నేర్చుకున్న వేద జ్ఞానం", "ఆశ్రమం", "శిష్యరికం"], answer: 0 },
  { q: "యాజ్ఞవల్క్యుడు తపస్సు చేసి పొందిన విద్య ఏ వేదం క్రిందకు వస్తుంది?", options: ["యజుర్వేదం", "ఋగ్వేదం", "సామవేదం"], answer: 0 },
  { q: "యాజ్ఞవల్క్య స్మృతిలోని రెండవ భాగం దేని గురించి వివరిస్తుంది?", options: ["వ్యవహారం (చట్టాలు, న్యాయం)", "ఆచారం", "ప్రాయశ్చిత్తం"], answer: 0 },
  { q: "బ్రహ్మజ్ఞానం పొందడానికి భార్య మైత్రేయిని యాజ్ఞవల్క్యుడు ఎక్కడ వదిలి వెళ్లారు?", options: ["హిమాలయాలు", "మిథిలా నగరం", "వారణాసి"], answer: 0 },
  { q: "యాజ్ఞవల్క్యుడు శిష్యులకు ఉపదేశించిన జ్ఞానం ఏ రూపంలో ఉంది?", options: ["శ్రుతి (విని నేర్చుకునేది)", "స్మృతి", "తంత్రం"], answer: 0 },

  { q: "యాజ్ఞవల్క్య మహర్షి శాంతి కోసం ఏది పఠించాలని సూచించారు?", options: ["గాయత్రీ మంత్రం", "సహస్రనామం", "మహామృత్యుంజయ మంత్రం"], answer: 0 }
];

// =================================================================
// 2. గ్లోబల్ వేరియబుల్స్ & ఎలిమెంట్స్
// =================================================================

let selectedQuestions = []; // క్విజ్‌లో ప్రదర్శించబడే 5 ప్రశ్నలు
const TOTAL_QUESTIONS_TO_DISPLAY = 5;
const PASS_SCORE = 3; // 5కి 3 మార్కులు ఉత్తీర్ణత మార్కుగా నిర్ణయించబడింది
const appRoot = document.getElementById('quizApp'); // మీ HTML లో ఈ ID ఉండాలి

// =================================================================
// 3. UI/UX మరియు స్టైలింగ్ ఫంక్షన్లు
// =================================================================

// డైనమిక్‌గా CSS స్టైల్స్‌ను జోడించడం
function applyStyles() {
    const style = document.createElement('style');
    style.textContent = `
        :root {
            --primary-color: #6A1B9A; /* ముదురు ఊదా */
            --secondary-color: #F3E5F5; /* లేత ఊదా నేపథ్యం */
            --success-color: #28a745;
            --failure-color: #dc3545;
        }
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f8f9fa;
            line-height: 1.6;
            padding: 20px;
        }
        #quizApp {
            max-width: 700px;
            margin: 0 auto;
            background: #fff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
        }
        .header-title {
            color: var(--primary-color);
            text-align: center;
            font-size: 2.2rem;
            margin-bottom: 10px;
            border-bottom: 3px solid var(--secondary-color);
            padding-bottom: 10px;
        }
        .section-description {
            text-align: center;
            color: #555;
            margin-bottom: 30px;
            font-size: 1.1rem;
        }
        .question-item {
            background-color: var(--secondary-color);
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            border-left: 5px solid var(--primary-color);
        }
        .question-text {
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 15px;
            font-size: 1.1rem;
        }
        .option-label {
            display: block;
            background-color: #ffffff;
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 8px;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        .option-label:hover {
            background-color: #f0f0f0;
        }
        .option-input[type="radio"] {
            margin-right: 10px;
            accent-color: var(--primary-color);
        }
        .submit-button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 12px 25px;
            font-size: 1.1rem;
            font-weight: 700;
            border-radius: 50px;
            cursor: pointer;
            display: block;
            width: 100%;
            margin-top: 30px;
            transition: background-color 0.3s;
        }
        .submit-button:hover {
            background-color: #4A148C;
        }
        /* సర్టిఫికెట్ స్టైల్స్ */
        #certificateContainer {
            text-align: center;
            padding: 30px;
            border: 5px double var(--primary-color);
            background: #fffafa;
            border-radius: 10px;
            margin-top: 20px;
        }
        .score-display {
            font-size: 2.5rem;
            font-weight: 900;
            margin: 15px 0;
        }
        .pass { color: var(--success-color); }
        .fail { color: var(--failure-color); }
        .certificate-header {
            font-size: 1.5rem;
            color: var(--primary-color);
            margin-bottom: 10px;
        }
        .certificate-buttons {
            margin-top: 25px;
            display: flex;
            justify-content: center;
            gap: 15px;
        }
        .action-btn {
            background-color: var(--success-color);
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: opacity 0.3s;
        }
        .action-btn.share {
            background-color: #25D366; /* WhatsApp Green */
        }
    `;
    document.head.appendChild(style);
}

// =================================================================
// 4. క్విజ్ లాజిక్ ఫంక్షన్లు
// =================================================================

// క్విజ్ UI ని సృష్టించడం
function createQuizUI() {
    appRoot.innerHTML = ''; // పాత కంటెంట్‌ను తొలగించండి

    // హెడర్
    const header = document.createElement('h2');
    header.className = 'header-title';
    header.innerHTML = `శ్రీ యాజ్ఞవల్క్య క్విజ్`;
    appRoot.appendChild(header);

    const desc = document.createElement('p');
    desc.className = 'section-description';
    desc.innerText = `మీకు శ్రీ యాజ్ఞవల్క్య మహర్షిపై ఎంత అవగాహన ఉందో ఈ ${TOTAL_QUESTIONS_TO_DISPLAY} ప్రశ్నల క్విజ్ ద్వారా తెలుసుకోండి.`;
    appRoot.appendChild(desc);

    // ప్రశ్నలను ఎంచుకోవడం
    const pool = [...questions];
    selectedQuestions = [];

    for(let i = 0; i < TOTAL_QUESTIONS_TO_DISPLAY; i++) {
        if (pool.length === 0) break;
        const idx = Math.floor(Math.random() * pool.length);
        selectedQuestions.push(pool.splice(idx, 1)[0]);
    }

    // ప్రశ్నలను ప్రదర్శించడం
    selectedQuestions.forEach((item, idx) => {
        const qDiv = document.createElement('div');
        qDiv.className = 'question-item';

        const qP = document.createElement('p');
        qP.className = 'question-text';
        qP.innerText = `${idx + 1}. ${item.q}`;
        qDiv.appendChild(qP);

        item.options.forEach((opt, optIdx) => {
            const label = document.createElement('label');
            label.className = 'option-label';
            label.setAttribute('for', `q${idx}_opt${optIdx}`);

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question${idx}`;
            radio.value = optIdx;
            radio.id = `q${idx}_opt${optIdx}`;
            radio.className = 'option-input';

            label.appendChild(radio);
            label.appendChild(document.createTextNode(opt));
            qDiv.appendChild(label);
        });

        appRoot.appendChild(qDiv);
    });

    // సబ్మిట్ బటన్
    const submitBtn = document.createElement('button');
    submitBtn.innerText = 'సబ్మిట్ చేసి ఫలితం చూడండి';
    submitBtn.className = 'submit-button';
    submitBtn.onclick = evaluateQuiz;
    appRoot.appendChild(submitBtn);
}

// ఫలితాలను లెక్కించడం
function evaluateQuiz() {
    let score = 0;
    for (let i = 0; i < selectedQuestions.length; i++) {
        const sel = document.querySelector(`input[name=question${i}]:checked`);
        if (sel && parseInt(sel.value) === selectedQuestions[i].answer) {
            score++;
        }
    }
    showResults(score);
}

// ఫలితాలను మరియు సర్టిఫికెట్‌ను చూపించడం
function showResults(score) {
    appRoot.innerHTML = ''; // క్విజ్ ప్రశ్నలను తొలగించండి

    const percentage = (score / TOTAL_QUESTIONS_TO_DISPLAY) * 100;
    const isPassed = score >= PASS_SCORE;

    const resultMessage = isPassed
        ? 'అభినందనలు! మీరు విజయవంతంగా ఉత్తీర్ణులయ్యారు.'
        : 'బాగా ప్రయత్నించారు! మరికొంత అభ్యాసంతో మళ్లీ ప్రయత్నించండి.';
    
    // సర్టిఫికెట్ కంటైనర్
    const certContainer = document.createElement('div');
    certContainer.id = 'certificateContainer';

    certContainer.innerHTML = `
        <h3 class="certificate-header">శ్రీ యాజ్ఞవల్క్య క్విజ్ - ఫలితం</h3>
        <p style="color: ${isPassed ? 'var(--success-color)' : 'var(--failure-color)'}; font-weight: 600;">
            ${resultMessage}
        </p>
        <p class="score-display ${isPassed ? 'pass' : 'fail'}">
            ${score} / ${TOTAL_QUESTIONS_TO_DISPLAY}
        </p>
        <p style="font-style: italic; color: #555;">
            క్విజ్‌లో పాల్గొన్నందుకు ధన్యవాదాలు! మీ జ్ఞానాన్ని అభినందిస్తున్నాము.
        </p>
    `;
    appRoot.appendChild(certContainer);

    // యాక్షన్ బటన్లు
    const actionButtons = document.createElement('div');
    actionButtons.className = 'certificate-buttons';

    // 1. డౌన్‌లోడ్ బటన్
    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'action-btn';
    downloadBtn.innerText = 'సర్టిఫికెట్ డౌన్‌లోడ్ (Image)';
    downloadBtn.onclick = () => downloadCertificate(certContainer);
    actionButtons.appendChild(downloadBtn);

    
    // 3. మళ్లీ ప్రయత్నించండి బటన్
    const retryBtn = document.createElement('button');
    retryBtn.className = 'action-btn';
    retryBtn.style.backgroundColor = '#007bff';
    retryBtn.innerText = 'మళ్లీ ప్రయత్నించండి';
    retryBtn.onclick = createQuizUI;
    actionButtons.appendChild(retryBtn);

    appRoot.appendChild(actionButtons);
}

// =================================================================
// 5. సర్టిఫికెట్ & షేరింగ్ ఫంక్షన్లు
// =================================================================

// సర్టిఫికెట్‌ను ఇమేజ్‌గా డౌన్‌లోడ్ చేయడం (html2canvas అవసరం)
function downloadCertificate(element) {
    if (typeof html2canvas === 'undefined') {
        alert("దయచేసి 'html2canvas' లైబ్రరీని మీ HTML లో జోడించండి.");
        return;
    }

    // డౌన్‌లోడ్ కోసం సర్టిఫికెట్ ప్రాంతాన్ని ఎంచుకోవడం
    html2canvas(element, { scale: 2 }).then(canvas => {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = `Yajnavalkya_Quiz_Certificate_${new Date().toLocaleDateString('en-GB').replace(/\//g, '-')}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}


// =================================================================
// 6. అప్లికేషన్‌ను ప్రారంభించడం
// =================================================================
document.addEventListener('DOMContentLoaded', () => {
    // స్టైల్స్‌ను వర్తింపజేయండి
    applyStyles(); 
    // క్విజ్‌ను ప్రారంభించండి
    createQuizUI();
});