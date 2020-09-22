import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../todo-item/TodoItem';




export default function List({ taskList, removeTask, completeTask }) {

  return (
    <ul className="list">
      {taskList.map(({ id, text, isCompleted }) => (
        <TodoItem
          id={id}
          text={text}
          isCompleted={isCompleted}
          removeTask={removeTask}
          completeTask={completeTask}
          key={id}
        />
      ))}
    </ul>
  )
}

List.propTypes = {
  taskList: PropTypes.array,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
}

List.defaultProps = {
  taskList: [],
  removeTask: () => { },
  completeTask: () => { },
}
