// Used to determine the difficulty of a task where
// int is the # of stars, and string is the difficulty.
export const difficultyRating = {
    1: "easy",
    2: "medium",
    3: "intermediate",
    4: "hard",
    5: "difficult"
} as const;

// Takes the key and type from the difficultyRating const
// e.g. 1 | 2 | 3 | 4 | 5 
// associated with the difficultyRating assigned to that number
export type DifficultyLevel = keyof typeof difficultyRating;

// Takes the difficulty label from the difficultyRating const
// e.g. "easy", | "medium" | "intermediate" | etc...
export type DifficultyLabel = typeof difficultyRating[DifficultyLevel];