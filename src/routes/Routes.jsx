import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Fade } from "@chakra-ui/transition";
import { Box } from "@chakra-ui/react";

import Login from "../pages/UserAuth/Login";
import Register from "../pages/UserAuth/Register";
import ForgotPassword from "../pages/UserAuth/ForgotPassword";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Fade in>
              <Box>
                <Login />
              </Box>
            </Fade>
          }
        />
        <Route
          path="/register"
          element={
            <Fade in>
              <Box>
                <Register />
              </Box>
            </Fade>
          }
        />
        <Route
          path="/forgot"
          element={
            <Fade in>
              <Box>
                <ForgotPassword />
              </Box>
            </Fade>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
