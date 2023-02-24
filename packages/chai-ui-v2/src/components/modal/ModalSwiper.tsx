import React from "react";
import styled from "@emotion/styled";
import { ComponentButtonPlay } from "../atoms";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Page = styled.div`
  background-color: white;
  color: black;
`;

const SlideCard = styled.div`
  background-color: #eeeeee;
  border-radius: 10px;
  color: black;
`;

const SwiperWrapper = styled.div`
  position: relative;
`;

const ModalSwiper = () => {
  return (
    <Page>
      <SwiperWrapper>
        <Swiper
          modules={[Pagination]}
          loop
          pagination={{
            dynamicBullets: false,
            clickable: true,
          }}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <SlideCard>
              <div className="base-conts">
                <div className="voca-wrap">
                  <p className="chinese">{"游泳"}</p>
                  <p className="pinyin">{"yóuyǒng"}</p>
                  <p className="mean">{"수영하다"}</p>
                </div>
                <ComponentButtonPlay />
              </div>
            </SlideCard>
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard>
              <div className="base-conts">
                <div className="voca-wrap">
                  <p className="chinese">{"游泳"}</p>
                  <p className="pinyin">{"yóuyǒng"}</p>
                  <p className="mean">{"수영하다"}</p>
                </div>
                <ComponentButtonPlay />
              </div>
            </SlideCard>
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard>
              <div className="base-conts">
                <div className="voca-wrap">
                  <p className="chinese">{"游泳"}</p>
                  <p className="pinyin">{"yóuyǒng"}</p>
                  <p className="mean">{"수영하다"}</p>
                </div>
                <ComponentButtonPlay />
              </div>
            </SlideCard>
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard>
              <div className="base-conts">
                <div className="voca-wrap">
                  <p className="chinese">{"游泳"}</p>
                  <p className="pinyin">{"yóuyǒng"}</p>
                  <p className="mean">{"수영하다"}</p>
                </div>
                <ComponentButtonPlay />
              </div>
            </SlideCard>
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard>
              <div className="base-conts">
                <div className="voca-wrap">
                  <p className="chinese">{"游泳"}</p>
                  <p className="pinyin">{"yóuyǒng"}</p>
                  <p className="mean">{"수영하다"}</p>
                </div>
                <ComponentButtonPlay />
              </div>
            </SlideCard>
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard>
              <div className="base-conts">
                <div className="voca-wrap">
                  <p className="chinese">{"游泳"}</p>
                  <p className="pinyin">{"yóuyǒng"}</p>
                  <p className="mean">{"수영하다"}</p>
                </div>
                <ComponentButtonPlay />
              </div>
            </SlideCard>
          </SwiperSlide>
        </Swiper>
      </SwiperWrapper>
    </Page>
  );
};

export default ModalSwiper;
