import HomeController from "../pages/Home/Home.controller";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeController />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
