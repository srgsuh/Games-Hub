import {Image, Stack} from "@chakra-ui/react";

const Navigator = () => {
    return (
        <Stack direction={"row"} justify={"space-between"}>
            <Image src={"src/assets/image.png"} alt={"logo"}></Image>
        </Stack>
    );
};

export default Navigator;