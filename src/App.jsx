import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import Login from "./pages/login/Login";

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Login />
    </ChakraProvider>
  );
}

export default App;
