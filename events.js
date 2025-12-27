window.GARDEN_EVENTS = [
  {
    id: "flea-market",
    title: "동네 벼룩시장",
    description: "주말 아침, 골목에 작은 벼룩시장이 열렸다.",
    category: "money",
    tags: ["daily"],
    choices: [
      { text: "물건 팔기", effects: { money: 2, happiness: 1 } },
      { text: "물건 사기", effects: { money: -1, happiness: 2 } },
      { text: "구경만 하기", effects: { happiness: 1 } }
    ]
  },
  {
    id: "cold-symptom",
    title: "갑작스러운 감기 기운",
    description: "몸이 으슬으슬하다. 오늘 일정이 걱정된다.",
    category: "health",
    tags: ["crisis"],
    choices: [
      { text: "충분히 쉬기", effects: { health: 2, money: -1 } },
      { text: "약국 들르기", effects: { health: 1, money: -2 } },
      { text: "무리해서 강행", effects: { money: 1, health: -2, happiness: -1 } }
    ]
  },
  {
    id: "friend-request",
    title: "친구의 부탁",
    description: "친구가 급한 도움을 요청했다.",
    category: "friend",
    tags: ["relationship"],
    choices: [
      { text: "도와주기", effects: { reputation: 2, happiness: 1, money: -1 } },
      { text: "정중히 거절", effects: { happiness: -1 } },
      { text: "조건부로 돕기", effects: { reputation: 1, money: 1 } }
    ]
  },
  {
    id: "contest-announce",
    title: "공모전 공지",
    description: "정원시에서 새로운 아이디어 공모전이 열렸다.",
    category: "growth",
    tags: ["opportunity"],
    choices: [
      {
        text: "바로 도전하기",
        chance: 0.5,
        successEffects: { growth: 3, reputation: 2, money: 2 },
        failEffects: { growth: 1, happiness: -1 }
      },
      {
        text: "준비만 해두기",
        effects: { growth: 1 },
        addFlag: "contest_prep",
        nextEventId: "contest-pitch"
      },
      { text: "포기하기", effects: { happiness: 1 } }
    ]
  },
  {
    id: "contest-pitch",
    title: "공모전 발표 날",
    description: "준비해둔 아이디어를 발표할 시간이 왔다.",
    category: "growth",
    tags: ["opportunity"],
    requiresFlag: "contest_prep",
    choices: [
      {
        text: "자신 있게 발표",
        chance: 0.6,
        successEffects: { growth: 2, reputation: 2, money: 2 },
        failEffects: { reputation: -1, happiness: -1 },
        removeFlag: "contest_prep"
      },
      {
        text: "안전하게 발표",
        chance: 0.75,
        successEffects: { growth: 2, reputation: 1 },
        failEffects: { growth: 1 },
        removeFlag: "contest_prep"
      }
    ]
  },
  {
    id: "boss-misunderstand",
    title: "상사와의 오해",
    description: "작은 말실수로 오해가 생겼다.",
    category: "work",
    tags: ["crisis"],
    choices: [
      { text: "바로 해명하기", effects: { reputation: 1 } },
      { text: "참고 넘기기", effects: { reputation: -1, happiness: 1 } },
      { text: "동료에게 상담", effects: { reputation: 1, money: -1 } }
    ]
  },
  {
    id: "family-event",
    title: "가족 행사",
    description: "가족 모임 일정이 잡혔다.",
    category: "family",
    tags: ["relationship"],
    choices: [
      {
        text: "참석하기",
        effects: { happiness: 2, reputation: 1, money: -1 },
        effectsByStat: {
          stat: "happiness",
          ranges: [
            { max: 19999, effects: { happiness: 3, reputation: 1, money: -1 } },
            { min: 20000, max: 34999, effects: { happiness: 2, reputation: 1, money: -1 } },
            { min: 35000, effects: { reputation: 2, happiness: 1, money: -1 } }
          ]
        }
      },
      { text: "잠깐 들르기", effects: { happiness: 1 } },
      { text: "불참하기", effects: { reputation: -1, happiness: -1 } }
    ]
  },
  {
    id: "talent-found",
    title: "우연한 재능 발견",
    description: "무심코 한 행동에서 재능의 씨앗을 찾았다.",
    category: "hobby",
    tags: ["choice"],
    choices: [
      { text: "취미에 투자", effects: { growth: 2, happiness: 1, money: -1 } },
      { text: "기록만 남기기", effects: { growth: 1 } },
      { text: "무시하기", effects: { happiness: -1 } }
    ]
  },
  {
    id: "battery-1percent",
    title: "핸드폰 배터리 1퍼센트",
    description: "배터리가 거의 없는데 연락이 이어진다.",
    category: "mistake",
    tags: ["daily"],
    choices: [
      { text: "충전기 찾기", effects: { money: -1, happiness: 1 } },
      { text: "절전 모드", effects: { reputation: 1 } },
      { text: "그냥 쓰기", effects: { happiness: 1, reputation: -1 } }
    ]
  },
  {
    id: "coupon-found",
    title: "길에서 주운 쿠폰",
    description: "운 좋게 할인 쿠폰을 발견했다.",
    category: "luck",
    tags: ["daily"],
    choices: [
      { text: "바로 사용", effects: { money: 2 } },
      { text: "나중에 사용", effects: { money: 1, growth: 1 } },
      { text: "다른 사람에게 양보", effects: { reputation: 2 } }
    ]
  },
  {
    id: "city-volunteer",
    title: "도시 봉사 프로젝트",
    description: "정원시를 위한 공동 프로젝트가 시작됐다.",
    category: "community",
    tags: ["opportunity"],
    choices: [
      { text: "직접 참여", effects: { reputation: 2, happiness: 1 }, projectPoints: 1 },
      { text: "기부하기", effects: { money: -1, reputation: 2 }, projectPoints: 1 },
      { text: "불참", effects: { happiness: 0 } }
    ]
  },
  {
    id: "sudden-invite",
    title: "갑자기 온 초대장",
    description: "예상치 못한 모임 초대가 도착했다.",
    category: "friend",
    tags: ["relationship"],
    choices: [
      { text: "나가기", effects: { happiness: 2, money: -1 } },
      { text: "정중히 거절", effects: { happiness: -1 } },
      { text: "대신 선물 보내기", effects: { reputation: 1, money: -1 } }
    ]
  },
  {
    id: "fortune-today",
    title: "오늘의 운세",
    description: "아침 운세가 눈에 띈다.",
    category: "luck",
    tags: ["fate"],
    choices: [
      { text: "믿어보기", effects: { happiness: 1 }, diceBonus: 1 },
      { text: "재미로 보기", effects: { happiness: 1 } },
      { text: "무시하기", effects: { growth: 1 } }
    ]
  },
  {
    id: "late-night-work",
    title: "야근 제안",
    description: "오늘만 더 하면 보상이 있다.",
    category: "work",
    tags: ["opportunity"],
    choices: [
      { text: "야근 수락", effects: { money: 2, health: -1 } },
      { text: "단호히 거절", effects: { happiness: 1 } },
      {
        text: "조건 협상",
        chance: 0.5,
        successEffects: { money: 3, health: -1 },
        failEffects: { reputation: -1 }
      }
    ]
  },
  {
    id: "library-course",
    title: "도서관 새 강좌",
    description: "흥미로운 강좌를 무료로 수강할 수 있다.",
    category: "study",
    tags: ["choice"],
    choices: [
      { text: "등록하기", effects: { growth: 2, money: -1 } },
      { text: "청강하기", effects: { growth: 1 } },
      { text: "건너뛰기", effects: { happiness: 1 } }
    ]
  },
  {
    id: "sports-day",
    title: "동네 체육대회",
    description: "웃음이 넘치는 동네 체육대회가 열린다.",
    category: "hobby",
    tags: ["festival"],
    choices: [
      { text: "직접 참여", effects: { health: 2, happiness: 1 } },
      { text: "응원하기", effects: { happiness: 1, reputation: 1 } },
      { text: "운영 봉사", effects: { reputation: 2, health: -1 } }
    ]
  },
  {
    id: "lost-card",
    title: "분실한 카드",
    description: "카드를 잃어버려 잠시 난감하다.",
    category: "mistake",
    tags: ["crisis"],
    choices: [
      { text: "재발급하기", effects: { money: -2 } },
      { text: "미뤄보기", effects: { reputation: -1, money: -1 } },
      { text: "친구에게 도움", effects: { reputation: 1, happiness: 1, money: -1 } }
    ]
  },
  {
    id: "radio-story",
    title: "정원시 라디오 사연",
    description: "라디오에서 사연을 모집하고 있다.",
    category: "community",
    tags: ["festival"],
    choices: [
      {
        text: "사연 보내기",
        chance: 0.4,
        successEffects: { reputation: 2, happiness: 2 },
        failEffects: { happiness: 1 }
      },
      { text: "듣기만 하기", effects: { happiness: 1 } },
      { text: "넘어가기", effects: { growth: 1 } }
    ]
  },
  {
    id: "new-club",
    title: "새로운 동아리",
    description: "취미 동아리 홍보지가 눈에 들어온다.",
    category: "friend",
    tags: ["relationship"],
    choices: [
      { text: "가입하기", effects: { happiness: 2, growth: 1, money: -1 } },
      { text: "체험만 하기", effects: { happiness: 1 } },
      { text: "그냥 지나가기", effects: { happiness: 1 } }
    ]
  },
  {
    id: "small-invest",
    title: "작은 투자 기회",
    description: "소액으로 시작할 수 있는 제안이 들어왔다.",
    category: "money",
    tags: ["opportunity"],
    stage: "mid",
    choices: [
      {
        text: "투자하기",
        chance: 0.5,
        successEffects: { money: 3 },
        failEffects: { money: -2 }
      },
      { text: "저축하기", effects: { money: 1 } },
      { text: "가족과 상의", effects: { reputation: 1, growth: 1 } }
    ]
  },
  {
    id: "used-trade",
    title: "중고 거래 제안",
    description: "필요 없는 물건을 정리하거나 교환할 기회가 생겼다.",
    category: "money",
    tags: ["daily"],
    choices: [
      { text: "판매하기", effects: { money: 2, reputation: 1 } },
      { text: "교환하기", effects: { happiness: 1, growth: 1 } },
      { text: "구매하기", effects: { money: -2, happiness: 1 } }
    ]
  },
  {
    id: "weekend-trade",
    title: "단기 매매 소식",
    description: "친구가 단기 매매 기회를 공유했다.",
    category: "money",
    tags: ["opportunity"],
    stage: "mid",
    choices: [
      {
        text: "빠르게 매매",
        chance: 0.45,
        successEffects: { money: 4, reputation: 1 },
        failEffects: { money: -3, happiness: -1 }
      },
      {
        text: "소액으로만",
        chance: 0.6,
        successEffects: { money: 2 },
        failEffects: { money: -1 }
      },
      { text: "거절하기", effects: { happiness: 1 } }
    ]
  },
  {
    id: "presentation-day",
    title: "발표 날",
    description: "준비한 내용을 발표해야 한다.",
    category: "work",
    tags: ["choice"],
    choices: [
      { text: "더 준비하기", effects: { growth: 2, money: -1 } },
      {
        text: "즉흥 발표",
        chance: 0.4,
        successEffects: { reputation: 2, money: 1 },
        failEffects: { reputation: -2 }
      },
      { text: "동료에게 도움", effects: { reputation: 1, happiness: 1 } }
    ]
  },
  {
    id: "phone-cleanup",
    title: "휴대폰 정리",
    description: "알림이 쌓여 집중이 흐트러진다.",
    category: "mistake",
    tags: ["daily"],
    choices: [
      { text: "정리하기", effects: { growth: 1, happiness: 1 } },
      { text: "백업하기", effects: { reputation: 1, money: -1 } },
      { text: "그냥 두기", effects: { happiness: 1, reputation: -1 } }
    ]
  },
  {
    id: "bus-missed",
    title: "버스 놓침",
    description: "눈앞에서 버스를 놓쳤다.",
    category: "mistake",
    tags: ["crisis"],
    choices: [
      { text: "택시 타기", effects: { money: -2, happiness: 1 } },
      { text: "걸어가기", effects: { health: 1, happiness: -1 } },
      { text: "일정 변경", effects: { reputation: -1 } }
    ]
  },
  {
    id: "sibling-homework",
    title: "동생 숙제 도움",
    description: "동생이 숙제를 같이 하자고 부탁한다.",
    category: "family",
    tags: ["relationship"],
    choices: [
      { text: "함께 풀기", effects: { reputation: 2, growth: 1 } },
      { text: "나중에 하자", effects: { happiness: -1 } },
      { text: "간식 사서 돕기", effects: { happiness: 1, growth: 1, money: -1 } }
    ]
  },
  {
    id: "mini-game-fair",
    title: "축제 미니게임",
    description: "간단한 미니게임 부스가 열린다.",
    category: "luck",
    tags: ["festival"],
    choices: [
      {
        text: "참여하기",
        chance: 0.5,
        successEffects: { happiness: 2, money: 1 },
        failEffects: { happiness: 1 }
      },
      { text: "구경하기", effects: { happiness: 1 } },
      { text: "친구와 팀", effects: { reputation: 1, happiness: 1 } }
    ]
  },
  {
    id: "health-check",
    title: "무료 건강검진",
    description: "시에서 무료 건강검진을 제공한다.",
    category: "health",
    tags: ["opportunity"],
    choices: [
      {
        text: "검진 받기",
        effects: { health: 2 },
        effectsByStat: {
          stat: "health",
          ranges: [
            { max: 19999, effects: { health: 3 } },
            { min: 20000, max: 34999, effects: { health: 2 } },
            { min: 35000, effects: { happiness: 1, health: 1 } }
          ]
        }
      },
      { text: "넘어가기", effects: { happiness: 1 } },
      { text: "가족과 함께", effects: { health: 1, reputation: 1 } }
    ]
  },
  {
    id: "cafe-discount",
    title: "카페 할인 타임",
    description: "근처 카페에서 한정 할인 소식이 왔다.",
    category: "money",
    tags: ["daily"],
    choices: [
      { text: "바로 이용", effects: { money: -1, happiness: 1 } },
      { text: "쿠폰 공유", effects: { reputation: 2 } },
      { text: "건강 생각", effects: { health: 1 } }
    ]
  },
  {
    id: "bike-repair",
    title: "자전거 수리",
    description: "자전거가 고장나 이동에 불편이 생겼다.",
    category: "health",
    tags: ["crisis"],
    choices: [
      { text: "수리 맡기기", effects: { money: -1, health: 1 } },
      { text: "걸어 다니기", effects: { health: 1, happiness: -1 } },
      { text: "빌려 타기", effects: { reputation: -1, happiness: 1 } }
    ]
  },
  {
    id: "new-neighbor",
    title: "새로운 이웃",
    description: "새 이웃이 이사왔다. 인사를 나눌까?",
    category: "community",
    tags: ["relationship"],
    choices: [
      { text: "먼저 인사", effects: { reputation: 1, happiness: 1 } },
      { text: "도움 주기", effects: { reputation: 2, health: -1 } },
      { text: "조용히 지내기", effects: { happiness: 1 } }
    ]
  },
  {
    id: "apology-slip",
    title: "작은 실수",
    description: "사소한 실수가 커질 뻔했다.",
    category: "mistake",
    tags: ["crisis"],
    choices: [
      { text: "바로 사과", effects: { reputation: 2 } },
      { text: "숨기기", effects: { reputation: -2, happiness: -1 } },
      { text: "조언 구하기", effects: { growth: 1, reputation: 1 } }
    ]
  },
  {
    id: "future-plan",
    title: "미래 계획 세우기",
    description: "올해의 목표를 다시 정리해볼까?",
    category: "growth",
    tags: ["choice"],
    stage: "early",
    choices: [
      {
        text: "목표 세우기",
        effects: { growth: 2, happiness: 1 },
        effectsByStat: {
          stat: "growth",
          ranges: [
            { max: 19999, effects: { growth: 3, happiness: 1 } },
            { min: 20000, max: 34999, effects: { growth: 2, happiness: 1 } },
            { min: 35000, effects: { growth: 1, reputation: 1, happiness: 1 } }
          ]
        }
      },
      { text: "유연하게 가기", effects: { happiness: 2 } },
      { text: "지금은 생략", effects: { happiness: 1 } }
    ]
  },
  {
    id: "photo-exhibit",
    title: "사진 전시회",
    description: "따뜻한 사진 전시회 소식이 있다.",
    category: "hobby",
    tags: ["festival"],
    choices: [
      { text: "관람하기", effects: { happiness: 2 } },
      { text: "봉사하기", effects: { reputation: 2, growth: 1 } },
      { text: "지나치기", effects: { happiness: 1 } }
    ]
  },
  {
    id: "part-time-offer",
    title: "새 알바 제안",
    description: "짧은 기간 아르바이트 제안이 들어왔다.",
    category: "money",
    tags: ["opportunity"],
    choices: [
      { text: "수락", effects: { money: 2, health: -1 } },
      { text: "시간 조율", effects: { money: 1, happiness: 1 } },
      { text: "거절", effects: { happiness: 1 } }
    ]
  },
  {
    id: "interview-prep",
    title: "면접 준비",
    description: "면접 준비를 위해 시간을 내야 한다.",
    category: "work",
    tags: ["choice"],
    stage: "mid",
    choices: [
      {
        text: "집중 준비",
        effects: { growth: 2, money: -1 },
        addFlag: "interview_ready",
        nextEventId: "interview-day"
      },
      { text: "모의 면접", effects: { growth: 1, reputation: 1 } },
      { text: "다음에 하기", effects: { happiness: 1 } }
    ]
  },
  {
    id: "interview-day",
    title: "면접 당일",
    description: "연습한 만큼 자신감이 있다.",
    category: "work",
    tags: ["opportunity"],
    requiresFlag: "interview_ready",
    choices: [
      {
        text: "자신 있게",
        chance: 0.6,
        successEffects: { money: 3, reputation: 2 },
        failEffects: { reputation: -1, happiness: -1 },
        removeFlag: "interview_ready"
      },
      {
        text: "조심스럽게",
        chance: 0.7,
        successEffects: { money: 2, reputation: 1 },
        failEffects: { money: -1 },
        removeFlag: "interview_ready"
      },
      { text: "일정 조정", effects: { money: -1 }, removeFlag: "interview_ready" }
    ]
  },
  {
    id: "warm-message",
    title: "따뜻한 응원 메시지",
    description: "마음을 따뜻하게 하는 메시지를 받았다.",
    category: "romance",
    tags: ["relationship"],
    choices: [
      {
        text: "고마움 전하기",
        effects: { happiness: 2, reputation: 1 },
        effectsByStat: {
          stat: "happiness",
          ranges: [
            { max: 19999, effects: { happiness: 3, reputation: 1 } },
            { min: 20000, max: 34999, effects: { happiness: 2, reputation: 1 } },
            { min: 35000, effects: { reputation: 2, happiness: 1 } }
          ]
        }
      },
      { text: "가볍게 답장", effects: { happiness: 1 } },
      { text: "넘겨두기", effects: { happiness: -1 } }
    ]
  },
  {
    id: "rainy-walk",
    title: "비 오는 날 산책",
    description: "빗소리가 마음을 차분하게 만든다.",
    category: "health",
    tags: ["daily"],
    choices: [
      { text: "짧게 산책", effects: { health: 1, happiness: 1 } },
      { text: "카페에서 쉬기", effects: { happiness: 1, money: -1 } },
      { text: "집에서 휴식", effects: { health: 1 } }
    ]
  },
  {
    id: "morning-jog",
    title: "아침 조깅",
    description: "가볍게 몸을 깨울 시간이 필요하다.",
    category: "health",
    tags: ["daily"],
    choices: [
      {
        text: "가볍게 달리기",
        effects: { health: 2, happiness: 1 },
        effectsByStat: {
          stat: "health",
          ranges: [
            { max: 19999, effects: { health: 3, happiness: 1 } },
            { min: 20000, max: 34999, effects: { health: 2, happiness: 1 } },
            { min: 35000, effects: { health: 1, growth: 1, happiness: 1 } }
          ]
        }
      },
      { text: "스트레칭만", effects: { health: 1 } },
      { text: "잠 더 자기", effects: { happiness: 1, health: -1 } }
    ]
  },
  {
    id: "neighborhood-meeting",
    title: "동네 회의",
    description: "이웃들과 모여 소소한 의견을 나누기로 했다.",
    category: "community",
    tags: ["relationship"],
    choices: [
      { text: "참석하기", effects: { reputation: 2 } },
      { text: "의견 제안", effects: { reputation: 2, growth: 1, money: -1 } },
      { text: "불참", effects: { happiness: 1 } }
    ]
  },
  {
    id: "study-group",
    title: "스터디 그룹",
    description: "같이 공부하자는 제안이 들어왔다.",
    category: "study",
    tags: ["choice"],
    choices: [
      { text: "정식 가입", effects: { growth: 2, reputation: 1, money: -1 } },
      { text: "참관만", effects: { growth: 1 } },
      { text: "넘기기", effects: { happiness: 1 } }
    ]
  },
  {
    id: "rainstorm",
    title: "갑작스러운 소나기",
    description: "갑자기 비가 쏟아져 이동이 힘들다.",
    category: "health",
    tags: ["crisis"],
    choices: [
      { text: "우산 구매", effects: { money: -1, health: 1 } },
      { text: "비 맞고 이동", effects: { health: -2, happiness: -1 } },
      { text: "카페에서 대기", effects: { happiness: 1, money: -1 } }
    ]
  },
  {
    id: "wallet-drop",
    title: "지갑 분실",
    description: "지갑을 잃어버려 당황스러운 하루다.",
    category: "mistake",
    tags: ["crisis"],
    choices: [
      { text: "분실물 센터 방문", effects: { reputation: 1, money: -1 } },
      { text: "새로 발급", effects: { money: -2 } },
      { text: "가족에게 도움", effects: { reputation: 1, happiness: 1, money: -1 } }
    ]
  },
  {
    id: "kind-stranger",
    title: "따뜻한 배려",
    description: "낯선 사람이 작은 배려를 건넸다.",
    category: "luck",
    tags: ["daily"],
    choices: [
      { text: "감사 인사", effects: { happiness: 1, reputation: 1 } },
      { text: "작은 나눔", effects: { reputation: 2, money: -1 } },
      { text: "조용히 지나감", effects: { growth: 1 } }
    ]
  },
  {
    id: "online-class",
    title: "온라인 강의",
    description: "관심 분야의 강의를 쉽게 들을 수 있다.",
    category: "study",
    tags: ["opportunity"],
    choices: [
      { text: "등록하기", effects: { growth: 2, money: -1 } },
      { text: "체험만", effects: { growth: 1 } },
      { text: "패스", effects: { happiness: 1 } }
    ]
  },
  {
    id: "career-talk",
    title: "커리어 상담",
    description: "앞으로의 길을 고민하게 된다.",
    category: "work",
    tags: ["choice"],
    choices: [
      {
        text: "멘토 상담",
        effects: { growth: 2, reputation: 1, money: -1 },
        effectsByStat: {
          stat: "growth",
          ranges: [
            { max: 19999, effects: { growth: 3, reputation: 1, money: -1 } },
            { min: 20000, max: 34999, effects: { growth: 2, reputation: 1, money: -1 } },
            { min: 35000, effects: { reputation: 2, growth: 1, money: -1 } }
          ]
        }
      },
      { text: "혼자 정리", effects: { growth: 1 } },
      { text: "미뤄두기", effects: { happiness: 1 } }
    ]
  },
  {
    id: "short-trip",
    title: "주말 나들이",
    description: "가족과 함께 가까운 곳으로 떠나볼까?",
    category: "family",
    tags: ["festival"],
    choices: [
      { text: "가족 여행", effects: { happiness: 2, reputation: 1, money: -2 } },
      { text: "근교 나들이", effects: { happiness: 1, money: -1 } },
      { text: "집에서 휴식", effects: { health: 1 } }
    ]
  },
  {
    id: "city-marathon",
    title: "도시 마라톤",
    description: "도시 전체가 달리기로 들썩인다.",
    category: "health",
    tags: ["festival"],
    choices: [
      { text: "참가하기", effects: { health: 2, reputation: 1 } },
      { text: "응원하기", effects: { happiness: 1, reputation: 1 } },
      { text: "봉사하기", effects: { reputation: 2, health: -1 } }
    ]
  },
  {
    id: "book-fair",
    title: "책 박람회",
    description: "새로운 책과 강연이 가득하다.",
    category: "study",
    tags: ["festival"],
    choices: [
      { text: "책 구매", effects: { growth: 1, happiness: 1, money: -1 } },
      { text: "강연 듣기", effects: { growth: 2 } },
      { text: "구경만", effects: { happiness: 1 } }
    ]
  },
  {
    id: "tool-broken",
    title: "도구 고장",
    description: "자주 쓰던 도구가 고장났다.",
    category: "mistake",
    tags: ["crisis"],
    choices: [
      { text: "수리하기", effects: { money: -1, growth: 1 } },
      { text: "교체하기", effects: { money: -2 } },
      { text: "공유하기", effects: { reputation: 1, money: -1 } }
    ]
  },
  {
    id: "friend-collab",
    title: "친구와 협업",
    description: "친구가 같이 해보자며 아이디어를 꺼냈다.",
    category: "friend",
    tags: ["opportunity"],
    choices: [
      {
        text: "함께 도전",
        chance: 0.55,
        successEffects: { reputation: 2, growth: 1, money: 1 },
        failEffects: { happiness: -1, money: -1 }
      },
      { text: "작게 참여", effects: { reputation: 1, growth: 1 } },
      { text: "거절", effects: { happiness: 1 } }
    ]
  },
  {
    id: "healthy-cooking",
    title: "건강식 준비",
    description: "몸을 위한 식단을 준비할 시간이다.",
    category: "health",
    tags: ["choice"],
    choices: [
      { text: "직접 요리", effects: { health: 2, happiness: 1, money: -1 } },
      { text: "간단식", effects: { health: 1 } },
      { text: "배달 주문", effects: { happiness: 1, money: -1 } }
    ]
  },
  {
    id: "market-sale",
    title: "특가 소식",
    description: "생활용품 특가 소식이 들려온다.",
    category: "money",
    tags: ["opportunity"],
    choices: [
      { text: "특가 구매", effects: { money: -1, happiness: 1 } },
      { text: "공동 구매", effects: { money: -1, reputation: 1 } },
      { text: "패스", effects: { growth: 1 } }
    ]
  },
  {
    id: "community-clean",
    title: "동네 환경정화",
    description: "거리 청소 캠페인이 열린다.",
    category: "community",
    tags: ["festival"],
    choices: [
      { text: "참여하기", effects: { reputation: 2, happiness: 1 } },
      { text: "물품 기부", effects: { reputation: 2, money: -1 } },
      { text: "불참", effects: { happiness: 1 } }
    ]
  },
  {
    id: "neighbor-pet",
    title: "이웃집 돌봄",
    description: "이웃이 잠시 도움을 부탁했다.",
    category: "community",
    tags: ["relationship"],
    choices: [
      { text: "돌봐주기", effects: { reputation: 2, happiness: 1 } },
      { text: "잠깐만", effects: { reputation: 1 } },
      { text: "거절", effects: { happiness: 1 } }
    ]
  },
  {
    id: "unexpected-compliment",
    title: "뜻밖의 칭찬",
    description: "누군가의 칭찬이 마음을 따뜻하게 만든다.",
    category: "romance",
    tags: ["relationship"],
    choices: [
      { text: "고마움 표현", effects: { happiness: 2, reputation: 1 } },
      { text: "가볍게 답장", effects: { happiness: 1 } },
      { text: "무심코 넘기기", effects: { happiness: -1 } }
    ]
  },
  {
    id: "traffic-jam",
    title: "교통 체증",
    description: "길이 막혀 일정이 꼬일 것 같다.",
    category: "mistake",
    tags: ["crisis"],
    choices: [
      { text: "우회하기", effects: { reputation: 1, money: -1 } },
      { text: "기다리기", effects: { happiness: -1 } },
      { text: "일정 조정", effects: { growth: 1 } }
    ]
  },
  {
    id: "shared-investment",
    title: "공동 투자 제안",
    description: "지인들과 함께하는 투자 제안이 왔다.",
    category: "money",
    tags: ["opportunity"],
    stage: "mid",
    choices: [
      {
        text: "공동 투자",
        chance: 0.5,
        successEffects: { money: 3, reputation: 1 },
        failEffects: { money: -2 }
      },
      {
        text: "소액만",
        chance: 0.65,
        successEffects: { money: 2 },
        failEffects: { money: -1 }
      },
      { text: "거절", effects: { happiness: 1 } }
    ]
  },
  {
    id: "skill-cert-prep",
    title: "자격증 준비",
    description: "새로운 자격증을 준비해볼까?",
    category: "study",
    tags: ["choice"],
    stage: "early",
    choices: [
      {
        text: "집중 준비",
        effects: { growth: 2, money: -1 },
        addFlag: "cert_ready",
        nextEventId: "skill-cert-exam"
      },
      { text: "정보만 수집", effects: { growth: 1 } },
      { text: "다음에", effects: { happiness: 1 } }
    ]
  },
  {
    id: "skill-cert-exam",
    title: "자격증 시험",
    description: "준비한 자격증 시험 날이 왔다.",
    category: "study",
    tags: ["opportunity"],
    requiresFlag: "cert_ready",
    choices: [
      {
        text: "자신 있게 응시",
        chance: 0.6,
        successEffects: { growth: 2, reputation: 2, money: 1 },
        failEffects: { happiness: -1, growth: 1 },
        removeFlag: "cert_ready"
      },
      {
        text: "차분히 응시",
        chance: 0.7,
        successEffects: { growth: 2, reputation: 1 },
        failEffects: { growth: 1 },
        removeFlag: "cert_ready"
      }
    ]
  },
  {
    id: "cleanup-sale",
    title: "정리 판매",
    description: "집 안을 정리하며 물건을 판매할 기회다.",
    category: "money",
    tags: ["daily"],
    choices: [
      { text: "정리 판매", effects: { money: 2, happiness: 1 } },
      { text: "기부하기", effects: { reputation: 2 } },
      { text: "보관하기", effects: { growth: 1 } }
    ]
  },
  {
    id: "mentor-advice",
    title: "멘토의 조언",
    description: "경험 많은 조언을 들을 기회가 생겼다.",
    category: "growth",
    tags: ["relationship"],
    choices: [
      {
        text: "조언 수용",
        effects: { growth: 2, reputation: 1 },
        effectsByStat: {
          stat: "reputation",
          ranges: [
            { max: 19999, effects: { reputation: 3, growth: 1 } },
            { min: 20000, max: 34999, effects: { reputation: 2, growth: 1 } },
            { min: 35000, effects: { growth: 2, happiness: 1 } }
          ]
        }
      },
      { text: "절충하기", effects: { growth: 1, happiness: 1 } },
      { text: "넘기기", effects: { happiness: 1 } }
    ]
  },
  {
    id: "club-performance",
    title: "동아리 무대",
    description: "동아리 공연에 함께할 기회가 왔다.",
    category: "hobby",
    tags: ["festival"],
    choices: [
      {
        text: "무대 참여",
        chance: 0.5,
        successEffects: { happiness: 2, reputation: 2 },
        failEffects: { happiness: 1 }
      },
      { text: "관람하기", effects: { happiness: 1 } },
      { text: "운영 돕기", effects: { reputation: 2, health: -1 } }
    ]
  },
  {
    id: "new-tool",
    title: "새로운 도구",
    description: "일을 돕는 새 도구가 등장했다.",
    category: "work",
    tags: ["opportunity"],
    choices: [
      { text: "직접 익히기", effects: { growth: 2, money: -1 } },
      { text: "동료에게 배우기", effects: { growth: 1, reputation: 1 } },
      { text: "미루기", effects: { happiness: 1 } }
    ]
  },
  {
    id: "family-photo",
    title: "가족 사진",
    description: "오랜만에 가족 사진을 찍자는 이야기가 나왔다.",
    category: "family",
    tags: ["relationship"],
    choices: [
      { text: "함께 찍기", effects: { happiness: 2, reputation: 1 } },
      { text: "정리만 돕기", effects: { reputation: 1 } },
      { text: "불참", effects: { happiness: -1 } }
    ]
  },
  {
    id: "hobby-class",
    title: "취미 클래스",
    description: "새로운 취미를 배울 기회가 생겼다.",
    category: "hobby",
    tags: ["choice"],
    choices: [
      { text: "클래스 등록", effects: { growth: 1, happiness: 2, money: -1 } },
      { text: "체험만", effects: { happiness: 1 } },
      { text: "패스", effects: { happiness: 1 } }
    ]
  },
  {
    id: "city-lottery",
    title: "도시 추첨 이벤트",
    description: "도시에서 작은 추첨 이벤트가 열렸다.",
    category: "luck",
    tags: ["fate"],
    choices: [
      {
        text: "참여하기",
        chance: 0.2,
        successEffects: { money: 4, happiness: 2 },
        failEffects: { money: -1 }
      },
      {
        text: "소액 참여",
        chance: 0.3,
        successEffects: { money: 2 },
        failEffects: { money: -1 }
      },
      { text: "관망", effects: { growth: 1 } }
    ]
  },
  {
    id: "emergency-call",
    title: "급한 연락",
    description: "가족으로부터 급한 연락이 왔다.",
    category: "family",
    tags: ["crisis"],
    choices: [
      { text: "바로 달려가기", effects: { happiness: 1, reputation: 2, money: -1 } },
      { text: "전화로 챙기기", effects: { reputation: 1 } },
      { text: "미뤄두기", effects: { happiness: -1 } }
    ]
  },
  {
    id: "idea-notebook",
    title: "아이디어 노트",
    description: "문득 좋은 아이디어가 떠올랐다.",
    category: "growth",
    tags: ["daily"],
    choices: [
      { text: "정리해두기", effects: { growth: 2 } },
      { text: "나중에 정리", effects: { happiness: 1 } },
      { text: "공유하기", effects: { reputation: 1, growth: 1 } }
    ]
  },
  {
    id: "city-workshop",
    title: "도시 워크숍",
    description: "배움과 교류가 있는 워크숍이 열린다.",
    category: "community",
    tags: ["opportunity"],
    choices: [
      { text: "참여하기", effects: { growth: 1, reputation: 2 } },
      {
        text: "발표 도전",
        chance: 0.45,
        successEffects: { reputation: 3, growth: 2 },
        failEffects: { happiness: -1 }
      },
      { text: "참관만", effects: { growth: 1 } }
    ]
  },
  {
    id: "budget-review",
    title: "예산 점검",
    description: "지출을 다시 정리할 시기다.",
    category: "money",
    tags: ["choice"],
    stage: "mid",
    choices: [
      { text: "꼼꼼히 점검", effects: { money: 2, growth: 1 } },
      { text: "간단히 정리", effects: { growth: 1 } },
      { text: "무시", effects: { happiness: 1 } }
    ]
  }
];

