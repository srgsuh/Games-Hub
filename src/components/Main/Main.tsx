import {Grid, GridItem, HStack} from "@chakra-ui/react";
import Navigator from "../Navigator/Navigator.tsx";
import GameGrid from "../GameGrid/GameGrid.tsx";
import GenreList from "../GenreList/GenreList.tsx";
import PlatformSelector from "../PlatfromSelector/PlatformSelector.tsx";
import SortOrderSelector from "../SortOrderSelector/SortOrderSelector.tsx";
import {Box} from "@chakra-ui/react";
import GenreMenu from "../GenreMenu/GenreMenu.tsx";


const Main = () => {
    return (
        <>
            <Grid templateAreas= {{md: '"nav nav" "side main"', base: '"nav" "main"'}}
            templateColumns={{base: "1fr", md: "2fr 5fr", lg: "2fr 7fr", xl: "1fr 4fr"}}
            gap={{base: "0", md: "4"}}
            height={"100vh"}
            width={"100vw"}
            padding={"0"}
            margin={"0"}
            style={{overflow: "hidden"}}>
                <GridItem area="nav">
                    <Navigator />
                </GridItem>
                <GridItem hideBelow={"md"} area={"side"}>
                    <GenreList />
                </GridItem>
                <GridItem area={"main"}>
                    <HStack padding={"1"} justifyContent={"flex-start"} alignItems={"center"} wrap={"wrap"}>
                        <PlatformSelector />
                        <SortOrderSelector />
                        <Box display={{base: "none", sm: "block", md: "none"}}>
                            <GenreMenu />
                        </Box>
                    </HStack>
                    <GameGrid />
                </GridItem>
            </Grid>
        </>
    )
};

export default Main;