import React from 'react'



function NavBar() {
  return (
    <div className="nav-container">
      <ul>
        <li>
          <a href='/' className="btn-nav">1</a>
        </li>
        <li>
          <a href='/' className="active"> sound</a>
        </li>
        <li>
          <a href='/' >link</a>
        </li>
        <li>
          <a href='/'>link</a>
        </li>
        <li>
          <a href='/'>link</a>
        </li>
        <li>
          <a href='/'>link</a>
        </li>
        <li>
          <a href='/' className="btn-nav">3</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;