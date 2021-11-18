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
      <UserProvider>
        <DashboardProvider>
          <LimitsProvider>
            <SpendProvider>{children}</SpendProvider>
          </LimitsProvider>
        </DashboardProvider>
      </UserProvider>
   </AccountProvider>
    </ReceiveProvider>
  </ChakraProvider>
);

export default AppProvider;
