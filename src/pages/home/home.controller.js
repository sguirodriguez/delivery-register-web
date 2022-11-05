import React, { useState } from "react";
import HomeScreen from "./home.screen";

const HomeController = () => {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [startPoint, setStartPoint] = useState("");
  const [destinationPoint, setDestinationPoint] = useState("");

  const handleSubmit = () => {};

  const handlers = {
    name,
    setName,
    product,
    setProduct,
    deliveryDate,
    setDeliveryDate,
    startPoint,
    setStartPoint,
    destinationPoint,
    setDestinationPoint,
    handleSubmit,
  };

  return <HomeScreen handlers={handlers} />;
};

export default HomeController;
