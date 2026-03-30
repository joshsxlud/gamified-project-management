import type { DifficultyLevel } from "../difficulty/difficultyRating";

export interface StarRatingProps {
    star: {
        difficulty: DifficultyLevel;
    }
}