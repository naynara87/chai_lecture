import didiAngry from "../../assets/images/img/cha_didi_angry.svg";
import didiGlasses from "../../assets/images/img/cha_didi_glasses.svg";
import didiHeart from "../../assets/images/img/cha_didi_heart.svg";
import didiSad from "../../assets/images/img/cha_didi_sad.svg";
import didiSmile from "../../assets/images/img/cha_didi_smile.svg";
import didiSurprise from "../../assets/images/img/cha_didi_surprise.svg";
import didiWink from "../../assets/images/img/cha_didi_wink.svg";
import didiWinking from "../../assets/images/img/cha_didi_winking.svg";
import kkungiHandsup from "../../assets/images/img/cha_kkungi_handsup.svg";
import kkungiHeart from "../../assets/images/img/cha_kkungi_heart.svg";
import kkungiLaugh from "../../assets/images/img/cha_kkungi_laugh.svg";
import kkungiPositive from "../../assets/images/img/cha_kkungi_positive.svg";
import kkungiSmile from "../../assets/images/img/cha_kkungi_smile.svg";
import kkungiWink from "../../assets/images/img/cha_kkungi_wink.svg";
// import kkungiHeader from "../../assets/images/img/cha_kkungi_header.gif";
import winiProud from "../../assets/images/img/cha_wini_proud.svg";
import winiSad from "../../assets/images/img/cha_wini_sad.svg";
import winiShock from "../../assets/images/img/cha_wini_shock.svg";
import winiSmile from "../../assets/images/img/cha_wini_smile.svg";
import winiSurprise from "../../assets/images/img/cha_wini_surprise.svg";
import winiWink from "../../assets/images/img/cha_wini_wink.svg";
import allCharacter from "../../assets/images/img/cha_all.png";
// import allFinish1 from "../../assets/images/img/cha_all_finish01.gif";
// import allFinish2 from "../../assets/images/img/cha_all_finish02.gif";
// import allFinish3 from "../../assets/images/img/cha_all_finish03.gif";
// import allFinish4 from "../../assets/images/img/cha_all_finish04.gif";
// import allFinish5 from "../../assets/images/img/cha_all_finish05.gif";
// import allFinish6 from "../../assets/images/img/cha_all_finish06.gif";
// import allFinish7 from "../../assets/images/img/cha_all_finish07.gif";
import didiSmilejump from "../../assets/images/img/cha_didi_smilejump.png";
import kkungiHappy from "../../assets/images/img/cha_kkungi_happy.png";
import kkungiHello from "../../assets/images/img/cha_kkungi_hello.png";
import { characterType } from "../types";
import { viewAssets } from "../constants/assets";

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
    didiSmilejump,
    kkungiHeart,
    kkungiHandsup,
    kkungiLaugh,
    kkungiPositive,
    kkungiSmile,
    kkungiWink,
    kkungiHeader: viewAssets.kkungiHeader,
    kkungiHappy,
    kkungiHello,
    winiProud,
    winiSad,
    winiShock,
    winiSmile,
    winiSurprise,
    winiWink,
    allCharacter,
    allFinish1: viewAssets.allFinish1,
    allFinish2: viewAssets.allFinish2,
    allFinish3: viewAssets.allFinish3,
    allFinish4: viewAssets.allFinish4,
    allFinish5: viewAssets.allFinish5,
    allFinish6: viewAssets.allFinish6,
    allFinish7: viewAssets.allFinish7,
  };

  const getCharacterSrc = (characterName: characterType) => {
    return characterMapper[characterName];
  };

  return {
    getCharacterSrc,
  };
};

export default useCharacterMapper;
