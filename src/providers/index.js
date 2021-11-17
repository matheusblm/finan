import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "./Users";
import { theme } from "../style/theme";
import { DashboardProvider } from "./Dashboard";
import { ReceiveProvider } from "./ContextReceives";
import { SpendProvider } from "./ContextSpend";
import { LimitsProvider } from "./Limits";

const AppProvider = ({ children }) => (
  <ChakraProvider theme={theme}>
    <ReceiveProvider>
      <UserProvider>
        <DashboardProvider>
          <LimitsProvider>
            <SpendProvider>{children}</SpendProvider>
          </LimitsProvider>
        </DashboardProvider>
      </UserProvider>
    </ReceiveProvider>
  </ChakraProvider>
);

export default AppProvider;
