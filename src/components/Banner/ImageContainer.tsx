import { Image } from "@chakra-ui/react";

export function ImageContainer() {
  return (
    <Image
      src="London.jpg"
      alt="London"
      boxSize="100%"
      objectFit="cover"
      height={[150, 500]}
      width="100%"
      maxHeight={500}
      position="relative"
    />
  );
}
