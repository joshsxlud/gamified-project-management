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

    const createdOrganizations = [];
    for (const organization of organizationSeedData) {
        const createdOrganization = await prisma.organization.create({
            data: organization,
        });
        createdOrganizations.push(createdOrganization);
    }

    const createdGroups = [];
    for (const group of groupSeedData) {
        const createdGroup = await prisma.group.create({
            data: {
                name: group.name,
                numberOfUsers: group.numberOfUsers,
                organizationId: group.organizationId,
            },
        });
        createdGroups.push(createdGroup);
    }

    const createdUsers = [];
    for (const user of userSeedData) {
        const matchingGroup = createdGroups.find(
            (group) => group.id === user.groupId
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
        const matchingUser = createdUsers.find(
            (user) => user.id === task.assignedId
        );

        if (!matchingUser) {
            throw new Error(`No matching user found for task assignedId ${task.assignedId}`);
        }

        await prisma.task.create({
            data: {
                assignedId: matchingUser.id,
                assignedOn: task.assignedOn,
                dueDate: task.dueDate,
                difficulty: task.difficulty,
                status: task.status,
                description: task.description,
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