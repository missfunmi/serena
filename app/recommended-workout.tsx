import {fetchTodayRecommendedWorkout} from "@/app/lib/data";

export default async function RecommendedWorkout() {
  const recommendedWorkout = await fetchTodayRecommendedWorkout();

  const duration = new Date(recommendedWorkout.plannedDuration * 1000).toISOString().slice(11, 19);

  return (
      <div className="w-full md:col-span-3">
        <div className="">Our recommended changes to your workout:</div>
        <div className="h-128 w-full rounded-xl bg-gray-200 p-4">
          <h1 className="font-bold">{recommendedWorkout.title}</h1>
          <div className="font-medium">{recommendedWorkout.sport}</div>
          <div className="">{recommendedWorkout.description}</div>
          <div className="">Duration: {duration}</div>
          <div className="">TSS: {recommendedWorkout.plannedTss}</div>
          <div className="">IF: {recommendedWorkout.plannedIf}</div>
        </div>
      </div>
  );
}