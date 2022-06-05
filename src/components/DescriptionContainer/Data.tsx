import { Image, Text, Stack, useBreakpointValue, Icon } from "@chakra-ui/react";
import { VscCircleFilled } from "react-icons/vsc";

interface TypeProps {
  number: string;
  text: string;
}

export function Data({ number, text }: TypeProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Stack direction="column" align="center" justify="center">
      <Text fontSize="4xl" fontWeight="bold" color="yellow.400">
        {number}
      </Text>
      <Text fontSize={["lg", "xl"]} fontWeight="bold">
        {text}
      </Text>
    </Stack>
  );
}
