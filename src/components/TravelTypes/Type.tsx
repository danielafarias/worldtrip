import { Image, Text, Stack, useBreakpointValue, Icon } from "@chakra-ui/react";
import { VscCircleFilled } from "react-icons/vsc";

interface TypeProps {
  imageName: string;
  text: string;
}

export function Type({ imageName, text }: TypeProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Stack direction={["row", "column"]} align="center" justify="center">
      {isWideVersion ? (
        <Image
          src={`${imageName}.png`}
          alt={imageName}
          objectFit="scale-down"
          boxSize={85}
        />
      ) : (
        <Icon as={VscCircleFilled} color="yellow.400" />
      )}
      <Text fontSize="xl" fontWeight="bold">
        {text}
      </Text>
    </Stack>
  );
}
