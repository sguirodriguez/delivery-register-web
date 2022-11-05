import React from "react";
import {
  AvatarAndName,
  Container,
  DetailsAccordion,
  DetailsLeft,
  DetailsRight,
  Summary,
  Text,
  Title,
} from "./styles";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MdShoppingCart } from "react-icons/md";
import ButtonComponent from "../button";
import { colors } from "../../styles/globalStyles";
import { Link } from "react-router-dom";

const Accordion = ({ data }) => {
  return (
    <Container>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Summary>
          <Title className="title-summary">Nome do usuário</Title>
          <AvatarAndName>
            <MdShoppingCart />
            <Title>Produto</Title>
          </AvatarAndName>
        </Summary>
      </AccordionSummary>

      <DetailsAccordion>
        <DetailsLeft>
          <Title>Ponto de Partida</Title>
          <Text>teste</Text>
        </DetailsLeft>

        <DetailsRight>
          <Title>Ponto de Destino</Title>
          <Text>teste</Text>
        </DetailsRight>
      </DetailsAccordion>

      <DetailsAccordion>
        <DetailsLeft>
          <Title>Data de Entrega</Title>
          <Text>teste</Text>
        </DetailsLeft>

        <DetailsRight>
          <Link to="/mapa" style={{ textDecoration: "none" }}>
            <ButtonComponent style={{ maxWidth: 200 }}>
              <Text style={{ color: colors.white }}>Ver Rota</Text>
            </ButtonComponent>
          </Link>
        </DetailsRight>
      </DetailsAccordion>
    </Container>
  );
};
export default Accordion;
