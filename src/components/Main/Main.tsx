import {Grid, GridItem} from "@chakra-ui/react";
import Navigator from "../Navigator/Navigator.tsx";
import GameGrid from "../GameGrid/GameGrid.tsx";
import GenreList from "../GenreList/GenreList.tsx";
import {useState} from "react";

const Main = () => {
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

    return (
        <>
            <Grid templateAreas= {{md: '"nav nav" "side main"', base: '"nav" "main"'}}>
                <GridItem area="nav">
                    <Navigator></Navigator>
                </GridItem>
                <GridItem hideBelow={"md"} area={"side"}>
                    <GenreList onSelectGenre={setSelectedGenre} />
                </GridItem>
                <GridItem area={"main"}>
                    <GameGrid selectedGenre={selectedGenre}></GameGrid>
                </GridItem>
            </Grid>
        </>
    )
};

export default Main;