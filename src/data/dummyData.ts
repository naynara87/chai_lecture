import { AppData } from "../types/appData";

// 과정(course) > 레슨(lesson) > 회차(corner) > 페이지(page)
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
            type: "TP03A", // TODO: iframe 타입 추가
            // TODO: iframe에 따른 src 옵셔널로 추가
            contents: [
              {
                type: "html",
                data: {
                  text: "<p>성조는 음의 높낮이와 그 변화를 표시한 것으로, 중국어에는 네 개의 성조가 있습니다.</p>",
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
                    meaning: "<p>제 1성</p>",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                    meaning: "<p>제 2성</p>",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "<p>제 3성</p>",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                    meaning: "<p>제 4성</p>",
                  },
                ],
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
        {
          id: 13,
          title: "중국어의 개요",
          description: "중국어의 개요에 대해 알아봅시다.",
          template: {
            type: "TP15A",
            contents: [],
            tabs: [
              {
                name: "한어",
                contents: [
                  {
                    type: "html",
                    data: {
                      kind: "description",
                      text: "<p>중국에서는 기존의 복잡한 한자(번체자)를 쉽고 간단하게 만든 '간화자'를 사용합니다.</p>",
                    },
                  },
                  {
                    type: "html",
                    data: {
                      kind: "tip",
                      text: "<p>'간화자'는 간체자'라고도 합니다.</p>",
                    },
                  },
                  {
                    type: "images",
                    data: [
                      {
                        src: "https://i.picsum.photos/id/116/700/500.jpg?hmac=xnRVRAfW8IZ_-xe8038EpnpF2G2EFtHn32lCz1Nd2Mw",
                      },
                    ],
                  },
                ],
              },
              {
                name: "보통화",
                contents: [
                  {
                    type: "html",
                    data: {
                      kind: "description",
                      text: "<p>보통화는 기존의 복잡한 한자(번체자)를 쉽고 간단하게 만든 '간화자'를 사용합니다.</p>",
                    },
                  },
                  {
                    type: "html",
                    data: {
                      kind: "tip",
                      text: "<p>'간화자'는 간체자'라고도 합니다.</p>",
                    },
                  },
                  {
                    type: "images",
                    data: [
                      {
                        src: "https://i.picsum.photos/id/116/700/500.jpg?hmac=xnRVRAfW8IZ_-xe8038EpnpF2G2EFtHn32lCz1Nd2Mw",
                      },
                    ],
                  },
                ],
              },
              {
                name: "중국어의 구성(한자)",
                contents: [
                  {
                    type: "html",
                    data: {
                      kind: "description",
                      text: "<p>중국어의 구성(한자)는 기존의 복잡한 한자(번체자)를 쉽고 간단하게 만든 '간화자'를 사용합니다.</p>",
                    },
                  },
                  {
                    type: "html",
                    data: {
                      kind: "tip",
                      text: "<p>'간화자'는 간체자'라고도 합니다.</p>",
                    },
                  },
                  {
                    type: "images",
                    data: [
                      {
                        src: "https://i.picsum.photos/id/116/700/500.jpg?hmac=xnRVRAfW8IZ_-xe8038EpnpF2G2EFtHn32lCz1Nd2Mw",
                      },
                    ],
                  },
                ],
              },
              {
                name: "중국어의 구성(병음)",
                contents: [
                  {
                    type: "html",
                    data: {
                      kind: "description",
                      text: "<p>중국어의 구성(병음)는 기존의 복잡한 한자(번체자)를 쉽고 간단하게 만든 '간화자'를 사용합니다.</p>",
                    },
                  },
                  {
                    type: "html",
                    data: {
                      kind: "tip",
                      text: "<p>'간화자'는 간체자'라고도 합니다.</p>",
                    },
                  },
                  {
                    type: "images",
                    data: [
                      {
                        src: "https://i.picsum.photos/id/116/700/500.jpg?hmac=xnRVRAfW8IZ_-xe8038EpnpF2G2EFtHn32lCz1Nd2Mw",
                      },
                    ],
                  },
                ],
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
                type: "html",
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
                type: "html",
                data: {
                  text: "운모는 음절에서 성모를 제외한 나머지 부분으로, 모두 36입니다.",
                },
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                  },
                  {
                    main: "o",
                  },
                  {
                    main: "e",
                  },
                  {
                    main: "i",
                  },
                  {
                    main: "u",
                  },
                  {
                    main: "u2",
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
