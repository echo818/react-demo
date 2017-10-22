import React, { Component } from 'react'
import {Link} from 'react-router-dom'

/**
 * 路由跳转
 */
class Home extends Component {
  render() {
    return (
      <div className="index-box">
        <p><Link to="/home">home</Link></p>
        <p><Link to="/login">login</Link></p>
        <p><Link to="/child">child</Link></p>
        {this.props.children}
      </div>
    )
  }
}

export default Home
