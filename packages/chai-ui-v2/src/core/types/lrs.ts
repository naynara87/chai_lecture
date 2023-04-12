/* eslint-disable @typescript-eslint/no-explicit-any */

import { ID } from "./appData";
import { ContentData } from "./lcms";

/**
 * LRS Activity State type
 * https://bubblecon-corp.atlassian.net/l/cp/EDz40KZ0
 */
export interface LRSActivityState {
  account_name: string; // 회원의 actor 구성 정보. | 값으로 인자를 구분한다.
  course_id: ID; // 코스 seq_id
  course_name: string; // 과정 이름
  lesson_id: ID; // 레슨 seq_id
  lesson_name: string; // 레슨 이름
  lesson_type_code: ID; // 레슨 타입 코드 id
  page: number; // 현재 페이지 번호
  pages: number; // 전체 페이지 수
  part_id: ID; // 코너 seq_id
  part_name: string; // 코너 이름
  complete_progress: number; // 학습 이수율. 소수 3자리까지 노출
  progress: number; // 페이지 진도율. 소수 3자리까지 생성
  progress_segments: string; // 페이지 이동에 대한 이동 이력
  time: number; // 학습창을 열고 학습한 총 시간
  incorrect_data: LRSAnswerData[];
  correct_data: LRSAnswerData[];
  progress_data: LRSCornerProgress[]; // 코너별 진도 상태
}

export interface LRSAnswerData {
  page_id: ID;
  page_area_code: ContentData["pageArea_type"];
  timestamp: string;
}

export interface LRSCornerProgress {
  corner_id: ID;
  is_completed: boolean;
  pages: LRSPageProgress[];
}
export interface LRSPageProgress {
  is_checked: boolean;
  is_completed: boolean;
  page_id: ID;
}
export interface XAPIWrapper {
  lrs: {
    endpoint: string;
    auth: string;
    actor: string; // XAPIWrapperLrsActor를 JSON.stringify로 형식변환한것.
  };
  base: string;
  changeConfig: ({
    endpoint,
    auth,
    actor,
  }: XAPIWrapperActorChangeConfigPram) => void;
}

export interface XAPIWrapperActorChangeConfigPram {
  endpoint?: string;
  auth: string;
  actor: string;
}

export interface XAPIWrapperLrsActor {
  account: XAPIWrapperLrsActorAccount;
  name: string;
  objectType: string;
}

export interface XAPIWrapperLrsActorAccount {
  homePage: string;
  name: string;
}

export interface BubbleAPI {
  getInstance: () => XapiV1;
}

export interface ProgressPageData {
  currentPage: number;
  nextPage: number;
  progress: number;
  partName: string;
  partId: ID;
  pageId: ID;
  pageName: string;
  pageType: string;
  pageAreaCd: string;
  pageTemplateCode: number;
}

export interface XapiV1 {
  initialize: (
    targetObjectApplication: unknown,
    activityIdBase: string,
    contentName: string,
    description: string,
    stateId: string,
  ) => void;
  suspend: (newState: LRSActivityState) => void;
  addContextDetail: (context_detail: ContextDetail) => void;
  addExtensionDetail: (extension_detail: XapiIndicators) => void;
  addObjectContext: (object_context: XapiIndicators) => void;
  addResultExtension: (result_extension: XapiIndicators) => void;
  saveState: () => void;
  sendProgress: (
    pageData: ProgressPageData,
    newState: LRSActivityState,
  ) => void;
  sendComplete(pageData: ProgressPageData, newState: LRSActivityState): void;
  sendPlayed: (contentType: "video" | "audio") => void;
  sendAnswered: () => void;
  sendInitialized: () => LRSActivityState;
}

export interface XAPIOptions {
  // #1 actor 정의
  name?: string;
  homePage?: string;
  account_name?: string;
  email?: string;
  member?: string;
  // #2 objecjt 정의
  activity_id?: string; // object.id 값
  content_name?: string; // 레슨 정보
  description?: string; // 레슨 설명 정보
  // #3 activityState의 stateId 정의
  state_id?: string;
  // #4 학습 정보 전송할 LRS url 기입
  lrsUrl?: string;

  use_group?: boolean;

  // #5 xAPI 추가 context 사용
  object_context?: XapiIndicators;
  result_extensions?: XapiIndicators;
  context_details?: ContextDetail;
  extension_details?: XapiIndicators;
}

export interface ContextDetail {
  registration: string;
  revision: string;
  contextActivities: {
    category: [
      {
        id: string;
        objectType: string;
      },
    ];
    parent: [
      {
        definition: {
          description: {
            "en-US": string;
          };
          name: {
            "en-US": string;
          };
        };
        id: string;
        objectType: string;
      },
    ];
  };
}

export type XapiIndicators = Record<string, string | number>;

export interface ADL {
  XAPIWrapper: XAPIWrapper;
  bubbleAPI: BubbleAPI;
  // NOTE any로 정의한것은 통합플레이어에서 사용하진않지만 ADL내부적으로 사용 및 정의되어있는것.
  XAPIStatement: any;
  XHR_request: any;
  XHR_sync_request: any;
  activityTypes: any;
  dataFromISOString: any;
  formatHash: any;
  launch: any;
  ruuid: any;
  verbs: any;
  xapiutil: any;
  xhrRequestOnError: any;
}

export type XapiVerb =
  | "initialized"
  | "progressed"
  | "completed"
  | "suspended"
  | "played"
  | "created"
  | "answered";

export type XapiEventName =
  | "playerLoaded" // initialized
  | "pageChanged" // progressed
  | "playerEnded" // completed
  | "playerSuspended" // suspended : 학습을 끝내지않고 중간에 나갈때
  | "videoPlayed" // played
  | "audioPlayed" // played
  | "recordCreated" // created : 녹음
  | "quizAnswered"; // answered : 퀴즈 다 풀고 답안확인시
