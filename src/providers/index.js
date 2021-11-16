import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "./Users";
import { theme } from "../style/theme";

const AppProvider = ({ children }) => (
  <UserProvider>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </UserProvider>
  
);

export default AppProvider;
