import React from "react";
import ButtonComponent from "../../components/button";
import Input from "../../components/input";
import Layout from "../../components/layout";
import { TextDefault, Title } from "../../styles/globalStyles";
import { Container, InputAutoComplete, Text } from "./home.styles";
import DateTimePicker from "react-datetime-picker";
import { Autocomplete } from "@react-google-maps/api";

const HomeScreen = ({ handlers }) => {
  const {
    name,
    setName,
    product,
    setProduct,
    originRef,
    destinationRef,
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

        <TextDefault style={{ marginTop: 15 }}>Ponto de Partida</TextDefault>

        <Autocomplete>
          <InputAutoComplete type="text" ref={originRef} />
        </Autocomplete>

        <TextDefault style={{ marginTop: 15 }}>Ponto de Destino</TextDefault>
        <Autocomplete>
          <InputAutoComplete ref={destinationRef} />
        </Autocomplete>

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
