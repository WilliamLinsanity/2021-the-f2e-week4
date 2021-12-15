import ReactECharts from 'echarts-for-react';

const BarChart = (props)=>{
  let { data } = props;
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['北北基', '桃竹苗', '中彰投', '雲嘉南', '高屏'],
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
export default BarChart;