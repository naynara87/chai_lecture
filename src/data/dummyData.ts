import { AppData } from "../types/appData";

// 과정(course) > 레슨(lesson) > 코너(corner) > 페이지(page)
export const dummyData: AppData = {
  isCompleted: false,
  course: {
    id: 1,
    title: "초급 1",
  },
  lesson: {
    id: 1,
    title: "Lesson 1",
  },
  lastCornerId: 1,
  lastPageId: 1,
  title: "학습 리스트",
  description: "중국과 중국어에 대해 학습을 통해 알아봅시다.",
  corners: [
    {
      id: 1,
      type: "review",
      title: "복습",
      isCompleted: false,
      introduction: {
        title: "복습모달 제목",
        description: "복습 모달 문구",
      },
      pages: [
        {
          id: 11,
          title: "지난 레슨 확인하기",
          description: "녹음을 듣고 알맞은 발음을 고르세요.",
          template: {
            type: "TP01A", // TODO: iframe 타입 추가
            // TODO: iframe에 따른 src 옵셔널로 추가
            contents: [
              {
                type: "chooseTextByAudio",
                data: {
                  choices: ["ge", "ke"],
                  answerIndex: 0,
                  audio: {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                },
              },
              {
                type: "chooseTextByAudio",
                data: {
                  choices: ["he", "ge"],
                  answerIndex: 0,
                  audio: {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                },
              },
            ],
          },
        },
        {
          id: 12,
          title: "단어 익히기",
          description: "녹음을 듣고 알맞은 발음을 고르세요.",
          template: {
            type: "TP01A",
            contents: [
              {
                type: "chooseTextByAudio",
                data: {
                  choices: ["qi", "xi"],
                  answerIndex: 0,
                  audio: {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                },
              },
              {
                type: "chooseTextByAudio",
                data: {
                  choices: ["ji", "qi"],
                  answerIndex: 0,
                  audio: {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                },
              },
            ],
          },
        },
      ],
    },
    {
      id: 2,
      type: "study1",
      title: "학습1",
      isCompleted: false,
      introduction: {
        title: "성조와 운모을 공부해봐요",
        description: "성조와 운모 학습 상세 사항",
      },
      pages: [
        {
          id: 21,
          title: "성조",
          description: "발음을 듣고 따라 읽어보세요.",
          template: {
            type: "TP03A",
            contents: [
              {
                type: "text",
                data: {
                  text: "성조는 음의 높낮이와 그 변화를 표시한 것으로, 중국어에는 네 개의 성조가 있습니다.",
                },
              },
              {
                type: "listenWords",
                data: [
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 1성",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 2성",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 3성",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 4성",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 22,
          title: "운모",
          description: "운모에 대해 알아봅시다.",
          template: {
            type: "TP03B",
            contents: [
              {
                type: "text",
                data: {
                  text: "운모는 음절에서 성모를 제외한 나머지 부분으로, 모두 36입니다.",
                },
              },
              {
                type: "listenWords",
                data: [
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "o",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "e",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "i",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "u",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "u",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
};
