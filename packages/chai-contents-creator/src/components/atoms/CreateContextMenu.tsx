import styled from "@emotion/styled";
import { colorPalette } from "chai-ui";

interface ContextMenuProps {
  top: number;
  left: number;
}

const ContextMenu = styled.div<ContextMenuProps>`
  position: absolute;
  border: 1px solid #ffffff2d;
  border-radius: 4px;
  margin: 5px 0;
  box-sizing: border-box;
  top: ${(props) => `${props.top}px`};
  left: ${(props) => `${props.left}px`};
  background-color: ${colorPalette.blankBorderColor};

  & li {
    border: 1px solid #ffffff2d;
    padding: 6px 12px;
  }
`;

interface CreateContextMenuProps {
  children: JSX.Element | JSX.Element[];
  top: number;
  left: number;
}

const CreateContextMenu = ({ children, top, left }: CreateContextMenuProps) => {
  return (
    <ContextMenu top={top} left={left}>
      {children}
    </ContextMenu>
  );
};

export default CreateContextMenu;
