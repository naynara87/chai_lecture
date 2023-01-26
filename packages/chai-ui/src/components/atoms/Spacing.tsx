import styled from "@emotion/styled";
import React from "react";

interface SpacingProps {
  width?: string;
  height?: string;
}
const Space = styled.span<SpacingProps>`
  display: inline-block;
  width: ${(props) => props.width || "0px"};
  height: ${(props) => props.height || "0px"};
`;
const Spacing = (props: SpacingProps) => {
  return <Space {...props} />;
};

export default Spacing;
