import React, { useState } from "react";
import HomeScreen from "./home.screen";

const HomeController = () => {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [startPoint, setStartPoint] = useState("");
  const [destinationPoint, setDestinationPoint] = useState("");
  const [value, onChange] = useState(new Date());

  const handleSubmit = () => {};
  console.log("data selecionada", value);
  const handlers = {
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
  };

  return <HomeScreen handlers={handlers} />;
};

export default HomeController;
