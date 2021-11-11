import { Flex, Img, useMediaQuery } from '@chakra-ui/react'
import Logo from '../../assets/logo.png';
import { FaUserCircle } from 'react-icons/fa';
import { useParams } from 'react-router';
import { LinkDashboard, LinkDesktop, LinkLancamentos, LinkLimite } from '../LinksHeader';

const Header = () => {

    const [isMobile] = useMediaQuery(["(max-width: 700px)", "(min-width: 701px)"]);

    const { id } = useParams();

    const callLinks = () => {
        if (!isMobile) {
            return (<LinkDesktop />)
        } else {
            if (id === "dashboard") {
                return <LinkDashboard />
            } else if (id === "lancamentos") {
                return <LinkLancamentos />
            } else if (id === "limites") {
                return <LinkLimite />
            }
        }
    }

    return (
        <Flex
            as='nav'
            position='relative'
            bg='purple.800'
            color='white'
            justifyContent='space-around'
            alignItems='center'
            h={["60px", "80px", "106px"]}
        >
            <Img src={Logo} w={["70px", "75px", '80px']} borderRadius='8px' backgroundColor='gray.50' />

            {callLinks()}

            <FaUserCircle fontSize="50px" onClick={() => console.log("deu certo")} ></FaUserCircle>


        </Flex>
    )
};

export default Header;