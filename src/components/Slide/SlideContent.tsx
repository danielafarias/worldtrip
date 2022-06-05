import { Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SlideContentProps {
  countryName: string;
  description: string;
  imageName: string;
}

export function SlideContent({
  countryName,
  description,
  imageName,
}: SlideContentProps) {
  return (
    <>
      <Flex
        position="absolute"
        zIndex={10}
        align="center"
        justify="center"
        direction="column"
        width="100%"
        height="100%"
      >
        <Link href={`/${imageName.toLowerCase()}`}>
          <Text fontSize="4xl" color="gray.50" fontWeight="bold" cursor="pointer" _hover={{
          color: "yellow.400",
        }}>
            {countryName}
          </Text>
        </Link>
        <Text fontSize="xl" color="gray.50" fontWeight="bold">
          {description}
        </Text>
      </Flex>
      <Image
        src={`${imageName}.jpg`}
        boxSize="100%"
        alt={imageName}
        position="relative"
      />
    </>
  );
}
