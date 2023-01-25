export type Statement = {
  actor: Actor;
  verb: Verb;
  object: Object;
  context?: Context;
  result?: Result;
};

type Actor = {
  account: {
    homepage: string;
    name: string; // 아이디|소속|사원/대리
  };
  name: string; // 이름
  objectType: string; // Agent | Group
};

type Verb = {
  id: string; // https://w3id.org/xapi/video/verbs/행동
  display: {
    "en-US": "initialized" | "progressed" | "interacted" | "completed" | "terminated"; // 행동
  };
};

type Object = {
  objectType: "Activity";
  id: string; // page url
  definition: {
    type:
      | "https://w3id.org/xapi/acrossx/verbs/evaluated"
      | "https://w3id.org/xapi/acrossx/activities/learning-plan";
    name: {
      "en-US": string; // lesson 정보 "Lesson 1"
    };
    description: {
      "en-US": string; // 레슨 설명 "차이홍(샘플데이터)-빨강 > Lesson 1"
    };
  };
};

type Context = Initialized | Terminated;

type Result =
  | Progressed
  | InteractedStart
  | InteractedScrap
  | InteractedImageFullscreen
  | InteractedContentQuizSelected
  | InteractedContent
  | InteractedCompleted;

type Initialized = {
  sessionId: string; // 세션정보
  src: string; // 통합플레이어 최초 url
  userAgent: string; // 접속자 정보
  course: string; // 코스명
  subject: string; // 과목명
  lesson: string; // 레슨명
  totalPage: number; // 전체페이지수
};

type Terminated = Initialized & {
  duration: string; // 실제학습시간
};

type Progressed = {
  sessionId: string; // 세션정보
  page: number; // 현재페이지
  percent: number; // 학습진도율
  duration: string; // 실제학습시간
  progressSegments: string; // 사용자가 학습한 페이지 이력
  completion: boolean; // 진도율 true: 90% 이상, false: 90퍼 미만
};

type InteractedStart = {
  sessionId: string; // 세션정보
  course: string; // 코스명
  subject: string; // 과목명
  lesson: string; // 레슨명
  turn: string; // 회차명
};

type InteractedScrap = InteractedStart & {
  scrap: boolean; // 스크랩여부 true: 추가, false: 삭제
  page: number; // 현재페이지
};

type InteractedContent = {
  // 콘텐츠 클릭
  sessionId: string; // 세션정보
  type: "audio" | "video" | "image"; // 콘텐츠 타입
  src: string; // 콘텐츠 url
  page: number; // 현재페이지
};

type InteractedImageFullscreen = {
  sessionId: string; // 세션정보
  type: "image"; // 콘텐츠 타입
  src: string; // 콘텐츠 url
  fullscreen: boolean; // true: 확대, false: 축소
  page: number; // 현재페이지
};

type InteractedContentQuizSelected = {
  sessionId: string; // 세션정보
  templateType: string; // 템플릿 타입
  type: string; // 컴포넌트 타입
  page: number; // 현재페이지
  completion: boolean; // 진도율 true: 90% 이상, false: 90% 미만
};

type InteractedCompleted = {
  sessionId: string; // 세션정보
  page: number; // 현재페이지
  percent: number; // 학습진도율
  duration: string; // 실제학습시간
  completion: boolean; // 진도율 true: 90% 이상, false: 90% 미만
};
