import Image from "next/image";
import {inter} from "@/app/ui/fonts";
import PlannedWorkout from "@/app/planned-workout";
import RecommendedWorkout from "@/app/recommended-workout";

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const today = new Date().toLocaleDateString("en-US", dateOptions);

export default function Home() {
  return (
      <div className="">
        <main className="p-8">
          <h1 className="text-2xl font-bold text-zinc-900">Your workout recommendation
            for {today}:</h1>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-12">
            <PlannedWorkout/>
            <div className="flex h-128 w-full items-center md:col-span-2">Based on your body
              metrics
            </div>
            <RecommendedWorkout/>
            <div className="flex h-128 w-full items-center md:col-span-3">Would you like to implement
              these changes?
            </div>
          </div>
        </main>
      </div>
  );
}
