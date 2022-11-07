import React, { useEffect, useState } from "react";
import request from "../../utils/request";
import DeliveriesScreen from "./deliveries.screen";

const DeliveriesController = () => {
  const [deliveries, setDeliveries] = useState();
  const [filterDeliveries, setFilterDeliveries] = useState();
  const [filteredValues, setFilteredValues] = useState();

  const requestDeliveries = async () => {
    const { data, error } = await request({
      method: "GET",
      path: "/delivery",
    });
    if (error) {
      alert("ERRO AO PEGAR LISTA DE ENTREGAS");
    }
    setDeliveries(data);
  };

  const handleSearchDeliveries = (value) => {
    setFilterDeliveries(value);
    const filteredDeliveries = deliveries?.filter((item, index) => {
      if (item?.name.includes(value) || item?.product.includes(value)) {
        return item;
      }
      return;
    });

    setFilteredValues(filteredDeliveries);
  };

  useEffect(() => {
    requestDeliveries();
  }, []);

  const handlers = {
    deliveries,
    filterDeliveries,
    handleSearchDeliveries,
    filteredValues,
  };

  return <DeliveriesScreen handlers={handlers} />;
};

export default DeliveriesController;
