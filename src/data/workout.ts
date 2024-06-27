export interface IExerciseCard {
  id: string;
  day: number;
  image: string;
  title: string;
  muscle_groups: Array<{
    title: string;
    exercises: Array<{
      title: string;
      video_intro: string;
      muscle_image: string;
      sets: string;
      reps: string;
      target: string[];
    }>;
  }>;
}
export interface INewExercise {
  [key: string]: Array<IExerciseCard>;
}

export const newExercise: INewExercise = {
  ppl: [
    {
      id: "ppl1",
      day: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbzfj4TBNsbPNuS0VDX95VIMFhVDnlCgmGuw&s",
      title: "PUSH ( CHEST, SHOULDERS, TRICEPS)",
      muscle_groups: [
        {
          title: "CHEST",
          exercises: [
            {
              title: "Bench Press",
              video_intro: "tuwHzzPdaGc",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Chest.jpg",
              sets: "3",
              reps: "12",
              target: ["chest", "shoulder", "triceps"],
            },
            {
              title: "Incline Bench Press",
              video_intro: "uIzbJX5EVIY",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Chest.jpg",
              sets: "4",
              reps: "8",
              target: ["chest", "shoulder", "triceps"],
            },
            {
              title: "Flat Dumbbell Fly",
              video_intro: "-lcbvOddoi8",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Chest.jpg",
              sets: "2",
              reps: "10 - 12",
              target: ["chest", "shoulder", "triceps"],
            },
          ],
        },
        {
          title: "SHOULDER",
          exercises: [
            {
              title: "Overhead Press",
              video_intro: "j7ULT6dznNc",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Shoulders.jpg",
              sets: "3",
              reps: "6-8",
              target: ["abs", "traps", "triceps"],
            },
            {
              title: "Lateral Raise",
              video_intro: "4q-TZNT3eHU",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Shoulders.jpg",
              sets: "5",
              reps: "10-12",
              target: ["delts"],
            },
          ],
        },
        {
          title: "TRICEPS",
          exercises: [
            {
              title: "Cable Push Down",
              video_intro: "mpZ9VRisAyw",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Triceps.jpg",
              sets: "3-4",
              reps: "10-15",
              target: ["triceps"],
            },
            {
              title: "EZ Bar Skull Crusher",
              video_intro: "K6MSN4hCDM4",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Triceps.jpg",
              sets: "2-4",
              reps: "8-12",
              target: ["triceps"],
            },
          ],
        },
      ],
    },
  ],
  phul: [],
};
