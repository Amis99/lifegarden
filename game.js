const RESOURCE_KEYS = ["money", "happiness", "health", "growth", "reputation"];
const RESOURCE_LABELS = {
  money: "돈",
  happiness: "행복",
  health: "건강",
  growth: "성장",
  reputation: "평판"
};
const STAT_KEYS = RESOURCE_KEYS.filter((key) => key !== "money");
const IMAGE_ROOT = "image/processed";
const PROJECT_HEARTS = {
  filled: `${IMAGE_ROOT}/heart_full.png`,
  empty: `${IMAGE_ROOT}/heart_empty.png`
};
const TILE_IMAGES = {
  start: `${IMAGE_ROOT}/tile_start.png`,
  finish: `${IMAGE_ROOT}/tile_finish.png`,
  daily: `${IMAGE_ROOT}/tile_daily.png`,
  choice: `${IMAGE_ROOT}/tile_choice.png`,
  opportunity: `${IMAGE_ROOT}/tile_opportunity.png`,
  crisis: `${IMAGE_ROOT}/tile_crisis.png`,
  relationship: `${IMAGE_ROOT}/tile_relationship.png`,
  festival: `${IMAGE_ROOT}/tile_festival.png`,
  fate: `${IMAGE_ROOT}/tile_fate.png`,
  back: `${IMAGE_ROOT}/tile_back.png`,
  rest: `${IMAGE_ROOT}/tile_rest.png`,
  marriage: `${IMAGE_ROOT}/tile_marriage.png`,
  job: `${IMAGE_ROOT}/tile_job.jpg`
};
const ACTION_CARD_IMAGES = {
  front: `${IMAGE_ROOT}/card_action_front.png`,
  back: `${IMAGE_ROOT}/card_action_back.png`
};
const ACTION_CARD_RATIO = 2400 / 1792;
const SAVE_KEY = "lifegarden-save-v1";
const ASSET_ICON_PATHS = {
  snack: `${IMAGE_ROOT}/asset_snack.png`,
  studio: `${IMAGE_ROOT}/asset_studio.png`,
  market: `${IMAGE_ROOT}/asset_market.png`,
  cafe: `${IMAGE_ROOT}/asset_cafe.png`,
  solar: `${IMAGE_ROOT}/asset_solar.png`,
  apt: `${IMAGE_ROOT}/asset_apt.png`,
  office: `${IMAGE_ROOT}/asset_office.png`,
  tech: `${IMAGE_ROOT}/icon_money.png`,
  mall: `${IMAGE_ROOT}/asset_mall.png`,
  resort: `${IMAGE_ROOT}/asset_resort.png`,
  tower: `${IMAGE_ROOT}/asset_tower.png`
};
const CHARACTER_PORTRAITS = {
  planner: `${IMAGE_ROOT}/char_teacher.png`,
  connector: `${IMAGE_ROOT}/char_relationer.png`,
  challenger: `${IMAGE_ROOT}/char_athlete.png`,
  saver: `${IMAGE_ROOT}/char_craftsman.png`,
  healer: `${IMAGE_ROOT}/char_elder.png`,
  adventurer: `${IMAGE_ROOT}/char_adventurer.png`,
  socialite: `${IMAGE_ROOT}/char_gentleman.png`,
  balancer: `${IMAGE_ROOT}/char_balancer.png`
};
const TOKEN_IMAGES = [
  `${IMAGE_ROOT}/token_1.png`,
  `${IMAGE_ROOT}/token_2.png`,
  `${IMAGE_ROOT}/token_3.png`,
  `${IMAGE_ROOT}/token_4.png`
];

const SCORE_MAX = 120000;
const MONEY_MAX = 200000;
const SCORE_SCALE = 1000;
const MONEY_SCALE = 100;
const START_SCORE = 20000;
const START_MONEY = 20000;
const BALANCER_BONUS = 200;
const SOCIALITE_BONUS = 1000;
const CHALLENGER_TRADE_BONUS = 1000;
const ADVENTURER_TRADE_BONUS = 1000;
const MONEY_RANDOM_STEP = 50;
const STAT_RANDOM_STEP = 100;
const STAT_RANDOM_MAX = 2000;
const STAT_RANDOM_MIN = -2000;
const MONEY_CAP_MAX = 12000;
const MONEY_CAP_MIN = -15000;
const STAT_LEVELS = [
  { level: 1, max: 30000 },
  { level: 2, max: 50000 },
  { level: 3, max: 100000 },
  { level: 4, max: Infinity }
];
const ENDING_PROFIT_THRESHOLD = 5;

const RESOURCE_RULES = {
  money: { min: 0, max: MONEY_MAX, scale: MONEY_SCALE },
  happiness: { min: 0, max: SCORE_MAX, scale: SCORE_SCALE },
  health: { min: 0, max: SCORE_MAX, scale: SCORE_SCALE },
  growth: { min: 0, max: SCORE_MAX, scale: SCORE_SCALE },
  reputation: { min: 0, max: SCORE_MAX, scale: SCORE_SCALE }
};

const EFFECT_META = {
  money: { label: RESOURCE_LABELS.money, className: "money" },
  happiness: { label: RESOURCE_LABELS.happiness, className: "happiness" },
  health: { label: RESOURCE_LABELS.health, className: "health" },
  growth: { label: RESOURCE_LABELS.growth, className: "growth" },
  reputation: { label: RESOURCE_LABELS.reputation, className: "reputation" },
  project: { label: "프로젝트", className: "project" },
  dice: { label: "룰렛 보정", className: "dice" }
};

const ROLL_ANIMATION_MS = 1300;
const ROLL_RESULT_MS = 1100;
const MOVE_STEP_MS = 220;
const MOVE_ZOOM_DELAY_MS = 320;
const MOVE_HOLD_MS = 3000;
const RESULT_MODAL_MS = 3200;
const COUNT_ANIMATION_MS = 1100;
const BOARD_ZOOM_SCALE = 2;
const FORCED_SALE_RATE = 0.8;
const TAX_RATE = 0.1;
const TAX_POSITIONS = [20, 40, 60, 80];
const CPU_DELAYS = {
  roll: 650,
  choice: 650,
  continue: 850,
  action: 700,
  trade: 650
};
const CPU_TRADE_MAX = 2;
const CPU_TRADE_CHEAP = 0.96;
const CPU_TRADE_EXPENSIVE = 1.04;
const CPU_TRADE_LOW_CASH = 3500;
const CPU_PORTFOLIO_PREFS = {
  planner: { min: 0.25, max: 0.45 },
  connector: { min: 0.25, max: 0.45 },
  challenger: { min: 0.35, max: 0.55 },
  saver: { min: 0.15, max: 0.3 },
  healer: { min: 0.2, max: 0.4 },
  adventurer: { min: 0.4, max: 0.6 },
  socialite: { min: 0.3, max: 0.5 },
  balancer: { min: 0.3, max: 0.5 },
  default: { min: 0.3, max: 0.5 }
};

const OUTCOME_TIERS = [
  { id: "great", label: "대성공", multiplier: 1.25, weight: 0.18 },
  { id: "good", label: "좋음", multiplier: 1.1, weight: 0.32 },
  { id: "normal", label: "무난", multiplier: 1.0, weight: 0.32 },
  { id: "rough", label: "아쉬움", multiplier: 0.85, weight: 0.18 }
];
const DEFAULT_TIER = OUTCOME_TIERS[2];
const SWING_TIERS = [
  { id: "tiny", weight: 1.1, min: 0.2, max: 0.6 },
  { id: "small", weight: 1.5, min: 0.6, max: 1.4 },
  { id: "medium", weight: 1.0, min: 1.4, max: 3.5 },
  { id: "big", weight: 0.6, min: 3.5, max: 9 },
  { id: "huge", weight: 0.3, min: 9, max: 50 }
];
const STAT_SWING_TIERS = [
  { id: "tiny", weight: 1.3, min: 0.2, max: 0.5 },
  { id: "small", weight: 1.8, min: 0.5, max: 0.9 },
  { id: "medium", weight: 1.0, min: 0.9, max: 1.2 },
  { id: "big", weight: 0.45, min: 1.2, max: 1.6 },
  { id: "huge", weight: 0.18, min: 1.6, max: 2.2 }
];
const MONEY_SWING_BOOST = 1.4;

const CATEGORY_LABELS = {
  work: "일",
  study: "공부",
  money: "돈",
  health: "건강",
  family: "가족",
  friend: "친구",
  romance: "연애",
  hobby: "취미",
  community: "사회",
  mistake: "실수",
  luck: "운",
  growth: "성장"
};

const TRADE_CATEGORIES = [
  { id: "all", label: "전체" },
  { id: "bond", label: "채권" },
  { id: "stock", label: "주식" },
  { id: "estate", label: "부동산" }
];

const SOCIAL_EVENT_CATEGORIES = new Set(["family", "friend", "community", "romance", "relationship"]);
const SOCIAL_ACTION_IDS = new Set(["networking", "volunteer", "friends", "family", "help"]);

const PLAYER_COLORS = ["#e58b79", "#70b08b", "#f0c26e", "#6ea6d6"];
const TOKEN_STYLES = ["style-0", "style-1", "style-2", "style-3"];

const SPACE_LABELS = {
  daily: "일상",
  choice: "선택",
  opportunity: "기회",
  crisis: "위기",
  relationship: "관계",
  festival: "축제",
  fate: "운명",
  back: "되돌림",
  rest: "휴식",
  marriage: "결혼",
  job: "직업"
};

const BOARD_ROWS = 10;
const BOARD_COLS = 20;
const BOARD_PATTERN = [
  "daily",
  "choice",
  "opportunity",
  "daily",
  "crisis",
  "relationship",
  "daily",
  "festival",
  "daily",
  "fate",
  "daily",
  "opportunity",
  "daily",
  "relationship",
  "choice",
  "daily",
  "crisis",
  "daily",
  "festival",
  "daily"
];

const SPECIAL_SPACES = buildSpecialSpaces(BOARD_ROWS * BOARD_COLS);
const MARRIAGE_INDEX = SPECIAL_SPACES.marriageIndex;
const JOB_INDEX = SPECIAL_SPACES.jobIndex;
const BACK_SPACES = SPECIAL_SPACES.backSpaces;
const REST_SPACES = SPECIAL_SPACES.restSpaces;

const BOARD_TYPES = buildBoardTypes(BOARD_ROWS * BOARD_COLS, SPECIAL_SPACES);

const BOARD_PATH = createBoardPath(BOARD_ROWS, BOARD_COLS);

const ACTIONS = [
  { id: "rest", label: "휴식", effects: { health: 2, happiness: 1 } },
  { id: "study", label: "공부", effects: { growth: 2, happiness: -1 } },
  { id: "parttime", label: "알바", effects: { money: 2, health: -1 } },
  { id: "exercise", label: "운동", effects: { health: 2, happiness: 1, money: -1 } },
  { id: "saving", label: "저축", effects: { money: 2, happiness: -1 } },
  { id: "networking", label: "네트워킹", effects: { reputation: 2, growth: 1, money: -1 } },
  { id: "volunteer", label: "봉사", effects: { reputation: 1, happiness: 1, health: -1 } },
  { id: "healthy-meal", label: "건강식", effects: { health: 1, happiness: 1, money: -1 } },
  { id: "organize", label: "정리정돈", effects: { growth: 1, happiness: 1 } },
  { id: "trade", label: "투자/매매", special: "trade" },
  { id: "friends", label: "친구 만나기", effects: { happiness: 2, reputation: 1, money: -1 } },
  { id: "family", label: "가족 돕기", effects: { happiness: 1, reputation: 2, money: -1 } },
  { id: "hobby", label: "취미", effects: { happiness: 1, growth: 1 } },
  { id: "project", label: "도시 프로젝트", effects: { reputation: 1, money: -1 }, special: "project" },
  {
    id: "help",
    label: "도움 주기",
    effects: { reputation: 1 },
    targetEffects: { happiness: 1 },
    special: "help"
  }
];

const ACTION_STORIES = {
  rest: "잠시 숨을 고르며 몸과 마음이 가라앉았다.",
  study: "집중이 이어지며 머릿속이 정돈되었다.",
  parttime: "현장에서 배움과 체감이 동시에 쌓였다.",
  exercise: "몸을 움직이며 기분도 함께 달아올랐다.",
  saving: "지출을 가다듬으며 마음이 단단해졌다.",
  networking: "사람들과 연결되며 흐름이 열렸다.",
  volunteer: "작은 손길이 분위기를 밝게 만들었다.",
  "healthy-meal": "몸을 챙기며 하루가 안정되었다.",
  organize: "정리를 마치니 마음도 한결 가벼워졌다.",
  trade: "시장 분위기를 읽고 차분히 움직였다.",
  friends: "친구들과 웃음이 이어지며 에너지가 올랐다.",
  family: "가족을 챙기며 마음이 따뜻해졌다.",
  hobby: "취미에 몰입하며 리듬을 되찾았다.",
  project: "도시 프로젝트에 참여하며 흐름이 커졌다.",
  help: "손을 내밀며 관계가 조금 더 부드러워졌다."
};

const ACTION_RESULT_STORIES = {
  rest: {
    great: "깊게 쉬며 몸과 마음이 확실히 회복됐다.",
    good: "충분히 쉬어 기운이 도톰해졌다.",
    normal: "잠깐 숨을 고르며 안정감을 되찾았다.",
    rough: "쉬긴 했지만 피로가 완전히 풀리진 않았다."
  },
  study: {
    great: "집중이 터지며 이해가 크게 넓어졌다.",
    good: "공부가 잘 맞아 떨어지며 실력이 올랐다.",
    normal: "기본기를 다지며 흐름을 이어갔다.",
    rough: "생각만큼 진도가 나가지 않아 아쉬움이 남았다."
  },
  parttime: {
    great: "현장에서 성과를 내며 지갑이 든든해졌다.",
    good: "일이 착착 풀려 보람과 수입을 챙겼다.",
    normal: "무난히 마무리하며 경험을 쌓았다.",
    rough: "예상보다 힘들어 수익이 기대보다 적었다."
  },
  exercise: {
    great: "강도 높은 운동으로 몸과 기분이 크게 살아났다.",
    good: "땀을 흘리며 컨디션이 한층 좋아졌다.",
    normal: "가볍게 몸을 풀며 리듬을 잡았다.",
    rough: "몸이 무거워 운동 효과가 기대만큼 나지 않았다."
  },
  saving: {
    great: "지출을 확 줄이며 재정이 크게 안정됐다.",
    good: "허리띠를 졸라 여유가 생겼다.",
    normal: "지출을 조정하며 버틸 힘을 쌓았다.",
    rough: "아껴보려 했지만 스트레스가 조금 쌓였다."
  },
  networking: {
    great: "핵심 인맥이 연결되어 기회가 확 열렸다.",
    good: "좋은 대화를 나누며 관계가 넓어졌다.",
    normal: "안부를 나누며 연결을 유지했다.",
    rough: "대화가 어색해 큰 성과는 없었다."
  },
  volunteer: {
    great: "봉사 현장에서 신뢰를 얻어 기분까지 환해졌다.",
    good: "도움을 주며 의미 있는 하루를 보냈다.",
    normal: "작은 도움으로 마음이 부드러워졌다.",
    rough: "체력이 빠져 생각보다 여유가 적었다."
  },
  "healthy-meal": {
    great: "영양을 꽉 채워 몸이 확실히 가벼워졌다.",
    good: "정성 들인 식사로 컨디션이 좋아졌다.",
    normal: "무난한 식사로 속이 편안해졌다.",
    rough: "입맛이 안 맞아 만족감이 낮았다."
  },
  organize: {
    great: "정리가 끝나며 머릿속까지 정돈됐다.",
    good: "공간이 깔끔해져 집중이 쉬워졌다.",
    normal: "기본 정리로 기분이 한결 나아졌다.",
    rough: "정리에 시간이 걸려 피곤함이 남았다."
  },
  trade: {
    great: "시세를 잘 읽어 흐름을 크게 잡았다.",
    good: "거래가 안정적으로 이어졌다.",
    normal: "무난하게 시장을 확인했다.",
    rough: "시장 변동이 커서 망설임이 늘었다."
  },
  friends: {
    great: "웃음이 넘쳐 에너지가 크게 올라갔다.",
    good: "즐거운 시간 덕에 스트레스가 풀렸다.",
    normal: "가볍게 만나며 기분이 나아졌다.",
    rough: "시간이 어긋나 기대만큼 즐기진 못했다."
  },
  family: {
    great: "가족의 고마움이 전해져 마음이 크게 따뜻해졌다.",
    good: "도움을 주고받으며 분위기가 좋아졌다.",
    normal: "소소한 도움으로 미소가 이어졌다.",
    rough: "예상보다 손이 많이 가 조금 지쳤다."
  },
  hobby: {
    great: "몰입이 깊어져 성취감이 크게 올랐다.",
    good: "취미에 빠져 기분이 맑아졌다.",
    normal: "가볍게 즐기며 리듬을 회복했다.",
    rough: "시간이 부족해 충분히 즐기지 못했다."
  },
  project: {
    great: "프로젝트가 속도를 내며 존재감이 커졌다.",
    good: "협력이 순조로워 도시 분위기가 좋아졌다.",
    normal: "기본 역할을 다하며 흐름을 유지했다.",
    rough: "생각보다 일이 더뎌 아쉬움이 남았다."
  },
  help: {
    great: "도움을 크게 주며 신뢰가 단단해졌다.",
    good: "손을 내밀어 관계가 한층 가까워졌다.",
    normal: "작은 도움으로 마음이 훈훈해졌다.",
    rough: "도움은 됐지만 여유가 조금 줄었다."
  }
};

const SPOUSE_TRAITS = {
  appearance: {
    label: "외모",
    timed: { turns: 5, every: 1, effects: { happiness: 1 } },
    penalty: { money: -3 },
    penaltyLabel: "지출 증가"
  },
  care: {
    label: "간호",
    perTurn: { health: 1 },
    penalty: { growth: -0.3 },
    penaltyLabel: "자기계발 감소"
  },
  kindness: {
    label: "다정함",
    perTurn: { happiness: 1 },
    penalty: { money: -2 },
    penaltyLabel: "지출 증가"
  },
  planning: {
    label: "계획적",
    perTurn: { growth: 1 },
    penalty: { happiness: -0.3 },
    penaltyLabel: "즉흥성 감소"
  },
  diligence: {
    label: "성실함",
    perTurn: { money: 3 },
    penalty: { health: -0.3 },
    penaltyLabel: "피로 누적"
  },
  talent: {
    label: "능력",
    perTurn: { reputation: 1, growth: 0.5 },
    penalty: { happiness: -0.3 },
    penaltyLabel: "부담 증가"
  },
  humor: {
    label: "유머",
    perTurn: { happiness: 1, reputation: 0.5 },
    penalty: { growth: -0.3 },
    penaltyLabel: "집중 저하"
  }
};

const SPOUSE_PAGE_SIZE = 6;

const SPOUSES = [
  {
    id: "spouse_f1",
    name: "하윤",
    gender: "female",
    origin: "한국",
    traits: ["kindness", "planning"],
    description: "다정하고 계획적인 동반자"
  },
  {
    id: "spouse_f2",
    name: "서연",
    gender: "female",
    origin: "일본",
    traits: ["care", "diligence"],
    description: "돌봄과 성실함이 조화로운 동반자"
  },
  {
    id: "spouse_f3",
    name: "지우",
    gender: "female",
    origin: "스페인",
    traits: ["appearance", "humor"],
    description: "밝은 매력과 유머를 가진 동반자"
  },
  {
    id: "spouse_f4",
    name: "수빈",
    gender: "female",
    origin: "러시아",
    traits: ["talent", "planning"],
    description: "능력과 계획성이 두드러지는 동반자"
  },
  {
    id: "spouse_f5",
    name: "예은",
    gender: "female",
    origin: "이집트",
    traits: ["kindness", "care"],
    description: "따뜻한 돌봄이 강점인 동반자"
  },
  {
    id: "spouse_f6",
    name: "민지",
    gender: "female",
    origin: "인도",
    traits: ["humor", "diligence"],
    description: "유머와 성실함으로 힘이 되는 동반자"
  },
  {
    id: "spouse_f7",
    name: "지민",
    gender: "female",
    origin: "폴란드",
    traits: ["appearance", "talent"],
    description: "빛나는 매력과 능력을 갖춘 동반자"
  },
  {
    id: "spouse_m1",
    name: "민준",
    gender: "male",
    origin: "한국",
    traits: ["diligence", "planning"],
    description: "성실함과 계획성이 돋보이는 동반자"
  },
  {
    id: "spouse_m2",
    name: "서준",
    gender: "male",
    origin: "일본",
    traits: ["humor", "care"],
    description: "유머와 돌봄이 자연스러운 동반자"
  },
  {
    id: "spouse_m3",
    name: "도윤",
    gender: "male",
    origin: "이탈리아",
    traits: ["appearance", "planning"],
    description: "매력과 계획성이 균형 잡힌 동반자"
  },
  {
    id: "spouse_m4",
    name: "지후",
    gender: "male",
    origin: "스페인",
    traits: ["talent", "humor"],
    description: "능력과 유머가 조화를 이루는 동반자"
  },
  {
    id: "spouse_m5",
    name: "하준",
    gender: "male",
    origin: "미국",
    traits: ["kindness", "diligence"],
    description: "다정함과 성실함이 든든한 동반자"
  },
  {
    id: "spouse_m6",
    name: "준우",
    gender: "male",
    origin: "모로코",
    traits: ["care", "planning"],
    description: "돌봄과 계획성으로 지지하는 동반자"
  },
  {
    id: "spouse_m7",
    name: "현우",
    gender: "male",
    origin: "캐나다",
    traits: ["appearance", "talent"],
    description: "매력과 능력이 두드러지는 동반자"
  }
];

const JOB_PAGE_SIZE = 8;

const JOBS = [
  { id: "job_01", name: "동네 도서관 사서", salary: 150, effects: { happiness: 0.2, reputation: 0.2 } },
  { id: "job_02", name: "어린이 미술교실 보조", salary: 160, effects: { happiness: 0.3, growth: 0.1 } },
  { id: "job_03", name: "카페 바리스타", salary: 170, effects: { happiness: 0.2, health: -0.1 } },
  { id: "job_04", name: "꽃집 플로리스트", salary: 180, effects: { happiness: 0.3, reputation: 0.1 } },
  { id: "job_05", name: "지역 라디오 DJ", salary: 190, effects: { happiness: 0.2, reputation: 0.2 } },
  { id: "job_06", name: "편집숍 점원", salary: 200, effects: { growth: 0.2, happiness: 0.1 } },
  { id: "job_07", name: "보호소 돌봄 매니저", salary: 210, effects: { reputation: 0.2, happiness: 0.1, health: -0.1 } },
  { id: "job_08", name: "커뮤니티 요가 강사", salary: 220, effects: { health: 0.2, happiness: 0.1 } },
  { id: "job_09", name: "도시 투어 가이드", salary: 230, effects: { reputation: 0.2, health: -0.1 } },
  { id: "job_10", name: "프리랜서 디자이너", salary: 240, effects: { growth: 0.2, happiness: -0.1 } },
  { id: "job_11", name: "동네 베이커리 매니저", salary: 250, effects: { happiness: 0.1, health: -0.1 } },
  { id: "job_12", name: "스포츠 코치", salary: 250, effects: { health: 0.2, happiness: 0.1 } },
  { id: "job_13", name: "교육 콘텐츠 제작자", salary: 260, effects: { growth: 0.3, happiness: -0.1 } },
  { id: "job_14", name: "환경 컨설턴트", salary: 260, effects: { reputation: 0.2, growth: 0.1 } },
  { id: "job_15", name: "코딩 학원 조교", salary: 270, effects: { growth: 0.3, health: -0.1 } },
  { id: "job_16", name: "사진 스튜디오 운영", salary: 280, effects: { growth: 0.2, reputation: 0.1 } },
  { id: "job_17", name: "온라인 쇼핑몰 운영", salary: 290, effects: { growth: 0.1, happiness: -0.1 } },
  { id: "job_18", name: "반려동물 훈련사", salary: 300, effects: { happiness: 0.2, health: -0.1 } },
  { id: "job_19", name: "사회복지사", salary: 310, effects: { reputation: 0.3, happiness: 0.1, health: -0.2 } },
  { id: "job_20", name: "문화센터 강사", salary: 320, effects: { growth: 0.2, reputation: 0.1 } },
  { id: "job_21", name: "콘텐츠 크리에이터", salary: 320, effects: { growth: 0.2, reputation: 0.2, happiness: -0.1 } },
  { id: "job_22", name: "연구소 연구원", salary: 330, effects: { growth: 0.3, happiness: -0.1 } },
  { id: "job_23", name: "중소기업 대리", salary: 340, effects: { growth: 0.2, health: -0.2 } },
  { id: "job_24", name: "회계 담당자", salary: 350, effects: { growth: 0.2, happiness: -0.2 } },
  { id: "job_25", name: "마케팅 매니저", salary: 360, effects: { reputation: 0.3, happiness: -0.2 } },
  { id: "job_26", name: "스타트업 PM", salary: 370, effects: { growth: 0.3, health: -0.2 } },
  { id: "job_27", name: "병원 행정", salary: 380, effects: { reputation: 0.2, health: -0.2 } },
  { id: "job_28", name: "방송 작가", salary: 390, effects: { growth: 0.3, happiness: -0.2 } },
  { id: "job_29", name: "데이터 분석가", salary: 400, effects: { growth: 0.3, health: -0.2 } },
  { id: "job_30", name: "게임 기획자", salary: 410, effects: { growth: 0.3, happiness: -0.2 } },
  { id: "job_31", name: "도시 계획가", salary: 410, effects: { growth: 0.2, reputation: 0.2, happiness: -0.2 } },
  { id: "job_32", name: "금융 컨설턴트", salary: 420, effects: { reputation: 0.2, health: -0.3 } },
  { id: "job_33", name: "부동산 중개인", salary: 430, effects: { reputation: 0.3, happiness: -0.3 } },
  { id: "job_34", name: "IT 아키텍트", salary: 440, effects: { growth: 0.2, health: -0.3, happiness: -0.2 } },
  { id: "job_35", name: "투자 심사역", salary: 450, effects: { reputation: 0.2, health: -0.3, happiness: -0.2 } },
  { id: "job_36", name: "법무팀 변호사", salary: 460, effects: { reputation: 0.2, health: -0.3, happiness: -0.3 } },
  { id: "job_37", name: "의사", salary: 470, effects: { reputation: 0.3, health: -0.4, happiness: -0.2 } },
  { id: "job_38", name: "호텔 지배인", salary: 480, effects: { reputation: 0.2, happiness: -0.3, health: -0.3 } },
  { id: "job_39", name: "해외 영업 총괄", salary: 490, effects: { reputation: 0.2, happiness: -0.4, health: -0.3 } },
  { id: "job_40", name: "벤처 대표", salary: 500, effects: { growth: 0.4, happiness: -0.4, health: -0.4 } }
];

const JOB_REQUIREMENT_LEVEL = 2;
const JOB_REQUIREMENTS = {
  growth: new Set(["job_22", "job_29", "job_30", "job_31", "job_34", "job_36", "job_37"]),
  reputation: new Set(["job_16", "job_17", "job_25", "job_26", "job_32", "job_33", "job_35", "job_38", "job_39", "job_40"]),
  health: new Set(["job_08", "job_09", "job_12", "job_18"])
};

JOBS.forEach((job) => {
  if (JOB_REQUIREMENTS.growth.has(job.id)) {
    job.requirement = { key: "growth", minLevel: JOB_REQUIREMENT_LEVEL, label: RESOURCE_LABELS.growth };
  } else if (JOB_REQUIREMENTS.reputation.has(job.id)) {
    job.requirement = { key: "reputation", minLevel: JOB_REQUIREMENT_LEVEL, label: RESOURCE_LABELS.reputation };
  } else if (JOB_REQUIREMENTS.health.has(job.id)) {
    job.requirement = { key: "health", minLevel: JOB_REQUIREMENT_LEVEL, label: RESOURCE_LABELS.health };
  }
});

const DEFAULT_ENDING = {
  title: "닮은 인생 : 어린 왕자",
  story:
    "지난 날의 선택들은 어린 왕자가 별을 떠돌며 배운 마음처럼 순수했으며, 노년의 그는 화려함보다 작은 약속을 지킨 시간이 가장 빛났다고 말했다. 그는 그 별들을 떠올리며 삶을 조용히 정리했다."
};

