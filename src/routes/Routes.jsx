import { Routes, Route } from "react-router-dom";

import AuthLayout from "@/components/Layout/AuthLayout";
import MainLayout from "@/components/Layout/MainLayout";

import Login from "../pages/UserAuth/Login";
import Register from "../pages/UserAuth/Register";
import ForgotPassword from "../pages/UserAuth/ForgotPassword";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<MainLayout />} />
      </Route>
    </Routes>
  );
}
