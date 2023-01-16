import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { content } from "./CreateComponents";
import CreateContent from "./CreateContent";

interface CreateDropzoneProps {
  dropzoneName: string;
  contentList: content[];
  handleSubmitContent: (
    dropzoneName: string,
    contentId: string,
    inputText: React.MutableRefObject<string>,
  ) => void;
}

const CreateDropzone = ({
  dropzoneName,
  contentList,
  handleSubmitContent,
}: CreateDropzoneProps) => {
  return (
    <Droppable droppableId={dropzoneName}>
      {(provided) => (
        <div
          className={`create-page-wrap ${dropzoneName}`}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div className="page-conts-wrap">
            {contentList.map((content, index) => {
              return (
                <Draggable
                  draggableId={dropzoneName + index}
                  key={dropzoneName + index}
                  index={index}
                >
                  {(provided) => (
                    <CreateContent
                      provided={provided}
                      contentType={content.type}
                      contentText={content.inputText}
                      handleSubmitContent={handleSubmitContent}
                      isSubmit={content.isSubmit ?? false}
                      dropzoneName={dropzoneName}
                      contentId={content.id}
                    />
                  )}
                </Draggable>
              );
            })}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default CreateDropzone;
