import { CornerData, LessonData } from "chai-ui-v2";
import { v4 as uuidV4 } from "uuid";

export const v2LessonData: LessonData = {
  // 레슨 메타 정보
  meta: {
    id: 1,
    name: "Lesson 1",
    courseId: 1,
    courseName: "차이홍(샘플데이터)-빨강",
  },
  // 코너 리스트
  data: [
    {
      id: 11,
      name: "복습",
    },
    {
      id: 12,
      name: "학습 들어가기",
    },
    {
      id: 13,
      name: "패턴 중국어",
    },
    {
      id: 14,
      name: "회화",
    },
    {
      id: 15,
      name: "문법",
    },
    {
      id: 16,
      name: "문화",
    },
    {
      id: 17,
      name: "학습 정리",
    },
  ],
};

export const v2CornerDataList: CornerData[] = [
  {
    // 복습 코너 메타 정보
    meta: {
      id: 11,
      name: "복습",
      lessonId: 1,
      lessonName: "Lesson 1",
      lessonTpCd: "30",
      courseId: 1,
      courseName: "차이홍(샘플데이터)-빨강",
      isCompleted: false,
    },
    // 복습 page 리스트
    data: [
      {
        id: 1,
        name: "한어",
        type: "MultiPage",
        data: [
          {
            id: uuidV4(),
            type: "TemplateQuizConversation",
            leftContents: [
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
                      { text: "정답", isAnswer: true },
                      {
                        text: "오답",
                        isAnswer: false,
                      },
                    ],
                    character: {
                      name: "왕리리",
                      src: "adsfasdf",
                    },
                    audio: {
                      src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                    },
                  },
                  {
                    text: "今天刮风，*blank*，很冷。",
                    pronunciation: "Jīntiān guā fēng, xià xuě, hěn lěng.",
                    meaning: "오늘은 바람이 불고, 눈이 내려서 추워.",
                    choice: [
                      { text: "정답", isAnswer: true },
                      {
                        text: "오답",
                        isAnswer: false,
                      },
                    ],
                    character: {
                      name: "김민호",
                      src: "adsfasdf",
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
      },
      {
        id: 2,
        name: "한어",
        type: "SinglePage",
        data: {
          id: uuidV4(),
          type: "Template_H_3_7",
          leftContents: [
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
              type: "speaking",
              data: {
                speakingTime: 3,
                src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
              },
            },
          ],
        },
      },
      {
        id: 3,
        name: "한어",
        type: "SinglePage",
        data: {
          id: uuidV4(),
          type: "TemplateConversationRepeat",
          leftContents: [
            {
              id: uuidV4(),
              type: "conversationWordList",
              data: {
                words: [
                  {
                    text: "游泳",
                    pronunciation: "yóuyǒng",
                    meaning: "수영하다",
                    audio: {
                      src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                    },
                  },
                  {
                    text: "游泳2",
                    pronunciation: "yóuyǒng2",
                    meaning: "수영하다2",
                    audio: {
                      src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                    },
                  },
                  {
                    text: "游泳2",
                    pronunciation: "yóuyǒng2",
                    meaning: "수영하다2",
                    audio: {
                      src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                    },
                  },
                  {
                    text: "游泳2",
                    pronunciation: "yóuyǒng2",
                    meaning: "수영하다2",
                    audio: {
                      src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                    },
                  },
                  {
                    text: "游泳2",
                    pronunciation: "yóuyǒng2",
                    meaning: "수영하다2",
                    audio: {
                      src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                    },
                  },
                  {
                    text: "游泳2",
                    pronunciation: "yóuyǒng2",
                    meaning: "수영하다2",
                    audio: {
                      src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                    },
                  },
                ],
              },
            },
          ],
          rightContents: [
            {
              id: uuidV4(),
              type: "conversation",
              data: [
                {
                  text: "我喜欢秋天，因为秋天不冷不热，很凉快。",
                  pronunciation:
                    "Wǒ xǐhuān qiūtiān, yīnwèi qiūtiān bù lěngbù rè, hěn liángkuai.",
                  meaning: "안녕",
                  character: {
                    name: "왕리리",
                    src: "이미지 주소",
                  },
                  audio: {
                    src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                  },
                  speakingTime: 3,
                },
                {
                  text: "是吗？ 你喜欢什么季节？",
                  pronunciation: "Shì ma? Nǐ xǐhuān shénme jìjié?",
                  meaning: "안녕",
                  character: {
                    name: "김민호",
                    src: "이미지 주소",
                  },
                  audio: {
                    src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                  },
                  speakingTime: 3,
                },
              ],
            },
          ],
        },
      },
      {
        id: 4,
        name: "단어",
        type: "MultiPage",
        introduction: {
          title: "a",
          subTitle: "a",
          character: {
            url: "a",
          },
          contents: "a",
        },
        data: [
          {
            id: uuidV4(),
            type: "Template_H_5_5",
            leftContents: [
              {
                id: uuidV4(),
                type: "video",
                data: {
                  src: "https://cdn.bubblecon.co.kr/videos/45.mp4",
                },
              },
            ],
            rightContents: [
              {
                id: uuidV4(),
                type: "numberingTextList",
                data: [
                  {
                    firstText: "테스트 텍스트1-1",
                    secondText: "테스트 텍스트1-2",
                  },
                  {
                    firstText: "테스트 텍스트2-1",
                    secondText: "테스트 텍스트2-2",
                  },
                ],
              },
            ],
          },
          {
            id: uuidV4(),
            type: "Template01",
            contents: [
              {
                id: uuidV4(),
                type: "video",
                data: {
                  src: "https://cdn.bubblecon.co.kr/videos/45.mp4",
                },
              },
            ],
          },
          {
            id: uuidV4(),
            type: "Template01",
            contents: [
              {
                id: uuidV4(),
                type: "video",
                data: {
                  src: "https://cdn.bubblecon.co.kr/videos/46.mp4",
                },
              },
            ],
          },
          {
            id: uuidV4(),
            type: "Template01",
            contents: [
              {
                id: uuidV4(),
                type: "explainingCharacter",
                data: {
                  text: "이번 패턴은 어떻게 사용하는지 알아볼까요?",
                  explain:
                    "’坐 zuò’는 ‘앉다’라는 뜻으로, 교통수단과 함께 쓰면 ‘타다’라는 뜻을 나타냅니다. ‘坐 zuò’는 좌석에 앉아 가는 교통수단에 사용합니다.",
                  character: {
                    src: "string",
                  },
                },
              },
            ],
          },
          {
            id: uuidV4(),
            type: "TemplateQuizConversation",
            leftContents: [
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
                      { text: "정답", isAnswer: true },
                      {
                        text: "오답",
                        isAnswer: false,
                      },
                    ],
                    character: {
                      name: "왕리리",
                      src: "adsfasdf",
                    },
                    audio: {
                      src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
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
                      { text: "정답", isAnswer: true },
                      {
                        text: "오답",
                        isAnswer: false,
                      },
                    ],
                    character: {
                      name: "김민호",
                      src: "adsfasdf",
                    },
                    audio: {
                      src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                    },
                  },
                  {
                    text: "今天刮风，*blank*，很冷。",
                    pronunciation: "Jīntiān guā fēng, xià xuě, hěn lěng.",
                    meaning: "오늘은 바람이 불고, 눈이 내려서 추워.",
                    choice: [
                      { text: "정답", isAnswer: true },
                      {
                        text: "오답",
                        isAnswer: false,
                      },
                    ],
                    character: {
                      name: "김민호",
                      src: "adsfasdf",
                    },
                    audio: {
                      src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                    },
                  },
                ],
              },
            ],
          },
          {
            id: uuidV4(),
            type: "TemplateWordCard",
            leftContents: [
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
                type: "iconText",
                data: {
                  text: "연습해 보세요.",
                },
              },
              {
                id: uuidV4(),
                type: "textBoxList",
                data: [
                  {
                    text: "a",
                    audio: {
                      // src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                      src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                    },
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                    },
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                    },
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        name: "단어",
        type: "SinglePage",
        data: {
          id: uuidV4(),
          type: "TemplateQuizWordsInOrder",
          leftContents: [
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
          rightContents: {
            id: uuidV4(),
            type: "quizWordsInOrder",
            data: {
              choice: [
                {
                  text: "<p>冷<br>lěng</p>",
                  isChoice: true,
                  answerIndex: 0,
                },
                {
                  text: "<p>!</p>",
                  isChoice: false,
                  answerIndex: -1,
                },
                {
                  text: "<p>首尔的<br>Shǒu'ěr de</p>",
                  isChoice: true,
                  answerIndex: 1,
                },
                {
                  text: "<p>没有<br>Méiyǒu</p>",
                  isChoice: true,
                  answerIndex: 2,
                },
                {
                  text: "<p>?</p>",
                  isChoice: false,
                  answerIndex: -1,
                },
              ],
              character: {
                name: "김민호",
                src: "asdfasdf",
              },
              exampleContents: [
                {
                  id: uuidV4(),
                  type: "text",
                  data: {
                    text: "너는 어디 가니?",
                  },
                },
              ],
              quizPopup: {
                id: uuidV4(),
                type: "quizPopupModal",
                data: {
                  correct: {
                    title: "做得好!",
                    sub: "정답이에요!",
                    description:
                      "제3성이 연이어 나오면, 앞에 있는 제3성은 제2성으로 발음합니다. 이 때, 성조의 표기는 바뀌지 않습니다.",
                    character: {
                      src: "",
                    },
                    soundEffect: {
                      src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                    },
                    video: {
                      src: "https://cdn.bubblecon.co.kr/videos/46.mp4",
                    },
                  },
                  incorrect: {
                    title: "真难过!",
                    sub: "아쉬워요!",
                    description:
                      "제3성이 연이어 나오면, 앞에 있는 제3성은 제2성으로 발음합니다. 이 때, 성조의 표기는 바뀌지 않습니다.",
                    character: {
                      src: "",
                    },
                    soundEffect: {
                      src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                    },
                    video: {
                      src: "https://cdn.bubblecon.co.kr/videos/46.mp4",
                    },
                  },
                },
              },
            },
          },
        },
      },
      {
        id: 6,
        name: "단어",
        type: "SinglePage",
        data: {
          id: uuidV4(),
          type: "TemplateQuizMultiChoice",
          leftContents: [
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
          rightContents: {
            id: uuidV4(),
            type: "multiChoice",
            data: {
              choice: ["오답", "정답"],
              answerIndex: 1,
              exampleContents: [
                {
                  id: uuidV4(),
                  type: "text",
                  data: {
                    text: "<p>제3성이 연이어 나올 때,<br/>올바르게 발음한 것을 고르세요.</p>",
                  },
                },
              ],
              quizPopup: {
                id: uuidV4(),
                type: "quizPopupModal",
                data: {
                  correct: {
                    title: "做得好!",
                    sub: "정답이에요!",
                    description:
                      "제3성이 연이어 나오면, 앞에 있는 제3성은 제2성으로 발음합니다. 이 때, 성조의 표기는 바뀌지 않습니다.",
                    character: {
                      src: "",
                    },
                    soundEffect: {
                      src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                    },
                    video: {
                      src: "https://cdn.bubblecon.co.kr/videos/46.mp4",
                    },
                  },
                  incorrect: {
                    title: "真难过!",
                    sub: "아쉬워요!",
                    description:
                      "제3성이 연이어 나오면, 앞에 있는 제3성은 제2성으로 발음합니다. 이 때, 성조의 표기는 바뀌지 않습니다.",
                    character: {
                      src: "",
                    },
                    soundEffect: {
                      src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                    },
                    video: {
                      src: "https://cdn.bubblecon.co.kr/videos/46.mp4",
                    },
                  },
                },
              },
            },
          },
        },
      },
      {
        id: 7,
        name: "단어",
        type: "SinglePage",
        data: {
          id: uuidV4(),
          type: "TemplateQuizSentencesInOrder",
          titleContents: {
            id: uuidV4(),
            type: "iconText",
            data: {
              text: "자연스러운 단문이 되도록 문장을 배열해 보세요.",
            },
          },
          mainContents: {
            id: uuidV4(),
            type: "quizSentence",
            data: {
              characters: [
                {
                  name: "왕리리",
                  src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                  sentences: [
                    {
                      sentence: "糟糕！我的钱包不见了。",
                      isChoice: false,
                      answerIndex: -1,
                    },
                  ],
                },
                {
                  name: "김민호",
                  src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                  sentences: [
                    {
                      sentence: "你最后一次在哪儿用过？",
                      isChoice: true,
                      answerIndex: 0,
                    },
                  ],
                },
                {
                  name: "왕리리",
                  src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                  sentences: [
                    {
                      sentence: "我刚刚还用过呢，现在怎么找也找不着。",
                      isChoice: false,
                      answerIndex: -1,
                    },
                  ],
                },
                {
                  name: "김민호",
                  src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                  sentences: [
                    {
                      sentence: "真的？你找找包里。",
                      isChoice: true,
                      answerIndex: 1,
                    },
                    {
                      sentence: "说不定在那里，你好好儿地再想想。",
                      isChoice: false,
                      answerIndex: -1,
                    },
                  ],
                },
              ],
              quizPopup: {
                id: uuidV4(),
                type: "quizPopupModal",
                data: {
                  correct: {
                    title: "做得好!",
                    sub: "정답이에요!",
                    description:
                      "제3성이 연이어 나오면, 앞에 있는 제3성은 제2성으로 발음합니다. 이 때, 성조의 표기는 바뀌지 않습니다.",
                    character: {
                      src: "",
                    },
                    soundEffect: {
                      src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                    },
                    video: {
                      src: "https://cdn.bubblecon.co.kr/videos/45.mp4",
                    },
                  },
                  incorrect: {
                    title: "真难过!",
                    sub: "아쉬워요!",
                    description:
                      "제3성이 연이어 나오면, 앞에 있는 제3성은 제2성으로 발음합니다. 이 때, 성조의 표기는 바뀌지 않습니다.",
                    character: {
                      src: "",
                    },
                    soundEffect: {
                      src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                    },
                    video: {
                      src: "https://cdn.bubblecon.co.kr/videos/46.mp4",
                    },
                  },
                },
              },
            },
          },
        },
      },
      {
        id: 8,
        name: "단어",
        type: "SinglePage",
        data: {
          id: uuidV4(),
          type: "TemplateQuizSpeaking",
          leftContents: [
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
          rightContents: {
            id: uuidV4(),
            type: "finalSpeaking",
            data: {
              exampleContents: [
                {
                  id: uuidV4(),
                  type: "conversation",
                  data: [
                    {
                      text: "我喜欢秋天，因为秋天不冷不热，很凉快。",
                      pronunciation:
                        "Wǒ xǐhuān qiūtiān, yīnwèi qiūtiān bù lěngbù rè, hěn liángkuai.",
                      meaning: "안녕",
                      character: {
                        name: "왕리리",
                        src: "이미지 주소",
                      },
                      audio: {
                        src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                      },
                    },
                    {
                      text: "我觉得这里的冬天没有中国那么冷。",
                      pronunciation:
                        "Wǒ juédé zhèlǐ de dōngtiān méiyǒu zhòng guó nàme lěng.",
                      meaning: "이곳의 겨울은 중국만큼 춥지 않은 것 같아요.",
                      character: {
                        name: "김민호",
                        src: "이미지 주소",
                      },
                      audio: {
                        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                      },
                      isBlank: true,
                    },
                  ],
                },
              ],
              answerModel: {
                text: "我觉得这里的冬天没有中国那么冷。",
                pronunciation:
                  "Wǒ juédé zhèlǐ de dōngtiān méiyǒu zhòng guó nàme lěng.",
                meaning: "이곳의 겨울은 중국만큼 춥지 않은 것 같아요.",
              },
            },
          },
        },
      },
      {
        id: 9,
        name: "단어",
        type: "SinglePage",
        data: {
          id: uuidV4(),
          type: "Template01",
          contents: [
            {
              id: uuidV4(),
              type: "notiCharacterList",
              data: [
                {
                  text: "첫번째 영역",
                  character: {
                    src: "왕리리",
                  },
                },
                {
                  text: "두번째 영역 긴 텍스트로 작성하면 줄바꿈이 생깁니다.",
                  character: {
                    src: "kkungiHandsup",
                  },
                },
                {
                  text: "세번째 영역",
                  character: {
                    src: "asdfasdf",
                  },
                },
                {
                  text: "네번째 영역 정해진 사이즈 내에서 최대 갯수",
                  character: {
                    src: "",
                  },
                },
              ],
            },
          ],
        },
      },
      {
        id: 10,
        name: "단어",
        type: "SinglePage",
        data: {
          id: uuidV4(),
          type: "Template01",
          contents: [
            {
              id: uuidV4(),
              type: "multiLevelActionCard",
              data: [
                [
                  {
                    id: uuidV4(),
                    type: "text",
                    data: {
                      text: "1번 배열 text",
                    },
                  },
                ],
                [
                  {
                    id: uuidV4(),
                    type: "text",
                    data: {
                      text: "2번 배열 text",
                    },
                  },
                ],
              ],
            },
          ],
        },
      },
      {
        id: 11,
        name: "단어",
        type: "SinglePage",
        data: {
          id: uuidV4(),
          type: "Template01",
          contents: [
            {
              id: uuidV4(),
              type: "characterCardList",
              data: [
                {
                  title: "패턴 중국어",
                  description: "好 hǎo 인사하기",
                  character: {
                    src: "",
                  },
                  modalContents: [
                    {
                      id: uuidV4(),
                      type: "text",
                      data: {
                        text: "테스트 텍스트1-1",
                      },
                    },
                    {
                      id: uuidV4(),
                      type: "iconText",
                      data: {
                        text: "테스트 텍스트1-2",
                      },
                    },
                    {
                      id: uuidV4(),
                      type: "numberingTextList",
                      data: [
                        {
                          firstText: "넘버링 테스트 텍스트1",
                          secondText: "넘버링 테스트 텍스트1-2",
                        },
                      ],
                    },
                  ],
                },
                {
                  title: "회화",
                  description: "만남의 인사하기",
                  character: {
                    src: "",
                  },
                  modalContents: [
                    {
                      id: uuidV4(),
                      type: "text",
                      data: {
                        text: "테스트 텍스트2-1",
                      },
                    },
                    {
                      id: uuidV4(),
                      type: "iconText",
                      data: {
                        text: "테스트 텍스트2-2",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        id: 12,
        name: "단어",
        type: "SinglePage",
        data: {
          id: uuidV4(),
          type: "Template01",
          contents: [
            {
              id: uuidV4(),
              type: "textBoxList",
              data: [
                {
                  text: "a",
                  audio: {
                    // src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                    src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                  },
                },
                {
                  text: "a",
                  audio: {
                    src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                  },
                },
                {
                  text: "a",
                  audio: {
                    src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                  },
                },
                {
                  text: "a",
                  audio: {
                    src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                  },
                },
              ],
            },
          ],
        },
      },
      {
        id: 13,
        name: "단어",
        type: "SinglePage",
        data: {
          id: uuidV4(),
          type: "Template01",
          contents: [
            {
              id: uuidV4(),
              type: "wordsCarousel",
              data: {
                words: [
                  {
                    word: "테스트 텍스트",
                    audio: {
                      src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                    },
                  },
                  {
                    word: "테스트 텍스트",
                    audio: {
                      src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        id: 14,
        name: "단어",
        type: "SinglePage",
        data: {
          id: uuidV4(),
          type: "Template01",
          contents: [
            {
              id: uuidV4(),
              type: "audioAndWordsCarousel",
              data: {
                audio: {
                  src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                },
                wordCarouselContents: {
                  words: [
                    {
                      word: "테스트 텍스트",
                      audio: {
                        src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                      },
                    },
                    {
                      word: "테스트 텍스트",
                      audio: {
                        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        id: 15,
        name: "단어",
        type: "SinglePage",
        data: {
          id: uuidV4(),
          type: "Template01",
          contents: [
            {
              id: uuidV4(),
              type: "toggleSentenceList",
              data: [
                {
                  text: "11月11日是光棍节，光棍有单身的意思，所以这天是庆祝自己单身生活的娱乐性节日。",
                  pronunciation:
                    "Shíyī yuè shíyī rì shì Guānggùnjié, guānggùn yǒu dānshēn de yìsi, suǒyǐ zhè tiān shì qìngzhù zìjǐ dānshēn shēnghuó de yúlèxìng jiérì.",
                  meaning: "안녕",
                },
                {
                  text: "但是，现在更多的人把这天叫“双十一”，是中国网络购物节。",
                  pronunciation:
                    "Dànshì, xiànzài gèng duō de rén bǎ zhè tiān jiào 'Shuāng shíyī',",
                  meaning: "그래",
                },
              ],
            },
          ],
        },
      },
      {
        id: 16,
        name: "단어",
        type: "SinglePage",
        data: {
          id: uuidV4(),
          type: "TemplateRolePlaying",
          iconText: {
            id: uuidV4(),
            type: "iconText",
            data: {
              text: "회화 속 주인공이 되어 말하기 연습을 해보세요.",
            },
          },
          guideContent: {
            id: uuidV4(),
            type: "activityGuideCharacter",
            data: {
              character: {
                src: "",
              },
              text: "지난 시간엔 계절에 대한 회화를 학습했어요. 다음 대화를 잘 보고 빈 칸에 들어갈 알맞은 단어를 고르세요.",
            },
          },
          rolePlayingContents: {
            id: uuidV4(),
            type: "roleplaying",
            data: [
              {
                id: 0,
                character: {
                  name: "김민호",
                  src: "",
                },
                audio: {
                  src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                },
                text: "你好，你是张明吗？",
                pronunciation: "Nî hâo, nî shì Zhãng Míng ma?",
                meaning: "안녕",
                position: "left",
              },
              {
                id: 0,
                character: {
                  name: "김민호",
                  src: "",
                },
                audio: {
                  src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                },
                text: "没想到在路上遇见你。",
                pronunciation: "Méi xiângdào zài lùshang yùjiàn nî.",
                meaning: "반가워",
                position: "left",
              },
              {
                id: 1,
                character: {
                  name: "장밍",
                  src: "",
                },
                audio: {
                  src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                },
                text: "중국어중국어",
                pronunciation: "Méi cuò, hâojiû bújiàn!",
                meaning: "맞아, 오랜만이야!",
                position: "right",
              },
              {
                id: 1,
                character: {
                  name: "장밍",
                  src: "",
                },
                audio: {
                  src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                },
                text: "중국어중국어",
                pronunciation: "Méi cuò, hâojiû bújiàn!",
                meaning: "너는 예전과 같이 멋있구나, 조금도 변하지 않았어.",
                position: "right",
              },
              {
                id: 2,
                character: {
                  name: "민호 엄마",
                  src: "",
                },
                audio: {
                  src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                },
                text: "你好！见到你很高兴！",
                pronunciation: "Nî hâo! Jiàndào nî hên gãoxìng!",
                meaning: "한국어한국어",
                position: "left",
              },
            ],
          },
        },
      },
      {
        id: 17,
        name: "단어",
        type: "SinglePage",
        data: {
          id: uuidV4(),
          type: "TemplateQuizSpeaking",
          leftContents: [
            {
              id: uuidV4(),
              type: "activityGuideCharacter",
              data: {
                character: {
                  src: "",
                },
                text: "지난 시간엔 계절에 대한 회화를 학습했어요. 다음 대화를 잘 보고 빈 칸에 들어갈 알맞은 단어를 고르세요.",
              },
            },
          ],
          rightContents: {
            id: uuidV4(),
            type: "finalSpeaking",
            data: {
              answerModel: {
                text: "테",
                pronunciation: "스",
                meaning: "트",
              },
              exampleContents: [
                {
                  id: uuidV4(),
                  type: "text",
                  data: {
                    text: "테스트",
                  },
                },
              ],
            },
          },
        },
      },
    ],
  },
  {
    // 학습1 코너 메타 정보
    meta: {
      id: 12,
      name: "학습 들어가기",
      lessonId: 1,
      lessonName: "Lesson 1",
      lessonTpCd: "30",
      courseId: 1,
      courseName: "차이홍(샘플데이터)-빨강",
      isCompleted: false,
    },
    // 복습 page 리스트
    data: [
      {
        id: 1,
        name: "한어",
        type: "SinglePage",
        introduction: {
          title: "",
          subTitle: "",
          character: {
            url: "",
          },
          contents: "",
        },
        data: {
          id: uuidV4(),
          type: "Template01",
          contents: [
            {
              id: uuidV4(),
              type: "text",
              data: {
                text: "asdfasdf4",
              },
            },
          ],
        },
      },
    ],
  },
];

export const v1LessonDataServer = {
  body: {
    meta: {
      lessonId: 1,
      lessonName: "Lesson 1",
      subjectId: 1,
      subjectName: "차이홍(샘플데이터)-빨강",
      lessonTpCd: 10,
    },
    data: [
      {
        turnId: 1,
        turnName: "학습1",
        introduction: {
          title: "학습 목표",
          subTitle: "중국어 개요, 성조, 운모를 배워 봅시다. ",
          contentsTitle: "학습 내용",
          contents: ["중국어 개요"],
          confirmButtonText: "확인",
        },
        pages: [1, 2, 3, 4, 5, 6],
      },
      {
        turnId: 2,
        turnName: "학습2",
        introduction: {
          title: "학습 목표",
          subTitle: "중국어 개요, 성조, 운모를 배워 봅시다. ",
          contentsTitle: "학습 내용",
          contents: ["성조"],
          confirmButtonText: "확인",
        },
        pages: [7, 8, 9, 10, 11, 12],
      },
      {
        turnId: 3,
        turnName: "학습3",
        introduction: {
          title: "학습 목표",
          subTitle: "중국어 개요, 성조, 운모를 배워 봅시다. ",
          contentsTitle: "학습 내용",
          contents: ["운모"],
          confirmButtonText: "확인",
        },
        pages: [13, 14, 15, 16, 17, 18, 19, 20],
      },
      {
        turnId: 4,
        turnName: "회화",
        introduction: {
          title: "학습 목표",
          subTitle: "회화를 익혀 봅시다.",
          contentsTitle: "학습 내용",
          contents: ["만남/헤어짐"],
          confirmButtonText: "확인",
        },
        pages: [21, 22, 23, 24, 25, 26],
      },
      {
        turnId: 5,
        turnName: "문화",
        introduction: {
          title: "학습 목표",
          subTitle: "중국 문화를 알아봅시다.",
          contentsTitle: "학습 내용",
          contents: ["중국의 개요"],
          confirmButtonText: "확인",
        },
        pages: [27, 28, 29, 30],
      },
    ],
  },
  code: 200,
  message: "성공",
};

export const v1CornerDataServer = {
  body: {
    meta: {
      lessonId: 1,
      cornerId: 1,
    },
    data: [
      {
        page_id: 1,
        contents_data: {
          title: "중국어 개요",
          description: "중국어에 대해 얼마나 알고 있나요?",
          template: {
            type: "TP11A",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "https://icon_url",
                    },
                    text: "<p>중국은 국토가 넓고 다양한 민족과 방언이 있어 표준어인 ‘북경어’를 제정했습니다.</p>",
                  },
                ],
              },
              {
                type: "chooseText",
                data: [
                  {
                    choices: ["그렇다", "아니다"],
                    answerIndex: 1,
                    explanation: {
                      text: "<p>중국은 표준어인 ‘보통화’를 제정하여 사용합니다.</p>",
                    },
                  },
                ],
              },
            ],
          },
        },
      },
      {
        page_id: 2,
        contents_data: {
          title: "중국어 개요",
          description: "선생님의 설명을 들어 보세요.",
          template: {
            type: "TP02F",
            contents: [
              {
                type: "video",
                data: [
                  {
                    src: "https://d3ck2c76fu5pug.cloudfront.net/assets/EOkLp5L6lEh3i8joP7gcVZKrC97aCIKA/giZ0nFZV/A01_video_gm.01.m3u8",
                  },
                ],
              },
            ],
          },
        },
      },
      {
        page_id: 3,
        contents_data: {
          title: "중국어 개요",
          description: "중국어 개요를 알아봅시다.",
          template: {
            type: "TPTab",
            tabs: [
              {
                tabName: "한어",
                active: true,
                tabPages: [
                  {
                    title: "중국어 개요",
                    description: "중국어 개요를 알아봅시다.",
                    template: {
                      type: "TP02",
                      contents: [
                        {
                          type: "html",
                          data: [
                            {
                              kind: "description",
                              text: "<p>중국에서는 중국어를 ‘<strong><span class='c1'>한어</span></strong><span class='c1'>(?? H?ny?</span>)’라고 합니다. 중국 인구의 대다수를 차지하는 한족(?族H?nz?)이 쓰는 언어라는 뜻입니다.</p>",
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
              {
                tabName: "보통화",
                active: false,
                tabPages: [],
              },
              {
                tabName: "중국어의 구성(한자)",
                active: false,
                tabPages: [],
              },
              {
                tabName: "중국어의 구성(한어병음)",
                active: false,
                tabPages: [],
              },
            ],
          },
        },
      },
      {
        page_id: 4,
        contents_data: {
          title: "중국어 개요",
          description: "중국어 개요를 알아봅시다.",
          template: {
            type: "TPTab",
            tabs: [
              {
                tabName: "한어",
                active: false,
                tabPages: [],
              },
              {
                tabName: "보통화",
                active: true,
                tabPages: [
                  {
                    title: "중국어 개요",
                    description: "중국어 개요를 알아봅시다.",
                    template: {
                      type: "TP02",
                      contents: [
                        {
                          type: "html",
                          data: [
                            {
                              kind: "description",
                              text: "<p>중국은 국토가 넓고 다양한 민족과 방언이 있어 표준어인‘<strong><span class='c1'>보통화</span></strong><span class='c1'>(普通? p?t?nghu?</span>)’를 제정하여 사용합니다.</p>",
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
              {
                tabName: "중국어의 구성(한자)",
                active: false,
                tabPages: [],
              },
              {
                tabName: "중국어의 구성(한어병음)",
                active: false,
                tabPages: [],
              },
            ],
          },
        },
      },
      {
        page_id: 5,
        contents_data: {
          title: "중국어 개요",
          description: "중국어 개요를 알아봅시다.",
          template: {
            type: "TPTab",
            tabs: [
              {
                tabName: "한어",
                active: false,
                tabPages: [],
              },
              {
                tabName: "보통화",
                active: false,
                tabPages: [],
              },
              {
                tabName: "중국어의 구성(한자)",
                active: true,
                tabPages: [
                  {
                    title: "중국어 개요",
                    description: "중국어 개요를 알아봅시다.",
                    template: {
                      type: "TP02",
                      contents: [
                        {
                          type: "html",
                          data: [
                            {
                              kind: "description",
                              text: "<p>중국에서는 기존의 복잡한 한자(번체자)를 쉽고 간단하게 만든 ‘<strong><span class='c1'>간화자</span></strong><span class='c1'>(?化字 ji?nhu?z?)</span>*’를 사용합니다.<br>*‘간화자’는 ‘간체자(??字 ji?nt?z?)’라고도 합니다.</p>",
                            },
                          ],
                        },
                        {
                          type: "video",
                          data: [
                            {
                              src: "https://d3ck2c76fu5pug.cloudfront.net/assets/4kV85veSKFLFPCwS8Nf9uTvYKkzT7h0q/BfsoNcyk/A01_video_learn1_01.m3u8",
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
              {
                tabName: "중국어의 구성(한어병음)",
                active: false,
                tabPages: [],
              },
            ],
          },
        },
      },
      {
        page_id: 6,
        contents_data: {
          title: "중국어 개요",
          description: "중국어 개요를 알아봅시다.",
          template: {
            type: "TPTab",
            tabs: [
              {
                tabName: "한어",
                active: false,
                tabPages: [],
              },
              {
                tabName: "보통화",
                active: false,
                tabPages: [],
              },
              {
                tabName: "중국어의 구성(한자)",
                active: false,
                tabPages: [],
              },
              {
                tabName: "중국어의 구성(한어병음)",
                active: true,
                tabPages: [
                  {
                    title: "중국어 개요",
                    description: "중국어 개요를 알아봅시다.",
                    template: {
                      type: "TP02",
                      contents: [
                        {
                          type: "html",
                          data: [
                            {
                              kind: "description",
                              text: "<p>한자는 뜻글자이기 때문에 글자만 보아서는 발음을 알 수 없습니다. 그래서 로마자를 활용하여 발음을 표기하는데, 이를 ‘<strong><span class='c1'>한어병음</span></strong><span class='c1'>(???音 H?ny? P?ny?n)</span>’ 또는 ‘병음(?音 P?ny?n)’이라고 합니다. 한어병음은 성조, 성모, 운모로 구성됩니다.</p>",
                            },
                          ],
                        },
                        {
                          type: "video",
                          data: [
                            {
                              src: "https://d3ck2c76fu5pug.cloudfront.net/assets/10sZtKm2tOrcVfmFeqGigJNrdylU3M3n/Yub5ULEO/A01_video_learn1_02.m3u8",
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
            ],
          },
        },
      },
    ],
  },
  code: 200,
  message: "성공",
};
