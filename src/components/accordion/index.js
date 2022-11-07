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
import moment from "moment";
import { truncateText } from "../../utils/maskAndValidators";

const Accordion = ({ data }) => {
  return (
    <>
      {data?.map((item, index) => {
        return (
          <Container key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Summary>
                <Title className="title-summary">
                  {truncateText(item?.name, 25)}
                </Title>
                <AvatarAndName>
                  <MdShoppingCart />
                  <Title>{item?.product}</Title>
                </AvatarAndName>
              </Summary>
            </AccordionSummary>

            <DetailsAccordion>
              <DetailsLeft>
                <Title>Partida</Title>
                <Text>{truncateText(item?.origin, 25)}</Text>
              </DetailsLeft>

              <DetailsRight>
                <Title>Destino</Title>
                <Text>{truncateText(item?.destiny, 25)}</Text>
              </DetailsRight>
            </DetailsAccordion>

            <DetailsAccordion>
              <DetailsLeft>
                <Title>Data de Entrega</Title>
                <Text>{moment(item?.date).format("DD/MM/YYYY")}</Text>
              </DetailsLeft>

              <DetailsRight>
                <Link
                  to={`/mapa/${item?.origin}/${item?.destiny}`}
                  style={{ textDecoration: "none" }}
                >
                  <ButtonComponent style={{ maxWidth: 200 }} onClick={() => {}}>
                    <Text style={{ color: colors.white }}>Ver Rota</Text>
                  </ButtonComponent>
                </Link>
              </DetailsRight>
            </DetailsAccordion>
          </Container>
        );
      })}
    </>
  );
};
export default Accordion;
