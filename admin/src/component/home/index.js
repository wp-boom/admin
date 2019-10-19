import React,{Component} from 'react'
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react';

class Home extends Component{
  constructor(){
    super()
    this.state = {
      option: {
    
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[]
               
            }
        ]
    }
    
    }
  }
  componentDidMount(){
    this.$axios.get('/yapi/getPieData')
      .then((data)=>{
        console.log(data,'dd')
        let option = JSON.parse(JSON.stringify(this.state.option)) 
        option.series[0].data = data.data
        this.setState({option})
        console.log(this.state.option)
      })
  }
  render(){
    return(
      <Card className='home'>
        <ReactEcharts option={this.state.option} />
        <hr/>
        <ReactEcharts option= {{
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
}}/>
      </Card>
    )
  }
}
export default Home