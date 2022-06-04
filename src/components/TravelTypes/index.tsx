import { Flex, HStack } from "@chakra-ui/react";
import { Type } from "./Type";

export function TravelTypes() {
  return (
    <Flex justify="space-around" align="center" my="5rem">
      <Type imageName="cocktail" text="vida noturna" />
      <Type imageName="surf" text="praia" />
      <Type imageName="building" text="moderno" />
      <Type imageName="museum" text="clássico" />
      <Type imageName="earth" text="e mais..." />
    </Flex>
  );
}
