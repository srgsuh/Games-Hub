import './App.css'
import {Grid, GridItem} from "@chakra-ui/react";
import Navigator from "./components/Navigator/Navigator.tsx";
import GameGrid from "./components/GameGrid/GameGrid.tsx";
import GenreList from "./components/GenreList/GenreList.tsx";

function App() {
  return (
      <>
          <Grid templateAreas= {{md: '"nav nav" "side main"', base: '"nav" "main"'}}>
              <GridItem area="nav">
                  <Navigator></Navigator>
              </GridItem>
              <GridItem hideBelow={"md"} area={"side"}>
                  <GenreList />
              </GridItem>
              <GridItem area={"main"}>
                  <GameGrid></GameGrid>
              </GridItem>
          </Grid>
      </>
  )
}

export default App
