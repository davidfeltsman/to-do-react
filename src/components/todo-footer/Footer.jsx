import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineFileDone, AiOutlineUnorderedList } from 'react-icons/ai';
import { BsCheckAll } from 'react-icons/bs';

const BUTTONS = [
  {
    type: 'all',
    icon: <AiOutlineUnorderedList className="footer__icon" />,
  },
  {
    type: 'active',
    icon: <BsCheckAll className="footer__icon" />,
  },
  {
    type: 'completed',
    icon: <AiOutlineFileDone className="footer__icon" />,
  },
];

export default function Footer({ activeFilter, changeFilter }) {
  return (
    <footer className="footer">
      {BUTTONS.map(({ type, icon }) => (
        <button
          className={type === activeFilter ? "footer__tab active" : "footer__tab"}
          onClick={() => changeFilter(type)}
          key={type}
        >
          {icon}
          <span className="footer__text">{type}</span>
        </button>
      ))}
    </footer>
  )
}

Footer.propTypes = {
  activeFilter: PropTypes.string,
  changeFilter: PropTypes.func,
}

Footer.defaultProps = {
  activeFilter: 'all',
  changeFilter: () => { },
}
