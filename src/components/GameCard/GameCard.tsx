import {Heading, HStack, Image, Text} from "@chakra-ui/react";
import { Card } from "@chakra-ui/react"
import {Divider} from "@chakra-ui/layout";
import type {Game} from "../../model/FetchGameTypes.ts";
import ScoreBadge from "../ScoreBadge/ScoreBadge.tsx";
import RatingPanel from "../RatingPanel/RatingPanel.tsx";

interface GameCardProps {
    game: Game;
}

const GameCard =
    ({game: {
        name,
        background_image,
        metacritic,
        rating,
        parent_platforms: platforms,
    }}: GameCardProps) => {

    return (<Card.Root overflow={"hidden"} >
        <Card.Header>
            <Heading size={"lg"}>{name}</Heading>
        </Card.Header>
        <Divider />
        <Card.Body>
            <Image 
                src={background_image}
                alt={name}
                height="100%"
                objectFit="cover"
                borderRadius="md"
            />
        </Card.Body>
        <Divider />
        <Card.Footer flexDirection={"column"} alignItems={"flex-start"}>
            <HStack justifyContent={"space-between"} w={"100%"}>
                <HStack hideBelow={"lg"} justifyContent={"flex-start"}>
                    <RatingPanel rating = {rating}></RatingPanel>
                </HStack>
                <HStack justifyContent={"flex-end"}>
                    <ScoreBadge score={metacritic}></ScoreBadge>
                </HStack>
            </HStack>
            {platforms && (
                <Text>
                    {platforms.map(({platform}) => platform.name).join(', ')}
                </Text>
            )}
        </Card.Footer>
    </Card.Root>);
};

export default GameCard;