const ENDING_STORIES = [
  {
    id: "ending-01",
    title: "닮은 인생 : 해리 포터",
    when: { finishRank: 1 },
    story:
      "지난 날의 선택은 해리 포터가 호그와트를 지키듯 용기와 책임으로 이어졌고, 노년의 그는 승리의 환호보다 친구들과 지킨 약속을 더 오래 간직했다. 그는 오래된 안경을 매만지며 그 시절의 빛을 조용히 떠올렸다."
  },
  {
    id: "ending-02",
    title: "닮은 인생 : 제이 개츠비",
    when: { finishRank: 1, minMoney: 80000 },
    story:
      "지난 날의 선택은 제이 개츠비처럼 큰 꿈을 향해 달렸고, 노년의 그는 화려한 불빛 뒤에 남은 공허함까지도 삶의 일부로 받아들였다. 그는 파티가 끝난 밤처럼 고요한 시간 속에서 진짜 소중함이 무엇이었는지 곱씹었다."
  },
  {
    id: "ending-03",
    title: "닮은 인생 : 스카렛 오하라",
    when: { finishRank: 1, minAssetValue: 70000 },
    story:
      "지난 날의 발걸음은 스카렛 오하라처럼 집과 터전을 지키려는 의지로 버텼고, 노년의 그녀는 그 땅을 지킨 끈기가 자신의 뿌리가 되었음을 느꼈다. 그녀는 오래된 창문을 열며 바람 속에서 그 시절의 결심을 다시 들었다."
  },
  {
    id: "ending-04",
    title: "닮은 인생 : 제인 에어",
    when: { finishRank: 1, minGrowth: 80000 },
    story:
      "지난 날의 선택은 제인 에어처럼 자존을 잃지 않는 길이었고, 노년의 그녀는 조용하지만 단단한 삶이 결국 자신을 지켜줬음을 깨달았다. 그녀는 작은 불빛 아래에서 스스로의 목소리를 다시 한 번 들었다."
  },
  {
    id: "ending-05",
    title: "닮은 인생 : 장 발장",
    when: { finishRank: 1, hadBankruptcy: true },
    story:
      "지난 날의 여정은 장 발장의 구원처럼 죄책과 연민 사이를 오갔고, 노년의 그는 자신을 일으킨 것은 돈보다 사람의 손이었다고 말했다. 그는 오래된 촛대를 바라보며 그날의 약속을 다시 되새겼다."
  },
  {
    id: "ending-06",
    title: "닮은 인생 : 돈키호테",
    when: { finishRank: 2 },
    story:
      "지난 날의 선택은 돈키호테처럼 무모해 보이기도 했지만, 노년의 그는 그 이상이 없었다면 삶이 너무 건조했을 거라 말했다. 그는 낡은 창을 바라보며 자신이 꿈꾼 풍경들을 조용히 떠올렸다."
  },
  {
    id: "ending-07",
    title: "닮은 인생 : 셜록 홈즈",
    when: { finishRank: 2, minReputation: 75000 },
    story:
      "지난 날의 선택은 셜록 홈즈처럼 냉정한 관찰로 길을 찾았고, 노년의 그는 그 이성이 결국 사람을 더 깊이 이해하게 했다고 말했다. 그는 조용히 찻잔을 들며 그때의 추론과 망설임을 떠올렸다."
  },
  {
    id: "ending-08",
    title: "닮은 인생 : 앤 셜리",
    when: { finishRank: 2, minHappiness: 75000 },
    story:
      "지난 날의 삶은 앤 셜리처럼 상상과 낙관으로 채워졌고, 노년의 그녀는 그 밝은 시선이 어려운 날들을 건너게 했음을 인정했다. 그녀는 붉은 머리칼을 쓸어 넘기듯 추억을 다정히 정리했다."
  },
  {
    id: "ending-09",
    title: "닮은 인생 : 산티아고",
    when: { finishRank: 2, minHealth: 75000 },
    story:
      "지난 날의 선택은 산티아고처럼 고요한 집념을 품었고, 노년의 그는 끝까지 놓지 않았던 끈기가 자신의 이야기를 만들었다고 말했다. 그는 바다를 바라보며 패배보다 의지를 기억했다."
  },
  {
    id: "ending-10",
    title: "닮은 인생 : 허클베리 핀",
    when: { finishRank: 3 },
    story:
      "지난 날의 길은 허클베리 핀처럼 자유를 찾아 흘렀고, 노년의 그는 그 방황이 결국 자신을 성장시킨 강물이었다고 말했다. 그는 조용한 밤에 강물 소리를 상상하며 미소 지었다."
  },
  {
    id: "ending-11",
    title: "닮은 인생 : 로빈슨 크루소",
    when: { finishRank: 3, minAssetValue: 50000 },
    story:
      "지난 날의 선택은 로빈슨 크루소처럼 고립 속에서 버티는 시간이었고, 노년의 그는 혼자 만든 일상이 자신을 단단하게 했다고 말했다. 그는 소박한 도구를 바라보며 그때의 생존을 떠올렸다."
  },
  {
    id: "ending-12",
    title: "닮은 인생 : 성춘향",
    when: { finishRank: 3, hasSpouse: true },
    story:
      "지난 날의 사랑은 성춘향처럼 약속을 끝까지 지킨 이야기였고, 노년의 그녀는 그 기다림이 인생의 중심이었음을 고백했다. 그녀는 오래된 비녀를 만지며 그 약속을 조용히 되새겼다."
  },
  {
    id: "ending-13",
    title: "닮은 인생 : 에드몽 당테스",
    when: { finishRank: 3, hadBankruptcy: true },
    story:
      "지난 날의 추락과 복귀는 에드몽 당테스처럼 긴 기다림과 계획으로 이어졌고, 노년의 그는 복수보다 결국 용서가 더 무거웠다고 말했다. 그는 바닷가의 냄새를 떠올리며 마음을 내려놓았다."
  },
  {
    id: "ending-14",
    title: "닮은 인생 : 피터 팬",
    when: { finishRank: 4 },
    story:
      "지난 날의 선택은 피터 팬처럼 가벼움과 자유를 좇았고, 노년의 그는 그 자유가 기쁨이었으나 때로는 책임을 미루게 했음을 인정했다. 그는 창밖을 보며 잃어버린 시간의 반짝임을 떠올렸다."
  },
  {
    id: "ending-15",
    title: "닮은 인생 : 마틸다",
    when: { finishRank: 4, minGrowth: 70000 },
    story:
      "지난 날의 배움은 마틸다처럼 조용히 쌓여 큰 힘이 되었고, 노년의 그녀는 그 공부가 결국 자신을 지켜준 방패였다고 말했다. 그녀는 낡은 책장을 쓰다듬으며 그때의 용기를 기억했다."
  },
  {
    id: "ending-16",
    title: "닮은 인생 : 스크루지",
    when: { topKey: "money", minMoney: 70000 },
    story:
      "지난 날의 재정은 스크루지처럼 차갑게 계산되었지만, 노년의 그는 결국 마음의 따뜻함이 더 큰 부를 만든다는 것을 깨달았다. 그는 오래된 장부를 덮으며 늦게 찾아온 온기를 조용히 받아들였다."
  },
  {
    id: "ending-17",
    title: "닮은 인생 : 도로시 게일",
    when: { topKey: "happiness", minHappiness: 80000 },
    story:
      "지난 날의 여정은 도로시 게일처럼 집으로 돌아가기 위한 길이었고, 노년의 그녀는 결국 자신이 지키려던 것은 사람이었다고 말했다. 그녀는 낡은 빨간 구두를 떠올리며 미소 지었다."
  },
  {
    id: "ending-18",
    title: "닮은 인생 : 카트니스 에버딘",
    when: { topKey: "health", minHealth: 80000 },
    story:
      "지난 날의 선택은 카트니스 에버딘처럼 살아남기 위한 전투였고, 노년의 그녀는 싸움 뒤에 남은 평온이 얼마나 소중한지 느꼈다. 그녀는 활을 내려놓듯 마음을 천천히 내려놓았다."
  },
  {
    id: "ending-19",
    title: "닮은 인생 : 앨리스",
    when: { topKey: "growth", minGrowth: 80000 },
    story:
      "지난 날의 삶은 앨리스처럼 기묘한 세계를 지나 호기심으로 길을 열었고, 노년의 그녀는 그 호기심이 인생을 다시 어린 날처럼 되돌려 주었다고 말했다. 그녀는 차 한 잔을 들고 낯선 장면들을 떠올렸다."
  },
  {
    id: "ending-20",
    title: "닮은 인생 : 홍길동",
    when: { topKey: "reputation", minReputation: 80000 },
    story:
      "지난 날의 선택은 홍길동처럼 불의에 맞서며 길을 냈고, 노년의 그는 그 용기가 결국 자신과 주변을 지키는 방패가 되었음을 고백했다. 그는 오래된 검을 닦듯 마음을 정리했다."
  },
  {
    id: "ending-21",
    title: "닮은 인생 : 그레고르 잠자",
    when: { lowKey: "money", maxMoney: 20000 },
    story:
      "지난 날의 삶은 그레고르 잠자처럼 변화의 충격을 겪었고, 노년의 그는 그 외로움 속에서도 스스로를 잃지 않으려 애썼다고 말했다. 그는 창문 너머의 빛을 바라보며 자신의 이름을 다시 불렀다."
  },
  {
    id: "ending-22",
    title: "닮은 인생 : 홀든 콜필드",
    when: { lowKey: "happiness", maxHappiness: 30000 },
    story:
      "지난 날의 마음은 홀든 콜필드처럼 세상과 거리를 두었고, 노년의 그는 그 방황이 결국 자신을 이해하게 만든 시간이었다고 말했다. 그는 오래된 공책을 넘기며 지나간 질문들을 조용히 되짚었다."
  },
  {
    id: "ending-23",
    title: "닮은 인생 : 김첨지",
    when: { lowKey: "health", maxHealth: 30000 },
    story:
      "지난 날의 삶은 김첨지처럼 고단한 책임으로 이어졌고, 노년의 그는 그 고단함 속에서도 가족을 지키려 했던 마음이 자신의 버팀목이었다고 말했다. 그는 낡은 모자를 고쳐 쓰며 깊은 한숨을 내쉬었다."
  },
  {
    id: "ending-24",
    title: "닮은 인생 : 톰 소여",
    when: { minAssetValue: 80000 },
    story:
      "지난 날의 길은 톰 소여처럼 장난과 모험으로 채워졌고, 노년의 그는 그 자유로운 시절이 결국 자신을 살아 있게 했다고 말했다. 그는 강가의 바람을 떠올리며 천천히 웃었다."
  },
  {
    id: "ending-25",
    title: "닮은 인생 : 토니 스타크",
    when: { minNetWorth: 120000 },
    story:
      "지난 날의 선택은 토니 스타크처럼 과감한 창조와 책임 사이를 오갔고, 노년의 그는 그 책임이 결국 자신을 인간답게 만들었다고 말했다. 그는 오래된 설계도를 펼치며 자신이 지킨 약속을 떠올렸다."
  },
  {
    id: "ending-26",
    title: "닮은 인생 : 프로도 배긴스",
    when: { minHoldings: 4 },
    story:
      "지난 날의 여정은 프로도 배긴스처럼 조용한 희생을 요구했고, 노년의 그는 그 희생이 있어야 평온이 지켜진다는 사실을 받아들였다. 그는 손에 남은 상처를 바라보며 조용히 숨을 골랐다."
  },
  {
    id: "ending-27",
    title: "닮은 인생 : 파이 파텔",
    when: { minProfitHoldings: 2 },
    story:
      "지난 날의 항해는 파이 파텔처럼 믿음과 상상력으로 버텼고, 노년의 그는 그 고독한 시간들이 결국 자신을 단단하게 했다고 말했다. 그는 바닷빛을 떠올리며 삶의 이야기를 다시 엮었다."
  },
  {
    id: "ending-28",
    title: "닮은 인생 : 안나 카레니나",
    when: { minLossHoldings: 2 },
    story:
      "지난 날의 선택은 안나 카레니나처럼 사랑과 사회 사이에서 흔들렸고, 노년의 그녀는 그 흔들림이 결국 자신을 깊게 만들었다고 말했다. 그녀는 창밖을 보며 그때의 결정들을 조용히 받아들였다."
  },
  {
    id: "ending-29",
    title: "닮은 인생 : 심청",
    when: { maxHoldings: 0 },
    story:
      "지난 날의 삶은 심청처럼 희생과 효심으로 이어졌고, 노년의 그녀는 그 희생이 결국 자신을 단단한 사람으로 만들었다고 말했다. 그녀는 잔잔한 물결을 떠올리며 마음을 다독였다."
  },
  {
    id: "ending-30",
    title: "닮은 인생 : 허생",
    when: { hasSpouse: true },
    story:
      "지난 날의 선택은 허생처럼 통찰과 실험의 길을 걸었고, 노년의 그는 그 모험이 결국 세상을 보는 눈을 키워줬다고 말했다. 그는 작은 책상을 바라보며 스스로의 질문을 다시 적었다."
  },
  {
    id: "ending-31",
    title: "닮은 인생 : 박씨 부인",
    when: { hasSpouse: false },
    story:
      "지난 날의 삶은 박씨 부인처럼 시련을 견뎌내는 인내로 이어졌고, 노년의 그녀는 그 인내가 결국 자신의 존엄을 지켜줬다고 말했다. 그녀는 오래된 거울을 닦으며 자신을 조용히 바라보았다."
  },
  {
    id: "ending-32",
    title: "닮은 인생 : 루시 페벤시",
    when: { spouseId: "chef" },
    story:
      "지난 날의 선택은 루시 페벤시처럼 믿음과 용기로 통로를 열었고, 노년의 그녀는 그 믿음이 평생의 길을 밝혀줬다고 말했다. 그녀는 옷장 문을 닫듯 기억의 문을 천천히 정리했다."
  },
  {
    id: "ending-33",
    title: "닮은 인생 : 오디세우스",
    when: { spouseId: "financier" },
    story:
      "지난 날의 여정은 오디세우스처럼 긴 귀환의 길이었고, 노년의 그는 그 항해가 결국 자신을 집으로 데려왔다고 말했다. 그는 바다 냄새를 떠올리며 오랜 시간을 조용히 감사했다."
  },
  {
    id: "ending-34",
    title: "닮은 인생 : 헤스터 프린",
    when: { spouseId: "musician" },
    story:
      "지난 날의 삶은 헤스터 프린처럼 낙인 속에서도 품위를 지키는 길이었고, 노년의 그녀는 그 침묵이 결국 자신을 강하게 했다고 말했다. 그녀는 천천히 붉은 천을 접으며 마음을 가라앉혔다."
  },
  {
    id: "ending-35",
    title: "닮은 인생 : 올리버 트위스트",
    when: { hadBankruptcy: true, minReputation: 60000 },
    story:
      "지난 날의 선택은 올리버 트위스트처럼 어려움 속에서도 선함을 잃지 않으려 했고, 노년의 그는 그 선함이 결국 사람들을 모아줬다고 말했다. 그는 조용히 두 손을 모으며 그 시절을 떠올렸다."
  },
  {
    id: "ending-36",
    title: "닮은 인생 : 엘리자베스 베넷",
    when: { hadBankruptcy: false, minAllStats: 60000 },
    story:
      "지난 날의 삶은 엘리자베스 베넷처럼 자존과 유머로 지켜졌고, 노년의 그녀는 그 똑똑한 웃음이 인생을 길게 지탱했다고 말했다. 그녀는 오래된 편지를 읽으며 그 시절의 자신을 다정히 받아들였다."
  },
  {
    id: "ending-37",
    title: "닮은 인생 : 조 마치",
    when: { minHappiness: 70000, minReputation: 70000 },
    story:
      "지난 날의 선택은 조 마치처럼 꿈을 쓰고 지키는 길이었고, 노년의 그녀는 그 글들이 자신을 가장 솔직하게 만들었다고 말했다. 그녀는 낡은 원고를 넘기며 한 줄 한 줄에 숨을 고르았다."
  },
  {
    id: "ending-38",
    title: "닮은 인생 : 모모",
    when: { minGrowth: 70000, minMoney: 50000 },
    story:
      "지난 날의 시간은 모모처럼 사람들의 이야기를 듣는 데 쓰였고, 노년의 그녀는 그 경청이 결국 자신을 풍성하게 만들었다고 말했다. 그녀는 시계를 내려놓고 천천히 사람들의 얼굴을 떠올렸다."
  },
  {
    id: "ending-39",
    title: "닮은 인생 : 지킬 박사",
    when: { minHealth: 70000, minMoney: 50000 },
    story:
      "지난 날의 삶은 지킬 박사처럼 두 얼굴 사이에서 흔들렸고, 노년의 그는 그 갈등이 결국 자신을 이해하게 만든 거울이었다고 말했다. 그는 조용히 실험 노트를 닫으며 스스로를 용서했다."
  },
  {
    id: "ending-40",
    title: "닮은 인생 : 아하브 선장",
    when: { minGrowth: 70000, minReputation: 70000 },
    story:
      "지난 날의 선택은 아하브 선장처럼 집념으로 항해를 이어갔고, 노년의 그는 그 집념이 때로는 자신을 아프게 했지만 끝내 삶을 깊게 했다고 말했다. 그는 먼 바다를 떠올리며 긴 숨을 내쉬었다."
  }
];

const MARRIAGE_EVENT = {
  id: "marriage",
  title: "결혼",
  description: "인생 1/3 지점에 다다랐다. 함께 걸어갈 동반자를 선택한다.",
  category: "family",
  choices: []
};

const DEFAULT_EVENT_STORY = "잔잔한 하루가 지나갔다.";
const DEFAULT_ACTION_STORY = "행동을 마치고 숨을 골랐다.";

const ASSETS = [
  { id: "gov_bond_short", name: "국채 3년", type: "안정형", category: "bond", basePrice: 5000 },
  { id: "municipal_bond", name: "지방채", type: "안정형", category: "bond", basePrice: 7000 },
  { id: "corporate_bond_high", name: "회사채 BBB", type: "채권", category: "bond", basePrice: 9000 },
  { id: "gov_bond_long", name: "국채 10년", type: "안정형", category: "bond", basePrice: 12000 },
  { id: "infra_bond", name: "사회기반채권", type: "채권", category: "bond", basePrice: 15000 },
  { id: "corporate_bond_prime", name: "회사채 AAA", type: "채권", category: "bond", basePrice: 18000 },
  { id: "game_stock", name: "게임/콘텐츠 주식", type: "주식", category: "stock", basePrice: 14000 },
  { id: "consumer_stock", name: "소비재 주식", type: "주식", category: "stock", basePrice: 16000 },
  { id: "dividend_stock", name: "배당주", type: "주식", category: "stock", basePrice: 18000 },
  { id: "finance_stock", name: "금융주", type: "주식", category: "stock", basePrice: 19000 },
  { id: "green_stock", name: "그린에너지 주식", type: "주식", category: "stock", basePrice: 20000 },
  { id: "mobility_stock", name: "모빌리티 주식", type: "주식", category: "stock", basePrice: 21000 },
  { id: "bio_stock", name: "바이오 성장주", type: "주식", category: "stock", basePrice: 22000 },
  { id: "solar", name: "태양광 지분", type: "에너지", category: "stock", basePrice: 24000 },
  { id: "tech_stock", name: "테크 대형주", type: "주식", category: "stock", basePrice: 26000 },
  { id: "snack", name: "동네 분식집", type: "소상공", category: "estate", basePrice: 25000 },
  { id: "studio", name: "작은 작업실", type: "공간", category: "estate", basePrice: 32000 },
  { id: "market", name: "동네 편의점", type: "소매", category: "estate", basePrice: 45000 },
  { id: "cafe", name: "정원 카페", type: "사업", category: "estate", basePrice: 60000 },
  { id: "office", name: "공유 오피스", type: "공간", category: "estate", basePrice: 80000 },
  { id: "apt", name: "정원 아파트", type: "건물", category: "estate", basePrice: 90000 },
  { id: "mall", name: "도심 상가", type: "상업", category: "estate", basePrice: 120000 },
  { id: "resort", name: "리조트 부지", type: "부동산", category: "estate", basePrice: 150000 },
  { id: "tower", name: "랜드마크 타워", type: "프리미엄", category: "estate", basePrice: 180000 }
];

const FINISH_REWARDS = [10, 7, 5, 3];
const BANKRUPTCY_SUPPORT = 500;
const BANKRUPTCY_EXIT = 2000;

const CHARACTERS = [
  {
    id: "planner",
    name: "계획가",
    description: "성장·공부 이벤트 보너스 성장 +1,000"
  },
  {
    id: "connector",
    name: "관계가",
    description: "관계/사회 이벤트 보너스 평판 +1,000"
  },
  {
    id: "challenger",
    name: "도전자",
    description: "확률 이벤트 성공/실패 폭이 큼, 투자·매매 시 성장 +1,000"
  },
  {
    id: "saver",
    name: "절약가",
    description: "돈 손실 선택에서 손실 완충"
  },
  {
    id: "healer",
    name: "회복가",
    description: "건강·행복 손실 선택에서 회복 보정"
  },
  {
    id: "adventurer",
    name: "모험가",
    description: "확률 선택 성공 확률 +10%, 투자·매매 시 행복 +1,000"
  },
  {
    id: "socialite",
    name: "사교가",
    description: "관계 선택/행동 시 행복 +1,000"
  },
  {
    id: "balancer",
    name: "균형가",
    description: "턴 종료 시 가장 낮은 스탯 +200"
  }
];

const state = {
  players: [],
  boardSpaces: [],
  currentPlayerIndex: 0,
  phase: "setup",
  totalTurns: 0,
  currentEvent: null,
  recentCategories: [],
  projectPoints: 0,
  projectGoal: 6,
  log: [],
  isRolling: false,
  finishOrder: [],
  availableActions: [],
  marketPrices: {},
  pendingTradeOffer: null,
  pendingTaxes: [],
  tradeCategory: "all",
  marriageFilter: "all",
  marriagePage: 0,
  jobPage: 0
};

const elements = {
  board: document.getElementById("board"),
  effectLayer: document.getElementById("effect-layer"),
  diceCard: document.getElementById("dice-card"),
  rollBtn: document.getElementById("roll-btn"),
  diceValue: document.getElementById("dice-value"),
  dicePlayer: document.getElementById("dice-player"),
  rouletteWheel: document.getElementById("roulette-wheel"),
  phaseHint: document.getElementById("phase-hint"),
  playerPanels: document.getElementById("player-panels"),
  logList: document.getElementById("log-list"),
  progressDisplay: document.getElementById("progress-display"),
  turnDisplay: document.getElementById("turn-display"),
  projectFill: document.getElementById("project-fill"),
  projectDesc: document.getElementById("project-desc"),
  actionModal: document.getElementById("action-modal"),
  actionPanel: document.getElementById("action-panel"),
  actionButtons: document.getElementById("action-buttons"),
  actionHint: document.getElementById("action-hint"),
  actionHelper: document.getElementById("action-helper"),
  helpTarget: document.getElementById("help-target"),
  helpConfirm: document.getElementById("help-confirm"),
  tradeModal: document.getElementById("trade-modal"),
  tradeTabs: document.getElementById("trade-tabs"),
  tradeMarket: document.getElementById("trade-market"),
  tradeClose: document.getElementById("trade-close"),
  tradeSubtitle: document.getElementById("trade-subtitle"),
  tradeSummary: document.getElementById("trade-summary"),
  tradeOfferModal: document.getElementById("trade-offer-modal"),
  tradeOfferText: document.getElementById("trade-offer-text"),
  tradeOfferAccept: document.getElementById("trade-offer-accept"),
  tradeOfferDecline: document.getElementById("trade-offer-decline"),
  assetModal: document.getElementById("asset-modal"),
  assetTitle: document.getElementById("asset-title"),
  assetList: document.getElementById("asset-list"),
  assetClose: document.getElementById("asset-close"),
  marriageInfoModal: document.getElementById("marriage-info-modal"),
  marriageInfoTitle: document.getElementById("marriage-info-title"),
  marriageInfoBody: document.getElementById("marriage-info-body"),
  marriageInfoClose: document.getElementById("marriage-info-close"),
  jobInfoModal: document.getElementById("job-info-modal"),
  jobInfoTitle: document.getElementById("job-info-title"),
  jobInfoBody: document.getElementById("job-info-body"),
  jobInfoClose: document.getElementById("job-info-close"),
  auctionModal: document.getElementById("auction-modal"),
  auctionSubtitle: document.getElementById("auction-subtitle"),
  auctionList: document.getElementById("auction-list"),
  marriageModal: document.getElementById("marriage-modal"),
  marriageFilters: document.getElementById("marriage-filters"),
  marriageList: document.getElementById("marriage-list"),
  marriagePage: document.getElementById("marriage-page"),
  marriagePrev: document.getElementById("marriage-prev"),
  marriageNext: document.getElementById("marriage-next"),
  marriageSkip: document.getElementById("marriage-skip"),
  jobModal: document.getElementById("job-modal"),
  jobList: document.getElementById("job-list"),
  jobPage: document.getElementById("job-page"),
  jobPrev: document.getElementById("job-prev"),
  jobNext: document.getElementById("job-next"),
  startModal: document.getElementById("start-modal"),
  newGameBtn: document.getElementById("new-game-btn"),
  continueGameBtn: document.getElementById("continue-game-btn"),
  continueNote: document.getElementById("continue-note"),
  saveBtn: document.getElementById("save-btn"),
  setupModal: document.getElementById("setup-modal"),
  startBtn: document.getElementById("start-btn"),
  eventModal: document.getElementById("event-modal"),
  eventTitle: document.getElementById("event-title"),
  eventCategory: document.getElementById("event-category"),
  eventDescription: document.getElementById("event-description"),
  eventChoices: document.getElementById("event-choices"),
  eventResult: document.getElementById("event-result"),
  eventStory: document.getElementById("event-story"),
  eventEffects: document.getElementById("event-effects"),
  eventContinue: document.getElementById("event-continue"),
  resultModal: document.getElementById("result-modal"),
  resultCard: document.querySelector("#result-modal .result-card"),
  resultTitle: document.getElementById("result-title"),
  resultStory: document.getElementById("result-story"),
  resultEffects: document.getElementById("result-effects"),
  resultContinue: document.getElementById("result-continue"),
  endModal: document.getElementById("end-modal"),
  finalRanking: document.getElementById("final-ranking"),
  finalTitles: document.getElementById("final-titles"),
  finalReviews: document.getElementById("final-reviews"),
  restartBtn: document.getElementById("restart-btn")
};

const setupPlayers = [
  {
    nameInput: document.getElementById("player-1-name"),
    typeSelect: document.getElementById("player-1-type"),
    charSelect: document.getElementById("player-1-character"),
    desc: document.getElementById("player-1-desc")
  },
  {
    nameInput: document.getElementById("player-2-name"),
    typeSelect: document.getElementById("player-2-type"),
    charSelect: document.getElementById("player-2-character"),
    desc: document.getElementById("player-2-desc")
  },
  {
    nameInput: document.getElementById("player-3-name"),
    typeSelect: document.getElementById("player-3-type"),
    charSelect: document.getElementById("player-3-character"),
    desc: document.getElementById("player-3-desc")
  },
  {
    nameInput: document.getElementById("player-4-name"),
    typeSelect: document.getElementById("player-4-type"),
    charSelect: document.getElementById("player-4-character"),
    desc: document.getElementById("player-4-desc")
  }
];

let eventContinueTimer = null;
let resultContinueTimer = null;
let resultAutoTimer = null;
let pendingResultAction = null;
let pendingAuction = null;

const eventsById = {};
window.GARDEN_EVENTS.forEach((event) => {
  eventsById[event.id] = event;
});

function init() {
  initBoard();
  setupCharacters();
  refreshActionOptions();
  renderActions();
  bindEvents();
  enableDraggableModals();
  enableDraggableRoulette();
  window.addEventListener("resize", syncActionCardSizes);
  setPhase("setup");
  openStartModal();
  updateContinueAvailability();
  updateSaveButton();
}

function requestFullscreenIfDesktop() {
  if (document.fullscreenElement) return;
  const hasFinePointer = window.matchMedia ? window.matchMedia("(pointer: fine)").matches : false;
  if (!hasFinePointer && window.innerWidth < 1024) return;
  const root = document.documentElement;
  if (!root || !root.requestFullscreen) return;
  root.requestFullscreen().catch(() => {});
}

function openStartModal() {
  if (!elements.startModal) return;
  elements.startModal.classList.add("show");
  elements.startModal.setAttribute("aria-hidden", "false");
}

function closeStartModal() {
  if (!elements.startModal) return;
  clearModalFocus(elements.startModal);
  elements.startModal.classList.remove("show");
  elements.startModal.setAttribute("aria-hidden", "true");
}

function openSetupModal() {
  if (!elements.setupModal) return;
  elements.setupModal.classList.add("show");
  elements.setupModal.setAttribute("aria-hidden", "false");
}

function closeSetupModal() {
  if (!elements.setupModal) return;
  clearModalFocus(elements.setupModal);
  elements.setupModal.classList.remove("show");
  elements.setupModal.setAttribute("aria-hidden", "true");
}

function setContinueNote(text) {
  if (!elements.continueNote) return;
  elements.continueNote.textContent = text || "";
}

function clearModalFocus(modal) {
  if (!modal) return;
  const active = document.activeElement;
  if (active && modal.contains(active)) {
    active.blur();
  }
}

function updateContinueAvailability() {
  if (!elements.continueGameBtn) return;
  let hasSave = false;
  try {
    hasSave = Boolean(window.localStorage.getItem(SAVE_KEY));
  } catch (error) {
    hasSave = false;
  }
  elements.continueGameBtn.disabled = !hasSave;
  setContinueNote(hasSave ? "" : "저장된 게임이 없습니다.");
}

function updateSaveButton() {
  if (!elements.saveBtn) return;
  const active = state.players.length > 0 && state.phase !== "setup";
  elements.saveBtn.disabled = !active;
  elements.saveBtn.classList.toggle("is-hidden", !active);
}

function handleNewGame() {
  resetGame(false);
}

function handleContinueGame() {
  requestFullscreenIfDesktop();
  const loaded = loadGameFromStorage();
  if (!loaded) return;
}

function handleSaveGame() {
  if (!canSaveGame()) {
    showSystemModal({
      title: "저장 불가",
      story: "이동/경매 진행 중에는 저장할 수 없습니다.",
      variant: "alert"
    });
    return;
  }
  const saved = saveGame();
  if (!saved) {
    showSystemModal({
      title: "저장 실패",
      story: "저장 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.",
      variant: "alert"
    });
    return;
  }
  updateContinueAvailability();
  showSystemModal({
    title: "저장 완료",
    story: "현재 진행 상황을 저장했습니다.",
    variant: "system"
  });
}

function canSaveGame() {
  if (!state.players.length || state.phase === "setup") return false;
  if (state.isRolling || state.phase === "rolling") return false;
  if (pendingAuction) return false;
  return true;
}

