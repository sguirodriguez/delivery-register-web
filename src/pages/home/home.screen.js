import React from "react";
import ButtonComponent from "../../components/button";
import Input from "../../components/input";
import Layout from "../../components/layout";
import { Title } from "../../styles/globalStyles";
import { Container, Text } from "./home.styles";
import DateTimePicker from "react-datetime-picker";

const HomeScreen = ({ handlers }) => {
  const {
    name,
    setName,
    product,
    setProduct,
    startPoint,
    setStartPoint,
    destinationPoint,
    setDestinationPoint,
    handleSubmit,
    value,
    onChange,
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
          label="Nome"
        />

        <Input
          value={product}
          onChange={(event) => setProduct(event.target.value)}
          label="Produto"
        />

        <Input
          value={startPoint}
          onChange={(event) => setStartPoint(event.target.value)}
          label="Ponto de Partida"
        />

        <Input
          value={destinationPoint}
          onChange={(event) => setDestinationPoint(event.target.value)}
          label="Ponto de Destino"
        />

        <DateTimePicker
          onChange={onChange}
          value={value}
          minDate={new Date()}
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
