import React from "react";
import ButtonComponent from "../../components/button";
import Input from "../../components/input";
import Layout from "../../components/layout";
import { Title } from "../../styles/globalStyles";
import { Container, Text } from "./home.styles";

const HomeScreen = ({ handlers }) => {
  const {
    name,
    setName,
    product,
    setProduct,
    deliveryDate,
    setDeliveryDate,
    startPoint,
    setStartPoint,
    destinationPoint,
    setDestinationPoint,
    handleSubmit,
  } = handlers;

  return (
    <Layout
      title="Cadastro de Entregas"
      contentStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      <Container>
        <Title>Cadastro de Entregas</Title>
        <Input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="default"
          label="Nome"
        />

        <Input
          value={product}
          onChange={(event) => setProduct(event.target.value)}
          type="default"
          label="Produto"
        />

        <Input
          value={deliveryDate}
          onChange={(event) => setDeliveryDate(event.target.value)}
          type="default"
          label="Data de Entrega"
        />

        <Input
          value={startPoint}
          onChange={(event) => setStartPoint(event.target.value)}
          type="default"
          label="Ponto de Partida"
        />

        <Input
          value={destinationPoint}
          onChange={(event) => setDestinationPoint(event.target.value)}
          type="default"
          label="Ponto de Destino"
        />

        <ButtonComponent
          onClick={() => handleSubmit()}
          style={{ marginTop: 20, maxWidth: 280 }}
        >
          <Text>Cadastrar Entrega</Text>
        </ButtonComponent>
      </Container>
    </Layout>
  );
};

export default HomeScreen;
