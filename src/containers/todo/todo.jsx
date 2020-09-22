import React, { useState } from 'react'
import Footer from '../../components/todo-footer/Footer';
import Input from '../../components/todo-input/Input'
import List from '../../components/todo-list/List'

export default function Todo() {


  const [taskText, setTaskText] = useState();
  const handleInputChange = ({ target: { value } }) => {
    setTaskText(value);
  }

  const [activeFilter, setActiveFilter] = useState('all');

  const taskList = [];

  return (
    <div className="todo-wrapper">
      <Input
        taskText={taskText}
        onChange={handleInputChange}
      />
      <List />
      <Footer />
    </div>
  )
}
