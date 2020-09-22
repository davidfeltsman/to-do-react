import React from 'react';
import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';


export default function TodoItem({ id, text, isCompleted, removeTask, completeTask }) {

  return (
    <li className={!isCompleted ? "list__task task" : "list__task task completed"} >
      <input
        type="checkbox"
        id={id}
        className="task__check"
        checked={isCompleted}
        onChange={() => completeTask(id)}
      />
      <label
        htmlFor={id}
        className="task__text"
      >
        {text}
      </label>
      <button
        className="task__deleteButton"
        onClick={() => removeTask(id)}
      >
        <MdDelete className="task__delete" />
      </button>
    </li>
  )
};

TodoItem.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
}

TodoItem.defaultProps = {
  id: '',
  text: '',
  isCompleted: false,
  removeTask: () => { },
  completeTask: () => { },
}
