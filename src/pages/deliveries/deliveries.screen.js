import React from "react";
import Layout from "../../components/layout";
import { Container } from "./deliveries.styles";
import Input from "../../components/input";
import Accordion from "../../components/accordion";
import { Title } from "../../styles/globalStyles";

const DeliveriesScreen = ({ handlers }) => {
  const { deliveries } = handlers;
  return (
    <Layout
      title="Lista de Entregas"
      contentStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      <Container>
        <Title>Lista de Entregas</Title>
        <Input type="default" label="Pesquisar Entrega" />
        <Accordion data={deliveries} />
      </Container>
    </Layout>
  );
};

export default DeliveriesScreen;
