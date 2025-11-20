// Enhanced question data with 15 questions and 5 browsers
const questions = [
    {
        id: 'suite',
        title: 'よく使う仕事用サービスは？',
        help: '',
        options: [
            { 
                text: 'Google（Gmail/ドライブ/カレンダー）', 
                tags: ['Google中心'], 
                weights: { Chrome: 3, Edge: 1, 'Firefox ESR': 0, Brave: 0, Opera: 0 }
            },
            { 
                text: 'Microsoft（Outlook/Teams/SharePoint）', 
                tags: ['Microsoft中心'], 
                weights: { Chrome: 1, Edge: 3, 'Firefox ESR': 0, Brave: 0, Opera: 0 }
            },
            { 
                text: '両方同じくらい', 
                tags: ['両刀'], 
                weights: { Chrome: 2, Edge: 2, 'Firefox ESR': 0, Brave: 0, Opera: 0 }
            },
            { 
                text: '特に決まっていない', 
                tags: ['ベンダーフリー'], 
                weights: { Chrome: 0, Edge: 0, 'Firefox ESR': 2, Brave: 1, Opera: 1 }
            }
        ]
    },
    {
        id: 'legacy',
        title: '会社の古いシステム（昔のIE専用サイト等）を使いますか？',
        help: '',
        options: [
            { 
                text: 'よく使う', 
                tags: ['IEモード必須'], 
                weights: { Chrome: 0, Edge: 4, 'Firefox ESR': 0, Brave: 0, Opera: 0 }
            },
            { 
                text: 'ときどき使う', 
                tags: ['IEモードあり'], 
                weights: { Chrome: 0, Edge: 2, 'Firefox ESR': 0, Brave: 0, Opera: 0 }
            },
            { 
                text: '使わない', 
                tags: ['モダン中心'], 
                weights: { Chrome: 1, Edge: 0, 'Firefox ESR': 1, Brave: 1, Opera: 1 }
            }
        ]
    },
    {
        id: 'privacy',
        title: '広告や追跡（トラッキング）は気になりますか？',
        help: '',
        options: [
            { 
                text: 'とても気になる（最初から強く止めたい）', 
                tags: ['プライバシー重視'], 
                weights: { Chrome: 0, Edge: 0, 'Firefox ESR': 3, Brave: 3, Opera: 0 }
            },
            { 
                text: 'すこし気になる（必要なら止めたい）', 
                tags: ['追跡対策'], 
                weights: { Chrome: 0, Edge: 0, 'Firefox ESR': 2, Brave: 2, Opera: 1 }
            },
            { 
                text: 'あまり気にしない', 
                tags: ['利便性優先'], 
                weights: { Chrome: 2, Edge: 2, 'Firefox ESR': 0, Brave: 0, Opera: 0 }
            }
        ]
    },
    {
        id: 'spec',
        title: 'パソコンの性能は？',
        help: '',
        options: [
            { 
                text: '古くて遅い（メモリ少ない/年式古め）', 
                tags: ['軽快さ'], 
                weights: { Chrome: 0, Edge: 1, 'Firefox ESR': 2, Brave: 2, Opera: 1 }
            },
            { 
                text: 'ふつう', 
                tags: ['標準性能'], 
                weights: { Chrome: 1, Edge: 1, 'Firefox ESR': 0, Brave: 0, Opera: 0 }
            },
            { 
                text: '新しくて速い', 
                tags: ['高性能'], 
                weights: { Chrome: 1, Edge: 1, 'Firefox ESR': 0, Brave: 0, Opera: 0 }
            }
        ]
    },
    {
        id: 'ui_like',
        title: '画面の見た目はどちらが好き？',
        help: '',
        options: [
            { 
                text: 'シンプルですっきり', 
                tags: ['シンプルUI'], 
                weights: { Chrome: 1, Edge: 0, 'Firefox ESR': 2, Brave: 0, Opera: 0 }
            },
            { 
                text: 'はじめから多機能（サイドバー等）', 
                tags: ['多機能UI'], 
                weights: { Chrome: 0, Edge: 2, 'Firefox ESR': 0, Brave: 0, Opera: 2 }
            },
            { 
                text: '自分であとから足して調整', 
                tags: ['カスタム派'], 
                weights: { Chrome: 2, Edge: 0, 'Firefox ESR': 1, Brave: 0, Opera: 0 }
            }
        ]
    },
    {
        id: 'extensions',
        title: '追加機能（拡張機能）はどのくらい必要？',
        help: '',
        options: [
            { 
                text: 'たくさん欲しい（広告ブロック/翻訳/業務ツール）', 
                tags: ['拡張最重視'], 
                weights: { Chrome: 3, Edge: 2, 'Firefox ESR': 1, Brave: 0, Opera: 0 }
            },
            { 
                text: '最小限でいい（標準で十分）', 
                tags: ['標準機能派'], 
                weights: { Chrome: 0, Edge: 2, 'Firefox ESR': 0, Brave: 0, Opera: 2 }
            },
            { 
                text: '広告を消す機能だけ欲しい', 
                tags: ['広告非表示'], 
                weights: { Chrome: 0, Edge: 0, 'Firefox ESR': 2, Brave: 3, Opera: 1 }
            }
        ]
    },
    {
        id: 'management',
        title: 'インストールや設定は誰がやりますか？',
        help: '',
        options: [
            { 
                text: '会社がまとめて（GPO/Intuneなど）', 
                tags: ['一括管理'], 
                weights: { Chrome: 2, Edge: 3, 'Firefox ESR': 2, Brave: 0, Opera: 0 }
            },
            { 
                text: '自分で入れて使う', 
                tags: ['自己管理'], 
                weights: { Chrome: 2, Edge: 0, 'Firefox ESR': 1, Brave: 2, Opera: 1 }
            },
            { 
                text: 'まだ決まっていない', 
                tags: ['運用未定'], 
                weights: { Chrome: 1, Edge: 1, 'Firefox ESR': 0, Brave: 0, Opera: 0 }
            }
        ]
    },
    {
        id: 'update_attitude',
        title: '更新（アップデート）についての考えは？',
        help: '',
        options: [
            { 
                text: '変化が少ないほうが安心（安定重視）', 
                tags: ['安定運用'], 
                weights: { Chrome: 0, Edge: 1, 'Firefox ESR': 3, Brave: 0, Opera: 0 }
            },
            { 
                text: '新機能を早く使いたい', 
                tags: ['最新志向'], 
                weights: { Chrome: 2, Edge: 2, 'Firefox ESR': 0, Brave: 2, Opera: 1 }
            },
            { 
                text: 'どちらでもよい', 
                tags: ['柔軟'], 
                weights: { Chrome: 0, Edge: 0, 'Firefox ESR': 0, Brave: 0, Opera: 0 }
            }
        ]
    },
    {
        id: 'mobile_sync',
        title: 'スマホとの連携はどれくらい大事？',
        help: '',
        options: [
            { 
                text: 'とても大事（パスワード/タブ/履歴をスマホと共有したい）', 
                tags: ['スマホ連携重視'], 
                weights: { Chrome: 2, Edge: 2, 'Firefox ESR': 0, Brave: 0, Opera: 1 }
            },
            { 
                text: 'すこし大事（最低限あればOK）', 
                tags: ['連携そこそこ'], 
                weights: { Chrome: 1, Edge: 1, 'Firefox ESR': 0, Brave: 0, Opera: 1 }
            },
            { 
                text: 'あまり使わない', 
                tags: ['連携不要'], 
                weights: { Chrome: 0, Edge: 0, 'Firefox ESR': 1, Brave: 1, Opera: 0 }
            }
        ]
    },
    {
        id: 'public_wifi_vpn',
        title: '公共Wi-Fiをよく使いますか？（カフェ/出張など）',
        help: '',
        options: [
            { 
                text: 'よく使う（通信の安全が気になる）', 
                tags: ['VPN/保護重視'], 
                weights: { Chrome: 0, Edge: 1, 'Firefox ESR': 0, Brave: 1, Opera: 3 }
            },
            { 
                text: 'たまに使う', 
                tags: ['Wi-Fi注意'], 
                weights: { Chrome: 0, Edge: 1, 'Firefox ESR': 0, Brave: 0, Opera: 1 }
            },
            { 
                text: 'ほとんど使わない', 
                tags: ['社内中心'], 
                weights: { Chrome: 0, Edge: 0, 'Firefox ESR': 0, Brave: 0, Opera: 0 }
            }
        ]
    },
    {
        id: 'sidebar_chat',
        title: '画面の横でSNSやメッセージを同時に使いたい？',
        help: '',
        options: [
            { 
                text: '使いたい（WhatsApp/メッセンジャー等）', 
                tags: ['サイドバー連携'], 
                weights: { Chrome: 0, Edge: 1, 'Firefox ESR': 0, Brave: 0, Opera: 3 }
            },
            { 
                text: '使わない（シンプルがいい）', 
                tags: ['集中重視'], 
                weights: { Chrome: 0, Edge: 0, 'Firefox ESR': 2, Brave: 1, Opera: 0 }
            }
        ]
    },
    {
        id: 'print_pdf',
        title: '印刷やPDF変換をよく使いますか？',
        help: '',
        options: [
            { 
                text: 'よく使う（見積/帳票のPDF化など）', 
                tags: ['印刷ワークフロー'], 
                weights: { Chrome: 2, Edge: 2, 'Firefox ESR': 0, Brave: 0, Opera: 0 }
            },
            { 
                text: 'たまに使う', 
                tags: ['印刷そこそこ'], 
                weights: { Chrome: 1, Edge: 1, 'Firefox ESR': 0, Brave: 0, Opera: 0 }
            },
            { 
                text: 'ほとんど使わない', 
                tags: ['印刷不要'], 
                weights: { Chrome: 0, Edge: 0, 'Firefox ESR': 0, Brave: 0, Opera: 0 }
            }
        ]
    },
    {
        id: 'media_meet',
        title: '動画会議（Teams/Meet）や再生をよく使いますか？',
        help: '',
        options: [
            { 
                text: 'よく使う（PCの持ちが大事）', 
                tags: ['省電力・会議重視'], 
                weights: { Chrome: 0, Edge: 2, 'Firefox ESR': 1, Brave: 2, Opera: 0 }
            },
            { 
                text: 'ふつう', 
                tags: ['一般利用'], 
                weights: { Chrome: 1, Edge: 0, 'Firefox ESR': 0, Brave: 0, Opera: 0 }
            },
            { 
                text: 'ほとんど使わない', 
                tags: ['会議少なめ'], 
                weights: { Chrome: 0, Edge: 0, 'Firefox ESR': 0, Brave: 0, Opera: 0 }
            }
        ]
    },
    {
        id: 'design_preference',
        title: 'ブラウザの見た目（デザイン）は？',
        help: '',
        options: [
            { 
                text: 'すっきり・落ち着いた見た目が好き', 
                tags: ['落ち着きデザイン'], 
                weights: { Chrome: 1, Edge: 0, 'Firefox ESR': 2, Brave: 0, Opera: 0 }
            },
            { 
                text: 'にぎやかで便利な見た目が好き', 
                tags: ['賑やかデザイン'], 
                weights: { Chrome: 0, Edge: 2, 'Firefox ESR': 0, Brave: 0, Opera: 2 }
            },
            { 
                text: 'こだわらない', 
                tags: ['見た目不問'], 
                weights: { Chrome: 0, Edge: 0, 'Firefox ESR': 0, Brave: 0, Opera: 0 }
            }
        ]
    },
    {
        id: 'fallback',
        title: 'もし見られないサイトがあったら？',
        help: '',
        options: [
            { 
                text: 'すぐ別ブラウザに切り替える', 
                tags: ['二刀流OK'], 
                weights: { Chrome: 2, Edge: 2, 'Firefox ESR': 0, Brave: 0, Opera: 0 }
            },
            { 
                text: 'できれば1つで使いたい', 
                tags: ['一本化志向'], 
                weights: { Chrome: 0, Edge: 0, 'Firefox ESR': 0, Brave: 0, Opera: 0 }
            },
            { 
                text: '場合による', 
                tags: ['柔軟切替'], 
                weights: { Chrome: 1, Edge: 1, 'Firefox ESR': 0, Brave: 0, Opera: 0 }
            }
        ]
    }
];

