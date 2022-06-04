import { Image, Text, VStack } from "@chakra-ui/react";

interface TypeProps {
  imageName: string;
  text: string;
}

export function Type({ imageName, text }: TypeProps) {
  return (
    <VStack>
      <Image
        src={`${imageName}.png`}
        alt={imageName}
        objectFit="scale-down"
        boxSize={85}
      />
      <Text fontSize="xl" fontWeight="bold">
        {text}
      </Text>
    </VStack>
  );
}
