import React, {Component} from 'react'

import EditUser from '../../components/EditUser'

/**
 * 父子组件之间通讯
 */
class Tutorial extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.userChange = this.userChange.bind(this)
  }

  userChange(value) {
    this.setState({
      value
    })
  }

  render() {
    return (
      <div className="index-box">
        <p className="index-form__input">value: {this.state.value}</p>
        <EditUser onChange={this.userChange} />
      </div>
    )
  }
}

export default Tutorial
