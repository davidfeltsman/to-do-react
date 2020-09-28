import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';


export default function Input({ taskText, onChange, onKeyPress, onButtonClick }) {
  return (
    <div className="input">
      <input
        type="text"
        className="input__field"
        value={taskText}
        onChange={onChange}
        placeholder="Add task..."
        onKeyPress={onKeyPress}
      />
      <button className="input__button" onClick={onButtonClick} >
        <FaPlusCircle className="input__icon" />
      </button>
    </div>
  )
}

Input.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onButtonClick: PropTypes.func,
  value: PropTypes.string
}

Input.defaultProps = {
  onChange: () => { },
  onKeyPress: () => { },
  onButtonClick: () => { },
  value: '',
}