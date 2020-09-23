import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../todo-item/TodoItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import '../../animations.css';

export default function List({ taskList, removeTask, completeTask }) {
  return (
    <TransitionGroup className="list" component="ul">
      {taskList.map(({ id, text, isCompleted }) => (
        <CSSTransition
          key={id}
          timeout={300}
          classNames="anim"
        >
          <TodoItem
            id={id}
            text={text}
            isCompleted={isCompleted}
            removeTask={removeTask}
            completeTask={completeTask}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
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
