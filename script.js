// const bingoData = {
//     "장르/조리법": { // '종합 메뉴' -> '장르/조리법'으로 이름 변경 추천
//         "국물/찌개": ["김치찌개", "된장찌개", "부대찌개", "순두부찌개", "청국장", "동태탕", "감자탕", "갈비탕", "육개장", "샤브샤브", "밀푀유나베", "곱창전골"],
//         "밥/덮밥": ["제육덮밥", "돌솥비빔밥", "오므라이스", "카레라이스", "김치볶음밥", "육회비빔밥", "오징어덮밥", "짜장밥", "곤드레밥", "국밥", "솥밥", "유부초밥"],
//         "면 요리": ["라면", "칼국수", "잔치국수", "비빔국수", "냉면", "콩국수", "우동", "짜장면", "짬뽕", "파스타", "쌀국수", "마라탕", "라멘", "소바"],
//         "구이/볶음": ["삼겹살", "돼지갈비", "소곱창", "닭갈비", "쭈꾸미볶음", "오징어볶음", "제육볶음", "생선구이", "장어구이", "스테이크", "오리불고기"],
//         "분식/튀김": ["떡볶이", "순대", "튀김", "김밥", "쫄면", "돈까스", "고구마치즈돈까스", "닭강정", "핫도그", "군만두", "멘보샤", "치킨"],
//         "별미/기타": ["월남쌈", "찜닭", "아구찜", "해물찜", "족발", "보쌈", "양꼬치", "마라샹궈", "타코", "피자", "햄버거", "샌드위치"]
//     },
//     "상황별 추천": {
//         "가벼운 아침": ["토스트", "샌드위치", "시리얼", "그릭요거트", "과일샐러드", "죽", "누룽지", "베이글", "선식/쉐이크", "에그스크램블", "주먹밥"],
//         "든든한 점심": ["가정식백반", "돈까스", "짜장면", "김치찌개", "제육볶음", "순대국밥", "뼈해장국", "설렁탕", "부대찌개", "낙지볶음", "칼국수"],
//         "맛있는 저녁": ["삼겹살", "치킨", "피자", "족발", "보쌈", "곱창", "회/스시", "아구찜", "감자탕", "파스타", "스테이크", "양꼬치"],
//         "비/눈 오는 날": ["파전&막걸리", "칼국수", "수제비", "짬뽕", "우동", "김치전", "어묵탕", "부대찌개", "국밥", "라멘", "순두부찌개"],
//         "스트레스 해소": ["매운떡볶이", "마라탕", "불닭", "낙지볶음", "매운갈비찜", "닭발", "쭈꾸미볶음", "엽기떡볶이", "비빔면", "짬뽕"],
//         "다이어트": ["닭가슴살샐러드", "포케(Poke)", "샤브샤브(채소)", "월남쌈", "곤약누들", "두부유부초밥", "그릭요거트", "키토김밥", "현미밥정식", "단호박에그슬럿"]
//     },
//     "재료별 선택": {
//         "김치/채소": ["김치찜", "김치찌개", "김치전", "김치볶음밥", "두부김치", "비빔밥", "월남쌈", "샤브샤브", "샐러드", "된장찌개", "청국장"],
//         "고기(돼지/소)": ["삼겹살", "제육볶음", "돈까스", "돼지갈비", "보쌈", "족발", "스테이크", "소불고기", "차돌박이", "육회", "갈비찜", "규동"],
//         "닭고기/오리": ["치킨", "닭갈비", "찜닭", "삼계탕", "닭볶음탕", "닭강정", "치킨마요덮밥", "오리훈제", "오리주물럭", "초계국수", "닭곰탕"],
//         "해산물": ["생선구이", "회/초밥", "해물탕", "아구찜", "꽃게탕", "오징어볶음", "낙지볶음", "쭈꾸미", "해물파전", "새우튀김", "조개구이"],
//         "면/밀가루": ["라면", "칼국수", "수제비", "파스타", "피자", "햄버거", "샌드위치", "짜장면", "짬뽕", "우동", "소바", "냉면"],
//         "밥/곡류": ["백반", "비빔밥", "볶음밥", "국밥", "덮밥", "죽", "누룽지", "김밥", "주먹밥", "리조또", "오므라이스", "카레라이스"]
//     },
//     "나라별 요리": {
//         "한식": ["김치찌개", "된장찌개", "불고기", "비빔밥", "잡채", "떡볶이", "제육볶음", "갈비찜", "삼계탕", "냉면", "국밥", "파전"],
//         "중식": ["짜장면", "짬뽕", "탕수육", "마파두부", "고추잡채", "마라탕", "마라샹궈", "양꼬치", "깐풍기", "유산슬", "멘보샤", "동파육"],
//         "일식": ["초밥(스시)", "라멘", "돈까스", "우동", "오코노미야끼", "규동", "가츠동", "소바", "텐동", "나베", "타코야끼", "사시미"],
//         "양식(이태리/미국)": ["토마토파스타", "크림파스타", "스테이크", "수제버거", "피자", "리조또", "라자냐", "뇨끼", "감바스", "샐러드", "바비큐폭립"],
//         "아시안(동남아)": ["쌀국수", "팟타이", "나시고랭", "분짜", "월남쌈", "반미", "푸팟퐁커리", "똠양꿍", "카오팟", "반세오"],
//         "기타 이색요리": ["타코(멕시코)", "퀘사디아", "케밥(터키)", "커리(인도)", "탄두리치킨", "슈바인학센", "빠에야", "훠궈"]
//     }
// };

