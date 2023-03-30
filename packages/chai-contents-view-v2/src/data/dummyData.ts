import { CornerData, LessonData } from "chai-ui-v2";
import { v4 as uuidV4 } from "uuid";

export const v2LessonData: LessonData = {
  // 레슨 메타 정보
  meta: {
    id: 1,
    name: "Lesson 1",
    courseId: 1,
    courseName: "차이홍(샘플데이터)-빨강",
    colorTypeCd: "10",
    lessonTpCd: "20",
  },
  // 코너 리스트
  data: [
    {
      id: 11,
      name: "복습",
      pages: [1, 2, 3, 4, 5],
    },
    {
      id: 12,
      name: "학습 들어가기",
      pages: [6],
    },
    {
      id: 13,
      name: "중국어 개요",
      pages: [7, 8, 9],
    },
    {
      id: 14,
      name: "성조",
      pages: [10, 11, 12, 13],
    },
    {
      id: 15,
      name: "운모",
      pages: [14, 15, 16],
    },
    {
      id: 16,
      name: "패턴 중국어",
      pages: [17, 18, 19, 20, 21, 22],
    },
    {
      id: 17,
      name: "회화",
      pages: [23, 24, 25],
    },
    // {
    //   id: 18,
    //   name: "문제",
    //   pages: [1, 2, 3, 4, 5, 6, 7],
    // },
  ],
};

