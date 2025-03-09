import prisma from "../src/lib/prisma.js";

async function main() {
  await prisma.users.deleteMany()

  const users = await prisma.users.createManyAndReturn({
    data: [
      {
        email: "asep@example.com",
        password: "asep",
      },
      {
        email: "hehe@example.com",
        password: "hehe",
      }
    ]
  })

  console.log(users)
}

main()
  .then(() => {
    console.log("Seeding done")
    prisma.$disconnect()
  })
  .catch((e) => {
    console.error(e)
    prisma.$disconnect()
  })
