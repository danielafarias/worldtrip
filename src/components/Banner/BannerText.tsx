import { Flex, Text } from "@chakra-ui/react";

export function BannerText() {
  return (
    <Flex
      align={["center", "flex-end"]}
      justify={["center", "flex-start"]}
      width="100%"
      height={[150, 500]}
      position="absolute"
      zIndex={10}
    >
      <Text
        fontSize={["3xl", "4xl"]}
        color="gray.50"
        mb={[0, 59]}
        ml={[0, 140]}
      >
        Europa
      </Text>
    </Flex>
  );
}
