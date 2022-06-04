import { Icon, IconButton } from "@chakra-ui/react";
import { IoIosArrowBack } from 'react-icons/io'

export function BackButton() {
    return (
        <IconButton
            aria-label="Back to homepage"
            icon={<Icon as={IoIosArrowBack} color="gray.700"/>}
            colorScheme="whiteAlpha.50"
        />
    );
}