import { Box, Image, Flex, Heading } from "@chakra-ui/react";
import SideDrawer from "../Drawer/SideDrawer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <Box h="100vh" w="100vw" bgColor="gray.200">
      <Box
        p="4"
        h="12vh"
        gap="5"
        bgGradient="to-tl"
        gradientFrom="#3c0a7b"
        gradientVia="#3c0780, #4c0d9f"
        gradientTo="#8345d4"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <SideDrawer />
        <Flex align="center" gap="2">
          <Image
            src="src/assets/LotoIcon.png"
            boxSize="50px"
            borderRadius="full"
            fit="cover"
          />
          <Heading
            paddingTop="2"
            size="4xl"
            fontFamily="League Spartan"
            fontWeight="bold"
          >
            LotoCheck
          </Heading>
        </Flex>
      </Box>
      <Outlet />
    </Box>
  );
}
