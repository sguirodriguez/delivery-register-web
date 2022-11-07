import React, { useEffect, useState } from "react";
import request from "../../utils/request";
import DeliveriesScreen from "./deliveries.screen";

const DeliveriesController = () => {
  const [deliveries, setDeliveries] = useState();

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

  useEffect(() => {
    requestDeliveries();
  }, []);

  const handlers = { deliveries };

  return <DeliveriesScreen handlers={handlers} />;
};

export default DeliveriesController;
