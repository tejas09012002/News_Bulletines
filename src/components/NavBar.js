import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Bulletins24X7</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home </Link>
            </li>
            <li><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
            <li><Link className="nav-link" to="/general">General</Link></li>
            <li><Link className="nav-link" to="/health">Health</Link></li>
            <li><Link className="nav-link" to="/science">Science</Link></li>
            <li><Link className="nav-link" to="/sports">Sports</Link></li>
            <li><Link className="nav-link" to="/technology">Technology</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}


export default NavBar