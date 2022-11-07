import HomeController from "../pages/home/home.controller";
import DeliveriesController from "../pages/deliveries/deliveries.controller";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouteMapController from "../pages/routeMap/routeMap.controller";

export const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeController />} />
        <Route path="/lista-de-entregas" element={<DeliveriesController />} />
        <Route path="/mapa/:origin/:destiny" element={<RouteMapController />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
