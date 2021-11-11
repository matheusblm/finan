import { Flex, Heading, Button } from "@chakra-ui/react";

export const LinkDashboard = () => {
    return (
        <Flex
            justifyContent="space-between"
            alignItems="center"
            w="220px"
        >
            <Heading>Lançamentos</Heading>
            <Heading>Limite de gastos</Heading>
        </Flex>
    )
};

export const LinkLancamentos = () => {
    return (
        <Flex
            justifyContent="space-between"
            alignItems="center"
            w="220px"
        >
            <Heading>Dashboard</Heading>
            <Heading>Limite de gastos</Heading>
        </Flex>
    )
};

export const LinkLimite = () => {
    return (
        <Flex
            justifyContent="space-between"
            alignItems="center"
            w="220px"
        >
            <Heading>Dashboard</Heading>
            <Heading>Lançamentos</Heading>
        </Flex>
    )
}

export const LinkDesktop = () => {
    return (
        <Flex
            justifyContent="space-between"
            alignItems="center"
            w="520px"
        >
            <Button fontSize="xl" fontFamily="heading" color="gray.600" variant="link" _hover={{ color: "gray.50" }} borderBottom="solid 2px" borderRadius="0px">Dashboard</Button>
            <Button fontSize="xl" fontFamily="heading" color="gray.600" variant="link" _hover={{ color: "gray.50" }} borderBottom="solid 2px" borderRadius="0px">Lançamentos</Button>
            <Button fontSize="xl" fontFamily="heading" color="gray.600" variant="link" _hover={{ color: "gray.50" }} borderBottom="solid 2px" borderRadius="0px" >Limite de gastos</Button>
        </Flex>
    )
}