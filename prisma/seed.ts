import {users, workouts} from '../app/lib/seed-data';
import {PrismaClient} from '../generated/prisma/client';
import {PrismaPg} from '@prisma/adapter-pg';
import 'dotenv/config';

const adapter = new PrismaPg({connectionString: process.env.DATABASE_URL});
const prisma = new PrismaClient({adapter});

export async function main() {
  await prisma.workout.deleteMany({});

  const createdUsers = [];
  for (const user of users) {
    const dbUser = await prisma.user.upsert({
      where: {email: user.email},
      update: user,
      create: user,
    });
    createdUsers.push(dbUser);
  }

  for (const workout of workouts) {
    await prisma.workout.create({
      data: {
        ...workout,
        userId: createdUsers[0].id

      },
    });
  }
}

main()
.then(async () => {
  await prisma.$disconnect()
})
.catch(async e => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});