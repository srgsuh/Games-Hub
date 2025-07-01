import {Badge} from "@chakra-ui/react";
import {CiFaceMeh, CiFaceSmile, CiFaceFrown} from "react-icons/ci";
import type {ReactElement} from "react";

interface ScoreBadgeProps {
    score: number;
}

function getBadgeParameters(score: number):{color:string, bg: string, emoji: ReactElement} {
    return (score > 90)? {color: "white", bg: "green", emoji: <CiFaceSmile />}:
        (score > 81)? {color: "black", bg: "gray.400", emoji: <CiFaceMeh />}:
            {color: "black", bg: "red.300", emoji: <CiFaceFrown />}
}

const ScoreBadge = ({score}: ScoreBadgeProps) => {
    const {emoji, ...colorParams} = getBadgeParameters(score);
    return (<Badge {...colorParams}>{emoji}{score}</Badge>);
};

export default ScoreBadge;