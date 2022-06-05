import { Flex } from "@chakra-ui/react";
import { Type } from "./Type";

export function TravelTypes() {
  return (
    <Flex justify="space-around" align="center" my={["2.25rem", "5rem"]} flexWrap="wrap" mx={[50, 0]}>
      <Type imageName="cocktail" text="vida noturna" />
      <Type imageName="surf" text="praia" />
      <Type imageName="building" text="moderno" />
      <Type imageName="museum" text="clássico" />
      <Type imageName="earth" text="e mais..." />
    </Flex>
  );
}
