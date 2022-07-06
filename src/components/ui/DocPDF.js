import React from "react";
import TablaReporte from "./TablaReporte";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
});

const DocPDF = () => {
  return (
    <>
      <Document>
        <Page style={style.body}>
          <Text style={style.header} fixed>
            PRODUCTOS PENDIENTES DE RETIRAR
          </Text>
          <Text style={style.text}>
            <TablaReporte />
          </Text>
        </Page>
      </Document>
    </>
  );
};

export default DocPDF;
