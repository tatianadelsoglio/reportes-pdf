import React from "react";
import TablaReporte from "./TablaReporte";

const DocPDF = () => {
  return (
    <>
      <Document>
        <Page className="page" >
          <Text className="header" fixed>
            PRODUCTOS PENDIENTES DE RETIRAR
          </Text>
            <TablaReporte />
        </Page>
      </Document>
    </>
  );
};

export default DocPDF;
