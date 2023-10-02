import { Route, Routes } from "react-router-dom";
import Home from "../home/home";
import MisdemeanoursPage from "../misdemeanour/MisdemeanoursPage";
import Confession from "../confession/confession";
import NotFound from "../not_found/not_found";
import MainLayout from "../layouts/main_layouts";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="misdemeanours" element={<MisdemeanoursPage />} />
      <Route path="confessions" element={<Confession />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
export default Router;
// what goes here??
