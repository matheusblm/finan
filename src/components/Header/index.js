import { Flex, Img, useMediaQuery, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button } from '@chakra-ui/react'
import Logo from '../../assets/logo.png';
import { FaUserCircle } from 'react-icons/fa';
import { useParams } from 'react-router';
import { LinkDesktop, SuspenseMenu } from '../LinksHeader';
import { Users } from '../../providers/Users';

const Header = () => {

    const [isMobile] = useMediaQuery(["(max-width: 600px)", "(min-width: 601px)"]);

    const { id } = useParams();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const {Logout} = Users()


    const callLinks = () => {
        if (!isMobile) {
            return (<Flex
                justifyContent="space-between"
                w="550px"
                padding="15px"
            >
                <LinkDesktop />
                <FaUserCircle fontSize="50px" onClick={onOpen} cursor="pointer"></FaUserCircle>
                <Modal isOpen={isOpen} onClose={onClose} isCentered="false" >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Nome do usuário</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Button onClick={Logout}>Sair da minha conta</Button>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Flex>)
        } else {
            return (<SuspenseMenu />)
        }
    }

    return (
        <Flex
            as='nav'
            position='relative'
            bg='purple.800'
            color='white'
            justifyContent='space-between'
            alignItems='center'
            h={["60px", "80px", "106px"]}
            padding="20px"
        >
            <Img src={Logo} w={["70px", "75px", '80px']} borderRadius='8px' backgroundColor='gray.50' />

            {callLinks()}

        </Flex>
    )
};

export default Header;