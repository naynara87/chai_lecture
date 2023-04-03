import { ADL, XAPIOptions } from "chai-ui-v2";
import React, { useEffect } from "react";
import "../src/lib/xapi/lx-total-viewer.js";
import {
  context_details,
  extension_details,
  object_context,
  result_extensions,
} from "./data/xapiData";

interface XapiProviderProps {
  children: React.ReactNode;
}

const options: XAPIOptions = {
  // #1 actor 정의
  name: "버블콘",
  homePage: "https://profile.caihong.co.kr/account/user/1",
  account_name: "123|bubblecon|버블콘|1679469317956_Card_EB01",
  // #2 objecjt 정의
  activity_id: "https://dev.caihong.co.kr/course/1/lesson/1/appl-id/asd123", // object.id 값
  content_name: "1레슨", // 레슨 정보
  description: "", // 레슨 설명 정보
  // #3 activityState의 stateId 정의
  state_id:
    "https://dev.caihong.co.kr/state/course/1/student/1/device/1/interaction/1/type/1",
  // #4 학습 정보 전송할 LRS url 기입
  lrsUrl: "https://dev.caihong.co.kr/xAPI/",

  // #5 xAPI 추가 context 사용
  object_context: object_context,
  result_extensions: result_extensions,
  context_details: context_details,
  extension_details: extension_details,
};

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
  //@ts-ignore
  const { ADL: _ADL } = window;
  const ADL = _ADL as ADL;

  useEffect(() => {
    if (!ADL.XAPIWrapper.lrs.actor) {
      const conf = {
        endpoint: options.lrsUrl,
        auth: "Basic Og==",
        actor: JSON.stringify(createActorObject(options)),
      };
      ADL.XAPIWrapper.changeConfig(conf);
    }
    const v1 = ADL.bubbleAPI.getInstance();
    console.log("XapiProvider", v1);
    // const nameEvent = new CustomEvent("name", {
    //   detail: {
    //     nameValue: "bubblecon",
    //   },
    // });
  }, [ADL]);

  return <>{children}</>;
};

export default XapiProvider;