import React from "react";
import { Draggable } from "react-beautiful-dnd";

import "./styles.scss";

export default function Card({ card, index }) {
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
          </div>
        </div>
      )}
    </Draggable>
  );
}
