import './App.css'
import {Grid, GridItem} from "@chakra-ui/react";
import Navigator from "./components/Navigator/Navigator.tsx";

function App() {
  return (
      <>
          <Grid templateAreas= {{md: '"nav nav" "side main"', base: '"nav" "main"'}}>
              <GridItem bg={"blue.300"} area="nav">
                  <Navigator></Navigator>
              </GridItem>
              <GridItem hideBelow={"md"} bg={"green.300"} area={"side"}>SIDE PAnel</GridItem>
              <GridItem bg={"violet"} area={"main"}>Main</GridItem>
          </Grid>
      </>
  )
}

export default App
