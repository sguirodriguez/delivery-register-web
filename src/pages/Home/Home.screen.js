import React from "react";
import ButtonComponent from "../../components/button";
import Input from "../../components/input";
import Layout from "../../components/layout";
import { Title } from "../../styles/globalStyles";
import { Container, Text } from "./Home.styles";

const HomeScreen = () => {
  return (
    <Layout
      title="Cadastro de Entregas"
      contentStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      <Container>
        <Title>Cadastro de Entregas</Title>
        <Input type="default" label="Nome" />

        <Input type="default" label="Produto" />

        <Input type="default" label="Data de Entrega" />

        <Input type="default" label="Ponto de Partida" />

        <Input type="default" label="Ponto de Destino" />

        <ButtonComponent style={{ marginTop: 20, maxWidth: 280 }}>
          <Text>Cadastrar Entrega</Text>
        </ButtonComponent>
      </Container>
    </Layout>
  );
};

export default HomeScreen;
