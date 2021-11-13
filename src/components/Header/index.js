import { Flex, Img, useMediaQuery, useDisclosure } from '@chakra-ui/react'
import Logo from '../../assets/logo.png';
import { FaUserCircle } from 'react-icons/fa';
import { LinkDesktop, SuspenseMenu } from '../LinksHeader';
import { LogoutDrawer } from '../LogoutDrawer';
import { useHistory } from 'react-router';

const Header = () => {

    const [isMobile] = useMediaQuery(["(max-width: 600px)", "(min-width: 601px)"]);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const history = useHistory()


    const callLinks = () => {
        if (!isMobile) {
            return (<Flex
                justifyContent="space-between"
                w="550px"
                padding="15px"
            >
                <LinkDesktop />
                <FaUserCircle fontSize="50px" onClick={onOpen} cursor="pointer"></FaUserCircle>
                <LogoutDrawer isOpen={isOpen} onClose={onClose} />
            </Flex>)
        } else {
            return (<SuspenseMenu />)
        }
    }

    return (
        <Flex
            as='nav'
            position='relative'
            bg='blue.800'
            color='white'
            justifyContent='space-between'
            alignItems='center'
            h={["60px", "80px", "106px"]}
            padding="20px"
        >
            <Img cursor="pointer" onClick={() => history.push("/dashboard")} src={Logo} w={["70px", "75px", '80px']} borderRadius='8px' backgroundColor='gray.50' />

            {callLinks()}

        </Flex>
    )
};

export default Header;