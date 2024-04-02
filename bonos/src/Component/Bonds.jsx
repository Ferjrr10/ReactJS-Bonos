import { createChart } from "lightweight-charts";
import React, { useEffect, useRef, useState } from "react";
import {BrowserRouter as Router, Route, Link, Routes, BrowserRouter, useNavigate} from 'react-router-dom';
import Home from './Home.jsx'
import '../App.css';
import Highcharts from "highcharts";



function Bonds() {
  const chartContainerRef = useRef();
  const [candlePrice, setCandlePrice] = useState(null);
  const [candlePrice1, setCandlePrice1] = useState(null);
 // const [change, handleChange] = useState("");
  const [roomId, setRoomId] = useState('AL30D');
  const [ParidadSet, setParidad] = useState('');
  //const [password, setPassword] = useState("");
  //const [showPassword, setShowPassword] = useState("");
  //const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  useEffect(() => {

    const handleClick = () => {
      // 👇️ replace set to true
      navigate('/Navbar', {replace: true});
    };
    
    const chart = createChart(chartContainerRef.current, {
      
        layout: {
            background: { color: '#222' },
            textColor: '#DDD',
        },
        grid: {
            vertLines: { color: '#444' },
            horzLines: { color: '#444' },
        },
    
      width: chartContainerRef.current.clientWidth,
      height:400,
      });

      const newSeries = chart.addCandlestickSeries({
        upColor: '#26a69a', 
        downColor: '#ef5350', 
        borderVisible: false, 
        wickUpColor: '#26a69a', 
        wickDownColor: '#ef5350', 
      });
      const lineSeries = chart.addLineSeries({ color: '#2962FF', visible: +ParidadSet});

      fetch('http://localhost:1880/' + roomId)
       .then(res => res.json())
       .then(data => {
          const cdata = data.map (d => {
            return {time:d[0]/1000, open: d[1], high: d[2], low:d[3], close:d[4]}
    });
    newSeries.setData(cdata);
 })
 .catch(err => console.log(err));


  //window.alert(alerta);

      fetch('http://localhost:1880/'+ roomId)
      .then(res => res.json())
      .then(data => {
          const cdata1 = data.map (d => {
            return {time:d[0]/1000, value:d[1]}
      });
      lineSeries.setData(cdata1);
  })
  .catch(err => console.log(err));

        chart.subscribeCrosshairMove((param) => {
          if (param.time) {
            const data = param.seriesData.get(newSeries);
            setCandlePrice(data);
          }
        })
        chart.subscribeCrosshairMove((param) => {
          if (param.time) {
            const data1 = param.seriesData.get(lineSeries);
            setCandlePrice1(data1);
          }
        })

      //newSeries.setData(initialData)

      return () => [chart.remove()];
    }, [roomId, ParidadSet, navigate]);

  return (
     
    <div ref={chartContainerRef} style={{position: "relative"}}>
       <h1 className="whiteonblack">Bonos</h1>
      <div 
        style={{
         position: "absolute",
         top: 20,
         left: 50,
         zIndex:20,
         color: "white",
      }}
    > 
    </div>
    <div>
      <label>
    <div className="fer">Selecionar bono:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="AL30D">AL30D</option>
          <option value="AL29D">AL29D</option>
          <option value="AL35D">AL35D</option>
          <option value="AL41D">AL41D</option>
          <option value="AE38D">AE38D</option>
        </select>
    </div>
    </label>
    </div>
    <div className="paridad">
    Incluir paridad
    <input type="checkbox" value={ParidadSet} onChange={e => setParidad((prev) => !prev)} method="GET" />
    </div>
        <div style={{display: "flex"}}>
        <div style={{marginRight: 10}}> Apertura: {candlePrice?.open}</div>
        <div style={{marginRight: 10}}>  Máximo: {candlePrice?.high}</div>
        <div style={{marginRight: 10}}>  Mínimo: {candlePrice?.low}</div>
        <div style={{marginRight: 10}}>  Cierre: {candlePrice?.close}</div>
        <div style={{display: "flex"}}>
        <div style={{marginRight: 10}}>  Fecha: {(new Date(candlePrice1?.time*1000)).toLocaleDateString()}</div>
        <div style={{marginRight: 10}}>  Paridad: {candlePrice1?.value}</div>
    
    
    </div>
    
    </div>
    </div>
  );  
}

export default Bonds;
