import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    const result = await prisma.post.upsert({
        where: {
            id: 2
        },
        update: {
            title: "Md. Karim"
        },
        create: {
            title: "Red River",
            content: "Red River 1",
            authorName: "Md. Likhon Mia"
        }
    })
    console.log(result);
}

main();