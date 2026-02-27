import { prisma } from "./lib/prisma";

async function test_prisma() {
    // create new user
    const user = await prisma.user.create({
        data: {
            name: "shifat",
            email: "shifat@gmail.com"
        }
    })
    console.log(user);
    console.log("testing")
}

async function main() {
    try {
        await test_prisma();
        console.log("prisma connected successfully")
    } catch (error) {
        console.log(error)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}

main()

