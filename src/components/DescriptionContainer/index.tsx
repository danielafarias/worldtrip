import { Stack, Text } from "@chakra-ui/react";
import { ContinentData } from "./ContinentData";

export function DescriptionContainer() {
  return (
    <Stack
      direction={["column", "row"]}
      spacing={[16, 70]}
      mx={["16px", "140px"]}
      my={["24px", "80px"]}
    >
      <Text textAlign="justify" maxHeight={[146, 211]} width={[343, 600]}>
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <ContinentData />
    </Stack>
  );
}
