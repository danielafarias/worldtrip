import { Box, Flex, HStack, useBreakpointValue } from "@chakra-ui/react";
import { BannerText } from "./BannerText";
import { ImageContainer } from "./ImageContainer";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
        <BannerText />
      <ImageContainer />
    </Box>
  );
}
