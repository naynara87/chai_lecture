import { Page } from "chai-ui-v2";
import { v4 as uuidV4 } from "uuid";

export const dummyPageData: Page = {
  id: "d80ccb9f-8db4-4a8b-844a-24d76183a037",
  name: "한어",
  type: "multiPage",
  data: [
    {
      id: uuidV4(),
      type: "TemplateQuizConversation",
      leftContents: [
        {
          id: uuidV4(),
          type: "fullAudio",
          data: {},
        },
        {
          id: uuidV4(),
          type: "activityGuideCharacter",
          data: {
            text: "지난 시간엔 계절에 대한 회화를 학습했어요. 다음 대화를 잘 보고 빈 칸에 들어갈 알맞은 단어를 고르세요.",
            character: {
              src: "asdfasdf",
            },
          },
        },
      ],
      rightContents: [
        {
          id: uuidV4(),
          type: "conversationQuiz",
          data: [
            {
              text: "今天刮风，*blank*，很冷。",
              pronunciation: "Jīntiān guā fēng, xià xuě, hěn lěng.",
              meaning: "오늘은 바람이 불고, 눈이 내려서 추워.",
              choice: [
                { text: "下雪", isAnswer: true },
                {
                  text: "下雪",
                  isAnswer: false,
                },
              ],
              character: {
                name: "왕리리",
                src: "",
              },
              audio: {
                src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
              },
            },
            {
              text: "我觉得这里的冬天没有 那么冷。",
              pronunciation:
                "Wǒ juédé zhèlǐ de dōngtiān méiyǒu zhòng guó nàme lěng.",
              meaning: "나는 여기 겨울이 중국만큼 춥지 않은 것 같아.",
              choice: [
                { text: "下雪", isAnswer: true },
                {
                  text: "下雪",
                  isAnswer: false,
                },
              ],
              character: {
                name: "김민호",
                src: "",
              },
              audio: {
                src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
              },
            },
          ],
        },
      ],
    },
    {
      id: uuidV4(),
      type: "TemplateQuizConversation",
      leftContents: [
        {
          id: uuidV4(),
          type: "fullAudio",
          data: {},
        },
        {
          id: uuidV4(),
          type: "activityGuideCharacter",
          data: {
            text: "지난 시간엔 계절에 대한 회화를 학습했어요. 다음 대화를 잘 보고 빈 칸에 들어갈 알맞은 단어를 고르세요.",
            character: {
              src: "asdfasdf",
            },
          },
        },
      ],
      rightContents: [
        {
          id: uuidV4(),
          type: "conversationQuiz",
          data: [
            {
              text: "今天刮风，*blank*，很冷。",
              pronunciation: "Jīntiān guā fēng, xià xuě, hěn lěng.",
              meaning: "오늘은 바람이 불고, 눈이 내려서 추워.",
              choice: [
                { text: "下雪", isAnswer: true },
                {
                  text: "下雪",
                  isAnswer: false,
                },
              ],
              character: {
                name: "왕리리",
                src: "",
              },
              audio: {
                src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
              },
            },
            {
              text: "我觉得这里的冬天没有 那么冷。",
              pronunciation:
                "Wǒ juédé zhèlǐ de dōngtiān méiyǒu zhòng guó nàme lěng.",
              meaning: "나는 여기 겨울이 중국만큼 춥지 않은 것 같아.",
              choice: [
                { text: "下雪", isAnswer: true },
                {
                  text: "下雪",
                  isAnswer: false,
                },
              ],
              character: {
                name: "김민호",
                src: "",
              },
              audio: {
                src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
              },
            },
          ],
        },
      ],
    },
  ],
};
