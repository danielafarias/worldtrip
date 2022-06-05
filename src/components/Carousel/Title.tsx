import { Flex, Text } from "@chakra-ui/react";

export function Title() {
  return (
    <Flex align="center" justify="center" direction="column" my={52}>
      <Text fontSize="4xl" fontWeight="500" noOfLines={2}>
        Vamos nessa?
      </Text>
      <Text fontSize="4xl" fontWeight="500" noOfLines={2}>
        Então escolha seu continente
      </Text>
    </Flex>
  );
};

