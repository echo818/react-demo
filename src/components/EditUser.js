import React, {Component} from 'react'

class EditUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.printInfo = this.printInfo.bind(this)
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  printInfo() {
    this.props.onChange(this.state.value)
  }

  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.printInfo}>btn</button>
      </div>
    )
  }
}

export default EditUser
