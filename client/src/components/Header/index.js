import React from 'react';
import './Header.css';
import FaQuestionCircle from 'react-icons/lib/fa/question-circle';
import FaEnvelope from 'react-icons/lib/fa/envelope';

export default class Header extends React.Component {
  render() {
    return (
      <header className="main-header">
        <h1 className="name">
          <a href="/">Summarizer</a>
        </h1>
        <ul className="main-nav">
          <li><a href="/register">Register</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
        <div className="nav-icons">
          <a href="about"><FaQuestionCircle /></a>
          <a href="contact"><FaEnvelope /></a>
        </div>
      </header>
    );
  }
}
