import {Heading, HStack, Image, Text} from "@chakra-ui/react";
import { Card } from "@chakra-ui/react"
import {Divider} from "@chakra-ui/layout";
import type {Game} from "../../model/FetchTypes.ts";
import ScoreBadge from "../ScoreBadge.tsx";

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
    return (<Card.Root>
        <Card.Header>
            <Heading size={"lg"}>{name}</Heading>
        </Card.Header>
        <Divider />
        <Card.Body>
            <Image src={background_image} alt={name} height="100%" borderRadius="md" />
        </Card.Body>
        <Divider />
        <Card.Footer flexDirection={"column"} alignItems={"flex-start"}>
            <HStack justifyContent={"flex-start"}>
                <Heading size={"md"}>Metacritic: </Heading>
                <ScoreBadge score={metacritic}></ScoreBadge>
            </HStack>
            {!!platforms.length &&
                <Text>{platforms.map(p=>p.platform.name).join(', ')}</Text>
            }
        </Card.Footer>
    </Card.Root>);
};

export default GameCard;