import logo from "../../assets/image.png";
import {Image, Stack} from "@chakra-ui/react";
import {ColorModeButton} from "../ui/color-mode.tsx";

const Navigator = () => {
    return (
        <Stack bg={{base: "white", _dark: "black"}} direction={"row"} justify={"space-between"}>
            <Image boxSize={"12"} src={logo} alt={"logo"} title={"logo"}></Image>
            <ColorModeButton boxSize={"12"}></ColorModeButton>
        </Stack>
    );
};

export default Navigator;