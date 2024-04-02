import React, { useEffect } from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import './Bonds1.css'
import { useState } from 'react';




  
  function App1 ({options}){


    return(
      <>
    <div id='container'>
      {options.map(option=>{
        return (<HighchartsReact key={option.id}
          highcharts={Highcharts}
          constructorType={'stockChart'}
          options={option}
          containerProps={{ style: { height: "600px" } }}
        />  )
      })}
      
    </div>
    </>)
  }
  export default App1