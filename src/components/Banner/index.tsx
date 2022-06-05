import { Box } from "@chakra-ui/react";
import { BannerText } from "./BannerText";
import { ImageContainer } from "./ImageContainer";

export function Banner() {
  return (
    <Box>
      <BannerText />
      <ImageContainer />
    </Box>
  );
}
