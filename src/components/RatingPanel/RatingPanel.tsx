import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import type{ReactElement} from 'react';
import {HStack, Text} from "@chakra-ui/react";

type RatingPanelProps = {
    rating: number,
};

const StarElements={
    s: <FontAwesomeIcon icon={solidStar} />,
    h: <FontAwesomeIcon icon={faStarHalfStroke} />,
    e: <FontAwesomeIcon icon={regularStar} />,
};

function getStarRange(rating:number): ReactElement[] {
    const rates = [rating-0.5, rating-1.5,rating-2.5,rating-3.5,rating- 4.5]
    return rates.map((r) => r > 0.25? "s": (r >= 0? "h": "e"))
        .map((s) => StarElements[s]);
}



const RatingPanel = ({ rating }: RatingPanelProps) => {
    return (
        <HStack>
            <Text hideBelow={"xl"}>{rating}</Text>
            {getStarRange(rating)}
        </HStack>
    );
};

export default RatingPanel;