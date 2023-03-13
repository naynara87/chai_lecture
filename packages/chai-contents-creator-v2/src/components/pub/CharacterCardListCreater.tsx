import styled from "@emotion/styled";
import { colorPalette, ComponentButtonRadiFillMain, vh, vw } from "chai-ui-v2";
import React from "react";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import ChaProfile01 from "../../assets/images/img/cha_profile01.png";
import IconPlus from "../../assets/images/icon/icon_image.svg";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import UrlInputWrapper from "../molecules/UrlInputWrapper";

const TraningWrapper = styled.div`
	.btn-text {
		padding: 0;
		border: 0;
		border-radius: 0;
		background-color: transparent;
		appearance: none;
		outline: none;
		box-shadow: none;
		border: 1px solid ${colorPalette.mainlight};
		border-radius: 10px;
		font-size: 16px;
		padding: 14px 36px;
		color: ${colorPalette.main};
	}

	.training-create-wrap {
		margin-bottom: 50px;
	}

	.training-list {
		position: relative;
	}

	.btn-delete {
		z-index: 1;
		position: absolute;
		top: 10px;
		left: auto;
		right: 10px;
	}

		.img-wrap {
			background-color: ${colorPalette.gray200};
			background-size: auto;
			background-repeat: no-repeat;
			background-position: center center;
			background-image: url(${IconPlus});
		}
`;

const CharacterCardListCreater = () => {
	return (
		<ContentCreatorLayout>
			<TraningWrapper className="training-wrapper">
				{/* TODO: key설명 - training-end 클래스 추가되면 높이 변경, 버튼 추가 */}
				<button className="btn btn-text">학습목표 추가</button>
				<div className="training-list-wrap training-end">
					{/* 반복영역 */}
					<div className="training-create-wrap">
						<div className="training-list">
							<ObjectDeleteButton />
							<div className="gradi-wrap">
								<div className="gradi-conts-wrap">
									<div className="img-wrap">
									</div>
									<p className="title">텍스트에디터 들어옵니다</p>
								</div>
							</div>
							<div className="white-wrap">
								<p className="text">텍스트에디터 들어옵니다</p>
								<div className="btns-wrap">
									<ComponentButtonRadiFillMain text="학습 요약" />
								</div>
							</div>
						</div>
						<UrlInputWrapper typeText="image" />
					</div>
					{/* end 반복영역 */}
					<div className="training-create-wrap">
						<div className="training-list">
							<ObjectDeleteButton />
							<div className="gradi-wrap">
								<div className="gradi-conts-wrap">
									<div className="img-wrap">
										<img src={ChaProfile01} alt="" className="img" />
									</div>
									<p className="title">텍스트에디터 들어옵니다</p>
								</div>
							</div>
							<div className="white-wrap">
								<p className="text">텍스트에디터 들어옵니다</p>
								<div className="btns-wrap">
									<ComponentButtonRadiFillMain text="학습 요약" />
								</div>
							</div>
						</div>
						<UrlInputWrapper typeText="image" />
					</div>
				</div>
			</TraningWrapper>
		</ContentCreatorLayout>
	);
};

export default CharacterCardListCreater;