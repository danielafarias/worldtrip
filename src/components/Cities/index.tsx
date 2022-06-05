import { Box, Flex, Text } from "@chakra-ui/react";
import { Card } from "./Card";

export function Cities() {
  return (
    <Box mx={["16px", "140px"]} mb="35px">
      <Text fontSize={["2xl", "4xl"]} fontWeight="500" mb="40px">
        Cidades +100
      </Text>
      <Flex justify="space-between" wrap="wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Flex>
    </Box>
  );
}
