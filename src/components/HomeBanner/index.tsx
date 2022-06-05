import { Flex, HStack, useBreakpointValue } from "@chakra-ui/react";
import { BannerImage } from "./BannerImage";
import { BannerText } from "./BannerText";
import { ImageContainer } from "./ImageContainer";

export function HomeBanner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex justify="center">
      <HStack spacing="13rem" position="absolute" zIndex={10}>
        <BannerText />
        {isWideVersion && <BannerImage />}
      </HStack>
      <ImageContainer />
    </Flex>
  );
}
