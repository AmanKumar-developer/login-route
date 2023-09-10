// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo-image"
      />
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-links">
            Products
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-links">
            Cart
          </Link>
        </li>
      </ul>
      <button className="header-button" type="button">
        Logout
      </button>
    </div>
  </nav>
)
export default Header
