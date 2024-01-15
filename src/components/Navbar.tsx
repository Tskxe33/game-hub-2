import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import Logo from "../assets/logo.webp";
const Navbar = () => {
  return (
    <HStack>
      <Image src={Logo} boxSize="60px" />
    </HStack>
  );
};

export default Navbar;
