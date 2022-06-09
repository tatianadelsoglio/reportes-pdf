import React from "react";
import Card from "antd/lib/card/Card";
import { Col, Row, Divider } from "antd";
import "./style.css";

const CardDolar = () => {
  return (
    <Card className="card-content" title="Dolar">
      <Col>
        <Card title="SALDOS DE LA CUENTA">
          <Row
            className="row-content"
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={6}>
              <div className="div-content">
                <div style={{width:"50%"}}>SIMBOLO 1</div>
                <div style={{width:"50%"}}>SALDO VENCIDO</div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={{ border: "1px solid black" }}>SALDO A VENCER</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={{ border: "1px solid black" }}>SALDO TOTAL</div>
            </Col>
          </Row>
        </Card>
        <br />
        <Card title="OTRA INFORMACION">
          <Row
            className="row-content"
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={5}>
              <div className="div-content">
                <div style={{width:"50%" }}>SIMBOLO 2</div>
                <div style={{width:"50%" }}>CH. EN CARTERA</div>
              </div>
            </Col>
            <Col className="gutter-row" span={5}>
              <div className="div-content">
                <div style={{width:"50%" }}>SIMBOLO 3</div>
                <div style={{width:"50%" }}>PEND. FACTURAR</div>
              </div>
            </Col>
            <Col className="gutter-row" span={5}>
              <div className="div-content">
                <div style={{width:"50%" }}>SIMBOLO 4</div>
                <div style={{width:"50%" }}>VENTAS FORWARD</div>
              </div>
            </Col>
            <Col className="gutter-row" span={5}>
              <div style={{ border: "1px solid black" }}>CEREAL DISPONIBLE</div>
            </Col>
          </Row>
        </Card>
        <br />
        <Card title="RESUMEN">
          <Row
            className="row-content"
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={6}>
              <div className="div-content">
                <div style={{width:"50%" }}>SIMBOLO 5</div>
                <div style={{width:"50%" }}>CRÉDITO TOTAL</div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={{ border: "1px solid black" }}>ACUERDO DE CRÉDITO</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={{ border: "1px solid black" }}>CRÉDITO DISPONIBLE</div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Card>
  );
};

export default CardDolar;
