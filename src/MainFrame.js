import { useState,useEffect } from 'react';
import { setCompanyArea, setUserAge } from './constants';
import CompanyAreaChart from './CompanyAreaChart';
import UserAgeChart from './UserAgeChart';

const MainFrame = ()=>{
  const [companyArea, getCompanyArea] = useState([]);
  const [userAge, getUserAge] = useState([]);

      useEffect(() => {
        fetch(
          `https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json`,         
       )
       .then(res=>res.json())
       .then(function (response) {     
         getCompanyArea(setCompanyArea(response));
         getUserAge(setUserAge(response));
       })
       .catch(function (error) {
         console.log(error);
       });         
      }, []);
        
    // }
    // getOption()
    return(
        <div style={{display: 'flex',}}>
        <CompanyAreaChart data={companyArea}/>
        <UserAgeChart data={userAge}/>
        {/* <div id="echarts" style={{height:'500px',border:'1px solid #ccc',padding:'10px'}}  ref={(e) => { echartRef = e; }}></div> */}
        {/* <ReactECharts  option={options} /> */}
        </div>
    )
}
export default MainFrame;