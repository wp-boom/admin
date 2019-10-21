import React,{Component} from 'react'
import './index.less'
import CustomNav from '../customNav'
import TokenModal from '../modal'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ActionCreator from '../../store/actionCreator'

class Admin extends Component{
  componentDidMount(){
    // 验证是否登录
    setTimeout(()=>{
      if(false){

      }else{
        this.props.changeTokenModal(true)
      }
    },1000)
  }
  render(){
    console.log(this,'22')
    return(
      <div className='admin'>
        <TokenModal/>
        <div className='admin-nav'>
          <CustomNav></CustomNav>
          
        </div>
        <div className='admin-content'>
          <div>
            头部信息
          </div>
          <div>
            {this.props.children}
          </div>
          <div>
            底部信息
          </div>
        </div>
      </div>
    )
  }
}
export default connect(state=>state,(dispatch)=>{
  return bindActionCreators(ActionCreator,dispatch)
})(Admin)