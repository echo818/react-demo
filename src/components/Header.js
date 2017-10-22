import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import logo from '../assets/images/logo.svg'

class Header extends Component {
  render() {
    return (
      <div className="header-box clearfix">
        <div className="header-fl fl">
          <img src={logo} className="header-fl__logo fl" alt="logo" />
          <h1 className="header-fl__title fl">react-demo</h1>
        </div>
        <div className="header-fr fr">
          <ul className="header-menu clearfix">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/docs">Docs</Link></li>
            <li><Link to="/tutorial">Tutorial</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><a href="https://github.com/echo008">GitHub</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
