// NOTE: seed data was generated using an LLM.

export const organizationSeedData = [
    {
        name: "OpusQuest Inc.",
    },
];

export const groupSeedData = [
    { name: "Alpha Team", numberOfUsers: 3, organizationId: 1 },
    { name: "Beta Team", numberOfUsers: 3, organizationId: 1 },
    { name: "Gamma Team", numberOfUsers: 3, organizationId: 1 },
];

export const userSeedData = [
    // Group 1
    { username: "user1", email: "user1@example.com", groupId: 1 },
    { username: "user2", email: "user2@example.com", groupId: 1 },
    { username: "user3", email: "user3@example.com", groupId: 1 },

    // Group 2
    { username: "user4", email: "user4@example.com", groupId: 2 },
    { username: "user5", email: "user5@example.com", groupId: 2 },
    { username: "user6", email: "user6@example.com", groupId: 2 },

    // Group 3
    { username: "user7", email: "user7@example.com", groupId: 3 },
    { username: "user8", email: "user8@example.com", groupId: 3 },
    { username: "user9", email: "user9@example.com", groupId: 3 },
];

const difficulties = ["Easy", "Medium", "Hard"];
const descriptions = [
    "Finish dashboard UI",
    "Fix API bug",
    "Write unit tests",
    "Refactor service layer",
    "Update documentation",
];

// generate 45 tasks (5 per user)
export const taskSeedData = Array.from({ length: 45 }, (_, i) => {
    const userId = Math.floor(i / 5) + 1;

    const baseTask = {
        assignedId: userId,
        assignedOn: `2026-03-${10 + (i % 5)}`,
        dueDate: `2026-04-${5 + (i % 5)}`,
        difficulty: difficulties[i % difficulties.length],
        status: i % 2 === 0,
    };

    if (i % 2 === 0) {
        return {
            ...baseTask,
            description: descriptions[i % descriptions.length],
        };
    }

    return {
        ...baseTask,
        description: "",
    };
});