import { AppData } from "../types/appData";

// 과정(course) > 레슨(lesson) > 회차(corner) > 페이지(page)
export const dummyData: AppData = {
  isCompleted: false,
  course: {
    id: 1,
    title: "빨강",
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
        title: "지난 시간에 배운 내용을 복습해 봐요.",
        description: "지난 시간 복습 상세 사항.",
      },
      cornerIcon: `${process.env.PUBLIC_URL}/images/icon/img_sort_page01.png`,
      pages: [
        {
          id: 1,
          template: {
            type: "TPIframe",
            url: "http://md-admin.bubblecon.io/bubble/embed/2242",
          },
        },
        {
          id: 2,
          template: {
            type: "TPIframe",
            url: "http://md-admin.bubblecon.io/bubble/embed/2243",
          },
        },
        {
          id: 3,
          title: "문제 템플릿 3",
          description: "문제 템플릿 3 상세 사항.",
          template: {
            type: "TPIframe",
            url: "http://md-admin.bubblecon.io/bubble/embed/2244",
          },
        },
        {
          id: 14,
          template: {
            type: "TPIframe",
            url: "http://md-admin.bubblecon.io/bubble/embed/2245",
          },
        },
        {
          id: 15,
          title: "문제 템플릿 5",
          description: "문제 템플릿 5 상세 사항.",
          template: {
            type: "TPIframe",
            url: "http://md-admin.bubblecon.io/bubble/embed/2246",
          },
        },
        {
          id: 16,
          title: "문제 템플릿 6",
          description: "문제 템플릿 6 상세 사항.",
          template: {
            type: "TPIframe",
            url: "http://md-admin.bubblecon.io/bubble/embed/2247",
          },
        },
        {
          id: 17,
          template: {
            type: "TPIframe",
            url: "http://md-admin.bubblecon.io/bubble/embed/2248",
          },
        },
        {
          id: 18,
          template: {
            type: "TPIframe",
            url: "http://md-admin.bubblecon.io/bubble/embed/2249",
          },
        },
        {
          id: 19,
          template: {
            type: "TPIframe",
            url: "http://md-admin.bubblecon.io/bubble/embed/2250",
          },
        },
      ],
    },
    {
      id: 2,
      type: "study1",
      title: "학습 1",
      isCompleted: false,
      introduction: {
        title: "성조와 운모을 공부해봐요",
        description: "성조와 운모 학습 상세 사항",
      },
      cornerIcon: `${process.env.PUBLIC_URL}/images/icon/img_sort_page02.png`,
      pages: [
        {
          id: 9,
          title: "연습하기",
          description: "그림에 알맞은 문장을 고르세요.",
          template: {
            type: "TP13",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp02c_image.png`,
                  },
                ],
              },
              {
                type: "chooseMediaText",
                data: [
                  {
                    choices: [
                      {
                        text: "我坐火车去",
                        audio: {
                          src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                        },
                      },
                      {
                        text: "我会弹钢琴",
                        audio: {
                          src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                        },
                      },
                    ],
                    answerIndex: 0,
                    explanation: {
                      correctMessage: "정답입니다!",
                      wrongMessage: "오답입니다!",
                      text: "<p>Wǒ zuò huǒchē qù.</p><p>나는 기차를 타고 가요.</p>",
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          id: 10,
          title: "워밍업 퀴즈",
          description: "중국의 크기를 알고 있나요?",
          template: {
            type: "TP11F",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "https://i.picsum.photos/id/128/200/200.jpg?hmac=m4AGhj",
                    },
                    text: "<p>중국의 면적은 약 960만 km²로 매우 넓습니다.<br />한국의 면적은 약 100만 km²입니다.</p>",
                  },
                ],
              },
              {
                type: "chooseText",
                data: [
                  {
                    choices: ["그렇다", "아니다"],
                    answerIndex: 0,
                    tip: "",
                    explanation: {
                      correctMessage: "정답입니다!",
                      wrongMessage: "오답입니다!",
                      text: "<p>해설 문장이 블라블라~</p>",
                    },
                  },
                ],
              },
            ],
          },
        },

        {
          id: 12,
          title: "지난 레슨 확인하기",
          description: "녹음을 듣고 알맞은 발음을 고르세요.",
          template: {
            type: "TP03B",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "<p>성조는 음의 높낮이와 그 변화를 표시한 것으로, <br />중국어에는 네 개의 성조가 있습니다.</p>",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "o",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "e",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "i",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "u",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "u",
                    sub: "",
                    description: "",
                  },
                ],
              },
            ],
          },
        },

        {
          id: 14,
          title: "단어 익히기",
          description: "녹음을 듣고 알맞은 발음을 고르세요.",
          template: {
            type: "TP03B",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "운모는 음절에서 성모를 ...",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "경성",
                    sub: "",
                    description: "<p>ai ao an ang</p>",
                  },
                  {
                    main: "한어",
                    sub: "",
                    description: "<p>ou ong</p>",
                  },
                ],
              },
            ],
          },
        },

        {
          id: 16,
          title: "지난 레슨 확인하기",
          description: "녹음을 듣고 알맞은 발음을 고르세요.",
          template: {
            type: "TP01A",
            contents: [
              {
                type: "chooseTextByAudio",
                data: [
                  {
                    choices: ["he", "ge"],
                    answerIndex: 0,
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    choices: ["he", "ge"],
                    answerIndex: 1,
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                  {
                    choices: ["qi", "xi"],
                    answerIndex: 0,
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    choices: ["ji", "qi"],
                    answerIndex: 0,
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                  {
                    choices: ["ying", "wang"],
                    answerIndex: 1,
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                ],
              },
            ],
          },
        },

        {
          id: 18,
          title: "성조",
          description: "발음을 듣고 따라 읽어보세요.",
          template: {
            type: "TP03A",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "성조는 음의 높낮이와 그 변화를 표시한 것으로, 중국어에는 네 개의 성조가 있습니다.",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                    sub: "",
                    description: "<p>제 1성</p>",
                  },
                  {
                    main: "a",
                    sub: "",
                    description: "<p>제 2성</p>",
                  },
                  {
                    main: "a",
                    sub: "",
                    description: "<p>제 3성</p>",
                  },
                  {
                    main: "a",
                    sub: "",
                    description: "<p>제 4성</p>",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 19,
          title: "성조3",
          description: "발음을 듣고 따라 읽어보세요.3",
          template: {
            type: "TP03C",
            contents: [
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
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h4>설면음</h4><p>혀뿌리를 입천장 뒤쪽에 가까이 대고 발음합니다.</p>",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 20,
          title: "운모",
          description: "운모에 대해 알아봅시다",
          template: {
            type: "TP03D",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "운모는 음절에서 성모를 제외한 나머지 부분으로, 모두 36입니다.",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                    description: "ai ao an ang",
                  },
                  {
                    main: "o",
                    description: "ou ong",
                  },
                  {
                    main: "e",
                    description: "ei en eng er",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 21,
          title: "성모",
          description: "성모는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP04A",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image1.png`,
                  },
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image2.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h2>쌍순음</h2><p>윗입술과 아랫입술을 붙였다 떼면서 발음합니다.</p>",
                  },
                  {
                    text: "<h2>순치음</h2><p>윗니를 아랫입술에 살짝 댓다 떼면서 발음합니다.</p>",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 22,
          title: "성모",
          description: "성모 g, k는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP02C",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp02c_image.png`,
                  },
                ],
              },
            ],
          },
        },
        {
          id: 23,
          title: "중국어 경성, 한어병음 표기 규칙",
          description: "한어병음 표기 규칙에 대해 알아봅시다.",
          template: {
            type: "TP02M",
            contents: [
              {
                type: "textBoxes",
                data: [
                  {
                    main: "경성",
                  },
                  {
                    main: "한어병음 표기 규칙",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 24,
          title: "운모",
          description: "i, u, o와 결합한 운모를 알아봅시다..",
          template: {
            type: "TP05A",
            contents: [
              {
                type: "textBoxes",
                data: [
                  {
                    main: "i",
                    description:
                      "<p>ia ie iao iou ian in iang ing iong<br />(yi: ya ye yao you yan yin yang ying young)</p>",
                  },
                  {
                    main: "u",
                    description:
                      "<p>ua uo uai uei uan uen uang ueng<br />(wu: wa wo wai wei wan wen wang weng)</p>",
                  },
                  {
                    main: "u",
                    description: "ue uan un (yu: yue yuan yun)",
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    kind: "tip",
                    text: "ie, uei, ue의 e는 '으'와 '어'의 중간 소리가 아닌 '에'에 가깝게 발읍합니다. ian, uan의 a는 '아'가 아닌 '에'에 가깝게 발음합니다. ( )의 발음 표기는 성모 없이 운모만 쓸 때의 표기법입니다. 운모 iou, uei, uen 앞에 성모가 오면 가운데 운모는 생략합니다.",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 25,
          title: "회화 미리보기",
          description: "무슨 이야기를 하고 있을까요?",
          template: {
            type: "TP02F",
            contents: [
              {
                type: "video",
                data: [
                  {
                    src: "https://cdn.bubblecon.io/videos/45.mp4",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 26,
          title: "단어 익히기",
          description: "단어를 확인해 보세요.",
          template: {
            type: "TP02N",
            contents: [
              {
                type: "studyWords",
                data: [
                  {
                    text: "对不起",
                    pronunciation: "duibuqi",
                    meaning: "미안합니다",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "没关系",
                    pronunciation: "méi guanxi",
                    meaning: "괜찮습니다",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          id: 27,
          title: "회화 알아보기",
          description: "따라 읽어 보세요.",
          template: {
            type: "TP07A",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "",
                    },
                    text: "따라 읽어 보세요.",
                  },
                ],
              },
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp07a_image.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h1>对不起。</h1><p>Duìbuqǐ.</p>",
                  },
                ],
              },
              {
                type: "audioRecord",
                data: [
                  {
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          id: 28,
          title: "단어 & 회화",
          description: "중국어로 숫자를 배워봅시다.",
          template: {
            type: "TP08G",
            contents: [
              {
                type: "numberTable",
                data: [
                  {
                    text: "一",
                    pronunciation: "yi",
                    meaning: "1",
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                  {
                    text: "二",
                    pronunciation: "er",
                    meaning: "2",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "三",
                    pronunciation: "san",
                    meaning: "3",
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                  {
                    text: "四",
                    pronunciation: "si",
                    meaning: "4",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "五",
                    pronunciation: "wu",
                    meaning: "5",
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                  {
                    text: "六",
                    pronunciation: "liu",
                    meaning: "6",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "七",
                    pronunciation: "qi",
                    meaning: "7",
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                  {
                    text: "八",
                    pronunciation: "ba",
                    meaning: "8",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "九",
                    pronunciation: "jiu",
                    meaning: "9",
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                  {
                    text: "十",
                    pronunciation: "shi",
                    meaning: "10",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    kind: "tip",
                    text: "liù, jiǔ는 운모 iou 앞에 성모가 와서 가운데 운모 o가 생략된 형태입니다. 또한 운모 i와 u가 함께 있으면 뒤에 있는 운모 위에 성조를 표기합니다.",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 29,
          title: "회화 알아보기",
          description: "회화를 들어보세요.",
          template: {
            type: "TP02K",
            contents: [
              {
                type: "dialog",
                data: [
                  {
                    id: "a",
                    icon: {
                      src: "https://i.picsum.photos/id/152/200/200.jpg?hmac=jxm74qVoEmDIDdKJ1_I2QT6AhtYcq-KN75l_iotKiOw",
                    },
                    text: "<p>点点十分。</p>",
                    pronunciation: "<p>Méi xiǎngdào zài lùshang yùjiàn nǐ.</p>",
                    meaning: "<p>2시 10분.</p>",
                    hasQuestion: false,
                    audio: {
                      src: "https://www.random.org/audio-noise/?channels=2&volume=100&rate=16000&size=8&date=2022-11-21&format=wav&deliver=browser",
                    },
                  },
                  {
                    id: "a",
                    icon: {
                      src: "https://i.picsum.photos/id/152/200/200.jpg?hmac=jxm74qVoEmDIDdKJ1_I2QT6AhtYcq-KN75l_iotKiOw",
                    },
                    text: "<p>你几点 *blank*</p>",
                    pronunciation: "<p>Méi xiǎngdào zài lùshang yùjiàn nǐ.</p>",
                    meaning: "<p>너 몇 시에 집에 돌아가니?</p>",
                    hasQuestion: true,
                    question: {
                      choices: ["回家", "现在"],
                      answerIndex: 0,
                    },
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                  {
                    id: "b",
                    icon: {
                      src: "https://i.picsum.photos/id/336/200/200.jpg?hmac=VZ7MzNM30jINYNf5Oj_8zqPLTDAyKDk6eXWTGnNb4bU",
                    },
                    text: "<p>*blank* 四点回家。</p>",
                    pronunciation: "<p>Méi xiǎngdào zài lùshang yùjiàn nǐ.</p>",
                    meaning: "<p>오후 4시에 돌아가.</p>",
                    hasQuestion: true,
                    question: {
                      choices: ["가나다라", "十午"],
                      answerIndex: 0,
                    },
                    audio: {
                      src: "https://www.random.org/audio-noise/?channels=2&volume=100&rate=16000&size=8&date=2022-11-21&format=wav&deliver=browser",
                    },
                  },
                  {
                    id: "b",
                    icon: {
                      src: "https://i.picsum.photos/id/336/200/200.jpg?hmac=VZ7MzNM30jINYNf5Oj_8zqPLTDAyKDk6eXWTGnNb4bU",
                    },
                    text: "<p>*blank* 四点回家。</p>",
                    pronunciation: "<p>Méi xiǎngdào zài lùshang yùjiàn nǐ.</p>",
                    meaning: "<p>오후 4시에 돌아가.</p>",
                    hasQuestion: true,
                    question: {
                      choices: ["下午", "十午"],
                      answerIndex: 0,
                    },
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                  {
                    id: "a",
                    icon: {
                      src: "https://i.picsum.photos/id/152/200/200.jpg?hmac=jxm74qVoEmDIDdKJ1_I2QT6AhtYcq-KN75l_iotKiOw",
                    },
                    text: "<p>四点回家。</p>",
                    pronunciation: "<p>Méi xiǎngdào zài lùshang yùjiàn nǐ.</p>",
                    meaning: "<p>오후 4시에 돌아가.</p>",
                    hasQuestion: false,
                    audio: {
                      src: "https://www.random.org/audio-noise/?channels=2&volume=100&rate=16000&size=8&date=2022-11-21&format=wav&deliver=browser",
                    },
                  },
                  {
                    id: "b",
                    icon: {
                      src: "https://i.picsum.photos/id/336/200/200.jpg?hmac=VZ7MzNM30jINYNf5Oj_8zqPLTDAyKDk6eXWTGnNb4bU",
                    },
                    text: "<p>*blank* 四点回家。</p>",
                    pronunciation: "<p>Méi xiǎngdào zài lùshang yùjiàn nǐ.</p>",
                    meaning: "<p>오후 4시에 돌아가.</p>",
                    hasQuestion: true,
                    question: {
                      choices: ["下午", "十午"],
                      answerIndex: 0,
                    },
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          id: 30,
          title: "지난 레슨 확인하기",
          description: "빈칸에 들어갈 알맞은 단러를 고르세요.",
          template: {
            type: "TP01B",
            contents: [
              {
                type: "dialog",
                data: [
                  {
                    id: "a",
                    icon: {
                      src: "https://i.picsum.photos/id/152/200/200.jpg?hmac=jxm74qVoEmDIDdKJ1_I2QT6AhtYcq-KN75l_iotKiOw",
                    },
                    text: "<p>现在*blank*点?</p>",
                    pronunciation: "<p>Méi xiǎngdào zài lùshang yùjiàn nǐ.</p>",
                    meaning: "<p>지금 몇 시야?</p>",
                    hasQuestion: true,
                    question: {
                      choices: ["几", "回"],
                      answerIndex: 0,
                    },
                  },
                  {
                    id: "b",
                    icon: {
                      src: "https://i.picsum.photos/id/336/200/200.jpg?hmac=VZ7MzNM30jINYNf5Oj_8zqPLTDAyKDk6eXWTGnNb4bU",
                    },
                    text: "<p>点*blank*十分。</p>",
                    pronunciation: "<p>Méi xiǎngdào zài lùshang yùjiàn nǐ.</p>",
                    meaning: "<p>2시 10분.</p>",
                    hasQuestion: true,
                    question: {
                      choices: ["点", "几"],
                      answerIndex: 0,
                    },
                  },
                  {
                    id: "a",
                    icon: {
                      src: "https://i.picsum.photos/id/152/200/200.jpg?hmac=jxm74qVoEmDIDdKJ1_I2QT6AhtYcq-KN75l_iotKiOw",
                    },
                    text: "<p>你几点*blank*</p>",
                    pronunciation: "<p>Méi xiǎngdào zài lùshang yùjiàn nǐ.</p>",
                    meaning: "<p>너 몇 시에 집에 돌아가니?</p>",
                    hasQuestion: true,
                    question: {
                      choices: ["回家", "现在"],
                      answerIndex: 0,
                    },
                  },
                  {
                    id: "b",
                    icon: {
                      src: "https://i.picsum.photos/id/336/200/200.jpg?hmac=VZ7MzNM30jINYNf5Oj_8zqPLTDAyKDk6eXWTGnNb4bU",
                    },
                    text: "<p>*blank* 四点回家。</p>",
                    pronunciation: "<p>Méi xiǎngdào zài lùshang yùjiàn nǐ.</p>",
                    meaning: "<p>오후 4시에 돌아가.</p>",
                    hasQuestion: true,
                    question: {
                      choices: ["下午", "十午"],
                      answerIndex: 0,
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          id: 31,
          title: "지난 레슨 확인하기",
          description: "빈칸에 들어갈 알맞은 단어를 고르세요.",
          template: {
            type: "TP10A",
            contents: [
              {
                type: "wordQuiz",
                data: [
                  {
                    text: "会",
                    choices: ["会", "在"],
                    answerIndex: 0,
                    meaning: "~할 줄 알다.",
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                    // explanation: {
                    //   correctMessage: "정답입니다!",
                    //   wrongMessage: "오답입니다!",
                    //   text: "<p>해설 문장이 블라블라~</p>",
                    // },
                  },
                ],
              },
            ],
          },
        },
        {
          id: 32,
          title: "단어 익히기",
          description: "발음을 듣고 알맞은 한어병음을 고르세요.",
          template: {
            type: "TP11G",
            contents: [
              {
                type: "wordQuiz",
                data: [
                  {
                    text: "打",
                    choices: ["da", "ta"],
                    answerIndex: 0,
                    meaning: "(놀이, 운동을) 하다.",
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                    explanation: {
                      correctMessage: "정답입니다!",
                      wrongMessage: "오답입니다!",
                      text: "<p>해설 문장이 블라블라~</p>",
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          id: 33,
          title: "문장",
          description: "단어를 알맞게 배열하여 문장을 완성하세요.",
          template: {
            type: "TP24A",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp02c_image.png`,
                  },
                ],
              },
              {
                type: "sortWords",
                data: [
                  {
                    text: "*我*会*游泳*가나다*라*",
                    fakeChoices: ["가", "나", "다"],
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                    explanation: {
                      audio: {
                        src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                      },
                      correctMessage: "我会游泳",
                      wrongMessage: "오답입니다!",
                      text: "<p>Wǒ  huì  yóuyǒng.</p><p>나는 수영할 줄 압니다.</p>",
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          id: 34,
          title: "~ 跟 ~ 一样",
          description: "~ 跟 ~ 一样 ~gēn~yíyàng 에 대해 알아봅시다.",
          template: {
            type: "TP09A",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "<h1>你跟以前一样帅啊。</h1><p class='c4'>Nǐ gēn yǐqián yíyàng shuài a.</p><h2>너는 예전과 같이 멋있구나.</h2><h4 class='c4'>‘~跟…一样’은 ‘~은(는) …와(과) 같다’라는 뜻으로, 사람 또는 사물의 성격이나 성질의 공통점을 비교하는 표현입니다. 부정형은 不一样입니다.</h4>",
                  },
                ],
              },
              {
                type: "bottomTabs",
                data: [
                  {
                    tabNames: "예문",
                    contents: [
                      {
                        type: "html",
                        data: [
                          {
                            text: "<h3 class='c2'>~跟…一样 / ~跟…不一样</h3>",
                          },
                        ],
                      },
                      {
                        type: "html",
                        data: [
                          {
                            text: "<h3>他的爱好跟我(的爱好)一样。</h3><p>Tā de àihào gēn wǒ (de àihào) yíyàng.</p><p>그의 취미는 나(의 취미)와 같다.</p>",
                          },
                        ],
                      },
                      {
                        type: "html",
                        data: [
                          {
                            text: "<h3>你好，你是张明吗 ?</h3><p>Nǐ hǎo, Nǐ shì Zhāng Míng ma ?</p><p>안녕, 너 장밍이니 ?</p>",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    tabNames: "단어",
                    contents: [
                      {
                        type: "images",
                        data: [
                          {
                            src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image1.png`,
                          },
                        ],
                      },
                      {
                        type: "html",
                        data: [
                          {
                            text: "<h3>가나다라</h3><p>마바사</p><p>아자차</p><h3>카타파</h3><p>하</p>",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          id: 35,
          title: "중국의 블랙프라이데이 ‘双十一",
          description: "중국의 블랙프라이데이에 대해 알아봅시다.",
          template: {
            type: "TP19A",
            contents: [
              {
                type: "studySentencesWithVocabulary",
                data: [
                  {
                    sentences: [
                      {
                        text: "11月11日是光棍节.光棍有单身的意思.所以这天是庆祝自己单身生活的娱乐性节日. ",
                        pronunciation:
                          "Shíyī yuè shíyī rì shì Guānggùnjié, guānggùn yǒu dānshēn de yìsi, suǒyǐ zhè tiān shì qìngzhù zìjǐ dānshēn shēnghuó de yúlèxìng jiérì.",
                        meaning:
                          "11월 11일은 광군절이다. 光棍(빛나는 막대기)은 독신의 의미가 있어서, 이날은 축하하는 오락성 기념일이다.",
                        audio: {
                          src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                        },
                        words: [
                          {
                            text: "光棍节",
                            pronunciation: "yóuyǒng",
                            meaning: "싱글의 날",
                            audio: {
                              src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                            },
                          },
                          {
                            text: "所以",
                            pronunciation: "Suǒyǐ",
                            meaning: "그래서",
                            audio: {
                              src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                            },
                          },
                          {
                            text: "光棍节",
                            pronunciation: "yóuyǒng",
                            meaning: "싱글의 날",
                            audio: {
                              src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                            },
                          },
                          {
                            text: "所以",
                            pronunciation: "Suǒyǐ",
                            meaning: "그래서",
                            audio: {
                              src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                            },
                          },
                        ],
                      },
                      {
                        text: "这个节日是在校园里流行起来的.慢慢地通过网络传播成了一种节日文化。但是.现在更多的人把这天叫“双十一”.是中国网络购物节.",
                        pronunciation:
                          "Shíyī yuè shíyī rì shì Guānggùnjié, guānggùn yǒu dānshēn de yìsi, suǒyǐ zhè tiān shì qìngzhù zìjǐ dānshēn shēnghuó de yúlèxìng jiérì.",
                        meaning:
                          "이 축제는 교내에서 인기를 얻었고 인터넷을 통해 서서히 축제 문화로 확산되었습니다. 하지만 지금은 중국 온라인 쇼핑 축제인 '더블 일레븐'으로 불리는 날이 많아졌다.",
                        audio: {
                          src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                        },
                        words: [
                          {
                            text: "光棍节",
                            pronunciation: "yóuyǒng",
                            meaning: "가나다라",
                            audio: {
                              src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                            },
                          },
                          {
                            text: "所以",
                            pronunciation: "Suǒyǐ",
                            meaning: "마바사",
                            audio: {
                              src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                            },
                          },
                          {
                            text: "所以",
                            pronunciation: "Suǒyǐ",
                            meaning: "아자차",
                            audio: {
                              src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                            },
                          },
                        ],
                      },
                    ],
                    image: {
                      src: `${process.env.PUBLIC_URL}/images/icon/tp02c_image.png`,
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          id: 36,
          title: "",
          description: "",
          template: {
            type: "TPTab",
            tabs: [
              {
                tabName: "한어",
                active: true,
                tabPages: [
                  {
                    title: "중국어의 개요",
                    description: "중국어의 개요에 대해 알아봅시다.",
                    template: {
                      type: "TP02",
                      contents: [
                        {
                          type: "html",
                          data: [
                            {
                              text: "<h2>한어는 무엇인가요?</h2><p>중국 인구의 대다수를 차지하는 한족이 쓰는 언어, 즉 '한어'라고 합니다.</p>",
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    title: "중국어의 개요",
                    description: "영상을 보고 중국어에 대해 알아봅시다.",
                    template: {
                      type: "TP02",
                      contents: [
                        {
                          type: "video",
                          data: [
                            {
                              src: "https://cdn.bubblecon.io/videos/45.mp4",
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    title: "성조",
                    description: "발음을 듣고 따라 읽어 보세요.",
                    template: {
                      type: "TP13",
                      contents: [
                        {
                          type: "images",
                          data: [
                            {
                              src: `${process.env.PUBLIC_URL}/images/icon/tp07a_image.png`,
                            },
                          ],
                        },
                        {
                          type: "html",
                          data: [
                            {
                              text: "<h2>ma 엄마</h2><p>성모와 운모가 같더라도 성조가 다르면 뜻이 달라져요.</p>",
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    title: "성모",
                    description: "발음을 연습해 보세요.",
                    template: {
                      type: "TP05",
                      contents: [
                        {
                          type: "images",
                          data: [
                            {
                              src: `${process.env.PUBLIC_URL}/images/icon/tp07a_image.png`,
                            },
                          ],
                        },
                        {
                          type: "audio",
                          data: [
                            {
                              src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
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
                tabName: "중국어의 구성(한어 병음)",
                active: false,
                tabPages: [],
              },
            ],
          },
        },
        {
          id: 37,
          title: "",
          description: "",
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
                    title: "성모",
                    description: "발음을 듣고 따라 읽어 보세요.",
                    template: {
                      type: "TP05",
                      contents: [
                        {
                          type: "textBoxes",
                          data: [
                            {
                              main: "ge",
                              description: "<p>혀뿌리를 입천장 뒤쪽에 가까이 대고 발음합니다.</p>",
                            },
                          ],
                        },
                        {
                          type: "audioRecord",
                          data: [
                            {
                              audio: {
                                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    title: "중국어 개요",
                    description: "중국어의 개요에 대해 알아봅시다.",
                    template: {
                      type: "TP15",
                      contents: [
                        {
                          type: "html",
                          data: [
                            {
                              text: "<h2>중국어의 구성에서 한자를 알아봐요.</h2>",
                            },
                          ],
                        },
                        {
                          type: "images",
                          data: [
                            {
                              src: `${process.env.PUBLIC_URL}/images/icon/tp07a_image.png`,
                            },
                          ],
                        },
                        {
                          type: "html",
                          data: [
                            {
                              text: "<p>중국에서는 기존의 복잡한 한자(변체자)를 쉽고 간단하게 만든 '간화자'를 사용 합니다.</p>",
                            },
                            {
                              kind: "tip",
                              text: "'간화자'는 간체자라고도 합니다.",
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
                tabName: "중국어의 구성(한어 병음)",
                active: false,
                tabPages: [],
              },
            ],
          },
        },
        {
          id: 38,
          title: "",
          description: "",
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
                    title: "성모",
                    description: "따라 읽어 보세요.",
                    template: {
                      type: "TP16",
                      contents: [
                        {
                          type: "images",
                          data: [
                            {
                              src: `${process.env.PUBLIC_URL}/images/icon/tp07a_image.png`,
                            },
                          ],
                        },
                        {
                          type: "html",
                          data: [
                            {
                              text: "<h1>gou</h1><p>개</p>",
                            },
                          ],
                        },
                        {
                          type: "audio",
                          data: [
                            {
                              src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    title: "성조",
                    description: "발음을 듣고 따라 읽어 보세요.",
                    template: {
                      type: "TP07",
                      contents: [
                        {
                          type: "html",
                          data: [
                            {
                              text: "<p>성조에서 제 1성은 가장 높은 음에서 길고 평평하게 발음합니다.</p>",
                            },
                          ],
                        },
                        {
                          type: "images",
                          data: [
                            {
                              src: `${process.env.PUBLIC_URL}/images/icon/tp07a_image.png`,
                            },
                          ],
                        },
                        {
                          type: "video",
                          data: [
                            {
                              src: "https://cdn.bubblecon.io/videos/45.mp4",
                            },
                          ],
                        },
                        {
                          type: "audioRecord",
                          data: [
                            {
                              audio: {
                                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    title: "중국어의 구성3-3",
                    description: "중국어의 구성에 대해 알아봅시다.3-3",
                    template: {
                      type: "TP04",
                      contents: [
                        {
                          type: "images",
                          data: [
                            {
                              src: `${process.env.PUBLIC_URL}/images/icon/tp07a_image.png`,
                            },
                          ],
                        },
                        {
                          type: "chooseText",
                          data: [
                            {
                              choices: ["ai", "ao"],
                              answerIndex: 0,
                              explanation: {
                                correctMessage: "정답입니다!",
                                wrongMessage: "오답입니다!",
                                text: "<p>해설 문장이 블라블라~</p>",
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
                tabName: "중국어의 구성(한어 병음)",
                active: false,
                tabPages: [],
              },
            ],
          },
        },
        {
          id: 39,
          title: "",
          description: "",
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
                tabName: "중국어의 구성(한어 병음)",
                active: true,
                tabPages: [
                  {
                    title: "중국의 면적",
                    description: "중국의 면적에 대해 알아봅시다.",
                    template: {
                      type: "TP03",
                      contents: [
                        {
                          type: "iconText",
                          data: [
                            {
                              icon: {
                                src: "",
                              },
                              text: "운모 a와 운모o가 동시에...",
                            },
                          ],
                        },
                        {
                          type: "chooseText",
                          data: [
                            {
                              choices: ["a", "o"],
                              answerIndex: 0,
                              tip: "성조는 운모 위에 표기하며...",
                              explanation: {
                                correctMessage: "정답입니다!",
                                wrongMessage: "오답입니다!",
                                text: "<p>해설 문장</p>",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    title: "성조",
                    description: "발음을 듣고 따라 읽어 보세요",
                    template: {
                      type: "TP13",
                      contents: [
                        {
                          type: "images",
                          data: [
                            {
                              src: `${process.env.PUBLIC_URL}/images/icon/tp07a_image.png`,
                            },
                          ],
                        },
                        {
                          type: "html",
                          data: [
                            {
                              text: "<h3>중국의 면적</h3><p>중국의면적은 약 960만km로 매우 넓습니다. 한반도 크기의 약 44배에 이릅니다.</p>",
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
      ],
    },
    {
      id: 3,
      type: "study1",
      title: "학습 2",
      isCompleted: false,
      introduction: {
        title: "성조와 운모을 공부해봐요",
        description: "성조와 운모 학습 상세 사항",
      },
      cornerIcon: `${process.env.PUBLIC_URL}/images/icon/img_sort_page03.png`,
      pages: [
        {
          id: 10,
          title: "워밍업 퀴즈",
          description: "중국의 크기를 알고 있나요?",
          template: {
            type: "TP02",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "<h3>한어는 무엇인가요?</h3><p>중국 인구의 대다수를 차지하는 한족이 쓰는 언어, 즉 한어라고 합니다.</p>",
                  },
                ],
              },
            ],
          },
        },

        {
          id: 12,
          title: "지난 레슨 확인하기",
          description: "녹음을 듣고 알맞은 발음을 고르세요.",
          template: {
            type: "TP03",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "",
                    },
                    text: "운모a와 운모o가 동시에 나오면 성조는 어느 운모 위에 표시 할까요?",
                  },
                ],
              },
              {
                type: "chooseText",
                data: [
                  {
                    choices: ["a", "o"],
                    answerIndex: 0,
                    tip: "성조는 운모 위에 표기하며, 운모가 여러 개이면 a > o,e > i, u, u 순서로 성조를 표기합니다. 예)jia, tian, hao,jie",
                    explanation: {
                      correctMessage: "정답입니다!",
                      wrongMessage: "오답입니다!",
                      text: "<p>해설 문장이 블라블라~</p>",
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          id: 14,
          title: "단어 익히기",
          description: "녹음을 듣고 알맞은 발음을 고르세요.",
          template: {
            type: "TP04",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image1.png`,
                  },
                ],
              },
              {
                type: "chooseText",
                data: [
                  {
                    choices: ["a", "o"],
                    answerIndex: 0,
                    explanation: {
                      correctMessage: "정답입니다!",
                      wrongMessage: "오답입니다!",
                      text: "<p>해설 문장이 블라블라~</p>",
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          id: 15,
          title: "단어 익히기",
          description: "녹음을 듣고 알맞은 발음을 고르세요.",
          template: {
            type: "TP05",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image1.png`,
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },

        {
          id: 16,
          title: "지난 레슨 확인하기",
          description: "녹음을 듣고 알맞은 발음을 고르세요.",
          template: {
            type: "TP07",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "성조는 음의 높낮이와 그 변화를 표시한 것으로, 중국어에는 네 개의 성조가 있습니다.",
                  },
                ],
              },
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image1.png`,
                  },
                ],
              },
              {
                type: "video",
                data: [
                  {
                    src: "https://cdn.bubblecon.io/videos/45.mp4",
                  },
                ],
              },
              {
                type: "audioRecord",
                data: [
                  {
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          id: 18,
          title: "성조",
          description: "발음을 듣고 따라 읽어보세요.",
          template: {
            type: "TP13",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image1.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h3>중국의 면적</h3><p>중국의면적은 약 960만km로 매우 넓습니다. 한반도 크기의 약 44배에 이릅니다.</p>",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 19,
          title: "성조3",
          description: "발음을 듣고 따라 읽어보세요.3",
          template: {
            type: "TP16",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image1.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h3>중국의 면적</h3><p>중국의면적은 약 960만km로 매우 넓습니다. 한반도 크기의 약 44배에 이릅니다.</p>",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 20,
          title: "운모",
          description: "운모에 대해 알아봅시다",
          template: {
            type: "TP13",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image1.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h3>중국의 면적</h3><p>중국의면적은 약 960만km로 매우 넓습니다. 한반도 크기의 약 44배에 이릅니다.</p>",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 21,
          title: "성모",
          description: "성모는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP04A",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image1.png`,
                  },
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image2.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h2>쌍순음</h2><p>윗입술과 아랫입술을 붙였다 떼면서 발음합니다.</p>",
                  },
                  {
                    text: "<h2>순치음</h2><p>윗니를 아랫입술에 살짝 댓다 떼면서 발음합니다.</p>",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 22,
          title: "성모",
          description: "성모 g, k는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP02C",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp02c_image.png`,
                  },
                ],
              },
            ],
          },
        },
        {
          id: 23,
          title: "중국어 경성, 한어병음 표기 규칙",
          description: "한어병음 표기 규칙에 대해 알아봅시다.",
          template: {
            type: "TP02M",
            contents: [
              {
                type: "textBoxes",
                data: [
                  {
                    main: "경성",
                  },
                  {
                    main: "한어병음 표기 규칙",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 24,
          title: "운모",
          description: "i, u, o와 결합한 운모를 알아봅시다..",
          template: {
            type: "TP05A",
            contents: [
              {
                type: "textBoxes",
                data: [
                  {
                    main: "i",
                    description:
                      "<p>ia ie iao iou ian in iang ing iong<br />(yi: ya ye yao you yan yin yang ying young)</p>",
                  },
                  {
                    main: "u",
                    description:
                      "<p>ua uo uai uei uan uen uang ueng<br />(wu: wa wo wai wei wan wen wang weng)</p>",
                  },
                  {
                    main: "u",
                    description: "ue uan un (yu: yue yuan yun)",
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    kind: "tip",
                    text: "ie, uei, ue의 e는 '으'와 '어'의 중간 소리가 아닌 '에'에 가깝게 발읍합니다. ian, uan의 a는 '아'가 아닌 '에'에 가깝게 발음합니다. ( )의 발음 표기는 성모 없이 운모만 쓸 때의 표기법입니다. 운모 iou, uei, uen 앞에 성모가 오면 가운데 운모는 생략합니다.",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 25,
          title: "회화 미리보기",
          description: "무슨 이야기를 하고 있을까요?",
          template: {
            type: "TP02F",
            contents: [
              {
                type: "video",
                data: [
                  {
                    src: "https://cdn.bubblecon.io/videos/45.mp4",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 26,
          title: "단어 익히기",
          description: "단어를 확인해 보세요.",
          template: {
            type: "TP02N",
            contents: [
              {
                type: "studyWords",
                data: [
                  {
                    text: "对不起",
                    pronunciation: "duibuqi",
                    meaning: "미안합니다",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "没关系",
                    pronunciation: "méi guanxi",
                    meaning: "괜찮습니다",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          id: 27,
          title: "회화 알아보기",
          description: "따라 읽어 보세요.",
          template: {
            type: "TP07A",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "",
                    },
                    text: "따라 읽어 보세요.",
                  },
                ],
              },
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp07a_image.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h1>对不起。</h1><p>Duìbuqǐ.</p>",
                  },
                ],
              },
              {
                type: "audioRecord",
                data: [
                  {
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
    {
      id: 4,
      type: "study1",
      title: "학습 3",
      isCompleted: false,
      introduction: {
        title: "성조와 운모을 공부해봐요",
        description: "성조와 운모 학습 상세 사항",
      },
      cornerIcon: `${process.env.PUBLIC_URL}/images/icon/img_sort_page04.png`,
      pages: [
        {
          id: 10,
          title: "워밍업 퀴즈",
          description: "중국의 크기를 알고 있나요?",
          template: {
            type: "TP11F",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "https://i.picsum.photos/id/128/200/200.jpg?hmac=m4AGhj",
                    },
                    text: "<p>중국의 면적은 약 960만 km²로 매우 넓습니다.<br />한국의 면적은 약 100만 km²입니다.</p>",
                  },
                ],
              },
              {
                type: "chooseText",
                data: [
                  {
                    choices: ["그렇다", "아니다"],
                    answerIndex: 0,
                    tip: "",
                    explanation: {
                      correctMessage: "정답입니다!",
                      wrongMessage: "오답입니다!",
                      text: "<p>해설 문장이 블라블라~</p>",
                    },
                  },
                ],
              },
            ],
          },
        },

        {
          id: 12,
          title: "지난 레슨 확인하기",
          description: "녹음을 듣고 알맞은 발음을 고르세요.",
          template: {
            type: "TP03B",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "<p>성조는 음의 높낮이와 그 변화를 표시한 것으로, <br />중국어에는 네 개의 성조가 있습니다.</p>",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "o",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "e",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "i",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "u",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "u",
                    sub: "",
                    description: "",
                  },
                ],
              },
            ],
          },
        },

        {
          id: 14,
          title: "단어 익히기",
          description: "녹음을 듣고 알맞은 발음을 고르세요.",
          template: {
            type: "TP03B",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "운모는 음절에서 성모를 ...",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "경성",
                    sub: "",
                    description: "<p>ai ao an ang</p>",
                  },
                  {
                    main: "한어",
                    sub: "",
                    description: "<p>ou ong</p>",
                  },
                ],
              },
            ],
          },
        },

        {
          id: 16,
          title: "지난 레슨 확인하기",
          description: "녹음을 듣고 알맞은 발음을 고르세요.",
          template: {
            type: "TP01A",
            contents: [
              {
                type: "chooseTextByAudio",
                data: [
                  {
                    choices: ["he", "ge"],
                    answerIndex: 0,
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    choices: ["he", "ge"],
                    answerIndex: 1,
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                  {
                    choices: ["qi", "xi"],
                    answerIndex: 0,
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    choices: ["ji", "qi"],
                    answerIndex: 0,
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                  {
                    choices: ["ying", "wang"],
                    answerIndex: 1,
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                ],
              },
            ],
          },
        },

        {
          id: 18,
          title: "성조",
          description: "발음을 듣고 따라 읽어보세요.",
          template: {
            type: "TP03A",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "성조는 음의 높낮이와 그 변화를 표시한 것으로, 중국어에는 네 개의 성조가 있습니다.",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                    sub: "",
                    description: "<p>제 1성</p>",
                  },
                  {
                    main: "a",
                    sub: "",
                    description: "<p>제 2성</p>",
                  },
                  {
                    main: "a",
                    sub: "",
                    description: "<p>제 3성</p>",
                  },
                  {
                    main: "a",
                    sub: "",
                    description: "<p>제 4성</p>",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 19,
          title: "성조3",
          description: "발음을 듣고 따라 읽어보세요.3",
          template: {
            type: "TP03C",
            contents: [
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
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h4>설면음</h4><p>혀뿌리를 입천장 뒤쪽에 가까이 대고 발음합니다.</p>",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 20,
          title: "운모",
          description: "운모에 대해 알아봅시다",
          template: {
            type: "TP03D",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "운모는 음절에서 성모를 제외한 나머지 부분으로, 모두 36입니다.",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                    description: "ai ao an ang",
                  },
                  {
                    main: "o",
                    description: "ou ong",
                  },
                  {
                    main: "e",
                    description: "ei en eng er",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 21,
          title: "성모",
          description: "성모는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP04A",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image1.png`,
                  },
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image2.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h2>쌍순음</h2><p>윗입술과 아랫입술을 붙였다 떼면서 발음합니다.</p>",
                  },
                  {
                    text: "<h2>순치음</h2><p>윗니를 아랫입술에 살짝 댓다 떼면서 발음합니다.</p>",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 22,
          title: "성모",
          description: "성모 g, k는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP02C",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp02c_image.png`,
                  },
                ],
              },
            ],
          },
        },
        {
          id: 23,
          title: "중국어 경성, 한어병음 표기 규칙",
          description: "한어병음 표기 규칙에 대해 알아봅시다.",
          template: {
            type: "TP02M",
            contents: [
              {
                type: "textBoxes",
                data: [
                  {
                    main: "경성",
                  },
                  {
                    main: "한어병음 표기 규칙",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 24,
          title: "운모",
          description: "i, u, o와 결합한 운모를 알아봅시다..",
          template: {
            type: "TP05A",
            contents: [
              {
                type: "textBoxes",
                data: [
                  {
                    main: "i",
                    description:
                      "<p>ia ie iao iou ian in iang ing iong<br />(yi: ya ye yao you yan yin yang ying young)</p>",
                  },
                  {
                    main: "u",
                    description:
                      "<p>ua uo uai uei uan uen uang ueng<br />(wu: wa wo wai wei wan wen wang weng)</p>",
                  },
                  {
                    main: "u",
                    description: "ue uan un (yu: yue yuan yun)",
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    kind: "tip",
                    text: "ie, uei, ue의 e는 '으'와 '어'의 중간 소리가 아닌 '에'에 가깝게 발읍합니다. ian, uan의 a는 '아'가 아닌 '에'에 가깝게 발음합니다. ( )의 발음 표기는 성모 없이 운모만 쓸 때의 표기법입니다. 운모 iou, uei, uen 앞에 성모가 오면 가운데 운모는 생략합니다.",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 25,
          title: "회화 미리보기",
          description: "무슨 이야기를 하고 있을까요?",
          template: {
            type: "TP02F",
            contents: [
              {
                type: "video",
                data: [
                  {
                    src: "https://cdn.bubblecon.io/videos/45.mp4",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 26,
          title: "단어 익히기",
          description: "단어를 확인해 보세요.",
          template: {
            type: "TP02N",
            contents: [
              {
                type: "studyWords",
                data: [
                  {
                    text: "对不起",
                    pronunciation: "duibuqi",
                    meaning: "미안합니다",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "没关系",
                    pronunciation: "méi guanxi",
                    meaning: "괜찮습니다",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          id: 27,
          title: "회화 알아보기",
          description: "따라 읽어 보세요.",
          template: {
            type: "TP07A",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "",
                    },
                    text: "따라 읽어 보세요.",
                  },
                ],
              },
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp07a_image.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h1>对不起。</h1><p>Duìbuqǐ.</p>",
                  },
                ],
              },
              {
                type: "audioRecord",
                data: [
                  {
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
    {
      id: 5,
      type: "study1",
      title: "회화",
      isCompleted: false,
      introduction: {
        title: "성조와 운모을 공부해봐요",
        description: "성조와 운모 학습 상세 사항",
      },
      cornerIcon: `${process.env.PUBLIC_URL}/images/icon/img_sort_page05.png`,
      pages: [
        {
          id: 10,
          title: "워밍업 퀴즈",
          description: "중국의 크기를 알고 있나요?",
          template: {
            type: "TP11F",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "https://i.picsum.photos/id/128/200/200.jpg?hmac=m4AGhj",
                    },
                    text: "<p>중국의 면적은 약 960만 km²로 매우 넓습니다.<br />한국의 면적은 약 100만 km²입니다.</p>",
                  },
                ],
              },
              {
                type: "chooseText",
                data: [
                  {
                    choices: ["그렇다", "아니다"],
                    answerIndex: 0,
                    tip: "",
                    explanation: {
                      correctMessage: "정답입니다!",
                      wrongMessage: "오답입니다!",
                      text: "<p>해설 문장이 블라블라~</p>",
                    },
                  },
                ],
              },
            ],
          },
        },

        {
          id: 12,
          title: "지난 레슨 확인하기",
          description: "녹음을 듣고 알맞은 발음을 고르세요.",
          template: {
            type: "TP03B",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "<p>성조는 음의 높낮이와 그 변화를 표시한 것으로, <br />중국어에는 네 개의 성조가 있습니다.</p>",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "o",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "e",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "i",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "u",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "u",
                    sub: "",
                    description: "",
                  },
                ],
              },
            ],
          },
        },

        {
          id: 14,
          title: "단어 익히기",
          description: "녹음을 듣고 알맞은 발음을 고르세요.",
          template: {
            type: "TP03B",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "운모는 음절에서 성모를 ...",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "경성",
                    sub: "",
                    description: "<p>ai ao an ang</p>",
                  },
                  {
                    main: "한어",
                    sub: "",
                    description: "<p>ou ong</p>",
                  },
                ],
              },
            ],
          },
        },

        {
          id: 16,
          title: "지난 레슨 확인하기",
          description: "녹음을 듣고 알맞은 발음을 고르세요.",
          template: {
            type: "TP01A",
            contents: [
              {
                type: "chooseTextByAudio",
                data: [
                  {
                    choices: ["he", "ge"],
                    answerIndex: 0,
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    choices: ["he", "ge"],
                    answerIndex: 1,
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                  {
                    choices: ["qi", "xi"],
                    answerIndex: 0,
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    choices: ["ji", "qi"],
                    answerIndex: 0,
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                  {
                    choices: ["ying", "wang"],
                    answerIndex: 1,
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                ],
              },
            ],
          },
        },

        {
          id: 18,
          title: "성조",
          description: "발음을 듣고 따라 읽어보세요.",
          template: {
            type: "TP03A",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "성조는 음의 높낮이와 그 변화를 표시한 것으로, 중국어에는 네 개의 성조가 있습니다.",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                    sub: "",
                    description: "<p>제 1성</p>",
                  },
                  {
                    main: "a",
                    sub: "",
                    description: "<p>제 2성</p>",
                  },
                  {
                    main: "a",
                    sub: "",
                    description: "<p>제 3성</p>",
                  },
                  {
                    main: "a",
                    sub: "",
                    description: "<p>제 4성</p>",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 19,
          title: "성조3",
          description: "발음을 듣고 따라 읽어보세요.3",
          template: {
            type: "TP03C",
            contents: [
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
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h4>설면음</h4><p>혀뿌리를 입천장 뒤쪽에 가까이 대고 발음합니다.</p>",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 20,
          title: "운모",
          description: "운모에 대해 알아봅시다",
          template: {
            type: "TP03D",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "운모는 음절에서 성모를 제외한 나머지 부분으로, 모두 36입니다.",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                    description: "ai ao an ang",
                  },
                  {
                    main: "o",
                    description: "ou ong",
                  },
                  {
                    main: "e",
                    description: "ei en eng er",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 21,
          title: "성모",
          description: "성모는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP04A",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image1.png`,
                  },
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image2.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h2>쌍순음</h2><p>윗입술과 아랫입술을 붙였다 떼면서 발음합니다.</p>",
                  },
                  {
                    text: "<h2>순치음</h2><p>윗니를 아랫입술에 살짝 댓다 떼면서 발음합니다.</p>",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 22,
          title: "성모",
          description: "성모 g, k는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP02C",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp02c_image.png`,
                  },
                ],
              },
            ],
          },
        },
        {
          id: 23,
          title: "중국어 경성, 한어병음 표기 규칙",
          description: "한어병음 표기 규칙에 대해 알아봅시다.",
          template: {
            type: "TP02M",
            contents: [
              {
                type: "textBoxes",
                data: [
                  {
                    main: "경성",
                  },
                  {
                    main: "한어병음 표기 규칙",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 24,
          title: "운모",
          description: "i, u, o와 결합한 운모를 알아봅시다..",
          template: {
            type: "TP05A",
            contents: [
              {
                type: "textBoxes",
                data: [
                  {
                    main: "i",
                    description:
                      "<p>ia ie iao iou ian in iang ing iong<br />(yi: ya ye yao you yan yin yang ying young)</p>",
                  },
                  {
                    main: "u",
                    description:
                      "<p>ua uo uai uei uan uen uang ueng<br />(wu: wa wo wai wei wan wen wang weng)</p>",
                  },
                  {
                    main: "u",
                    description: "ue uan un (yu: yue yuan yun)",
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    kind: "tip",
                    text: "ie, uei, ue의 e는 '으'와 '어'의 중간 소리가 아닌 '에'에 가깝게 발읍합니다. ian, uan의 a는 '아'가 아닌 '에'에 가깝게 발음합니다. ( )의 발음 표기는 성모 없이 운모만 쓸 때의 표기법입니다. 운모 iou, uei, uen 앞에 성모가 오면 가운데 운모는 생략합니다.",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 25,
          title: "회화 미리보기",
          description: "무슨 이야기를 하고 있을까요?",
          template: {
            type: "TP02F",
            contents: [
              {
                type: "video",
                data: [
                  {
                    src: "https://cdn.bubblecon.io/videos/45.mp4",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 26,
          title: "단어 익히기",
          description: "단어를 확인해 보세요.",
          template: {
            type: "TP02N",
            contents: [
              {
                type: "studyWords",
                data: [
                  {
                    text: "对不起",
                    pronunciation: "duibuqi",
                    meaning: "미안합니다",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "没关系",
                    pronunciation: "méi guanxi",
                    meaning: "괜찮습니다",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          id: 27,
          title: "회화 알아보기",
          description: "따라 읽어 보세요.",
          template: {
            type: "TP07A",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "",
                    },
                    text: "따라 읽어 보세요.",
                  },
                ],
              },
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp07a_image.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h1>对不起。</h1><p>Duìbuqǐ.</p>",
                  },
                ],
              },
              {
                type: "audioRecord",
                data: [
                  {
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
    {
      id: 6,
      type: "study1",
      title: "문화",
      isCompleted: false,
      introduction: {
        title: "성조와 운모을 공부해봐요",
        description: "성조와 운모 학습 상세 사항",
      },
      cornerIcon: `${process.env.PUBLIC_URL}/images/icon/img_sort_page06.png`,
      pages: [
        {
          id: 10,
          title: "워밍업 퀴즈",
          description: "중국의 크기를 알고 있나요?",
          template: {
            type: "TP11F",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "https://i.picsum.photos/id/128/200/200.jpg?hmac=m4AGhj",
                    },
                    text: "<p>중국의 면적은 약 960만 km²로 매우 넓습니다.<br />한국의 면적은 약 100만 km²입니다.</p>",
                  },
                ],
              },
              {
                type: "chooseText",
                data: [
                  {
                    choices: ["그렇다", "아니다"],
                    answerIndex: 0,
                    tip: "",
                    explanation: {
                      correctMessage: "정답입니다!",
                      wrongMessage: "오답입니다!",
                      text: "<p>해설 문장이 블라블라~</p>",
                    },
                  },
                ],
              },
            ],
          },
        },

        {
          id: 12,
          title: "지난 레슨 확인하기",
          description: "녹음을 듣고 알맞은 발음을 고르세요.",
          template: {
            type: "TP03B",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "<p>성조는 음의 높낮이와 그 변화를 표시한 것으로, <br />중국어에는 네 개의 성조가 있습니다.</p>",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "o",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "e",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "i",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "u",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "u",
                    sub: "",
                    description: "",
                  },
                ],
              },
            ],
          },
        },

        {
          id: 14,
          title: "단어 익히기",
          description: "녹음을 듣고 알맞은 발음을 고르세요.",
          template: {
            type: "TP03B",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "운모는 음절에서 성모를 ...",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "경성",
                    sub: "",
                    description: "<p>ai ao an ang</p>",
                  },
                  {
                    main: "한어",
                    sub: "",
                    description: "<p>ou ong</p>",
                  },
                ],
              },
            ],
          },
        },

        {
          id: 16,
          title: "지난 레슨 확인하기",
          description: "녹음을 듣고 알맞은 발음을 고르세요.",
          template: {
            type: "TP01A",
            contents: [
              {
                type: "chooseTextByAudio",
                data: [
                  {
                    choices: ["he", "ge"],
                    answerIndex: 0,
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    choices: ["he", "ge"],
                    answerIndex: 1,
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                  {
                    choices: ["qi", "xi"],
                    answerIndex: 0,
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    choices: ["ji", "qi"],
                    answerIndex: 0,
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                  {
                    choices: ["ying", "wang"],
                    answerIndex: 1,
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                ],
              },
            ],
          },
        },

        {
          id: 18,
          title: "성조",
          description: "발음을 듣고 따라 읽어보세요.",
          template: {
            type: "TP03A",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "성조는 음의 높낮이와 그 변화를 표시한 것으로, 중국어에는 네 개의 성조가 있습니다.",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                    sub: "",
                    description: "<p>제 1성</p>",
                  },
                  {
                    main: "a",
                    sub: "",
                    description: "<p>제 2성</p>",
                  },
                  {
                    main: "a",
                    sub: "",
                    description: "<p>제 3성</p>",
                  },
                  {
                    main: "a",
                    sub: "",
                    description: "<p>제 4성</p>",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 19,
          title: "성조3",
          description: "발음을 듣고 따라 읽어보세요.3",
          template: {
            type: "TP03C",
            contents: [
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
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h4>설면음</h4><p>혀뿌리를 입천장 뒤쪽에 가까이 대고 발음합니다.</p>",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 20,
          title: "운모",
          description: "운모에 대해 알아봅시다",
          template: {
            type: "TP03D",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "운모는 음절에서 성모를 제외한 나머지 부분으로, 모두 36입니다.",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                    description: "ai ao an ang",
                  },
                  {
                    main: "o",
                    description: "ou ong",
                  },
                  {
                    main: "e",
                    description: "ei en eng er",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 21,
          title: "성모",
          description: "성모는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP04A",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image1.png`,
                  },
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image2.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h2>쌍순음</h2><p>윗입술과 아랫입술을 붙였다 떼면서 발음합니다.</p>",
                  },
                  {
                    text: "<h2>순치음</h2><p>윗니를 아랫입술에 살짝 댓다 떼면서 발음합니다.</p>",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 22,
          title: "성모",
          description: "성모 g, k는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP02C",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp02c_image.png`,
                  },
                ],
              },
            ],
          },
        },
        {
          id: 23,
          title: "중국어 경성, 한어병음 표기 규칙",
          description: "한어병음 표기 규칙에 대해 알아봅시다.",
          template: {
            type: "TP02M",
            contents: [
              {
                type: "textBoxes",
                data: [
                  {
                    main: "경성",
                  },
                  {
                    main: "한어병음 표기 규칙",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 24,
          title: "운모",
          description: "i, u, o와 결합한 운모를 알아봅시다..",
          template: {
            type: "TP05A",
            contents: [
              {
                type: "textBoxes",
                data: [
                  {
                    main: "i",
                    description:
                      "<p>ia ie iao iou ian in iang ing iong<br />(yi: ya ye yao you yan yin yang ying young)</p>",
                  },
                  {
                    main: "u",
                    description:
                      "<p>ua uo uai uei uan uen uang ueng<br />(wu: wa wo wai wei wan wen wang weng)</p>",
                  },
                  {
                    main: "u",
                    description: "ue uan un (yu: yue yuan yun)",
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    kind: "tip",
                    text: "ie, uei, ue의 e는 '으'와 '어'의 중간 소리가 아닌 '에'에 가깝게 발읍합니다. ian, uan의 a는 '아'가 아닌 '에'에 가깝게 발음합니다. ( )의 발음 표기는 성모 없이 운모만 쓸 때의 표기법입니다. 운모 iou, uei, uen 앞에 성모가 오면 가운데 운모는 생략합니다.",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 25,
          title: "회화 미리보기",
          description: "무슨 이야기를 하고 있을까요?",
          template: {
            type: "TP02F",
            contents: [
              {
                type: "video",
                data: [
                  {
                    src: "https://cdn.bubblecon.io/videos/45.mp4",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 26,
          title: "단어 익히기",
          description: "단어를 확인해 보세요.",
          template: {
            type: "TP02N",
            contents: [
              {
                type: "studyWords",
                data: [
                  {
                    text: "对不起",
                    pronunciation: "duibuqi",
                    meaning: "미안합니다",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "没关系",
                    pronunciation: "méi guanxi",
                    meaning: "괜찮습니다",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          id: 27,
          title: "회화 알아보기",
          description: "따라 읽어 보세요.",
          template: {
            type: "TP07A",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "",
                    },
                    text: "따라 읽어 보세요.",
                  },
                ],
              },
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp07a_image.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h1>对不起。</h1><p>Duìbuqǐ.</p>",
                  },
                ],
              },
              {
                type: "audioRecord",
                data: [
                  {
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
    {
      id: 7,
      type: "study1",
      title: "연습문제",
      isCompleted: false,
      introduction: {
        title: "성조와 운모을 공부해봐요",
        description: "성조와 운모 학습 상세 사항",
      },
      cornerIcon: `${process.env.PUBLIC_URL}/images/icon/img_sort_page07.png`,
      pages: [
        {
          id: 10,
          title: "워밍업 퀴즈",
          description: "중국의 크기를 알고 있나요?",
          template: {
            type: "TP11F",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "https://i.picsum.photos/id/128/200/200.jpg?hmac=m4AGhj",
                    },
                    text: "<p>중국의 면적은 약 960만 km²로 매우 넓습니다.<br />한국의 면적은 약 100만 km²입니다.</p>",
                  },
                ],
              },
              {
                type: "chooseText",
                data: [
                  {
                    choices: ["그렇다", "아니다"],
                    answerIndex: 0,
                    tip: "",
                    explanation: {
                      correctMessage: "정답입니다!",
                      wrongMessage: "오답입니다!",
                      text: "<p>해설 문장이 블라블라~</p>",
                    },
                  },
                ],
              },
            ],
          },
        },

        {
          id: 12,
          title: "지난 레슨 확인하기",
          description: "녹음을 듣고 알맞은 발음을 고르세요.",
          template: {
            type: "TP03B",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "<p>성조는 음의 높낮이와 그 변화를 표시한 것으로, <br />중국어에는 네 개의 성조가 있습니다.</p>",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "o",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "e",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "i",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "u",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "u",
                    sub: "",
                    description: "",
                  },
                ],
              },
            ],
          },
        },

        {
          id: 14,
          title: "단어 익히기",
          description: "녹음을 듣고 알맞은 발음을 고르세요.",
          template: {
            type: "TP03B",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "운모는 음절에서 성모를 ...",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "경성",
                    sub: "",
                    description: "<p>ai ao an ang</p>",
                  },
                  {
                    main: "한어",
                    sub: "",
                    description: "<p>ou ong</p>",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 16,
          title: "지난 레슨 확인하기",
          description: "녹음을 듣고 알맞은 발음을 고르세요.",
          template: {
            type: "TP01A",
            contents: [
              {
                type: "chooseTextByAudio",
                data: [
                  {
                    choices: ["he", "ge"],
                    answerIndex: 0,
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    choices: ["he", "ge"],
                    answerIndex: 1,
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                  {
                    choices: ["qi", "xi"],
                    answerIndex: 0,
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    choices: ["ji", "qi"],
                    answerIndex: 0,
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                  {
                    choices: ["ying", "wang"],
                    answerIndex: 1,
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          id: 18,
          title: "성조",
          description: "발음을 듣고 따라 읽어보세요.",
          template: {
            type: "TP03A",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "성조는 음의 높낮이와 그 변화를 표시한 것으로, 중국어에는 네 개의 성조가 있습니다.",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                    sub: "",
                    description: "<p>제 1성</p>",
                  },
                  {
                    main: "a",
                    sub: "",
                    description: "<p>제 2성</p>",
                  },
                  {
                    main: "a",
                    sub: "",
                    description: "<p>제 3성</p>",
                  },
                  {
                    main: "a",
                    sub: "",
                    description: "<p>제 4성</p>",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 19,
          title: "성조3",
          description: "발음을 듣고 따라 읽어보세요.3",
          template: {
            type: "TP03C",
            contents: [
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
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h4>설면음</h4><p>혀뿌리를 입천장 뒤쪽에 가까이 대고 발음합니다.</p>",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 20,
          title: "운모",
          description: "운모에 대해 알아봅시다",
          template: {
            type: "TP03D",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "운모는 음절에서 성모를 제외한 나머지 부분으로, 모두 36입니다.",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                    description: "ai ao an ang",
                  },
                  {
                    main: "o",
                    description: "ou ong",
                  },
                  {
                    main: "e",
                    description: "ei en eng er",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 21,
          title: "성모",
          description: "성모는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP04A",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image1.png`,
                  },
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image2.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h2>쌍순음</h2><p>윗입술과 아랫입술을 붙였다 떼면서 발음합니다.</p>",
                  },
                  {
                    text: "<h2>순치음</h2><p>윗니를 아랫입술에 살짝 댓다 떼면서 발음합니다.</p>",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 22,
          title: "성모",
          description: "성모 g, k는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP02C",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp02c_image.png`,
                  },
                ],
              },
            ],
          },
        },
        {
          id: 23,
          title: "중국어 경성, 한어병음 표기 규칙",
          description: "한어병음 표기 규칙에 대해 알아봅시다.",
          template: {
            type: "TP02M",
            contents: [
              {
                type: "textBoxes",
                data: [
                  {
                    main: "경성",
                  },
                  {
                    main: "한어병음 표기 규칙",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 24,
          title: "운모",
          description: "i, u, o와 결합한 운모를 알아봅시다..",
          template: {
            type: "TP05A",
            contents: [
              {
                type: "textBoxes",
                data: [
                  {
                    main: "i",
                    description:
                      "<p>ia ie iao iou ian in iang ing iong<br />(yi: ya ye yao you yan yin yang ying young)</p>",
                  },
                  {
                    main: "u",
                    description:
                      "<p>ua uo uai uei uan uen uang ueng<br />(wu: wa wo wai wei wan wen wang weng)</p>",
                  },
                  {
                    main: "u",
                    description: "ue uan un (yu: yue yuan yun)",
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    kind: "tip",
                    text: "ie, uei, ue의 e는 '으'와 '어'의 중간 소리가 아닌 '에'에 가깝게 발읍합니다. ian, uan의 a는 '아'가 아닌 '에'에 가깝게 발음합니다. ( )의 발음 표기는 성모 없이 운모만 쓸 때의 표기법입니다. 운모 iou, uei, uen 앞에 성모가 오면 가운데 운모는 생략합니다.",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 25,
          title: "회화 미리보기",
          description: "무슨 이야기를 하고 있을까요?",
          template: {
            type: "TP02F",
            contents: [
              {
                type: "video",
                data: [
                  {
                    src: "https://cdn.bubblecon.io/videos/45.mp4",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 26,
          title: "단어 익히기",
          description: "단어를 확인해 보세요.",
          template: {
            type: "TP02N",
            contents: [
              {
                type: "studyWords",
                data: [
                  {
                    text: "对不起",
                    pronunciation: "duibuqi",
                    meaning: "미안합니다",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "没关系",
                    pronunciation: "méi guanxi",
                    meaning: "괜찮습니다",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          id: 27,
          title: "회화 알아보기",
          description: "따라 읽어 보세요.",
          template: {
            type: "TP07A",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "",
                    },
                    text: "따라 읽어 보세요.",
                  },
                ],
              },
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp07a_image.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h1>对不起。</h1><p>Duìbuqǐ.</p>",
                  },
                ],
              },
              {
                type: "audioRecord",
                data: [
                  {
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
