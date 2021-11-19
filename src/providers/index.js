import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "./Users";
import { theme } from "../style/theme";
import { DashboardProvider } from "./Dashboard";
import { ReceiveProvider } from "./ContextReceives";
import { SpendProvider } from "./ContextSpend";
import { AccountProvider } from "./Account";
import { LimitsProvider } from "./Limits";

const AppProvider = ({ children }) => (
  <ChakraProvider theme={theme}>
    <ReceiveProvider>
      <AccountProvider>
          <SpendProvider>
      <UserProvider>
        <DashboardProvider>
          <LimitsProvider>
          {children}
          </LimitsProvider>
        </DashboardProvider>
      </UserProvider>
      </SpendProvider>
   </AccountProvider>
    </ReceiveProvider>
  </ChakraProvider>
);

export default AppProvider;
