import { Image } from "@chakra-ui/react";

export function Logo() {
    return (
        <Image 
            src="Logo.png"
            alt="Logo"
            boxSize="11.5rem"
            objectFit="scale-down"
        />
    );
}