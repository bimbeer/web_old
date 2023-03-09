import { Box, Center, Image } from "@chakra-ui/react";
import logo from "../../../assets/graphics/logo.svg";

export default function LoginHeader() {
  return (
    <Box
      pt="1rem"
      pb="1rem"
      width="100%"
      bgGradient="linear(to-b, black, #00000000)"
    >
      <Center>
        <Image boxSize="6rem" src={logo} alt="Logo" />
      </Center>
    </Box>
  );
}
