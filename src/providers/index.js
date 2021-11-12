import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../style/theme";

const AppProvider = ({ children }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

export default AppProvider;
