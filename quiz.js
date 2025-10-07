
// =================================================================
// 1. ప్రశ్నల డేటా (Data) 
// =================================================================

const questions = [
    { q: "యాజ్ఞవల్క్య మహర్షి ఏ వేదానికి ప్రవర్తకుడు?", options: ["శుక్ల యజుర్వేదం", "కృష్ణ యజుర్వేదం", "సామవేదం"], answer: 0, selected: null },
    { q: "యాజ్ఞవల్క్య మహర్షి రచించిన ధర్మ శాస్త్ర గ్రంథం ఏది?", options: ["యాజ్ఞవల్క్య స్మృతి", "మనుస్మృతి", "పరాశర స్మృతి"], answer: 0, selected: null },
    { q: "యాజ్ఞవల్క్య మహర్షి ప్రధాన ఉపనిషత్తు ఏది?", options: ["బృహదారణ్యక ఉపనిషత్తు", "చాందోగ్య ఉపనిషత్తు", "కేన ఉపనిషత్తు"], answer: 0, selected: null },
    { q: "యాజ్ఞవల్క్య మహర్షి రచించిన ముఖ్యమైన బ్రాహ్మణ గ్రంథం ఏది?", options: ["శతపథ బ్రాహ్మణం", "ఐతరేయ బ్రాహ్మణం", "తైత్తిరీయ బ్రాహ్మణం"], answer: 0, selected: null },
    { q: "యాజ్ఞవల్క్య మహర్షి భార్య పేరు?", options: ["మైత్రేయి", "కాత్యాయిని", "సునంద"], answer: 1, selected: null },
    { q: "యాజ్ఞవల్క్య మహర్షి ఎవరు, వీరితో బ్రహ్మజ్ఞానం గురించి చర్చించారు?", options: ["మైత్రేయి", "కాత్యాయిని", "గార్గి"], answer: 0, selected: null },
    { q: "యాజ్ఞవల్క్యుడు ఎవరి శిష్యుడిగా వేదాలను అభ్యసించారు?", options: ["వైశంపాయనుడు", "కణ్వ మహర్షి", "భాస్కలుడు"], answer: 0, selected: null },
    { q: "గురువు శాపం తర్వాత, యాజ్ఞవల్క్యుడు వేద జ్ఞానాన్ని తిరిగి ఎవరి నుండి పొందారు?", options: ["సూర్య భగవానుడు", "వాయు దేవుడు", "ఇంద్రుడు"], answer: 0, selected: null },
    { q: "యాజ్ఞవల్క్యుడు బ్రహ్మజ్ఞానం గురించి ప్రసిద్ధి చెందిన వాక్యం?", options: ["నేతి నేతి (ఇది కాదు, ఇది కాదు)", "తత్త్వమసి", "అహం బ్రహ్మాస్మి"], answer: 0, selected: null },
    { q: "బృహదారణ్యక ఉపనిషత్తులో యాజ్ఞవల్క్య మహర్షి ఎవరితో ఆత్మ తత్వం గురించి వాదించారు?", options: ["గార్గి", "మండన మిశ్రుడు", "ఉద్దాలక ఆరుణి"], answer: 0, selected: null },
    { q: "యాజ్ఞవల్క్య మహర్షి జన్మస్థలం ఎక్కడ ఉన్నట్లు పురాణాలు చెబుతాయి?", options: ["మిథిలా ప్రాంతం", "అయోధ్య", "కాశీ"], answer: 0, selected: null },
    { q: "యాజ్ఞవల్క్యుడు ఏ దైవాన్ని ఆరాధించి యజుర్వేదాన్ని తిరిగి పొందారు?", options: ["సూర్యుడు (వాజీరూపం)", "అగ్ని", "విష్ణువు"], answer: 0, selected: null },
    { q: "యాజ్ఞవల్క్య మహర్షి 'త్రికాల సంధ్యా' అంటే ఏ సమయాలలో సంధ్యావందనం చేయడం?", options: ["ఉదయం, మధ్యాహ్నం, సాయంత్రం", "ఉదయం మరియు సాయంత్రం", "రాత్రి, తెల్లవారుజాము, మధ్యాహ్నం"], answer: 0, selected: null },
    { q: "యాజ్ఞవల్క్యుడు తన భార్యలకు ఆస్తిని పంచుతూ బోధించినది?", options: ["ఆత్మజ్ఞానం", "ధర్మశాస్త్రం", "కర్మఫలం"], answer: 0, selected: null },
    { q: "యాజ్ఞవల్క్య స్మృతిలో ఎన్ని కాండలు (విభాగాలు) ఉన్నాయి?", options: ["మూడు (ఆచార, వ్యవహార, ప్రాయశ్చిత్త)", "రెండు", "నాలుగు"], answer: 0, selected: null },
    { q: "మిత్రుడుగా యాజ్ఞవల్క్యుడికి సహాయం చేసిన రాజు?", options: ["జనక మహారాజు", "దశరథ మహారాజు", "పాండురాజు"], answer: 0, selected: null },
    { q: "శుక్ల యజుర్వేదంలోని రెండు శాఖలు?", options: ["మాధ్యందిన, కాణ్వ", "శకల, బాష్కల", "తైత్తిరీయ, మైత్రాయణీ"], answer: 0, selected: null },
    { q: "యాజ్ఞవల్క్యుడు తన గురువుకి కోపం తెప్పించినందుకు ఏమి వదిలేశాడు?", options: ["నేర్చుకున్న వేద జ్ఞానం", "ఆశ్రమం", "శిష్యరికం"], answer: 0, selected: null },
    { q: "యాజ్ఞవల్క్యుడు తపస్సు చేసి పొందిన విద్య ఏ వేదం క్రిందకు వస్తుంది?", options: ["యజుర్వేదం", "ఋగ్వేదం", "సామవేదం"], answer: 0, selected: null },
    { q: "యాజ్ఞవల్క్య స్మృతిలోని రెండవ భాగం దేని గురించి వివరిస్తుంది?", options: ["వ్యవహారం (చట్టాలు, న్యాయం)", "ఆచారం", "ప్రాయశ్చిత్తం"], answer: 0, selected: null },
    { q: "బ్రహ్మజ్ఞానం పొందడానికి భార్య మైత్రేయిని యాజ్ఞవల్క్యుడు ఎక్కడ వదిలి వెళ్లారు?", options: ["హిమాలయాలు", "మిథిలా నగరం", "వారణాసి"], answer: 0, selected: null },
    { q: "యాజ్ఞవల్క్యుడు శిష్యులకు ఉపదేశించిన జ్ఞానం ఏ రూపంలో ఉంది?", options: ["శ్రుతి (విని నేర్చుకునేది)", "స్మృతి", "తంత్రం"], answer: 0, selected: null },
    { q: "యాజ్ఞవల్క్య మహర్షి శాంతి కోసం ఏది పఠించాలని సూచించారు?", options: ["గాయత్రీ మంత్రం", "సహస్రనామం", "మహామృత్యుంజయ మంత్రం"], answer: 0, selected: null }
];


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// గ్లోబల్ వేరియబుల్స్
const TOTAL_QUESTIONS_TO_DISPLAY = 5;
const PASS_SCORE = 3; 
let userName = "యాజ్ఞవల్క్య భక్తుడు"; 
const appRoot = document.getElementById('quizApp'); 
let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];


