import { prisma } from "./client";
import {
    organizationSeedData,
    groupSeedData,
    userSeedData,
    taskSeedData,
} from "./seedData";

async function main() {
    await prisma.task.deleteMany();
    await prisma.user.deleteMany();
    await prisma.group.deleteMany();
    await prisma.organization.deleteMany();

    const organization = await prisma.organization.create({
        data: organizationSeedData[0],
    });

    const createdGroups = [];

    for (const group of groupSeedData) {
        const createdGroup = await prisma.group.create({
            data: {
                groupId: group.groupId,
                name: group.name,
                numberOfUsers: group.numberOfUsers,
                organizationId: organization.id,
            },
        });

        createdGroups.push(createdGroup);
    }

    const createdUsers = [];

    for (const user of userSeedData) {
        const matchingGroup = createdGroups.find(
            (group) => group.groupId === user.groupId
        );

        if (!matchingGroup) {
            throw new Error(`No matching group found for user ${user.username}`);
        }

        const createdUser = await prisma.user.create({
            data: {
                username: user.username,
                email: user.email,
                groupId: matchingGroup.id,
            },
        });

        createdUsers.push(createdUser);
    }

    for (const task of taskSeedData) {
        const logicalUserNumber = task.assignedId;
        const matchingUser = createdUsers[logicalUserNumber - 1];

        if (!matchingUser) {
            throw new Error(`No matching user found for task ${task.taskId}`);
        }

        await prisma.task.create({
            data: {
                taskId: task.taskId,
                assignedId: matchingUser.id,
                AssignedOn: task.AssignedOn,
                dueDate: task.dueDate,
                difficulty: task.difficulty,
                status: task.status,
                description: "description" in task ? task.description : "",
            },
        });
    }

    console.log("Database seeded successfully.");
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });