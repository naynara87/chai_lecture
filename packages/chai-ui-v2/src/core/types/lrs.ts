/**
 * LRS Activity State type
 * https://bubblecon-corp.atlassian.net/l/cp/EDz40KZ0
 */
export interface LRSActivityState {
  account_name: string; // 회원의 actor 구성 정보. | 값으로 인자를 구분한다.
  course_id: number; // 코스 seq_id
  course_name: string; // 과정 이름
  lesson_id: number; // 레슨 seq_id
  lesson_name: string; // 레슨 이름
  lesson_type_code: number; // 레슨 타입 코드 id
  page: number; // 현재 페이지 번호
  pages: number; // 전체 페이지 수
  part_id: number; // 코너 seq_id
  part_name: string; // 코너 이름
  complete_progress: number; // 학습 이수율. 소수 3자리까지 노출
  progress: number; // 페이지 진도율. 소수 3자리까지 생성
  progress_segments: string; // 페이지 이동에 대한 이동 이력
  time: number; // 학습창을 열고 학습한 총 시간
  incorrect_datas: LRSIncorrectData[];
  corners: LRSCornerProgress[]; // 코너별 진도 상태
}

export interface LRSIncorrectData {
  page_id: number;
  timestamp: string;
}

export interface LRSCornerProgress {
  corner_id: number;
  is_completed: boolean;
  pages: LRSPageProgress[];
}

export interface LRSPageProgress {
  is_checked: boolean;
  is_completed: boolean;
  page_id: number;
}
