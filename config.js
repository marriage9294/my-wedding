/**
 * ============================================
 *  모바일 청첩장 설정 파일
 *  이 파일만 수정하면 청첩장이 완성됩니다.
 *
 *  이미지는 설정이 필요 없습니다.
 *  아래 폴더에 1.jpg, 2.jpg, ... 순서로 넣어주세요:
 *    images/hero/1.jpg       — 메인 사진 (1장)
 *    images/story/1.jpg ...  — 스토리 사진 (자동 감지)
 *    images/gallery/1.jpg ...— 갤러리 사진 (자동 감지)
 *    images/location/1.jpg   — 오시는 길 사진 (1장)
 *    images/og/1.jpg         — OG 공유 썸네일 (1장)
 * ============================================
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "철언",
    lastName: "이",
    fullName: "이철언",
    father: "이형산",
    mother: "박상옥",
    fatherDeceased: false, // 故인이면 true
    motherDeceased: false,
  },

  bride: {
    name: "혜아",
    lastName: "선",
    fullName: "선혜아",
    father: "선재봉",
    mother: "오영란",
    fatherDeceased: false,
    motherDeceased: false,
  },

  wedding: {
    date: "2026-11-21",        // YYYY-MM-DD
    time: "13:30",             // HH:MM (24시간)
    dayOfWeek: "토요일",
    venue: "한국교회백주년기념관 웨딩홀",
    hall: "네오트로",
    address: "서울특별시 종로구 대학로 3길 29",
    tel: "02-2646-5115",
    mapLinks: {
      kakao: "https://kko.to/Q3lZ8Nbj7K",
      naver: "https://naver.me/F74V6gSf",
    },
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content:
      "하나님의 인도하심으로 만난 두 사람이\n사랑으로 하나 되어 새로운 여정을 시작하려 합니다.\n\n소중한 분들을 초대하오니\n함께 하시어 축복해 주시면 감사하겠습니다.",
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content:
      "사랑은 오래 참고 사랑은 온유하며 시기하지 아니하며 사랑은 자랑하지 아니하며 교만하지 아니하며 (고전 13:4)\n\n사랑은 하나님 안에서 서로에게 하는 약속임을,\n매일의 선택으로 지켜나가는 믿음임을 같이 고백하는 순간\n저희 두 사람은 서로가 짝임을 알아보았습니다. \n\n말씀 안에서 하나의 가정으로 나아가는 저희 두 사람의 첫 출발에 증인으로 함께 해주시어 감사합니다.",
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "이철언", bank: "카카오뱅크", number: "3333-02-45046924" },
      { role: "아버지", name: "이형산", bank: "우리은행", number: "1002-764-598151" },
      { role: "어머니", name: "박상옥", bank: "우리은행", number: "1002-345-678901" },
    ],
    bride: [
      { role: "신부", name: "선혜아", bank: "국민은행", number: "763602-04-136189" },
      { role: "아버지", name: "선재봉", bank: "국민은행", number: "491002-01-224867" },
      { role: "어머니", name: "오영란", bank: "우리은행", number: "1002-554-673810" },
    ],
  },

  // ── 링크 공유 시 나타나는 문구 ──
  kakaoShare: {
    // Kakao Developers 앱키 (JavaScript 키)
    appKey: "",
    title: "이철언 ♥ 선혜아 결혼합니다",
    description: "2026년 11월 21일 토요일 오후 1시30분\n네오트로 웨딩홀",
  },

  meta: {
    title: "이철언 ♥ 선혜아 결혼합니다",
    description: "2026년 11월 21일 토요일 오후 1시30분, 네오트로 웨딩홀",
  },
};
