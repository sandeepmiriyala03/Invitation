// =================================================================
// 1. ప్రశ్నల డేటా (25 మెరుగుపరచిన ప్రశ్నలు)
// =================================================================

const questions = [
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

// 5 ప్రశ్నలకు తగ్గించబడింది, కాబట్టి ప్రశ్నల పూల్ పెద్దగా ఉండాలి.
const selectedQuestions = questions.slice(0, 5); // మొదటి 5 ప్రశ్నలను మాత్రమే తీసుకుందాం
const TOTAL_QUESTIONS_TO_DISPLAY = 5;
const PASS_SCORE = 2; 
let userName = "అజ్ఞాత భక్తుడు"; 
const appRoot = document.getElementById('quizApp'); 
const quizSection = document.getElementById('Quiz'); 

// =================================================================
// 2. UI/UX మరియు స్టైలింగ్ ఫంక్షన్లు (అంతిమ మెరుగుదలలు)
// =================================================================

function applyStyles() {
    const style = document.createElement('style');
    style.textContent = `
        :root {
            --primary-color: #6A1B9A; /* ముదురు ఊదా */
            --secondary-color: #F3E5F5; /* లేత ఊదా నేపథ్యం */
            --success-color: #28a745; /* గ్రీన్ */
            --failure-color: #dc3545; /* రెడ్ */
            --info-color: #17a2b8; /* నీలం */
            --shadow-light: 0 4px 10px rgba(0, 0, 0, 0.1);
            --shadow-heavy: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f8f9fa;
            line-height: 1.6;
            padding: 10px;
        }
        .main-section:focus {
            outline: 4px dashed var(--primary-color);
            outline-offset: 5px;
        }

        #quizApp {
            max-width: 650px; /* కొద్దిగా పెంచబడింది */
            margin: 0 auto;
            background: #fff;
            padding: 25px; 
            border-radius: 15px; 
            box-shadow: var(--shadow-heavy); 
        }
        .header-title {
            color: var(--primary-color);
            text-align: center;
            font-size: 2.2rem; 
            margin-bottom: 5px;
            padding-bottom: 10px;
            font-weight: 800;
        }
        .section-description {
            text-align: center;
            color: #555;
            margin-bottom: 30px;
            font-size: 1.1rem;
            border-bottom: 1px solid var(--secondary-color);
            padding-bottom: 15px;
        }
        
        /* బటన్స్ కోసం సెంట్రల్ కంటైనర్ */
        .button-center-container {
            display: flex;
            justify-content: center;
            width: 100%;
        }

        /* సబ్మిట్ బటన్ స్టైల్ */
        .submit-button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 15px 25px; 
            font-size: 1.2rem; 
            font-weight: 700;
            border-radius: 50px;
            cursor: pointer;
            width: 90%; /* సెంటర్డ్ కంటైనర్‌లో పరిమాణం */
            max-width: 400px;
            margin: 40px auto 0;
            box-shadow: 0 8px 15px rgba(106, 27, 154, 0.4);
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .submit-button:hover, .submit-button:focus {
            background-color: #4A148C;
            transform: translateY(-2px); 
            box-shadow: 0 12px 20px rgba(106, 27, 154, 0.6);
            outline: 3px solid var(--info-color);
            outline-offset: 3px;
        }
        .submit-button i { margin-right: 10px; }

        /* సర్టిఫికెట్ UI మెరుగుదలలు */
        #certificateContainer {
            border: 10px solid transparent; /* పారదర్శక సరిహద్దు */
            border-image: linear-gradient(45deg, var(--primary-color), var(--info-color)) 1; /* ఆకర్షణీయమైన బార్డర్ */
            padding: 20px 30px; /* గ్యాప్ తగ్గించబడింది */
            border-radius: 10px;
            margin-top: 30px;
            background: #fff; 
            box-shadow: var(--shadow-heavy); 
            position: relative;
            text-align: center;
        }

        .certificate-header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px dashed #ccc;
            padding-bottom: 10px;
            margin-bottom: 15px;
        }
        
        .certificate-header {
            font-size: 1.6rem;
            color: var(--primary-color);
            font-weight: 700;
            flex-grow: 1;
            text-align: center;
        }

        .datetime-display {
            font-size: 0.9rem;
            color: #555;
            font-style: italic;
            text-align: right;
            line-height: 1.2;
        }

        .user-name-display {
            font-size: 2.5rem; 
            color: #333;
            background-color: var(--secondary-color);
            padding: 10px 20px;
            border-radius: 8px;
            margin: 20px auto;
            display: inline-block;
            font-weight: 900;
            text-transform: capitalize;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        /* స్కోర్ బాక్స్ */
        .score-box {
            background-color: #fff;
            padding: 25px;
            border-radius: 15px;
            margin: 20px auto;
            border: 1px solid var(--info-color);
            box-shadow: 0 0 15px rgba(23, 162, 184, 0.4); /* బ్లూ షాడో */
            max-width: 300px;
        }

        .score-label {
            font-size: 1.1rem;
            color: #333;
            font-weight: 600;
            margin-bottom: 5px;
        }

        .score-display {
            font-size: 3rem;
            font-weight: 900;
            line-height: 1;
        }
        
        .result-level {
            font-size: 1.4rem;
            font-weight: 700;
            margin-top: 15px;
        }
        .pass-text { color: var(--success-color); }
        .fail-text { color: var(--failure-color); }

        /* ఫుటర్ గ్యాప్ తగ్గించడం */
        #certificateContainer footer {
            margin-top: 15px; /* తగ్గించబడింది */
            padding-top: 10px;
            border-top: 1px solid #eee;
            font-size: 0.85rem;
        }
        
        /* యాక్షన్ బటన్ కంటైనర్ */
        .certificate-buttons {
            margin-top: 30px;
            display: flex;
            flex-direction: row; /* డెస్క్టాప్ స్టైల్ మొదట */
            justify-content: center;
            gap: 20px;
        }
        
        .action-btn {
            padding: 15px 20px; 
            border-radius: 10px; 
            min-width: 200px;
            font-weight: 600;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            transition: all 0.3s;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .action-btn i { margin-right: 8px; }

        /* మొబైల్ కోసం స్టైల్స్ */
        @media (max-width: 650px) {
            .certificate-buttons {
                flex-direction: column;
                gap: 15px;
                align-items: center;
            }
            .action-btn {
                width: 90%;
                max-width: none;
            }
        }
    `;
    document.head.appendChild(style);
}

// =================================================================
// 3. క్విజ్ లాజిక్ ఫంక్షన్లు
// =================================================================

function startQuiz() {
    if (!appRoot) return;
    
    appRoot.innerHTML = ''; 
    if (quizSection) quizSection.focus();

    const header = document.createElement('h2');
    header.className = 'header-title';
    header.innerHTML = `<i class="fas fa-book-open"></i> శ్రీ యాజ్ఞవల్క్య క్విజ్`;
    appRoot.appendChild(header);

    const desc = document.createElement('p');
    desc.className = 'section-description';
    desc.innerText = `క్విజ్‌లో పాల్గొనేందుకు మీ పేరును దయచేసి నమోదు చేయండి.`;
    appRoot.appendChild(desc);

    const inputContainer = document.createElement('div');
    inputContainer.className = 'name-input-container';

    const inputLabel = document.createElement('label');
    inputLabel.setAttribute('for', 'candidateName');
    inputLabel.innerText = "మీ పేరు:";
    inputLabel.style.fontWeight = '600';
    inputContainer.appendChild(inputLabel);

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'candidateName';
    nameInput.className = 'name-input';
    nameInput.placeholder = 'మీ పూర్తి పేరు';
    nameInput.setAttribute('required', '');
    inputContainer.appendChild(nameInput);
    appRoot.appendChild(inputContainer);

    const startBtn = document.createElement('button');
    startBtn.innerHTML = '<i class="fas fa-play"></i> క్విజ్ ప్రారంభించండి';
    startBtn.className = 'start-button';
    startBtn.backgroundColor = 'var(--primary-color)';
    startBtn.onclick = () => {
        const name = document.getElementById('candidateName').value.trim();
        if (name) {
            userName = name;
            createQuizUI();
        } else {
            alert("దయచేసి మీ పేరును నమోదు చేయండి.");
            nameInput.focus();
        }
    };
    appRoot.appendChild(startBtn);

    nameInput.focus(); 
}

function createQuizUI() {
    if (!appRoot) return;
    appRoot.innerHTML = ''; 

    if (quizSection) quizSection.focus();


    const header = document.createElement('h2');
    header.className = 'header-title';
    header.innerHTML = `<i class="fas fa-question-circle"></i> క్విజ్ ప్రశ్నలు`;
    appRoot.appendChild(header);

    const desc = document.createElement('p');
    desc.className = 'section-description';
    desc.innerText = `${userName} గారూ, ఈ ${TOTAL_QUESTIONS_TO_DISPLAY} ప్రశ్నలకు సరైన సమాధానం ఎంచుకోండి.`;
    appRoot.appendChild(desc);

    let firstRadioInput = null;

    selectedQuestions.forEach((item, idx) => {
        const qDiv = document.createElement('div');
        qDiv.className = 'question-item';
        qDiv.setAttribute('role', 'radiogroup');
        qDiv.setAttribute('aria-labelledby', `q-text-${idx}`);

        const qP = document.createElement('p');
        qP.className = 'question-text';
        qP.id = `q-text-${idx}`;
        qP.innerHTML = `${idx + 1}. ${item.q}`;
        qDiv.appendChild(qP);
        
        item.options.forEach((opt, optIdx) => {
            const label = document.createElement('label');
            label.className = 'option-label';
            
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question${idx}`;
            radio.value = optIdx;
            radio.className = 'option-input';
            radio.setAttribute('aria-labelledby', `q-text-${idx}`);

            if (idx === 0 && optIdx === 0) {
                firstRadioInput = radio; 
            }

            label.appendChild(radio);
            label.appendChild(document.createTextNode(opt));
            qDiv.appendChild(label);
        });

        appRoot.appendChild(qDiv);
    });

    const submitContainer = document.createElement('div');
    submitContainer.className = 'button-center-container';
    const submitBtn = document.createElement('button');
    submitBtn.innerHTML = '<i class="fas fa-check-circle"></i> ఫలితం చూడండి';
    submitBtn.className = 'submit-button';
    submitBtn.backgroundColor = 'var(--primary-color)';
    
    submitBtn.onclick = evaluateQuiz;
    submitContainer.appendChild(submitBtn);
    appRoot.appendChild(submitContainer);

    if (firstRadioInput) {
        firstRadioInput.focus();
    }
}

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

function showResults(score) {
    appRoot.innerHTML = ''; 

    if (quizSection) quizSection.focus();

    const isPassed = score >= PASS_SCORE;
    const resultText = isPassed ? 'అభినందనలు! మీరు విజయవంతంగా ఉత్తీర్ణులయ్యారు.' : 'మరికొంత అభ్యాసం అవసరం';
    const resultLevel = isPassed ? 'జ్ఞాన ధారిత' : 'జ్ఞాన అన్వేషి';

    // ప్రస్తుత తేదీ మరియు సమయాన్ని పొందడం
    const now = new Date();
    const dateStr = now.toLocaleDateString('te-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('te-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });


    const certContainer = document.createElement('div');
    certContainer.id = 'certificateContainer';

    const statusIcon = isPassed 
        ? '<i class="fas fa-medal" style="font-size: 3rem; color: var(--success-color); margin-bottom: 10px;"></i>' 
        : '<i class="fas fa-brain" style="font-size: 3rem; color: var(--info-color); margin-bottom: 10px;"></i>';

    certContainer.innerHTML = `
        <div class="certificate-header-container">
            <i class="fas fa-scroll" style="color: var(--primary-color); font-size: 1.5rem;"></i>
            <h3 class="certificate-header">శ్రీయాజ్ఞవల్క్య జ్ఞాన ధృవ పత్రం</h3>
            
            <div class="datetime-display">
                <i class="far fa-calendar-alt"></i> తేదీ: ${dateStr}<br>
                <i class="far fa-clock"></i> సమయం: ${timeStr}
            </div>
        </div>

        ${statusIcon}

        <p style="font-size: 1.1rem; color: #555; margin-bottom: 10px;">ఈ క్విజ్‌లో పాల్గొన్నందుకు ధన్యవాదాలు:</p>
        <p class="user-name-display">${userName}</p>

        <p class="result-level ${isPassed ? 'pass-text' : 'fail-text'}">స్థాయి: ${resultLevel}</p>

        <div class="score-box">
            <p class="score-label">మీరు సాధించిన స్కోర్:</p>
            <p class="score-display ${isPassed ? 'pass' : 'fail'}">
                ${score} / ${TOTAL_QUESTIONS_TO_DISPLAY}
            </p>
            <p style="font-weight: 500; color:${isPassed ? 'var(--success-color)' : 'var(--failure-color)'}">${resultText}</p>
        </div>

        <footer>
            ఓం పూర్ణమద: పూర్ణమిద:! పూర్ణాత్ పూర్ణా ముదచ్యతే పూర్ణాస్యపూర్ణమాదాయ ! పూర్ణ మే వావశిష్యతే ||
        </footer>
    `;
    appRoot.appendChild(certContainer);

    const actionButtons = document.createElement('div');
    actionButtons.className = 'certificate-buttons';
    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'action-btn download'; 
    downloadBtn.style.backgroundColor = 'var(--info-color)';
    downloadBtn.innerHTML = '<i class="fas fa-file-download"></i> సర్టిఫికెట్ డౌన్‌లోడ్ ';
    downloadBtn.onclick = () => downloadCertificate(certContainer);
    actionButtons.appendChild(downloadBtn);

    const retryBtn = document.createElement('button');
    retryBtn.className = 'action-btn retry'; 
    retryBtn.style.backgroundColor = 'var(--primary-color)';
    retryBtn.innerHTML = '<i class="fas fa-undo-alt"></i>1 మళ్లీ ప్రయత్నించండి';
    retryBtn.onclick = startQuiz; 
    actionButtons.appendChild(retryBtn);

    appRoot.appendChild(actionButtons);

    downloadBtn.focus();
}

// =================================================================
// 4. సర్టిఫికెట్ డౌన్‌లోడ్ ఫంక్షన్
// =================================================================

function downloadCertificate(element) {
    if (typeof html2canvas === 'undefined') {
        alert("సర్టిఫికెట్ డౌన్‌లోడ్ చేయడానికి 'html2canvas' లైబ్రరీ అవసరం. దయచేసి దానిని మీ HTML లో చేర్చండి.");
        return;
    }

    html2canvas(element, { 
        scale: 2, 
        logging: false 
    }).then(canvas => {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = `Yajnavalkya_Quiz_Certificate_${userName.replace(/\s/g, '_')}_${new Date().toLocaleDateString('en-GB').replace(/\//g, '-')}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}


// =================================================================
// 5. అప్లికేషన్‌ను ప్రారంభించడం
// =================================================================
document.addEventListener('DOMContentLoaded', () => {
    applyStyles(); 
    startQuiz(); 
});