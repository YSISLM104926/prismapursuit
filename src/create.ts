import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    const result = await prisma.post.createMany({
        data: [

            {
                title: "Galactic Odyssey 1",
                content: "Navigate the cosmos 1",
                authorName: "Alice Johnson"
            },
            {
                title: "Galactic Odyssey 2",
                content: "Navigate the cosmos 2",
                authorName: "Bob Smith"
            },
            {
                title: "Galactic Odyssey 3",
                content: "Navigate the cosmos 3",
                authorName: "Charlie Brown"
            },
            {
                title: "Galactic Odyssey 4",
                content: "Navigate the cosmos 4",
                authorName: "Diana Prince"
            },
            {
                title: "Galactic Odyssey 5",
                content: "Navigate the cosmos 5",
                authorName: "Ethan Hunt"
            },
            {
                title: "Galactic Odyssey 6",
                content: "Navigate the cosmos 6",
                authorName: "Fiona Gallagher"
            },
            {
                title: "Galactic Odyssey 7",
                content: "Navigate the cosmos 7",
                authorName: "George Michael"
            },
            {
                title: "Galactic Odyssey 8",
                content: "Navigate the cosmos 8",
                authorName: "Hannah Montana"
            },
            {
                title: "Galactic Odyssey 9",
                content: "Navigate the cosmos 9",
                authorName: "Isaac Newton"
            },
            {
                title: "Galactic Odyssey 10",
                content: "Navigate the cosmos 10",
                authorName: "Jane Austen"
            },
            {
                title: "Cosmic Journey 1",
                content: "Explore uncharted worlds 1",
                authorName: "Ken Adams"
            },
            {
                title: "Cosmic Journey 2",
                content: "Explore uncharted worlds 2",
                authorName: "Laura Palmer"
            },
            {
                title: "Cosmic Journey 3",
                content: "Explore uncharted worlds 3",
                authorName: "Michael Scott"
            },
            {
                title: "Cosmic Journey 4",
                content: "Explore uncharted worlds 4",
                authorName: "Nancy Drew"
            },
            {
                title: "Cosmic Journey 5",
                content: "Explore uncharted worlds 5",
                authorName: "Oscar Wilde"
            },
            {
                title: "Cosmic Journey 6",
                content: "Explore uncharted worlds 6",
                authorName: "Pam Beesly"
            },
            {
                title: "Cosmic Journey 7",
                content: "Explore uncharted worlds 7",
                authorName: "Quentin Tarantino"
            },
            {
                title: "Cosmic Journey 8",
                content: "Explore uncharted worlds 8",
                authorName: "Rachel Green"
            },
            {
                title: "Stellar Expedition 1",
                content: "Discover distant galaxies 1",
                authorName: "Sherlock Holmes"
            },
            {
                title: "Stellar Expedition 2",
                content: "Discover distant galaxies 2",
                authorName: "Tony Stark"
            },
            {
                title: "Stellar Expedition 3",
                content: "Discover distant galaxies 3",
                authorName: "Uma Thurman"
            },
            {
                title: "Stellar Expedition 4",
                content: "Discover distant galaxies 4",
                authorName: "Vince Vaughn"
            },
            {
                title: "Stellar Expedition 5",
                content: "Discover distant galaxies 5",
                authorName: "Wanda Maximoff"
            },
            {
                title: "Stellar Expedition 6",
                content: "Discover distant galaxies 6",
                authorName: "Xander Harris"
            },
            {
                title: "Stellar Expedition 7",
                content: "Discover distant galaxies 7",
                authorName: "Yara Greyjoy"
            },
            {
                title: "Stellar Expedition 8",
                content: "Discover distant galaxies 8",
                authorName: "Zoe Saldana"
            },
            {
                title: "Nebula Quest 1",
                content: "Search the stars 1",
                authorName: "Arthur Conan Doyle"
            },
            {
                title: "Nebula Quest 2",
                content: "Search the stars 2",
                authorName: "Bilbo Baggins"
            },
            {
                title: "Nebula Quest 3",
                content: "Search the stars 3",
                authorName: "Cersei Lannister"
            },
            {
                title: "Nebula Quest 4",
                content: "Search the stars 4",
                authorName: "Derek Shepherd"
            },
            {
                title: "Nebula Quest 5",
                content: "Search the stars 5",
                authorName: "Elle Woods"
            }
        ]
    })
    console.log(result);
}

main();