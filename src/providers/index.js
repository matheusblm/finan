import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "./Users";
import { theme } from "../style/theme";
import { DashboardProvider } from "./Dashboard";

const AppProvider = ({ children }) => (

  <ChakraProvider theme={theme}>
  <UserProvider>
    <DashboardProvider>
      {children}
    </DashboardProvider>
 </UserProvider>
  </ChakraProvider>

);

export default AppProvider;
