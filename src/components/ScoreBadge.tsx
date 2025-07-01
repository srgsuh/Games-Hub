import {Badge} from "@chakra-ui/react";
import {HiEmojiHappy, HiEmojiSad} from "react-icons/hi";

interface ScoreBadgeProps {
    score: string;
}

const ScoreBadge = ({score}: ScoreBadgeProps) => {
    const isCool = (+score) > 90;
    const colorPalette = isCool? "green": "gray";
    const symbol = isCool ? <HiEmojiHappy /> : <HiEmojiSad />;
    return <Badge variant={"solid"} colorPalette={colorPalette}>{symbol}{score}</Badge>;
};

export default ScoreBadge;