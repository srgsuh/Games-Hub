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
    solidStar: (key: number) => <FontAwesomeIcon icon={solidStar} key={key}/>,
    halfStar: (key: number) => <FontAwesomeIcon icon={faStarHalfStroke} key={key}/>,
    emptyStar: (key: number) => <FontAwesomeIcon icon={regularStar} key={key}/>,
};

function getStarsCount(rating: number, maxRating: number, starsCount: number): [number, number] {
    const normalizedRating = (rating * starsCount) / maxRating;
    const fullStarsMin = Math.floor(normalizedRating);
    const residue = normalizedRating - fullStarsMin;
    const fullStars = fullStarsMin + ((residue >= 0.75) ? 1 : 0);
    const halfStars = ((residue >=  0.25) && (residue < 0.75)? 1: 0);
    return [fullStars, halfStars];
}

function getStarsArray(rating: number, maxRating: number, starsCount: number): ReactElement[] {
    const [fullStars, halfStars] = getStarsCount(rating, maxRating, starsCount);

    return Array.from({length: starsCount}, (_, index) => {
        return index < fullStars
            ? StarElements.solidStar(index)
            : index < fullStars + halfStars
                ? StarElements.halfStar(index)
                : StarElements.emptyStar(index);
    });
    }


const StarRater: FC<StarRaterProps> = ({rating, maxRating, starsCount = 5}) => {
    const title = `${rating} of ${maxRating}`;
    return (
        <HStack title={title}>
            <Text hideBelow={"xl"}>{title}</Text>
            {getStarsArray(rating, maxRating, starsCount)}
        </HStack>
    );
};

export default StarRater;