function saveGame() {
  try {
    const payload = buildSavePayload();
    window.localStorage.setItem(SAVE_KEY, JSON.stringify(payload));
    return true;
  } catch (error) {
    return false;
  }
}

function loadGameFromStorage() {
  let payload = null;
  try {
    const raw = window.localStorage.getItem(SAVE_KEY);
    if (!raw) {
      setContinueNote("저장된 게임이 없습니다.");
      return false;
    }
    payload = JSON.parse(raw);
  } catch (error) {
    setContinueNote("저장 데이터를 불러올 수 없습니다.");
    return false;
  }
  if (!payload || !Array.isArray(payload.players)) {
    setContinueNote("저장 데이터를 불러올 수 없습니다.");
    return false;
  }
  applySavedState(payload);
  closeStartModal();
  closeSetupModal();
  updateUI();
  resumeSavedPhase(payload.state?.phase);
  updateSaveButton();
  updateContinueAvailability();
  resumeTradeOffer();
  return true;
}

function buildSavePayload() {
  return {
    version: 1,
    savedAt: Date.now(),
    state: {
      currentPlayerIndex: state.currentPlayerIndex,
      phase: state.phase,
      totalTurns: state.totalTurns,
      currentEventId: state.currentEvent?.id || null,
      recentCategories: state.recentCategories,
      projectPoints: state.projectPoints,
      projectGoal: state.projectGoal,
      log: state.log,
      finishOrder: state.finishOrder,
      availableActions: state.availableActions.map((action) => action.id),
      marketPrices: state.marketPrices,
      pendingTaxes: state.pendingTaxes,
      tradeCategory: state.tradeCategory,
      marriageFilter: state.marriageFilter,
      marriagePage: state.marriagePage,
      jobPage: state.jobPage,
      pendingTradeOffer: state.pendingTradeOffer
    },
    players: state.players.map((player) => serializePlayer(player))
  };
}

function serializePlayer(player) {
  return {
    id: player.id,
    name: player.name,
    characterId: player.character?.id || CHARACTERS[0]?.id,
    type: player.type,
    isCpu: player.isCpu,
    money: player.money,
    happiness: player.happiness,
    health: player.health,
    growth: player.growth,
    reputation: player.reputation,
    items: player.items || [],
    flags: player.flags || [],
    holdings: player.holdings || {},
    holdingsCost: player.holdingsCost || {},
    position: player.position,
    diceBonus: player.diceBonus,
    spouseId: player.spouseId,
    spouseName: player.spouseName,
    spouseTraits: player.spouseTraits || [],
    spouseEffects: player.spouseEffects || null,
    jobId: player.jobId,
    jobName: player.jobName,
    jobSalary: player.jobSalary,
    jobEffects: player.jobEffects || null,
    marriageResolved: player.marriageResolved,
    marriageTurns: player.marriageTurns,
    finished: player.finished,
    finishRank: player.finishRank,
    bankrupt: player.bankrupt,
    hadBankruptcy: player.hadBankruptcy,
    tradeOfferUsed: player.tradeOfferUsed,
    taxesPaid: player.taxesPaid || [],
    storyLog: player.storyLog || [],
    tokenStyle: player.tokenStyle,
    tokenImage: player.tokenImage,
    color: player.color,
    skipTurns: player.skipTurns || 0
  };
}

function hydratePlayer(data, index) {
  const character = CHARACTERS.find((item) => item.id === data.characterId) || CHARACTERS[0];
  const type = data.type || (data.isCpu ? "cpu" : "player");
  const player = {
    id: data.id || `player-${index + 1}`,
    name: data.name || `플레이어 ${index + 1}`,
    character,
    type,
    isCpu: type === "cpu",
    money: Number.isFinite(data.money) ? data.money : START_MONEY,
    happiness: Number.isFinite(data.happiness) ? data.happiness : START_SCORE,
    health: Number.isFinite(data.health) ? data.health : START_SCORE,
    growth: Number.isFinite(data.growth) ? data.growth : START_SCORE,
    reputation: Number.isFinite(data.reputation) ? data.reputation : START_SCORE,
    items: Array.isArray(data.items) ? data.items : [],
    flags: Array.isArray(data.flags) ? data.flags : [],
    holdings: data.holdings || {},
    holdingsCost: data.holdingsCost || {},
    position: Number.isFinite(data.position) ? data.position : 0,
    diceBonus: Number.isFinite(data.diceBonus) ? data.diceBonus : 0,
    spouseId: data.spouseId || null,
    spouseName: data.spouseName || null,
    spouseTraits: Array.isArray(data.spouseTraits) ? data.spouseTraits : [],
    spouseEffects: data.spouseEffects || null,
    jobId: data.jobId || null,
    jobName: data.jobName || null,
    jobSalary: Number.isFinite(data.jobSalary) ? data.jobSalary : 0,
    jobEffects: data.jobEffects || null,
    marriageResolved: Boolean(data.marriageResolved),
    marriageTurns: Number.isFinite(data.marriageTurns) ? data.marriageTurns : 0,
    finished: Boolean(data.finished),
    finishRank: Number.isFinite(data.finishRank) ? data.finishRank : null,
    bankrupt: Boolean(data.bankrupt),
    hadBankruptcy: Boolean(data.hadBankruptcy),
    tradeOfferUsed: Boolean(data.tradeOfferUsed),
    taxesPaid: Array.isArray(data.taxesPaid) ? data.taxesPaid : [],
    storyLog: Array.isArray(data.storyLog) ? data.storyLog : [],
    tokenStyle: data.tokenStyle || TOKEN_STYLES[index % TOKEN_STYLES.length],
    tokenImage: data.tokenImage || TOKEN_IMAGES[index % TOKEN_IMAGES.length],
    color: data.color || PLAYER_COLORS[index % PLAYER_COLORS.length],
    skipTurns: Number.isFinite(data.skipTurns) ? data.skipTurns : 0
  };

  if (player.spouseId && !player.spouseName) {
    const spouse = getSpouseById(player.spouseId);
    if (spouse) {
      player.spouseName = spouse.name;
    }
  }
  if (player.spouseTraits.length && !player.spouseEffects) {
    player.spouseEffects = buildSpouseEffects(player.spouseTraits);
  }
  if (!player.marriageResolved && player.spouseId) {
    player.marriageResolved = true;
  }
  if (player.jobId) {
    const job = setJobForPlayer(player, player.jobId);
    if (!job && player.jobName) {
      player.jobSalary = Number.isFinite(data.jobSalary) ? data.jobSalary : 0;
      player.jobEffects = data.jobEffects || null;
    }
  }
  return player;
}

function resolveSavedActions(actionIds) {
  if (!Array.isArray(actionIds)) return [];
  return actionIds
    .map((id) => ACTIONS.find((action) => action.id === id))
    .filter(Boolean);
}

function resolveSavedEvent(eventId) {
  if (!eventId) return null;
  if (eventId === MARRIAGE_EVENT.id) return MARRIAGE_EVENT;
  return eventsById[eventId] || null;
}

function applySavedState(payload) {
  const saved = payload.state || {};
  state.players = payload.players.map((player, index) => hydratePlayer(player, index));
  state.currentPlayerIndex = clamp(saved.currentPlayerIndex ?? 0, 0, Math.max(state.players.length - 1, 0));
  state.phase = saved.phase || "roll";
  state.totalTurns = Number.isFinite(saved.totalTurns) ? saved.totalTurns : 0;
  state.recentCategories = Array.isArray(saved.recentCategories) ? saved.recentCategories : [];
  state.projectPoints = Number.isFinite(saved.projectPoints) ? saved.projectPoints : 0;
  state.projectGoal = Number.isFinite(saved.projectGoal) ? saved.projectGoal : state.projectGoal;
  state.log = Array.isArray(saved.log) ? saved.log : [];
  state.finishOrder = Array.isArray(saved.finishOrder) ? saved.finishOrder : [];
  state.availableActions = resolveSavedActions(saved.availableActions);
  state.marketPrices =
    saved.marketPrices && Object.keys(saved.marketPrices).length ? saved.marketPrices : initMarketPrices();
  state.pendingTaxes = Array.isArray(saved.pendingTaxes) ? saved.pendingTaxes : [];
  state.tradeCategory = saved.tradeCategory || "all";
  state.marriageFilter = saved.marriageFilter || "all";
  state.marriagePage = Number.isFinite(saved.marriagePage) ? saved.marriagePage : 0;
  state.jobPage = Number.isFinite(saved.jobPage) ? saved.jobPage : 0;
  state.pendingTradeOffer = saved.pendingTradeOffer || null;
  state.currentEvent = resolveSavedEvent(saved.currentEventId);
  state.isRolling = false;
}

function resumeSavedPhase(phase) {
  const safePhase = phase === "rolling" ? "roll" : phase;
  if (safePhase === "end") {
    endGame();
    return;
  }
  if (safePhase === "event" && state.currentEvent) {
    showEvent(state.currentEvent);
    updateUI();
    return;
  }
  if (safePhase === "action") {
    setPhase("action", { restore: true });
    updateUI();
    scheduleCpuAction();
    return;
  }
  setPhase("roll");
  updateUI();
  scheduleCpuRoll();
}

function resumeTradeOffer() {
  if (!state.pendingTradeOffer) return;
  const offer = state.pendingTradeOffer;
  const target = state.players.find((item) => item.id === offer.targetId);
  if (!target) {
    state.pendingTradeOffer = null;
    return;
  }
  if (isCpuPlayer(target)) {
    scheduleCpuTradeOfferDecision();
  } else {
    openTradeOfferModal();
  }
}

function bindEvents() {
  elements.rollBtn.addEventListener("click", handleRoll);
  elements.eventContinue.addEventListener("click", handleEventContinue);
  elements.resultContinue.addEventListener("click", handleResultContinue);
  if (elements.newGameBtn) {
    elements.newGameBtn.addEventListener("click", handleNewGame);
  }
  if (elements.continueGameBtn) {
    elements.continueGameBtn.addEventListener("click", handleContinueGame);
  }
  if (elements.saveBtn) {
    elements.saveBtn.addEventListener("click", handleSaveGame);
  }
  elements.startBtn.addEventListener("click", startGame);
  elements.restartBtn.addEventListener("click", resetGame);
  elements.actionButtons.addEventListener("click", handleActionClick);
  elements.helpConfirm.addEventListener("click", confirmHelpAction);
  elements.tradeClose.addEventListener("click", closeTradeModal);
  if (elements.tradeTabs) {
    elements.tradeTabs.addEventListener("click", handleTradeTabClick);
  }
  elements.tradeMarket.addEventListener("click", handleMarketClick);
  if (elements.auctionList) {
    elements.auctionList.addEventListener("click", handleAuctionClick);
  }
  elements.playerPanels.addEventListener("click", handleAssetButtonClick);
  elements.assetClose.addEventListener("click", closeAssetModal);
  if (elements.marriageInfoClose) {
    elements.marriageInfoClose.addEventListener("click", closeMarriageInfoModal);
  }
  if (elements.jobInfoClose) {
    elements.jobInfoClose.addEventListener("click", closeJobInfoModal);
  }
  elements.tradeOfferAccept.addEventListener("click", () => resolveTradeOffer(true));
  elements.tradeOfferDecline.addEventListener("click", () => resolveTradeOffer(false));
  if (elements.marriageFilters) {
    elements.marriageFilters.addEventListener("click", handleMarriageFilterClick);
  }
  if (elements.marriagePrev) {
    elements.marriagePrev.addEventListener("click", () => shiftMarriagePage(-1));
  }
  if (elements.marriageNext) {
    elements.marriageNext.addEventListener("click", () => shiftMarriagePage(1));
  }
  if (elements.marriageList) {
    elements.marriageList.addEventListener("click", handleMarriageSelect);
  }
  if (elements.marriageSkip) {
    elements.marriageSkip.addEventListener("click", handleMarriageSkip);
  }
  if (elements.jobPrev) {
    elements.jobPrev.addEventListener("click", () => shiftJobPage(-1));
  }
  if (elements.jobNext) {
    elements.jobNext.addEventListener("click", () => shiftJobPage(1));
  }
  if (elements.jobList) {
    elements.jobList.addEventListener("click", handleJobSelect);
  }
  window.addEventListener("resize", positionSpaces);
}

function enableDraggableModals() {
  const cards = document.querySelectorAll(".modal-card");
  cards.forEach((card) => {
    if (card.dataset.draggable === "true") return;
    card.dataset.draggable = "true";
    makeModalDraggable(card);
  });
}

function enableDraggableRoulette() {
  if (!elements.diceCard) return;
  if (elements.diceCard.dataset.draggable === "true") return;
  elements.diceCard.dataset.draggable = "true";
  makeModalDraggable(elements.diceCard);
}

function makeModalDraggable(card) {
  let pointerId = null;
  let startX = 0;
  let startY = 0;
  let originX = 0;
  let originY = 0;
  let dragging = false;

  const readOffset = () => ({
    x: parseFloat(card.dataset.dragX || "0"),
    y: parseFloat(card.dataset.dragY || "0")
  });

  const writeOffset = (x, y) => {
    card.dataset.dragX = x.toString();
    card.dataset.dragY = y.toString();
    card.style.setProperty("--drag-x", `${x}px`);
    card.style.setProperty("--drag-y", `${y}px`);
  };

  card.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    if (event.target.closest("button, input, select, textarea, option")) return;
    pointerId = event.pointerId;
    const current = readOffset();
    startX = event.clientX;
    startY = event.clientY;
    originX = current.x;
    originY = current.y;
    dragging = false;
    card.setPointerCapture(pointerId);
  });

  card.addEventListener("pointermove", (event) => {
    if (event.pointerId !== pointerId) return;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    if (!dragging && Math.hypot(dx, dy) < 4) {
      return;
    }
    dragging = true;
    card.classList.add("dragging");
    writeOffset(originX + dx, originY + dy);
    event.preventDefault();
  });

  const stopDrag = (event) => {
    if (event.pointerId !== pointerId) return;
    card.classList.remove("dragging");
    pointerId = null;
  };

  card.addEventListener("pointerup", stopDrag);
  card.addEventListener("pointercancel", stopDrag);
}

function getSetupType(setup) {
  if (!setup?.typeSelect) return "player";
  const value = setup.typeSelect.value;
  if (value === "cpu" || value === "none") return value;
  return "player";
}

function syncSetupPlayerState(setup) {
  const type = getSetupType(setup);
  const disabled = type === "none";
  if (setup.nameInput) setup.nameInput.disabled = disabled;
  if (setup.charSelect) setup.charSelect.disabled = disabled;
  if (setup.desc && disabled) {
    setup.desc.textContent = "참여 안함";
  }
}

function setupCharacters() {
  setupPlayers.forEach((setup, index) => {
    const { charSelect, desc, typeSelect } = setup;
    charSelect.innerHTML = "";
    CHARACTERS.forEach((character) => {
      const option = document.createElement("option");
      option.value = character.id;
      option.textContent = character.name;
      charSelect.appendChild(option);
    });
    charSelect.selectedIndex = index % CHARACTERS.length;
    const updateDesc = () => {
      if (getSetupType(setup) === "none") {
        desc.textContent = "참여 안함";
        return;
      }
      const selected = CHARACTERS.find((character) => character.id === charSelect.value);
      desc.textContent = selected ? selected.description : "";
    };
    updateDesc();
    charSelect.addEventListener("change", updateDesc);
    if (typeSelect) {
      typeSelect.addEventListener("change", () => {
        syncSetupPlayerState(setup);
        updateDesc();
      });
    }
    syncSetupPlayerState(setup);
  });
}

function startGame() {
  requestFullscreenIfDesktop();
  const activeEntries = setupPlayers
    .map((setup, slotIndex) => ({ setup, slotIndex, type: getSetupType(setup) }))
    .filter((entry) => entry.type !== "none");
  if (!activeEntries.length) {
    window.alert("참여할 플레이어를 최소 1명 선택해주세요.");
    return;
  }
  state.players = activeEntries.map((entry, index) => createPlayer(entry.setup, index, entry.slotIndex, entry.type));
  state.currentPlayerIndex = 0;
  state.phase = "roll";
  state.totalTurns = 0;
  state.recentCategories = [];
  state.projectPoints = 0;
  state.finishOrder = [];
  state.marketPrices = initMarketPrices();
  state.log = [];
  state.currentEvent = null;
  state.pendingTradeOffer = null;
  state.pendingTaxes = [];
  state.availableActions = [];
  state.tradeCategory = "all";
  state.marriageFilter = "all";
  state.marriagePage = 0;
  state.jobPage = 0;
  state.isRolling = false;
  closeStartModal();
  elements.setupModal.classList.remove("show");
  elements.setupModal.setAttribute("aria-hidden", "true");
  elements.actionModal.classList.remove("show");
  elements.actionModal.setAttribute("aria-hidden", "true");
  elements.resultModal.classList.remove("show");
  elements.resultModal.setAttribute("aria-hidden", "true");
  pendingResultAction = null;
  updateUI();
  updateSaveButton();
  addLog("정원시에서 새로운 인생의 막이 시작됐다.");
  beginTurn();
}

function resetGame(showStart = true) {
  elements.endModal.classList.remove("show");
  elements.endModal.setAttribute("aria-hidden", "true");
  elements.eventModal.classList.remove("show");
  elements.eventModal.setAttribute("aria-hidden", "true");
  elements.actionModal.classList.remove("show");
  elements.actionModal.setAttribute("aria-hidden", "true");
  elements.resultModal.classList.remove("show");
  elements.resultModal.setAttribute("aria-hidden", "true");
  elements.tradeModal.classList.remove("show");
  elements.tradeModal.setAttribute("aria-hidden", "true");
  if (elements.auctionModal) {
    elements.auctionModal.classList.remove("show");
    elements.auctionModal.setAttribute("aria-hidden", "true");
  }
  if (showStart !== false) {
    openStartModal();
    closeSetupModal();
  } else {
    closeStartModal();
    openSetupModal();
  }
  if (eventContinueTimer) {
    window.clearTimeout(eventContinueTimer);
    eventContinueTimer = null;
  }
  if (resultContinueTimer) {
    window.clearTimeout(resultContinueTimer);
    resultContinueTimer = null;
  }
  if (resultAutoTimer) {
    window.clearTimeout(resultAutoTimer);
    resultAutoTimer = null;
  }
  if (elements.dicePlayer) {
    elements.dicePlayer.textContent = "";
  }
  clearBoardFocus();
  pendingResultAction = null;
  pendingAuction = null;
  state.isRolling = false;
  state.players = [];
  state.log = [];
  state.finishOrder = [];
  state.availableActions = [];
  state.currentEvent = null;
  state.pendingTradeOffer = null;
  state.pendingTaxes = [];
  state.currentPlayerIndex = 0;
  state.totalTurns = 0;
  state.projectPoints = 0;
  state.recentCategories = [];
  state.marketPrices = initMarketPrices();
  state.tradeCategory = "all";
  state.marriageFilter = "all";
  state.marriagePage = 0;
  state.jobPage = 0;
  setPhase("setup");
  updateUI();
  updateSaveButton();
  updateContinueAvailability();
}

function createPlayer(setup, index, slotIndex, playerType) {
  const character = CHARACTERS.find((item) => item.id === setup.charSelect.value) || CHARACTERS[0];
  const type = playerType || "player";
  const baseIndex = typeof slotIndex === "number" ? slotIndex : index;
  const defaultName = type === "cpu" ? `CPU ${baseIndex + 1}` : `플레이어 ${baseIndex + 1}`;
  return {
    id: `player-${index + 1}`,
    name: setup.nameInput.value.trim() || defaultName,
    character,
    type,
    isCpu: type === "cpu",
    money: START_MONEY,
    happiness: START_SCORE,
    health: START_SCORE,
    growth: START_SCORE,
    reputation: START_SCORE,
    items: [],
    flags: [],
    holdings: {},
    holdingsCost: {},
    position: 0,
    diceBonus: 0,
    spouseId: null,
    spouseName: null,
    spouseTraits: [],
    spouseEffects: null,
    jobId: null,
    jobName: null,
    jobSalary: 0,
    jobEffects: null,
    marriageResolved: false,
    marriageTurns: 0,
    finished: false,
    finishRank: null,
    bankrupt: false,
    hadBankruptcy: false,
    tradeOfferUsed: false,
    taxesPaid: [],
    storyLog: [],
    tokenStyle: TOKEN_STYLES[index % TOKEN_STYLES.length],
    tokenImage: TOKEN_IMAGES[index % TOKEN_IMAGES.length],
    color: PLAYER_COLORS[index % PLAYER_COLORS.length]
  };
}

function createBoardPath(rows, cols) {
  const path = [];
  for (let row = rows - 1; row >= 0; row -= 1) {
    const isEvenRow = (rows - 1 - row) % 2 === 0;
    if (isEvenRow) {
      for (let col = 0; col < cols; col += 1) {
        path.push({ row, col });
      }
    } else {
      for (let col = cols - 1; col >= 0; col -= 1) {
        path.push({ row, col });
      }
    }
  }
  return path;
}

function buildSpecialSpaces(total) {
  const marriageIndex = Math.floor((total - 1) / 3);
  const jobIndex = Math.min(total - 2, Math.max(1, 39));
  const backRatios = [0.12, 0.2, 0.42, 0.55, 0.68, 0.8, 0.9];
  const restRatios = [0.26, 0.6];
  const backSpaces = new Map();
  const restSpaces = new Set();

  backRatios.forEach((ratio, index) => {
    const target = Math.round(ratio * (total - 1));
    if (target <= 1 || target >= total - 1) return;
    if (target === marriageIndex || target === jobIndex) return;
    const steps = index % 2 === 0 ? 3 : 4;
    backSpaces.set(target, steps);
  });

  restRatios.forEach((ratio) => {
    const target = Math.round(ratio * (total - 1));
    if (target <= 1 || target >= total - 1) return;
    if (target === marriageIndex || target === jobIndex) return;
    if (backSpaces.has(target)) return;
    restSpaces.add(target);
  });

  return { marriageIndex, jobIndex, backSpaces, restSpaces };
}

function buildBoardTypes(total, special = {}) {
  const types = [];
  for (let i = 0; i < total; i += 1) {
    const row = Math.floor(i / BOARD_COLS);
    const index = (i + row * 3) % BOARD_PATTERN.length;
    types.push(BOARD_PATTERN[index]);
  }
  const marriageIndex = Number.isFinite(special.marriageIndex) ? special.marriageIndex : -1;
  const jobIndex = Number.isFinite(special.jobIndex) ? special.jobIndex : -1;
  const backSpaces = special.backSpaces || new Map();
  const restSpaces = special.restSpaces || new Set();
  if (marriageIndex > 0 && marriageIndex < total - 1) {
    types[marriageIndex] = "marriage";
  }
  if (jobIndex > 0 && jobIndex < total - 1 && jobIndex !== marriageIndex) {
    types[jobIndex] = "job";
  }
  backSpaces.forEach((_, index) => {
    if (index > 0 && index < total - 1 && index !== marriageIndex && index !== jobIndex) {
      types[index] = "back";
    }
  });
  restSpaces.forEach((index) => {
    if (
      index > 0 &&
      index < total - 1 &&
      index !== marriageIndex &&
      index !== jobIndex &&
      !backSpaces.has(index)
    ) {
      types[index] = "rest";
    }
  });
  return types;
}

function initBoard() {
  elements.board.innerHTML = "";
  state.boardSpaces = BOARD_TYPES.map((type, index) => {
    const isStart = index === 0;
    const isFinish = index === BOARD_TYPES.length - 1;
    const space = document.createElement("div");
    space.className = `space ${type}`;
    if (isStart) space.classList.add("start");
    if (isFinish) space.classList.add("finish");
    space.dataset.index = index.toString();
    let tileKey = type;
    if (isStart) tileKey = "start";
    if (isFinish) tileKey = "finish";
    const tileImage = TILE_IMAGES[tileKey];
    if (tileImage) {
      space.style.setProperty("--tile-image", `url("${tileImage}")`);
    }
    const label = document.createElement("div");
    label.className = "space-label";
    label.textContent = isStart ? "시작" : isFinish ? "결승" : SPACE_LABELS[type];
    const tokens = document.createElement("div");
    tokens.className = "tokens";
    space.appendChild(label);
    space.appendChild(tokens);
    elements.board.appendChild(space);
    return { index, type, element: space, tokens };
  });
  positionSpaces();
}

function positionSpaces() {
  const width = elements.board.clientWidth;
  const height = elements.board.clientHeight;
  if (!width || !height) return;
  const cellWidth = width / BOARD_COLS;
  const cellHeight = height / BOARD_ROWS;
  const cellSize = Math.max(18, Math.min(cellWidth, cellHeight) * 0.84);
  const gridSize = Math.min(cellWidth, cellHeight);
  const tokenSize = Math.max(18, Math.round(cellSize * 2));
  const radiusSize = Math.max(10, Math.round(cellSize * 0.28));
  const fontSize = Math.max(9, Math.round(cellSize * 0.22));
  elements.board.style.setProperty("--cell-size", `${cellSize}px`);
  elements.board.style.setProperty("--grid-size", `${gridSize}px`);
  elements.board.style.setProperty("--token-size", `${tokenSize}px`);
  elements.board.style.setProperty("--space-radius", `${radiusSize}px`);
  state.boardSpaces.forEach((space, index) => {
    const cell = BOARD_PATH[index];
    const x = (cell.col + 0.5) * cellWidth;
    const y = (cell.row + 0.5) * cellHeight;
    space.element.style.left = `${x}px`;
    space.element.style.top = `${y}px`;
    space.element.style.transform = "translate(-50%, -50%)";
    space.element.style.fontSize = `${fontSize}px`;
  });
}

function setPhase(phase, options = {}) {
  state.phase = phase;
  const cpuTurn = state.players.length ? isCpuPlayer(currentPlayer()) : false;
  elements.rollBtn.disabled = phase !== "roll" || cpuTurn;
  elements.phaseHint.textContent = phaseHintText(phase);
  if (phase === "action") {
    if (!options.restore || !state.availableActions.length) {
      refreshActionOptions();
    }
    elements.actionModal.classList.add("show");
    elements.actionModal.setAttribute("aria-hidden", "false");
    renderActions();
    window.requestAnimationFrame(syncActionCardSizes);
  } else {
    elements.actionModal.classList.remove("show");
    elements.actionModal.setAttribute("aria-hidden", "true");
    elements.tradeModal.classList.remove("show");
    elements.tradeModal.setAttribute("aria-hidden", "true");
    elements.actionHelper.classList.add("hidden");
  }
  if (phase === "roll") {
    elements.diceValue.textContent = "-";
  }
}

function phaseHintText(phase) {
  switch (phase) {
    case "roll":
      return "룰렛을 돌려 이동하세요.";
    case "rolling":
      return "룰렛이 돌아가는 중...";
    case "event":
      return "이벤트 선택 중";
    case "action":
      return "선택 액션 1개";
    case "end":
      return "게임 종료";
    default:
      return "준비 중...";
  }
}

function updateUI() {
  renderBoardTokens();
  renderPlayers();
  renderLog();
  updateMeta();
  updateProject();
  if (state.players.length) {
    const player = currentPlayer();
    if (elements.dicePlayer) {
      elements.dicePlayer.textContent = player.name;
    }
    if (elements.diceCard) {
      setAccentVars(elements.diceCard, player.color);
    }
    if (elements.actionHint) {
      elements.actionHint.textContent = player.isCpu ? `${player.name} 자동 진행 중...` : `${player.name}의 액션을 선택하세요.`;
    }
  } else if (elements.diceCard) {
    setAccentVars(elements.diceCard, PLAYER_COLORS[0]);
  }
  const cpuTurn = state.players.length ? isCpuPlayer(currentPlayer()) : false;
  const disableActions = state.phase === "action" && cpuTurn;
  const activePlayers = state.players.filter((player) => !player.finished);
  const hasHelpTarget = activePlayers.length > 1;
  elements.actionButtons.querySelectorAll("button").forEach((button) => {
    let disabled = disableActions;
    if (!disabled && button.dataset.actionId === "help" && !hasHelpTarget) {
      disabled = true;
    }
    button.disabled = disabled;
  });
  updateSaveButton();
}

function updateMeta() {
  const finishedCount = state.players.filter((player) => player.finished).length;
  elements.progressDisplay.textContent = `완주 ${finishedCount}/${state.players.length || 0}`;
  elements.turnDisplay.textContent = `턴 ${state.totalTurns + 1}`;
}

function updateProject() {
  const filled = Math.min(state.projectPoints, state.projectGoal);
  const empty = Math.max(0, state.projectGoal - filled);
  const hearts = `${"♥".repeat(filled)}${"♡".repeat(empty)}`;
  elements.projectDesc.textContent = hearts || "♡".repeat(state.projectGoal);
}

function isCpuPlayer(player) {
  return Boolean(player && player.isCpu);
}

function scheduleCpuRoll() {
  if (!isCpuPlayer(currentPlayer())) return;
  window.setTimeout(() => {
    if (state.phase !== "roll" || state.isRolling) return;
    if (isCpuPlayer(currentPlayer())) {
      handleRoll();
    }
  }, CPU_DELAYS.roll);
}

function scheduleCpuEventChoice() {
  const player = currentPlayer();
  if (!isCpuPlayer(player) || !state.currentEvent) return;
  const choiceIndex = pickCpuEventChoice(state.currentEvent, player);
  window.setTimeout(() => {
    if (state.phase !== "event" || !isCpuPlayer(currentPlayer())) return;
    handleChoiceSelect(choiceIndex);
  }, CPU_DELAYS.choice);
}

