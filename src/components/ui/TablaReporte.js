import { Button, Card, Table } from "antd";
import React from "react";
import './TablaReporte.css';

const dataSource = [
  {
    key: "1",
    producto: "Súper Fosfato simple a Granel",
    fecha: "19/02/2021",
    comprobante: "0200-00056233",
    cantidad: 140,
    retiro: "14/02/2022",
  },
  {
    key: "2",
    producto: "Lechera 16% a granel",
    fecha: "25/04/2022",
    comprobante: "0200-00072604",
    cantidad: 51740,
    retiro: "24/06/2022",
  },
  {
    key: "3",
    producto: "Mezcla 20-20-0-12 a granel",
    fecha: "30/08/2021",
    comprobante: "0200-00063965",
    cantidad: 7140,
    retiro: "25/08/2022",
  },
];

const columns = [
  {
    title: "Producto",
    dataIndex: "producto",
    key: "producto",
  },
  {
    title: "Fecha",
    dataIndex: "fecha",
    key: "fecha",
    align: 'right',
  },
  {
    title: "N° Comprobante",
    dataIndex: "comprobante",
    key: "comprobante",
    align: 'right',
  },
  {
    title: "Cantidad",
    dataIndex: "cantidad",
    key: "cantidad",
    align: 'right',
  },
  {
    title: "Fecha Límite Retiro",
    dataIndex: "retiro",
    key: "retiro",
    align: 'right',
  },
];

const TablaReporte = () => {
  return (
    <>
      <div className="div_wrapper">
        <Card
          title="PRODUCTOS PENDIENTES DE RETIRAR"
          extra={<Button className="btn_reporte">REPORTE</Button>}
        >
            <Table className="tabla_reporte" dataSource={dataSource} columns={columns} />
        </Card>
      </div>
    </>
  );
};

export default TablaReporte;
