import React from 'react'
import {BrowserRouter as Router, Switch, Redirect, Route} from 'react-router-dom'
import load from '../utils/load'

// 组件按需加载
const App = load(() => import(/* webpackChunkName: 'views' */ '../views/App'))
const Home = load(() => import(/* webpackChunkName: 'views' */ '../views/Home'))
const Docs = load(() => import(/* webpackChunkName: 'views' */ '../views/docs/Docs'))
const Tutorial = load(() => import(/* webpackChunkName: 'views' */ '../views/tutorial/Tutorial'))
const Community = load(() => import(/* webpackChunkName: 'views' */ '../views/community/Community'))
const Blog = load(() => import(/* webpackChunkName: 'views' */ '../views/blog/Blog'))
const Login = load(() => import(/* webpackChunkName: 'views' */ '../views/Login'))
const Child = load(() => import(/* webpackChunkName: 'views' */ '../views/Child'))
const NotFound = load(() => import(/* webpackChunkName: 'views' */ '../views/NotFound'))

// 路由集中管理
const routers = (
  <Router basename="/app/">
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="/home" render={props => (
        <App {...props}>
          <Switch>
            <Route exact path="/home/" component={Home} />
            <Route render={() => <Redirect to="/error" />} />
          </Switch>
        </App>
      )} />
      <Route path="/docs" render={props => (
        <App {...props}>
          <Switch>
            <Route exact path="/docs/" component={Docs} />
            <Route path="/docs/tutorial" component={Tutorial} />
            <Route path="/docs/community" component={Community} />
            <Route render={() => <Redirect to="/error" />} />
          </Switch>
        </App>
      )} />
      <Route path="/tutorial" render={props => (
        <App {...props}>
          <Switch>
            <Route exact path="/tutorial/" component={Tutorial} />
            <Route path="/tutorial/community" component={Community} />
            <Route path="/tutorial/blog" component={Blog} />
            <Route render={() => <Redirect to="/error" />} />
          </Switch>
        </App>
      )} />
      <Route path="/community" render={props => (
        <App {...props}>
          <Switch>
            <Route exact path="/community/" component={Community} />
            <Route path="/community/blog" component={Blog} />
            <Route path="/community/docs" component={Docs} />
            <Route render={() => <Redirect to="/error" />} />
          </Switch>
        </App>
      )} />
      <Route path="/blog" render={props => (
        <App {...props}>
          <Switch>
            <Route exact path="/blog/" component={Blog} />
            <Route path="/blog/docs" component={Docs} />
            <Route path="/blog/tutorial" component={Tutorial} />
            <Route render={() => <Redirect to="/error" />} />
          </Switch>
        </App>
      )} />
      <Route path="/login" component={Login} />
      <Route path="/child" component={Child} />
      <Route path="/error" component={NotFound} />
      <Route render={() => <Redirect to="/error" />} />
    </Switch>
  </Router>
)

export default routers
