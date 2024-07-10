import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    const result = await prisma.post.findFirstOrThrow({
        where: {
            id: 2
        }
    })
    console.log(result);
}

main();