function scheduleCpuAction() {
  if (!isCpuPlayer(currentPlayer()) || state.phase !== "action") return;
  window.setTimeout(() => {
    if (state.phase !== "action" || !isCpuPlayer(currentPlayer())) return;
    const decision = pickCpuAction(currentPlayer());
    if (!decision?.action) return;
    if (decision.action.special === "trade") {
      performCpuTrade(currentPlayer());
      return;
    }
    const button = findActionButton(decision.action.id);
    const outcome =
      decision.action.special === "help" && decision.target
        ? resolveActionOutcome(decision.action, decision.target)
        : resolveActionOutcome(decision.action);
    renderActionOutcomeOnCard(button, outcome);
    lockActionButtons(button);
    window.setTimeout(() => {
      if (state.phase === "action" && isCpuPlayer(currentPlayer())) {
        endTurn();
      }
    }, RESULT_MODAL_MS + CPU_DELAYS.continue);
  }, CPU_DELAYS.action);
}

function checkProjectBonus() {
  if (state.projectPoints < state.projectGoal) return false;
  const sections = state.players.map((player) => {
    const effects = applyEffects(player, { happiness: 2, reputation: 1 });
    addLog(`${player.name} - 도시 프로젝트 보너스`, { effects, player });
    return { title: player.name, effects };
  });
  state.projectPoints = 0;
  showSystemModal({
    title: "도시 프로젝트 보너스",
    story: "협력 목표가 달성되어 모두에게 보상이 지급됐다.",
    sections,
    variant: "system",
    autoClose: isCpuPlayer(currentPlayer())
  });
  return true;
}

function beginTurn() {
  if (allPlayersFinished()) {
    endGame();
    return;
  }
  let guard = 0;
  while (currentPlayer().finished && guard < state.players.length) {
    state.currentPlayerIndex = nextActivePlayerIndex();
    guard += 1;
  }
  if (allPlayersFinished()) {
    endGame();
    return;
  }
  const player = currentPlayer();
  player.tradeOfferUsed = false;
  applySubsidy(player);
  applySpouseBonus(player);
  if (player.skipTurns && player.skipTurns > 0) {
    player.skipTurns -= 1;
    setPhase("event");
    updateUI();
    showResultModal({
      title: "휴식 턴",
      story: `${player.name}은 잠시 쉬어가며 다음 기회를 준비한다.`,
      sections: [{ title: player.name, effects: {} }],
      autoClose: isCpuPlayer(player)
    });
    pendingResultAction = () => {
      endTurn();
    };
    return;
  }
  setPhase("roll");
  updateUI();
  scheduleCpuRoll();
}

function renderBoardTokens() {
  state.boardSpaces.forEach((space) => {
    space.tokens.innerHTML = "";
    space.element.classList.remove("has-token");
  });
  state.players.forEach((player, index) => {
    const token = document.createElement("div");
    token.className = "token";
    token.classList.add(player.tokenStyle || TOKEN_STYLES[index % TOKEN_STYLES.length]);
    token.style.setProperty("--token-color", player.color);
    const tokenImage = player.tokenImage || TOKEN_IMAGES[index % TOKEN_IMAGES.length];
    if (tokenImage) {
      token.classList.add("use-image");
      token.style.setProperty("--token-image", `url("${tokenImage}")`);
    }
    if (index === state.currentPlayerIndex) {
      token.classList.add("active");
    }
    if (player.finished) {
      token.classList.add("finished");
    }
    const targetSpace = state.boardSpaces[player.position];
    if (targetSpace) {
      targetSpace.element.classList.add("has-token");
      targetSpace.tokens.appendChild(token);
    }
  });
}

function renderPlayers() {
  elements.playerPanels.innerHTML = "";
  state.players.forEach((player, index) => {
    const card = document.createElement("div");
    card.className = "player-card";
    setAccentVars(card, player.color);
    if (index === state.currentPlayerIndex) {
      card.classList.add("current");
    }
    if (player.bankrupt) {
      card.classList.add("bankrupt");
    }

    const header = document.createElement("div");
    header.className = "player-header";
    const name = document.createElement("div");
    name.className = "player-name";
    name.textContent = player.name;
    const role = document.createElement("div");
    role.className = "player-role";
    role.textContent = player.isCpu ? `${player.character.name} · CPU` : player.character.name;
    header.appendChild(name);
    header.appendChild(role);
    card.appendChild(header);

    RESOURCE_KEYS.forEach((key) => {
      const row = document.createElement("div");
      row.className = "stat-row";
      const label = document.createElement("div");
      label.className = "stat-label";
      label.textContent = RESOURCE_LABELS[key];
      const bar = document.createElement("div");
      bar.className = "stat-bar";
      const fill = document.createElement("div");
      fill.className = "stat-fill";
      let percent = 0;
      if (key === "money") {
        percent = Math.min(100, (player[key] / resourceMax(key)) * 100);
      } else {
        const info = getStatLevelInfo(player[key]);
        percent = Math.min(100, info.progress * 100);
      }
      fill.style.width = `${percent}%`;
      bar.appendChild(fill);
      const value = document.createElement("div");
      value.className = "stat-value";
      value.textContent = formatStatDisplay(key, player[key]);
      row.appendChild(label);
      row.appendChild(bar);
      row.appendChild(value);
      card.appendChild(row);
    });

    const actions = document.createElement("div");
    actions.className = "player-actions";
    const assetBtn = document.createElement("button");
    assetBtn.type = "button";
    assetBtn.className = "asset-button";
    assetBtn.dataset.playerId = player.id;
    const holdings = getPlayerHoldings(player);
    const totalCount = holdings.reduce((sum, entry) => sum + entry.qty, 0);
    assetBtn.textContent = totalCount ? `보유 자산 보기 (${totalCount}개)` : "보유 자산 보기";
    actions.appendChild(assetBtn);
    card.appendChild(actions);

    elements.playerPanels.appendChild(card);
  });
}

function getPlayerHoldings(player) {
  if (!player) return [];
  return ASSETS.map((asset) => {
    const qty = getHoldingQty(player, asset.id);
    if (!qty) return null;
    const price = getMarketPrice(asset.id);
    const rawAvgCost = getHoldingAvgCost(player, asset.id);
    const avgCost = rawAvgCost > 0 ? rawAvgCost : price;
    const profitRate = avgCost > 0 ? ((price - avgCost) / avgCost) * 100 : 0;
    const totalCost = avgCost * qty;
    const currentValue = price * qty;
    const profit = currentValue - totalCost;
    return {
      asset,
      qty,
      avgCost,
      price,
      totalCost,
      currentValue,
      profit,
      profitRate
    };
  }).filter(Boolean);
}

function getMarketPrice(assetId) {
  const asset = ASSETS.find((item) => item.id === assetId);
  if (!asset) return 0;
  return state.marketPrices[assetId] || asset.basePrice;
}

function getForcedSalePrice(assetId) {
  return quantizeMoneyCap(getMarketPrice(assetId) * FORCED_SALE_RATE);
}

function calculateHoldingsValue(player, rate = 1) {
  if (!player) return 0;
  return ASSETS.reduce((sum, asset) => {
    const qty = getHoldingQty(player, asset.id);
    if (!qty) return sum;
    const price = getMarketPrice(asset.id) * rate;
    return sum + price * qty;
  }, 0);
}

function calculateTotalAssets(player) {
  if (!player) return 0;
  return Math.max(0, player.money) + calculateHoldingsValue(player);
}

function ensureHoldingsCost(player) {
  if (!player.holdingsCost) {
    player.holdingsCost = {};
  }
}

function getHoldingQty(player, assetId) {
  return player?.holdings?.[assetId] || 0;
}

function getHoldingCost(player, assetId) {
  return player?.holdingsCost?.[assetId] || 0;
}

function getHoldingAvgCost(player, assetId) {
  const qty = getHoldingQty(player, assetId);
  if (!qty) return 0;
  const totalCost = getHoldingCost(player, assetId);
  return totalCost / qty;
}

function addHolding(player, assetId, qty, unitCost) {
  if (!player || qty <= 0) return;
  ensureHoldingsCost(player);
  const currentQty = getHoldingQty(player, assetId);
  const currentCost = getHoldingCost(player, assetId);
  const safeUnitCost = Number.isFinite(unitCost) ? unitCost : 0;
  const nextQty = currentQty + qty;
  const nextCost = currentCost + safeUnitCost * qty;
  player.holdings[assetId] = nextQty;
  player.holdingsCost[assetId] = nextCost;
}

function removeHolding(player, assetId, qty) {
  if (!player || qty <= 0) return;
  ensureHoldingsCost(player);
  const currentQty = getHoldingQty(player, assetId);
  if (!currentQty) return;
  const removeQty = Math.min(qty, currentQty);
  const avgCost = getHoldingAvgCost(player, assetId);
  const currentCost = getHoldingCost(player, assetId);
  const nextQty = currentQty - removeQty;
  const nextCost = Math.max(0, currentCost - avgCost * removeQty);
  if (nextQty <= 0) {
    delete player.holdings[assetId];
    delete player.holdingsCost[assetId];
    return;
  }
  player.holdings[assetId] = nextQty;
  player.holdingsCost[assetId] = nextCost;
}

function renderActions() {
  elements.actionButtons.innerHTML = "";
  const actions = state.availableActions.length ? state.availableActions : ACTIONS;
  actions.forEach((action) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "action-button";
    button.dataset.actionId = action.id;
    button.setAttribute("aria-label", `${action.label} 선택`);
    button.setAttribute("aria-pressed", "false");
    
    // 카드 컨테이너
    const cardContainer = document.createElement("div");
    cardContainer.className = "action-card-container";
    
    // 카드 앞면
    const front = document.createElement("div");
    front.className = "action-card-front";
    const frontBg = document.createElement("img");
    frontBg.className = "action-card-bg-image";
    frontBg.src = ACTION_CARD_IMAGES.front;
    frontBg.alt = "";
    const label = document.createElement("div");
    label.className = "action-label";
    label.textContent = action.label;
    front.appendChild(frontBg);
    front.appendChild(label);
    
    // 카드 뒷면 (초기에는 숨김)
    const back = document.createElement("div");
    back.className = "action-card-back hidden";
    const backBg = document.createElement("img");
    backBg.className = "action-card-bg-image";
    backBg.src = ACTION_CARD_IMAGES.back;
    backBg.alt = "";
    const story = document.createElement("div");
    story.className = "action-story";
    story.textContent = getActionStory(action);
    const effectTitle = document.createElement("div");
    effectTitle.className = "action-effect-title";
    effectTitle.textContent = "효과";
    const effects = document.createElement("div");
    effects.className = "action-effect-list";
    getActionEffectLabels(action).forEach((text) => {
      const chip = document.createElement("span");
      chip.className = "action-effect-chip";
      chip.textContent = text;
      effects.appendChild(chip);
    });
    back.appendChild(backBg);
    back.appendChild(story);
    back.appendChild(effectTitle);
    back.appendChild(effects);
    
    cardContainer.appendChild(front);
    cardContainer.appendChild(back);
    button.appendChild(cardContainer);
    elements.actionButtons.appendChild(button);
  });
  window.requestAnimationFrame(syncActionCardSizes);
}

function syncActionCardSizes() {
  if (!elements.actionButtons) return;
  const buttons = elements.actionButtons.querySelectorAll(".action-button");
  if (!buttons.length) return;
  const style = window.getComputedStyle(elements.actionButtons);
  const gap = parseFloat(style.columnGap || style.gap) || 10;
  const containerWidth = elements.actionButtons.getBoundingClientRect().width;
  const available = Math.max(0, containerWidth - gap * (buttons.length - 1));
  const cardWidth = available > 0 ? available / buttons.length : 180;
  const cardHeight = Math.round(cardWidth * ACTION_CARD_RATIO);
  buttons.forEach((button) => {
    button.style.width = `${cardWidth}px`;
    button.style.height = `${cardHeight}px`;
  });
  const modalCard = elements.actionModal?.querySelector(".action-card");
  if (modalCard) {
    const baseHeight = cardHeight + 140;
    modalCard.style.height = `${Math.round(baseHeight * 1.3)}px`;
  }
}

function refreshActionOptions() {
  const tradeAction = ACTIONS.find((action) => action.special === "trade");
  const activePlayers = state.players.filter((player) => !player.finished);
  const hasHelpTarget = activePlayers.length > 1;
  const candidates = ACTIONS.filter((action) => {
    if (action === tradeAction) return false;
    if (action.special === "help" && !hasHelpTarget) return false;
    return true;
  });
  const picks = [];
  const pool = [...candidates];
  const pickCount = Math.min(4, pool.length);
  while (picks.length < pickCount && pool.length) {
    const index = randomInt(0, pool.length - 1);
    picks.push(pool.splice(index, 1)[0]);
  }
  state.availableActions = tradeAction ? [tradeAction, ...picks] : picks;
}

function getActionStory(action) {
  if (!action) return DEFAULT_ACTION_STORY;
  return ACTION_STORIES[action.id] || DEFAULT_ACTION_STORY;
}

function getActionOutcomeStory(action, tier) {
  if (!action) return DEFAULT_ACTION_STORY;
  const entry = ACTION_RESULT_STORIES[action.id];
  const tierId = tier?.id;
  if (entry && tierId && entry[tierId]) {
    return entry[tierId];
  }
  return getActionStory(action);
}

function getActionEffectLabels(action) {
  if (!action) return [];
  const labels = [];
  const addEffects = (effects, prefix) => {
    if (!effects) return;
    RESOURCE_KEYS.forEach((key) => {
      const value = effects[key];
      if (!value) return;
      const sign = value > 0 ? "+" : "-";
      const label = `${RESOURCE_LABELS[key]} ${sign}`;
      labels.push(prefix ? `${prefix} ${label}` : label);
    });
  };
  if (action.special === "trade") {
    labels.push(action.label);
  }
  if (action.special === "project") {
    labels.push(`${EFFECT_META.project.label} +`);
  }
  addEffects(action.effects);
  if (action.special === "help") {
    addEffects(action.targetEffects, "대상");
  }
  return labels.length ? labels : ["변화 없음"];
}

function startRouletteSpin(value) {
  if (!elements.rouletteWheel) return;
  const spinTurns = 3 + Math.random() * 2 + value / 6;
  elements.rouletteWheel.classList.remove("spinning");
  elements.rouletteWheel.style.setProperty("--spin-turn", `${spinTurns}turn`);
  void elements.rouletteWheel.offsetWidth;
  elements.rouletteWheel.classList.add("spinning");
  if (elements.diceCard) {
    elements.diceCard.classList.add("rolling");
    window.setTimeout(() => {
      elements.diceCard.classList.remove("rolling");
    }, ROLL_ANIMATION_MS);
  }
}

function showRollResult(value) {
  if (!elements.effectLayer) return;
  const result = document.createElement("div");
  result.className = "roll-result";
  result.textContent = value.toString();
  elements.effectLayer.appendChild(result);
  result.addEventListener("animationend", () => {
    result.remove();
  });
}

function setDiceCardHidden(hidden) {
  if (!elements.diceCard) return;
  elements.diceCard.classList.toggle("hidden", hidden);
}

function focusBoardOnPosition(position) {
  if (!elements.board) return;
  const cell = BOARD_PATH[position];
  if (!cell) return;
  const width = elements.board.clientWidth;
  const height = elements.board.clientHeight;
  if (!width || !height) return;
  const cellWidth = width / BOARD_COLS;
  const cellHeight = height / BOARD_ROWS;
  const x = (cell.col + 0.5) * cellWidth;
  const y = (cell.row + 0.5) * cellHeight;
  const dx = x - width / 2;
  const dy = y - height / 2;
  const scale = BOARD_ZOOM_SCALE;
  elements.board.style.setProperty("--zoom-x", `${-dx * scale}px`);
  elements.board.style.setProperty("--zoom-y", `${-dy * scale}px`);
  elements.board.style.setProperty("--zoom-scale", scale);
  elements.board.classList.add("zooming");
}

function clearBoardFocus() {
  if (!elements.board) return;
  elements.board.classList.remove("zooming");
  elements.board.style.removeProperty("--zoom-x");
  elements.board.style.removeProperty("--zoom-y");
  elements.board.style.removeProperty("--zoom-scale");
}

function pauseAfterMove(onContinue) {
  if (typeof onContinue !== "function") return;
  let finished = false;
  let timerId = null;
  const overlay = document.createElement("div");
  overlay.className = "move-hold-overlay";
  document.body.appendChild(overlay);

  const cleanup = () => {
    if (timerId) {
      window.clearTimeout(timerId);
      timerId = null;
    }
    window.removeEventListener("keydown", handleKey);
    overlay.remove();
  };

  const finish = () => {
    if (finished) return;
    finished = true;
    cleanup();
    onContinue();
  };

  const handleKey = (event) => {
    if (event.key === "Enter" || event.key === " " || event.key === "Escape") {
      event.preventDefault();
      finish();
    }
  };

  const handlePointer = (event) => {
    event.preventDefault();
    event.stopPropagation();
    finish();
  };

  overlay.addEventListener("pointerup", handlePointer, { once: true });
  overlay.addEventListener("pointercancel", handlePointer, { once: true });
  window.addEventListener("keydown", handleKey);
  timerId = window.setTimeout(() => {
    finish();
  }, MOVE_HOLD_MS);
}

function queueTaxTrigger(player, position) {
  if (!player || !Array.isArray(TAX_POSITIONS)) return;
  if (!TAX_POSITIONS.includes(position)) return;
  if (!player.taxesPaid) {
    player.taxesPaid = [];
  }
  if (player.taxesPaid.includes(position)) return;
  player.taxesPaid.push(position);
  state.pendingTaxes.push(position);
}

function animateMove(player, steps, onComplete) {
  const direction = steps >= 0 ? 1 : -1;
  let remaining = Math.max(0, Math.abs(steps));
  if (remaining <= 0) {
    if (onComplete) onComplete();
    return;
  }
  setDiceCardHidden(true);
  focusBoardOnPosition(player.position);
  if (elements.board) {
    elements.board.classList.remove("stepping");
  }

  const finishMove = () => {
    if (elements.board) {
      elements.board.classList.remove("stepping");
    }
    pauseAfterMove(() => {
      setDiceCardHidden(false);
      clearBoardFocus();
      if (onComplete) onComplete();
    });
  };
  const advance = () => {
    if (remaining <= 0) {
      finishMove();
      return;
    }
    player.position = clamp(player.position + direction, 0, getFinishIndex());
    if (direction > 0) {
      queueTaxTrigger(player, player.position);
    }
    renderBoardTokens();
    focusBoardOnPosition(player.position);
    remaining -= 1;
    window.setTimeout(advance, MOVE_STEP_MS);
  };
  window.setTimeout(() => {
    if (elements.board) {
      elements.board.classList.add("stepping");
    }
    advance();
  }, MOVE_ZOOM_DELAY_MS);
}

function handleRoll() {
  if (state.phase !== "roll" || state.isRolling) return;
  const player = currentPlayer();
  if (player.finished) return;
  const baseRoll = randomInt(1, 6);
  const bonus = player.diceBonus || 0;
  const totalRoll = Math.max(1, Math.min(8, baseRoll + bonus));
  player.diceBonus = 0;
  state.isRolling = true;
  setPhase("rolling");
  state.pendingTaxes = [];
  elements.diceValue.textContent = "...";
  startRouletteSpin(baseRoll);
  window.setTimeout(() => {
    elements.diceValue.textContent = bonus ? `${baseRoll} (+${bonus})` : `${baseRoll}`;
    const finishIndex = getFinishIndex();
    let steps = Math.min(totalRoll, finishIndex - player.position);
    const stopTargets = [];
    if (shouldStopForMarriage(player, steps)) {
      stopTargets.push(MARRIAGE_INDEX);
    }
    if (shouldStopForJob(player, steps)) {
      stopTargets.push(JOB_INDEX);
    }
    if (stopTargets.length) {
      const stopAt = Math.min(...stopTargets);
      steps = Math.max(0, stopAt - player.position);
    }
    showRollResult(steps);
    const startMove = () => {
      window.setTimeout(() => {
        animateMove(player, steps, () => {
          updateUI();
          const proceed = () => {
            if (player.position >= finishIndex) {
              handleFinish(player);
              state.isRolling = false;
              if (allPlayersFinished()) {
                endGame();
              } else {
                endTurn();
              }
              return;
            }
            state.isRolling = false;
            handleLanding(player);
          };
          processPendingTaxes(player, proceed);
        });
      }, ROLL_RESULT_MS);
    };
    const jobResult = applyJobBonus(player, baseRoll);
    if (jobResult) {
      updateUI();
      pendingResultAction = () => {
        startMove();
      };
      return;
    }
    startMove();
  }, ROLL_ANIMATION_MS);
}

function processPendingTaxes(player, onComplete) {
  if (!state.pendingTaxes.length) {
    if (onComplete) onComplete();
    return;
  }
  const position = state.pendingTaxes.shift();
  const totalAssets = calculateTotalAssets(player);
  const taxAmount = quantizeMoneyCap(totalAssets * TAX_RATE);
  if (taxAmount <= 0) {
    processPendingTaxes(player, onComplete);
    return;
  }
  applyTaxCharge(player, taxAmount, position, () => {
    processPendingTaxes(player, onComplete);
  });
}

function applyTaxCharge(player, amount, position, onComplete) {
  if (!player) {
    if (onComplete) onComplete();
    return;
  }
  const positionLabel = Number.isFinite(position) ? `${position + 1}번째 칸` : "세금";
  const story = `${positionLabel}을 지나며 총자산의 10% 세금 $${formatNumber(amount)}를 납부해야 한다.`;
  const applyPayment = () => {
    const applied = applyMoneyDelta(player, -amount);
    addLog(`${player.name} - 세금 납부`, { effects: { money: applied }, player });
    updateUI();
    showSystemModal({
      title: "세금 납부",
      story,
      effects: { money: applied },
      variant: "system",
      autoClose: isCpuPlayer(player)
    });
    if (onComplete) onComplete();
  };
  const hasHoldings = getHoldingsSnapshot(player).length > 0;
  if (player.money >= amount || !hasHoldings) {
    applyPayment();
    return;
  }
  if (isCpuPlayer(player)) {
    sellAssetsForAmount(player, amount, FORCED_SALE_RATE);
    applyPayment();
    return;
  }
  openAuctionModal(player, amount, position, applyPayment);
}

function sellAssetsForAmount(player, amount, rate) {
  if (!player || amount <= 0) return { sold: 0, earned: 0 };
  const holdings = getHoldingsSnapshot(player).sort((a, b) => b.price - a.price);
  const rule = getResourceRule("money");
  let remaining = amount;
  let sold = 0;
  let earned = 0;
  holdings.forEach((holding) => {
    let qty = getHoldingQty(player, holding.assetId);
    const forcedPrice = quantizeMoneyCap(holding.price * rate);
    while (qty > 0 && remaining > 0) {
      removeHolding(player, holding.assetId, 1);
      player.money = clamp(player.money + forcedPrice, rule.min, rule.max);
      sold += 1;
      earned += forcedPrice;
      remaining -= forcedPrice;
      qty -= 1;
    }
  });
  return { sold, earned };
}

function openAuctionModal(player, amount, position, onComplete) {
  if (!elements.auctionModal || !elements.auctionList) {
    if (onComplete) onComplete();
    return;
  }
  pendingAuction = {
    player,
    amount,
    position,
    onComplete
  };
  renderAuctionModal();
  elements.auctionModal.classList.add("show");
  elements.auctionModal.setAttribute("aria-hidden", "false");
}

function closeAuctionModal() {
  if (!elements.auctionModal) return;
  clearModalFocus(elements.auctionModal);
  elements.auctionModal.classList.remove("show");
  elements.auctionModal.setAttribute("aria-hidden", "true");
}

function renderAuctionModal() {
  if (!pendingAuction || !elements.auctionList) return;
  const { player, amount, position } = pendingAuction;
  const remaining = Math.max(0, amount - player.money);
  const positionLabel = Number.isFinite(position) ? `${position + 1}번째 칸` : "세금";
  if (elements.auctionSubtitle) {
    elements.auctionSubtitle.textContent = `${positionLabel} 세금 ${formatResourceValue("money", amount)} · 부족액 ${formatResourceValue("money", remaining)} (강제 경매 20% 할인)`;
  }
  elements.auctionList.innerHTML = "";
  const holdings = getPlayerHoldings(player);
  if (!holdings.length) {
    const empty = document.createElement("div");
    empty.className = "auction-empty";
    empty.textContent = "처분할 자산이 없습니다.";
    elements.auctionList.appendChild(empty);
    finalizeAuctionPayment();
    return;
  }
  holdings.forEach((entry) => {
    const row = document.createElement("div");
    row.className = "auction-row";
    const name = document.createElement("div");
    name.className = "auction-name";
    name.textContent = `${entry.asset.name} x${entry.qty}`;
    const price = getForcedSalePrice(entry.asset.id);
    const priceText = document.createElement("div");
    priceText.className = "auction-price";
    priceText.textContent = `강제 매도가 ${formatResourceValue("money", price)}`;
    const sellBtn = document.createElement("button");
    sellBtn.className = "auction-sell";
    sellBtn.type = "button";
    sellBtn.dataset.assetId = entry.asset.id;
    sellBtn.textContent = "매도";
    row.appendChild(name);
    row.appendChild(priceText);
    row.appendChild(sellBtn);
    elements.auctionList.appendChild(row);
  });
}

function handleAuctionClick(event) {
  if (!pendingAuction) return;
  const button = event.target.closest(".auction-sell");
  if (!button) return;
  const assetId = button.dataset.assetId;
  if (!assetId) return;
  const { player } = pendingAuction;
  if (getHoldingQty(player, assetId) <= 0) {
    renderAuctionModal();
    return;
  }
  const price = getForcedSalePrice(assetId);
  removeHolding(player, assetId, 1);
  applyMoneyDelta(player, price, { skipBankruptcy: true, skipLiquidation: true });
  updateUI();
  renderAuctionModal();
  if (player.money >= pendingAuction.amount) {
    finalizeAuctionPayment();
  }
}

function finalizeAuctionPayment() {
  if (!pendingAuction) return;
  const { player, amount, onComplete } = pendingAuction;
  pendingAuction = null;
  closeAuctionModal();
  const applied = applyMoneyDelta(player, -amount);
  addLog(`${player.name} - 세금 납부`, { effects: { money: applied }, player });
  updateUI();
  showSystemModal({
    title: "세금 납부",
    story: "강제 경매로 마련한 금액을 세금으로 납부했다.",
    effects: { money: applied },
    variant: "system",
    autoClose: isCpuPlayer(player)
  });
  if (onComplete) onComplete();
}

function movePlayer(player, steps) {
  player.position = Math.min(player.position + steps, getFinishIndex());
}

function drawEvent(player) {
  if (player.pendingEventId && eventsById[player.pendingEventId]) {
    const event = eventsById[player.pendingEventId];
    player.pendingEventId = null;
    return event;
  }
  const spaceType = state.boardSpaces[player.position]?.type || "daily";
  const eventTag = spaceType === "job" ? "opportunity" : spaceType;
  const stage = getStage(player);
  const candidates = window.GARDEN_EVENTS.filter((event) => {
    if (!event.tags.includes(eventTag)) return false;
    if (event.stage && event.stage !== stage) return false;
    if (event.requiresFlag && !player.flags.includes(event.requiresFlag)) return false;
    return true;
  });

  const pool = candidates.length ? candidates : window.GARDEN_EVENTS;
  const chosen = weightedPick(pool, (event) => {
    let weight = 1;
    if (state.recentCategories.includes(event.category)) {
      weight *= 0.45;
    }
    return weight;
  });
  if (chosen?.category) {
    state.recentCategories.unshift(chosen.category);
    state.recentCategories = state.recentCategories.slice(0, 3);
  }
  return chosen;
}

function shouldStopForMarriage(player, steps) {
  if (!player || player.marriageResolved) return false;
  if (player.position >= MARRIAGE_INDEX) return false;
  return player.position + steps >= MARRIAGE_INDEX;
}

function shouldStopForJob(player, steps) {
  if (!player || player.jobId) return false;
  if (player.position >= JOB_INDEX) return false;
  return player.position + steps >= JOB_INDEX;
}

function getBackSteps(index) {
  return BACK_SPACES.get(index) || 0;
}

function showMarriageEvent() {
  const player = currentPlayer();
  state.currentEvent = null;
  setPhase("event");
  updateUI();
  if (isCpuPlayer(player)) {
    const pick = pickCpuSpouse();
    const spouse = pick ? setSpouseForPlayer(player, pick.id) : null;
    finalizeMarriageSelection(player, spouse);
    return;
  }
  openMarriageModal();
}

function openMarriageModal() {
  if (!elements.marriageModal) return;
  state.marriageFilter = "all";
  state.marriagePage = 0;
  renderMarriageModal();
  elements.marriageModal.classList.add("show");
  elements.marriageModal.setAttribute("aria-hidden", "false");
}

function closeMarriageModal() {
  if (!elements.marriageModal) return;
  elements.marriageModal.classList.remove("show");
  elements.marriageModal.setAttribute("aria-hidden", "true");
}

function getFilteredSpouses() {
  if (state.marriageFilter === "all") return SPOUSES;
  return SPOUSES.filter((spouse) => spouse.gender === state.marriageFilter);
}

