import { Outlet } from "react-router-dom";
import { Box, Image, Text } from "@chakra-ui/react";

export default function MainLayout() {
  return (
    <Box>
      <Image
        src="src\assets\HexagonalPattern.png"
        position="fixed"
        top="0"
        left="0"
        width="100vw"
        height="100vh"
        objectFit="cover"
        zIndex={-1}
      />
      <Outlet />
    </Box>
  );
}
