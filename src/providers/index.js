import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "./Users";
import { theme } from "../style/theme";
import { DashboardProvider } from "./Dashboard";
import { ReceiveProvider } from "./ContextReceives";
import { SpendProvider } from "./ContextSpend";

const AppProvider = ({ children }) => (
  <ChakraProvider theme={theme}>
    <ReceiveProvider>
      <UserProvider>
        <DashboardProvider>
          <SpendProvider>{children}</SpendProvider>
        </DashboardProvider>
      </UserProvider>
    </ReceiveProvider>
  </ChakraProvider>
);

export default AppProvider;
