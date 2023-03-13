import styled from "@emotion/styled";

const AddButton = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  background-color: #ffffff;
  color: #7688d4;
  border: 1px solid #dbe1ff;
  font-size: 10px;
  font-weight: 500;
  width: fit-content;
  margin-bottom: 8px;
`;

interface ButtonProps {
  children: React.ReactNode;
}

const AddNumberButton = ({ children }: ButtonProps) => {
  return <AddButton>{children}</AddButton>;
};

export default AddNumberButton;
