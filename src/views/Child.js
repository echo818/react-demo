import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import EditUser from '../components/EditUser'

import logo from '../assets/images/logo.svg'
import '../assets/css/App.css'

class Child extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      value: ''
    }
    this.userChange = this.userChange.bind(this)
  }

  getData() {
    const {$, history} = this.props
    $.ajax({
      url: 'users.json',
      data: {
        name: 'echo',
        age: 18
      }
    }).then(res => {
      if (res.name !== 'echo') {
        history.replace('/login')
      } else {
        this.setState({
          user: res
        }) 
      }
    })
  }

  userChange(value) {
    this.setState({
      value
    })
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    let user = this.state.user
    return (
      <div className="App" key="body">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {
          Object.keys(user).map((key, index) => <p key={index}>{`${key}: ${user[key]}`}</p>)
        }
        {/*父子组件之间通讯*/}
        <p className="app-form__input">value: {this.state.value}</p>
        <EditUser onChange={this.userChange} />
        {/*路由跳转*/}
        <p><Link to="/home">home</Link></p>
        <p><Link to="/app/login">login</Link></p>
        <p><Link to="/app/child">child</Link></p>
        {this.props.children}
      </div>
    )
  }
}

export default Child
