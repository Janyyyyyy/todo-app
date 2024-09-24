import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <span style={{ textDecoration: task.completed ? "line-through" : "" }}>
        {task.task}
      </span>
      <div style={{ float: 'right' }}>
        <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" onClick={editTodo} disabled={task.isEditing || task.completed} />
        <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={deleteTodo} disabled={task.isEditing || task.completed} />
        {task.completed ? (
          <FontAwesomeIcon icon={faTimesCircle} className="uncomplete-icon" onClick={toggleComplete} />
        ) : (
          <FontAwesomeIcon icon={faCheckCircle} className="complete-icon" onClick={toggleComplete} />
        )}
      </div>
    </div>
  );
};