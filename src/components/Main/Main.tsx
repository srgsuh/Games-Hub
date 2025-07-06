import {Grid, GridItem} from "@chakra-ui/react";
import Navigator from "../Navigator/Navigator.tsx";
import GameGrid from "../GameGrid/GameGrid.tsx";
import GenreList from "../GenreList/GenreList.tsx";
import {useReducer} from "react";
import PlatformSelector from "../PlatfromSelector/PlatformSelector.tsx";
import {initialState, reducer} from "../../services/reducer.ts";


const Main = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {selectedGenre, selectedPlatform: platformId} = state;

    return (
        <>
            <Grid templateAreas= {{md: '"nav nav" "side main"', base: '"nav" "main"'}}>
                <GridItem area="nav">
                    <Navigator></Navigator>
                </GridItem>
                <GridItem hideBelow={"md"} area={"side"}>
                    <GenreList onSelectGenre={(genre) => dispatch({selectedGenre: genre})} selectedGenre={selectedGenre}/>
                </GridItem>
                <GridItem area={"main"}>
                    <PlatformSelector
                        onSelectPlatform={(p) => dispatch({selectedPlatform: p})}
                        selectedPlatform={platformId}>
                    </PlatformSelector>
                    <GameGrid state={state}></GameGrid>
                </GridItem>
            </Grid>
        </>
    )
};

export default Main;