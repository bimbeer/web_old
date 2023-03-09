import { Box } from "@chakra-ui/react";

export default function LoginBackground({ children }) {
  return (
    <Box
      minHeight="100vh"
      bgColor="blackAlpha.900"
      backdropFilter="auto"
      backdropBrightness="40%"
    >
      {children}
    </Box>
  );
}
