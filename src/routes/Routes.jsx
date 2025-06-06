import { Routes, Route, BrowserRouter } from "react-router-dom";

import AuthLayout from "@/components/Layout/AuthLayout";
import MainLayout from "@/components/Layout/MainLayout";

import Login from "../pages/UserAuth/Login";
import Register from "../pages/UserAuth/Register";
import ForgotPassword from "../pages/UserAuth/ForgotPassword";
import UserHome from "@/pages/Main/UserHome";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<ForgotPassword />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<UserHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
