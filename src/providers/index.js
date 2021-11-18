import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "./Users";
import { theme } from "../style/theme";
import { DashboardProvider } from "./Dashboard";
import { ReceiveProvider } from "./ContextReceives";
import { SpendProvider } from "./ContextSpend";
import { AccountProvider } from "./Account";

const AppProvider = ({ children }) => (
  <ChakraProvider theme={theme}>
    <AccountProvider>
      <ReceiveProvider>
        <UserProvider>
          <DashboardProvider>
            <SpendProvider>{children}</SpendProvider>
          </DashboardProvider>
        </UserProvider>
      </ReceiveProvider>
    </AccountProvider>
  </ChakraProvider>
);

export default AppProvider;
