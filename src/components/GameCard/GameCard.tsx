import {Box, Heading, Image, Text} from "@chakra-ui/react";
import {Card, CardHeader, CardBody, CardFooter} from '@chakra-ui/card';
import {Divider} from "@chakra-ui/layout";
import type {Game} from "../../model/FetchTypes.ts";

interface GameCardProps {
    game: Game;
}

const GameCard = ({game}: GameCardProps) => {
    const {
        name,
        background_image,
        metacritic,
        platforms,
    } = game;
    return (<Card>
        <CardHeader>
            <Heading size={"lg"}>{name}</Heading>
        </CardHeader>
        <Divider />
        <CardBody>
            <Image src={background_image} alt={name} height="100%" borderRadius="md" />
        </CardBody>
        <Divider />
        <CardFooter flexDirection={"column"}>
            <Box>
                <Heading size={"md"}>Metacritic score: </Heading>
                <Text>{metacritic}</Text>
            </Box>
            {!!platforms.length && <Box>
                <Heading size={"md"}>Platforms: </Heading>
                <Text>{platforms.map(p=>p.platform.name).join(', ')}</Text>
            </Box>}
        </CardFooter>
    </Card>);
};

export default GameCard;