// =================================================================
// 2. స్టైల్స్‌ను డైనమిక్‌గా జోడించే ఫంక్షన్ (CSS is embedded here for simplicity)
// =================================================================

function applyStyles() {
    const style = document.createElement('style');
    style.textContent = `
        :root {
            --primary-color: #6A1B9A; /* ముదురు ఊదా */
            --secondary-color: #F3E5F5; /* లేత ఊదా నేపథ్యం */
            --success-color: #28a745; 
            --failure-color: #dc3545; 
            --info-color: #17a2b8; 
            --shadow-heavy: 0 10px 25px rgba(0, 0, 0, 0.2);
            --cert-bg: #fffbf5; /* సర్టిఫికెట్ కోసం లేత క్రీమ్ */
        }
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f8f9fa;
            line-height: 1.5; 
            padding: 5px;
            margin: 0;
        }

        #quizApp {
            max-width: 650px; 
            margin: 0 auto;
            background: #fff;
            padding: 20px; 
            border-radius: 10px; 
            box-shadow: var(--shadow-heavy); 
            text-align: center; 
        }
        
        /* సాధారణ UI స్టైల్స్ */
        .header-title {
            color: var(--primary-color);
            font-size: 2rem; 
            margin-bottom: 5px;
            padding-bottom: 10px;
            font-weight: 800;
            border-bottom: 2px solid var(--secondary-color);
        }
        .section-description {
            color: #555;
            margin-bottom: 20px;
            font-size: 1.0rem;
        }
        .input-group {
            margin-bottom: 20px;
            text-align: left;
            max-width: 400px;
            margin: 20px auto;
        }
        .input-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: var(--primary-color);
            font-size: 1.1rem;
        }
        .input-group input[type="text"] {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 1.0rem;
            box-sizing: border-box;
        }
        .action-btn {
            background-color: var(--primary-color);
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1.0rem;
            margin: 5px;
            transition: background-color 0.3s;
        }
        .action-btn:hover {
            background-color: #4A148C;
        }
        .action-btn.download {
            background-color: var(--info-color);
        }
        .action-btn.download:hover {
            background-color: #117a8b;
        }
        .action-btn.retry {
            background-color: #6c757d;
        }
        .action-btn:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }

        /* క్విజ్ స్క్రీన్ స్టైల్స్ */
        .question-box {
            background: var(--secondary-color);
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 20px;
            text-align: left;
        }
        .options-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .options-list li {
            margin-bottom: 10px;
        }
        .option-btn {
            width: 100%;
            padding: 10px;
            border: 1px solid var(--primary-color);
            background-color: white;
            text-align: left;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.2s, transform 0.1s;
        }
        .option-btn:hover:not(:disabled) {
            background-color: #eee;
        }
        .option-btn.selected {
            background-color: var(--primary-color);
            color: white;
        }
        .quiz-navigation {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
        }
        .quiz-navigation button:first-child {
            /* 'మునుపటి' బటన్ */
            background-color: #6c757d;
        }

        /* ======================================= */
        /* సర్టిఫికెట్ డిజైన్ (Responsive Styles) */
        /* ======================================= */
        #certificateContainer {
            width: 90%; 
            max-width: 850px; 
            margin: 15px auto; 
            border: 5px solid transparent; 
            border-image: linear-gradient(45deg, var(--primary-color), var(--info-color)) 1; 
            padding: 15px 30px; /* డెస్క్‌టాప్ ప్యాడింగ్ */
            border-radius: 8px;
            background: var(--cert-bg); 
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); 
            text-align: center;
        }

        .downloading #certificateContainer {
            padding: 10px 20px; 
        }

        .certificate-title {
            font-size: 2.5rem; 
            color: var(--primary-color);
            font-weight: 500;
            margin: 0 0 5px 0;
            padding-bottom: 5px;
            border-bottom: 2px solid var(--secondary-color);
        }
        
        .date-time-row {
            display: flex;
            justify-content: space-between;
            font-size: 0.9rem;
            color: #555;
            margin: 0 0 10px 0;
            padding-bottom: 5px;
            border-bottom: 1px dashed #ddd;
        }

        .user-name-display {
            font-size: 2.0rem; 
            color: #333;
            background-color: var(--secondary-color);
            padding: 4px 15px; 
            border-radius: 5px;
            margin: 5px auto 5px; 
            display: inline-block;
            font-weight: 900;
            text-transform: capitalize;
        }

        #certificateContainer p {
            margin-top: 2px !important; 
            margin-bottom: 2px !important; 
            line-height: 1.3;
            font-size: 1.0rem;
            color: #444;
        }

        .score-status-line {
            font-size: 1.2rem;
            font-weight: 600;
            margin: 5px 0 10px 0;
            padding: 5px 0;
            color: var(--primary-color);
        }
        .score-status-line .score-value {
            font-size: 1.5rem;
            font-weight: 900;
            color: #333;
            margin-right: 5px;
        }
        .score-status-line .status-text {
            color: var(--success-color);
            font-weight: 900;
            margin-left: 5px;
        }

        #certificateContainer footer {
            margin-top: 10px; 
            padding-top: 8px;
            border-top: 1px dashed var(--primary-color);
            font-size: 0.85rem; 
            color: #444;
            font-weight: 500;
            line-height: 1.2; 
        }

        /* మొబైల్ రెస్పాన్సివ్నెస్ */
        @media (max-width: 600px) {
            #quizApp {
                padding: 10px;
            }
            #certificateContainer {
                padding: 10px 15px; /* చిన్న స్క్రీన్‌లలో ప్యాడింగ్ తగ్గించడం */
                width: 95%; 
            }
            .certificate-title {
                font-size: 1.2rem; /* చిన్న స్క్రీన్‌కు టైటిల్ తగ్గించడం */
            }
            .user-name-display {
                font-size: 1.5rem; /* చిన్న స్క్రీన్‌కు పేరు తగ్గించడం */
                padding: 3px 10px;
            }
            #certificateContainer p {
                font-size: 0.9rem; /* సాధారణ టెక్స్ట్ తగ్గించడం */
            }
            .date-time-row {
                flex-direction: column; /* తేదీ మరియు సమయాన్ని నిలువుగా (vertical) చూపడం */
                align-items: center;
                margin-bottom: 5px;
            }
            .date-time-row div {
                text-align: center !important;
                width: 100%;
                margin-bottom: 3px;
            }
            .score-status-line {
                font-size: 1.0rem;
            }
            .score-status-line .score-value {
                font-size: 1.2rem;
            }
            .action-btn {
                padding: 8px 15px;
                font-size: 0.9rem;
            }
        }
    `;
    document.head.appendChild(style);
}

