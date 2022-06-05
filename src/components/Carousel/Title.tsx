import { Divider, Flex, Text } from "@chakra-ui/react";

export function Title() {
  return (
    <Flex align="center" justify="center" direction="column" mb={['1.25rem', '3.25rem']}>
      <Divider borderColor="gray.700" borderWidth="2px" width={90} my={["2.25rem", "3.25rem"]}/>
      <Text fontSize={["2xl", "4xl"]} fontWeight="500" noOfLines={2}>
        Vamos nessa?
      </Text>
      <Text fontSize={["2xl", "4xl"]} fontWeight="500" noOfLines={2}>
        Então escolha seu continente
      </Text>
    </Flex>
  );
};

