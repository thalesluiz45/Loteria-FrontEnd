import {
  IconButton,
  CloseButton,
  Drawer,
  Portal,
  Avatar,
  Box,
  Link,
  Stack,
  Text,
  Separator,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";

const user = [
  {
    name: "Thales Luiz Araújo Carvalho ",
    email: "thales.carvalho@academico.ifpb.edu.br",
    avatar:
      "https://www.lance.com.br/galerias/wp-content/uploads/2021/09/000_9MA8QW-11-150x150.jpg",
  },
];

const SideDrawer = () => {
  return (
    <Drawer.Root placement="start" divideY="2px">
      <Drawer.Trigger asChild>
        <IconButton variant="ghost" size="2xl" colorPalette="purple">
          <FaBars />
        </IconButton>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content
            bgGradient="to-tl"
            gradientFrom="#3c0a7b"
            gradientVia="#3c0780, #4c0d9f"
            gradientTo="#8345d4"
          >
            <Drawer.Header
              overflow={"clip"}
              display={"flex"}
              justifyContent={"center"}
            >
              <Stack gap="8">
                {user.map((user) => (
                  <VStack key={user.email} gap="4">
                    <Avatar.Root size={"full"}>
                      <Avatar.Fallback name={user.name} />
                      <Avatar.Image src={user.avatar} />
                    </Avatar.Root>
                    <Stack gap="0">
                      <Text fontWeight="medium">{user.name}</Text>
                      <Text
                        color="fg.muted"
                        textStyle="sm"
                        fontSize={"0.65rem"}
                      >
                        {user.email}
                      </Text>
                    </Stack>
                  </VStack>
                ))}
              </Stack>
            </Drawer.Header>
            <Drawer.Body
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <VStack
                width={"full"}
                alignItems={"initial"}
                fontSize={"1.2rem"}
                gap={"1.2rem"}
              >
                <Link as={RouterLink} variant={"plain"}>
                  Seus bolões
                </Link>
                <Separator width={"full"} borderColor={"whiteAlpha.400"} />
                <Link as={RouterLink}>Bolões externos</Link>
                <Separator width={"full"} borderColor={"whiteAlpha.400"} />
                <Box>
                  <Link as={RouterLink} to="/howtodo" variant="plain">
                    Como fazer
                  </Link>
                </Box>

                <Separator width="full" borderColor="whiteAlpha.400" />
              </VStack>
            </Drawer.Body>
            <Drawer.Footer>
              <IconButton
                as={RouterLink}
                to="/"
                size="lg"
                variant="subtle"
                colorPalette="red"
              >
                <IoExitOutline />
              </IconButton>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" colorPalette="purple" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};
export default SideDrawer;
