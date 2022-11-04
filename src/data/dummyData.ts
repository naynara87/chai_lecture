import { AppData } from "../types/appData";

export const dummyData: AppData = {
  meta: {
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
  },
  corners: [
    {
      id: 1,
      type: "review",
      title: "Review",
      isCompleted: false,
      introduction: {
        title: "복습모달 제목",
        description: "복습 모달 문구",
      },
      pages: [
        {
          title: "단어 익히기",
          description: "녹음을 듣고 알맞은 발음을 고르세요.",
          template: {
            type: "TP01A",
            contents: [
              {
                type: "chooseTextByAudio",
                data: {
                  choices: ["바나나", "딸기"],
                  answerIndex: 0,
                  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                },
              },
              {
                type: "chooseTextByAudio",
                data: {
                  choices: ["바나나2", "딸기"],
                  answerIndex: 0,
                  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                },
              },
            ],
          },
        },
      ],
    },
  ],
};
