import React from "react";
import { Col, Row } from 'antd';
import Card from "antd/lib/card/Card";
import "./style.css";

const CardPeso = () => {
  return (
    <Card className="card-content" title="Peso">
      <Col>
        <Card title="SALDOS DE LA CUENTA">
          <Row >
            <Col
              span={6}
              xs={{ order: 1 }}
              sm={{ order: 2 }}
              md={{ order: 3 }}
              lg={{ order: 4 }}
            >
               <div>
                <h1>SIMBOLO1</h1>
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
                <h1>SALDO VENCIDO</h1>
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
                <h1>SALDO A VENCER</h1>
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
                <h1>SALDO TOTAL</h1>
              </div>
            </Col>
          </Row>
        </Card>
        <br/>
        <Card title="OTRA INFORMACION">
          <Row>
            <Col
              span={6}
              xs={{ order: 1 }}
              sm={{ order: 2 }}
              md={{ order: 3 }}
              lg={{ order: 4 }}
            >
               <div>
                <h1>CH. EN CARTERA</h1>
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
                <h1>PEND. FACTURAR</h1>
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
                <h1>VENTAS FORWARD</h1>
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
                <h1>CEREAL DISPONIBLE</h1>
              </div>
            </Col>
          </Row>
        </Card>
        <br/>
        <Card title="RESUMEN">

          <Row>
            <Col
              span={6}
              xs={{ order: 1 }}
              sm={{ order: 2 }}
              md={{ order: 3 }}
            >
               <div>
                <h1>CREDITO TOTAL</h1>
              </div>
            </Col>
            <Col
              span={6}
              xs={{ order: 1 }}
              sm={{ order: 2 }}
              md={{ order: 3 }}
            >
               <div>
                <h1>ACUERDO DE CRÉDITO</h1>
              </div>
            </Col>
            <Col
              span={6}
              xs={{ order: 1 }}
              sm={{ order: 2 }}
              md={{ order: 3 }}
            >
               <div>
                <h1>CRÉDITO DISPONIBLE</h1>
              </div>
            </Col>
          </Row>
        </Card>
        <br/>

      </Col>
    </Card>
  );
};

export default CardPeso;
