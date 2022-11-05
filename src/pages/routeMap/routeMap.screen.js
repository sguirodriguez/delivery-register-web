import React from "react";
import Layout from "../../components/layout";
import { Title } from "../../styles/globalStyles";
import { Container, Direction, GoBack } from "./routeMap.syles";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const RouteMapScreen = () => {
  return (
    <Layout
      title="Mapa"
      contentStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      <Direction>
        <Link to="/lista-de-entregas" style={{ textDecoration: "none" }}>
          <GoBack>
            <FaArrowAltCircleLeft className="go-back" />
            <Title>Voltar</Title>
          </GoBack>
        </Link>

        <Container></Container>
      </Direction>
    </Layout>
  );
};

export default RouteMapScreen;
