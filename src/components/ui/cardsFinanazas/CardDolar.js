import React from "react";
import Card from "antd/lib/card/Card";
import { Col, Row, Divider } from "antd";
import dollar from "../../../assets/img/dollar.svg";
import bank from "../../../assets/img/bank.svg";
import seeds from "../../../assets/img/seeds.svg";
import grains from "../../../assets/img/wheat-grains.svg";
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
                <div className="div-content-img">
                  <div className="circulo bg-icon-purple-dark">
                    <img className="img" src={dollar} />
                  </div>
                </div>
                <div style={{ width: "50%" }}>
                  <div className="estilo-valor">
                    <span>$0</span>
                  </div>
                  <div className="estilo-desc">SALDO VENCIDO</div>
                </div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div>
                <div className="estilo-valor">
                  <span>$0</span>
                </div>
                <div className="estilo-desc">SALDO A VENCER</div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div>
                <div className="estilo-valor">
                  <span>$0</span>
                </div>
                <div className="estilo-desc">SALDO TOTAL</div>
              </div>
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
                <div className="div-content-img">
                  <div className="circulo bg-icon-purple-dark">
                    <img className="img" src={bank} />
                  </div>
                </div>
                <div style={{ width: "50%" }}>
                  <div className="estilo-valor">
                    <span>$0</span>
                  </div>
                  <div className="estilo-desc">CH. EN CARTERA</div>
                </div>
              </div>
            </Col>
            <Col className="gutter-row" span={5}>
              <div className="div-content">
                <div className="div-content-img">
                  <div className="circulo bg-icon-purple-dark">
                    <img className="img" src={seeds} />
                  </div>
                </div>
                <div style={{ width: "50%" }}>
                  <div className="estilo-valor">
                    <span>$0</span>
                  </div>
                  <div className="estilo-desc">PEND. FACTURAR</div>
                </div>
              </div>
            </Col>
            <Col className="gutter-row" span={5}>
              <div className="div-content">
                <div className="div-content-img">
                  <div className="circulo bg-icon-purple-dark">
                    <img className="img" src={grains} />
                  </div>
                </div>
                <div style={{ width: "50%" }}>
                  <div className="estilo-valor">
                    <span>$0</span>
                  </div>
                  <div className="estilo-desc">VENTAS FORWARD</div>
                </div>
              </div>
            </Col>
            <Col className="gutter-row" span={5}>
              <div>
                <div className="estilo-valor">
                  <span>$0</span>
                </div>
                <div className="estilo-desc">CEREAL DISPONIBLE</div>
              </div>
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
                <div className="div-content-img">
                  <div className="circulo bg-icon-purple-dark">
                    <img className="img" src={grains} />
                  </div>
                </div>
                <div style={{ width: "50%" }}>
                  <div className="estilo-valor">
                    <span>$0</span>
                  </div>
                  <div className="estilo-desc">CREDITO TOTAL</div>
                </div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div>
                <div className="estilo-valor">
                  <span>$0</span>
                </div>
                <div className="estilo-desc">ACUERDO DE CRÉDITO</div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div>
                <div className="estilo-valor">
                  <span>$0</span>
                </div>
                <div className="estilo-desc">CRÉDITO DISPONIBLE</div>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Card>
  );
};

export default CardDolar;
