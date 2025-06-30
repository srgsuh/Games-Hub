import {Box, Image, Stack} from "@chakra-ui/react";

interface GameCardProps {
    name: string;
    background_image: string;
    height: string;
    width: string;
}

const GameCard = ({name, background_image, height, width}: GameCardProps) => {
    return (
        <Box>
            <Stack direction="column" justify="center" alignItems="center">
                <Image src={background_image}
                       alt={name}
                       height={height}
                       width={width}
                />
                <span>{name}</span>
            </Stack>
        </Box>
    );
};

export default GameCard;