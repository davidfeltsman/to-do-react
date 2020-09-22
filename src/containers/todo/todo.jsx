import React, { useState } from 'react'
import { connect } from 'react-redux';

import { addTask, removeTask, completeTask, changeFilter } from '../../actions/actionCreator';

import Footer from '../../components/todo-footer/Footer';
import Input from '../../components/todo-input/Input'
import List from '../../components/todo-list/List'


function Todo(props) {

  const [taskText, setTaskText] = useState('');
  const handleInputChange = ({ target: { value } }) => {
    setTaskText(value);
  }

  const { tasks, removeTask, completeTask, filter, changeFilter } = props;
  const isTasksExist = tasks && tasks.length > 0;

  const addTask = ({ key }) => {
    if (taskText.length > 3 && key === 'Enter') {
      const { addTask } = props;
      addTask((new Date).getTime(), taskText, false);
      setTaskText('');
    }
  }

  const filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(task => task.isCompleted);
      case 'active':
        return tasks.filter(task => !task.isCompleted);
      default:
        return tasks;
    }
  }


  return (
    <div className="todo-wrapper">
      <Input
        taskText={taskText}
        onChange={handleInputChange}
        onKeyPress={addTask}
      />
      {isTasksExist && <List
        taskList={tasks}
        removeTask={removeTask}
        completeTask={completeTask}
      />}
      {isTasksExist && <Footer
        changeFilter={changeFilter}
        activeFilter={filter}
      />}
    </div>
  )
}

export default connect(({ tasks, filter }) => ({
  tasks,
  filter,
}), { addTask, removeTask, completeTask, changeFilter })(Todo);