function renderMarriageModal() {
  if (!elements.marriageList) return;
  const spouses = getFilteredSpouses();
  const totalPages = Math.max(1, Math.ceil(spouses.length / SPOUSE_PAGE_SIZE));
  state.marriagePage = clamp(state.marriagePage, 0, totalPages - 1);
  if (elements.marriagePage) {
    elements.marriagePage.textContent = `${state.marriagePage + 1} / ${totalPages}`;
  }
  if (elements.marriageFilters) {
    const buttons = elements.marriageFilters.querySelectorAll("button[data-gender]");
    buttons.forEach((button) => {
      button.classList.toggle("active", button.dataset.gender === state.marriageFilter);
    });
  }
  elements.marriageList.innerHTML = "";
  const start = state.marriagePage * SPOUSE_PAGE_SIZE;
  const pageItems = spouses.slice(start, start + SPOUSE_PAGE_SIZE);
  pageItems.forEach((spouse) => {
    const card = document.createElement("div");
    card.className = "marriage-option";
    const name = document.createElement("div");
    name.className = "marriage-name";
    name.textContent = spouse.name;
    const desc = document.createElement("div");
    desc.className = "marriage-desc";
    desc.textContent = spouse.description;
    const traits = spouse.traits
      .map((traitId) => SPOUSE_TRAITS[traitId]?.label)
      .filter(Boolean)
      .join(", ");
    const penalties = spouse.traits
      .map((traitId) => SPOUSE_TRAITS[traitId]?.penaltyLabel)
      .filter(Boolean)
      .join(", ");
    const traitLine = document.createElement("div");
    traitLine.className = "marriage-traits";
    traitLine.textContent = `장점: ${traits || "없음"}`;
    const penaltyLine = document.createElement("div");
    penaltyLine.className = "marriage-penalties";
    penaltyLine.textContent = `단점: ${penalties || "없음"}`;
    const selectBtn = document.createElement("button");
    selectBtn.type = "button";
    selectBtn.className = "marriage-select";
    selectBtn.dataset.spouseId = spouse.id;
    selectBtn.textContent = "선택";
    card.appendChild(name);
    card.appendChild(desc);
    card.appendChild(traitLine);
    card.appendChild(penaltyLine);
    card.appendChild(selectBtn);
    elements.marriageList.appendChild(card);
  });
}

function handleMarriageFilterClick(event) {
  const button = event.target.closest("button");
  if (!button || !button.dataset.gender) return;
  state.marriageFilter = button.dataset.gender;
  state.marriagePage = 0;
  renderMarriageModal();
}

function shiftMarriagePage(delta) {
  const spouses = getFilteredSpouses();
  const totalPages = Math.max(1, Math.ceil(spouses.length / SPOUSE_PAGE_SIZE));
  state.marriagePage = clamp(state.marriagePage + delta, 0, totalPages - 1);
  renderMarriageModal();
}

function handleMarriageSelect(event) {
  const button = event.target.closest(".marriage-select");
  if (!button) return;
  const spouseId = button.dataset.spouseId;
  const player = currentPlayer();
  const spouse = spouseId ? setSpouseForPlayer(player, spouseId) : null;
  finalizeMarriageSelection(player, spouse);
}

function handleMarriageSkip() {
  const player = currentPlayer();
  setSpouseForPlayer(player, null);
  finalizeMarriageSelection(player, null);
}

function finalizeMarriageSelection(player, spouse) {
  closeMarriageModal();
  const traitLabels = spouse?.traits
    ? spouse.traits.map((traitId) => SPOUSE_TRAITS[traitId]?.label).filter(Boolean)
    : [];
  const penaltyLabels = spouse?.traits
    ? spouse.traits.map((traitId) => SPOUSE_TRAITS[traitId]?.penaltyLabel).filter(Boolean)
    : [];
  const story = spouse
    ? `${spouse.name}과(와) 함께 걷는 삶을 선택했다. 장점: ${traitLabels.join(", ")} / 단점: ${penaltyLabels.join(", ")}`
    : "이번에는 혼자 걸어가기로 했다.";
  addLog(`${player.name} - 결혼: ${spouse ? spouse.name : "결혼 안 함"}`, { player });
  showSystemModal({
    title: "결혼",
    story,
    sections: [{ title: player.name, effects: {} }],
    variant: "system",
    autoClose: isCpuPlayer(player)
  });
  pendingResultAction = () => {
    setPhase("action");
    updateUI();
    scheduleCpuAction();
  };
}

function pickCpuSpouse() {
  if (!SPOUSES.length) return null;
  if (Math.random() < 0.2) {
    return null;
  }
  return SPOUSES[Math.floor(Math.random() * SPOUSES.length)];
}

function showJobEvent() {
  const player = currentPlayer();
  state.currentEvent = null;
  setPhase("event");
  updateUI();
  if (isCpuPlayer(player)) {
    const job = pickCpuJob(player);
    const assigned = job ? setJobForPlayer(player, job.id) : null;
    finalizeJobSelection(player, assigned);
    return;
  }
  openJobModal();
}

function openJobModal() {
  if (!elements.jobModal) return;
  state.jobPage = 0;
  renderJobModal();
  elements.jobModal.classList.add("show");
  elements.jobModal.setAttribute("aria-hidden", "false");
}

function closeJobModal() {
  if (!elements.jobModal) return;
  elements.jobModal.classList.remove("show");
  elements.jobModal.setAttribute("aria-hidden", "true");
}

function formatJobEffectSummary(job) {
  if (!job) return "";
  const parts = [`월급 ${formatResourceValue("money", job.salary)}`];
  const effects = job.effects || {};
  Object.entries(effects).forEach(([key, value]) => {
    if (!value) return;
    const scaled = scaleEffectValue(key, value);
    parts.push(`${RESOURCE_LABELS[key]} ${formatSignedResourceValue(key, scaled)}`);
  });
  return parts.join(" / ");
}

function getJobRequirement(job) {
  return job?.requirement || null;
}

function isJobEligible(player, job) {
  const requirement = getJobRequirement(job);
  if (!requirement) return true;
  const current = player?.[requirement.key] ?? 0;
  if (Number.isFinite(requirement.minLevel)) {
    return getStatLevel(current) >= requirement.minLevel;
  }
  return current >= (requirement.min ?? 0);
}

function formatJobRequirement(job) {
  const requirement = getJobRequirement(job);
  if (!requirement) return "";
  const label = requirement.label || RESOURCE_LABELS[requirement.key] || requirement.key;
  if (Number.isFinite(requirement.minLevel)) {
    return `조건: ${label} Lv.${requirement.minLevel} 이상`;
  }
  return `조건: ${label} ${formatNumber(requirement.min)} 이상`;
}

function renderJobModal() {
  if (!elements.jobList) return;
  const player = currentPlayer();
  const totalPages = Math.max(1, Math.ceil(JOBS.length / JOB_PAGE_SIZE));
  state.jobPage = clamp(state.jobPage, 0, totalPages - 1);
  if (elements.jobPage) {
    elements.jobPage.textContent = `${state.jobPage + 1} / ${totalPages}`;
  }
  elements.jobList.innerHTML = "";
  const start = state.jobPage * JOB_PAGE_SIZE;
  const pageItems = JOBS.slice(start, start + JOB_PAGE_SIZE);
  pageItems.forEach((job) => {
    const eligible = isJobEligible(player, job);
    const card = document.createElement("div");
    card.className = "job-option";
    if (!eligible) {
      card.classList.add("locked");
    }
    const name = document.createElement("div");
    name.className = "job-name";
    name.textContent = job.name;
    const pay = document.createElement("div");
    pay.className = "job-pay";
    pay.textContent = formatJobEffectSummary(job);
    const requirement = formatJobRequirement(job);
    let requirementLine = null;
    if (requirement) {
      requirementLine = document.createElement("div");
      requirementLine.className = "job-requirement";
      requirementLine.textContent = requirement;
    }
    const selectBtn = document.createElement("button");
    selectBtn.type = "button";
    selectBtn.className = "job-select";
    selectBtn.dataset.jobId = job.id;
    if (!eligible) {
      selectBtn.disabled = true;
      selectBtn.classList.add("disabled");
      selectBtn.textContent = "조건 부족";
    } else {
      selectBtn.textContent = "선택";
    }
    card.appendChild(name);
    card.appendChild(pay);
    if (requirementLine) {
      card.appendChild(requirementLine);
    }
    card.appendChild(selectBtn);
    elements.jobList.appendChild(card);
  });
}

function shiftJobPage(delta) {
  const totalPages = Math.max(1, Math.ceil(JOBS.length / JOB_PAGE_SIZE));
  state.jobPage = clamp(state.jobPage + delta, 0, totalPages - 1);
  renderJobModal();
}

function handleJobSelect(event) {
  const button = event.target.closest(".job-select");
  if (!button) return;
  const jobId = button.dataset.jobId;
  const player = currentPlayer();
  const job = jobId ? JOBS.find((entry) => entry.id === jobId) : null;
  if (!job) return;
  if (!isJobEligible(player, job)) {
    showSystemModal({
      title: "조건 부족",
      story: `${job.name}은(는) ${formatJobRequirement(job)} 필요합니다.`,
      variant: "alert",
      autoClose: isCpuPlayer(player)
    });
    return;
  }
  const assigned = setJobForPlayer(player, jobId);
  finalizeJobSelection(player, assigned);
}

function finalizeJobSelection(player, job) {
  closeJobModal();
  if (!job) return;
  const summary = formatJobEffectSummary(job);
  addLog(`${player.name} - 직업 선택: ${job.name}`, { player });
  showSystemModal({
    title: "직업 선택",
    story: `${job.name}을 선택했다. ${summary}`,
    sections: [{ title: player.name, effects: {} }],
    variant: "system",
    autoClose: isCpuPlayer(player)
  });
  pendingResultAction = () => {
    setPhase("action");
    updateUI();
    scheduleCpuAction();
  };
}

function scoreJobForPlayer(player, job) {
  const effects = { ...(job.effects || {}) };
  effects.money = (effects.money || 0) + job.salary / MONEY_SCALE;
  return scoreEffectsForPlayer(effects, player);
}

function pickCpuJob(player) {
  if (!JOBS.length) return null;
  const eligibleJobs = JOBS.filter((job) => isJobEligible(player, job));
  const pool = eligibleJobs.length ? eligibleJobs : JOBS;
  const scored = pool.map((job) => ({ job, score: scoreJobForPlayer(player, job) }));
  scored.sort((a, b) => b.score - a.score);
  const pickFrom = scored.slice(0, Math.min(5, scored.length));
  return pickFrom[Math.floor(Math.random() * pickFrom.length)].job;
}

function handleBackSpace(player) {
  const backSteps = getBackSteps(player.position);
  if (!backSteps) {
    handleLanding(player);
    return;
  }
  state.currentEvent = null;
  addLog(`${player.name} - 되돌림: ${backSteps}칸 이동`, { player });
  setPhase("event");
  updateUI();
  showResultModal({
    title: "되돌림",
    story: `예상치 못한 변수로 ${backSteps}칸 뒤로 물러난다.`,
    sections: [{ title: player.name, effects: {} }],
    autoClose: isCpuPlayer(player)
  });
  pendingResultAction = () => {
    animateMove(player, -backSteps, () => {
      updateUI();
      handleLanding(player);
    });
  };
}

function handleRestSpace(player) {
  player.skipTurns = (player.skipTurns || 0) + 1;
  state.currentEvent = null;
  addLog(`${player.name} - 휴식: 다음 턴 쉼`, { player });
  setPhase("event");
  updateUI();
  showResultModal({
    title: "휴식",
    story: "잠시 속도를 늦추며 다음 턴을 쉬어간다.",
    sections: [{ title: player.name, effects: {} }],
    autoClose: isCpuPlayer(player)
  });
  pendingResultAction = () => {
    endTurn();
  };
}

function handleLanding(player) {
  const spaceType = state.boardSpaces[player.position]?.type || "daily";
  if (spaceType === "marriage" && !player.marriageResolved) {
    showMarriageEvent();
    return;
  }
  if (spaceType === "job" && !player.jobId) {
    showJobEvent();
    return;
  }
  if (spaceType === "back") {
    handleBackSpace(player);
    return;
  }
  if (spaceType === "rest") {
    handleRestSpace(player);
    return;
  }
  const event = drawEvent(player);
  state.currentEvent = event;
  showEvent(event);
}

function getEventStory(eventId, choiceIndex, outcome) {
  const stories = window.GARDEN_EVENT_STORIES || {};
  const entries = stories[eventId];
  const entry = Array.isArray(entries) ? entries[choiceIndex] : null;
  if (!entry) return DEFAULT_EVENT_STORY;
  if (typeof entry === "string") return entry;
  if (outcome?.hadChance) {
    if (outcome.success && entry.success) return entry.success;
    if (!outcome.success && entry.fail) return entry.fail;
  }
  return entry.story || entry.success || entry.fail || DEFAULT_EVENT_STORY;
}

function getMarriageStory(spouseId) {
  const spouse = getSpouseById(spouseId);
  if (!spouse) return DEFAULT_EVENT_STORY;
  const traits = spouse.traits
    .map((traitId) => SPOUSE_TRAITS[traitId]?.label)
    .filter(Boolean)
    .join(", ");
  return `${spouse.name}과(와) 함께 새로운 약속을 시작했다. 장점: ${traits || "없음"}`;
}

function showEvent(event) {
  setPhase("event");
  elements.eventTitle.textContent = event.title;
  elements.eventCategory.textContent = CATEGORY_LABELS[event.category] || "";
  elements.eventDescription.textContent = event.description;
  elements.eventChoices.innerHTML = "";
  elements.eventResult.classList.add("hidden");
  elements.eventStory.textContent = "";
  elements.eventEffects.innerHTML = "";
  elements.eventContinue.classList.add("hidden");
  event.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "event-choice";
    button.textContent = choice.text;
    button.addEventListener("click", () => handleChoiceSelect(index));
    if (isCpuPlayer(currentPlayer())) {
      button.disabled = true;
    }
    elements.eventChoices.appendChild(button);
  });
  elements.eventModal.classList.add("show");
  elements.eventModal.setAttribute("aria-hidden", "false");
  scheduleCpuEventChoice();
}

function handleChoiceSelect(choiceIndex) {
  if (!state.currentEvent) return;
  const player = currentPlayer();
  const choice = state.currentEvent.choices[choiceIndex];
  const isMarriageEvent = state.currentEvent.id === "marriage";
  let spouse = null;
  if (isMarriageEvent && choice?.spouseId) {
    spouse = setSpouseForPlayer(player, choice.spouseId);
  }
  const outcome = resolveChoice(
    player,
    choice,
    `${state.currentEvent?.id || "event"}:${choiceIndex}`,
    state.currentEvent
  );
  const bonus = applyCharacterBonus(player, state.currentEvent, outcome);
  const story = isMarriageEvent ? getMarriageStory(choice.spouseId) : getEventStory(state.currentEvent.id, choiceIndex, outcome);
  const baseEffects = mergeEffectObjects(outcome.applied, outcome.extraEffects);
  const sections = [{ title: player.name, effects: baseEffects }];
  if (hasAnyEffect(outcome.characterEffects)) {
    sections.push({ title: "캐릭터 성향", effects: outcome.characterEffects });
  }
  if (hasAnyEffect(bonus)) {
    sections.push({ title: "캐릭터 보너스", effects: bonus });
  }
  const logEffects = mergeEffectObjects(mergeEffectObjects(baseEffects, outcome.characterEffects), bonus);
  elements.eventStory.textContent = story;
  renderEffectCounters(elements.eventEffects, sections);
  elements.eventResult.classList.remove("hidden");
  if (isCpuPlayer(player)) {
    elements.eventContinue.classList.add("hidden");
  } else {
    elements.eventContinue.classList.remove("hidden");
  }
  if (eventContinueTimer) {
    window.clearTimeout(eventContinueTimer);
    eventContinueTimer = null;
  }
  Array.from(elements.eventChoices.children).forEach((button) => {
    button.disabled = true;
  });
  if (isMarriageEvent) {
    addLog(`${player.name} - 결혼: ${spouse ? spouse.name : choice.text}`, { player });
  } else {
    addLog(`${player.name} - ${state.currentEvent.title}: ${choice.text}`, { effects: logEffects, player });
  }
  updateUI();
  if (isCpuPlayer(player)) {
    eventContinueTimer = window.setTimeout(() => {
      if (state.phase === "event" && isCpuPlayer(currentPlayer())) {
        elements.eventContinue.click();
      }
    }, RESULT_MODAL_MS + CPU_DELAYS.continue);
  }
}

function resolveStatEffects(player, rule, fallback) {
  if (!rule || !rule.stat || !Array.isArray(rule.ranges)) {
    return fallback || {};
  }
  const statValue = player?.[rule.stat] ?? 0;
  const match = rule.ranges.find((range) => {
    const min = Number.isFinite(range.min) ? range.min : -Infinity;
    const max = Number.isFinite(range.max) ? range.max : Infinity;
    return statValue >= min && statValue <= max;
  });
  if (match?.effects) return match.effects;
  return rule.defaultEffects || fallback || {};
}

function adjustChanceForCharacter(player, chance) {
  if (typeof chance !== "number") return chance;
  if (player?.character?.id === "adventurer") {
    return clamp(chance + 0.1, 0.05, 0.95);
  }
  return chance;
}

function buildMitigationEffects(baseEffects, keys, factor, minValue) {
  const bonus = {};
  if (!baseEffects) return bonus;
  keys.forEach((key) => {
    const value = baseEffects[key];
    if (typeof value === "number" && value < 0) {
      const amount = Math.max(minValue, Math.abs(value) * factor);
      bonus[key] = (bonus[key] || 0) + amount;
    }
  });
  return bonus;
}

function isSocialContext(context) {
  if (!context) return false;
  if (context.type === "event") {
    return SOCIAL_EVENT_CATEGORIES.has(context.event?.category);
  }
  if (context.type === "action") {
    return SOCIAL_ACTION_IDS.has(context.action?.id);
  }
  return false;
}

function buildCharacterModifierEffects(player, context, baseEffects) {
  if (!player || !baseEffects) return {};
  const effects = {};
  if (player.character.id === "saver") {
    mergeEffectObjects(effects, buildMitigationEffects(baseEffects, ["money"], 0.4, 0.5));
  }
  if (player.character.id === "healer") {
    mergeEffectObjects(effects, buildMitigationEffects(baseEffects, ["health", "happiness"], 0.4, 0.5));
  }
  if (player.character.id === "socialite" && isSocialContext(context)) {
    effects.happiness = (effects.happiness || 0) + SOCIALITE_BONUS / SCORE_SCALE;
  }
  return effects;
}

function applyCharacterModifiers(player, context, baseEffects, tier, contextKey) {
  const modifiers = buildCharacterModifierEffects(player, context, baseEffects);
  if (!hasAnyEffect(modifiers)) return {};
  if (player.character.id === "socialite" && isSocialContext(context)) {
    return applyEffects(player, modifiers);
  }
  const caps = buildEffectCaps(modifiers, `${contextKey}:character`);
  return applyEffects(player, modifiers, { randomize: true, tier, caps });
}

function resolveChoiceEffects(player, choice, outcomeType) {
  if (!choice) return {};
  if (outcomeType === "success") {
    return resolveStatEffects(player, choice.successEffectsByStat, choice.successEffects);
  }
  if (outcomeType === "fail") {
    return resolveStatEffects(player, choice.failEffectsByStat, choice.failEffects);
  }
  return resolveStatEffects(player, choice.effectsByStat, choice.effects);
}

function resolveChoice(player, choice, contextKey, event) {
  const tier = rollOutcomeTier();
  const outcome = {
    applied: {},
    hadChance: false,
    success: null,
    notes: [],
    tier,
    extraEffects: {},
    characterEffects: {}
  };
  const context = { type: "event", event, choice };
  let baseEffects = {};
  if (choice.chance !== undefined) {
    outcome.hadChance = true;
    const chance = adjustChanceForCharacter(player, choice.chance);
    const roll = Math.random();
    if (roll <= chance) {
      outcome.success = true;
      baseEffects = resolveChoiceEffects(player, choice, "success");
      const caps = buildEffectCaps(baseEffects, `${contextKey || "choice"}:success`);
      outcome.applied = applyEffects(player, baseEffects, { randomize: true, tier, caps });
    } else {
      outcome.success = false;
      baseEffects = resolveChoiceEffects(player, choice, "fail");
      const caps = buildEffectCaps(baseEffects, `${contextKey || "choice"}:fail`);
      outcome.applied = applyEffects(player, baseEffects, { randomize: true, tier, caps });
    }
  } else {
    baseEffects = resolveChoiceEffects(player, choice, "base");
    const caps = buildEffectCaps(baseEffects, `${contextKey || "choice"}:base`);
    outcome.applied = applyEffects(player, baseEffects, { randomize: true, tier, caps });
  }
  outcome.characterEffects = applyCharacterModifiers(player, context, baseEffects, tier, contextKey || "choice");

  if (choice.addFlag) {
    addFlag(player, choice.addFlag);
  }
  if (choice.removeFlag) {
    removeFlag(player, choice.removeFlag);
  }
  if (choice.nextEventId) {
    player.pendingEventId = choice.nextEventId;
    outcome.notes.push("후속 이벤트 예약");
  }
  if (choice.projectPoints) {
    state.projectPoints += choice.projectPoints;
    outcome.extraEffects.project = choice.projectPoints;
    outcome.notes.push(`프로젝트 +${choice.projectPoints}`);
    checkProjectBonus();
  }
  if (choice.diceBonus) {
    player.diceBonus += choice.diceBonus;
    outcome.extraEffects.dice = choice.diceBonus;
    outcome.notes.push(`다음 주사위 +${choice.diceBonus}`);
  }
  return outcome;
}

function applyCharacterBonus(player, event, outcome) {
  let bonus = {};
  const tier = outcome?.tier;
  if (player.character.id === "planner" && (event.category === "growth" || event.category === "study")) {
    const effects = { growth: 1 };
    const caps = buildEffectCaps(effects, `bonus:${event?.id || "event"}:planner`);
    bonus = applyEffects(player, effects, { randomize: true, tier, caps });
  }
  if (
    player.character.id === "connector" &&
    (event.category === "family" || event.category === "friend" || event.category === "community" || event.category === "romance")
  ) {
    const effects = { reputation: 1 };
    const caps = buildEffectCaps(effects, `bonus:${event?.id || "event"}:connector`);
    bonus = mergeEffects(bonus, applyEffects(player, effects, { randomize: true, tier, caps }));
  }
  if (player.character.id === "challenger" && outcome?.hadChance) {
    if (outcome.success) {
      const effects = { money: 1 };
      const caps = buildEffectCaps(effects, `bonus:${event?.id || "event"}:challenger:success`);
      bonus = mergeEffects(bonus, applyEffects(player, effects, { randomize: true, tier, caps }));
    } else {
      const effects = { happiness: -1 };
      const caps = buildEffectCaps(effects, `bonus:${event?.id || "event"}:challenger:fail`);
      bonus = mergeEffects(bonus, applyEffects(player, effects, { randomize: true, tier, caps }));
    }
  }
  return bonus;
}

function handleEventContinue() {
  if (eventContinueTimer) {
    window.clearTimeout(eventContinueTimer);
    eventContinueTimer = null;
  }
  elements.eventModal.classList.remove("show");
  elements.eventModal.setAttribute("aria-hidden", "true");
  state.currentEvent = null;
  setPhase("action");
  updateUI();
  scheduleCpuAction();
}

function showResultModal({ title, story, sections, autoClose, variant } = {}) {
  if (!elements.resultModal) return;
  if (resultContinueTimer) {
    window.clearTimeout(resultContinueTimer);
    resultContinueTimer = null;
  }
  if (resultAutoTimer) {
    window.clearTimeout(resultAutoTimer);
    resultAutoTimer = null;
  }
  elements.resultTitle.textContent = title || "결과";
  elements.resultStory.textContent = story || "";
  renderEffectCounters(elements.resultEffects, sections || []);
  if (elements.resultCard) {
    elements.resultCard.classList.remove("alert", "system");
    if (variant) {
      elements.resultCard.classList.add(variant);
    }
  }
  if (autoClose) {
    elements.resultContinue.classList.add("hidden");
  } else {
    elements.resultContinue.classList.remove("hidden");
  }
  elements.resultModal.classList.add("show");
  elements.resultModal.setAttribute("aria-hidden", "false");
  clearModalFocus(elements.actionModal);
  elements.actionModal.classList.remove("show");
  elements.actionModal.setAttribute("aria-hidden", "true");
  if (autoClose) {
    resultAutoTimer = window.setTimeout(() => {
      if (elements.resultModal.classList.contains("show")) {
        elements.resultContinue.click();
      }
    }, RESULT_MODAL_MS + CPU_DELAYS.continue);
  }
}

function showSystemModal({ title, story, effects, sections, variant, autoClose } = {}) {
  const resolvedSections = sections || (effects ? [{ title: "효과", effects }] : []);
  showResultModal({ title, story, sections: resolvedSections, autoClose, variant });
}

function handleResultContinue() {
  if (resultContinueTimer) {
    window.clearTimeout(resultContinueTimer);
    resultContinueTimer = null;
  }
  if (resultAutoTimer) {
    window.clearTimeout(resultAutoTimer);
    resultAutoTimer = null;
  }
  elements.resultModal.classList.remove("show");
  elements.resultModal.setAttribute("aria-hidden", "true");
  if (pendingResultAction) {
    const next = pendingResultAction;
    pendingResultAction = null;
    next();
    return;
  }
  if (state.phase === "action" && !isCpuPlayer(currentPlayer())) {
    if (elements.actionModal && !elements.actionModal.classList.contains("show")) {
      elements.actionModal.classList.add("show");
      elements.actionModal.setAttribute("aria-hidden", "false");
      syncActionCardSizes();
    }
  }
}

function handleActionClick(event) {
  const button = event.target.closest(".action-button");
  if (!button || state.phase !== "action") return;
  if (isCpuPlayer(currentPlayer())) return;
  if (button.disabled) return;
  if (button.dataset.resolved === "true") {
    endTurn();
    return;
  }
  const action = ACTIONS.find((item) => item.id === button.dataset.actionId);
  if (!action) return;
  if (action.special === "trade") {
    openTradeModal();
    return;
  }
  elements.actionHelper.classList.add("hidden");
  if (action.special === "help") {
    prepareHelpAction(action, button);
  } else {
    const outcome = resolveActionOutcome(action);
    renderActionOutcomeOnCard(button, outcome);
    lockActionButtons(button);
  }
}

function prepareHelpAction(action, button) {
  elements.actionHelper.classList.remove("hidden");
  elements.actionHelper.dataset.actionId = action.id;
  elements.actionHelper.dataset.actionButton = button?.dataset.actionId || "";
  elements.helpTarget.innerHTML = "";
  state.players.forEach((player, index) => {
    if (index === state.currentPlayerIndex) return;
    const option = document.createElement("option");
    option.value = player.id;
    option.textContent = player.name;
    elements.helpTarget.appendChild(option);
  });
}

function confirmHelpAction() {
  if (state.phase !== "action") return;
  const action = ACTIONS.find((item) => item.id === elements.actionHelper.dataset.actionId);
  if (!action) return;
  const targetId = elements.helpTarget.value;
  const target = state.players.find((player) => player.id === targetId);
  if (!target) return;
  elements.actionHelper.classList.add("hidden");
  const button = findActionButton(elements.actionHelper.dataset.actionButton || action.id);
  const outcome = resolveActionOutcome(action, target);
  renderActionOutcomeOnCard(button, outcome);
  lockActionButtons(button);
}

function findActionButton(actionId) {
  if (!elements.actionButtons || !actionId) return null;
  return elements.actionButtons.querySelector(`[data-action-id="${actionId}"]`);
}

function renderActionOutcomeOnCard(button, outcome) {
  if (!button || !outcome) return;
  
  const front = button.querySelector(".action-card-front");
  const back = button.querySelector(".action-card-back");
  
  if (!front || !back) return;

  if (outcome.target && outcome.targetApplied) {
    button.classList.add("has-target");
  } else {
    button.classList.remove("has-target");
  }
  
  // 뒷면 내용 업데이트
  const story = back.querySelector(".action-story");
  if (story) {
    story.textContent = outcome.story || DEFAULT_ACTION_STORY;
  }
  const title = back.querySelector(".action-effect-title");
  if (title) {
    const label = outcome.outcomeLabel || outcome.tier?.label || "";
    title.textContent = label ? `결과 · ${label}` : "결과";
  }
  const effects = back.querySelector(".action-effect-list");
  if (effects) {
    effects.innerHTML = "";
    effects.classList.add("action-results");
    renderEffectCounters(effects, outcome.sections || []);
  }
  
  // 앞면 숨기고 뒷면 표시
  front.classList.add("hidden");
  back.classList.remove("hidden");
  button.classList.add("is-flipped");
  button.setAttribute("aria-pressed", "true");
}

function lockActionButtons(selectedButton) {
  if (!elements.actionButtons) return;
  elements.actionButtons.querySelectorAll(".action-button").forEach((button) => {
    if (button === selectedButton) {
      button.dataset.resolved = "true";
      button.disabled = false;
      button.classList.add("resolved");
      return;
    }
    button.disabled = true;
    button.dataset.resolved = "false";
    button.classList.remove("resolved");
  });
}

