import type { DifficultyLevel } from "./difficulty/difficultyRating";

// Interface for creating TASKS.
export interface Task {

    // Generate this ID using UUID.
    id?: string;
    title: string;
    description: string;
    completed: boolean;

    // OPTIONAL FOR NOW. REFACTOR LATER
    difficulty?: DifficultyLevel;
}