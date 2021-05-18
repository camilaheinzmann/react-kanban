import { DeleteOutline } from "@material-ui/icons";
import React, { useContext } from "react";
import { Draggable } from "react-beautiful-dnd";

import storeApi from "../../utils/storeApi";

import "./styles.scss";

export default function Card({ card, index, listId }) {
  const { removeCard } = useContext(storeApi);

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <div className="card-content" elevation={0}>
            {card.title}
            <button
              onClick={() => {
                removeCard(index, listId);
              }}
            >
              <DeleteOutline />
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
}