const bingoData = {
    "종합 메뉴": { // '요리 종류별'로 생각하시면 됩니다
        "국물/찌개": [
            "김치찌개", "된장찌개", "순두부찌개", "부대찌개", "청국장", 
            "동태찌개", "고추장찌개", "비지찌개", "육개장", "갈비탕", 
            "설렁탕", "삼계탕", "감자탕", "미역국", "소고기뭇국", "콩나물국"
        ],
        "밥/덮밥": [
            "제육덮밥", "오징어덮밥", "김치볶음밥", "비빔밥", "돌솥비빔밥", 
            "카레라이스", "하이라이스", "오므라이스", "새우볶음밥", "잡채밥", 
            "마파두부덮밥", "유산슬밥", "치킨마요덮밥", "참치마요", "알밥", "쌈밥"
        ],
        "면 요리": [
            "라면", "잔치국수", "비빔국수", "칼국수", "수제비", 
            "짜장면", "짬뽕", "우동", "냉면", "콩국수", 
            "파스타", "울면", "쌀국수", "볶음우동", "쫄면", "막국수"
        ],
        "고기/구이": [
            "삼겹살", "돼지갈비", "소고기구이", "곱창/대창", "닭갈비", 
            "족발", "보쌈", "오리고기", "양꼬치", "스테이크", 
            "항정살", "차돌박이", "제육볶음", "불고기", "LA갈비"
        ],
        "분식/튀김": [
            "떡볶이", "라볶이", "순대", "튀김모듬", "김밥", 
            "돈까스", "치즈돈까스", "고구마돈까스", "치킨", "닭강정", 
            "핫도그", "토스트", "이삭토스트", "만두", "쫄면", "어묵탕"
        ],
        "별미/기타": [
            "월남쌈", "샤브샤브", "찜닭", "아구찜", "해물찜", 
            "낙지볶음", "쭈꾸미볶음", "간장게장", "양념게장", "육회", 
            "피자", "햄버거", "샌드위치", "샐러드", "포케", "그릭요거트"
        ]
    },
    "상황별 메뉴": {
        "아침/브런치": [
            "토스트", "시리얼", "샌드위치", "베이글", "팬케이크", 
            "와플", "샐러드", "요거트", "죽", "누룽지", 
            "맥모닝", "에그베네딕트", "프렌치토스트", "주먹밥", "김밥"
        ],
        "점심 추천": [
            "백반", "김치찌개", "제육볶음", "돈까스", "짜장면", 
            "짬뽕", "칼국수", "국밥", "햄버거", "서브웨이", 
            "순대국", "뼈해장국", "비빔밥", "부대찌개", "초밥"
        ],
        "저녁/회식": [
            "삼겹살", "소곱창", "치킨", "족발", "보쌈", 
            "회(사시미)", "매운탕", "감자탕", "양꼬치", "아구찜", 
            "등갈비", "닭볶음탕", "돼지갈비", "낙곱새", "샤브샤브"
        ],
        "혼밥": [
            "라면", "편의점도시락", "김밥", "떡볶이", "덮밥", 
            "1인피자", "햄버거", "국밥", "우동", "샌드위치", 
            "이삭토스트", "봉구스밥버거", "샐러드", "냉동만두"
        ],
        "해장": [
            "콩나물국밥", "순대국", "뼈해장국", "선지해장국", "북엇국", 
            "짬뽕", "쌀국수", "라면", "물냉면", "피자(느끼해장)", 
            "햄버거", "초코우유", "갈비탕", "육개장", "황태국"
        ],
        "비 오는 날": [
            "해물파전", "김치전", "감자전", "모둠전", "칼국수", 
            "수제비", "잔치국수", "우동", "막걸리", "두부김치", 
            "어묵탕", "짬뽕", "김치찌개", "육개장", "삼겹살"
        ]
    },
    "나라별 메뉴": {
        "한식": [
            "김치찌개", "된장찌개", "비빔밥", "불고기", "삼겹살", 
            "제육볶음", "잡채", "떡볶이", "삼계탕", "갈비찜", 
            "국밥", "순두부찌개", "보쌈", "족발", "낙지볶음"
        ],
        "중식": [
            "짜장면", "간짜장", "쟁반짜장", "짬뽕", "백짬뽕", 
            "탕수육", "꿔바로우", "깐풍기", "칠리새우", "마파두부", 
            "양장피", "고추잡채", "마라탕", "마라샹궈", "딤섬"
        ],
        "일식": [
            "초밥(스시)", "사시미", "돈까스", "규동(소고기덮밥)", "가츠동", 
            "우동", "소바(메밀국수)", "라멘", "텐동(튀김덮밥)", "오코노미야끼", 
            "타코야끼", "나베(전골)", "야키소바", "카레", "연어덮밥"
        ],
        "양식": [
            "토마토파스타", "크림파스타", "로제파스타", "오일파스타", "스테이크", 
            "리조또", "라자냐", "뇨끼", "피자", "햄버거", 
            "수제버거", "샐러드", "바비큐폭립", "감바스", "에그인헬"
        ],
        "아시안": [
            "쌀국수", "분짜", "반미", "월남쌈", "팟타이", 
            "똠양꿍", "나시고랭", "미고랭", "푸팟퐁커리", "우육면", 
            "탄탄면", "카오팟", "반쎄오", "딤섬"
        ]
    }
};

