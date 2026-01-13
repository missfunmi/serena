-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workouts" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "source" TEXT NOT NULL,
    "sport" TEXT NOT NULL,
    "intensity_type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "distance_unit" TEXT,
    "estimated_pace" INTEGER,
    "planned_distance" INTEGER,
    "planned_duration" INTEGER,
    "planned_tss" INTEGER NOT NULL,
    "planned_if" DOUBLE PRECISION NOT NULL,
    "planned_calories" INTEGER,
    "completed_distance" INTEGER,
    "completed_duration" INTEGER,
    "completed_tss" INTEGER,
    "completed_if" DOUBLE PRECISION,
    "completed_calories" INTEGER,
    "description" TEXT,
    "workout_structure" JSONB,

    CONSTRAINT "workouts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "workouts" ADD CONSTRAINT "workouts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
