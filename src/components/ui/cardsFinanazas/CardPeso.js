import React from "react";
import { Col, Row } from "antd";
import Card from "antd/lib/card/Card";
import dollar from "../../../assets/img/dollar.svg";
import bank from "../../../assets/img/bank.svg";
import seeds from "../../../assets/img/seeds.svg";
import grains from "../../../assets/img/wheat-grains.svg";
import "./style.css";

const CardPeso = () => {
  return (
    <Card className="card-content" title="Peso">
      <Col>
        <Card title="SALDOS DE LA CUENTA">
          <Row>
            <Col
              span={6}
              xs={{ order: 1 }}
              sm={{ order: 2 }}
              md={{ order: 3 }}
              lg={{ order: 4 }}
            >
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
            {/* <Col
              span={6}
              xs={{ order: 1 }}
              sm={{ order: 2 }}
              md={{ order: 3 }}
              lg={{ order: 4 }}
            >
              <div>
                SALDO VENCIDO
              </div>
            </Col> */}
            <Col
              span={6}
              xs={{ order: 1 }}
              sm={{ order: 2 }}
              md={{ order: 3 }}
              lg={{ order: 4 }}
            >
              <div>
                <div className="estilo-valor">
                  <span>$0</span>
                </div>
                <div className="estilo-desc">SALDO A VENCER</div>
              </div>
            </Col>
            <Col
              span={6}
              xs={{ order: 1 }}
              sm={{ order: 2 }}
              md={{ order: 3 }}
              lg={{ order: 4 }}
            >
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
          <Row>
            <Col
              span={6}
              xs={{ order: 1 }}
              sm={{ order: 2 }}
              md={{ order: 3 }}
              lg={{ order: 4 }}
            >
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
            <Col
              span={6}
              xs={{ order: 1 }}
              sm={{ order: 2 }}
              md={{ order: 3 }}
              lg={{ order: 4 }}
            >
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
            <Col
              span={6}
              xs={{ order: 1 }}
              sm={{ order: 2 }}
              md={{ order: 3 }}
              lg={{ order: 4 }}
            >
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
            <Col
              span={6}
              xs={{ order: 1 }}
              sm={{ order: 2 }}
              md={{ order: 3 }}
              lg={{ order: 4 }}
            >
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
          <Row>
            <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }}>
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
            <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }}>
              <div>
                <div className="estilo-valor">
                  <span>$0</span>
                </div>
                <div className="estilo-desc">ACUERDO DE CRÉDITO</div>
              </div>
            </Col>
            <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }}>
              <div>
                <div className="estilo-valor">
                  <span>$0</span>
                </div>
                <div className="estilo-desc">CRÉDITO DISPONIBLE</div>
              </div>
            </Col>
          </Row>
        </Card>
        <br />
      </Col>
    </Card>
  );
};

export default CardPeso;
