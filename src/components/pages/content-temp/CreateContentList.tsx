import { Draggable, Droppable } from "react-beautiful-dnd";
import { content } from "./CreateComponents";

interface CreateContentListProps {
  contentList: content[];
}

const CreateContentList = ({ contentList }: CreateContentListProps) => {
  return (
    <Droppable droppableId="contentList" isDropDisabled={true}>
      {(provided) => (
        <div className="contentList btn-wrap" {...provided.droppableProps} ref={provided.innerRef}>
          {contentList.map((content, index) => {
            return (
              <Draggable draggableId={content.id} key={content.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    className="btn btn-border-primary"
                  >
                    {content.type}
                  </div>
                )}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default CreateContentList;
