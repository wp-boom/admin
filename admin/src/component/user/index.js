import React,{Component} from 'react'
import {Card,Table,Spin,Pagination,Button,Popconfirm} from 'antd'

//表头
// var columns = 
// const dataSource = [
//   {name:'腾讯',sex:1,address:'深圳',age:16,key:1,img:''},
//   {name:'腾讯',sex:0,address:'深圳',age:16,key:2,img:''},
//   {name:'腾讯',sex:2,address:'深圳',age:16,key:3,img:''}
// ]

class UserList extends Component{
  constructor(){
    super()
    this.columns = [
      {
        title: '姓名',
        width:100,
        dataIndex: 'name',
        key: 'name',
        fixed:'left'
      },
      {
        title: '价格',
        width:100,
        dataIndex: 'min_price',
        key: 'min_price',
      },
      {
        title: '户籍',
        width:100,
        dataIndex: 'city_name',
        key: 'city_name',
      },
      {
        title:'图片',
        width:100,
        dataIndex:'pic',
        key:'img',
        render(imgpath){
          return(
            <img src={imgpath} width='50' height='50' alt='' />
          )
        }
    
      },
      {
        title:'图片1',
        width:100,
        dataIndex:'pic',
        key:'img1',
        render(imgpath){
          return(
            <img src={imgpath} width='50' height='50' alt='' />
          )
        }
    
      },
      // {
      //   title: '性别',
      //   width:100,
      //   dataIndex: 'sex',
      //   key: 'sex',
      //   render(data){
      //     let arr = ['未知','男','女']
      //     return(
      //       <span>{arr[data]}</span>
      //     )
      //   }
      // },
      {
        title: '操作',
        width:150,
        key: 'operation',
        fixed:'right',
        render:(data)=>{
          return(
            <div>
             <Popconfirm
              title='确定要删除吗？'
              onConfirm={()=>{
                console.log('删除',data.show_id,this)
                this.del(data.show_id)
              }}
             >
              <Button size='small' type='danger'>删除</Button>
             </Popconfirm>
              <Button size='small' type='primary'>修改</Button>
            </div>
          )
        }
      },
    ]
    this.state = {
      spinning:true,
      nowPage:1,
      list:[]
    }
  }
  del(data){
    console.log(111)
    setTimeout(()=>{
      this.refreshData(this.state.nowPage)
    },300)
  }
  componentDidMount(){
    let page = this.state.nowPage
    this.refreshData(page)
  }
  refreshData(page){
    this.setState({spinning:true})
    let url = `/yapi/getThemeById?cate_parent_id=35&page=${page}`
    this.$axios.get(url)
      .then((data)=>{
        console.log(data,'请求')
        this.setState({spinning:false,list:data.data})
        console.log(this.state.list)
      })
      .catch(()=>{
        this.setState({spinning:false})
      })
    // setTimeout(()=>{
    //   this.setState({spinning:false})
    // },500)
  }
  render(){
    let {spinning,list} = this.state
    return(
      <div className='user-list-box'>
        <Card  style={{background:'skyblue',width:650,margin:'0 auto'}}>
         <Spin spinning={spinning}>
          <Table width = '200'
                 dataSource={list} 
                 columns={this.columns}
                 scroll={{x:750,y:120}}
                 pagination = {false}
          >

          </Table>
          <Pagination simple defaultCurrent={1} total={20} pageSize={3}
                      onChange={(page,pageSize)=>{
                        this.refreshData(page)
                        console.log(page,pageSize)
                      }}
          />
          </Spin>
        </Card>
      </div>
    )
  }
}
export default UserList