import { Stack, Text } from "@chakra-ui/react";

export function BannerText() {
  return (
    <Stack maxWidth="32rem" mb={70}>
      <Text fontSize="4xl" color="gray.50" noOfLines={2}>
        5 Continentes, infinitas possibilidades.
      </Text>
      <Text fontSize="lg" color="gray.100" noOfLines={2}>
        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
      </Text>
    </Stack>
  );
}
