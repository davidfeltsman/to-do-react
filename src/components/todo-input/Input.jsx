import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';


export default function Input({ taskText, onChange }) {
  return (
    <div className="input">
      <input type="text" className="input__field" value={taskText} onChange={onChange} />
      <button className="input__button">
        <FaPlusCircle className="input__icon" />
      </button>
    </div>
  )
}

Input.propTypes = {
  taskText: PropTypes.string
}