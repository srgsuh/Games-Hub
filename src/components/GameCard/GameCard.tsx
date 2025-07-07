import {Heading, HStack, Image, Text} from "@chakra-ui/react";
import { Card } from "@chakra-ui/react"
import {Divider} from "@chakra-ui/layout";
import type {Game} from "../../model/FetchGameTypes.ts";
import ScoreBadge from "../ScoreBadge/ScoreBadge.tsx";
import StarRater from "../StarRater/StarRater.tsx";
import no_image from "../../assets/no_image.jpg";

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
                src={background_image || no_image}
                alt={`Image for the game ${name}`}
                height="100%"
                objectFit="cover"
                borderRadius="md"
            />
        </Card.Body>
        <Divider />
        <Card.Footer flexDirection={"column"} alignItems={"flex-start"}>
            <HStack justifyContent={"space-between"} w={"100%"}>
                <HStack hideBelow={"lg"} justifyContent={"flex-start"}>
                    <StarRater rating = {rating} maxRating={5} starsCount={5}></StarRater>
                </HStack>
                <HStack justifyContent={"flex-end"} title={`Metacritic: ${metacritic}`}>
                    <ScoreBadge score={metacritic}></ScoreBadge>
                </HStack>
            </HStack>
            {platforms && (
                <Text>
                    {platforms?.map(({platform}) => platform.name).join(', ')}
                </Text>
            )}
        </Card.Footer>
    </Card.Root>);
};

export default GameCard;