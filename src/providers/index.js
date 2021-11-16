import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "./Users";
import { theme } from "../style/theme";
import { DashboardProvider } from "./Dashboard";

const AppProvider = ({ children }) => (
  <ChakraProvider theme={theme}>
    <DashboardProvider>
      {children}
    </DashboardProvider>
  </ChakraProvider>
);

export default AppProvider;
