import React from 'react'
import "./widgetLg.css";
const WidgetLg = () => {
  const Button=({type,text})=>{
    return <button className={"widgetLgButton " + type}>{text}</button>;
  }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Son İşlemler</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Müşteri</th>
          <th className="widgetLgTh">Tarih</th>
          <th className="widgetLgTh">Miktar</th>
          <th className="widgetLgTh">Durum</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://mui.com/static/images/avatar/3.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Emre Yasin Şallı</span>
          </td>
          <td className="widgetLgDate">2 Temmuz 2022</td>
          <td className="widgetLgAmount">20245 ₺</td>
          <td className="widgetLgStatus"><Button type="Approved" text="Onaylandı"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://mui.com/static/images/avatar/3.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Emre Yasin Şallı</span>
          </td>
          <td className="widgetLgDate">2 Temmuz 2022</td>
          <td className="widgetLgAmount">20245 ₺</td>
          <td className="widgetLgStatus"><Button type="Declined" text="Reddedildi"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://mui.com/static/images/avatar/3.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Emre Yasin Şallı</span>
          </td>
          <td className="widgetLgDate">2 Temmuz 2022</td>
          <td className="widgetLgAmount">20245 ₺</td>
          <td className="widgetLgStatus"><Button type="Pending" text="Bekliyor"/></td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg