import { Box, Center, Image } from "@chakra-ui/react";
import logo from "../../../assets/graphics/logo.svg";

export default function LoginHeader() {
  return (
    <Box
      boxShadow="dark-lg"
      pt="1rem"
      pb="1rem"
      width="100%"
      bgGradient="linear(to-b, black, #000000cc)"
    >
      <Center>
        <Image boxSize="6rem" src={logo} alt="Logo" />
      </Center>
    </Box>
  );
}
