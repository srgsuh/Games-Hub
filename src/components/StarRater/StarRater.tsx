import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { useMemo } from "react";
import type{ReactElement, FC} from "react";
import {HStack, Text} from "@chakra-ui/react";

const STARS={
    solidStar: (key: number) => <FontAwesomeIcon icon={solidStar} key={key}/>,
    halfStar: (key: number) => <FontAwesomeIcon icon={faStarHalfStroke} key={key}/>,
    emptyStar: (key: number) => <FontAwesomeIcon icon={regularStar} key={key}/>,
};


type StarRaterProps = {
    starsCount?: number,
    maxRating: number,
    rating: number,
};

type StarRaterData = {
    fullStars: number,
    halfStars: number,
    starsCount: number,
};

function getStarsCount(rating: number, maxRating: number, starsCount: number)
    : StarRaterData {
    const normalizedRating = (rating * starsCount) / maxRating;
    const fullStarsMin = Math.floor(normalizedRating);
    const residue = normalizedRating - fullStarsMin;
    const fullStars = fullStarsMin + ((residue >= 0.75) ? 1 : 0);
    const halfStars = ((residue >=  0.25) && (residue < 0.75)? 1: 0);
    return {fullStars, halfStars, starsCount};
}

function getStarsArray({fullStars, halfStars, starsCount}: StarRaterData): ReactElement[] {

    return Array.from({length: starsCount}, (_, index) => {
        return index < fullStars
            ? STARS.solidStar(index)
            : index < fullStars + halfStars
                ? STARS.halfStar(index)
                : STARS.emptyStar(index);
    });
    }


const StarRater: FC<StarRaterProps> = ({rating, maxRating, starsCount = 5}) => {
    const starRaterData = useMemo(() => getStarsCount(rating, maxRating, starsCount)
            , [rating, maxRating, starsCount]);
    const title = `${rating} of ${maxRating}`;
    return (
        <HStack title={title}>
            <Text hideBelow={"xl"}>{title}</Text>
            {getStarsArray(starRaterData)}
        </HStack>
    );
};

export default StarRater;