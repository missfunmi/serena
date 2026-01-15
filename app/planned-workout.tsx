import {fetchTodayPlannedWorkout} from "@/app/lib/data";

export default async function PlannedWorkout() {
  const plannedWorkout = await fetchTodayPlannedWorkout();

  const duration = new Date(plannedWorkout.plannedDuration * 1000).toISOString().slice(11, 19);

  return (
      <div className="w-full md:col-span-3">
        <div className="">Your original planned workout:</div>
        <div className="h-128 w-full rounded-xl bg-gray-200 p-4">
          <h1 className="font-bold">{plannedWorkout.title}</h1>
          <div className="font-medium">{plannedWorkout.sport}</div>
          {/*<div className="text-sm">{plannedWorkout.description}</div>*/}
          <div className="">Duration: {duration}</div>
          <div className="">TSS: {plannedWorkout.plannedTss}</div>
          <div className="">IF: {plannedWorkout.plannedIf}</div>

          <div className="">
            <h2 className="font-medium">Workout details:</h2>
            <div className="text-sm pl-2">
              {plannedWorkout.workoutStructure.map((workoutEntry, index) => {
                const isRepeat = workoutEntry.type === "repeat";
                const workoutEntryIndex = "workoutEntry-" + index;
                const distanceUnit = plannedWorkout.distanceUnit;
                return (
                    isRepeat ? (
                        <div key={workoutEntryIndex} className="">
                          {workoutEntry.type} {workoutEntry.iterations}x [
                          {workoutEntry.steps.map((step, index) => {
                            const stepIndex = "step-" + index;
                            return (
                                <div key={stepIndex} className="pl-2">
                                  {step.type}:&nbsp;
                                  {step.duration ?
                                      <span className="">{step.duration} seconds</span> : null}
                                  {step.distance ?
                                      <span
                                          className="">{step.distance} {distanceUnit}</span> : null}
                                  {step.target && step.target.zone ?
                                      <span className="">, zone {step.target.zone}</span> : null}
                                </div>
                            );
                          })}
                          ]
                        </div>
                    ) : (
                        <div key={workoutEntryIndex} className="">
                          {workoutEntry.type}:&nbsp;
                          {workoutEntry.duration ?
                              <span className="">{workoutEntry.duration} seconds</span> : null}
                          {workoutEntry.distance ?
                              <span
                                  className="">{workoutEntry.distance} {distanceUnit}</span> : null}
                          {workoutEntry.target && workoutEntry.target.zone ?
                              <span className="">, zone {workoutEntry.target.zone}</span> : null}
                        </div>
                    )
                );
              })}
            </div>
          </div>
        </div>
      </div>
  );
}