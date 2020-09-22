import React from 'react'
import { MdDelete } from 'react-icons/md';

const Task = () => {
  return (
    <div className="list__task task">
      <input type="checkbox" id="task1" className="task__check" />
      <label htmlFor="task1" className="task__text">or, sit amet consectetur adipisicing elit. Obcaecati, laborum.</label>
      <button className="task__deleteButton">
        <MdDelete className="task__delete" />
      </button>
    </div>
  )
}

export default function List() {
  return (
    <div className="list">
      <Task />
      <Task />
      <Task />
    </div>
  )
}
