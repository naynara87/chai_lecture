import didiAngry from "../../assets/images/img/cha_didi_angry.png";
import didiGlasses from "../../assets/images/img/cha_didi_glasses.png";
import didiHeart from "../../assets/images/img/cha_didi_heart.png";
import didiSad from "../../assets/images/img/cha_didi_sad.png";
import didiSmile from "../../assets/images/img/cha_didi_smile.png";
import didiSurprise from "../../assets/images/img/cha_didi_surprise.png";
import didiWink from "../../assets/images/img/cha_didi_wink.png";
import didiWinking from "../../assets/images/img/cha_didi_winking.png";
import kkungiHeart from "../../assets/images/img/cha_kkungi_heart.png";
import kkungiLaugh from "../../assets/images/img/cha_kkungi_laugh.png";
import kkungiPositive from "../../assets/images/img/cha_kkungi_positive.png";
import kkungiSmile from "../../assets/images/img/cha_kkungi_smile.png";
import kkungiWink from "../../assets/images/img/cha_kkungi_wink.png";
import winiProud from "../../assets/images/img/cha_wini_proud.png";
import winiSad from "../../assets/images/img/cha_wini_sad.png";
import winiShock from "../../assets/images/img/cha_wini_shock.png";
import winiSmile from "../../assets/images/img/cha_wini_smile.png";
import winiSurprise from "../../assets/images/img/cha_wini_surprise.png";
import winiWink from "../../assets/images/img/cha_wini_wink.png";
import kkungiHeader from "../../assets/images/img/cha_kkungi_header.gif";
import allFinish from "../../assets/images/img/cha_all_finish.gif";
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
    kkungiHeader,
    winiProud,
    winiSad,
    winiShock,
    winiSmile,
    winiSurprise,
    winiWink,
    allFinish,
  };

  const getCharacterSrc = (characterName: characterType) => {
    return characterMapper[characterName];
  };

  return {
    getCharacterSrc,
  };
};

export default useCharacterMapper;
