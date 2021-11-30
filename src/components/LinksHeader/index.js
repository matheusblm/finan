import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Users } from "../../providers/Users";

export const LinkDesktop = () => {
  const history = useHistory();
  const local = history.location.pathname;

  return (
    <Flex
      justifyContent="space-evenly"
      alignItems="flex-end"
      w="350px"
      height="70px"
    >
      <Button
        fontFamily="heading"
        variant="link"
        color="gray.50"
        borderBottom={local === "/dashboard" ? "solid 2px" : "hidden"}
        _hover={{ color: "gray.600" }}
        borderRadius="0px"
        onClick={() => history.push("/dashboard")}
      >
        Dashboard
      </Button>
      <Button
        fontFamily="heading"
        variant="link"
        color="gray.50"
        borderBottom={local === "/lancamentos" ? "solid 2px" : "hidden"}
        _hover={{ color: "gray.600" }}
        borderRadius="0px"
        onClick={() => history.push("/lancamentos")}
      >
        Lançamentos
      </Button>
      <Button
        fontFamily="heading"
        variant="link"
        color="gray.50"
        borderBottom={local === "/limites" ? "solid 2px" : "hidden"}
        _hover={{ color: "gray.600" }}
        borderRadius="0px"
        onClick={() => history.push("/limites")}
      >
        Limite de gastos
      </Button>
    </Flex>
  );
};

export const SuspenseMenu = () => {
  const history = useHistory();

  const { Logout } = Users();

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<FaBars />}
        variant="outline"
      />
      <MenuList backgroundColor="gray.50">
        <MenuItem
          onClick={() => {
            history.push("/dashboard");
          }}
          color="purple.800"
          _hover={{ color: "gray.50", bg: "purple.800" }}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          onClick={() => {
            history.push("/lancamentos");
          }}
          color="purple.800"
          _hover={{ color: "gray.50", bg: "purple.800" }}
        >
          Lançamentos
        </MenuItem>
        <MenuItem
          onClick={() => {
            history.push("/limites");
          }}
          color="purple.800"
          _hover={{ color: "gray.50", bg: "purple.800" }}
        >
          Limites
        </MenuItem>
        <MenuItem
          onClick={() => Logout()}
          color="purple.800"
          _hover={{ color: "gray.50", bg: "purple.800" }}
        >
          Sair
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
