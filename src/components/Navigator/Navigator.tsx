import logo from "../../assets/image.png";
import {Image, Stack} from "@chakra-ui/react";
import {ColorModeButton} from "../ui/color-mode.tsx";
import SearchBar from "../SearchBar/SearchBar.tsx";

type NavigatorProps = {
    onSearch: (query: string) => void
};

const Navigator = ({onSearch}: NavigatorProps) => {
    return (
        <Stack bg={{base: "white", _dark: "black"}} direction={"row"} justify={"space-between"}>
            <Image boxSize={"12"} src={logo} alt={"logo"} title={"logo"}></Image>
            <SearchBar onSearch={onSearch}></SearchBar>
            <ColorModeButton boxSize={"12"}></ColorModeButton>
        </Stack>
    );
};

export default Navigator;