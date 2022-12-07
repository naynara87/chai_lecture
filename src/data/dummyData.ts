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
      cornerIcon: `${process.env.REACT_APP_BASE_URL}/images/icon/img_sort_page01.png`,
      pages: [
        {
          id: 1,
          template: {
            type: "TPIframe",
            url: "http://md-admin.bubblecon.io/bubble/embed/9201",
          },
        },
        {
          id: 2,
          template: {
            type: "TPIframe",
            url: "http://md-admin.bubblecon.io/bubble/embed/9202",
          },
        },
        {
          id: 3,
          title: "문제 템플릿 3",
          description: "문제 템플릿 3 상세 사항.",
          template: {
            type: "TPIframe",
            url: "http://md-admin.bubblecon.io/bubble/embed/9199",
          },
        },
        {
          id: 14,
          template: {
            type: "TPIframe",
            url: "http://md-admin.bubblecon.io/bubble/embed/9200",
          },
        },
        {
          id: 15,
          title: "문제 템플릿 5",
          description: "문제 템플릿 5 상세 사항.",
          template: {
            type: "TPIframe",
            url: "http://md-admin.bubblecon.io/bubble/embed/9195",
          },
        },
        {
          id: 16,
          title: "문제 템플릿 6",
          description: "문제 템플릿 6 상세 사항.",
          template: {
            type: "TPIframe",
            url: "http://md-admin.bubblecon.io/bubble/embed/9196",
          },
        },
        {
          id: 17,
          template: {
            type: "TPIframe",
            url: "http://md-admin.bubblecon.io/bubble/embed/9197",
          },
        },
        {
          id: 18,
          template: {
            type: "TPIframe",
            url: "http://md-admin.bubblecon.io/bubble/embed/9198",
          },
        },
        {
          id: 19,
          template: {
            type: "TPIframe",
            url: "http://md-admin.bubblecon.io/bubble/embed/9193",
          },
        },
        {
          id: 20,
          template: {
            type: "TPIframe",
            url: "http://md-admin.bubblecon.io/bubble/embed/9194",
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
      cornerIcon: `${process.env.REACT_APP_BASE_URL}/images/icon/img_sort_page02.png`,
      pages: [
        {
          id: 7,
          title: "문장 1",
          description: "중국어를 확인해 보세요.",
          template: {
            type: "TP02B",
            contents: [
              {
                type: "textBoxes",
                data: [
                  {
                    main: "早上好!",
                    sub: "",
                    description: "Zǎoshang hǎo!",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 8,
          title: "문장",
          description: "잘 들어 보세요.",
          template: {
            type: "TP08A",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/4idBoYNNSffqeZGcT4SVVJ45fSsQZwse/Z9OB8U11bXMyKJNgS6aXX7MuLjFGmmZp/b048ddda487db85957d75c8950fe846043eb078617849e7a64e8c0c7c50cbd1a.png",
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h1>我会游泳。</h4>",
                  },
                  {
                    text: "<p class='c4'>Wǒ  huì  yóuyǒng.</>",
                  },
                  {
                    text: "<p>나는  수영할 줄 압니다.</p>",
                  },
                ],
              },
              {
                type: "sentenceWord",
                data: [
                  {
                    text: "游泳",
                    pronunciation: "yóuyǒng",
                    meaning: "수영하다",
                    audio: {
                      src: "string",
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          id: 9,
          title: "연습하기",
          description: "그림에 알맞은 문장을 고르세요.",
          template: {
            type: "TP24B",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/2yyeAYkL0jhY88VdL4ZdeuEHw0ONonoO/EjHgL5aEM2UxhAFU16FqbusDQxe9o21F/acea8296395fa4939e048abe1050fae970112d478953d328cb572ee809c664bb.png",
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
                          src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/isjUHk3kOW4EFJROU4x52U80ujYctx0H/xWAT4omlJeb4dOOswpmbNQRuAo7BahIZ/c1a6dfdaf0dd29d1544fd0ce2221aff95c55cbee1eb51a9cf4152e2cbbebfa29.mp3",
                        },
                      },
                      {
                        text: "我会弹钢琴",
                        audio: {
                          src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/1MMuliy9pHcWOaVzQvzFgnPP454d7rF3/4e1Ueeavn37uWuasV1qIOFHmQP2jM1ZA/e0b357d6a804aba224557fde3328a14580448f4922dc38689e2d13ffa719f829.mp3",
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
              {
                type: "audio",
                data: [
                  {
                    src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/kkTEGzOQEuU0Juz7Ab1kshJQ4FJGLu2P/UCATlnqnbgmH7vBfPTfaKgiJ92K9cO4p/e8cf3bf78fde5083c8f9379cea0be59df8b57facc5a441127fde59cefdf54728.mp3",
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
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/3sreCyS0694Tss2vVmY9vGvx5mHBKYyt/7sH4zE1pcn3eyITQXVD8sXcgHIdTfLaY/a5e6a13523f1af57d14d98e8aaeb57478f1fee9f4232c2d67cc16f4cfe4ac92d.mp3",
                    },
                  },
                  {
                    choices: ["he", "ge"],
                    answerIndex: 1,
                    audio: {
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/r9EWyVf5jmcdjbAhV8IPaiCZwoGTfDAI/l0OJxRs3akoQ5nehVa8lUv4C2PfTqDNO/290d5bd18fe14ef70159d52539d69186353a73dc33755a64047353a84dc5bd1a.mp3",
                    },
                  },
                  {
                    choices: ["qi", "xi"],
                    answerIndex: 0,
                    audio: {
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/3eQuw64X34xnuKh6Ogj8RGnjxn0pHtqf/0Ci9CIv0fXgqGVeO4ZDgaN2oErnPrqTv/2c4fd5548ef3862f2097c8b0ec4cc0e70c558737c065b42c986ad8fa80ca02a0.mp3",
                    },
                  },
                  {
                    choices: ["ji", "qi"],
                    answerIndex: 0,
                    audio: {
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/ylS3p7w66zdMqIm4JqU2i06ZJ2sv7Ekc/iUwCog4IvWjU2Sz49KlBapifSJo4Wj06/dff0b6960799f0e732dc6cfbb0eb48ac5d77c9ed83efb8341d6a754869c5c377.mp3",
                    },
                  },
                  {
                    choices: ["ying", "wang"],
                    answerIndex: 1,
                    audio: {
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/2fFmbd2KgnXtOLCN0CqhGn9t1ZrPxpoF/7wxd4Trj9mAbcY0jmXh3wM9zlVBp7yVm/ec488453376b3a206c64bcd2a021bddd9b04d85115174099c5d343c48454a39b.mp3",
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
                    src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/dBWLKji9hkizqoozbI6UzwDFemlHEWZY/UBXiRt5GICh5fXzIdbWZBDb6Ecln11eF/4b7f3d22b12bf23730b0300f4af6a4b260ce139ab2dd2b1355b88894c8dfee68.mp3",
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
                    src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/PUu5PpqYdhgwHqODDCtkVsWJJMSG17d4/m8q96O6J4lEkOVSb82leKMnvAIjgYAQz/a2bc1a396f1afe45eac13d931f40ccf5b77e028dd61112d8762fd0543bc94366.mp3",
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
                    src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/3z3Xmrhto9jMCQOdIOUiXr1w3H0zcUif/igH3JVZcFyynHcYStx39380LYzay2Si1/0a9dec44bd52019c230f5c82dc9e5065354ea3d906c050f279a5db44cf559ba3.mp3",
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
                    src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/ZTWmcPF3U9OfJkzEZOKqL3oiC1q8UD3d/Lw2eSYrnmR66VbH9s37hU6yS3vMMoTwQ/26319ab94e426195783a2b473e0b24a61ec757862f43b63ab95f3fd88465d879.png",
                  },
                  {
                    src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/14wFhywTNntIdUuX99VSj0KDHoH2mvMS/IhoIopOZ83J1FFs7MaGEPPzSFiRvocbq/3bbc048bb93ce8a7d318a5f20cc84a11bb414ddf6a256bdd636fc8fc1511cb2f.png",
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
                    src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/6G32fpSEB8Zjj4M7Jj7D9HNw32bu52gt/PnkWCCj5zyRt6HZc5pHUi91LHsyZYoK0/d9a5f2dc70788bcf0c9b873c03bb7f2c1777d00ce00996bacecfb213f2fd4e56.mp3",
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
                    src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/WNl0P1iCYOYT5LgcqC1nItUfiGLxMXng/BQiBzgFidrMbhB9PhocDFkjxZDXPkbXU/4d7e1b934d6cd365eb10deb5c49c53e8faae44e1d30d1e8ad4cfc5d3861d6fde.png",
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
                    src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/Z0THYmwEtAzmFlvBjbF4fN2dCnGGaxPZ/FHb33f8T/A01_video_gm.01.m3u8",
                    tracks: [
                      {
                        kind: "captions",
                        src: `${process.env.REACT_APP_BASE_URL}/assets/track/sample.vtt`,
                        srclang: "en",
                        default: true,
                      },
                      {
                        kind: "captions",
                        src: `${process.env.REACT_APP_BASE_URL}/assets/track/sample_korean.vtt`,
                        srclang: "ko",
                        default: true,
                      },
                    ],
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
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/xyejv1AedcLRxcrzw6N6otWk6z40ycLN/8eQ6vNKIImMhGo5XUVLdQQb3IspUs1NE/e5b7d47f236979385c75594e775a74a9f34fc6204286144dc9c219e3eb4d978a.mp3",
                    },
                  },
                  {
                    text: "没关系",
                    pronunciation: "méi guanxi",
                    meaning: "괜찮습니다",
                    audio: {
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/XoOlepb8X92LaDjLkNWsb0ZcVP3VaSIM/hqR2aPuoccnGnfRBu0nTCKlzrvhb7fac/1fc69a726991534c419cd3e9663b6762642c5432af38a044a79565ebf8b1c304.mp3",
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
                    src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/oLP5T8qnpYoZfwJEv3AVklyGUcWgnJXV/mOUcxyDK4Yh54jncnyRhbMVNkSXWLgNJ/0f96755f1f5b3073c4e2cb9140b3f0a070eedabb8b21084388c8e9992f23258b.png",
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
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/J3OF1Nzu2sf6ALcb2pU2i87qKfUPIwWy/0cCCfdYOxGW6B8a45QWMjIzDrEXhwicI/c3632bc4f22cf1bd999a9e5bcd42ae99b204c52d10cc089017eecf08038b7566.mp3",
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
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/nbMhNnIRaNHptUYKAerxPLMTrpeXXdZ7/ytyVrEdbSr8BjZdb2eB5S5FEbADPXQRw/b7d0942b1acf8401175a0e84be8d675975251b71181209b86618e57fd9b194ca.mp3",
                    },
                  },
                  {
                    text: "二",
                    pronunciation: "er",
                    meaning: "2",
                    audio: {
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/NLY1D7GuwsdRjMXoIAhAOOsi8WyNFFV1/ZlKEx6vQbXyDL945wVUBk6ltjSwz1ITc/912dd1502d579d3936f729383f1a3e133abcb1c496cd125d30ffad674011babe.mp3",
                    },
                  },
                  {
                    text: "三",
                    pronunciation: "san",
                    meaning: "3",
                    audio: {
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/x5wUenRFGJ7KEVoXJGz4WcVsoCiVwgxC/2MrhV1Ut9SyJH4UbpA1CiIaWHutqMoCM/17d5f458c0c70793b71781870e8b9a163cb8b8be3869f696776d62d21fee2fb4.mp3",
                    },
                  },
                  {
                    text: "四",
                    pronunciation: "si",
                    meaning: "4",
                    audio: {
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/GL8wT5qy4wHns08W0hrpOUiZJlDiZFa3/tkD7YLCzFWsbZP4QUbecnGYwmRTq37yH/a03709251611c20309168ae5356fa5e905292ce513b7912d84c428f28b1f0e63.mp3",
                    },
                  },
                  {
                    text: "五",
                    pronunciation: "wu",
                    meaning: "5",
                    audio: {
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/8Flv46CelpCRH9DJxMmlBKvimKaDdkBq/hYhcQjjW5tTV3vYaurBDwesvWDqLpNAq/a6b69e15172edf0cdcc60d0b1def9105d1b098cfa52cf42ec741f7b4631cb6f9.mp3",
                    },
                  },
                  {
                    text: "六",
                    pronunciation: "liu",
                    meaning: "6",
                    audio: {
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/AS3V6viMTnNrZzT6xK2a2sGVCyiL9e8u/EPD7One9NhmDwmikdSKJofNxhWwgNfQR/48a0e89f1755b736c34a0fc6490384bca7be847cf8268f3126d7ecad72cc64dc.mp3",
                    },
                  },
                  {
                    text: "七",
                    pronunciation: "qi",
                    meaning: "7",
                    audio: {
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/fiH8H7PaueeJCVQZJwt8obWHgU7HLc78/gZKyAoo4IbsoMtqY67SSgeTYj7zt7z4K/2abb4a7e9bb1f2207ca1aaab159c4e563af30a1085c5d6cf22a4c5c09825e1b2.mp3",
                    },
                  },
                  {
                    text: "八",
                    pronunciation: "ba",
                    meaning: "8",
                    audio: {
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/NPQxcEzoQlZKQb4rcc1PTcEQhjy3i0sJ/7Ki6zIq1W3jZpDjKI9h4yJoLJYYULTnd/acb60e84ba5709376edf3419cffd404895bca0e322277dceee7d429d352c3230.mp3",
                    },
                  },
                  {
                    text: "九",
                    pronunciation: "jiu",
                    meaning: "9",
                    audio: {
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/mfjPXpd7x1HR66ZKd5U5599jPmXAP83U/JL8I6suflAX9tStwfK65n9tXB6TBZ0uP/ebb6f17383247125494f51d1644fb83d5d4f199a9a4e40d68555b345ef324f2b.mp3",
                    },
                  },
                  {
                    text: "十",
                    pronunciation: "shi",
                    meaning: "10",
                    audio: {
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/F2obPNl4wHC5m7L6TtgR5aQTRGQdZjBS/T6hwZu1CJaWKsNzqGdB80iX35PCwgYIK/7f68c3c9eb2c80b69fff90174fe000c2659ef75a707e1b5c3d378ddd5352c73d.mp3",
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
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/ohbQHamQKzjMq4qPTH8YIlXuMrdvkSC3/rG47JwlUo4TVBxqGIiG7zwr5MSSvFNQY/ef3cbc2a8a6484db59b39f50a84b9238e1305dd47da4ae9474137f0e5629cd4a.png",
                    },
                    text: "<p>点点十分。</p>",
                    pronunciation: "<p>Méi xiǎngdào zài lùshang yùjiàn nǐ.</p>",
                    meaning: "<p>2시 10분.</p>",
                    hasQuestion: false,
                    audio: {
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/tRyassMxyA6IXskxdjGmcjcskeBtWDtO/tQdw8EzDPJJH8GdmwDsjTwrvmj998qnN/91fd287b33b76bb6da85d217f33f24283faf73b7825b117da59b4cbfdb7f611b.mp3",
                    },
                  },
                  {
                    id: "a",
                    icon: {
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/ohbQHamQKzjMq4qPTH8YIlXuMrdvkSC3/rG47JwlUo4TVBxqGIiG7zwr5MSSvFNQY/ef3cbc2a8a6484db59b39f50a84b9238e1305dd47da4ae9474137f0e5629cd4a.png",
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
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/eZTSEsc5jJxrt5eiV75hen8aoJuvNZRt/LcR3pI1dfJ2SJhyLvWsA2rPCKRwuPfY5/25d064dd6004a352e6ddcaaaae8a876008d16c6d11df1bda0a66e9e08c5aaaaf.mp3",
                    },
                  },
                  {
                    id: "b",
                    icon: {
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/FQmzZSlquy1VC9Y99Pu6kYNXfWEKqQMX/UTwWm5CwvqF1uGsvW3y57Q2ilKp5aGjw/60f7e6b7d23fc9dffdd1e85314d9fd96dcbb5a747bbcad7cf33f36a7ba21a25f.png",
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
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/eZTSEsc5jJxrt5eiV75hen8aoJuvNZRt/LcR3pI1dfJ2SJhyLvWsA2rPCKRwuPfY5/25d064dd6004a352e6ddcaaaae8a876008d16c6d11df1bda0a66e9e08c5aaaaf.mp3",
                    },
                  },
                  {
                    id: "b",
                    icon: {
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/FQmzZSlquy1VC9Y99Pu6kYNXfWEKqQMX/UTwWm5CwvqF1uGsvW3y57Q2ilKp5aGjw/60f7e6b7d23fc9dffdd1e85314d9fd96dcbb5a747bbcad7cf33f36a7ba21a25f.png",
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
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/nFGncFwDwnRrEFzpjr4MiVSmd25VsgCt/Jb2fECB2QhtKCw671BE61fjHRlbMzQl0/91aad8c55b09ad4134318894c8ad802f532d9fdc206454b20cb8d2fb0dabfd93.png",
                    },
                  },
                  {
                    id: "a",
                    icon: {
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/ohbQHamQKzjMq4qPTH8YIlXuMrdvkSC3/rG47JwlUo4TVBxqGIiG7zwr5MSSvFNQY/ef3cbc2a8a6484db59b39f50a84b9238e1305dd47da4ae9474137f0e5629cd4a.png",
                    },
                    text: "<p>四点回家。</p>",
                    pronunciation: "<p>Méi xiǎngdào zài lùshang yùjiàn nǐ.</p>",
                    meaning: "<p>오후 4시에 돌아가.</p>",
                    hasQuestion: false,
                    audio: {
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/DbaWYblk9dE2PKag3t9EpH3b56TcXkKU/1dYjyjjFpWkS4230TARI5kVkvSzMRpQD/68650ca72a8f5acf89c877300d15a97d7b57772c10707050f05f490576043a92.mp3",
                    },
                  },
                  {
                    id: "b",
                    icon: {
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/FQmzZSlquy1VC9Y99Pu6kYNXfWEKqQMX/UTwWm5CwvqF1uGsvW3y57Q2ilKp5aGjw/60f7e6b7d23fc9dffdd1e85314d9fd96dcbb5a747bbcad7cf33f36a7ba21a25f.png",
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
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/nFGncFwDwnRrEFzpjr4MiVSmd25VsgCt/Jb2fECB2QhtKCw671BE61fjHRlbMzQl0/91aad8c55b09ad4134318894c8ad802f532d9fdc206454b20cb8d2fb0dabfd93.png",
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
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/ohbQHamQKzjMq4qPTH8YIlXuMrdvkSC3/rG47JwlUo4TVBxqGIiG7zwr5MSSvFNQY/ef3cbc2a8a6484db59b39f50a84b9238e1305dd47da4ae9474137f0e5629cd4a.png",
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
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/FQmzZSlquy1VC9Y99Pu6kYNXfWEKqQMX/UTwWm5CwvqF1uGsvW3y57Q2ilKp5aGjw/60f7e6b7d23fc9dffdd1e85314d9fd96dcbb5a747bbcad7cf33f36a7ba21a25f.png",
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
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/ohbQHamQKzjMq4qPTH8YIlXuMrdvkSC3/rG47JwlUo4TVBxqGIiG7zwr5MSSvFNQY/ef3cbc2a8a6484db59b39f50a84b9238e1305dd47da4ae9474137f0e5629cd4a.png",
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
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/FQmzZSlquy1VC9Y99Pu6kYNXfWEKqQMX/UTwWm5CwvqF1uGsvW3y57Q2ilKp5aGjw/60f7e6b7d23fc9dffdd1e85314d9fd96dcbb5a747bbcad7cf33f36a7ba21a25f.png",
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
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/Caz3M4TmaEdt5s0sHWFvLwp4YWhXYMwG/Kg6oSHwgWChv6GbegBd1DMZm7NYRzzya/088252d8f1d5b51f7635bdb4a6374d8396b603f68d045fdf48e18ea61938c078.mp3",
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
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/ygrYGfAu6peCO9rbA0zFUfdMf2avMJHP/DMbclRDLjDvnAyvpHW1l17IKxYklYprs/2351b48fe2bd40590dd2ce008f26cbfcd3057d61aa60696d8bb990a4a138b1c1.mp3",
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
                    src: `${process.env.REACT_APP_BASE_URL}/images/icon/tp02c_image.png`,
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
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/ygrYGfAu6peCO9rbA0zFUfdMf2avMJHP/DMbclRDLjDvnAyvpHW1l17IKxYklYprs/2351b48fe2bd40590dd2ce008f26cbfcd3057d61aa60696d8bb990a4a138b1c1.mp3",
                    },
                    explanation: {
                      audio: {
                        src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/ygrYGfAu6peCO9rbA0zFUfdMf2avMJHP/DMbclRDLjDvnAyvpHW1l17IKxYklYprs/2351b48fe2bd40590dd2ce008f26cbfcd3057d61aa60696d8bb990a4a138b1c1.mp3",
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
                            src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/isXTjVCtPQ1BWWwiJzapJr4iZqqWIP7n/960zqS7kFWzXePVAmtK3n39VE6kHDChR/e21539f26c9b21cf98bef94dcb522e31f6af3f734521347ad2c1f150fb84d135.png",
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
                          src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/pctQIAwgI81WNzfdXR01T6UnZ3Z3NtH7/SqY37X8DR3xRSEoZf9RTPHGlx2NCnwaQ/771de1ad275303141434199c6603d01b6acf224bc951ec61b5dbfdefd7c8bef0.mp3",
                        },
                        words: [
                          {
                            text: "光棍节",
                            pronunciation: "yóuyǒng",
                            meaning: "싱글의 날",
                            audio: {
                              src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/pctQIAwgI81WNzfdXR01T6UnZ3Z3NtH7/SqY37X8DR3xRSEoZf9RTPHGlx2NCnwaQ/771de1ad275303141434199c6603d01b6acf224bc951ec61b5dbfdefd7c8bef0.mp3",
                            },
                          },
                          {
                            text: "所以",
                            pronunciation: "Suǒyǐ",
                            meaning: "그래서",
                            audio: {
                              src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/Nxsgh5IsAMKpLrjHBL0jKCuuLXJFFrB3/KEcpIakjSn3ojm5X5ugEdkqKVgbQidXY/8407d1c103f012ba4436a165f3efdbdc892051f28a3848dd526c9e70aa8a7d81.mp3",
                            },
                          },
                          {
                            text: "光棍节",
                            pronunciation: "yóuyǒng",
                            meaning: "싱글의 날",
                            audio: {
                              src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/tWTWuRi057fe0iW1OxxalnoIfCnavxYj/9lN9rLg6oTpj0Lvfm00ZNUvrXJEgRQbW/5819a438450e9341948d21ee9d9626e6e564125000ccdedb8855f2138aea5323.mp3",
                            },
                          },
                          {
                            text: "所以",
                            pronunciation: "Suǒyǐ",
                            meaning: "그래서",
                            audio: {
                              src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/PwFKvqscEPTrcafoeiyHNqrFbGRSiAnZ/OnWLLCAVqpShvM72FZUjGXvCzFpGtXqJ/40bf99c31990ab829f7441c7a83d3c5b2dddb84c9b95eb5a39647c6e56aa528c.mp3",
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
                          src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/PwFKvqscEPTrcafoeiyHNqrFbGRSiAnZ/OnWLLCAVqpShvM72FZUjGXvCzFpGtXqJ/40bf99c31990ab829f7441c7a83d3c5b2dddb84c9b95eb5a39647c6e56aa528c.mp3",
                        },
                        words: [
                          {
                            text: "光棍节",
                            pronunciation: "yóuyǒng",
                            meaning: "가나다라",
                            audio: {
                              src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/iF384jNDYhhriF678E7grL5GdU4IbDv0/4FHSYEP5psNtDEVPj1dmrV6mjuQ5XMSp/bd046f762c1cee1b6f111c4b765c389ef450b9ee62b774a03e18e44dc694e18e.mp3",
                            },
                          },
                          {
                            text: "所以",
                            pronunciation: "Suǒyǐ",
                            meaning: "마바사",
                            audio: {
                              src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/m3drw0cJhCybuu0PEQ0XkiHbjcRDjtyR/ft9tmLyaeflHf1GyBlGs2LxLu5w2yJPm/e270c850b0fe0526954e2120890c62e7299b392e089215a0a65856e297515d1d.mp3",
                            },
                          },
                          {
                            text: "所以",
                            pronunciation: "Suǒyǐ",
                            meaning: "아자차",
                            audio: {
                              src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/mC2CCFJg0M4j5TIq0X5AvhyrAOm8PWHQ/mJwaYxgXnNK39cS88daoGinv1YztvWW9/c76bd53f2b71de907a5cef18e98afda36f8a6d431079f7ea403f2e3736faa689.mp3",
                            },
                          },
                        ],
                      },
                    ],
                    image: {
                      src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/aOCfghMJcwStXxMieN2J1BfW1Pl2K8nN/SJgE6XCScV7FzOtacJcxKjS9zoiXzf7N/2c5b8c35274864da6c13bb88ec87d7ba19c322a8324825295fe5b5793a69cdac.png",
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
                              src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/3kZrtRimhkoqmmBEWI0nuTSEOt4Y0hzW/i6vn7Ims/A04_video_gm.01.m3u8",
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
                              src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/uz2WAt3ox2DJNEIm5l6iOUQgAhQLYTub/i9vUup0CHXyWnMmljutJjcQKxJW0ZJjQ/50a67c4ef33d9a478de57805cd4cf42687fb1d4f5120f21b2470599172ae1a57.png",
                            },
                          ],
                        },
                        {
                          type: "html",
                          data: [
                            {
                              text: "<h2>ma</h2>",
                            },
                            {
                              text: "<p>엄마</p>",
                            },
                            {
                               kind: "tip",
                              text: "<p>성모와 운모가 같더라도 성조가 다르면 뜻이 달라져요.</p>",
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
                              src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/WJLv0EWXP6P2Vbk6lH2y7lXdAhMEM8T3/mURLhzKrNjJ803Y84F1th0x3b8kfrKFl/0d9b2bc5f0159539fd4a15c9210209dc31ba138da29c311977da8dec1d609700.png",
                            },
                          ],
                        },
                        {
                          type: "audio",
                          data: [
                            {
                              src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/u4H9c8KFa1JnkJo0csZDCYoQgnPNatbu/585UQYvbcKsOEVL65yGjkb0bAbCYYy8y/b557e8abdc3f223e8b2787d2a4f8579e60fe4750065796cfe676b3aae47182dc.mp3",
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
                                src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/gRx0PGEHQE9DtY6PqS5kQpbqWkZSxaPQ/KROd1C7MfzFijByNmPGM6oMzCzvEAerG/d2f2b806be788b4e3e0ad316fd9efc72f23412ee0cb124e215a4a6d67a69dd0f.mp3",
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
                              src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/WJLv0EWXP6P2Vbk6lH2y7lXdAhMEM8T3/mURLhzKrNjJ803Y84F1th0x3b8kfrKFl/0d9b2bc5f0159539fd4a15c9210209dc31ba138da29c311977da8dec1d609700.png",
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
                              src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/TVQ5JtcfiX971pQRkuhDzvq4PESKETJR/uHDKVEJq8TglWasDDPKPssepfWahowW6/8eb039e8d754bbcb960b13df716e0c55270291fcd3ffdf1778db680885af280f.png",
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
                              src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/3KSrl7OvG7v5oKilGRf0jkt9jT4ohs5E/m9rAiu0wUtxv6y3MrYo3F8evxVqAaXAB/e8dc9ad3b3e5d459036d5eab30a6b36d9ca2211919b3eccde9ddba4ff7f99975.mp3",
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
                              src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/lP2NIf1O5d59Ea4cjdT13VQfwu920xgG/2i5f0vpnFAIMlluPyIcgGm0fPYf9n3CR/04a538348f36465f708fc456b6e2df2c5f71fb727cf190d689c975bad36e0577.png",
                            },
                          ],
                        },
                        {
                          type: "video",
                          data: [
                            {
                              src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/4R5Sc3o3RkEfrc2KSdhOqUlQYRVzWnmP/oMvJsumz/A04_video_gm.02.m3u8",
                            },
                          ],
                        },
                        {
                          type: "audioRecord",
                          data: [
                            {
                              audio: {
                                src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/7z3sM9qoQ7gDQYktKIVy1tI080Uvbsp3/mEjxvt2GFKXVSHyDoHGI0VSwNVrhWLyV/de3217c39b8c0f559a24b3831f7ca0a2351ec920bc3fc8df4d19bfc38deda4f2.mp3",
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
                              src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/VHnOJ37aHeiwCgxCODCQrtVVumXwGP0E/HqWiCBTnyD6e8N9XafrdBJXFrbe2BIKl/ae2c245d8cc7604d6f91047e5accd5aea7122065f8db50631aa97c8f6fc15038.png",
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
                              src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/88DuRN2i9loJ4ovP5FhRdX3dHAKJXvcH/j3avubblNQ3p1dmZfVsWhS0THAyzjL0m/125685bd815fc2931cb10d81a0bc755ccb2903f8a50887555dbdd1418cdbef5f.png",
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
      cornerIcon: `${process.env.REACT_APP_BASE_URL}/images/icon/img_sort_page03.png`,
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
      cornerIcon: `${process.env.REACT_APP_BASE_URL}/images/icon/img_sort_page04.png`,
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
      cornerIcon: `${process.env.REACT_APP_BASE_URL}/images/icon/img_sort_page05.png`,
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
      cornerIcon: `${process.env.REACT_APP_BASE_URL}/images/icon/img_sort_page06.png`,
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
      cornerIcon: `${process.env.REACT_APP_BASE_URL}/images/icon/img_sort_page07.png`,
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
      ],
    },
  ],
};
