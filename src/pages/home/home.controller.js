import React, { useRef, useState } from "react";
import request from "../../utils/request";
import HomeScreen from "./home.screen";

const HomeController = () => {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [value, onChange] = useState(new Date());
  const originRef = useRef();
  const destinationRef = useRef();

  const handleSubmit = async () => {
    if (!name) {
      return alert("Campo nome deve ser preenchido!");
    }
    if (!product) {
      return alert("Campo produto deve ser preenchido!");
    }
    if (!value) {
      return alert("Campo data deve ser preenchido!");
    }
    if (!originRef?.current?.value) {
      return alert("Campo ponto de partida deve ser preenchido!");
    }
    if (!destinationRef?.current?.value) {
      return alert("Campo ponto de destino deve ser preenchido!");
    }

    const { error } = await request({
      method: "POST",
      path: "/delivery",
      body: {
        name,
        product,
        origin: originRef?.current?.value,
        destiny: destinationRef?.current?.value,
        date: value,
      },
    });
    if (error) {
      return alert("ERRO AO PEGAR LISTA DE ENTREGAS");
    }
    setName("");
    setProduct("");

    return alert("SUCESSO");
  };

  const handlers = {
    name,
    setName,
    product,
    setProduct,
    originRef,
    destinationRef,
    handleSubmit,
    value,
    onChange,
  };

  return <HomeScreen handlers={handlers} />;
};

export default HomeController;
