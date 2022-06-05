import { Image } from "@chakra-ui/react";

export function ImageContainer() {
  return (
    <Image
      src="Background.jpg"
      alt="Background Image"
      boxSize="100%"
      objectFit="cover"
      height={[163, 335]}
      width="100%"
      maxHeight={335}
      position="relative"
    />
  );
}
