import React, {Component} from 'react'

/**
 * 网络获取数据渲染
 */
class Docs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
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

  componentDidMount() {
    this.getData()
  }

  render() {
    let user = this.state.user
    return (
      <div className="index-box">
        {
          Object.keys(user).map((key, index) => <p key={index}>{`${key}: ${user[key]}`}</p>)
        }
      </div>
    )
  }
}

export default Docs
