import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import type{ReactElement, FC} from 'react';
import {HStack, Text} from "@chakra-ui/react";

type StarRaterProps = {
    starsCount?: number,
    maxRating: number,
    rating: number,
};

const StarElements={
    solidStar: <FontAwesomeIcon icon={solidStar} />,
    halfStar: <FontAwesomeIcon icon={faStarHalfStroke} />,
    emptyStar: <FontAwesomeIcon icon={regularStar} />,
};

function getStarsArray(rating: number, maxRating: number, starsCount: number): ReactElement[] {
    const normalizedRating = (rating * starsCount) / maxRating;
    const lowerBound = Math.floor(normalizedRating);
    const residue = normalizedRating - lowerBound;
    const fullStars = lowerBound + (residue >= 0.75) ? 1 : 0;
    const halfStars = (residue >=  0.25)? 1: 0;

    return Array.from({length: starsCount}, (_, index) => {
        return index < fullStars
            ? StarElements.solidStar
            : index < fullStars + halfStars
                ? StarElements.halfStar
                : StarElements.emptyStar;
    });
    }


const StarRater: FC<StarRaterProps> = ({rating, maxRating, starsCount = 5}) => {
    return (
        <HStack>
            <Text hideBelow={"xl"}>{rating} of {maxRating}</Text>
            {getStarsArray(rating, maxRating, starsCount)}
        </HStack>
    );
};

export default StarRater;