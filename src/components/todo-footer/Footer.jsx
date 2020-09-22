import React from 'react';
import { AiOutlineFileDone, AiOutlineUnorderedList } from 'react-icons/ai';
import { BsCheckAll } from 'react-icons/bs';


export default function Footer() {
  return (
    <footer className="footer">
      <button className="footer__tab active">
        <AiOutlineUnorderedList className="footer__icon" />
        <span className="footer__text">all</span>
      </button>
      <button className="footer__tab">
        <BsCheckAll className="footer__icon" />
        <span className="footer__text">active</span>
      </button>
      <button className="footer__tab">
        <AiOutlineFileDone className="footer__icon" />
        <span className="footer__text">done</span>
      </button>

    </footer>
  )
}
