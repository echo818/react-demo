import React, { Component } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

/**
 * 页面公共部分组件(头部和底部)
 */
class App extends Component {
  render() {
    return [
      <Header key="header" />,
      <div className="main-box" key="main">{this.props.children}</div>,
      <Footer key="footer" />
    ]
  }
}

export default App