function resolveActionOutcome(action, target) {
  const player = currentPlayer();
  const tier = rollOutcomeTier();
  let applied = {};
  let outcomeLabel = "";
  const contextKey = `action:${action.id}`;
  const context = { type: "action", action };
  let baseEffects = {};
  if (action.chance !== undefined) {
    const chance = adjustChanceForCharacter(player, action.chance);
    const roll = Math.random();
    if (roll <= chance) {
      baseEffects = action.successEffects || {};
      const caps = buildEffectCaps(baseEffects, `${contextKey}:success`);
      applied = applyEffects(player, baseEffects, { randomize: true, tier, caps });
      outcomeLabel = "성공";
    } else {
      baseEffects = action.failEffects || {};
      const caps = buildEffectCaps(baseEffects, `${contextKey}:fail`);
      applied = applyEffects(player, baseEffects, { randomize: true, tier, caps });
      outcomeLabel = "실패";
    }
  } else {
    baseEffects = action.effects || {};
    const caps = buildEffectCaps(baseEffects, `${contextKey}:base`);
    applied = applyEffects(player, baseEffects, { randomize: true, tier, caps });
  }

  let targetApplied = null;
  if (action.special === "help" && target) {
    const caps = buildEffectCaps(action.targetEffects, `${contextKey}:target`);
    targetApplied = applyEffects(target, action.targetEffects, { randomize: true, tier, caps });
  }

  let projectGain = 0;
  if (action.special === "project") {
    projectGain = 1;
    state.projectPoints += projectGain;
    checkProjectBonus();
  }

  const characterEffects = applyCharacterModifiers(player, context, baseEffects, tier, contextKey);

  const logEffects = mergeEffectObjects(applied, characterEffects);
  if (action.special === "project" && projectGain) {
    logEffects.project = (logEffects.project || 0) + projectGain;
  }

  if (action.special === "help" && target) {
    addLog(`${player.name} - 도움 주기: ${target.name}`, {
      effects: logEffects,
      target,
      targetEffects: targetApplied,
      player
    });
  } else {
    const outcomeTag = outcomeLabel ? `(${outcomeLabel})` : "";
    addLog(`${player.name} - 액션: ${action.label}${outcomeTag}`, {
      effects: logEffects,
      player
    });
  }

  updateUI();

  const sections = [{ title: player.name, effects: applied }];
  if (hasAnyEffect(characterEffects)) {
    sections.push({ title: "캐릭터 성향", effects: characterEffects });
  }
  if (action.special === "help" && target) {
    sections.push({ title: target.name, effects: targetApplied });
  }
  if (action.special === "project" && projectGain) {
    sections.push({ title: "도시 프로젝트", effects: { project: projectGain } });
  }

  return {
    action,
    player,
    target,
    applied,
    targetApplied,
    projectGain,
    characterEffects,
    outcomeLabel,
    tier,
    story: getActionOutcomeStory(action, tier),
    sections
  };
}

function showActionEffects(action, applied, extra = {}) {
  if (!elements.effectLayer) return;
  const burst = document.createElement("div");
  burst.className = "effect-burst";

  const title = document.createElement("div");
  title.className = "effect-title";
  title.textContent = extra.outcomeLabel ? `${action.label} · ${extra.outcomeLabel}` : action.label;
  burst.appendChild(title);

  const lines = document.createElement("div");
  lines.className = "effect-lines";
  lines.appendChild(createEffectLine("나", applied));

  if (extra.target && extra.targetApplied) {
    lines.appendChild(createEffectLine(extra.target.name, extra.targetApplied));
  }

  if (extra.projectGain) {
    lines.appendChild(createEffectLine("도시 프로젝트", { project: extra.projectGain }));
  }

  burst.appendChild(lines);
  elements.effectLayer.appendChild(burst);
  burst.addEventListener("animationend", () => {
    burst.remove();
  });
}

function createEffectLine(label, effects) {
  const line = document.createElement("div");
  line.className = "effect-line";

  const role = document.createElement("span");
  role.className = "effect-role";
  role.textContent = label;
  line.appendChild(role);

  const chips = document.createElement("div");
  chips.className = "effect-chips";
  const entries = Object.entries(effects || {}).filter(([, value]) => value);
  if (!entries.length) {
    chips.appendChild(createEffectChip("empty", null, "변화 없음"));
  } else {
    entries.forEach(([key, value]) => {
      chips.appendChild(createEffectChip(key, value));
    });
  }
  line.appendChild(chips);
  return line;
}

function createEffectChip(key, value, labelOverride) {
  const chip = document.createElement("span");
  const meta = EFFECT_META[key] || { label: labelOverride || key, className: "empty" };
  chip.className = `effect-chip ${meta.className}`;
  const label = labelOverride || meta.label || key;
  if (value === null || value === undefined) {
    chip.textContent = label;
  } else if (RESOURCE_KEYS.includes(key)) {
    chip.textContent = `${label} ${formatSignedResourceValue(key, value)}`;
  } else {
    chip.textContent = `${label} ${value > 0 ? "+" : ""}${value}`;
  }
  return chip;
}

function renderEffectCounters(container, sections) {
  if (!container) return;
  container.innerHTML = "";
  if (!sections || !sections.length) return;
  sections.forEach((section) => {
    const block = document.createElement("div");
    block.className = "result-section";

    if (section.title) {
      const title = document.createElement("div");
      title.className = "result-section-title";
      title.textContent = section.title;
      block.appendChild(title);
    }

    const chips = document.createElement("div");
    chips.className = "result-chips";
    const entries = Object.entries(section.effects || {}).filter(([, value]) => value);
    if (!entries.length) {
      chips.appendChild(createResultChip("empty", null, "변화 없음"));
    } else {
      entries.forEach(([key, value]) => {
        chips.appendChild(createResultChip(key, value));
      });
    }
    block.appendChild(chips);
    container.appendChild(block);
  });
}

function createResultChip(key, value, labelOverride) {
  const chip = document.createElement("div");
  const meta = EFFECT_META[key] || { label: labelOverride || key, className: "empty" };
  chip.className = `result-chip ${meta.className}`;

  const label = document.createElement("div");
  label.className = "result-label";
  label.textContent = labelOverride || meta.label || key;
  chip.appendChild(label);

  const result = document.createElement("div");
  result.className = "result-value";
  if (value === null || value === undefined) {
    result.textContent = "-";
  } else {
    animateCount(result, key, value);
  }
  chip.appendChild(result);
  return chip;
}

function animateCount(element, key, value) {
  const target = Math.round(value);
  const absolute = Math.abs(target);
  const start = performance.now();

  const step = (now) => {
    const progress = Math.min(1, (now - start) / COUNT_ANIMATION_MS);
    const current = Math.round(absolute * progress);
    const signed = target < 0 ? -current : current;
    element.textContent = formatEffectValue(key, signed);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}

function applyBalancerBonus(player) {
  if (player.character.id !== "balancer") return {};
  let minValue = Infinity;
  STAT_KEYS.forEach((key) => {
    minValue = Math.min(minValue, player[key]);
  });
  if (!Number.isFinite(minValue)) return {};
  const bonus = {};
  const amount = BALANCER_BONUS / SCORE_SCALE;
  STAT_KEYS.forEach((key) => {
    if (player[key] === minValue) {
      bonus[key] = (bonus[key] || 0) + amount;
    }
  });
  return hasAnyEffect(bonus) ? applyEffects(player, bonus) : {};
}

function applyTradeCharacterBonus(player) {
  if (!player?.character) return {};
  const bonus = {};
  if (player.character.id === "challenger") {
    bonus.growth = CHALLENGER_TRADE_BONUS / SCORE_SCALE;
  } else if (player.character.id === "adventurer") {
    bonus.happiness = ADVENTURER_TRADE_BONUS / SCORE_SCALE;
  }
  return hasAnyEffect(bonus) ? applyEffects(player, bonus) : {};
}

function endTurn() {
  if (allPlayersFinished()) {
    endGame();
    return;
  }
  const player = currentPlayer();
  const advanceTurn = () => {
    const nextIndex = nextActivePlayerIndex();
    const isNewRound = nextIndex <= state.currentPlayerIndex;
    if (isNewRound) {
      state.totalTurns += 1;
      updateMarketPrices();
    }
    state.currentPlayerIndex = nextIndex;
    beginTurn();
  };
  if (!player || player.finished) {
    advanceTurn();
    return;
  }
  const balancerApplied = applyBalancerBonus(player);
  if (hasAnyEffect(balancerApplied)) {
    addLog(`${player.name} - 균형가 보너스 적용`, { effects: balancerApplied, player });
    updateUI();
    showSystemModal({
      title: "균형가 보너스",
      story: "균형가의 특성으로 가장 낮은 지표가 보강됐다.",
      effects: balancerApplied,
      variant: "system",
      autoClose: isCpuPlayer(player)
    });
    pendingResultAction = () => {
      advanceTurn();
    };
    return;
  }
  advanceTurn();
}

function handleFinish(player) {
  if (player.finished) return;
  player.finished = true;
  player.finishRank = state.finishOrder.length + 1;
  state.finishOrder.push(player.id);
  const rewardEffects = buildFinishRewardEffects(player.finishRank);
  const applied = applyEffects(player, rewardEffects);
  addLog(`${player.name} 결승 도착! ${player.finishRank}등 보상 지급`, { effects: applied, player });
  showActionEffects(
    { label: "결승 보상" },
    applied,
    { outcomeLabel: `${player.finishRank}등` }
  );
  showSystemModal({
    title: "결승 보상",
    story: `${player.name}이(가) 결승에 도착해 ${player.finishRank}등 보상을 받았다.`,
    sections: [{ title: player.name, effects: applied }],
    variant: "system",
    autoClose: isCpuPlayer(player)
  });
}

function buildFinishRewardEffects(rank) {
  const baseReward = FINISH_REWARDS[rank - 1] || FINISH_REWARDS[FINISH_REWARDS.length - 1];
  const effects = {};
  RESOURCE_KEYS.forEach((key) => {
    effects[key] = baseReward;
  });
  return effects;
}

function endGame() {
  setPhase("end");
  updateUI();
  renderResults();
  elements.endModal.classList.add("show");
  elements.endModal.setAttribute("aria-hidden", "false");
}

function renderResults() {
  const scores = state.players.map((player) => ({
    player,
    score: calculateScore(player)
  }));
  scores.sort((a, b) => b.score - a.score);
  elements.finalRanking.innerHTML = "";
  scores.forEach((entry) => {
    const item = document.createElement("li");
    item.textContent = `${entry.player.name} · ${formatNumber(entry.score)}점`;
    elements.finalRanking.appendChild(item);
  });

  const titles = {
    money: "부자왕",
    health: "건강왕",
    happiness: "행복왕",
    growth: "성장왕",
    reputation: "인기왕"
  };
  elements.finalTitles.innerHTML = "";
  Object.keys(titles).forEach((key) => {
    const topValue = Math.max(...state.players.map((player) => player[key]));
    const winners = state.players.filter((player) => player[key] === topValue);
    const item = document.createElement("li");
    item.textContent = `${titles[key]}: ${winners.map((player) => player.name).join(", ")}`;
    elements.finalTitles.appendChild(item);
  });

  elements.finalReviews.innerHTML = "";
  state.players.forEach((player) => {
    const card = document.createElement("div");
    card.className = "review-card";
    const title = document.createElement("div");
    title.className = "review-title";
    const review = generateLifeReview(player);
    title.textContent = review.title;
    const text = document.createElement("div");
    text.className = "review-text";
    text.textContent = review.text;
    card.appendChild(title);
    card.appendChild(text);
    elements.finalReviews.appendChild(card);
  });
}

function calculateScore(player) {
  const assetValue = calculateAssetValue(player);
  const sum = RESOURCE_KEYS.reduce((total, key) => total + player[key], 0) + assetValue;
  const minStat = Math.min(...RESOURCE_KEYS.map((key) => player[key]));
  return sum + minStat * 2;
}

function meetsEndingRange(value, min, max) {
  if (Number.isFinite(min) && value < min) return false;
  if (Number.isFinite(max) && value > max) return false;
  return true;
}

const LOG_TAG_PATTERNS = {
  marriage: { label: "결혼", pattern: /결혼/ },
  job: { label: "직업", pattern: /직업|월급/ },
  trade: { label: "투자/매매", pattern: /투자|매입|매도|자산|시장/ },
  project: { label: "도시 프로젝트", pattern: /프로젝트/ },
  help: { label: "도움", pattern: /도움/ },
  tax: { label: "세금", pattern: /세금/ },
  bankruptcy: { label: "파산/지원", pattern: /파산|지원금/ },
  rest: { label: "휴식", pattern: /휴식/ },
  back: { label: "되돌림", pattern: /되돌림/ }
};

function stripPlayerPrefix(text, player) {
  if (!text || !player?.name) return text;
  const prefix = `${player.name} - `;
  return text.startsWith(prefix) ? text.slice(prefix.length) : text;
}

function summarizeStoryLog(player) {
  const logs = Array.isArray(player?.storyLog) ? player.storyLog : [];
  const entries = logs.slice(0, 10);
  const signature = entries.join("|");
  const counts = {};
  entries.forEach((line) => {
    Object.entries(LOG_TAG_PATTERNS).forEach(([key, meta]) => {
      if (meta.pattern.test(line)) {
        counts[key] = (counts[key] || 0) + 1;
      }
    });
  });
  const themes = Object.entries(counts)
    .filter(([, count]) => count > 0)
    .sort((a, b) => b[1] - a[1]);
  const themeKey = themes.length ? themes[0][0] : null;
  const themeLabel = themeKey ? LOG_TAG_PATTERNS[themeKey].label : "잔잔한 일상";
  const summaryLines = entries.slice(0, 3).map((line) => stripPlayerPrefix(line, player));
  const summaryText = summaryLines.length
    ? summaryLines.join(" · ")
    : "크게 소란스럽지 않은 하루들이 차곡차곡 쌓였다.";
  return { signature, themeKey, themeLabel, summaryText, entries };
}

function buildEndingContext(player) {
  const assetValue = calculateAssetValue(player);
  const holdings = getPlayerHoldings(player);
  const holdingsCount = holdings.reduce((sum, entry) => sum + entry.qty, 0);
  const profitHoldings = holdings.filter((entry) => entry.profitRate >= ENDING_PROFIT_THRESHOLD).length;
  const lossHoldings = holdings.filter((entry) => entry.profitRate <= -ENDING_PROFIT_THRESHOLD).length;
  const netWorth = player.money + assetValue;
  const topKey = RESOURCE_KEYS.reduce((best, key) => (player[key] > player[best] ? key : best), RESOURCE_KEYS[0]);
  const lowKey = RESOURCE_KEYS.reduce((worst, key) => (player[key] < player[worst] ? key : worst), RESOURCE_KEYS[0]);
  const minAllStats = Math.min(...STAT_KEYS.map((key) => player[key]));
  const logInfo = summarizeStoryLog(player);
  return {
    assetValue,
    holdings,
    holdingsCount,
    profitHoldings,
    lossHoldings,
    netWorth,
    topKey,
    lowKey,
    minAllStats,
    logSignature: logInfo.signature,
    logTheme: logInfo.themeKey,
    logThemeLabel: logInfo.themeLabel,
    logSummary: logInfo.summaryText
  };
}

function matchesEndingStory(player, entry, context) {
  const cond = entry?.when || {};
  if (cond.finishRank !== undefined && player.finishRank !== cond.finishRank) return false;
  if (cond.hasSpouse !== undefined && Boolean(player.spouseId) !== cond.hasSpouse) return false;
  if (cond.spouseId && player.spouseId !== cond.spouseId) return false;
  if (cond.hadBankruptcy !== undefined && player.hadBankruptcy !== cond.hadBankruptcy) return false;
  if (cond.topKey && context.topKey !== cond.topKey) return false;
  if (cond.lowKey && context.lowKey !== cond.lowKey) return false;

  if (!meetsEndingRange(player.money, cond.minMoney, cond.maxMoney)) return false;
  if (!meetsEndingRange(player.happiness, cond.minHappiness, cond.maxHappiness)) return false;
  if (!meetsEndingRange(player.health, cond.minHealth, cond.maxHealth)) return false;
  if (!meetsEndingRange(player.growth, cond.minGrowth, cond.maxGrowth)) return false;
  if (!meetsEndingRange(player.reputation, cond.minReputation, cond.maxReputation)) return false;
  if (!meetsEndingRange(context.assetValue, cond.minAssetValue, cond.maxAssetValue)) return false;
  if (!meetsEndingRange(context.netWorth, cond.minNetWorth, cond.maxNetWorth)) return false;
  if (!meetsEndingRange(context.holdingsCount, cond.minHoldings, cond.maxHoldings)) return false;
  if (!meetsEndingRange(context.profitHoldings, cond.minProfitHoldings, cond.maxProfitHoldings)) return false;
  if (!meetsEndingRange(context.lossHoldings, cond.minLossHoldings, cond.maxLossHoldings)) return false;
  if (!meetsEndingRange(context.minAllStats, cond.minAllStats, cond.maxAllStats)) return false;
  return true;
}

function pickEndingStory(player, context) {
  const matches = ENDING_STORIES.filter((entry) => matchesEndingStory(player, entry, context));
  if (!matches.length) return DEFAULT_ENDING;
  const seed = hashToUnit(
    `${player.id}:${player.finishRank}:${context.topKey}:${context.lowKey}:${context.logSignature || ""}`
  );
  const index = Math.floor(seed * matches.length);
  return matches[index] || DEFAULT_ENDING;
}

const STAT_NARRATIVE = {
  money: { high: "살림살이가 든든해졌다", low: "주머니 사정이 자주 아쉬웠다" },
  happiness: { high: "웃음이 자주 이어졌다", low: "마음이 쉽게 쓸쓸해졌다" },
  health: { high: "몸이 오래 버텨줬다", low: "몸이 쉽게 지쳤다" },
  growth: { high: "배움이 깊어졌다", low: "배움의 공백이 느껴졌다" },
  reputation: { high: "사람들의 신뢰가 모였다", low: "관계가 조금 더디게 이어졌다" }
};

function generateLifeReview(player) {
  const context = buildEndingContext(player);
  const finishLine = player.finishRank ? `${player.finishRank}등으로 결승에 도착하며` : "끝까지 포기하지 않는 선택으로";
  const assetText = assetSummary(player, context.assetValue);
  const bankruptcyText = player.hadBankruptcy
    ? "파산을 겪어도 다시 일어서는 장면이 있었고, 지원금으로 균형을 되찾았다."
    : "재정 흐름을 안정적으로 관리하며 큰 흔들림 없이 버텨냈다.";
  const statsLine =
    `최종 상태는 돈 ${formatResourceValue("money", player.money)}, ` +
    `행복 ${formatNumber(player.happiness)}, 건강 ${formatNumber(player.health)}, ` +
    `성장 ${formatNumber(player.growth)}, 평판 ${formatNumber(player.reputation)}으로 기록됐다.`;
  const logLine = `이야기 로그에는 ${context.logSummary}처럼 ${context.logThemeLabel}의 결이 선명하게 남았다.`;
  const ending = pickEndingStory(player, context);
  const endingStory = ending?.story || DEFAULT_ENDING.story;
  const endingTitle = ending?.title || DEFAULT_ENDING.title;
  const highlight = STAT_NARRATIVE[context.topKey]?.high || "자신만의 흐름을 만들었다";
  const gap = STAT_NARRATIVE[context.lowKey]?.low || "조금 더 여유를 배워야 했다";
  let review =
    `${player.name}의 이야기는 한 해가 아니라 인생이었다. ` +
    `${finishLine} 자신의 속도를 지켜낸 시간은 관계와 성장, 그리고 일상의 균형을 찾아가는 과정이었다. ` +
    `${highlight}는 흐름이었고, ${gap}은 다음 걸음을 고민하게 했다. ` +
    `${statsLine} ${logLine} ` +
    `${bankruptcyText} ${assetText} ` +
    `${endingStory}`;

  const extras = [
    "작은 선택이 모여 큰 흐름을 만들었다는 점이 특히 인상적이었다.",
    "룰렛의 운과 전략적 판단이 조화를 이뤄 한 편의 이야기가 완성됐다.",
    "가족과 도시를 향한 배려가 결과에 잔잔한 온기를 더했다."
  ];
  let idx = 0;
  while (review.length < 520 && idx < extras.length) {
    review = `${review} ${extras[idx]}`;
    idx += 1;
  }
  if (review.length > 820) {
    review = `${review.slice(0, 820)}…`;
  }
  return { title: endingTitle, text: review };
}

function assetSummary(player, assetValue) {
  const holdings = getPlayerHoldings(player);
  if (!holdings.length) {
    return "자산 거래는 신중하게 접근하며 안정적인 선택을 이어갔다.";
  }
  const summary = holdings
    .map((entry) => `${entry.asset.name} ${entry.qty}개`)
    .slice(0, 3)
    .join(", ");
  return `투자 포트폴리오에서는 ${summary} 등을 보유하며 현재 가치 약 $${formatNumber(assetValue)} 수준을 기록했다.`;
}

function calculateAssetValue(player) {
  return calculateHoldingsValue(player);
}

function renderLog() {
  elements.logList.innerHTML = "";
  state.log.slice(0, 8).forEach((entry) => {
    const item = document.createElement("li");
    item.textContent = entry;
    elements.logList.appendChild(item);
  });
}

function formatLogEffects(effects) {
  if (!effects) return "";
  const parts = [];
  RESOURCE_KEYS.forEach((key) => {
    const value = effects[key];
    if (!value) return;
    parts.push(`${RESOURCE_LABELS[key]} ${formatSignedResourceValue(key, value)}`);
  });
  ["project", "dice"].forEach((key) => {
    const value = effects[key];
    if (!value) return;
    const label = EFFECT_META[key]?.label || key;
    parts.push(`${label} ${formatEffectValue(key, value)}`);
  });
  return parts.join(", ");
}

function buildLogEntry(text, options = {}) {
  const groups = [];
  const main = formatLogEffects(options.effects);
  if (main) {
    groups.push(main);
  }
  const targetText = formatLogEffects(options.targetEffects);
  if (targetText && options.target) {
    groups.push(`${options.target.name} ${targetText}`);
  }
  const extra = formatLogEffects(options.extraEffects);
  if (extra) {
    groups.push(extra);
  }
  if (!groups.length) return text;
  return `${text} [${groups.join(" / ")}]`;
}

function pushStoryLog(player, entry) {
  if (!player) return;
  if (!Array.isArray(player.storyLog)) {
    player.storyLog = [];
  }
  player.storyLog.unshift(entry);
  player.storyLog = player.storyLog.slice(0, 60);
}

function addLog(text, options = {}) {
  const entry = buildLogEntry(text, options);
  state.log.unshift(entry);
  if (options.player) {
    pushStoryLog(options.player, entry);
  }
  if (options.target && options.target !== options.player) {
    pushStoryLog(options.target, entry);
  }
  renderLog();
}

function allPlayersFinished() {
  return state.players.length > 0 && state.players.every((player) => player.finished);
}

function getFinishIndex() {
  return state.boardSpaces.length - 1;
}

function nextActivePlayerIndex() {
  let index = state.currentPlayerIndex;
  for (let i = 0; i < state.players.length; i += 1) {
    index = (index + 1) % state.players.length;
    if (!state.players[index].finished) {
      return index;
    }
  }
  return state.currentPlayerIndex;
}

function getStage(player) {
  const finishIndex = getFinishIndex();
  if (!player || finishIndex <= 0) return "early";
  const ratio = player.position / finishIndex;
  if (ratio < 0.34) return "early";
  if (ratio < 0.67) return "mid";
  return "late";
}

function currentPlayer() {
  return state.players[state.currentPlayerIndex];
}

function getResourceRule(key) {
  return RESOURCE_RULES[key] || { min: 0, max: SCORE_MAX, scale: 1 };
}

function scaleEffectValue(key, value) {
  const rule = getResourceRule(key);
  return value * rule.scale;
}

function resourceMax(key) {
  return getResourceRule(key).max;
}

function formatNumber(value) {
  return Math.abs(value).toLocaleString("ko-KR");
}

function formatPercent(value) {
  const safeValue = Number.isFinite(value) ? value : 0;
  const rounded = Math.round(safeValue * 10) / 10;
  const sign = rounded > 0 ? "+" : rounded < 0 ? "" : "";
  return `${sign}${rounded.toFixed(1)}%`;
}

function formatResourceValue(key, value) {
  const base = formatNumber(value);
  return key === "money" ? `$${base}` : base;
}

function formatSignedResourceValue(key, value) {
  const sign = value > 0 ? "+" : value < 0 ? "-" : "";
  return `${sign}${formatResourceValue(key, value)}`;
}

function formatEffectValue(key, value) {
  if (RESOURCE_KEYS.includes(key)) {
    return formatSignedResourceValue(key, value);
  }
  const sign = value > 0 ? "+" : value < 0 ? "-" : "";
  return `${sign}${formatNumber(value)}`;
}

function getStatLevelInfo(value) {
  const safeValue = Math.max(0, value || 0);
  let min = 0;
  for (let i = 0; i < STAT_LEVELS.length; i += 1) {
    const entry = STAT_LEVELS[i];
    const max = entry.max;
    if (safeValue <= max) {
      if (max === Infinity) {
        return { level: entry.level, min, max, progress: 1 };
      }
      const span = Math.max(1, max - min);
      const progress = clamp((safeValue - min) / span, 0, 1);
      return { level: entry.level, min, max, progress };
    }
    min = max;
  }
  const fallback = STAT_LEVELS[STAT_LEVELS.length - 1];
  return { level: fallback.level, min, max: fallback.max, progress: 1 };
}

function getStatLevel(value) {
  return getStatLevelInfo(value).level;
}

function formatStatDisplay(key, value) {
  if (key === "money") {
    return formatResourceValue(key, value);
  }
  const info = getStatLevelInfo(value);
  return `Lv.${info.level} ${formatNumber(value)}`;
}

function hexToRgb(value) {
  if (!value) return null;
  const trimmed = value.trim();
  if (!trimmed.startsWith("#")) return null;
  let hex = trimmed.slice(1);
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => `${char}${char}`)
      .join("");
  }
  if (hex.length !== 6) return null;
  const r = Number.parseInt(hex.slice(0, 2), 16);
  const g = Number.parseInt(hex.slice(2, 4), 16);
  const b = Number.parseInt(hex.slice(4, 6), 16);
  if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) return null;
  return `${r}, ${g}, ${b}`;
}

function setAccentVars(element, color) {
  if (!element) return;
  const fallback = PLAYER_COLORS[0] || "#f2b572";
  const value = color || fallback;
  element.style.setProperty("--player-accent", value);
  const rgb = hexToRgb(value) || hexToRgb(fallback) || "242, 181, 114";
  element.style.setProperty("--player-accent-rgb", rgb);
}

function hasAnyEffect(effects) {
  return Boolean(effects && Object.values(effects).some((value) => value));
}

function resourceNeedWeight(player, key) {
  const max = resourceMax(key);
  if (!player || !max) return 1;
  let weight = 1 + (max - player[key]) / max;
  if (key === "money" && player.bankrupt) {
    weight += 0.6;
  }
  return weight;
}

function scoreEffectsForPlayer(effects, player) {
  if (!effects) return 0;
  return RESOURCE_KEYS.reduce((total, key) => {
    const value = effects[key] || 0;
    if (!value) return total;
    return total + value * resourceNeedWeight(player, key);
  }, 0);
}

function forceLiquidation(player) {
  if (!player || player.money > 0) return { sold: 0, earned: 0 };
  const holdings = getHoldingsSnapshot(player).sort((a, b) => b.price - a.price);
  if (!holdings.length) return { sold: 0, earned: 0 };
  const rule = getResourceRule("money");
  const items = [];
  let sold = 0;
  let earned = 0;
  holdings.forEach((holding) => {
    let remaining = getHoldingQty(player, holding.assetId);
    let soldQty = 0;
    const forcedPrice = getForcedSalePrice(holding.assetId);
    while (remaining > 0 && player.money <= 0) {
      removeHolding(player, holding.assetId, 1);
      player.money = clamp(player.money + forcedPrice, rule.min, rule.max);
      sold += 1;
      soldQty += 1;
      earned += forcedPrice;
      remaining -= 1;
    }
    if (soldQty > 0) {
      items.push(`${assetName(holding.assetId)} x${soldQty}`);
    }
  });
  if (sold > 0) {
    const detail = items.length ? ` (${items.join(", ")})` : "";
    addLog(`${player.name} 현금 부족으로 자산 강제 정리${detail}`, { effects: { money: earned }, player });
    showSystemModal({
      title: "자산 강제 정리",
      story: "현금이 없어 보유 자산을 20% 할인된 가격으로 정리했다.",
      effects: { money: earned },
      variant: "system",
      autoClose: isCpuPlayer(player)
    });
  }
  return { sold, earned };
}

function applyMoneyDelta(player, amount, options = {}) {
  const rule = getResourceRule("money");
  const before = player.money;
  player.money = clamp(player.money + amount, rule.min, rule.max);
  const actual = player.money - before;
  if (!options.skipBankruptcy && !options.skipLiquidation && player.money <= 0) {
    forceLiquidation(player);
  }
  if (!options.skipBankruptcy && player.money <= 0) {
    triggerBankruptcy(player);
  }
  if (player.bankrupt && player.money >= BANKRUPTCY_EXIT) {
    player.bankrupt = false;
    addLog(`${player.name} 자산 $${formatNumber(BANKRUPTCY_EXIT)} 도달, 지원 종료.`, { player });
  }
  return actual;
}

function triggerBankruptcy(player) {
  if (player.bankrupt) return;
  player.bankrupt = true;
  player.hadBankruptcy = true;
  player.money = 0;
  const happinessBefore = player.happiness;
  const healthBefore = player.health;
  player.happiness = Math.floor(player.happiness * 0.5);
  player.health = Math.floor(player.health * 0.5);
  addLog(`${player.name} 파산! 건강과 행복이 절반으로 감소했다.`, {
    effects: {
      happiness: player.happiness - happinessBefore,
      health: player.health - healthBefore
    },
    player
  });
  showSystemModal({
    title: "파산",
    story: `${player.name}의 현금이 바닥나 파산 상태가 되었다.`,
    effects: { happiness: player.happiness - happinessBefore, health: player.health - healthBefore },
    variant: "alert",
    autoClose: isCpuPlayer(player)
  });
}

