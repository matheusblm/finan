import logo from "../../assets/logo.png";
import pizza from "../../assets/grafico-de-pizza 1.png";
import phone from "../../assets/mockupIphone.png";
import mobile from "../../assets/Mobile-Dash-page.jpg";
import grafics from "../../assets/grafico-de-pizza 1.png";
import { Flex, Center, Box, Image, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Initial = () => {
return (
<>
<Flex
bgGradient="linear(to-l, blue.500, gray.50)"
h={["22vh", "300px", "335px","535px"]}
>
<Box
w={["100%", "50%"]}
display={["flex", "flex", "flex"]}
alignItems="center"
justifyContent={["center"]}
>
<Image src={logo} alt="finan" height={["180px", "275px", "350px","600px"]} />
</Box>
<Box
w="248px"
display={["none", "block"]}
marginLeft={["0px", "0px", "100px"]}
marginRight={["0px", "10px"]}
>
<Center
position="relative"
zIndex="3"
marginTop="8px"
bg="gray.50"
w={["143px", "145px", "180px",'275px']}
h={["105px", "105px", "120px",'185px']}
borderRadius="20px"
boxShadow="0px 2px 4px #80807E"
>
<Heading
color="gray.600"
textAlign="center"
fontSize={["xs", "xs", "md","2xl"]}
fontWeight="bold"
>
Caso voce ja faz parte da nossa comunidade apenas faça{" "}
<Link
to="/login"
style={{ color: "#1A3747", fontWeight: "bold" }}
>
o Login
</Link>
</Heading>
</Center>
<Center
position="relative"
bottom="22px"
zIndex="2"
left={["100px", "100px", "100px", "115px", "195px"]}
bg="gray.50"
w={["143px", "145px", "180px",'275px']}
h={["105px", "105px", "120px",'185px']}
borderRadius="20px"
boxShadow="0px 2px 4px #80807E"
>
<Heading
color="gray.600"
fontSize="3xl"
textAlign="center"
fontSize={["xs", "xs", "md","2xl"]}
fontWeight="bold"
>
<Link
to="/register"
style={{ color: "#1A3747", fontWeight: "bold" }}
>
Cadastre-se
</Link>{" "}
para começar a ter controle da sua vida financeira
</Heading>
</Center>
<Center
position="relative"
bottom="45px"
zIndex="1"
bg="gray.50"
w={["143px", "145px", "180px",'275px']}
h={["105px", "105px", "120px",'185px']}
borderRadius="20px"
boxShadow="0px 2px 4px #80807E"
>
<Heading
color="gray.600"
textAlign="center"
fontSize={["9px", "9px", "xs", "md"]}
fontWeight="bold"
>
Graficos simples e intuitvos Com tabelas de facil entendimento
</Heading>
<Image src={pizza} alt="finan" w={["53%","53%","55%","60%"]} />
</Center>
</Box>
</Flex>
<Flex bg="gray.50" h="57vh" justifyContent="center">
<Flex
w="65%"
marginTop="10px"
maxW={["210px", "250px", "500px"]}
justifyContent="center"
flexDirection={["column"]}
alignItems={["center"]}
>
<Heading
fontSize={["2xl", "4xl", "6xl"]}
marginLeft="8px"
color="gray.600"
width={["202px", "235px", "345px"]}
>
Suas finanças na palma da mao
</Heading>
<Box w="248px" display={["block", "none"]}>
<Center
position="relative"
zIndex="3"
marginTop="15px"
bg="gray.50"
w="143px"
h="105px"
borderRadius="20px"
boxShadow="0px 2px 4px #80807E"
>
<Heading
color="gray.600"
textAlign="center"
fontSize="xs"
fontWeight="bold"
>
Caso voce ja faz parte da nossa comunidade apenas faça{" "}
<Link
to="/inicial"
style={{ color: "#1A3747", fontWeight: "bold" }}
>
o Login
</Link>
</Heading>
</Center>
<Center
position="relative"
bottom="12px"
zIndex="2"
left="100px"
bg="gray.50"
w="143px"
h="105px"
borderRadius="20px"
boxShadow="0px 2px 4px #80807E"
>
<Heading
color="gray.600"
fontSize="3xl"
textAlign="center"
fontSize="xs"
fontWeight="bold"
>
<Link
to="/inicial"
style={{ color: "#1A3747", fontWeight: "bold" }}
>
Cadastre-se
</Link>{" "}
para começar a ter controle da sua vida financeira
</Heading>
</Center>
<Center
position="relative"
bottom="24px"
zIndex="1"
bg="gray.50"
w="143px"
h="105px"
borderRadius="20px"
boxShadow="0px 2px 4px #80807E"
>
<Heading
color="gray.600"
textAlign="center"
fontSize="xs"
fontSize="9px"
fontWeight="bold"
>
Graficos simples e intuitvos Com tabelas de facil entendimento
</Heading>
<Image src={pizza} alt="finan" w="57%" />
</Center>
</Box>
</Flex>
<Flex
w={["40%", "40%", "25%"]}
alignItems="center"
display={["none", "flex"]}
justifyContent="center"
>
<Image
src={mobile}
zIndex="0"
alt="finan"
w={["165px"]}
h="365px"
position="absolute"
borderRadius="12px 12px 20px 20px"
/>
<Image
src={phone}
zIndex="1"
alt="finan"
w={["200px", "215px"]}
h="386px"
/>
</Flex>
</Flex>
<Flex
bgGradient="linear(to-l, blue.500, gray.50)"
alignItems="center"
flexDirection="column"
>
<Heading
color="gray.600"
marginTop="10px"
marginBottom={["5px", "15px"]}
fontSize={["xs", "md", "2xl"]}
height={["10%"]}
>
Time de desenvolvimento
</Heading>
<Flex flexWrap="wrap" justifyContent="center" w={["90%"]}>
<Flex 
alignItems="center" 
flexDirection="column" 
margin={["0 8px 5px 8px","0 8px 5px 8px","0 15px 10px 15px","0 30px 15px 30px"]}
>
<Image
w={["50px", "80px", "100px", "150px"]}
h={["50px", "80px", "100px", "150px"]}
borderRadius="100%"
boxShadow="#80807e 1px 1px 4px 0px"
/>
<Heading fontSize={["xs", "xs", "xl"]} marginTop={["0px", "3px"]}>
Joao Nonato
</Heading>
<Heading fontSize={["xs", "xs", "xl"]}>linkedin</Heading>
</Flex>
<Flex 
alignItems="center" 
flexDirection="column" 
margin={["0 8px 5px 8px","0 8px 5px 8px","0 15px 10px 15px","0 30px 15px 30px"]}
>
<Image
w={["50px", "80px", "100px", "150px"]}
h={["50px", "80px", "100px", "150px"]}
borderRadius="100%"
boxShadow="#80807e 1px 1px 4px 0px"
/>
<Heading fontSize={["xs", "xs", "xl"]} marginTop={["0px", "3px"]}>
Matheus Bueno
</Heading>
<Heading fontSize={["xs", "xs", "xl"]}>linkedin</Heading>
</Flex>
<Flex 
alignItems="center" 
flexDirection="column" 
margin={["0 8px 5px 8px","0 8px 5px 8px","0 15px 10px 15px","0 30px 15px 30px"]}
>
<Image
w={["50px", "80px", "100px", "150px"]}
h={["50px", "80px", "100px", "150px"]}
borderRadius="100%"
boxShadow="#80807e 1px 1px 4px 0px"
/>
<Heading fontSize={["xs", "xs", "xl"]} marginTop={["0px", "3px"]}>
Rafael Souza
</Heading>
<Heading fontSize={["xs", "xs", "xl"]}>linkedin</Heading>
</Flex>
<Flex 
alignItems="center" 
flexDirection="column" 
margin={["0 8px 5px 8px","0 8px 5px 8px","0 15px 10px 15px","0 30px 15px 30px"]}
>
<Image
w={["50px", "80px", "100px", "150px"]}
h={["50px", "80px", "100px", "150px"]}
borderRadius="100%"
boxShadow="#80807e 1px 1px 4px 0px"
/>
<Heading fontSize={["xs", "xs", "xl"]} marginTop={["0px", "3px"]}>
Victor sherer
</Heading>
<Heading fontSize={["xs", "xs", "xl"]}>linkedin</Heading>
</Flex>
<Flex 
alignItems="center" 
flexDirection="column" 
margin={["0 8px 5px 8px","0 8px 5px 8px","0 15px 10px 15px","0 30px 15px 30px"]}
>
<Image
w={["50px", "80px", "100px", "150px"]}
h={["50px", "80px", "100px", "150px"]}
borderRadius="100%"
boxShadow="#80807e 1px 1px 4px 0px"
/>
<Heading fontSize={["xs", "xs", "xl"]} marginTop={["0px", "3px"]}>
Felipe Silveira
</Heading>
<Heading fontSize={["xs", "xs", "xl"]} marginBottom="5px">
linkedin
</Heading>
</Flex>
</Flex>
</Flex>
</>
);
};

export default Initial;