// =================================================================
// 3. క్విజ్ లాజిక్ ఫంక్షన్లు (పాతవి - నావిగేషన్ లాజిక్‌తో సహా)
// =================================================================

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    showNameInputScreen();
}

function showNameInputScreen() {
    appRoot.innerHTML = `
        <h2 class="header-title">శ్రీ యాజ్ఞవల్క్య జ్ఞాన క్విజ్</h2>
        <p class="section-description">క్విజ్‌లో పాల్గొనడానికి ముందు, దయచేసి మీ పేరును నమోదు చేయండి. మీ సర్టిఫికెట్ పై ఈ పేరు ముద్రించబడుతుంది.</p>
        
        <div class="input-group">
            <label for="nameInput"><i class="fas fa-user-edit"></i> మీ పేరు:</label>
            <input type="text" id="nameInput" placeholder="ఉదా: సందీప్ మిరియాల" maxlength="30">
        </div>

        <button class="action-btn" onclick="initializeQuiz()">క్విజ్ ప్రారంభించండి <i class="fas fa-arrow-right"></i></button>
    `;
    document.getElementById('nameInput').focus();
}

function initializeQuiz() {
    const nameInput = document.getElementById('nameInput');
    const enteredName = nameInput ? nameInput.value.trim() : "";

    userName = enteredName || "యాజ్ఞవల్క్య భక్తుడు";

    const newShuffled = shuffleArray([...questions]);
    selectedQuestions = newShuffled.slice(0, TOTAL_QUESTIONS_TO_DISPLAY).map(q => ({
        ...q,
        selected: null 
    }));
    
    createQuizUI();
}

