import ajax, {baseURL} from './ajax'
import get from './get'

// 封装的插件集(向每个容器组件注入)
export default {
  baseURL,
  ajax,
  get
}
