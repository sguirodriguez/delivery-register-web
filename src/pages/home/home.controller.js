import React, { useRef, useState } from "react";
import HomeScreen from "./home.screen";

const HomeController = () => {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [startPoint, setStartPoint] = useState("");
  const [destinationPoint, setDestinationPoint] = useState("");
  const [value, onChange] = useState(new Date());
  const originRef = useRef();
  const destinationRef = useRef();

  const handleSubmit = () => {
    if (
      originRef?.current?.value === "" &&
      destinationRef?.current?.value === ""
    ) {
      return;
    }
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
