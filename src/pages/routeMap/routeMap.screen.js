import React from "react";
import Layout from "../../components/layout";
import { TextDefault, Title } from "../../styles/globalStyles";
import { Container, Direction, GoBack } from "./routeMap.syles";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";
import { useGoogleContext } from "../../context/google";
const RouteMapScreen = ({ handlers }) => {
  const { center, directionsResponse, distance, duration } = handlers;
  const isLoaded = useGoogleContext();

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

        <Container>
          {!isLoaded ? (
            <></>
          ) : (
            <GoogleMap
              center={center}
              zoom={10}
              mapContainerStyle={{ width: "100%", height: 540 }}
              options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
            >
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
            </GoogleMap>
          )}
          <TextDefault style={{ marginTop: 20 }}>
            Distância: {distance}
          </TextDefault>
          <br />
          <TextDefault>Duração: {duration}</TextDefault>
        </Container>
      </Direction>
    </Layout>
  );
};

export default RouteMapScreen;
