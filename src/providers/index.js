import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../style/theme";
import { ReceiveProvider } from "./ContextReceives";
import { SpendProvider } from "./ContextSpend";

const AppProvider = ({ children }) => (
  <ChakraProvider theme={theme}>
    <ReceiveProvider>
      <SpendProvider>{children}</SpendProvider>
    </ReceiveProvider>
  </ChakraProvider>
);

export default AppProvider;
