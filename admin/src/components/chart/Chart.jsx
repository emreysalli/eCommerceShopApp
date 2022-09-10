import React from 'react'
import "./chart.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Chart = ({title,data,dataKey,grid}) => {
  return (
    <div className="chart">
        <div className="chartTitle">{title}</div>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd"/>
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8"/>
          <Tooltip/>
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDashArray="5 5"/>}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart