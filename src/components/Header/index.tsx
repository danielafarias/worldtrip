import { Flex } from "@chakra-ui/react";
import { BackButton } from "./BackButton";
import { Logo } from "./Logo";

export function Header() {
  return (
    <Flex
        as="header"
        width="100%"
        align="center"
        justify="center"
        maxHeight={100}
    >
      <Logo />
    </Flex>
  );
}
