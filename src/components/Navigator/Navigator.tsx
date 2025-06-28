import {Image, Stack} from "@chakra-ui/react";

const Navigator = () => {
    return (
        <Stack bg={{base: "white", _dark: "black"}} direction={"row"} justify={"space-between"}>
            <Image height={"4em"} src={"src/assets/image.png"} alt={"logo"} title={"logo"}></Image>
        </Stack>
    );
};

export default Navigator;