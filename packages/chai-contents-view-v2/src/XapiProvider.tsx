import { ADL, xapiElement, XAPIOptions, xapiV1State } from "chai-ui-v2";
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

  //@ts-ignore
  const { ADL: _ADL } = window;
  const ADL = _ADL as ADL;

  const xapi_init = (options: XAPIOptions) => {
    if (!ADL.XAPIWrapper.lrs.actor) {
      const conf = {
        endpoint: options.lrsUrl,
        auth: "Basic Og==",
        actor: JSON.stringify(createActorObject(options)),
      };
      ADL.XAPIWrapper.changeConfig(conf);
    }
    const v1 = ADL.bubbleAPI.getInstance();
    setXapiV1State(v1);
    console.log("XapiProvider", v1);

    if (options["object_context"]) {
      v1.addObjectContext(options["object_context"]);
    }

    if (options["context_details"]) {
      v1.addContextDetail(options["context_details"]);
    }

    if (options["extension_details"]) {
      v1.addExtensionDetail(options["extension_details"]);
    }

    if (options["result_extensions"]) {
      v1.addResultExtension(options["result_extensions"]);
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
      options["content_name"] ?? "",
      options["description"] ?? "",
      options["state_id"] ?? "",
    );
  };

  //@ts-ignore
  window.xapi_init = xapi_init;

  return <>{children}</>;
};

export default XapiProvider;
