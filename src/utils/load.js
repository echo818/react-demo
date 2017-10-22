import React, {Component} from 'react'
import plugins from './plugins'

// 组件容器加载器
const load = component => (
  props => {
    // 向每个容器组件传递 $ 作为封装的插件集
    props = Object.assign({}, props, {$: plugins})
    return <Bundle load={component}>
      {Comp => <Comp {...props} />}
    </Bundle>
  }
)

// 组件包装器
class Bundle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // short for "module" but that's a keyword in js, so "mod"
      mod: null
    }
  }

  componentWillMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load(props) {
    this.setState({
      mod: null
    })
    props.load().then((mod) => {
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod
      })
    })
  }

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : null
  }
}

export default load