// State management
let currentQuestion = 0;
let answers = {};
let scores = { Chrome: 0, Edge: 0, 'Firefox ESR': 0, Brave: 0, Opera: 0 };

// Enhanced browser priority for tie-breaking (Chrome > Edge > Firefox ESR > Opera > Brave)
const browserPriority = ['Chrome', 'Edge', 'Firefox ESR', 'Opera', 'Brave'];

// Browser icons mapping
const browserIcons = {
    'Chrome': 'image/Chrome アイコン.svg',
    'Edge': 'image/Microsoft Edge アイコン.svg',
    'Firefox ESR': 'image/Firefox Logo 2019.svg',
    'Opera': 'image/Opera アイコン.svg',
    'Brave': 'image/Brave アイコン.svg'
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    generateQuestions();
    updateProgress();
    showQuestion(0);
});

// Generate question HTML
function generateQuestions() {
    const container = document.getElementById('questionsContainer');
    
    questions.forEach((question, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        questionCard.id = `question-${index}`;
        
        questionCard.innerHTML = `
            <div class="question-header">
                <div class="question-number">質問 ${index + 1} / 15 | ID: ${question.id}</div>
                <h2 class="question-title">${question.title}</h2>
                ${question.help ? `<p class="question-help">${question.help}</p>` : ''}
            </div>
            
            <div class="options-container">
                ${question.options.map((option, optionIndex) => `
                    <button 
                        class="option-button" 
                        onclick="selectOption(${index}, ${optionIndex})"
                        tabindex="0"
                        aria-pressed="false"
                        data-question="${index}"
                        data-option="${optionIndex}"
                    >
                        ${option.text}
                    </button>
                `).join('')}
            </div>
            
            <div class="navigation">
                <button 
                    class="nav-button" 
                    onclick="previousQuestion()" 
                    ${index === 0 ? 'disabled' : ''}
                >
                    ← 戻る
                </button>
                <button 
                    class="nav-button next-button" 
                    onclick="nextQuestion()" 
                    ${index === questions.length - 1 ? 'style="visibility: hidden;"' : ''}
                >
                    次へ →
                </button>
            </div>
        `;
        
        container.appendChild(questionCard);
    });
}

