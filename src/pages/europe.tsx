import { Box, VStack } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { DescriptionContainer } from "../components/DescriptionContainer";

export default function Europe() {
  return (
    <Box>
      <Banner />
      <VStack spacing="5rem">
          <DescriptionContainer />
      </VStack>
    </Box>
  );
}
