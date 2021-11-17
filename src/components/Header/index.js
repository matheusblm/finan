import {
  Flex,
  Img,
  useMediaQuery,
  useDisclosure,
  Grid,
} from "@chakra-ui/react";
import Logo from "../../assets/logo1.svg";
import { FaUserCircle } from "react-icons/fa";
import { LinkDesktop, SuspenseMenu } from "../LinksHeader";
import { LogoutDrawer } from "../LogoutDrawer";
import { Users } from "../../providers/Users";

const Header = () => {
  const [isMobile] = useMediaQuery([
    "(max-width: 600px)",
    "(min-width: 601px)",
  ]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { Logout } = Users();

  const callLinks = () => {
    if (!isMobile) {
      return (
        <Flex
          justifyContent="space-between"
          w="100%"
          alignContent="center"
          alignItems="center"
        >
          <Img
            cursor="pointer"
            src={Logo}
            w={["80px", "100px", "130px"]}
            borderRadius="8px"
            backgroundColor="gray.50"
          />
          <LinkDesktop />
          <FaUserCircle fontSize="50px" onClick={onOpen} cursor="pointer" />
          <LogoutDrawer isOpen={isOpen} onClose={onClose} />
        </Flex>
      );
    } else {
      return <SuspenseMenu />;
    }
  };

  return (
    <Flex
      as="nav"
      position="relative"
      bg="blue.800"
      color="white"
      justifyContent="space-between"
      alignItems="center"
      h={["60px", "80px", "106px"]}
      padding="20px"
    >
      {callLinks()}
    </Flex>
  );
};

export default Header;
