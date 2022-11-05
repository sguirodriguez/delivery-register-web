import React from "react";
import { FaPencilAlt, FaFileAlt } from "react-icons/fa";
import { colors, TextDefault } from "../../styles/globalStyles";
import { Container, Content, Main, Row, SideBar } from "./styles";

const Layout = ({ title = "", children, contentStyle }) => {
  return (
    <Container>
      <head>
        <title>{title}</title>
      </head>

      <Main>
        <SideBar>
          <Row>
            <FaPencilAlt
              className="icon"
              style={{ color: colors.primaryColor }}
            />
            <TextDefault className="text">Cadastro</TextDefault>
          </Row>
          <Row>
            <FaFileAlt
              className="icon"
              style={{ color: colors.primaryColor }}
            />
            <TextDefault className="text">Lista de entregas</TextDefault>
          </Row>
        </SideBar>

        <Content style={contentStyle}>{children}</Content>
      </Main>
    </Container>
  );
};

export default Layout;