const bingoContainer = document.getElementById('bingo-container');
const popup = document.getElementById('result-popup');
const closeButton = document.querySelector('.close-button');
const likeButton = document.getElementById('like-button');
const retryButton = document.getElementById('retry-button');
const selectedMenuEl = document.getElementById('selected-menu');
const backButton = document.getElementById('back-button');
const homeButton = document.getElementById('home-button');
const stopButton = document.getElementById('stop-button'); // STOP 버튼 추가
const currentSelectionEl = document.getElementById('current-selection');

let historyStack = [];
let rouletteInterval = null; // 룰렛 반복을 제어할 변수
let currentHighlightedItem = null; // 현재 강조된 아이템 저장

function updateNavigation() {
    if (historyStack.length > 0) {
        backButton.classList.remove('hidden');
        homeButton.classList.remove('hidden');
    } else {
        backButton.classList.add('hidden');
        homeButton.classList.add('hidden');
    }
    currentSelectionEl.textContent = historyStack.join(' > ');
}

// 룰렛 시작 함수
function startRoulette() {
    const cells = document.querySelectorAll('.bingo-cell');
    if (cells.length === 0) return;

    // 이미 돌고 있다면 정지 후 재시작 (안전장치)
    if (rouletteInterval) clearInterval(rouletteInterval);

    rouletteInterval = setInterval(() => {
        // 모든 셀의 강조 효과 제거
        cells.forEach(cell => cell.classList.remove('highlighted'));
        
        // 랜덤으로 하나 선택
        const randomIndex = Math.floor(Math.random() * cells.length);
        const targetCell = cells[randomIndex];
        
        // 강조 효과 추가 및 현재 아이템 저장
        targetCell.classList.add('highlighted');
        currentHighlightedItem = targetCell.textContent;
        
    }, 100); // 0.1초마다 변경 (속도 조절 가능)
}