function createQuizUI() {
    appRoot.innerHTML = `
        <h2 class="header-title">శ్రీ యాజ్ఞవల్క్య జ్ఞాన క్విజ్</h2>
        <p class="section-description">మీరు శ్రీ యాజ్ఞవల్క్య మహర్షి గురించి ${TOTAL_QUESTIONS_TO_DISPLAY} యాదృచ్ఛిక ప్రశ్నలకు సమాధానం ఇవ్వాలి.</p>
        <div id="questionArea"></div>
        <div class="quiz-navigation">
            <button id="prevBtn" class="action-btn" onclick="previousQuestion()" disabled><i class="fas fa-arrow-left"></i> మునుపటి</button>
            <button id="nextBtn" class="action-btn" onclick="nextQuestion()"><i class="fas fa-arrow-right"></i> తరువాత</button>
        </div>
    `;
    displayQuestion();
}

function displayQuestion() {
    const questionArea = document.getElementById('questionArea');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (!questionArea || !prevBtn || !nextBtn) return;

    if (currentQuestionIndex < selectedQuestions.length) {
        const qData = selectedQuestions[currentQuestionIndex];
        
        questionArea.innerHTML = `
            <div class="question-box">
                <p style="font-weight: 600; font-size: 1.1rem; color: var(--primary-color);">ప్రశ్న ${currentQuestionIndex + 1} / ${TOTAL_QUESTIONS_TO_DISPLAY}:</p>
                <p style="font-size: 1.2rem; font-weight: 700; margin-top: 5px;">${qData.q}</p>
            </div>
            <ul class="options-list">
                ${qData.options.map((option, index) => `
                    <li>
                        <button class="option-btn ${qData.selected === index ? 'selected' : ''}" 
                                data-index="${index}" 
                                onclick="selectAnswer(${index})">
                            ${option}
                        </button>
                    </li>
                `).join('')}
            </ul>
        `;

        // నావిగేషన్ బటన్ లాజిక్
        prevBtn.disabled = currentQuestionIndex === 0;
        
        // సమాధానం ఎంచుకున్న తర్వాత మాత్రమే నెక్స్ట్/సమర్పించు బటన్‌ను ఎనేబుల్ చేయండి
        nextBtn.disabled = qData.selected === null;

        if (currentQuestionIndex === TOTAL_QUESTIONS_TO_DISPLAY - 1) {
            nextBtn.innerHTML = 'సమర్పించండి <i class="fas fa-check"></i>';
        } else {
            nextBtn.innerHTML = '<i class="fas fa-arrow-right"></i> తరువాత';
        }

    } else {
        evaluateQuiz();
    }
}

