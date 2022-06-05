import { Stack, Text } from "@chakra-ui/react";

export function BannerText() {
  return (
    <Stack maxWidth="32rem" mb={70} ml={["16px", 0]}>
      <Text fontSize={["2xl", "4xl"]} color="gray.50">
        5 Continentes, infinitas possibilidades.
      </Text>
      <Text fontSize={["sm", "lg"]} color="gray.100">
        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
      </Text>
    </Stack>
  );
}
