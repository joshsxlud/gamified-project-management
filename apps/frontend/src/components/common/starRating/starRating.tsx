import { difficultyRating } from "../../../types/difficulty/difficultyRating";
import type { StarRatingProps } from "../../../types/props/starRatingProps";

export default function StarRating({star: {difficulty}}: StarRatingProps) {

    const label = difficultyRating[difficulty];
    const stars = "★".repeat(Number(label));

    return (
        <>
            <span className={label}>{stars}</span>
        </>
    )
}