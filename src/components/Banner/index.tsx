import { Flex, HStack } from "@chakra-ui/react";
import { BannerImage } from "./BannerImage";
import { BannerText } from "./BannerText";
import { ImageContainer } from "./ImageContainer";

export function Banner() {
  return (
    <Flex justify="center">
      <HStack spacing="13rem" position="absolute" zIndex={10}>
        <BannerText />
        <BannerImage />
      </HStack>
      <ImageContainer />
    </Flex>
  );
}
