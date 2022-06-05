import { HStack } from "@chakra-ui/react";
import { Data } from "./Data";

export function ContinentData() {
  return (
    <HStack spacing={42}>
      <Data number={"50"} text="países" />
      <Data number={"60"} text="línguas" />
      <Data number={"27"} text="cidades +100" />
    </HStack>
  );
}
