import { Box } from "@chakra-ui/react";
import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import Start from "./component/Start";

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="#1a1a1a">
        <Start />
      </Box>
    </ChakraProvider>
  );
}

export default App;
