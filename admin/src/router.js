import React,{Component} from 'react'
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'
import ComponentImport from './utils/componentlmport'

const Login = ComponentImport(()=>import('./component/login'))
const Admin = ComponentImport(()=>import('./component/admin'))
const Home = ComponentImport(()=>import('./component/home'))
const User = ComponentImport(()=>import('./component/user'))
// import Admin from './component/admin'
// // import Login from './component/login/load'
// import Home from './component/home'
// import User from './component/user'

class RootRouter extends Component{
  render(){
    return(
      <HashRouter>
        
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