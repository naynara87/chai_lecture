import { ChooseMediaTextContent } from "../../types/templateContents";
import ChooseMediaText from "../molecules/ChooseMediaText";

interface ChooseMediaTextAdapterProps {
  content: ChooseMediaTextContent;
}

const ChooseMediaTextAdapter = ({ content }: ChooseMediaTextAdapterProps) => {
  const { data } = content;

  return (
    <>
      {data.map((chooseMediaTextData, index) => {
        return <ChooseMediaText key={index} datas={chooseMediaTextData} />;
      })}
    </>
  );
};

export default ChooseMediaTextAdapter;
