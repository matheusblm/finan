import { Flex, Button, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { FaBars } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { Users } from '../../providers/Users';

export const LinkDesktop = () => {
  const history = useHistory();

  return (
    <Flex justifyContent="" alignItems="center" w="415px">
      <Button
        fontFamily="heading"
        color="gray.600"
        variant="link"
        _hover={{ color: "gray.50" }}
        borderBottom="solid 2px"
        borderRadius="0px"
        onClick={() => history.push("/dashboard")}
      >
        Dashboard
      </Button>
      <Button
        fontFamily="heading"
        color="gray.600"
        variant="link"
        _hover={{ color: "gray.50" }}
        borderBottom="solid 2px"
        borderRadius="0px"
        onClick={() => history.push("/lancamentos")}
      >
        Lançamentos
      </Button>
      <Button
        fontFamily="heading"
        color="gray.600"
        variant="link"
        _hover={{ color: "gray.50" }}
        borderBottom="solid 2px"
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
        <MenuItem onClick={() => { history.push("/dashboard") }} color="purple.800" _hover={{ color: "gray.50", bg: "purple.800" }} >Dashboard</MenuItem>
        <MenuItem onClick={() => { history.push("/lancamentos") }} color="purple.800" _hover={{ color: "gray.50", bg: "purple.800" }} >Lançamentos</MenuItem>
        <MenuItem onClick={() => { history.push("/limites") }} color="purple.800" _hover={{ color: "gray.50", bg: "purple.800" }}  >Limites</MenuItem>
        <MenuItem onClick={() => Logout()} color="purple.800" _hover={{ color: "gray.50", bg: "purple.800" }}  >Sair</MenuItem>
      </MenuList>
    </Menu>
  )
}