window.GARDEN_EVENT_STORIES = {
  "flea-market": [
    "집 안에서 잠자던 물건을 내놓으니 지갑도 마음도 가벼워졌다.",
    "작은 보물 같은 물건을 발견해 기분이 들떴다.",
    "구경만 해도 새로운 아이디어가 스쳐 지나갔다."
  ],
  "cold-symptom": [
    "쉬어 가니 몸이 서서히 제자리로 돌아왔다.",
    "약국에서 챙긴 도움 덕에 한숨 돌렸다.",
    "억지로 일정을 밀어붙였더니 몸과 마음이 지쳤다."
  ],
  "friend-request": [
    "친구의 얼굴이 밝아지며 고마움이 전해졌다.",
    "정중히 거절했지만 마음 한켠이 아쉽다.",
    "서로 조건을 맞추니 깔끔하게 정리됐다."
  ],
  "contest-announce": [
    {
      success: "과감히 도전했더니 주목을 받으며 자신감이 커졌다.",
      fail: "도전은 멋졌지만 결과가 따라주지 않아 아쉬움이 남았다."
    },
    "준비만 해두며 아이디어를 정돈했다.",
    "이번은 쉬어가기로 하고 마음을 가볍게 했다."
  ],
  "contest-pitch": [
    {
      success: "당당하게 발표해 분위기를 단숨에 사로잡았다.",
      fail: "긴장에 말이 꼬여 흐름이 아쉬웠다."
    },
    {
      success: "차분한 발표가 안정감을 주며 좋은 인상을 남겼다.",
      fail: "무난했지만 깊은 인상은 남기지 못했다."
    }
  ],
  "boss-misunderstand": [
    "바로 해명해 오해가 풀리며 마음이 놓였다.",
    "넘어가려 했지만 찝찝함이 남았다.",
    "동료의 조언 덕에 대응 방향이 잡혔다."
  ],
  "family-event": [
    "가족과 보내는 시간이 따뜻하게 채워졌다.",
    "짧게 들렀지만 마음은 전해졌다.",
    "불참했더니 분위기가 살짝 서늘해졌다."
  ],
  "talent-found": [
    "새로운 취미에 빠져들며 성장의 불씨가 생겼다.",
    "기록만 남겨두니 언젠가 다시 꺼내볼 여지가 생겼다.",
    "지나쳤지만 마음 한켠이 조금은 허전하다."
  ],
  "battery-1percent": [
    "충전기를 찾느라 분주했지만 결국 안도했다.",
    "절전 모드로 버텨 작지만 필요한 연락을 지켰다.",
    "끝까지 쓰다 보니 중요한 순간에 끊겨버렸다."
  ],
  "coupon-found": [
    "바로 사용해 소소한 만족을 얻었다.",
    "기회를 아껴두며 실속을 챙겼다.",
    "양보하니 고마움이 돌아왔다."
  ],
  "city-volunteer": [
    "직접 몸을 보태니 도시의 공기가 달라지는 듯했다.",
    "손을 보태지는 못했지만 마음은 함께했다.",
    "이번은 쉬어가기로 하며 조용히 지나갔다."
  ],
  "sudden-invite": [
    "급한 초대에 응하니 뜻밖의 즐거움이 생겼다.",
    "정중히 거절하고 나니 마음이 차분해졌다.",
    "대신 선물을 보내 관계의 온도를 지켰다."
  ],
  "fortune-today": [
    "운세를 믿으니 이상하게 마음이 가벼워졌다.",
    "재미로 보니 하루가 조금 유쾌해졌다.",
    "내 길을 가자고 마음을 다잡았다."
  ],
  "late-night-work": [
    "야근을 받아들이고 묵묵히 일을 마쳤다.",
    "단호히 거절하고 휴식을 택했다.",
    {
      success: "조건을 잘 맞춰 서로 만족스러운 합의가 됐다.",
      fail: "협상이 어긋나며 분위기가 어색해졌다."
    }
  ],
  "library-course": [
    "새로운 강의를 들으며 시야가 넓어졌다.",
    "가볍게 들어도 얻는 게 있었다.",
    "지금은 쉬어가기로 했다."
  ],
  "sports-day": [
    "직접 뛰니 땀과 웃음이 함께했다.",
    "응원으로 현장을 달궜다.",
    "운영을 돕다 보니 보람이 남았다."
  ],
  "lost-card": [
    "재발급으로 일상이 정리됐다.",
    "미루는 사이 마음이 계속 신경 쓰였다.",
    "친구의 도움으로 한숨 돌렸다."
  ],
  "radio-story": [
    {
      success: "사연이 소개되어 모두의 마음을 따뜻하게 만들었다.",
      fail: "선정되지 않았지만 마음을 전한 것만으로 충분했다."
    },
    "다른 이들의 이야기에 귀 기울였다.",
    "지나치며 조용히 하루를 보냈다."
  ],
  "new-club": [
    "새로운 모임에 들어가며 에너지가 생겼다.",
    "체험만 했지만 분위기를 느낄 수 있었다.",
    "지나치고 나니 마음이 가벼웠다."
  ],
  "small-invest": [
    {
      success: "소액 투자가 기분 좋은 성과로 이어졌다.",
      fail: "예상과 달라 조심스러운 배움이 남았다."
    },
    "안전하게 저축하며 마음이 든든해졌다.",
    "가족과 상의하니 방향이 뚜렷해졌다."
  ],
  "used-trade": [
    "집이 정리되고 지갑도 조금 두툼해졌다.",
    "필요한 물건과 잘 바꿔 기분이 좋다.",
    "필요한 물건을 얻어 만족했다."
  ],
  "weekend-trade": [
    {
      success: "빠른 매매가 한순간에 좋은 흐름을 만들었다.",
      fail: "급하게 움직인 대가가 남았다."
    },
    {
      success: "작게 시도했지만 기대 이상의 결과가 있었다.",
      fail: "소액이었지만 흐름이 좋지 않았다."
    },
    "무리하지 않고 거절해 마음이 편했다."
  ],
  "presentation-day": [
    "더 준비하며 발표가 차분해졌다.",
    {
      success: "즉흥 발표가 의외로 큰 호응을 얻었다.",
      fail: "즉흥이 발목을 잡아 아쉬움이 남았다."
    },
    "동료의 도움으로 한결 안정됐다."
  ],
  "phone-cleanup": [
    "휴대폰을 정리하니 마음도 정돈됐다.",
    "백업을 하며 불안을 덜어냈다.",
    "그냥 두고 넘어가니 찜찜함이 남았다."
  ],
  "bus-missed": [
    "택시로 해결해 시간은 지켰지만 마음은 복잡했다.",
    "걸어가며 몸과 생각을 정리했다.",
    "일정을 바꿔 부담을 덜었다."
  ],
  "sibling-homework": [
    "함께 풀며 사이가 가까워졌다.",
    "미루자고 하니 살짝 서운함이 보였다.",
    "간식을 챙기니 분위기가 부드러워졌다."
  ],
  "mini-game-fair": [
    {
      success: "미니게임에서 승리를 맛보며 활기가 돌았다.",
      fail: "아쉽게 졌지만 웃음은 남았다."
    },
    "구경만 해도 축제의 기운을 느꼈다.",
    "친구와 팀을 이뤄 즐거움이 배가됐다."
  ],
  "health-check": [
    "검진으로 마음이 놓였다.",
    "지금은 넘겼지만 찝찝함이 남았다.",
    "가족과 함께 챙기니 든든함이 생겼다."
  ],
  "cafe-discount": [
    "할인을 즐기며 기분 전환이 됐다.",
    "쿠폰을 나누며 작은 호감이 쌓였다.",
    "건강을 생각하며 선택을 바꿨다."
  ],
  "bike-repair": [
    "수리를 맡기니 불편함이 해소됐다.",
    "걸어 다니며 몸과 마음이 가벼워졌다.",
    "빌려 타며 눈치도 봤지만 일은 해결됐다."
  ],
  "new-neighbor": [
    "먼저 인사하니 좋은 인상이 남았다.",
    "도움을 주며 신뢰가 싹텄다.",
    "조용히 지내며 거리감을 지켰다."
  ],
  "apology-slip": [
    "바로 사과해 관계가 매끄러워졌다.",
    "숨기려다 마음이 무거워졌다.",
    "조언을 구하며 해결 실마리가 생겼다."
  ],
  "future-plan": [
    "목표를 세우며 마음에 힘이 생겼다.",
    "유연하게 가기로 하며 부담을 덜었다.",
    "지금은 생략하며 여유를 택했다."
  ],
  "photo-exhibit": [
    "사진을 보며 영감이 스며들었다.",
    "봉사로 참여하니 보람이 깊어졌다.",
    "지나치며 여유를 챙겼다."
  ],
  "part-time-offer": [
    "알바를 하며 현실감을 느꼈다.",
    "시간을 조율해 균형을 맞췄다.",
    "거절하고 나니 마음이 편안해졌다."
  ],
  "interview-prep": [
    "집중 준비로 긴장감이 조금 줄었다.",
    "모의 면접으로 감을 잡았다.",
    "다음을 기약하며 숨을 골랐다."
  ],
  "interview-day": [
    {
      success: "당당한 모습이 좋은 인상을 남겼다.",
      fail: "긴장이 앞서 말이 흔들렸다."
    },
    {
      success: "조심스러운 태도가 안정감을 줬다.",
      fail: "조심하다 타이밍을 놓쳤다."
    },
    "일정을 조정해 숨을 돌렸다."
  ],
  "warm-message": [
    "고마움을 전해 따뜻한 분위기가 이어졌다.",
    "가볍게 답하며 분위기를 유지했다.",
    "넘겨두니 마음이 살짝 불편했다."
  ],
  "rainy-walk": [
    "빗속을 잠깐 걸으며 마음이 차분해졌다.",
    "카페에 머물며 여유를 챙겼다.",
    "집에서 쉬며 몸을 보호했다."
  ],
  "morning-jog": [
    "가볍게 달리니 상쾌함이 올라왔다.",
    "스트레칭만 해도 몸이 풀렸다.",
    "잠을 더 자니 하루가 느긋해졌다."
  ],
  "neighborhood-meeting": [
    "회의에 참석해 이웃과 마음을 나눴다.",
    "의견을 내며 존재감을 보였다.",
    "불참하며 조용히 지나갔다."
  ],
  "study-group": [
    "정식으로 참여하며 동기부여가 생겼다.",
    "참관만 했지만 흐름을 파악했다.",
    "넘기며 여유를 택했다."
  ],
  "rainstorm": [
    "우산을 챙겨 안전하게 이동했다.",
    "비를 맞고 이동해 고생이 남았다.",
    "카페에서 기다리며 한숨 돌렸다."
  ],
  "wallet-drop": [
    "분실물 센터에서 차분히 해결했다.",
    "새로 발급하며 마음을 정리했다.",
    "가족에게 도움을 받아 든든해졌다."
  ],
  "kind-stranger": [
    "감사 인사를 건네며 기분이 따뜻해졌다.",
    "작은 나눔으로 관계가 부드러워졌다.",
    "조용히 지나가며 마음을 다잡았다."
  ],
  "online-class": [
    "온라인 강의로 새로운 자극을 얻었다.",
    "가볍게 체험하며 감을 잡았다.",
    "이번엔 패스하고 쉬어 갔다."
  ],
  "career-talk": [
    "멘토와 이야기하며 길이 선명해졌다.",
    "혼자 정리하며 방향을 정했다.",
    "미뤄두며 마음을 다독였다."
  ],
  "short-trip": [
    "가족 여행으로 웃음이 늘었다.",
    "근교 나들이로 기분 전환이 됐다.",
    "집에서 쉬며 에너지를 채웠다."
  ],
  "city-marathon": [
    "도시에 활기를 더하며 뿌듯했다.",
    "응원으로 분위기를 끌어올렸다.",
    "봉사하며 땀 흘린 보람이 남았다."
  ],
  "book-fair": [
    "책을 사며 마음의 창고가 채워졌다.",
    "강연을 들으며 생각이 넓어졌다.",
    "구경만 했지만 자극은 남았다."
  ],
  "tool-broken": [
    "수리로 다시 쓸 수 있게 됐다.",
    "교체하며 속은 시원했지만 지갑은 가벼워졌다.",
    "공유로 해결해 관계가 좋아졌다."
  ],
  "friend-collab": [
    {
      success: "함께 도전해 시너지가 크게 났다.",
      fail: "호흡이 맞지 않아 아쉬움이 남았다."
    },
    "작게 참여해 부담을 줄였다.",
    "거절하고도 우정을 지켰다."
  ],
  "healthy-cooking": [
    "직접 요리해 몸과 마음이 든든해졌다.",
    "간단히 챙겨 부담을 줄였다.",
    "배달로 해결해 편했다."
  ],
  "market-sale": [
    "특가를 잘 잡아 만족했다.",
    "공동 구매로 분위기가 좋아졌다.",
    "패스하고 여유를 지켰다."
  ],
  "community-clean": [
    "청소에 참여해 동네가 밝아졌다.",
    "물품을 기부하며 마음이 따뜻해졌다.",
    "불참하며 조용히 지나갔다."
  ],
  "neighbor-pet": [
    "돌봐주며 신뢰가 생겼다.",
    "잠깐만 봐줘도 고마움이 전해졌다.",
    "거절하고 경계를 지켰다."
  ],
  "unexpected-compliment": [
    "고마움을 표현하니 분위기가 더 좋아졌다.",
    "가볍게 답해도 웃음이 남았다.",
    "무심히 넘겨 어색함이 스쳤다."
  ],
  "traffic-jam": [
    "우회로를 찾아 겨우 제시간을 맞췄다.",
    "기다리며 마음이 조금 조급해졌다.",
    "일정을 조정해 여유를 확보했다."
  ],
  "shared-investment": [
    {
      success: "공동 투자가 좋은 흐름을 탔다.",
      fail: "공동 투자가 기대만큼 풀리지 않았다."
    },
    {
      success: "소액만 넣었는데 뜻밖의 성과가 있었다.",
      fail: "소액이라도 분위기가 좋지 않았다."
    },
    "거절하고 리스크를 줄였다."
  ],
  "skill-cert-prep": [
    "집중 준비로 자신감이 자랐다.",
    "정보를 모으며 방향을 잡았다.",
    "다음에 하기로 하고 숨을 골랐다."
  ],
  "skill-cert-exam": [
    {
      success: "자신감 있게 응시해 결과가 좋았다.",
      fail: "의욕이 앞서 흐름이 흔들렸다."
    },
    {
      success: "차분히 응시해 안정적인 결과를 얻었다.",
      fail: "차분했지만 운이 따라주지 않았다."
    }
  ],
  "cleanup-sale": [
    "정리 판매로 공간과 마음이 가벼워졌다.",
    "기부하며 뿌듯함이 남았다.",
    "보관하며 다음을 기약했다."
  ],
  "mentor-advice": [
    "조언을 받아들이며 길이 트였다.",
    "절충하며 나다운 방향을 만들었다.",
    "넘기며 마음을 정리했다."
  ],
  "club-performance": [
    {
      success: "무대가 빛나며 큰 박수가 터졌다.",
      fail: "실수가 있었지만 의미 있는 경험이 남았다."
    },
    "관람하며 응원을 보냈다.",
    "운영을 도우며 보람을 느꼈다."
  ],
  "new-tool": [
    "새 도구를 익히며 손이 빨라졌다.",
    "동료에게 배워 길이 열렸다.",
    "미루며 다른 일에 집중했다."
  ],
  "family-photo": [
    "함께 찍으며 웃음이 번졌다.",
    "정리만 도왔지만 마음은 함께였다.",
    "불참해 분위기가 조금 어색해졌다."
  ],
  "hobby-class": [
    "클래스 등록으로 새로운 즐거움이 시작됐다.",
    "체험만 해도 충분히 즐거웠다.",
    "패스하고 여유를 챙겼다."
  ],
  "city-lottery": [
    {
      success: "도시 추첨에서 뜻밖의 행운이 찾아왔다.",
      fail: "기대는 컸지만 결과는 평범했다."
    },
    {
      success: "소액 참여가 의외의 즐거움이 됐다.",
      fail: "소액으로 가볍게 넘길 수 있었다."
    },
    "관망하며 조용히 흐름을 지켜봤다."
  ],
  "emergency-call": [
    "바로 달려가며 책임감이 커졌다.",
    "전화로 챙기며 마음을 전했다.",
    "미뤘더니 마음이 무거워졌다."
  ],
  "idea-notebook": [
    "아이디어를 정리하며 생각이 선명해졌다.",
    "나중에 하기로 하고 잠시 내려놓았다.",
    "공유하니 새로운 연결이 생겼다."
  ],
  "city-workshop": [
    "워크숍에 참여해 자극을 받았다.",
    {
      success: "발표 도전이 큰 호응으로 돌아왔다.",
      fail: "발표가 예상만큼 이어지지 않아 아쉬웠다."
    },
    "참관하며 흐름을 읽었다."
  ],
  "budget-review": [
    "꼼꼼히 점검하니 지출이 정리됐다.",
    "간단히 정리해도 부담은 줄었다.",
    "무시하고 지나치니 마음이 한켠 불안했다."
  ]
};
