import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "./Users";
import { theme } from "../style/theme";
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
            <LimitsProvider>{children} </LimitsProvider>
          </UserProvider>
        </SpendProvider>
      </AccountProvider>
    </ReceiveProvider>
  </ChakraProvider>
);

export default AppProvider;
