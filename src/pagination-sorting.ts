import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // const result = await prisma.post.findMany({
    //     skip: 5,
    //     take: 2
    // })
    // console.log(result);

    // const result = await prisma.post.findMany({
    //     skip: 5,
    //     take: 2,
    //     cursor : {
    //        id: 30   
    //     }
    // })
    // console.log(result);

    const result = await prisma.post.findMany({
        orderBy: {
            id: "desc"
        },
        take: 2,
        skip: 3,
        where: {
            title: "Galactic Odyssey 5"
        }
    })
    console.log(result)
}

main();