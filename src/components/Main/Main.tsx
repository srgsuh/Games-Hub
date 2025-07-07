import {Grid, GridItem, HStack} from "@chakra-ui/react";
import Navigator from "../Navigator/Navigator.tsx";
import GameGrid from "../GameGrid/GameGrid.tsx";
import GenreList from "../GenreList/GenreList.tsx";
import {useReducer} from "react";
import PlatformSelector from "../PlatfromSelector/PlatformSelector.tsx";
import {initialState, reducer} from "../../services/reducer.ts";
import SortOrderSelector from "../SortOrderSelector/SortOrderSelector.tsx";


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
                    <HStack padding={"1"} justifyContent={"flex-start"} alignItems={"center"}>
                        <PlatformSelector
                            onSelectPlatform={(p) => dispatch({selectedPlatform: p})}
                            selectedPlatform={platformId}>
                        </PlatformSelector>
                        <SortOrderSelector
                            onOrderSelect={(order)=> dispatch({sortOrder: order})}>
                        </SortOrderSelector>
                    </HStack>
                    <GameGrid state={state}></GameGrid>
                </GridItem>
            </Grid>
        </>
    )
};

export default Main;