import { Route, Routes } from "react-router-dom";
import { routes } from "./menuRoutes";
import Layout from "../components/layout/Layout";
import Dashboard from "../components/pages/dashboard/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import NotFound from "../components/pages/notFound/NotFound"; 

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      {/* Agrega la ruta para NotFound */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
