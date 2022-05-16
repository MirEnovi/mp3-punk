import React from 'react'
import { Link } from 'react-router-dom'



function NavBar() {
  return (
    <div className="nav-container">
      <ul>

        <li>
          <a href='/' className="btn-nav">1</a>
        </li>
        <li>
          <Link to="/">Player</Link>
          {/* <a href='/' className="active"> Player</a> */}
        </li>
        <li>
          <Link to="/songs">Songs</Link>
        </li>
        <li>
          <Link to="/albums">Albums</Link>
        </li>
        
        <li>
          <a href='/' className="btn-nav">3</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;