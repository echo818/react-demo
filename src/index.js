import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import './assets/css/reset.less'
import './assets/css/style.less'

import routers from './routers'

ReactDOM.render(routers, document.getElementById('root'))
registerServiceWorker()
