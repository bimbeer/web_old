import { Box } from "@chakra-ui/react";
import beer_background from "../../../assets/graphics/beer_background.jpg";

export default function LoginBackground({ children }) {
  return (
    <Box
      backgroundImage={beer_background}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      minHeight="100vh"
    >
      <Box
        minHeight="100vh"
        backdropFilter="auto"
        backdropBlur="3px"
        backdropBrightness="50%"
      >
        {children}
      </Box>
    </Box>
  );
}