function applySubsidy(player) {
  if (!player.bankrupt) return;
  if (player.money >= BANKRUPTCY_EXIT) {
    player.bankrupt = false;
    return;
  }
  const actual = applyMoneyDelta(player, BANKRUPTCY_SUPPORT, { skipBankruptcy: true });
  addLog(`${player.name} 국가 지원금 $${formatNumber(BANKRUPTCY_SUPPORT)} 지급`, {
    effects: { money: actual },
    player
  });
  if (actual) {
    showSystemModal({
      title: "지원금 지급",
      story: `${player.name}에게 국가 지원금이 지급됐다.`,
      effects: { money: actual },
      variant: "alert",
      autoClose: isCpuPlayer(player)
    });
  }
}

function getSpouseById(spouseId) {
  return SPOUSES.find((spouse) => spouse.id === spouseId);
}

function buildSpouseEffects(traits) {
  let perTurn = {};
  let penalties = {};
  const timed = [];
  const traitLabels = [];
  const penaltyLabels = [];
  (traits || []).forEach((traitId) => {
    const trait = SPOUSE_TRAITS[traitId];
    if (!trait) return;
    traitLabels.push(trait.label);
    if (trait.perTurn) {
      perTurn = mergeEffectObjects(perTurn, trait.perTurn);
    }
    if (trait.penalty) {
      penalties = mergeEffectObjects(penalties, trait.penalty);
    }
    if (trait.penaltyLabel) {
      penaltyLabels.push(trait.penaltyLabel);
    }
    if (trait.timed) {
      timed.push({
        label: trait.label,
        remaining: trait.timed.turns,
        every: trait.timed.every || 1,
        effects: trait.timed.effects || {}
      });
    }
  });
  return {
    perTurn,
    penalties,
    timed,
    traitLabels,
    penaltyLabels
  };
}

function setSpouseForPlayer(player, spouseId) {
  if (!player) return null;
  if (!spouseId) {
    player.spouseId = null;
    player.spouseName = null;
    player.spouseTraits = [];
    player.spouseEffects = null;
    player.marriageResolved = true;
    return null;
  }
  const spouse = getSpouseById(spouseId);
  if (!spouse) return null;
  player.spouseId = spouse.id;
  player.spouseName = spouse.name;
  player.spouseTraits = spouse.traits || [];
  player.spouseEffects = buildSpouseEffects(player.spouseTraits);
  player.marriageResolved = true;
  player.marriageTurns = 0;
  return spouse;
}

function setJobForPlayer(player, jobId) {
  if (!player || !jobId) return null;
  const job = JOBS.find((entry) => entry.id === jobId);
  if (!job) return null;
  player.jobId = job.id;
  player.jobName = job.name;
  player.jobSalary = job.salary;
  player.jobEffects = job.effects || null;
  return job;
}

function applySpouseBonus(player) {
  if (!player?.spouseEffects) return;
  player.marriageTurns = (player.marriageTurns || 0) + 1;
  const { perTurn, penalties, timed } = player.spouseEffects;
  const combined = mergeEffectObjects(perTurn || {}, penalties || {});
  let applied = {};
  if (hasAnyEffect(combined)) {
    applied = mergeEffects(applied, applyEffects(player, combined));
  }
  const timedApplied = [];
  if (Array.isArray(timed)) {
    timed.forEach((entry) => {
      if (!entry || entry.remaining <= 0) return;
      if (player.marriageTurns % entry.every !== 0) return;
      const result = applyEffects(player, entry.effects);
      entry.remaining -= 1;
      if (hasAnyEffect(result)) {
        timedApplied.push({ label: entry.label, effects: result });
        applied = mergeEffects(applied, result);
      }
    });
  }
  if (!hasAnyEffect(applied)) return;
  addLog(`${player.name} 결혼 효과 적용`, { effects: applied, player });
  const sections = [{ title: player.name, effects: applied }];
  timedApplied.forEach((entry) => {
    sections.push({ title: `${entry.label} 효과`, effects: entry.effects });
  });
  showSystemModal({
    title: "결혼 효과",
    story: `${player.spouseName || "배우자"}와의 생활이 이번 턴에도 영향을 줬다.`,
    sections,
    variant: "system",
    autoClose: isCpuPlayer(player)
  });
}

function applyJobBonus(player, rollMultiplier = 1) {
  if (!player?.jobId) return null;
  const job = JOBS.find((entry) => entry.id === player.jobId);
  if (!job) return null;
  const multiplier = Number.isFinite(rollMultiplier) ? Math.max(1, Math.round(rollMultiplier)) : 1;
  const salary = job.salary * multiplier;
  const moneyApplied = applyMoneyDelta(player, salary, { skipBankruptcy: true });
  const statApplied = applyEffects(player, job.effects || {});
  const combined = { ...statApplied };
  if (moneyApplied) {
    combined.money = (combined.money || 0) + moneyApplied;
  }
  if (!hasAnyEffect(combined)) return null;
  const labelSuffix = multiplier > 1 ? ` x${multiplier}` : "";
  addLog(`${player.name} - 월급: ${job.name}${labelSuffix}`, { effects: combined, player });
  const actualSalary = Number.isFinite(moneyApplied) ? moneyApplied : salary;
  const multiplierLabel = multiplier > 1 ? `룰렛 ${multiplier}배로 ` : "";
  showSystemModal({
    title: "월급",
    story: `${job.name} 월급이 ${multiplierLabel}${formatResourceValue("money", actualSalary)} 지급됐다.`,
    sections: [{ title: player.name, effects: combined }],
    variant: "system",
    autoClose: isCpuPlayer(player)
  });
  return { job, effects: combined, salary: actualSalary, multiplier };
}

function initMarketPrices() {
  const prices = {};
  ASSETS.forEach((asset) => {
    prices[asset.id] = asset.basePrice;
  });
  return prices;
}

function updateMarketPrices() {
  ASSETS.forEach((asset) => {
    const current = state.marketPrices[asset.id] || asset.basePrice;
    const changeRate = 1 + randomRange(-0.1, 0.1);
    const next = Math.max(500, Math.round((current * changeRate) / 100) * 100);
    state.marketPrices[asset.id] = next;
  });
  updateTradeSummary();
}

function openTradeModal() {
  clearModalFocus(elements.actionModal);
  elements.actionModal.classList.remove("show");
  elements.actionModal.setAttribute("aria-hidden", "true");
  state.tradeCategory = "all";
  renderMarket();
  elements.tradeModal.classList.add("show");
  elements.tradeModal.setAttribute("aria-hidden", "false");
}

function closeTradeModal() {
  clearModalFocus(elements.tradeModal);
  elements.tradeModal.classList.remove("show");
  elements.tradeModal.setAttribute("aria-hidden", "true");
  if (elements.auctionModal) {
    clearModalFocus(elements.auctionModal);
    elements.auctionModal.classList.remove("show");
    elements.auctionModal.setAttribute("aria-hidden", "true");
  }
  const player = currentPlayer();
  addLog(`${player.name} - 투자/매매 종료`, { player });
  endTurn();
}

function handleAssetButtonClick(event) {
  const metaButton = event.target.closest(".player-meta-btn");
  const assetButton = event.target.closest(".asset-button");
  const button = metaButton || assetButton;
  if (!button) return;
  const playerId = button.dataset.playerId;
  const player = state.players.find((item) => item.id === playerId);
  if (!player) return;
  const meta = button.dataset.meta || "asset";
  if (meta === "marriage") {
    openMarriageInfoModal(player);
    return;
  }
  if (meta === "job") {
    openJobInfoModal(player);
    return;
  }
  openAssetModal(player);
}

function openAssetModal(player) {
  renderAssetModal(player);
  elements.assetModal.classList.add("show");
  elements.assetModal.setAttribute("aria-hidden", "false");
}

function closeAssetModal() {
  clearModalFocus(elements.assetModal);
  elements.assetModal.classList.remove("show");
  elements.assetModal.setAttribute("aria-hidden", "true");
}

function openMarriageInfoModal(player) {
  if (!elements.marriageInfoModal) return;
  renderMarriageInfoModal(player);
  elements.marriageInfoModal.classList.add("show");
  elements.marriageInfoModal.setAttribute("aria-hidden", "false");
}

function closeMarriageInfoModal() {
  if (!elements.marriageInfoModal) return;
  clearModalFocus(elements.marriageInfoModal);
  elements.marriageInfoModal.classList.remove("show");
  elements.marriageInfoModal.setAttribute("aria-hidden", "true");
}

function openJobInfoModal(player) {
  if (!elements.jobInfoModal) return;
  renderJobInfoModal(player);
  elements.jobInfoModal.classList.add("show");
  elements.jobInfoModal.setAttribute("aria-hidden", "false");
}

function closeJobInfoModal() {
  if (!elements.jobInfoModal) return;
  clearModalFocus(elements.jobInfoModal);
  elements.jobInfoModal.classList.remove("show");
  elements.jobInfoModal.setAttribute("aria-hidden", "true");
}

function appendInfoSection(container, title, lines) {
  const section = document.createElement("div");
  section.className = "info-section";
  const header = document.createElement("div");
  header.className = "info-section-title";
  header.textContent = title;
  section.appendChild(header);
  const list = document.createElement("div");
  list.className = "info-list";
  const items = Array.isArray(lines) ? lines.filter(Boolean) : [lines].filter(Boolean);
  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "info-item muted";
    empty.textContent = "없음";
    list.appendChild(empty);
  } else {
    items.forEach((line) => {
      const item = document.createElement("div");
      item.className = "info-item";
      item.textContent = line;
      list.appendChild(item);
    });
  }
  section.appendChild(list);
  container.appendChild(section);
}

function renderMarriageInfoModal(player) {
  if (!elements.marriageInfoBody || !elements.marriageInfoTitle) return;
  elements.marriageInfoBody.innerHTML = "";
  const marriageLabel = player.spouseName
    ? `결혼: ${player.spouseName}`
    : player.marriageResolved
    ? "결혼: 안 함"
    : "결혼: 미정";
  elements.marriageInfoTitle.textContent = `${player.name} · ${marriageLabel}`;
  if (!player.marriageResolved) {
    appendInfoSection(elements.marriageInfoBody, "상태", "결혼 이벤트를 기다리는 중이다.");
    return;
  }
  if (!player.spouseId || !player.spouseEffects) {
    appendInfoSection(elements.marriageInfoBody, "상태", "결혼을 선택하지 않았다.");
    return;
  }
  const spouse = getSpouseById(player.spouseId);
  if (spouse) {
    const nameLine = spouse.name;
    appendInfoSection(elements.marriageInfoBody, "배우자", [nameLine, spouse.description].filter(Boolean));
  }
  appendInfoSection(
    elements.marriageInfoBody,
    "장점",
    (player.spouseEffects.traitLabels || []).length
      ? player.spouseEffects.traitLabels
      : "없음"
  );
  appendInfoSection(
    elements.marriageInfoBody,
    "단점",
    (player.spouseEffects.penaltyLabels || []).length
      ? player.spouseEffects.penaltyLabels
      : "없음"
  );
  appendInfoSection(
    elements.marriageInfoBody,
    "매턴 효과",
    formatEffects(player.spouseEffects.perTurn)
  );
  appendInfoSection(
    elements.marriageInfoBody,
    "매턴 핸디캡",
    formatEffects(player.spouseEffects.penalties)
  );
  const timed = Array.isArray(player.spouseEffects.timed) ? player.spouseEffects.timed : [];
  const timedLines = timed
    .filter((entry) => entry && entry.effects)
    .map((entry) => {
      const label = entry.label ? `${entry.label}: ` : "";
      const every = entry.every ? `${entry.every}턴마다` : "매턴";
      const remaining = Number.isFinite(entry.remaining) ? `남은 ${entry.remaining}회` : "";
      const suffix = [every, remaining].filter(Boolean).join(", ");
      return `${label}${formatEffects(entry.effects)} (${suffix})`;
    });
  appendInfoSection(elements.marriageInfoBody, "특별 효과", timedLines.length ? timedLines : "없음");
}

function renderJobInfoModal(player) {
  if (!elements.jobInfoBody || !elements.jobInfoTitle) return;
  elements.jobInfoBody.innerHTML = "";
  const jobLabel = player.jobName ? `직업: ${player.jobName}` : "직업: 미정";
  elements.jobInfoTitle.textContent = `${player.name} · ${jobLabel}`;
  if (!player.jobId) {
    appendInfoSection(elements.jobInfoBody, "상태", "직업 선택을 기다리는 중이다.");
    return;
  }
  const job = JOBS.find((entry) => entry.id === player.jobId) || {
    name: player.jobName,
    salary: player.jobSalary,
    effects: player.jobEffects
  };
  appendInfoSection(elements.jobInfoBody, "직업", job.name || "정보 없음");
  const requirement = formatJobRequirement(job);
  if (requirement) {
    appendInfoSection(elements.jobInfoBody, "선택 조건", requirement);
  }
  appendInfoSection(
    elements.jobInfoBody,
    "월급",
    `기본 ${formatResourceValue("money", job.salary || 0)} (룰렛 배수 적용)`
  );
  appendInfoSection(
    elements.jobInfoBody,
    "매턴 효과",
    formatEffects(job.effects)
  );
}

function renderAssetModal(player) {
  if (!elements.assetList || !elements.assetTitle) return;
  elements.assetTitle.textContent = `${player.name} · 보유 자산`;
  elements.assetList.innerHTML = "";
  const holdings = getPlayerHoldings(player);
  if (!holdings.length) {
    const empty = document.createElement("div");
    empty.className = "asset-empty";
    empty.textContent = "자산 없음";
    elements.assetList.appendChild(empty);
    return;
  }
  const list = document.createElement("div");
  list.className = "asset-list";
  holdings.forEach((entry) => {
    const item = document.createElement("div");
    item.className = "asset-item";
    const info = document.createElement("div");
    info.className = "asset-info";
    const name = document.createElement("div");
    name.className = "asset-name";
    name.textContent = `${entry.asset.name} x${entry.qty}`;
    const price = entry.price;
    const avgCost = entry.avgCost;
    const profitRate = Number.isFinite(entry.profitRate) ? entry.profitRate : 0;
    const metaLine = document.createElement("div");
    metaLine.className = "asset-meta";
    metaLine.textContent = `매입가 $${formatNumber(Math.round(avgCost))} · 수익률 ${formatPercent(profitRate)}`;
    const priceLine = document.createElement("div");
    priceLine.className = "asset-price";
    priceLine.textContent = `시세 $${formatNumber(price)}`;
    info.appendChild(name);
    info.appendChild(metaLine);
    item.appendChild(info);
    item.appendChild(priceLine);
    list.appendChild(item);
  });
  elements.assetList.appendChild(list);
}

function updateTradeTabs() {
  if (!elements.tradeTabs) return;
  const buttons = elements.tradeTabs.querySelectorAll("button[data-category]");
  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.category === state.tradeCategory);
  });
}

function handleTradeTabClick(event) {
  const button = event.target.closest("button");
  if (!button || !button.dataset.category) return;
  state.tradeCategory = button.dataset.category;
  updateTradeTabs();
  renderMarket();
}

function renderMarket() {
  if (!elements.tradeMarket) return;
  const player = currentPlayer();
  elements.tradeMarket.innerHTML = "";
  updateTradeTabs();
  const visibleAssets =
    state.tradeCategory === "all"
      ? ASSETS
      : ASSETS.filter((asset) => asset.category === state.tradeCategory);
  visibleAssets.forEach((asset) => {
    const row = document.createElement("div");
    row.className = "market-row";
    row.dataset.assetId = asset.id;

    const name = document.createElement("div");
    name.className = "market-name";
    name.textContent = asset.name;

    const meta = document.createElement("div");
    meta.className = "market-meta";
    const currentPrice = getMarketPrice(asset.id);
    const price = document.createElement("div");
    price.textContent = `현재가 $${formatNumber(Math.round(currentPrice))}`;
    const owned = document.createElement("div");
    const quantity = getHoldingQty(player, asset.id);
    owned.textContent = `보유 ${quantity}개`;
    meta.appendChild(price);
    meta.appendChild(owned);
    if (quantity > 0) {
      const avgCost = getHoldingAvgCost(player, asset.id);
      const safeCost = avgCost > 0 ? avgCost : currentPrice;
      const totalCost = safeCost * quantity;
      const currentValue = currentPrice * quantity;
      const profitRate = safeCost > 0 ? ((currentPrice - safeCost) / safeCost) * 100 : 0;
      const holdingMeta = document.createElement("div");
      holdingMeta.className = "market-holding";
      const avgLine = document.createElement("div");
      avgLine.textContent = `매입 평단 $${formatNumber(Math.round(safeCost))}`;
      const totalLine = document.createElement("div");
      totalLine.textContent = `매입 총액 $${formatNumber(Math.round(totalCost))}`;
      const valueLine = document.createElement("div");
      valueLine.textContent = `현재 평가액 $${formatNumber(Math.round(currentValue))}`;
      const profitLine = document.createElement("div");
      profitLine.className = `market-profit ${profitRate >= 0 ? "gain" : "loss"}`;
      profitLine.textContent = `수익률 ${formatPercent(profitRate)}`;
      holdingMeta.appendChild(avgLine);
      holdingMeta.appendChild(totalLine);
      holdingMeta.appendChild(valueLine);
      holdingMeta.appendChild(profitLine);
      meta.appendChild(holdingMeta);
    }

    const actions = document.createElement("div");
    actions.className = "market-actions";

    const marketRow = document.createElement("div");
    marketRow.className = "market-action-row";
    const buyBtn = document.createElement("button");
    buyBtn.className = "market-btn";
    buyBtn.textContent = "매입";
    buyBtn.dataset.action = "buy";
    buyBtn.dataset.assetId = asset.id;
    const sellBtn = document.createElement("button");
    sellBtn.className = "market-btn sell";
    sellBtn.textContent = "시장 매도";
    sellBtn.dataset.action = "sell";
    sellBtn.dataset.assetId = asset.id;
    marketRow.appendChild(buyBtn);
    marketRow.appendChild(sellBtn);

    const playerRow = document.createElement("div");
    playerRow.className = "market-action-row";
    const select = document.createElement("select");
    select.className = "market-select trade-target";
    select.dataset.assetId = asset.id;
    state.players.forEach((target) => {
      if (target.id === player.id || target.finished) return;
      const option = document.createElement("option");
      option.value = target.id;
      option.textContent = target.name;
      select.appendChild(option);
    });
    const sellPlayerBtn = document.createElement("button");
    sellPlayerBtn.className = "market-btn player";
    sellPlayerBtn.textContent = "플레이어 매도";
    sellPlayerBtn.dataset.action = "sell-player";
    sellPlayerBtn.dataset.assetId = asset.id;
    playerRow.appendChild(select);
    playerRow.appendChild(sellPlayerBtn);

    actions.appendChild(marketRow);
    if (select.options.length) {
      actions.appendChild(playerRow);
    }

    row.appendChild(name);
    row.appendChild(meta);
    row.appendChild(actions);
    elements.tradeMarket.appendChild(row);
  });
  updateTradeSummary();
}

function handleMarketClick(event) {
  const button = event.target.closest("button");
  if (!button) return;
  if (state.pendingTradeOffer) {
    updateTradeSummary("매도 제안 응답을 기다리는 중입니다.");
    return;
  }
  const action = button.dataset.action;
  const assetId = button.dataset.assetId;
  if (!action || !assetId) return;
  if (action === "buy") {
    buyAsset(assetId);
  } else if (action === "sell") {
    sellAssetToMarket(assetId);
  } else if (action === "sell-player") {
    const row = button.closest(".market-row");
    const select = row ? row.querySelector(".trade-target") : null;
    const targetId = select ? select.value : null;
    if (targetId) {
      requestTradeOffer(assetId, targetId);
    }
  }
  renderMarket();
}

function buyAsset(assetId, options = {}) {
  const player = currentPlayer();
  const price = state.marketPrices[assetId];
  if (player.money < price) {
    updateTradeSummary("잔액이 부족합니다.");
    if (options.notice !== false && !isCpuPlayer(player)) {
      showSystemModal({
        title: "현금 부족",
        story: "보유 현금이 부족해 매입할 수 없습니다.",
        variant: "alert"
      });
    }
    return;
  }
  const moneyDelta = applyMoneyDelta(player, -price);
  addHolding(player, assetId, 1, price);
  const bonus = applyTradeCharacterBonus(player);
  const effects = mergeEffects({ money: moneyDelta }, bonus);
  if (options.notice !== false) {
    showActionEffects(
      { label: "매입" },
      effects,
      { outcomeLabel: assetName(assetId) }
    );
  }
  if (options.log !== false) {
    addLog(`${player.name} - ${assetName(assetId)} 매입`, { effects, player });
  }
  updateTradeSummary(`${assetName(assetId)} 매입 완료`);
  return effects;
}

function sellAssetToMarket(assetId, options = {}) {
  const player = currentPlayer();
  const quantity = getHoldingQty(player, assetId);
  if (quantity <= 0) {
    updateTradeSummary("보유 자산이 없습니다.");
    return;
  }
  const price = state.marketPrices[assetId];
  removeHolding(player, assetId, 1);
  const moneyDelta = applyMoneyDelta(player, price);
  const bonus = applyTradeCharacterBonus(player);
  const effects = mergeEffects({ money: moneyDelta }, bonus);
  if (options.notice !== false) {
    showActionEffects(
      { label: "시장 매도" },
      effects,
      { outcomeLabel: assetName(assetId) }
    );
  }
  if (options.log !== false) {
    addLog(`${player.name} - ${assetName(assetId)} 시장 매도`, { effects, player });
  }
  updateTradeSummary(`${assetName(assetId)} 시장 매도 완료`);
  return effects;
}

function sellAssetToPlayer(assetId, targetId, options = {}) {
  const player = currentPlayer();
  const target = state.players.find((item) => item.id === targetId);
  if (!target || target.finished) return;
  const quantity = getHoldingQty(player, assetId);
  if (quantity <= 0) {
    updateTradeSummary("보유 자산이 없습니다.");
    return;
  }
  const price = state.marketPrices[assetId];
  if (target.money < price) {
    updateTradeSummary(`${target.name}의 잔액이 부족합니다.`);
    return;
  }
  removeHolding(player, assetId, 1);
  addHolding(target, assetId, 1, price);
  const targetMoney = applyMoneyDelta(target, -price);
  const sellerMoney = applyMoneyDelta(player, price);
  const sellerBonus = applyTradeCharacterBonus(player);
  const targetBonus = applyTradeCharacterBonus(target);
  const sellerApplied = mergeEffects({ money: sellerMoney }, sellerBonus);
  const targetApplied = mergeEffects({ money: targetMoney }, targetBonus);
  if (options.notice !== false) {
    showActionEffects(
      { label: "플레이어 매도" },
      sellerApplied,
      { target, targetApplied, outcomeLabel: assetName(assetId) }
    );
  }
  if (options.log !== false) {
    addLog(`${player.name} → ${target.name}: ${assetName(assetId)} 매도`, {
      effects: sellerApplied,
      target,
      targetEffects: targetApplied,
      player
    });
  }
  updateTradeSummary(`${target.name}에게 ${assetName(assetId)} 매도 완료`);
  return { sellerApplied, targetApplied };
}

function requestTradeOffer(assetId, targetId) {
  const seller = currentPlayer();
  const target = state.players.find((item) => item.id === targetId);
  if (!seller || !target || target.finished) return;
  if (isCpuPlayer(target) && seller.tradeOfferUsed) {
    updateTradeSummary("이번 턴에는 CPU에게 한 번만 매도할 수 있습니다.");
    return;
  }
  const quantity = getHoldingQty(seller, assetId);
  if (quantity <= 0) {
    updateTradeSummary("보유 자산이 없습니다.");
    return;
  }
  const price = state.marketPrices[assetId];
  if (target.money < price) {
    updateTradeSummary(`${target.name}의 잔액이 부족합니다.`);
    return;
  }
  state.pendingTradeOffer = {
    sellerId: seller.id,
    targetId,
    assetId,
    price
  };
  if (isCpuPlayer(target)) {
    seller.tradeOfferUsed = true;
  }
  if (isCpuPlayer(target)) {
    scheduleCpuTradeOfferDecision();
  } else {
    openTradeOfferModal();
  }
}

function openTradeOfferModal() {
  if (!state.pendingTradeOffer) return;
  const offer = state.pendingTradeOffer;
  const seller = state.players.find((item) => item.id === offer.sellerId);
  const target = state.players.find((item) => item.id === offer.targetId);
  if (!seller || !target) {
    state.pendingTradeOffer = null;
    return;
  }
  if (elements.tradeOfferText) {
    elements.tradeOfferText.textContent = `${seller.name}님이 ${target.name}에게 ${assetName(offer.assetId)}를 시세 $${formatNumber(offer.price)}에 매도합니다. 수락하시겠어요?`;
  }
  elements.tradeOfferModal.classList.add("show");
  elements.tradeOfferModal.setAttribute("aria-hidden", "false");
}

function closeTradeOfferModal() {
  elements.tradeOfferModal.classList.remove("show");
  elements.tradeOfferModal.setAttribute("aria-hidden", "true");
}

function resolveTradeOffer(accepted) {
  const offer = state.pendingTradeOffer;
  if (!offer) {
    closeTradeOfferModal();
    return;
  }
  const seller = state.players.find((item) => item.id === offer.sellerId);
  const target = state.players.find((item) => item.id === offer.targetId);
  state.pendingTradeOffer = null;
  closeTradeOfferModal();
  if (!seller || !target || target.finished) {
    updateTradeSummary("매도 제안을 처리할 수 없습니다.");
    return;
  }
  if (!accepted) {
    const decisionText = `${target.name}이(가) 매도를 거절했습니다.`;
    updateTradeSummary(decisionText);
    addLog(`${seller.name}의 ${assetName(offer.assetId)} 매도 거절됨`, { player: seller });
    showActionEffects(
      { label: "플레이어 매도" },
      {},
      { outcomeLabel: `${assetName(offer.assetId)} 거절` }
    );
    if (target.isCpu) {
      showSystemModal({
        title: "매도 응답",
        story: `${target.name}이(가) ${assetName(offer.assetId)} 매도를 거절했다.`,
        variant: "system",
        autoClose: isCpuPlayer(seller)
      });
    }
    return;
  }
  const quantity = getHoldingQty(seller, offer.assetId);
  if (quantity <= 0) {
    updateTradeSummary("보유 자산이 없습니다.");
    return;
  }
  if (target.money < offer.price) {
    updateTradeSummary(`${target.name}의 잔액이 부족합니다.`);
    return;
  }
  removeHolding(seller, offer.assetId, 1);
  addHolding(target, offer.assetId, 1, offer.price);
  const targetMoney = applyMoneyDelta(target, -offer.price);
  const sellerMoney = applyMoneyDelta(seller, offer.price);
  const sellerBonus = applyTradeCharacterBonus(seller);
  const targetBonus = applyTradeCharacterBonus(target);
  renderMarket();
  const decisionText = `${target.name}이(가) 매도를 수락했습니다. ${assetName(offer.assetId)} 매도 완료`;
  updateTradeSummary(decisionText);
  const sellerApplied = mergeEffects({ money: sellerMoney }, sellerBonus);
  const targetApplied = mergeEffects({ money: targetMoney }, targetBonus);
  addLog(`${seller.name} → ${target.name}: ${assetName(offer.assetId)} 매도`, {
    effects: sellerApplied,
    target,
    targetEffects: targetApplied,
    player: seller
  });
  showActionEffects(
    { label: "플레이어 매도" },
    sellerApplied,
    { target, targetApplied, outcomeLabel: `${assetName(offer.assetId)} · ${target.name}` }
  );
  if (target.isCpu) {
    showSystemModal({
      title: "매도 응답",
      story: `${target.name}이(가) ${assetName(offer.assetId)} 매도를 수락했다.`,
      sections: [
        { title: seller.name, effects: sellerApplied },
        { title: target.name, effects: targetApplied }
      ],
      variant: "system",
      autoClose: isCpuPlayer(seller)
    });
  }
}

function scheduleCpuTradeOfferDecision() {
  if (!state.pendingTradeOffer) return;
  window.setTimeout(() => {
    if (!state.pendingTradeOffer) return;
    const offer = state.pendingTradeOffer;
    const target = state.players.find((item) => item.id === offer.targetId);
    const shouldAccept = target ? shouldCpuAcceptOffer(target, offer) : false;
    resolveTradeOffer(shouldAccept);
  }, CPU_DELAYS.trade);
}

function shouldCpuAcceptOffer(target, offer) {
  if (!target || target.money < offer.price) return false;
  const holdings = getHoldingQty(target, offer.assetId);
  let desire = holdings === 0 ? 0.75 : 0.45;
  const pref = getCpuPortfolioPreference(target);
  const ratio = getAssetRatio(target);
  if (ratio > pref.max) {
    desire -= 0.35;
  } else if (ratio < pref.min) {
    desire += 0.1;
  }
  const cashFactor = Math.min(0.2, target.money / (offer.price * 10));
  const chance = clamp(desire + cashFactor, 0.05, 0.9);
  return Math.random() < chance;
}

function updateTradeSummary(message) {
  if (!elements.tradeSummary || !elements.tradeSubtitle) return;
  const player = currentPlayer();
  const assetValue = calculateAssetValue(player);
  elements.tradeSubtitle.textContent = `현재 현금 $${formatNumber(player.money)} · 보유 자산 $${formatNumber(assetValue)} · 매 턴 시세 ±10%`;
  elements.tradeSummary.textContent = message || "자산을 선택해 거래하세요.";
}

function assetName(assetId) {
  const asset = ASSETS.find((item) => item.id === assetId);
  return asset ? asset.name : assetId;
}

function rollOutcomeTier() {
  return weightedPick(OUTCOME_TIERS, (tier) => tier.weight);
}

function rollSwingTier(key) {
  const pool = key === "money" ? SWING_TIERS : STAT_SWING_TIERS;
  return weightedPick(pool, (swing) => swing.weight);
}

