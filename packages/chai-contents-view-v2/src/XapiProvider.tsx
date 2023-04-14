import {
  ADL,
  getCookie,
  InitialAppData,
  InitialInputAppData,
  xapiElement,
  XAPIOptions,
  xapiV1State,
} from "chai-ui-v2";
import React from "react";
import { useRecoilState } from "recoil";
import "../src/lib/xapi/lx-total-viewer.js";
interface XapiProviderProps {
  children: React.ReactNode;
}

type AgentObjectType = "Group" | "Agent";

type ActorResultGroup = {
  objectType: "Group";
  name?: string;
  member?: string;
  mbox?: string;
};

type ActorResultAgent = {
  objectType: "Agent";
  name?: string;
  mbox?: string;
  account?: ActorResultAgentAccount;
};

type ActorResultAgentAccount = {
  homePage: string;
  name?: string;
};

type ActorResult = ActorResultGroup | ActorResultAgent;

const createActorObject = function (obj: XAPIOptions) {
  let result = {} as ActorResult | undefined;

  function isGroup() {
    return obj.use_group;
  }

  function getObjectType(): AgentObjectType {
    return isGroup() ? "Group" : "Agent";
  }

  if (isGroup()) {
    result = {
      objectType: getObjectType(),
      name: obj.name,
      member: obj.member,
    };
    obj.email && result && (result.mbox = "mailto:" + obj.email);
  } else {
    const mailbox = obj.email
      ? {
          mbox: "mailto:" + obj.email,
          objectType: getObjectType(),
          name: obj.name,
        }
      : undefined;
    const homePage = obj.homePage
      ? {
          account: { homePage: obj.homePage, name: obj.account_name },
          name: obj.name,
          objectType: getObjectType(),
        }
      : undefined;
    result = mailbox || homePage;
  }

  return result;
};

const XapiProvider = ({ children }: XapiProviderProps) => {
  const [, setXapiV1State] = useRecoilState(xapiV1State);
  const learningLogCookieData = getCookie<InitialAppData>("bubble-player");

  const stringifiedValue =
    document.querySelector<HTMLInputElement>("#bubble-player")?.value;
  const initialDataFromPhp = stringifiedValue
    ? (JSON.parse(stringifiedValue) as InitialInputAppData)
    : null;

  //@ts-ignore
  const { ADL: _ADL } = window;
  const ADL = _ADL as ADL;

  const options = {
    // #1 actor 정의
    name: learningLogCookieData?.uname,
    homePage: `https://www.caihong.co.kr/account/user/${learningLogCookieData?.uid}`,
    account_name: `${learningLogCookieData?.uno}|${learningLogCookieData?.uid}|${learningLogCookieData?.uname}|${learningLogCookieData?.applId}`,
    // #2 objecjt 정의
    activity_id: `https://www.caihong.co.kr/course/${learningLogCookieData?.courseId}/lesson/${learningLogCookieData?.lessonId}`, // object.id 값
    content_name: learningLogCookieData?.lessonName, // 레슨 정보
    description: null, // 레슨 설명 정보
    // #3 activityState의 stateId 정의
    state_id: `https://www.caihong.co.kr/activity/profile/course/${learningLogCookieData?.courseId}/lesson/${learningLogCookieData?.lessonId}/appl-id/${learningLogCookieData?.applId}`,
    // #4 학습 정보 전송할 LRS url 기입
    // lrsUrl: "https://dev.caihong.co.kr/xAPI/",
    // lrsUrl: "http://clrs.bubblecon.co.kr/xAPI/",

    // #5 xAPI 추가 context 사용
    object_context: initialDataFromPhp?.object_context,
    // result_extensions: result_extensions,
    context_details: initialDataFromPhp?.context_details,
    extension_details: initialDataFromPhp?.extension_details,
  };

  const xapi_init = () => {
    if (!ADL.XAPIWrapper.lrs.actor) {
      const conf = {
        endpoint: `${process.env.REACT_APP_LRS_URL}`,
        auth: "Basic Og==",
        actor: JSON.stringify(createActorObject(options)),
      };
      ADL.XAPIWrapper.changeConfig(conf);
    }
    const v1 = ADL.bubbleAPI.getInstance();
    setXapiV1State(v1);

    if (options["object_context"]) {
      v1.addObjectContext(options["object_context"]);
    }

    if (options["context_details"]) {
      v1.addContextDetail(options["context_details"]);
    }

    if (options["extension_details"]) {
      v1.addExtensionDetail(options["extension_details"]);
    }

    if (
      !options["activity_id"] ||
      !options["content_name"] ||
      !options["state_id"]
    ) {
      console.error("xapi 관련 정보를 정상적으로 받지 않았습니다.");
    }

    v1.initialize(
      xapiElement,
      options["activity_id"] ?? "",
      options["content_name"]!,
      options["description"]!,
      options["state_id"] ?? "",
    );
  };

  document.addEventListener("playerLoaded", () => {
    if (learningLogCookieData && initialDataFromPhp) {
      xapi_init();
    }
  });

  //@ts-ignore
  window.xapi_init = xapi_init;

  return <>{children}</>;
};

export default XapiProvider;
