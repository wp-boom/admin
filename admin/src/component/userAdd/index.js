import React,{Component} from 'react'
import {Card,Table,Spin,Pagination,Button,Popconfirm} from 'antd'



class UserAdd extends Component{
  constructor(){
    super()
    
  }
  
  render(){
    // let {spinning,list} = this.state
    return(
      <div className='user-list-box'>
        <Card>
         添加信息
        </Card>
      </div>
    )
  }
}
export default UserAdd