// Show specific question
function showQuestion(questionIndex) {
    document.querySelectorAll('.question-card').forEach(card => {
        card.classList.remove('active');
    });
    
    const currentCard = document.getElementById(`question-${questionIndex}`);
    if (currentCard) {
        currentCard.classList.add('active');
    }
    
    updateNavigationButtons();
    
    if (answers.hasOwnProperty(questionIndex)) {
        const selectedOption = currentCard.querySelector(`[data-option="${answers[questionIndex]}"]`);
        if (selectedOption) {
            selectOptionVisually(selectedOption);
        }
    }
}

function updateNavigationButtons() {
    const prevButtons = document.querySelectorAll('.nav-button:first-child');
    
    prevButtons.forEach(btn => {
        btn.disabled = currentQuestion === 0;
    });
}

function selectOption(questionIndex, optionIndex) {
    answers[questionIndex] = optionIndex;
    
    const button = document.querySelector(`[data-question="${questionIndex}"][data-option="${optionIndex}"]`);
    selectOptionVisually(button);
    
    calculateScores();
    updateProgress();
    
    setTimeout(() => {
        if (questionIndex < questions.length - 1) {
            nextQuestion();
        } else {
            showResults();
        }
    }, 120);
}

function selectOptionVisually(button) {
    const questionCard = button.closest('.question-card');
    questionCard.querySelectorAll('.option-button').forEach(btn => {
        btn.classList.remove('selected');
        btn.setAttribute('aria-pressed', 'false');
    });
    
    button.classList.add('selected');
    button.setAttribute('aria-pressed', 'true');
}