function selectAnswer(selectedIndex) {
    // ప్రస్తుత ప్రశ్న డేటా లో యూజర్ ఎంపికను సేవ్ చేయండి
    selectedQuestions[currentQuestionIndex].selected = selectedIndex;

    // UI ని అప్డేట్ చేయండి (బటన్ హైలైట్)
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => btn.classList.remove('selected'));
    document.querySelector(`.option-btn[data-index="${selectedIndex}"]`).classList.add('selected');

    // నెక్స్ట్/సమర్పించు బటన్‌ను ఎనేబుల్ చేయండి
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.disabled = false;
    }
}

function nextQuestion() {
    if (currentQuestionIndex < TOTAL_QUESTIONS_TO_DISPLAY - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        // చివరి ప్రశ్న
        evaluateQuiz();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function evaluateQuiz() {
    let finalScore = 0;
    selectedQuestions.forEach(q => {
        if (q.selected !== null && q.selected === q.answer) {
            finalScore++;
        }
    });
    score = finalScore; 
    showResults(score);
}


// =================================================================
// 4. సర్టిఫికెట్ డిస్ప్లే మరియు లాజిక్
// =================================================================

function showResults(currentScore) {
    appRoot.innerHTML = ''; 

    const isPassed = currentScore >= PASS_SCORE;
    const resultText = isPassed ? 'జ్ఞాన ధారిత' : 'జ్ఞాన అన్వేషి';
    const resultStatus = isPassed ? 'ఉత్తీర్ణత సాధించారు' : 'మరికొంత అభ్యాసం అవసరం';
    const statusColor = isPassed ? 'var(--success-color)' : 'var(--failure-color)';

    const now = new Date();
    const dateStr = now.toLocaleDateString('te-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('te-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    const statusIcon = isPassed 
        ? '<i class="fas fa-trophy" style="font-size: 3.5rem; color: #FFD700; margin-bottom: 5px; text-shadow: 0 0 10px rgba(255, 215, 0, 0.7);"></i>' 
        : '<i class="fas fa-lightbulb" style="font-size: 3.5rem; color: var(--info-color); margin-bottom: 5px; text-shadow: 0 0 10px rgba(23, 162, 184, 0.5);"></i>';
    
    const achievementText = isPassed 
        ? `<p style="font-size: 1.0rem; color: var(--success-color); font-weight: 500;">మీరు శ్రీ యాజ్ఞవల్క్య మహర్షిపై అత్యుత్తమ జ్ఞానాన్ని ప్రదర్శించారు. ధన్యవాదాలు!</p>` 
        : `<p style="font-size: 1.0rem; color: var(--failure-color); font-weight: 500;">మీరు లక్ష్యానికి చేరువలో ఉన్నారు! మళ్లీ ప్రయత్నించడం ద్వారా పూర్తి జ్ఞానాన్ని పొందవచ్చు.</p>`;

    const certContainer = document.createElement('div');
    certContainer.id = 'certificateContainer';
    certContainer.innerHTML = `
        <h5 class="certificate-title">శ్రీ యాజ్ఞవల్క్య జ్ఞానధృవపత్రం</h5>

        <div class="date-time-row">
            <div style="text-align: left;"><i class="far fa-calendar-alt"></i> తేదీ: ${dateStr}</div>
            <div style="text-align: right;"><i class="far fa-clock"></i> సమయం: ${timeStr}</div>
        </div>

        <p class="user-name-display">${userName}</p>
        
        <p style="font-weight: 400; font-size: 1.1rem; color: #333;">ఈ క్విజ్‌లో పాల్గొని, ఈ స్థాయిని సాధించినందుకు **ధన్యవాదాలు**:</p>

        <p style="font-size: 1.2rem; font-weight: 700; color: var(--primary-color);">స్థాయి: **${resultText}**</p>
        
        ${statusIcon}

        ${achievementText}

        <p class="score-status-line">
            మీరు సాధించిన స్కోర్: <span class="score-value" style="color: ${statusColor};">${currentScore} / ${TOTAL_QUESTIONS_TO_DISPLAY}</span> 
            <span class="status-text" style="color: ${statusColor};">**${resultStatus}**</span>
        </p>

        <footer>
           <i class="fas fa-signature" style="color:#aaa;"></i> ఈ పత్రం జ్ఞానాభివృద్ధి కృషికి గుర్తింపుగా ఇవ్వబడింది.
            <br> ఓం పూర్ణమద:పూర్ణమిద:! పూర్ణాత్ పూర్ణాముదచ్యతే పూర్ణాస్యపూర్ణమాదాయ! పూర్ణమేవావశిష్యతే||
        </footer>
    `;
    appRoot.appendChild(certContainer);

    const actionButtons = document.createElement('div');
    actionButtons.className = 'certificate-buttons';

    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'action-btn download'; 
    downloadBtn.innerHTML = '<i class="fas fa-file-download"></i> సర్టిఫికెట్ డౌన్‌లోడ్ ';
    if (typeof html2canvas !== 'undefined') {
        downloadBtn.onclick = () => downloadCertificate(certContainer);
    } else {
        downloadBtn.onclick = () => alert("సర్టిఫికెట్ డౌన్‌లోడ్ చేయడానికి 'html2canvas' లైబ్రరీ అవసరం. దయచేసి దానిని మీ HTML లో చేర్చండి.");
    }
    actionButtons.appendChild(downloadBtn);

    const retryBtn = document.createElement('button');
    retryBtn.className = 'action-btn retry'; 
    retryBtn.innerHTML = '<i class="fas fa-undo-alt"></i> మళ్లీ ప్రయత్నించండి';
    retryBtn.onclick = startQuiz; 
    actionButtons.appendChild(retryBtn);

    appRoot.appendChild(actionButtons);

    downloadBtn.focus();
}

// =================================================================
// 5. సర్టిఫికెట్ డౌన్‌లోడ్ ఫంక్షన్ (html2canvas)
// =================================================================

function downloadCertificate(element) {
    document.body.classList.add('downloading'); 
    
    html2canvas(element, { 
        scale: 2, 
        allowTaint: true,
        useCORS: true,
        backgroundColor: '#fffbf5', 
    }).then(canvas => {
        const image = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = image;
        a.download = `జ్ఞానధృవపత్రం-${userName}-${new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-')}.png`; 
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        document.body.classList.remove('downloading');
    });
}


// =================================================================
// 6. అప్లికేషన్‌ను ప్రారంభించడం (Initialization)
// =================================================================
document.addEventListener('DOMContentLoaded', () => {
    applyStyles(); 
    startQuiz(); 
});
    