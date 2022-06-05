import { Avatar, Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";

export function Card() {
  return (
    <Box
      width="16rem"
      height="17.4375rem"
      borderRadius="4px"
      borderWidth="1px"
      borderColor="yellow.350"
      margin="5px"
    >
      <Image
        src="London.jpg"
        alt="London"
        boxSize="100%"
        width={256}
        height={173}
        objectFit="cover"
        mt="auto"
        mx="auto"
        borderRadius="4px 4px 0 0"
      />
      <Flex justify="space-around" align="center" my="18px">
        <VStack spacing="12px" align="flex-start">
            <Text fontSize="lg" fontWeight="bold">
                Londres
            </Text>
            <Text>
                Reino Unido
            </Text>
        </VStack>
        <Avatar size='sm' name='London flag' src='London flag.png' />
      </Flex>
    </Box>
  );
}
