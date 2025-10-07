// =================================================================
// 1. ప్రశ్నల డేటా (25 మెరుగుపరచిన ప్రశ్నలు)
// =================================================================

const questions = [
  // యాజ్ఞవల్క్య మహర్షికి సంబంధించిన మెరుగుపరచిన ప్రశ్నలు
  { q: "యాజ్ఞవల్క్య మహర్షి ఏ వేదానికి ప్రవర్తకుడు?", options: ["శుక్ల యజుర్వేదం", "కృష్ణ యజుర్వేదం", "సామవేదం"], answer: 0 },
  { q: "యాజ్ఞవల్క్య మహర్షి రచించిన ధర్మ శాస్త్ర గ్రంథం ఏది?", options: ["యాజ్ఞవల్క్య స్మృతి", "మనుస్మృతి", "పరాశర స్మృతి"], answer: 0 },
  { q: "యాజ్ఞవల్క్య మహర్షి ప్రధాన ఉపనిషత్తు ఏది?", options: ["బృహదారణ్యక ఉపనిషత్తు", "చాందోగ్య ఉపనిషత్తు", "కేన ఉపనిషత్తు"], answer: 0 },
  { q: "యాజ్ఞవల్క్య మహర్షి రచించిన ముఖ్యమైన బ్రాహ్మణ గ్రంథం ఏది?", options: ["శతపథ బ్రాహ్మణం", "ఐతరేయ బ్రాహ్మణం", "తైత్తిరీయ బ్రాహ్మణం"], answer: 0 },
  { q: "యాజ్ఞవల్క్య మహర్షి  భార్య పేరు?", options: ["మైత్రేయి", "కాత్యాయిని", "సునంద"], answer: 1 },
  { q: "యాజ్ఞవల్క్య మహర్షి  ఎవరు, వీరితో బ్రహ్మజ్ఞానం గురించి చర్చించారు?", options: ["మైత్రేయి", "కాత్యాయిని", "గార్గి"], answer: 0 },
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
// ఇది మీ HTML లో ఉండాలి: <div id="quizApp"></div>
const appRoot = document.getElementById('quizApp'); 

// =================================================================
// 3. UI/UX మరియు స్టైలింగ్ ఫంక్షన్లు (మెరుగుపరచబడింది)
// =================================================================

// డైనమిక్‌గా CSS స్టైల్స్‌ను జోడించడం
function applyStyles() {
    const style = document.createElement('style');
    style.textContent = `
        :root {
            --primary-color: #6A1B9A; /* ముదురు ఊదా */
            --secondary-color: #F3E5F5; /* లేత ఊదా నేపథ్యం */
            --success-color: #1a7e4b; /* మరింత డార్క్ గ్రీన్ */
            --failure-color: #dc3545;
            --download-color: #007bff; /* నీలం రంగును డౌన్‌లోడ్ చర్యకు ఉపయోగించడం */
            --whatsapp-color: #25D366; /* WhatsApp Green */
        }
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f8f9fa;
            line-height: 1.6;
            padding: 10px;
        }
        #quizApp {
            max-width: 600px;
            margin: 0 auto;
            background: #fff;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15); /* షాడో మెరుగుపరచబడింది */
        }
        .header-title {
            color: var(--primary-color);
            text-align: center;
            font-size: 1.8rem;
            margin-bottom: 10px;
            border-bottom: 3px solid var(--secondary-color);
            padding-bottom: 10px;
        }
        .section-description {
            text-align: center;
            color: #555;
            margin-bottom: 25px;
            font-size: 1rem;
        }
        .question-item {
            background-color: var(--secondary-color);
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 15px;
            border-left: 5px solid var(--primary-color);
        }
        .question-text {
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 12px;
            font-size: 1rem;
        }
        .option-label {
            display: flex;
            align-items: center;
            background-color: #ffffff;
            border: 1px solid #ccc;
            padding: 12px; /* టచ్ టార్గెట్ పెంచబడింది */
            margin-bottom: 10px; /* స్పేసింగ్ పెంచబడింది */
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        .option-label:hover {
            background-color: var(--secondary-color); /* లేత ఊదా రంగు */
            border-color: var(--primary-color);
        }
        .option-input[type="radio"] {
            margin-right: 15px;
            accent-color: var(--primary-color);
            min-width: 20px;
            min-height: 20px;
        }
        .submit-button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 12px 20px; /* ప్యాడింగ్ పెంచబడింది */
            font-size: 1.1rem; /* ఫాంట్ సైజు పెంచబడింది */
            font-weight: 700;
            border-radius: 50px;
            cursor: pointer;
            display: block;
            width: 100%;
            margin-top: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s, transform 0.1s;
        }
        .submit-button:hover {
            background-color: #4A148C;
            transform: translateY(-1px); /* చిన్న 3D ప్రభావం */
        }
        
        /* సర్టిఫికెట్ స్టైల్స్ */
        #certificateContainer {
            text-align: center;
            padding: 30px 20px; /* ప్యాడింగ్ పెంచబడింది */
            border: 5px solid var(--primary-color); /* ఘన సరిహద్దు (Solid Border) */
            background: #ffffff; /* తెలుపు నేపథ్యం */
            border-radius: 15px;
            margin-top: 30px;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* మెరుగైన షాడో */
            position: relative;
            overflow: hidden;
        }

        /* సర్టిఫికేట్ కోసం అలంకార మూలకం */
        #certificateContainer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 15px;
            background-color: var(--secondary-color);
            border-bottom: 2px solid var(--primary-color);
        }
        
        .score-display {
            font-size: 2.5rem;
            font-weight: 900;
            margin: 15px 0;
        }
        .pass { color: var(--success-color); }
        .fail { color: var(--failure-color); }
        .certificate-header {
            font-size: 1.4rem;
            color: var(--primary-color);
            margin-bottom: 5px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .certificate-subheader {
            font-size: 1rem;
            color: #777;
            margin-bottom: 20px;
        }
        .certificate-buttons {
            margin-top: 25px;
            display: flex;
            flex-direction: column;
            gap: 15px; /* బటన్ల మధ్య స్పేసింగ్ పెంచబడింది */
        }
        
        .action-btn {
            color: white;
            padding: 15px 20px; /* టచ్ టార్గెట్ మరియు ప్యాడింగ్ పెంచబడింది */
            border: none;
            border-radius: 10px; /* గుండ్రటి మూలలు */
            cursor: pointer;
            width: 100%;
            font-size: 1.1rem;
            font-weight: 600;
            text-transform: uppercase;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s, transform 0.1s, box-shadow 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .action-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
        }
        .action-btn i {
            margin-right: 10px;
            font-size: 1.2em;
        }

        /* డౌన్‌లోడ్ బటన్ స్టైల్స్ - ప్రాథమిక చర్య */
        .action-btn.download {
            background-color: var(--download-color);
            border: 2px solid var(--download-color);
        }
        .action-btn.download:hover {
            background-color: #0056b3;
        }
        
        /* షేర్ బటన్ స్టైల్స్ - ద్వితీయ చర్య */
        .action-btn.share {
            background-color: var(--whatsapp-color);
            border: 2px solid var(--whatsapp-color);
        }
        .action-btn.share:hover {
            background-color: #1DA851;
        }

        /* డెస్క్‌టాప్ కోసం మీడియా క్వెరీ */
        @media (min-width: 601px) {
            .header-title { font-size: 2.5rem; }
            .score-display { font-size: 3rem; }
            .certificate-buttons {
                flex-direction: row;
                justify-content: center;
                gap: 20px;
            }
            .action-btn {
                width: 45%; /* డెస్క్‌టాప్‌లో పక్కపక్కన ఉండేలా వెడల్పు */
                max-width: 250px;
            }
        }
    `;
    document.head.appendChild(style);
}
// Note: To use the icons (<i> tags), you need to include a font icon library like Font Awesome in your HTML.
// e.g. <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
// <button class="action-btn download"><i class="fas fa-download"></i> Download Certificate</button>
// <button class="action-btn share"><i class="fab fa-whatsapp"></i> Share on WhatsApp</button>

// =================================================================
// 4. క్విజ్ లాజిక్ ఫంక్షన్లు
// =================================================================

// క్విజ్ UI ని సృష్టించడం
function createQuizUI() {
    if (!appRoot) {
        console.error("Error: 'quizApp' ID తో కూడిన మూలకం కనుగొనబడలేదు.");
        return;
    }
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
            
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question${idx}`;
            radio.value = optIdx;
            radio.className = 'option-input';

            label.appendChild(radio);
            label.appendChild(document.createTextNode(opt));
            qDiv.appendChild(label);
        });

        appRoot.appendChild(qDiv);
    });

    // సబ్మిట్ బటన్
    const submitBtn = document.createElement('button');
    submitBtn.innerText = 'ఫలితం చూడండి';
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

    const isPassed = score >= PASS_SCORE;

    const resultMessage = isPassed
        ? 'అభినందనలు! మీరు విజయవంతంగా ఉత్తీర్ణులయ్యారు.'
        : 'బాగా ప్రయత్నించారు! మరికొంత అభ్యాసంతో మళ్లీ ప్రయత్నించండి.';
    
    // సర్టిఫికెట్ కంటైనర్
    const certContainer = document.createElement('div');
    certContainer.id = 'certificateContainer';

    // ఇమేజ్ 2.jpg స్థానంలో ఒక ప్లేస్‌హోల్డర్ వాడబడుతోంది, మీకు ఇమేజ్ ఉంటే అది కనిపిస్తుంది.
    certContainer.innerHTML = `
        <h3 class="certificate-header">శ్రీ యాజ్ఞవల్క్య క్విజ్ - ఫలితం</h3>

        <p style="color: ${isPassed ? 'var(--success-color)' : 'var(--failure-color)'}; font-weight: 600; font-size: 1.1rem;">
            ${resultMessage}
        </p>
        <p class="score-display ${isPassed ? 'pass' : 'fail'}">
            ${score} / ${TOTAL_QUESTIONS_TO_DISPLAY}
        </p>
        <p style="font-style: italic; color: #555;">
            క్విజ్‌లో పాల్గొన్నందుకు ధన్యవాదాలు! మీ జ్ఞానాన్ని అభినందిస్తున్నాము.
        </p>
        <footer style="margin-top: 20px; font-size: 0.9rem; color: #888;">
            ఓం పూర్ణమద: పూర్ణమిద:! పూర్ణాత్ పూర్ణా ముదచ్యతే పూర్ణాస్యపూర్ణమాదాయ ! పూర్ణ మే వావశిష్యతే ||
        </footer>
    `;
    appRoot.appendChild(certContainer);

    // యాక్షన్ బటన్లు
    const actionButtons = document.createElement('div');
    actionButtons.className = 'certificate-buttons';

    // 1. డౌన్‌లోడ్ బటన్ (html2canvas అవసరం)
    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'action-btn';
    downloadBtn.style.backgroundColor = '#007bff';
    downloadBtn.innerText = 'సర్టిఫికెట్ డౌన్‌లోడ్ ';
    downloadBtn.onclick = () => downloadCertificate(certContainer);
    actionButtons.appendChild(downloadBtn);

    // 2. మళ్లీ ప్రయత్నించండి బటన్
    const retryBtn = document.createElement('button');
    retryBtn.className = 'action-btn';
    retryBtn.style.backgroundColor = '#007bff';
    retryBtn.innerText = 'మళ్లీ ప్రయత్నించండి';
    retryBtn.onclick = createQuizUI;
    actionButtons.appendChild(retryBtn);

    appRoot.appendChild(actionButtons);
}

// =================================================================
// 5. సర్టిఫికెట్ & షేరింగ్ ఫంక్షన్లు (మెరుగుపరచబడింది)
// =================================================================

// సర్టిఫికెట్‌ను ఇమేజ్‌గా డౌన్‌లోడ్ చేయడం (html2canvas అవసరం)
function downloadCertificate(element) {
    // html2canvas ఉందో లేదో తనిఖీ చేయండి
    if (typeof html2canvas === 'undefined') {
        alert("సర్టిఫికెట్ డౌన్‌లోడ్ చేయడానికి 'html2canvas' లైబ్రరీ అవసరం. దయచేసి దానిని మీ HTML లో చేర్చండి.");
        console.error("HTML2Canvas library not found. Please include: <script src='https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js'></script>");
        return;
    }

    // డౌన్‌లోడ్ కోసం సర్టిఫికెట్ ప్రాంతాన్ని ఇమేజ్‌గా మార్చడం
    html2canvas(element, { 
        scale: 2, // మెరుగైన నాణ్యత కోసం స్కేల్‌ను పెంచడం
        logging: false 
    }).then(canvas => {
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