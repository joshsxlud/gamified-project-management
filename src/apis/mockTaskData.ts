import type { Task } from "../types/taskType";

// Sample taskData
export const taskData: Task[] = [
    {
      title: "Design Landing Page Layout",
      description: "Create responsive layout using Tailwind grid and spacing utilities.",
      completed: true,
      difficulty: 2,
    },
    {
      title: "Implement Task Creation Form",
      description: "Build controlled inputs and validation for creating new tasks.",
      completed: false,
      difficulty: 4,
    },
    {
      title: "Refactor TaskCard to Use Props",
      description: "Remove hardcoded values and pass task data dynamically.",
      completed: true,
      difficulty: 3,
    },
    {
      title: "Add Star Rating Component",
      description: "Display visual difficulty indicator based on task difficulty.",
      completed: false,
      difficulty: 2,
    },
    {
      title: "Setup useTasks Custom Hook",
      description: "Centralize task logic including create, update, and delete functions.",
      completed: false,
      difficulty: 5,
    },
    {
      title: "Add Dark Mode Toggle",
      description: "Persist theme selection using localStorage.",
      completed: true,
      difficulty: 1,
    },
    {
      title: "Create Dashboard Stats Section",
      description: "Display total tasks, completed tasks, and progress overview.",
      completed: false,
      difficulty: 4,
    },
    {
      title: "Improve UI Shadow Consistency",
      description: "Standardize shadow styling across components.",
      completed: true,
      difficulty: 1,
    },
    {
      title: "Optimize Task Rendering",
      description: "Prevent unnecessary re-renders using memoization where appropriate.",
      completed: false,
      difficulty: 5,
    },
    {
      title: "Write Project Documentation",
      description: "Document task model, difficulty system, and custom hooks.",
      completed: false,
      difficulty: 1,
    },
  ];