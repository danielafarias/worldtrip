import { Box, VStack } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Cities } from "../components/Cities";
import { DescriptionContainer } from "../components/DescriptionContainer";

export default function Europe() {
  return (
    <Box>
      <Banner />
          <DescriptionContainer />
          <Cities />
    </Box>
  );
}
