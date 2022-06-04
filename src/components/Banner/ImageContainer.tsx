import { Image } from "@chakra-ui/react";

export function ImageContainer() {
  return (
    <Image
      src="Background.png"
      alt="Background Image"
      boxSize="100%"
      objectFit="scale-down"
      position="relative"
    />
  );
}
