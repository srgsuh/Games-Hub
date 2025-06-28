import {Image, Stack} from "@chakra-ui/react";
import {ColorModeButton} from "../ui/color-mode.tsx";

const Navigator = () => {
    return (
        <Stack bg={{base: "white", _dark: "black"}} direction={"row"} justify={"space-between"}>
            <Image height={"4em"} src={"src/assets/image.png"} alt={"logo"} title={"logo"}></Image>
            <ColorModeButton height={"4em"}></ColorModeButton>
        </Stack>
    );
};

export default Navigator;