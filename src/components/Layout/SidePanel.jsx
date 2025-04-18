import {
  Box,
  Flex,
  Image,
  Heading,
  Avatar,
  AvatarGroup,
  HStack,
  Text,
  Link,
} from "@chakra-ui/react";

const devs = [
  {
    name: "Thales",
    img: "src/assets/Thales.jpg",
    link: "https://github.com/thalesluiz45",
  },
  {
    name: "Filipe",
    img: "src/assets/Filipe.png",
    link: "https://github.com/filipeKevyn",
  },
  {
    name: "Thomaz",
    img: "src/assets/Thomaz.png",
    link: "https://github.com/Thoomaz",
  },
];

const SidePanel = () => (
  <Box
    w="33.33%"
    p="4"
    display="flex"
    alignItems="center"
    justifyContent="center"
    zIndex={1}
    boxShadow="xl"
  >
    <Flex direction="column" align="center" gap="6">
      <Flex align="center" gap="2">
        <Image
          src="src/assets/LotoIcon.png"
          boxSize="80px"
          borderRadius="full"
          fit="cover"
        />
        <Heading size="7xl" fontFamily="League Spartan" fontWeight="bold">
          LotoCheck
        </Heading>
      </Flex>

      <HStack
        position="fixed"
        left="22vh"
        bottom="1"
        maxW="400px"
        color="gray.200"
        textAlign="center"
        py="5"
        fontWeight="extralight"
      >
        <Text>Made by</Text>

        <AvatarGroup gap="0" spaceX="-1" size="2xs">
          {devs.map((dev) => (
            <Avatar.Root key={dev.name}>
              <Avatar.Fallback name={dev.name} />
              <Link href={dev.link} isExternal>
                <Avatar.Image src={dev.img} />
              </Link>
            </Avatar.Root>
          ))}
        </AvatarGroup>
      </HStack>
    </Flex>
  </Box>
);

export default SidePanel;
