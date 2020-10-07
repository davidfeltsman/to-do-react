import React, { useState } from 'react'
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { addTask, removeTask, completeTask, changeFilter } from '../../actions/actionCreator';

import Footer from '../../components/todo-footer/Footer';
import Input from '../../components/todo-input/Input'
import List from '../../components/todo-list/List'


function Todo(props) {

  function handleInputChange({ target: { value } }) {
    setTaskText(value);
  }

  function addTask() {
    const { addTask } = props;
    addTask((new Date()).getTime(), taskText, false);
    setTaskText('');
  }

  function addTaskKeyHandler({ key }) {
    if (taskText.length > 3 && key === 'Enter') {
      addTask();
    }
  }

  function addTaskButtonHandler() {
    if (taskText.length > 3) {
      addTask();
    }
  }

  function filterTasks(tasks, activeFilter) {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(task => task.isCompleted);
      case 'active':
        return tasks.filter(task => !task.isCompleted);
      default:
        return tasks;
    }
  }

  const [taskText, setTaskText] = useState('');
  const { tasks, removeTask, completeTask, filters, changeFilter } = props;
  const isTasksExist = tasks && tasks.length > 0;
  const filteredTasks = filterTasks(tasks, filters);

  return (
    <div className="todo-wrapper">
      <Input
        taskText={taskText}
        onChange={handleInputChange}
        onKeyPress={addTaskKeyHandler}
        onButtonClick={addTaskButtonHandler}
      />
      <TransitionGroup component={null}>
        {isTasksExist && (
          <CSSTransition timeout={300} classNames="lists">
            <List
              taskList={filteredTasks}
              removeTask={removeTask}
              completeTask={completeTask}
            />
          </CSSTransition>
        )}
        {isTasksExist && (
          <CSSTransition classNames="anim" timeout={300}>
            <Footer
              changeFilter={changeFilter}
              activeFilter={filters}
            />
          </CSSTransition>)}
      </TransitionGroup>
    </div >
  )
}

export default connect(({ tasks, filters }) => ({
  tasks,
  filters,
}), { addTask, removeTask, completeTask, changeFilter })(Todo);