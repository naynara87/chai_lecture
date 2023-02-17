import React from "react";
import ImgProfileDefault from "../../images/img/img_profile_default.png";
import ImgTemp01 from "../../images/img/temp_profile01.png";

const ComponentRoleplay = () => {

  return (
    <div className="roleplay-container">
      <ul className="conversation-wrapper">
        {/* speech bubble */}
        {/* TODO: 음성이 재생될 때 active 가 추가됨(화자표시 애니메이션) */}
        <li className="conversation-wrap">
          <div className="img-wrap">
            {/* TODO: 누르면 단일 음성이 재생됨 */}
            <div className="img-round">
              <button className="btn-profile"><img src={ImgProfileDefault} alt="" className="profile" /></button>
            </div>
          </div>
          <div className="txt-wrap">
            <p className="name">{'왕리리'}</p>
            <div className="bubble-wrap">
              <p className="chinese">{'今天刮风，下雪，很冷。'}</p>
              <p className="pinyin">{'Jīntiān guā fēng, xià xuě, hěn lěng.'}</p>
              <p className="mean">{'오늘은 바람이 불고, 눈이 내려서 추워.'}</p>
            </div>
          </div>
        </li>
        {/* end speech bubble */}
        <li className="conversation-wrap right-conts">
          <div className="img-wrap">
            {/* TODO: 누르면 단일 음성이 재생됨 */}
            <div className="img-round">
              <button className="btn-profile"><img src={ImgTemp01} alt="" className="profile" /></button>
            </div>
          </div>
          <div className="txt-wrap">
            <div className="name">{'김민호'}</div>
            <div className="bubble-wrap">
              <div className="chinese">{'我觉得这里的冬天没有中国那么冷。'}</div>
              <div className="pinyin">{'Wǒ juédé zhèlǐ de dōngtiān méiyǒu zhòng guó nàme lěng.'}</div>
              <div className="mean">{'나는 여기 겨울이 중국만큼 춥지 않은 것 같아.'}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ComponentRoleplay;
