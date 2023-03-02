import styled from "@emotion/styled";
import React from "react";
import TempImage from "../../images/img/didi_all.png";
import { vh, vw } from "../../styles";

const ImageComponent = styled.div`
  max-width: ${vw(600)};
  max-height: ${vh(337)};
  margin: 0 auto;
  border-radius: ${vw(10)};

  img {
	max-width: 100%;
	max-height: 100%;
  }
`;

const ComponentImage = () => {
	return (
		<ImageComponent>
			<img src={TempImage} alt="예시이미지" />
		</ImageComponent>
	);
};

export default ComponentImage;