import { Document, Page, StyleSheet, Text } from "@react-pdf/renderer";
import React from "react";
import TablaReporte from "./TablaReporte";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Oswald",
  },
});

const DocPDF = () => {
  return (
    <>
      <Document>
        <Page size="A4" style={styles.body}>
          <Text style={styles.title} fixed>
            PRODUCTOS PENDIENTES DE RETIRAR
          </Text>
          <TablaReporte />
        </Page>
      </Document>
    </>
  );
};

export default DocPDF;