function calculateScores() {
    scores = { Chrome: 0, Edge: 0, 'Firefox ESR': 0, Brave: 0, Opera: 0 };
    
    Object.entries(answers).forEach(([questionIndex, optionIndex]) => {
        const question = questions[questionIndex];
        const option = question.options[optionIndex];
        
        Object.entries(option.weights).forEach(([browser, weight]) => {
            scores[browser] += weight;
        });
    });
}

function updateProgress() {
    const answeredCount = Object.keys(answers).length;
    const totalQuestions = questions.length;
    const percentage = Math.round((answeredCount / totalQuestions) * 100);
    
    document.getElementById('progressBar').style.width = `${percentage}%`;
    document.getElementById('progressText').textContent = `${answeredCount} / ${totalQuestions} (${percentage}%)`;
}

function nextQuestion() {
    // Check if current question is answered
    if (!answers.hasOwnProperty(currentQuestion)) {
        showAlert();
        return;
    }
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    }
}

// Alert functions
function showAlert() {
    document.getElementById('alertOverlay').style.display = 'flex';
}

function closeAlert() {
    document.getElementById('alertOverlay').style.display = 'none';
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

function showResults() {
    if (Object.keys(answers).length !== questions.length) {
        alert('すべての質問に回答してください。');
        return;
    }
    
    document.getElementById('questionsContainer').style.display = 'none';
    
    calculateScores();
    
    const ranking = Object.entries(scores)
        .sort(([browserA, scoreA], [browserB, scoreB]) => {
            if (scoreA === scoreB) {
                return browserPriority.indexOf(browserA) - browserPriority.indexOf(browserB);
            }
            return scoreB - scoreA;
        });
    
    const primary = ranking[0][0];
    const backup = ranking[1][0];
    
    const userTags = [];
    Object.entries(answers).forEach(([questionIndex, optionIndex]) => {
        const question = questions[questionIndex];
        const option = question.options[optionIndex];
        userTags.push(...option.tags);
    });
    const uniqueTags = [...new Set(userTags)];
    
    displayRecommendations(primary, backup, ranking[0][1], ranking[1][1]);
    displayUserTags(uniqueTags);
    displayRanking(ranking);
    
    document.getElementById('resultsContainer').classList.add('active');
}

function displayRecommendations(primary, backup, primaryScore, backupScore) {
    const container = document.getElementById('recommendationsContainer');
    container.innerHTML = `
        <div class="recommendation-card primary">
            <div class="recommendation-label">第一候補</div>
            <h3 class="recommendation-browser">
                <img src="${browserIcons[primary]}" alt="${primary}" class="browser-icon">
                ${primary}
            </h3>
            <div class="recommendation-score">スコア: ${primaryScore}</div>
        </div>
        <div class="recommendation-card">
            <div class="recommendation-label">第二候補</div>
            <h3 class="recommendation-browser">
                <img src="${browserIcons[backup]}" alt="${backup}" class="browser-icon">
                ${backup}
            </h3>
            <div class="recommendation-score">スコア: ${backupScore}</div>
        </div>
    `;
}

function displayUserTags(tags) {
    const container = document.getElementById('userTagsList');
    container.innerHTML = tags.map(tag => `<span class="user-tag">${tag}</span>`).join('');
}

function displayRanking(ranking) {
    const container = document.getElementById('rankingList');
    container.innerHTML = ranking.map(([browser, score], index) => `
        <div class="ranking-item">
            <span class="ranking-position">${index + 1}位</span>
            <span class="ranking-browser">
                <img src="${browserIcons[browser]}" alt="${browser}" class="ranking-icon">
                ${browser}
            </span>
            <span class="ranking-score">${score}点</span>
        </div>
    `).join('');
}

function reviewAnswers() {
    document.getElementById('resultsContainer').classList.remove('active');
    document.getElementById('questionsContainer').style.display = 'block';
    currentQuestion = 0;
    showQuestion(0);
}

function resetDiagnosis() {
    if (confirm('診断をリセットしてもよろしいですか？すべての回答が削除されます。')) {
        currentQuestion = 0;
        answers = {};
        scores = { Chrome: 0, Edge: 0, 'Firefox ESR': 0, Brave: 0, Opera: 0 };
        
        document.getElementById('resultsContainer').classList.remove('active');
        document.getElementById('questionsContainer').style.display = 'block';
        
        document.querySelectorAll('.option-button').forEach(btn => {
            btn.classList.remove('selected');
            btn.setAttribute('aria-pressed', 'false');
        });
        
        updateProgress();
        showQuestion(0);
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.target.classList.contains('option-button')) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.target.click();
        }
    }
    
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        const currentButton = document.activeElement;
        if (currentButton.classList.contains('option-button')) {
            e.preventDefault();
            const buttons = Array.from(currentButton.closest('.question-card').querySelectorAll('.option-button'));
            const currentIndex = buttons.indexOf(currentButton);
            
            if (e.key === 'ArrowUp' && currentIndex > 0) {
                buttons[currentIndex - 1].focus();
            } else if (e.key === 'ArrowDown' && currentIndex < buttons.length - 1) {
                buttons[currentIndex + 1].focus();
            }
        }
    }
});