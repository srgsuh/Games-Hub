import {Grid, GridItem} from "@chakra-ui/react";
import Navigator from "../Navigator/Navigator.tsx";
import GameGrid from "../GameGrid/GameGrid.tsx";
import GenreList from "../GenreList/GenreList.tsx";
import {useState} from "react";
import PlatformSelector from "../PlatfromSelector/PlatformSelector.tsx";
import type {PlatformData} from "../../model/FetchGameTypes.ts";

const Main = () => {
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<PlatformData | null>(null);
    const platformId = selectedPlatform?.id || null;

    return (
        <>
            <Grid templateAreas= {{md: '"nav nav" "side main"', base: '"nav" "main"'}}>
                <GridItem area="nav">
                    <Navigator></Navigator>
                </GridItem>
                <GridItem hideBelow={"md"} area={"side"}>
                    <GenreList onSelectGenre={setSelectedGenre} selectedGenre={selectedGenre}/>
                </GridItem>
                <GridItem area={"main"}>
                    <PlatformSelector
                        onSelectPlatform={(p) => setSelectedPlatform(p)}
                        selectedPlatform={selectedPlatform}>
                    </PlatformSelector>
                    <GameGrid selectedGenre={selectedGenre} platformId = {platformId}></GameGrid>
                </GridItem>
            </Grid>
        </>
    )
};

export default Main;