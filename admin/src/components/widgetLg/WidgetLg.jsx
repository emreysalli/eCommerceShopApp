import React, { useState, useEffect } from "react";
import "./widgetLg.css";
import { userRequest } from "../../requestMethods";
const WidgetLg = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  }, []);
  const Button = ({ type, text }) => {
    return <button className={"widgetLgButton " + type}>{text}</button>;
  };

  const formatDate = (date) => {
    let dat = new Date(date);
    const yyyy = dat.getFullYear();
    let mm = dat.getMonth() + 1;
    let dd = dat.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return yyyy + "-" + mm + "-" + dd;
  };
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
        {orders.map((order) => (
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <span className="widgetLgName">{formatDate(order.userId)}</span>
            </td>
            <td className="widgetLgDate">{order.createdAt}</td>
            <td className="widgetLgAmount">{order.amount} ₺</td>
            <td className="widgetLgStatus">
              <Button type={order.status} text="Onaylandı" />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default WidgetLg;
