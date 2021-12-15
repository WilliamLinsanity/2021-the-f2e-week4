import ReactECharts from 'echarts-for-react';

const UserAgeChart = (props)=>{
  let { data } = props;
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['21-25歲', '26-30歲', '31-35歲', '36-40歲', '41-45歲'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data,
        type: 'bar',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };
    return(
        <>
        <ReactECharts  option={options} style={{width:'50%'}}/>
        </>
    )
}
export default UserAgeChart;