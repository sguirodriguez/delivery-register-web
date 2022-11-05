import React from "react";
import { FaPencilAlt, FaFileAlt } from "react-icons/fa";
import { TextDefault } from "../../styles/globalStyles";
import { Container, Content, Main, Row, SideBar } from "./styles";
import { Link } from "react-router-dom";
const Layout = ({ title = "", children, contentStyle }) => {
  return (
    <Container>
      <head>
        <title>{title}</title>
      </head>

      <Main>
        <SideBar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Row>
              <FaPencilAlt className="icon" />
              <TextDefault className="text">Cadastro</TextDefault>
            </Row>
          </Link>

          <Link to="/lista-de-entregas" style={{ textDecoration: "none" }}>
            <Row>
              <FaFileAlt className="icon" />
              <TextDefault className="text">Lista de entregas</TextDefault>
            </Row>
          </Link>
        </SideBar>

        <Content style={contentStyle}>{children}</Content>
      </Main>
    </Container>
  );
};

export default Layout;
