import React from "react";
import Layout from "../../components/layout";
import { Container } from "./deliveries.styles";
import Input from "../../components/input";
import Accordion from "../../components/accordion";
import { Title } from "../../styles/globalStyles";

const DeliveriesScreen = ({ handlers }) => {
  const {
    deliveries,
    filterDeliveries,
    handleSearchDeliveries,
    filteredValues,
  } = handlers;
  return (
    <Layout
      title="Lista de Entregas"
      contentStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      <Container>
        <Title>Lista de Entregas</Title>
        <Input
          type="default"
          label="Pesquisar Entrega"
          value={filterDeliveries}
          onChange={(event) => handleSearchDeliveries(event.target.value)}
        />

        <Accordion data={!filteredValues ? deliveries : filteredValues} />
      </Container>
    </Layout>
  );
};

export default DeliveriesScreen;
