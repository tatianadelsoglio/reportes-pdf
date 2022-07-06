import "./App.css";
import { Button, Card, Table } from "antd";
import React from "react";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import "jspdf-autotable";
import jsPDF from "jspdf";
import "@react-pdf-viewer/core/lib/styles/index.css";

const json = [
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
    align: "center",
  },
  {
    title: "N° Comprobante",
    dataIndex: "comprobante",
    key: "comprobante",
    align: "center",
  },
  {
    title: "Cantidad",
    dataIndex: "cantidad",
    key: "cantidad",
    align: "center",
  },
  {
    title: "Fecha Límite Retiro",
    dataIndex: "retiro",
    key: "retiro",
    align: "center",
  },
];

const print = () => {
  const pdf = new jsPDF("p", "pt", "a4");
  const columns = [
    "Producto",
    "Fecha",
    "N° Comprobante",
    "Cantidad",
    "Fecha Límite Retiro",
  ];
  var rows = [];

  for (let i = 0; i < json.length; i++) {
    /*for (var key in json[i]) {
      var temp = [key, json[i][key]];
      rows.push(temp);
    }*/
    var temp = [
      json[i].producto,
      json[i].fecha,
      json[i].comprobante,
      json[i].cantidad,
      json[i].retiro,
    ];
    rows.push(temp);
  }

  pdf.text(150, 40, "PRODUCTOS PENDIENTES DE RETIRAR");
  pdf.autoTable(columns, rows, {
    startY: 65,
    theme: "grid",
    styles: {
      font: "times",
      halign: "center",
      cellPadding: 3.5,
      lineWidth: 0.5,
      lineColor: [0, 0, 0],
      textColor: [0, 0, 0],
    },
    headStyles: {
      textColor: [0, 0, 0],
      fontStyle: "normal",
      lineWidth: 0.5,
      lineColor: [0, 0, 0],
      fillColor: [255, 255, 255],
    },
    alternateRowStyles: {
      fillColor: [241, 241, 241],
      textColor: [0, 0, 0],
      lineWidth: 0.5,
      lineColor: [0, 0, 0],
    },
    rowStyles: {
      lineWidth: 0.5,
      lineColor: [0, 0, 0],
    },
    tableLineColor: [0, 0, 0],
  });
  console.log(pdf.output("datauristring"));
  pdf.save("Reporte");
};

const App = () => {
  return (
    <>

      <div className="div_wrapper">
        <Card
          title="PRODUCTOS PENDIENTES DE RETIRAR"
          extra={
              <Button
                className="btn_reporte"
                onClick={print}
              >
                REPORTE
              </Button>
          }
        >
          <Table
            className="tabla_reporte"
            dataSource={json}
            columns={columns}
          />
        </Card>
      </div>
    </>
  );
};

export default App;
