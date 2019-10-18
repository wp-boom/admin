import React,{Component} from 'react'
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'
import CustomNav from './component/customNav'

import Admin from './component/admin'
import Login from './component/login'
import Home from './component/home'
import User from './component/user'

class RootRouter extends Component{
  render(){
    return(
      <HashRouter>
        <CustomNav></CustomNav>
        {/* 导航 */}
        {/* 路由渲染 */}
        <Switch>
          <Redirect exact from = '/' to = '/login'/>
          <Route path='/login' component={Login} />
          <Route path='/admin' render={()=>{
            return(
              <Admin>
                <Route path='/admin/home' component={Home} />
                <Route path='/admin/user' component={User} />
              </Admin>
            )
          }}/>
        </Switch>
      </HashRouter>
    )
  }
}
export default RootRouter