function rollSwingMultiplier(key) {
  const swing = rollSwingTier(key);
  const base = randomRange(swing.min, swing.max);
  const boost = key === "money" ? MONEY_SWING_BOOST : 1;
  return base * boost;
}

function randomizeEffectValue(key, value, tier) {
  if (!value) return 0;
  const appliedTier = tier || DEFAULT_TIER;
  const jitter = 1 + randomRange(-0.08, 0.08);
  const swing = rollSwingMultiplier(key);
  return value * appliedTier.multiplier * jitter * swing;
}

function quantizeRandomEffectValue(key, value) {
  if (!value) return 0;
  const step = key === "money" ? MONEY_RANDOM_STEP : STAT_RANDOM_STEP;
  const sign = value < 0 ? -1 : 1;
  return sign * Math.round(Math.abs(value) / step) * step;
}

function quantizeMoneyCap(value) {
  if (!value) return 0;
  const sign = value < 0 ? -1 : 1;
  return sign * Math.max(MONEY_RANDOM_STEP, Math.round(Math.abs(value) / MONEY_RANDOM_STEP) * MONEY_RANDOM_STEP);
}

function clampRandomStatValue(key, value, caps) {
  if (key === "money") {
    const cap = caps?.money;
    if (!cap) return value;
    const min = Number.isFinite(cap.min) ? cap.min : value;
    const max = Number.isFinite(cap.max) ? cap.max : value;
    return clamp(value, min, max);
  }
  let min = STAT_RANDOM_MIN;
  let max = STAT_RANDOM_MAX;
  const cap = caps?.[key];
  if (cap) {
    if (Number.isFinite(cap.min)) {
      min = Math.max(STAT_RANDOM_MIN, cap.min);
    }
    if (Number.isFinite(cap.max)) {
      max = Math.min(STAT_RANDOM_MAX, cap.max);
    }
  }
  return clamp(value, min, max);
}

function hashToUnit(input) {
  if (!input) return 0.5;
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash % 1000) / 1000;
}

function buildEffectCaps(effects, contextId) {
  if (!effects) return null;
  const caps = {};
  const seed = hashToUnit(contextId);
  const statPosFactor = 0.8 + seed * 1.2;
  const statNegFactor = 0.9 + seed * 1.4;
  const moneyPosFactor = 0.8 + seed * 3.2;
  const moneyNegFactor = 1.0 + seed * 3.4;
  RESOURCE_KEYS.forEach((key) => {
    const value = effects[key];
    if (!value) return;
    const baseAbs = Math.abs(scaleEffectValue(key, value));
    if (key === "money") {
      const maxRaw = Math.min(MONEY_CAP_MAX, Math.max(50, Math.round(baseAbs * moneyPosFactor)));
      const minRaw = Math.min(Math.abs(MONEY_CAP_MIN), Math.max(50, Math.round(baseAbs * moneyNegFactor)));
      const max = quantizeMoneyCap(maxRaw);
      const min = -quantizeMoneyCap(minRaw);
      caps[key] = { min, max };
    } else {
      const max = Math.min(STAT_RANDOM_MAX, Math.max(200, Math.round(baseAbs * statPosFactor)));
      const min = -Math.min(Math.abs(STAT_RANDOM_MIN), Math.max(300, Math.round(baseAbs * statNegFactor)));
      caps[key] = { min, max };
    }
  });
  return Object.keys(caps).length ? caps : null;
}

function applyEffects(player, effects, options = {}) {
  const applied = {};
  if (!effects) return applied;
  const randomize = options.randomize === true;
  RESOURCE_KEYS.forEach((key) => {
    if (typeof effects[key] === "number" && effects[key] !== 0) {
      const rule = getResourceRule(key);
      const baseValue = randomize ? randomizeEffectValue(key, effects[key], options.tier) : effects[key];
      if (!baseValue) return;
      let scaled = Math.round(scaleEffectValue(key, baseValue));
      if (randomize) {
        scaled = quantizeRandomEffectValue(key, scaled);
        scaled = clampRandomStatValue(key, scaled, options.caps);
      }
      if (key === "money") {
        const actual = applyMoneyDelta(player, scaled);
        applied[key] = (applied[key] || 0) + actual;
      } else {
        player[key] = clamp(player[key] + scaled, rule.min, rule.max);
        applied[key] = (applied[key] || 0) + scaled;
      }
    }
  });
  return applied;
}

function formatEffects(effects, options = {}) {
  if (!effects) return "변화 없음";
  const scaled = options.scaled === true;
  const parts = RESOURCE_KEYS.map((key) => {
    const rawValue = effects[key];
    if (!rawValue) return null;
    const value = scaled ? rawValue : scaleEffectValue(key, rawValue);
    return `${RESOURCE_LABELS[key]} ${formatSignedResourceValue(key, value)}`;
  }).filter(Boolean);
  return parts.length ? parts.join(", ") : "변화 없음";
}

function buildResultText(outcome, bonus) {
  const base = formatEffects(outcome.applied, { scaled: true });
  const notes = outcome.notes.length ? ` · ${outcome.notes.join(", ")}` : "";
  let text = outcome.hadChance ? `${outcome.success ? "성공" : "실패"}: ${base}${notes}` : `결과: ${base}${notes}`;
  const bonusText = formatEffects(bonus, { scaled: true });
  if (bonusText !== "변화 없음") {
    text += ` / 특성 보너스 ${bonusText}`;
  }
  return text;
}

function mergeEffects(base, add) {
  const merged = { ...(base || {}) };
  RESOURCE_KEYS.forEach((key) => {
    const value = add[key];
    if (value) {
      merged[key] = (merged[key] || 0) + value;
    }
  });
  return merged;
}

function mergeEffectObjects(base, add) {
  const merged = { ...(base || {}) };
  Object.entries(add || {}).forEach(([key, value]) => {
    if (value) {
      merged[key] = (merged[key] || 0) + value;
    }
  });
  return merged;
}

function pickCpuEventChoice(event, player) {
  if (!event?.choices?.length) return 0;
  if (event.id === "marriage") {
    return randomInt(0, event.choices.length - 1);
  }
  let bestIndex = 0;
  let bestScore = -Infinity;
  event.choices.forEach((choice, index) => {
    let score = 0;
    if (choice.chance !== undefined) {
      const chance = adjustChanceForCharacter(player, choice.chance);
      const successEffects = resolveChoiceEffects(player, choice, "success");
      const failEffects = resolveChoiceEffects(player, choice, "fail");
      score +=
        chance * scoreEffectsForPlayer(successEffects, player) +
        (1 - chance) * scoreEffectsForPlayer(failEffects, player);
    } else {
      const baseEffects = resolveChoiceEffects(player, choice, "base");
      score += scoreEffectsForPlayer(baseEffects, player);
    }
    if (choice.projectPoints) score += choice.projectPoints * 0.6;
    if (choice.diceBonus) score += choice.diceBonus * 0.5;
    if (choice.addFlag) score += 0.2;
    if (choice.nextEventId) score += 0.1;
    if (score > bestScore) {
      bestScore = score;
      bestIndex = index;
    } else if (score === bestScore && Math.random() < 0.4) {
      bestIndex = index;
    }
  });
  return bestIndex;
}

function getMarketSnapshot(asset) {
  const price = state.marketPrices[asset.id] || asset.basePrice;
  const ratio = asset.basePrice ? price / asset.basePrice : 1;
  return { asset, price, ratio };
}

function getAffordableAssets(player) {
  if (!player) return [];
  return ASSETS.map(getMarketSnapshot).filter((entry) => entry.price <= player.money);
}

function getHoldingsSnapshot(player) {
  if (!player) return [];
  return Object.entries(player.holdings || {})
    .filter(([, qty]) => qty > 0)
    .map(([assetId, qty]) => {
      const asset = ASSETS.find((item) => item.id === assetId);
      if (!asset) return null;
      const snapshot = getMarketSnapshot(asset);
      return { ...snapshot, assetId, qty };
    })
    .filter(Boolean);
}

function pickByRatio(list, ascending) {
  if (!list.length) return null;
  const sorted = list.slice().sort((a, b) => (ascending ? a.ratio - b.ratio : b.ratio - a.ratio));
  const windowSize = Math.min(3, sorted.length);
  const pickFrom = sorted.slice(0, windowSize);
  return pickFrom[Math.floor(Math.random() * pickFrom.length)];
}

function canCpuTrade(player) {
  if (!player) return false;
  const holdings = getHoldingsSnapshot(player);
  const affordable = getAffordableAssets(player);
  return holdings.length > 0 || affordable.length > 0;
}

function getCpuPortfolioPreference(player) {
  if (!player || !player.character) return CPU_PORTFOLIO_PREFS.default;
  return CPU_PORTFOLIO_PREFS[player.character.id] || CPU_PORTFOLIO_PREFS.default;
}

function getAssetRatio(player) {
  if (!player) return 0;
  const assetValue = calculateAssetValue(player);
  const total = assetValue + player.money;
  return total > 0 ? assetValue / total : 0;
}


function pickCpuHelpTarget(action, player) {
  const others = state.players.filter((item) => item.id !== player.id && !item.finished);
  if (!others.length) return null;
  let bestTarget = others[0];
  let bestScore = scoreEffectsForPlayer(action.targetEffects, bestTarget);
  others.slice(1).forEach((candidate) => {
    const score = scoreEffectsForPlayer(action.targetEffects, candidate);
    if (score > bestScore) {
      bestScore = score;
      bestTarget = candidate;
    }
  });
  return bestTarget;
}

function pickCpuAction(player) {
  let bestAction = null;
  let bestTarget = null;
  let bestScore = -Infinity;
  const actionPool = state.availableActions.length ? state.availableActions : ACTIONS;
  actionPool.forEach((action) => {
    let score = -Infinity;
    let target = null;
    if (action.special === "trade") {
      if (!canCpuTrade(player)) return;
      const holdings = getHoldingsSnapshot(player);
      const affordable = getAffordableAssets(player);
      const bargains = affordable.filter((entry) => entry.ratio <= CPU_TRADE_CHEAP);
      const premiums = holdings.filter((entry) => entry.ratio >= CPU_TRADE_EXPENSIVE);
      const ratio = getAssetRatio(player);
      const pref = getCpuPortfolioPreference(player);
      const inRange = ratio >= pref.min && ratio <= pref.max;
      score = 1.6;
      if (bargains.length) score += 0.8;
      if (premiums.length) score += 0.6;
      if (player.money > 8000) score += 0.3;
      if (player.money > 20000) score += 0.3;
      if (holdings.length) score += 0.2;
      if (player.bankrupt && holdings.length) score += 0.4;
      if (ratio < pref.min) score += 0.8;
      if (ratio > pref.max) score += 0.7;
      if (inRange && !bargains.length && !premiums.length) score -= 1.2;
    } else if (action.special === "help") {
      target = pickCpuHelpTarget(action, player);
      if (!target) return;
      score = scoreEffectsForPlayer(action.effects, player) + scoreEffectsForPlayer(action.targetEffects, target) * 0.5;
    } else {
      score = scoreEffectsForPlayer(action.effects, player);
      if (action.special === "project") {
        score += 0.6;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestAction = action;
      bestTarget = target;
    } else if (score === bestScore && Math.random() < 0.35) {
      bestAction = action;
      bestTarget = target;
    }
  });
  return bestAction ? { action: bestAction, target: bestTarget } : null;
}

function performCpuTrade(player) {
  if (!player) return;
  const tradeNotes = [];
  let tradeEffects = {};
  const pref = getCpuPortfolioPreference(player);
  const baseTradeGoal = 1 + (player.money > 20000 ? 1 : 0) + (Math.random() < 0.35 ? 1 : 0);
  const initialRatio = getAssetRatio(player);
  const inRange = initialRatio >= pref.min && initialRatio <= pref.max;
  const initialHoldings = getHoldingsSnapshot(player);
  const initialAffordable = getAffordableAssets(player);
  const initialBargains = initialAffordable.filter((entry) => entry.ratio <= CPU_TRADE_CHEAP);
  const initialPremiums = initialHoldings.filter((entry) => entry.ratio >= CPU_TRADE_EXPENSIVE);
  const hasOpportunity = initialBargains.length || initialPremiums.length;
  const tradeGoal = inRange ? (hasOpportunity ? 1 : 0) : Math.min(CPU_TRADE_MAX, baseTradeGoal);

  if (tradeGoal <= 0) {
    addLog(`${player.name} - 시장 관망`, { player });
    endTurn();
    return;
  }

  for (let i = 0; i < tradeGoal; i += 1) {
    const holdings = getHoldingsSnapshot(player);
    const affordable = getAffordableAssets(player);
    if (!holdings.length && !affordable.length) break;

    const bargains = affordable.filter((entry) => entry.ratio <= CPU_TRADE_CHEAP);
    const premiums = holdings.filter((entry) => entry.ratio >= CPU_TRADE_EXPENSIVE);
    const needsCash = player.money < CPU_TRADE_LOW_CASH;
    const ratio = getAssetRatio(player);
    const belowTarget = ratio < pref.min;
    const aboveTarget = ratio > pref.max;
    const withinTarget = !belowTarget && !aboveTarget;
    let action = null;

    if (withinTarget && !bargains.length && !premiums.length && !needsCash) {
      break;
    }

    if (needsCash && holdings.length) {
      action = "sell";
    } else if (aboveTarget && holdings.length) {
      action = "sell";
    } else if (belowTarget && bargains.length) {
      action = "buy";
    } else if (bargains.length && !aboveTarget) {
      action = "buy";
    } else if (premiums.length) {
      action = "sell";
    } else if (!withinTarget && affordable.length && !aboveTarget && (holdings.length === 0 || Math.random() < 0.45)) {
      action = "buy";
    } else if (holdings.length && (aboveTarget || Math.random() < 0.35)) {
      action = "sell";
    } else if (affordable.length && !aboveTarget && holdings.length === 0) {
      action = "buy";
    }

    if (action === "buy") {
      const pick = pickByRatio(bargains.length ? bargains : affordable, true);
      if (!pick) break;
      const effects = buyAsset(pick.asset.id, { notice: false, log: false });
      tradeEffects = mergeEffectObjects(tradeEffects, effects || {});
      tradeNotes.push(`${assetName(pick.asset.id)} 매입`);
      continue;
    }

    if (action === "sell") {
      const pick = pickByRatio(premiums.length ? premiums : holdings, false);
      if (!pick) break;
      const effects = sellAssetToMarket(pick.asset.id, { notice: false, log: false });
      tradeEffects = mergeEffectObjects(tradeEffects, effects || {});
      tradeNotes.push(`${assetName(pick.asset.id)} 매도`);
      continue;
    }

    break;
  }

  if (tradeNotes.length) {
    const summary =
      tradeNotes.length > 3
        ? `${tradeNotes.slice(0, 3).join(", ")} 외 ${tradeNotes.length - 3}건`
        : tradeNotes.join(", ");
    addLog(`${player.name} - ${summary}`, { effects: tradeEffects, player });
  } else {
    addLog(`${player.name} - 자산 매매 보류`, { player });
  }
  endTurn();
}

function addFlag(player, flag) {
  if (!player.flags.includes(flag)) {
    player.flags.push(flag);
  }
}

function removeFlag(player, flag) {
  player.flags = player.flags.filter((item) => item !== flag);
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function weightedPick(items, weightFn) {
  const weights = items.map((item) => Math.max(0.1, weightFn(item)));
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  let threshold = Math.random() * total;
  for (let i = 0; i < items.length; i += 1) {
    threshold -= weights[i];
    if (threshold <= 0) {
      return items[i];
    }
  }
  return items[items.length - 1];
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function buildAssetIcon(assetId, className = "asset-icon") {
  const src = ASSET_ICON_PATHS[assetId];
  if (!src) return null;
  const img = document.createElement("img");
  img.className = className;
  img.src = src;
  img.alt = "";
  img.loading = "lazy";
  return img;
}

function setupCharacters() {
  setupPlayers.forEach((setup, index) => {
    const { charSelect, desc, typeSelect } = setup;
    if (!charSelect || !desc) return;
    charSelect.innerHTML = "";
    CHARACTERS.forEach((character) => {
      const option = document.createElement("option");
      option.value = character.id;
      option.textContent = character.name;
      charSelect.appendChild(option);
    });
    charSelect.selectedIndex = index % CHARACTERS.length;
    if (!setup.portrait && desc.parentElement) {
      const portrait = document.createElement("img");
      portrait.className = "char-portrait";
      portrait.alt = "";
      desc.parentElement.insertBefore(portrait, desc);
      setup.portrait = portrait;
    }
    const updateDesc = () => {
      if (getSetupType(setup) === "none") {
        desc.textContent = "참여 안함";
        if (setup.portrait) setup.portrait.classList.add("hidden");
        return;
      }
      const selected = CHARACTERS.find((character) => character.id === charSelect.value);
      desc.textContent = selected ? selected.description : "";
      if (setup.portrait) {
        const portraitSrc = selected ? CHARACTER_PORTRAITS[selected.id] : "";
        if (portraitSrc) {
          setup.portrait.src = portraitSrc;
          setup.portrait.classList.remove("hidden");
        } else {
          setup.portrait.removeAttribute("src");
          setup.portrait.classList.add("hidden");
        }
      }
    };
    updateDesc();
    charSelect.addEventListener("change", updateDesc);
    if (typeSelect) {
      typeSelect.addEventListener("change", () => {
        syncSetupPlayerState(setup);
        updateDesc();
      });
    }
    syncSetupPlayerState(setup);
  });
}

function renderPlayers() {
  elements.playerPanels.innerHTML = "";
  state.players.forEach((player, index) => {
    const card = document.createElement("div");
    card.className = "player-card";
    setAccentVars(card, player.color);
    if (index === state.currentPlayerIndex) {
      card.classList.add("current");
    }
    if (player.bankrupt) {
      card.classList.add("bankrupt");
    }

    const header = document.createElement("div");
    header.className = "player-header";
    const identity = document.createElement("div");
    identity.className = "player-identity";
    const avatar = document.createElement("img");
    avatar.className = "player-avatar";
    const portrait = CHARACTER_PORTRAITS[player.character.id];
    if (portrait) {
      avatar.src = portrait;
      avatar.alt = "";
    } else {
      avatar.classList.add("hidden");
    }
    const name = document.createElement("div");
    name.className = "player-name";
    name.textContent = player.name;
    identity.appendChild(avatar);
    identity.appendChild(name);
    const role = document.createElement("div");
    role.className = "player-role";
    role.textContent = player.isCpu ? `${player.character.name} / CPU` : player.character.name;
    header.appendChild(identity);
    header.appendChild(role);
    card.appendChild(header);

    const tags = document.createElement("div");
    tags.className = "player-tags";
    const addTag = (text, variant) => {
      const tag = document.createElement("div");
      tag.className = variant ? `player-tag ${variant}` : "player-tag";
      tag.textContent = text;
      tags.appendChild(tag);
    };
    if (player.bankrupt) {
      addTag("파산", "danger");
    }
    if (tags.childElementCount) {
      card.appendChild(tags);
    }

    const meta = document.createElement("div");
    meta.className = "player-meta";
    const holdings = getPlayerHoldings(player);
    const totalCount = holdings.reduce((sum, entry) => sum + entry.qty, 0);
    const metaButton = (text, metaKey, variant) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = variant ? `player-meta-btn ${variant}` : "player-meta-btn";
      button.dataset.playerId = player.id;
      button.dataset.meta = metaKey;
      button.textContent = text;
      button.title = text;
      return button;
    };
    const marriageText = player.spouseName
      ? `결혼: ${player.spouseName}`
      : player.marriageResolved
      ? "결혼: 안 함"
      : "결혼: 미정";
    const jobText = player.jobName ? `직업: ${player.jobName}` : "직업: 미정";
    const assetText = totalCount ? `자산: ${totalCount}개` : "자산: 없음";
    meta.appendChild(metaButton(marriageText, "marriage", "meta-marriage"));
    meta.appendChild(metaButton(jobText, "job", "meta-job"));
    meta.appendChild(metaButton(assetText, "asset", "meta-asset"));
    card.appendChild(meta);

    RESOURCE_KEYS.forEach((key) => {
      const row = document.createElement("div");
      row.className = "stat-row";
      const label = document.createElement("div");
      label.className = "stat-label";
      label.textContent = RESOURCE_LABELS[key];
      label.dataset.key = key;
      const bar = document.createElement("div");
      bar.className = "stat-bar";
      const fill = document.createElement("div");
      fill.className = "stat-fill";
      let percent = 0;
      if (key === "money") {
        percent = Math.min(100, (player[key] / resourceMax(key)) * 100);
      } else {
        const info = getStatLevelInfo(player[key]);
        percent = Math.min(100, info.progress * 100);
      }
      fill.style.width = `${percent}%`;
      bar.appendChild(fill);
      const value = document.createElement("div");
      value.className = "stat-value";
      value.textContent = formatStatDisplay(key, player[key]);
      row.appendChild(label);
      row.appendChild(bar);
      row.appendChild(value);
      card.appendChild(row);
    });

    elements.playerPanels.appendChild(card);
  });
}

function renderAssetModal(player) {
  if (!elements.assetList || !elements.assetTitle) return;
  elements.assetTitle.textContent = `${player.name} - 보유 자산`;
  elements.assetList.innerHTML = "";
  const holdings = getPlayerHoldings(player);
  if (!holdings.length) {
    const empty = document.createElement("div");
    empty.className = "asset-empty";
    empty.textContent = "자산 없음";
    elements.assetList.appendChild(empty);
    return;
  }
  const list = document.createElement("div");
  list.className = "asset-list";
  holdings.forEach((entry) => {
    const item = document.createElement("div");
    item.className = "asset-item";
    const icon = buildAssetIcon(entry.asset.id);
    if (icon) item.appendChild(icon);
    const info = document.createElement("div");
    info.className = "asset-info";
    const name = document.createElement("div");
    name.className = "asset-name";
    name.textContent = `${entry.asset.name} x${entry.qty}`;
    const price = entry.price;
    const avgCost = entry.avgCost;
    const totalCost = entry.totalCost;
    const currentValue = entry.currentValue;
    const profitRate = Number.isFinite(entry.profitRate) ? entry.profitRate : 0;
    const metaLine = document.createElement("div");
    metaLine.className = "asset-meta";
    const avgLine = document.createElement("div");
    avgLine.textContent = `매입 평단 $${formatNumber(Math.round(avgCost))}`;
    const totalLine = document.createElement("div");
    totalLine.textContent = `매입 총액 $${formatNumber(Math.round(totalCost))}`;
    const currentLine = document.createElement("div");
    currentLine.textContent = `현재가 $${formatNumber(Math.round(price))}`;
    const valueLine = document.createElement("div");
    valueLine.textContent = `현재 평가액 $${formatNumber(Math.round(currentValue))}`;
    const profitLine = document.createElement("div");
    profitLine.className = `asset-profit ${profitRate >= 0 ? "gain" : "loss"}`;
    profitLine.textContent = `수익률 ${formatPercent(profitRate)}`;
    metaLine.appendChild(avgLine);
    metaLine.appendChild(totalLine);
    metaLine.appendChild(currentLine);
    metaLine.appendChild(valueLine);
    metaLine.appendChild(profitLine);
    info.appendChild(name);
    info.appendChild(metaLine);
    item.appendChild(info);
    list.appendChild(item);
  });
  elements.assetList.appendChild(list);
}

function renderMarket() {
  if (!elements.tradeMarket) return;
  const player = currentPlayer();
  elements.tradeMarket.innerHTML = "";
  updateTradeTabs();
  const visibleAssets =
    state.tradeCategory === "all"
      ? ASSETS
      : ASSETS.filter((asset) => asset.category === state.tradeCategory);
  visibleAssets.forEach((asset) => {
    const row = document.createElement("div");
    row.className = "market-row";
    row.dataset.assetId = asset.id;

    const name = document.createElement("div");
    name.className = "market-name";
    const icon = buildAssetIcon(asset.id);
    if (icon) name.appendChild(icon);
    const nameText = document.createElement("span");
    nameText.textContent = asset.name;
    name.appendChild(nameText);

    const meta = document.createElement("div");
    meta.className = "market-meta";
    const currentPrice = getMarketPrice(asset.id);
    const price = document.createElement("div");
    price.textContent = `현재가 $${formatNumber(Math.round(currentPrice))}`;
    const owned = document.createElement("div");
    const quantity = getHoldingQty(player, asset.id);
    owned.textContent = `보유 ${quantity}개`;
    meta.appendChild(price);
    meta.appendChild(owned);
    if (quantity > 0) {
      const avgCost = getHoldingAvgCost(player, asset.id);
      const safeCost = avgCost > 0 ? avgCost : currentPrice;
      const totalCost = safeCost * quantity;
      const currentValue = currentPrice * quantity;
      const profitRate = safeCost > 0 ? ((currentPrice - safeCost) / safeCost) * 100 : 0;
      const holdingMeta = document.createElement("div");
      holdingMeta.className = "market-holding";
      const avgLine = document.createElement("div");
      avgLine.textContent = `매입 평단 $${formatNumber(Math.round(safeCost))}`;
      const totalLine = document.createElement("div");
      totalLine.textContent = `매입 총액 $${formatNumber(Math.round(totalCost))}`;
      const valueLine = document.createElement("div");
      valueLine.textContent = `현재 평가액 $${formatNumber(Math.round(currentValue))}`;
      const profitLine = document.createElement("div");
      profitLine.className = `market-profit ${profitRate >= 0 ? "gain" : "loss"}`;
      profitLine.textContent = `수익률 ${formatPercent(profitRate)}`;
      holdingMeta.appendChild(avgLine);
      holdingMeta.appendChild(totalLine);
      holdingMeta.appendChild(valueLine);
      holdingMeta.appendChild(profitLine);
      meta.appendChild(holdingMeta);
    }

    const actions = document.createElement("div");
    actions.className = "market-actions";

    const marketRow = document.createElement("div");
    marketRow.className = "market-action-row";
    const buyBtn = document.createElement("button");
    buyBtn.className = "market-btn";
    buyBtn.textContent = "매입";
    buyBtn.dataset.action = "buy";
    buyBtn.dataset.assetId = asset.id;
    const sellBtn = document.createElement("button");
    sellBtn.className = "market-btn sell";
    sellBtn.textContent = "시장 매도";
    sellBtn.dataset.action = "sell";
    sellBtn.dataset.assetId = asset.id;
    marketRow.appendChild(buyBtn);
    marketRow.appendChild(sellBtn);

    const playerRow = document.createElement("div");
    playerRow.className = "market-action-row";
    const select = document.createElement("select");
    select.className = "market-select trade-target";
    select.dataset.assetId = asset.id;
    state.players.forEach((target) => {
      if (target.id === player.id || target.finished) return;
      const option = document.createElement("option");
      option.value = target.id;
      option.textContent = target.name;
      select.appendChild(option);
    });
    const sellPlayerBtn = document.createElement("button");
    sellPlayerBtn.className = "market-btn player";
    sellPlayerBtn.textContent = "플레이어 매도";
    sellPlayerBtn.dataset.action = "sell-player";
    sellPlayerBtn.dataset.assetId = asset.id;
    playerRow.appendChild(select);
    playerRow.appendChild(sellPlayerBtn);

    actions.appendChild(marketRow);
    if (select.options.length) {
      actions.appendChild(playerRow);
    }

    row.appendChild(name);
    row.appendChild(meta);
    row.appendChild(actions);
    elements.tradeMarket.appendChild(row);
  });
  updateTradeSummary();
}

function renderResults() {
  const scores = state.players.map((player) => ({
    player,
    score: calculateScore(player)
  }));
  scores.sort((a, b) => b.score - a.score);
  elements.finalRanking.innerHTML = "";
  scores.forEach((entry) => {
    const item = document.createElement("li");
    item.className = "ranking-item";
    item.textContent = `${entry.player.name} · ${formatNumber(entry.score)}점`;
    elements.finalRanking.appendChild(item);
  });

  const titles = {
    money: "부자왕",
    health: "건강왕",
    happiness: "행복왕",
    growth: "성장왕",
    reputation: "인기왕"
  };
  elements.finalTitles.innerHTML = "";
  Object.keys(titles).forEach((key) => {
    const topValue = Math.max(...state.players.map((player) => player[key]));
    const winners = state.players.filter((player) => player[key] === topValue);
    const item = document.createElement("li");
    item.className = "title-item";
    item.textContent = `${titles[key]}: ${winners.map((player) => player.name).join(", ")}`;
    elements.finalTitles.appendChild(item);
  });

  elements.finalReviews.innerHTML = "";
  state.players.forEach((player) => {
    const card = document.createElement("div");
    card.className = "review-card";
    const title = document.createElement("div");
    title.className = "review-title";
    const review = generateLifeReview(player);
    title.textContent = review.title;
    const text = document.createElement("div");
    text.className = "review-text";
    text.textContent = review.text;
    card.appendChild(title);
    card.appendChild(text);
    elements.finalReviews.appendChild(card);
  });
}

function updateProject() {
  if (!elements.projectDesc) return;
  const filled = Math.min(state.projectPoints, state.projectGoal);
  const empty = Math.max(0, state.projectGoal - filled);
  elements.projectDesc.innerHTML = "";
  const total = filled + empty;
  if (!total) return;
  for (let i = 0; i < filled; i += 1) {
    const icon = document.createElement("img");
    icon.className = "project-heart";
    icon.src = PROJECT_HEARTS.filled;
    icon.alt = "";
    elements.projectDesc.appendChild(icon);
  }
  for (let i = 0; i < empty; i += 1) {
    const icon = document.createElement("img");
    icon.className = "project-heart";
    icon.src = PROJECT_HEARTS.empty;
    icon.alt = "";
    elements.projectDesc.appendChild(icon);
  }
}

init();
