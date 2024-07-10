import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    const result = await prisma.post.create({
        data: {
            title: "Interstellar",
            content: "Explore the universe",
            authorName: "Md. Likhon Mia",
        }
    })
}

main();