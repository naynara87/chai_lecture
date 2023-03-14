import styled from "@emotion/styled";
import ImageIcon from "../../assets/images/icon/icon_image.svg";

const Image = styled.img`
  width: 200px;
  height: 200px;
  background-color: #f0f0f0;

  position: relative;
  margin-bottom: 16px;
  background-image: url("${ImageIcon}");
  background-size: 60px 60px;
  background-position: center;
  background-repeat: no-repeat;
`;

const ImageThumb = () => {
  return <Image />;
};

export default ImageThumb;
