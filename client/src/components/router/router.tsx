import { Route, Routes } from "react-router-dom";
import Home from "../home/home";
import Misdemeanour from "../misdemeanour/misdemeanour";
import Confession from "../confession/confession";
//import NotFound from "../not_found/not_found";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/midemeanours" element={<Misdemeanour />} />
    <Route path="/confessions" element={<Confession />} />
  </Routes>
);
export default Router;
// what goes here??
