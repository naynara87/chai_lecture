import didiAngry from "../../images/img/cha_didi_angry.png";
import didiGlasses from "../../images/img/cha_didi_glasses.png";
import didiHeart from "../../images/img/cha_didi_heart.png";
import didiSad from "../../images/img/cha_didi_sad.png";
import didiSmile from "../../images/img/cha_didi_smile.png";
import didiSurprise from "../../images/img/cha_didi_surprise.png";
import didiWink from "../../images/img/cha_didi_wink.png";
import didiWinking from "../../images/img/cha_didi_winking.png";
import kkungiHeart from "../../images/img/cha_kkungi_heart.png";
import kkungiLaugh from "../../images/img/cha_kkungi_laugh.png";
import kkungiPositive from "../../images/img/cha_kkungi_positive.png";
import kkungiSmile from "../../images/img/cha_kkungi_smile.png";
import kkungiWink from "../../images/img/cha_kkungi_wink.png";
import winiProud from "../../images/img/cha_wini_proud.png";
import winiSad from "../../images/img/cha_wini_sad.png";
import winiShock from "../../images/img/cha_wini_shock.png";
import winiSmile from "../../images/img/cha_wini_smile.png";
import winiSurprise from "../../images/img/cha_wini_surprise.png";
import winiWink from "../../images/img/cha_wini_wink.png";
import { characterType } from "../types";

const useCharacterMapper = () => {
  const characterMapper: Record<characterType, string> = {
    didiAngry,
    didiGlasses,
    didiHeart,
    didiSad,
    didiSmile,
    didiSurprise,
    didiWink,
    didiWinking,
    kkungiHeart,
    kkungiLaugh,
    kkungiPositive,
    kkungiSmile,
    kkungiWink,
    winiProud,
    winiSad,
    winiShock,
    winiSmile,
    winiSurprise,
    winiWink,
  };

  const getCharacterSrc = (characterName: characterType) => {
    return characterMapper[characterName];
  };

  return {
    getCharacterSrc,
  };
};

export default useCharacterMapper;
