import { Stack, Text } from "@chakra-ui/react";

export function BannerText() {
  return (
    <Stack maxWidth="32rem" mb={70}>
      <Text fontSize="4xl" color="gray.50">
        5 Continentes, <br /> infinitas possibilidades.
      </Text>
      <Text fontSize="lg" color="gray.100">
        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
      </Text>
    </Stack>
  );
}