export const v2CornerDataList: CornerData[] = [
  {
    // 복습 코너 메타 정보
    meta: {
      id: 11,
      lessonId: 1,
    },
    // 복습 page 리스트
    data: [
      {
        id: 1,
        name: "",
        type: "singlePage",
        introduction: {
          title: "",
          subTitle: "",
          character: {
            url: "",
          },
          contents: "",
          soundEffect: {
            src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
          },
        },
        data: {
          id: 1,
          type: "Template01",
          contents: [
            {
              id: uuidV4(),
              type: "cardTab",
              data: [
                {
                  cards: [
                    {
                      contents: [
                        {
                          id: uuidV4(),
                          type: "text",
                          data: {
                            text: "테스트카드1",
                          },
                        },
                      ],
                    },
                    {
                      contents: [
                        {
                          id: uuidV4(),
                          type: "text",
                          data: {
                            text: "테스트카드1-2",
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  cards: [
                    {
                      contents: [
                        {
                          id: uuidV4(),
                          type: "text",
                          data: {
                            text: "테스트카드2",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              meta: {
                isUseTab: true,
              },
            },
          ],
        },
      },
      {
        id: 2,
        name: "중국어 개요",
        type: "singlePage",
        data: {
          id: uuidV4(),
          type: "Template01",
          contents: [
            {
              id: uuidV4(),
              type: "cornerGuideCharacter",
              data: {
                text: "먼저 지난 레슨에서 학습한 내용을 점검해 볼까요?",
                character: {
                  src: "asdfasdf",
                },
              },
            },
          ],
        },
      },
      {
        id: 3,
        name: "중국어 개요",
        type: "singlePage",
        introduction: {
          title: "",
          subTitle: "",
          character: {
            url: "",
          },
          contents: "",
          soundEffect: {
            src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
          },
        },
        data: {
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
                text: "<p>지난 시간에 배운 성모를 복습해 볼까요?<br>녹음을 듣고, 알맞은 발음을 골라보세요!</p>",
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
                  text: "*blank*",
                  choice: [
                    { text: "bo", isAnswer: true },
                    {
                      text: "po",
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
                  text: "*blank*",
                  choice: [
                    { text: "mo", isAnswer: true },
                    {
                      text: "fo",
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
                  text: "*blank*",
                  choice: [
                    { text: "de", isAnswer: true },
                    {
                      text: "te",
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
                  text: "*blank*",
                  choice: [
                    { text: "ne", isAnswer: true },
                    {
                      text: "le",
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
                  text: "*blank*",
                  choice: [
                    { text: "el", isAnswer: true },
                    {
                      text: "en",
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
      },
      {
        id: 4,
        name: "단어",
        type: "singlePage",
        introduction: {
          title: "",
          subTitle: "",
          character: {
            url: "",
          },
          contents: "",
          soundEffect: {
            src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
          },
        },
        data: {
          id: uuidV4(),
          type: "TemplateQuizMultiChoice",
          leftContents: [
            {
              id: uuidV4(),
              type: "activityGuideCharacter",
              data: {
                text: "지난 시간에는 만날 때 하는 인사를 배웠어요. 올바른 한어병음을 골라보세요!",
                character: {
                  src: "asdfasdf",
                },
              },
            },
          ],
          multiChoice: {
            id: uuidV4(),
            type: "multiChoice",
            data: {
              choice: ["Ni hao!", "Zaijian!"],
              answerIndex: 0,
              exampleContents: [
                {
                  id: uuidV4(),
                  type: "imageWithCaptionList",
                  data: [
                    {
                      src: "https://fastly.picsum.photos/id/80/400/400.jpg?hmac=6sJgehQvlHze3RCac4W21GGcQxP7IAOupdkWgBSsYJ4",
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
                    description: "니하오입니다.",
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
                    description: "니하오라고요.",
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
        id: 5,
        name: "한어",
        type: "multiPage",
        introduction: {
          title: "",
          subTitle: "",
          character: {
            url: "",
          },
          contents: "",
          soundEffect: {
            src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
          },
        },
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
                      src: "adsfasdf",
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
                      src: "adsfasdf",
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
    ],
  },
  {
    // 학습1 코너 메타 정보
    meta: {
      id: 12,
      lessonId: 1,
    },
    // 복습 page 리스트
    data: [
      {
        id: 6,
        name: "학습 내용",
        type: "singlePage",
        data: {
          id: uuidV4(),
          type: "Template01",
          contents: [
            {
              id: uuidV4(),
              type: "iconText",
              data: {
                text: "이번 레슨에서는 이런 걸 배울 거에요.",
              },
            },
            {
              id: uuidV4(),
              type: "borderTextBox",
              data: {
                text: "<p>만남의 인사를 말할 수 있다.<br />이름을 묻고 답할 수 있다.</p>",
              },
            },
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
                },
                {
                  title: "회화",
                  description: "<p>만남의 인사하기<br />이름 묻고 답하기</p>",
                  character: {
                    src: "",
                  },
                },
                {
                  title: "문법",
                  description:
                    "<p>제3성의 성조 변화<br />이름 묻고 답하기</br>정도부사 很</p>",
                  character: {
                    src: "",
                  },
                },
                {
                  title: "문화",
                  description: "중국인의 성씨와 호칭",
                  character: {
                    src: "",
                  },
                },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    // 학습1 코너 메타 정보
    meta: {
      id: 13,
      lessonId: 1,
    },
    // 복습 page 리스트
    data: [
      {
        id: 7,
        name: "한어",
        type: "singlePage",
        data: {
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
      },
      {
        id: 8,
        name: "한어",
        type: "multiPage",
        data: [
          {
            id: uuidV4(),
            type: "Template01",
            contents: [
              {
                id: uuidV4(),
                type: "imageWithCaptionList",
                data: [
                  {
                    src: "https://fastly.picsum.photos/id/671/1000/1000.jpg?hmac=bxVD65b0X4qKg3--v_IfvrX-tqhnt85uOqhIkdzSXjA",
                  },
                ],
              },
              {
                id: uuidV4(),
                type: "explainingCharacter",
                data: {
                  character: {
                    src: "",
                  },
                  text: "중국에서는 중국어를 한어라고 합니다.",
                  explain:
                    "중국 인구의 대다수를 차지하는<br /> 한족이 쓰는 언어라는 뜻입니다.",
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
                type: "imageWithCaptionList",
                data: [
                  {
                    src: "https://fastly.picsum.photos/id/671/1000/1000.jpg?hmac=bxVD65b0X4qKg3--v_IfvrX-tqhnt85uOqhIkdzSXjA",
                  },
                ],
              },
              {
                id: uuidV4(),
                type: "explainingCharacter",
                data: {
                  character: {
                    src: "",
                  },
                  text: "중국은 국토가 넓고 다양한 민족과 방언이 있습니다.",
                  explain: "표준화인 보통화를 제정하여 사용합니다.",
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
              {
                id: uuidV4(),
                type: "explainingCharacter",
                data: {
                  character: {
                    src: "",
                  },
                  text: "간화자의 다른 말은 무엇일까요?",
                  explain:
                    "중국에서는 기존의 복잡한 한자(번체자)를<br />쉽고 간단하게 만든 ‘간화자(简化字 jiǎnhuàzì)’를 사용합니다.",
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
                  src: "https://cdn.bubblecon.co.kr/videos/45.mp4",
                },
              },
              {
                id: uuidV4(),
                type: "explainingCharacter",
                data: {
                  character: {
                    src: "",
                  },
                  text: "한자는 뜻글자이기 때문에 글자만 보아서는 발음을 알 수 없습니다.",
                  explain:
                    "그래서 로마자를 활용하여 발음을 표기하는데,<br />이를 ‘한어병음(汉语拼音 Hànyǔ Pīnyīn)’ 또는 ‘병음(拼音 Pīnyīn)’이라고 합니다.<br/>한어병음은 성조, 성모, 운모로 구성됩니다.",
                },
              },
            ],
          },
        ],
      },
      {
        id: 9,
        name: "한어",
        type: "multiPage",
        data: [
          {
            id: uuidV4(),
            type: "TemplateQuizMultiChoice",
            leftContents: [
              {
                id: uuidV4(),
                type: "activityGuideCharacter",
                data: {
                  text: "내용이 맞으면 O, 틀리면 X를 선택하세요.",
                  character: {
                    src: "asdfasdf",
                  },
                },
              },
            ],
            multiChoice: {
              id: uuidV4(),
              type: "multiChoice",
              data: {
                choice: ["O", "X"],
                answerIndex: 1,
                exampleContents: [
                  {
                    id: uuidV4(),
                    type: "text",
                    data: {
                      text: "<p>중국은 국토가 넓고 다양한 민족과 방언이 있어 표준어인 ‘북경어’를 제정했습니다.</p>",
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
                      description: "표준화인 보통화를 제정하여 사용합니다.",
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
                      description: "표준화인 보통화를 제정하여 사용합니다.",
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
          {
            id: uuidV4(),
            type: "TemplateQuizMultiChoice",
            leftContents: [
              {
                id: uuidV4(),
                type: "activityGuideCharacter",
                data: {
                  text: "내용이 맞으면 O, 틀리면 X를 선택하세요.",
                  character: {
                    src: "asdfasdf",
                  },
                },
              },
            ],
            multiChoice: {
              id: uuidV4(),
              type: "multiChoice",
              data: {
                choice: ["간체자", "신차제"],
                answerIndex: 0,
                exampleContents: [
                  {
                    id: uuidV4(),
                    type: "text",
                    data: {
                      text: "<p>중국에서는 기존의 복잡한 한자(번체자)를 쉽고 간단하게 만든 OOO을 사용합니다</p>",
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
                        "중국에서는 기존의 복잡한 한자(번체자)를<br />쉽고 간단하게 만든 ‘간화자(简化字 jiǎnhuàzì)’를 사용합니다.",
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
                        "중국에서는 기존의 복잡한 한자(번체자)를<br />쉽고 간단하게 만든 ‘간화자(简化字 jiǎnhuàzì)’를 사용합니다.",
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
        ],
      },
    ],
  },
  {
    // 학습1 코너 메타 정보
    meta: {
      id: 14,
      lessonId: 1,
    },
    // 복습 page 리스트
    data: [
      {
        id: 10,
        name: "한어",
        type: "singlePage",
        data: {
          id: uuidV4(),
          type: "Template01",
          contents: [
            {
              id: uuidV4(),
              type: "iconText",
              data: {
                text: "성조를 알아봅시다.",
              },
            },
            {
              id: uuidV4(),
              type: "video",
              data: {
                src: "https://cdn.bubblecon.co.kr/videos/45.mp4",
              },
            },
          ],
        },
      },
      {
        id: 11,
        name: "한어",
        type: "singlePage",
        data: {
          id: uuidV4(),
          type: "Template01",
          contents: [
            {
              id: uuidV4(),
              type: "iconText",
              data: {
                text: "성조를 알아봅시다.",
              },
            },
            {
              id: uuidV4(),
              type: "contentsCardList",
              data: [
                {
                  isAccent: true,
                  contents: [
                    {
                      id: uuidV4(),
                      type: "text",
                      data: {
                        text: "a1",
                      },
                    },
                    {
                      id: uuidV4(),
                      type: "audio",
                      data: {
                        src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                      },
                    },
                  ],
                },
                {
                  isAccent: true,
                  contents: [
                    {
                      id: uuidV4(),
                      type: "text",
                      data: {
                        text: "a1",
                      },
                    },
                    {
                      id: uuidV4(),
                      type: "audio",
                      data: {
                        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                      },
                    },
                  ],
                },
                {
                  isAccent: true,
                  contents: [
                    {
                      id: uuidV4(),
                      type: "text",
                      data: {
                        text: "a1",
                      },
                    },
                    {
                      id: uuidV4(),
                      type: "audio",
                      data: {
                        src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                      },
                    },
                  ],
                },
                {
                  isAccent: true,
                  contents: [
                    {
                      id: uuidV4(),
                      type: "text",
                      data: {
                        text: "a1",
                      },
                    },
                    {
                      id: uuidV4(),
                      type: "audio",
                      data: {
                        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                      },
                    },
                  ],
                },
              ],
            },
            {
              id: uuidV4(),
              type: "explainingCharacter",
              data: {
                character: {
                  src: "",
                },
                text: "성조의 종류에 대해서 알아볼까요?",
                explain:
                  "성조는 음의 높낮이와 그 변화를 표시한 것으로, 중국어에는 네 개의 성조가 있습니다.",
              },
            },
          ],
        },
      },
      {
        id: 12,
        name: "한어",
        type: "multiPage",
        data: [
          {
            id: uuidV4(),
            type: "Template_H_3_7",
            leftContents: [
              {
                id: uuidV4(),
                type: "contentsCardList",
                data: [
                  {
                    isAccent: true,
                    contents: [
                      {
                        id: uuidV4(),
                        type: "text",
                        data: {
                          text: "a<br />제1성",
                        },
                      },
                      {
                        id: uuidV4(),
                        type: "audio",
                        data: {
                          src: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: uuidV4(),
                type: "text",
                data: {
                  text: "가장 높은 음에서 길고 평평하게 발음합니다.",
                },
              },
            ],
            rightContents: [
              {
                id: uuidV4(),
                type: "video",
                data: {
                  src: "https://cdn.bubblecon.co.kr/videos/45.mp4",
                },
              },
              {
                id: uuidV4(),
                type: "speaking",
                data: {
                  speakingTime: 5,
                  src: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3",
                },
              },
            ],
          },
          {
            id: uuidV4(),
            type: "Template_H_3_7",
            leftContents: [
              {
                id: uuidV4(),
                type: "activityGuideCharacter",
                data: {
                  character: {
                    src: "",
                  },
                  text: "성모와 운모가 같아도 성조가 다르면 의미도 달라집니다.",
                },
              },
            ],
            rightContents: [
              {
                id: uuidV4(),
                type: "imageWithCaptionList",
                data: [
                  {
                    src: "https://fastly.picsum.photos/id/877/1000/1000.jpg?hmac=Eg0Mi1wP9EqhihzntZvKAWChMnBD7Ss5XYhOl2y6PHA",
                  },
                ],
              },
              {
                id: uuidV4(),
                type: "text",
                data: {
                  text: "mā<br />엄마",
                },
              },
              {
                id: uuidV4(),
                type: "audio",
                data: {
                  src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                },
              },
              {
                id: uuidV4(),
                type: "speaking",
                data: {
                  speakingTime: 5,
                  src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                },
              },
            ],
          },
        ],
      },
      {
        id: 13,
        name: "확인하기",
        type: "multiPage",
        data: [
          {
            id: uuidV4(),
            type: "TemplateQuizMultiChoice",
            leftContents: [
              {
                id: uuidV4(),
                type: "activityGuideCharacter",
                data: {
                  character: {
                    src: "",
                  },
                  text: "녹음을 듣고 알맞은 성조를 고르세요.",
                },
              },
            ],
            multiChoice: {
              id: uuidV4(),
              type: "multiChoice",
              data: {
                choice: ["a1", "a2"],
                answerIndex: 1,
                exampleContents: [
                  {
                    id: uuidV4(),
                    type: "audio",
                    data: {
                      src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
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
          {
            id: uuidV4(),
            type: "TemplateQuizMultiChoice",
            leftContents: [
              {
                id: uuidV4(),
                type: "activityGuideCharacter",
                data: {
                  character: {
                    src: "",
                  },
                  text: "녹음을 듣고 알맞은 성조를 고르세요.",
                },
              },
            ],
            multiChoice: {
              id: uuidV4(),
              type: "multiChoice",
              data: {
                choice: ["ma1", "ma2"],
                answerIndex: 0,
                exampleContents: [
                  {
                    id: uuidV4(),
                    type: "audio",
                    data: {
                      src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
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
        ],
      },
    ],
  },
  {
    // 학습1 코너 메타 정보
    meta: {
      id: 15,
      lessonId: 1,
    },
    // 복습 page 리스트
    data: [
      {
        id: 14,
        name: "영상 시청",
        type: "singlePage",
        data: {
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
      },
      {
        id: 15,
        name: "성모 설명",
        type: "multiPage",
        data: [
          {
            id: uuidV4(),
            type: "Template01",
            contents: [
              {
                id: uuidV4(),
                type: "imageWithCaptionList",
                data: [
                  {
                    src: "https://fastly.picsum.photos/id/542/1000/1000.jpg?hmac=vijkzGUCIVd4x2RRii3NXbBV4anqTcMeZtyjxz7mI70",
                  },
                ],
              },
              {
                id: uuidV4(),
                type: "explainingCharacter",
                data: {
                  character: {
                    src: "",
                  },
                  text: "성모에 대해서 알아볼까요?",
                  explain: "성모는 음절의 첫소리로, 모두 21개입니다.",
                },
              },
            ],
          },
          {
            id: uuidV4(),
            type: "Template_H_3_7",
            leftContents: [
              {
                id: uuidV4(),
                type: "activityGuideCharacter",
                data: {
                  character: {
                    src: "",
                  },
                  text: "b p  m는 위와 아래 두 개의 입술로 발음하여 쌍순(둘 쌍, 입술 순)음이라고 부릅니다.",
                },
              },
            ],
            rightContents: [
              {
                id: uuidV4(),
                type: "text",
                data: {
                  text: "쌍순음<br />윗입술과 아랫입술을 붙였다 떼면서 발음합니다.",
                },
              },
              {
                id: uuidV4(),
                type: "contentsCardList",
                data: [
                  {
                    isAccent: true,
                    contents: [
                      {
                        id: uuidV4(),
                        type: "text",
                        data: {
                          text: "b",
                        },
                      },
                      {
                        id: uuidV4(),
                        type: "audio",
                        data: {
                          src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                        },
                      },
                    ],
                  },
                  {
                    isAccent: true,
                    contents: [
                      {
                        id: uuidV4(),
                        type: "text",
                        data: {
                          text: "p",
                        },
                      },
                      {
                        id: uuidV4(),
                        type: "audio",
                        data: {
                          src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                        },
                      },
                    ],
                  },
                  {
                    isAccent: true,
                    contents: [
                      {
                        id: uuidV4(),
                        type: "text",
                        data: {
                          text: "m",
                        },
                      },
                      {
                        id: uuidV4(),
                        type: "audio",
                        data: {
                          src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: uuidV4(),
                type: "imageWithCaptionList",
                data: [
                  {
                    src: "https://fastly.picsum.photos/id/911/1000/1000.jpg?hmac=MLCXtjLXG_awAyF6KW_WquwU3Ws7jQT7gLbSOUcXvv4",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 16,
        name: "한어",
        type: "multiPage",
        data: [
          {
            id: uuidV4(),
            type: "Template_H_3_7",
            leftContents: [
              {
                id: uuidV4(),
                type: "contentsCardList",
                data: [
                  {
                    isAccent: true,
                    contents: [
                      {
                        id: uuidV4(),
                        type: "text",
                        data: {
                          text: "b",
                        },
                      },
                      {
                        id: uuidV4(),
                        type: "audio",
                        data: {
                          src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: uuidV4(),
                type: "text",
                data: {
                  text: "윗입술과 아랫입술을<br />붙였다 떼면서 발음합니다",
                },
              },
            ],
            rightContents: [
              {
                id: uuidV4(),
                type: "video",
                data: {
                  src: "https://cdn.bubblecon.co.kr/videos/45.mp4",
                },
              },
              {
                id: uuidV4(),
                type: "speaking",
                data: {
                  speakingTime: 5,
                  src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                },
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
                  character: {
                    src: "",
                  },
                  text: "발음을 연습해 보세요.",
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
                type: "contentsCardList",
                data: [
                  {
                    isAccent: true,
                    contents: [
                      {
                        id: uuidV4(),
                        type: "text",
                        data: {
                          text: "bo1",
                        },
                      },
                      {
                        id: uuidV4(),
                        type: "audio",
                        data: {
                          src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                        },
                      },
                    ],
                  },
                  {
                    isAccent: true,
                    contents: [
                      {
                        id: uuidV4(),
                        type: "text",
                        data: {
                          text: "bo2",
                        },
                      },
                      {
                        id: uuidV4(),
                        type: "audio",
                        data: {
                          src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                        },
                      },
                    ],
                  },
                  {
                    isAccent: true,
                    contents: [
                      {
                        id: uuidV4(),
                        type: "text",
                        data: {
                          text: "bo3",
                        },
                      },
                      {
                        id: uuidV4(),
                        type: "audio",
                        data: {
                          src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                        },
                      },
                    ],
                  },
                  {
                    isAccent: true,
                    contents: [
                      {
                        id: uuidV4(),
                        type: "text",
                        data: {
                          text: "bo4",
                        },
                      },
                      {
                        id: uuidV4(),
                        type: "audio",
                        data: {
                          src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    // 학습1 코너 메타 정보
    meta: {
      id: 16,
      lessonId: 1,
    },
    // 복습 page 리스트
    data: [
      {
        id: 17,
        name: "한눈에 보기",
        type: "singlePage",
        data: {
          id: uuidV4(),
          type: "Template01",
          contents: [
            {
              id: uuidV4(),
              type: "iconText",
              data: {
                text: "’坐 zuò’를 사용한 표현을 미리 알아봅시다.",
              },
            },
            {
              id: uuidV4(),
              type: "numberingTextList",
              data: [
                {
                  firstText: "我坐地铁去。<br />Wô zuò dìtiê qù.",
                },
                {
                  firstText: "我坐地铁去。<br />Wô zuò dìtiê qù.",
                },
                {
                  firstText: "我坐地铁去。<br />Wô zuò dìtiê qù.",
                },
                {
                  firstText: "我坐地铁去。<br />Wô zuò dìtiê qù.",
                },
              ],
            },
          ],
        },
      },
      {
        id: 18,
        name: "핵심 단어",
        type: "multiPage",
        data: [
          {
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
                        text: "在",
                      },
                    },
                    {
                      id: uuidV4(),
                      type: "audio",
                      data: {
                        src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                      },
                    },
                  ],
                  [
                    {
                      id: uuidV4(),
                      type: "text",
                      data: {
                        text: "zài",
                      },
                    },
                  ],
                  [
                    {
                      id: uuidV4(),
                      type: "text",
                      data: {
                        text: "~에 있다",
                      },
                    },
                  ],
                ],
              },
            ],
          },
        ],
      },
      {
        id: 19,
        name: "핵심 단어",
        type: "multiPage",
        data: [
          {
            id: uuidV4(),
            type: "Template01",
            contents: [
              {
                id: uuidV4(),
                type: "multiLevelActionSentenceCard",
                data: [
                  [
                    {
                      id: uuidV4(),
                      type: "audio",
                      data: {
                        src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                      },
                    },
                  ],
                  [
                    {
                      id: uuidV4(),
                      type: "text",
                      data: {
                        text: "这道菜酸、甜、苦、辣，什么味道都有，非常香。<br />Zhè dào cài suān、tián、kǔ、là, shénme wèidào dōu yǒu, fēicháng xiāng.",
                      },
                    },
                  ],
                  [
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
                ],
              },
            ],
          },
        ],
      },
      {
        id: 20,
        name: "패턴 설명",
        type: "singlePage",
        data: {
          id: uuidV4(),
          type: "Template01",
          contents: [
            {
              id: uuidV4(),
              type: "contentsCardList",
              data: [
                {
                  isAccent: false,
                  contents: [
                    {
                      id: uuidV4(),
                      type: "text",
                      data: {
                        text: "我<br />Wô",
                      },
                    },
                  ],
                },
                {
                  isAccent: true,
                  contents: [
                    {
                      id: uuidV4(),
                      type: "text",
                      data: {
                        text: "坐<br />zuò",
                      },
                    },
                  ],
                },
                {
                  isAccent: false,
                  contents: [
                    {
                      id: uuidV4(),
                      type: "text",
                      data: {
                        text: "地铁去<br />dìtiê qù.",
                      },
                    },
                  ],
                },
              ],
            },
            {
              id: uuidV4(),
              type: "text",
              data: {
                text: "나는 지하철을 타고 갑니다.",
              },
            },
            {
              id: uuidV4(),
              type: "audio",
              data: {
                src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
              },
            },
            {
              id: uuidV4(),
              type: "explainingCharacter",
              data: {
                character: {
                  src: "",
                },
                text: "이번 패턴은 어떻게 사용하는지 알아볼까요?",
                explain:
                  "坐 zuò’는 ‘앉다’라는 뜻으로, 교통수단과 함께 쓰면 ‘타다’라는 뜻을 나타냅니다.<br />‘坐 zuò’는 좌석에 앉아 가는 교통수단에 사용합니다.",
              },
            },
          ],
        },
      },
      {
        id: 21,
        name: "문장 학습",
        type: "multiPage",
        data: [
          {
            id: uuidV4(),
            type: "Template01",
            contents: [
              {
                id: uuidV4(),
                type: "imageWithCaptionList",
                data: [
                  {
                    src: "https://fastly.picsum.photos/id/947/1000/1000.jpg?hmac=7TrBcybpd3TKLGiNwjRm_ZKtNs7eZocUzYutDo_c3H4",
                  },
                ],
              },
              {
                id: uuidV4(),
                type: "text",
                data: {
                  text: "我坐地铁去。<br />Wô zuò dìtiê qù.<br />나는 지하철을 타고 갑니다.",
                },
              },
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
          {
            id: uuidV4(),
            type: "Template01",
            contents: [
              {
                id: uuidV4(),
                type: "imageWithCaptionList",
                data: [
                  {
                    src: "https://fastly.picsum.photos/id/947/1000/1000.jpg?hmac=7TrBcybpd3TKLGiNwjRm_ZKtNs7eZocUzYutDo_c3H4",
                  },
                ],
              },
              {
                id: uuidV4(),
                type: "text",
                data: {
                  text: "我坐地铁去。<br />Wô zuò dìtiê qù.<br />나는 지하철을 타고 갑니다.",
                },
              },
              {
                id: uuidV4(),
                type: "speaking",
                data: {
                  speakingTime: 5,
                  src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                },
              },
            ],
          },
        ],
      },
      {
        id: 22,
        name: "확인하기",
        type: "multiPage",
        data: [
          {
            id: uuidV4(),
            type: "TemplateQuizWordsInOrder",
            leftContents: [
              {
                id: uuidV4(),
                type: "activityGuideCharacter",
                data: {
                  character: {
                    src: "",
                  },
                  text: "단어를 올바른 순서에 맞게 선택해 문장을 완성해 보세요.",
                },
              },
            ],
            wordsInOrder: {
              id: uuidV4(),
              type: "wordsInOrder",
              data: {
                choice: [
                  {
                    text: "<p>地铁<br />dìtiê</p>",
                    isChoice: true,
                    answerIndex: 0,
                  },
                  {
                    text: "<p>坐<br />zuò</p>",
                    isChoice: false,
                    answerIndex: -1,
                  },
                  {
                    text: "<p>我<br />Wô </p>",
                    isChoice: true,
                    answerIndex: 1,
                  },
                  {
                    text: "<p>去<br />qù </p>",
                    isChoice: true,
                    answerIndex: 2,
                  },
                ],
                exampleContents: [
                  {
                    id: uuidV4(),
                    type: "imageWithCaptionList",
                    data: [
                      {
                        src: "https://fastly.picsum.photos/id/947/1000/1000.jpg?hmac=7TrBcybpd3TKLGiNwjRm_ZKtNs7eZocUzYutDo_c3H4",
                      },
                    ],
                  },
                  {
                    id: uuidV4(),
                    type: "audio",
                    data: {
                      src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
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
        ],
      },
    ],
  },
  {
    // 학습1 코너 메타 정보
    meta: {
      id: 17,
      lessonId: 1,
    },
    // 복습 page 리스트
    data: [
      {
        id: 23,
        name: "영상 시청",
        type: "singlePage",
        data: {
          id: uuidV4(),
          type: "Template01",
          contents: [
            {
              id: uuidV4(),
              type: "iconText",
              data: {
                text: "무슨 이야기를 하고 있을까요?",
              },
            },
            {
              id: uuidV4(),
              type: "video",
              data: {
                src: "https://cdn.bubblecon.co.kr/videos/46.mp4",
              },
            },
          ],
        },
      },
      {
        id: 24,
        name: "한문, 한어병음 학습",
        type: "multiPage",
        data: [
          {
            id: uuidV4(),
            type: "TemplateConversation",
            leftContents: [
              {
                id: uuidV4(),
                type: "fullAudio",
                data: {},
              },
              {
                id: uuidV4(),
                type: "conversationWordList",
                data: {
                  words: [
                    {
                      text: "<p><b>游泳</b><br/>yóuyǒng<br/>수영하다</p>",
                      audio: {
                        src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                      },
                    },
                    {
                      text: "<p><b>游泳</b><br/>yóuyǒng<br/>수영하다</p>",
                      audio: {
                        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                      },
                    },
                    {
                      text: "<p><b>游泳</b><br/>yóuyǒng<br/>수영하다</p>",
                      audio: {
                        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                      },
                    },
                    {
                      text: "<p><b>游泳</b><br/>yóuyǒng<br/>수영하다</p>",
                      audio: {
                        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                      },
                    },
                    {
                      text: "<p><b>游泳</b><br/>yóuyǒng<br/>수영하다</p>",
                      audio: {
                        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                      },
                    },
                    {
                      text: "<p><b>游泳</b><br/>yóuyǒng<br/>수영하다</p>",
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
          {
            id: uuidV4(),
            type: "TemplateConversationToggle",
            leftContents: [
              {
                id: uuidV4(),
                type: "fullAudio",
                data: {},
              },
              {
                id: uuidV4(),
                type: "conversationWordList",
                data: {
                  words: [
                    {
                      text: "<p><b>游泳</b><br/>yóuyǒng<br/>수영하다</p>",
                      audio: {
                        src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                      },
                    },
                    {
                      text: "<p><b>游泳</b><br/>yóuyǒng<br/>수영하다</p>",
                      audio: {
                        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                      },
                    },
                    {
                      text: "<p><b>游泳</b><br/>yóuyǒng<br/>수영하다</p>",
                      audio: {
                        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                      },
                    },
                    {
                      text: "<p><b>游泳</b><br/>yóuyǒng<br/>수영하다</p>",
                      audio: {
                        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                      },
                    },
                    {
                      text: "<p><b>游泳</b><br/>yóuyǒng<br/>수영하다</p>",
                      audio: {
                        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                      },
                    },
                    {
                      text: "<p><b>游泳</b><br/>yóuyǒng<br/>수영하다</p>",
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
          {
            id: uuidV4(),
            type: "TemplateConversation",
            leftContents: [
              {
                id: uuidV4(),
                type: "fullAudio",
                data: {},
              },
              {
                id: uuidV4(),
                type: "conversationWordList",
                data: {
                  words: [
                    {
                      text: "<p><b>游泳</b><br/>yóuyǒng<br/>수영하다</p>",
                      audio: {
                        src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                      },
                    },
                    {
                      text: "<p><b>游泳</b><br/>yóuyǒng<br/>수영하다</p>",
                      audio: {
                        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                      },
                    },
                    {
                      text: "<p><b>游泳</b><br/>yóuyǒng<br/>수영하다</p>",
                      audio: {
                        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                      },
                    },
                    {
                      text: "<p><b>游泳</b><br/>yóuyǒng<br/>수영하다</p>",
                      audio: {
                        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                      },
                    },
                    {
                      text: "<p><b>游泳</b><br/>yóuyǒng<br/>수영하다</p>",
                      audio: {
                        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                      },
                    },
                    {
                      text: "<p><b>游泳</b><br/>yóuyǒng<br/>수영하다</p>",
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
          {
            id: uuidV4(),
            type: "TemplateConversationRepeat",
            leftContents: [
              {
                id: uuidV4(),
                type: "fullAudio",
                data: {},
              },
              {
                id: uuidV4(),
                type: "conversationWordList",
                data: {
                  words: [
                    {
                      text: "<p><b>游泳</b><br/>yóuyǒng<br/>수영하다</p>",
                      audio: {
                        src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                      },
                    },
                    {
                      text: "<p><b>游泳</b><br/>yóuyǒng<br/>수영하다</p>",
                      audio: {
                        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                      },
                    },
                    {
                      text: "<p><b>游泳</b><br/>yóuyǒng<br/>수영하다</p>",
                      audio: {
                        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                      },
                    },
                    {
                      text: "<p><b>游泳</b><br/>yóuyǒng<br/>수영하다</p>",
                      audio: {
                        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                      },
                    },
                    {
                      text: "<p><b>游泳</b><br/>yóuyǒng<br/>수영하다</p>",
                      audio: {
                        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
                      },
                    },
                    {
                      text: "<p><b>游泳</b><br/>yóuyǒng<br/>수영하다</p>",
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
        ],
      },
      {
        id: 25,
        type: "multiPage",
        name: "확인하기",
        data: [
          {
            id: uuidV4(),
            type: "TemplateQuizMultiChoice",
            leftContents: [
              {
                id: uuidV4(),
                type: "activityGuideCharacter",
                data: {
                  character: {
                    src: "",
                  },
                  text: "이전 회화 내용을 떠올리며 다음 문제의 답을 맞춰 보세요.",
                },
              },
            ],
            multiChoice: {
              id: uuidV4(),
              type: "multiChoice",
              data: {
                choice: ["四川", "上海"],
                answerIndex: 1,
                exampleContents: [
                  {
                    id: uuidV4(),
                    type: "text",
                    data: {
                      text: "<p>麻婆豆腐是哪个省的传统名菜？</p>",
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
          {
            id: uuidV4(),
            type: "TemplateQuizWordsInOrder",
            leftContents: [
              {
                id: uuidV4(),
                type: "activityGuideCharacter",
                data: {
                  character: {
                    src: "",
                  },
                  text: "주어진 우리말을 보고 단어를 올바른 순서에 맞게 선택해 문장을 완성해 보세요.",
                },
              },
            ],
            wordsInOrder: {
              id: uuidV4(),
              type: "wordsInOrder",
              data: {
                choice: [
                  {
                    text: "<p>冷<br>lěng</p>",
                    isChoice: true,
                    answerIndex: 0,
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
          {
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
                        sentence: "四川的传统名菜——麻婆豆腐",
                        isChoice: false,
                        answerIndex: -1,
                      },
                      {
                        sentence: "麻婆豆腐是中国人常吃的一道菜。",
                        isChoice: true,
                        answerIndex: 0,
                      },
                      {
                        sentence:
                          "很久以前，四川省成都有一家小饭馆。那里的豆腐菜材料很简单，只需要豆腐、肉、辣椒什么的，但吃起来特别香。",
                        isChoice: false,
                        answerIndex: -1,
                      },
                      {
                        sentence: "后来，麻婆豆腐受到很多人的喜爱。",
                        isChoice: true,
                        answerIndex: 1,
                      },
                      {
                        sentence:
                          "因为饭馆老板是一位老婆婆，她脸上有很多麻子，人们就把这道菜称为“麻婆豆腐”。",
                        isChoice: true,
                        answerIndex: 2,
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
          {
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
                        answerIndex: 1,
                      },
                    ],
                  },
                  {
                    name: "왕리리",
                    src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
                    sentences: [
                      {
                        sentence: "好像是邮局。",
                        isChoice: false,
                        answerIndex: -1,
                      },
                      {
                        sentence: "从那儿出来以后，我就再也没用过。",
                        isChoice: true,
                        answerIndex: 2,
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
        ],
      },
    ],
  },
  // {
  //   meta: {
  //     id: 18,
  //     lessonId: 1,
  //   },
  //   data: [
  //     {
  //       id: 1,
  //       name: "문제",
  //       type: "singlePage",
  //       data: {
  //         id: uuidV4(),
  //         type: "TemplateQuestion",
  //         contents: {
  //           id: uuidV4(),
  //           type: "question",
  //           data: {
  //             iframeUrl: "http://md-admin.bubblecon.io/bubble/embed/20050",
  //             answer: "4",
  //             comment: "해설부분입니다.",
  //             example: `① A: 洗手间离这儿近吗？Xǐshǒujiān lí zhèr jìn ma?

  //             화장실은 여기서 가까워요?

  //             B: 离这儿很近。Lí zhèr hěn jìn.

  //             여기서 가까워요.

  //             ② A: 医院怎么走？Yīyuàn zěnme zǒu?

  //             병원은 어떻게 가나요?

  //             B: 往右拐就到了。Wǎng yòu guǎi jiù dào le.

  //             오른쪽으로 돌면 바로 도착해요.

  //             ③ A: 电影院怎么走？Diànyǐngyuàn zěnme zǒu?

  //             영화관은 어떻게 가나요?

  //             B: 往前走就到了。Wǎng qián zǒu jiù dào le.

  //             앞으로 가면 바로 도착해요.

  //             ④ A: 图书馆怎么走？Túshūguǎn zěnme zǒu?

  //             도서관은 어떻게 가나요?

  //             B: 一直往前走，到学校往左拐。Yìzhí wǎng qián zǒu, dào xuéxiào wǎng zuǒ guǎi.

  //             곧장 앞으로 가신 다음, 학교에서 왼쪽으로 가세요.

  //             ⑤ A: 银行怎么走？Yínháng zěnme zǒu?

  //             은행은 어떻게 가나요?

  //             B: 一直往前走，到学校往右拐。Yìzhí wǎng qián zǒu, dào xuéxiào wǎng yòu guǎi.

  //             곧장 앞으로 가신 다음, 학교에서 오른쪽으로 가세요.`,
  //           },
  //         },
  //       },
  //     },
  //     {
  //       id: 2,
  //       name: "문제",
  //       type: "singlePage",
  //       data: {
  //         id: uuidV4(),
  //         type: "TemplateQuestion",
  //         contents: {
  //           id: uuidV4(),
  //           type: "question",
  //           data: {
  //             iframeUrl: "http://md-admin.bubblecon.io/bubble/embed/20049",
  //             answer: "1",
  //             comment: "해설부분입니다.",
  //             example: `중국의 수도는 베이징이다.`,
  //           },
  //         },
  //       },
  //     },
  //     {
  //       id: 3,
  //       name: "문제",
  //       type: "singlePage",
  //       data: {
  //         id: uuidV4(),
  //         type: "TemplateQuestion",
  //         contents: {
  //           id: uuidV4(),
  //           type: "question",
  //           data: {
  //             iframeUrl: "http://md-admin.bubblecon.io/bubble/embed/20048",
  //             answer: "1",
  //             comment: "해석부분입니다.",
  //             example: `중국어는 중국어에요`,
  //           },
  //         },
  //       },
  //     },
  //     {
  //       id: 4,
  //       name: "문제",
  //       type: "singlePage",
  //       data: {
  //         id: uuidV4(),
  //         type: "TemplateQuestion",
  //         contents: {
  //           id: uuidV4(),
  //           type: "question",
  //           data: {
  //             iframeUrl: "http://md-admin.bubblecon.io/bubble/embed/20047",
  //             answer: "1",
  //             comment: "해석이에요",
  //             example: "중국의 수도는 베이징이다.",
  //           },
  //         },
  //       },
  //     },
  //     {
  //       id: 5,
  //       name: "문제",
  //       type: "singlePage",
  //       data: {
  //         id: uuidV4(),
  //         type: "TemplateQuestion",
  //         contents: {
  //           id: uuidV4(),
  //           type: "question",
  //           data: {
  //             iframeUrl: "http://md-admin.bubblecon.io/bubble/embed/20046",
  //             answer: "1",
  //             comment: "해석이에요",
  //             example: "해설인가요",
  //           },
  //         },
  //       },
  //     },
  //     {
  //       id: 6,
  //       name: "문제",
  //       type: "singlePage",
  //       data: {
  //         id: uuidV4(),
  //         type: "TemplateQuestion",
  //         contents: {
  //           id: uuidV4(),
  //           type: "question",
  //           data: {
  //             iframeUrl: "http://md-admin.bubblecon.io/bubble/embed/20045",
  //             answer: "3",
  //             comment: "중국?",
  //             example:
  //               "중국인은 차를 약이라 여긴다. → 과거에는 약의 용도로 쓰이긴 했으나, 현재는 건강에 좋은 음료로 여긴다.",
  //           },
  //         },
  //       },
  //     },
  //     {
  //       id: 7,
  //       name: "문제",
  //       type: "singlePage",
  //       data: {
  //         id: uuidV4(),
  //         type: "TemplateQuestion",
  //         contents: {
  //           id: uuidV4(),
  //           type: "question",
  //           data: {
  //             iframeUrl: "http://md-admin.bubblecon.io/bubble/embed/20044",
  //             answer: "3",
  //             comment: "중국!",
  //             example:
  //               "중국인은 차를 약이라 여긴다. → 과거에는 약의 용도로 쓰이긴 했으나, 현재는 건강에 좋은 음료로 여긴다.",
  //           },
  //         },
  //       },
  //     },
  //   ],
  // },
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
