import {PrismaClient} from '../../generated/prisma/client';
import {PrismaPg} from '@prisma/adapter-pg';
import 'dotenv/config';

const adapter = new PrismaPg({connectionString: process.env.DATABASE_URL});
const prisma = new PrismaClient({adapter});

export async function fetchTodayPlannedWorkout() {
  try {
    console.log(`Fetching today's planned workout...`);
    const data = await prisma.workout.findFirst({
          where: {
            date: {equals: new Date()},
            completed: false
          }
        }
    )
    console.log(`Returned today's planned workout: `, data);
    return data;
  } catch (error) {
    console.error('Database error: ', error);
    throw new Error(`Failed to fetch today's planned workout`);
  }
}

export async function fetchTodayRecommendedWorkout() {
  // TODO
  return fetchTodayPlannedWorkout();
}