// 룰렛 정지 함수 (STOP 버튼 클릭 시)
function stopRoulette() {
    if (rouletteInterval) {
        clearInterval(rouletteInterval);
        rouletteInterval = null;
        
        // 팝업 띄우기
        if (currentHighlightedItem) {
            selectedMenuEl.textContent = currentHighlightedItem;
            popup.classList.remove('hidden');
        }
        
        stopButton.classList.add('hidden'); // 멈춘 후 버튼 숨기기
    }
}

function renderBoard() {
    bingoContainer.innerHTML = '';
    
    // 페이지 이동 시 기존 룰렛이 돌고 있다면 정지
    if (rouletteInterval) {
        clearInterval(rouletteInterval);
        rouletteInterval = null;
    }
    
    stopButton.classList.add('hidden'); // 기본적으로 STOP 버튼 숨김
    updateNavigation();
    
    const depth = historyStack.length;
    let itemsToShow = [];

    if (depth === 0) {
        itemsToShow = Object.keys(bingoData);
    } else if (depth === 1) {
        itemsToShow = Object.keys(bingoData[historyStack[0]]);
    } else if (depth === 2) {
        itemsToShow = bingoData[historyStack[0]][historyStack[1]];
    }

    itemsToShow.forEach(item => {
        const cell = document.createElement('div');
        cell.classList.add('bingo-cell');
        cell.textContent = item;
        
        if (depth < 2) {
            // 1, 2단계 (카테고리 선택)
            cell.classList.add(depth === 0 ? 'main-category' : 'sub-category');
            cell.addEventListener('click', () => {
                historyStack.push(item);
                renderBoard();
            });
        } else {
            // 3단계 (메뉴 선택 단계) - 클릭 이벤트 제거 (STOP 버튼으로만 선택)
            // 대신 시각적으로 메뉴임을 표시하는 스타일은 유지될 수 있음
        }
        
        bingoContainer.appendChild(cell);
    });

    // 3단계일 때 룰렛 자동 시작 및 STOP 버튼 표시
    if (depth === 2) {
        stopButton.classList.remove('hidden');
        startRoulette();
    }
}

// 이벤트 리스너들
backButton.addEventListener('click', () => {
    if (historyStack.length > 0) {
        historyStack.pop();
        renderBoard();
    }
});

homeButton.addEventListener('click', () => {
    historyStack = [];
    renderBoard();
});

stopButton.addEventListener('click', () => {
    stopRoulette();
});

closeButton.addEventListener('click', () => {
    popup.classList.add("hidden");
    removeConfetti();
});

likeButton.addEventListener('click', () => {
    popup.classList.add("hidden");
    removeConfetti();
});

retryButton.addEventListener('click', () => {
    popup.classList.add("hidden");
    removeConfetti();
    stopButton.classList.remove("hidden");
    startRoulette();
});

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.add('hidden');
    }
});

// Initial render
renderBoard();

function removeConfetti() {
    const confettis = document.querySelectorAll('.confetti');
    confettis.forEach(c => c.remove());
}

// --- 폭죽 효과를 위한 스크립트 ---
function showConfetti() {
    const confettiContainer = document.body;
    const confettiCount = 150; // 폭죽 개수
    const colors = ['#f5b041', '#e74c3c', '#81c784', '#64b5f6', '#ffeb3b']; // CSS와 통일감 있는 색상

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        const x = Math.random() * 100; // 가로 위치
        const y = Math.random() * 100; // 세로 위치 (시작점)
        
        confetti.style.left = x + 'vw';
        confetti.style.top = y - 10 + 'vh'; // 화면 위에서 시작하는 느낌
        
        const size = Math.random() * 10 + 5; // 5px ~ 15px 크기
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // 애니메이션 딜레이와 지속시간을 랜덤하게 부여
        const duration = Math.random() * 3 + 2; // 2~5초
        const delay = Math.random() * 0.5;
        
        confetti.style.animation = `fall ${duration}s ease-out ${delay}s forwards`;

        confettiContainer.appendChild(confetti);

        // 애니메이션 종료 후 DOM에서 제거
        setTimeout(() => {
            confetti.remove();
        }, (duration + delay) * 1000);
    }
}