import React,{Component,Fragment} from 'react'
import {Card} from 'antd'
import './index.less'
import {connect} from 'react-redux'

class TokenModal extends Component{
  render(){
    console.log(this,'modal')
    let {tokenModal} = this.props 
    return(
      <Fragment>
        {!tokenModal||
        <div className='token-modal'>
          <Card title='token失效'>
            token丢失或者失效，请重新登录
            <button>去登录</button>
          </Card>
        </div>
        }
      </Fragment>
      
    )
  }
}
export default connect(state=>state)(TokenModal)
// export default TokenModal