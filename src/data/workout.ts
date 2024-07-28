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
      image: "https://www.ironmanmagazine.com/wp-content/uploads/the_complete_push_day_workout_for_bodybuilders-scaled.jpg",
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
    {
      id: "ppl2",
      day: 2,
      image: "https://boxlifemagazine.com/wp-content/uploads/2023/10/Pull-Day-Workout.jpg",
      title: "PULL ( BACK, BICEPS, SHOULDERS)",
      muscle_groups: [
        {
          title: "BACK",
          exercises: [
            {
              title: "Weighted/ Assisted Pull-ups",
              video_intro: "poyr8KenUfc",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Lats.jpg",
              sets: "3",
              reps: "12",
              target: ["Abs", "Biceps", "Shoulders", "Upper Back"],
            },
            {
              title: "Straight Arm Pull Down",
              video_intro: "hlxb2zthgUw",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Lats.jpg",
              sets: "3",
              reps: "10",
              target: ["abs", "biceps", "shoulders", "upper back"],
            },
            {
              title: "Meadows Row",
              video_intro: "lPPNLJhgZWE",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Upper-Back.jpg",
              sets: "3",
              reps: "8 - 12",
              target: ["abs", "biceps", "lats", "lower back", "shoulders"],
            },
          ],
        },
        {
          title: "BICEPS",
          exercises: [
            {
              title: "Standing Barbell Curl",
              video_intro: "dDI8ClxRS04",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Biceps.jpg",
              sets: "4",
              reps: "10 - 12",
              target: ["biceps"],
            },
            {
              title: "Standing Hammer Curl",
              video_intro: "VXj0Zx4v5go",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Biceps.jpg",
              sets: "4",
              reps: "10-12",
              target: ["biceps", "forearms"],
            },
            {
              title: "Dumbbell Preacher Curl",
              video_intro: "pwEhS1sg9mU",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Biceps.jpg",
              sets: "4",
              reps: "10-12",
              target: ["biceps", "forearms"],
            },
          ],
        },
        {
          title: "SHOULDERS",
          exercises: [
            {
              title: "Dumbbell Lateral Raise",
              video_intro: "4q-TZNT3eHU",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Shoulders.jpg",
              sets: "4",
              reps: "10-15",
              target: ["middle-delts"],
            },
          ],
        },
      ],
    },
    {
      id: "ppl3",
      day: 3,
      image:
        "https://images.ctfassets.net/3s5io6mnxfqz/34Npc5PKLKJi6HIYvFw9XI/3e45754912cf266e7401cb8074c63239/AdobeStock_386146138_2.jpeg",
      title: "LEGS ( QUADRICEPS, HAMSTRINGS, CALVES )",
      muscle_groups: [
        {
          title: "QUADS",
          exercises: [
            {
              title: "Squat",
              video_intro: "R2dMsNhN3DE",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Quads.jpg",
              sets: "3 - 6",
              reps: "12 - 15",
              target: ["Calves", "Glutes", "Hamstrings", "Lower Back"],
            },
            {
              title: "Dumbbell Walking Lunge",
              video_intro: "uRSsOoZG9z8",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Quads.jpg",
              sets: "2",
              reps: "10 - 12",
              target: [
                "Abs",
                "Adductors",
                "Calves",
                "Glutes",
                "Hamstrings",
                "Shoulders",
                "Traps",
                "Upper Back",
              ],
            },
            {
              title: "Single Leg Extensions",
              video_intro: "ymCvLgI9wlA",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Chest.jpg",
              sets: "4",
              reps: "12 - 15",
              target: ["Quads"],
            },
          ],
        },
        {
          title: "HAMSTRINGS",
          exercises: [
            {
              title: "Leg Curl",
              video_intro: "Orxowest56U",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Hamstrings.jpg",
              sets: "4",
              reps: "10 - 12",
              target: ["hamstrings"],
            },
          ],
        },
        {
          title: "CALVES",
          exercises: [
            {
              title: "Seated Calf Raise",
              video_intro: "Yh5TXz99xwY",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Calves.jpg",
              sets: "3-5",
              reps: "6-12",
              target: ["calves"],
            },
          ],
        },
      ],
    },
    {
      id: "ppl4",
      day: 4,
      image: "https://www.bodybuilding.com/images/2021/september/the-science-of-muscle-recovery-how-long-should-you-rest-between-workouts-header-v2-960x540.jpg",
      title: "REST ( TAKE A GOOD REST )",
      muscle_groups: [],
    },
    {
      id: "ppl5",
      day: 5,
      image: "https://www.ironmanmagazine.com/wp-content/uploads/the_complete_push_day_workout_for_bodybuilders-scaled.jpg",
      title: "PUSH ( SHOULDERS, CHEST, TRICEPS )",
      muscle_groups: [
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
              title: "Cable Flies",
              video_intro: "JHqmhZ12rr0",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Chest.jpg",
              sets: "3",
              reps: "10 - 12",
              target: ["chest", "shoulder", "triceps"],
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
    {
      id: "ppl6",
      day: 6,
      image: "https://boxlifemagazine.com/wp-content/uploads/2023/10/Pull-Day-Workout.jpg",
      title: "PULL ( BACK, BICEPS, SHOULDERS)",
      muscle_groups: [
        {
          title: "BACK",
          exercises: [
            {
              title: "Machine T-Bar Row",
              video_intro: "kHW23afzaUs",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Upper-Back.jpg",
              sets: "3",
              reps: "12-15",
              target: ["Biceps", "Lats", "Shoulders"],
            },
            {
              title: "Seated Cable Row",
              video_intro: "UCXxvVItLoM",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Upper-Back.jpg",
              sets: "4",
              reps: "12-15",
              target: ["Biceps", "Lats", "Shoulders"],
            },
            {
              title: "Lats Pulldown",
              video_intro: "iKrKgWR9wbY",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Upper-Back.jpg",
              sets: "4",
              reps: "12-15",
              target: ["Biceps", "Lats", "Shoulders"],
            },
          ],
        },
        {
          title: "BICEPS",
          exercises: [
            {
              title: "Standing Barbell Curl",
              video_intro: "dDI8ClxRS04",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Biceps.jpg",
              sets: "4",
              reps: "10 - 12",
              target: ["biceps"],
            },
            {
              title: "Concentration Curl",
              video_intro: "LHDwya1KY8M",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Biceps.jpg",
              sets: "3",
              reps: "12 - 15",
              target: ["biceps"],
            },
          ],
        },
        {
          title: "SHOULDERS",
          exercises: [
            {
              title: "Face Pulls",
              video_intro: "7ZvpXA_mFpQ",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Shoulders.jpg",
              sets: "3",
              reps: "8-12",
              target: ["rear-delts"],
            },
          ],
        },
      ],
    },
    {
      id: "ppl7",
      day: 7,
      image:
        "https://images.ctfassets.net/3s5io6mnxfqz/34Npc5PKLKJi6HIYvFw9XI/3e45754912cf266e7401cb8074c63239/AdobeStock_386146138_2.jpeg",
      title: "LEGS ( GLUTES, HAMSTRINGS, QUADRICEPS, CALVES )",
      muscle_groups: [
        {
          title: "GLUTES",
          exercises: [
            {
              title: "Hip Thrust",
              video_intro: "sEM_zo9w2ss",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Glutes.jpg",
              sets: "3",
              reps: "8 - 10",
              target: ["Abs", "Hamstrings"],
            },
          ],
        },
        {
          title: "HAMSTRINGS",
          exercises: [
            {
              title: "Leg Curl",
              video_intro: "Orxowest56U",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Hamstrings.jpg",
              sets: "4",
              reps: "10 - 12",
              target: ["hamstrings"],
            },
            {
              title: "Romanian Deadlift",
              video_intro: "-m45n1_x32E",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Hamstrings.jpg",
              sets: "3",
              reps: "8 - 10",
              target: ["hamstrings"],
            },
          ],
        },
        {
          title: "QUADS",
          exercises: [
            {
              title: "Leg Press",
              video_intro: "sEM_zo9w2ss",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Quads.jpg",
              sets: "4",
              reps: "12 - 15",
              target: [
                "Abs",
                "Adductors",
                "Calves",
                "Glutes",
                "Hamstrings",
                "Lower Back",
              ],
            },
          ],
        },
        {
          title: "CALVES",
          exercises: [
            {
              title: "Seated Calf Raise",
              video_intro: "Yh5TXz99xwY",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Calves.jpg",
              sets: "3-5",
              reps: "6-12",
              target: ["calves"],
            },
          ],
        },
      ],
    },
  ],
  phul: [
    {
      id: "phpl1",
      day: 1,
      image:
        "https://tse1.mm.bing.net/th?id=OIG1._wTbNOBFBbjweF5HGdgv&w=270&h=270&c=6&r=0&o=5&pid=ImgGn",
      title: "UPPER BODY 1 ( CHEST, LATS, SHOULDERS, ARMS )",
      muscle_groups: [
        {
          title: "CHEST 1",
          exercises: [
            {
              title: "Chest Supported Row",
              video_intro: "WPpMRmgoe8I",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Chest.jpg",
              sets: "3 - 6",
              reps: "6 - 12",
              target: ["Biceps", "Lats", "Shoulders"],
            },
          ],
        },
        {
          title: "LATS",
          exercises: [
            {
              title: "Wide Grip Lat Pulldown",
              video_intro: "Mdp7kuhZD_M",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Lats.jpg",
              sets: "4",
              reps: "10 - 12",
              target: ["Abs", "Biceps", "Shoulders", "Upper Back"],
            },
          ],
        },
        {
          title: "CHEST 2",
          exercises: [
            {
              title: "Standing Cable Fly",
              video_intro: "OPYrUGZL8nU",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Chest.jpg",
              sets: "3 - 4",
              reps: "8 - 12",
              target: ["Triceps", "Shoulders"],
            },
          ],
        },
        {
          title: "SHOULDERS",
          exercises: [
            {
              title: "Single Arm Cable Lateral Raise (Crossbody)",
              video_intro: "Fv-eAW1uKDI",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Shoulders.jpg",
              sets: "4",
              reps: "10-15",
              target: ["Traps"],
            },
          ],
        },
        {
          title: "BICEPS",
          exercises: [
            {
              title: "Dumbbell Hammer Preacher Curl",
              video_intro: "ZdcFOgFi1Dg",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Biceps.jpg",
              sets: "4",
              reps: "8-12",
              target: ["Forearms"],
            },
          ],
        },
        {
          title: "TRICEPS",
          exercises: [
            {
              title: "EZ Bar Skullcrusher",
              video_intro: "K6MSN4hCDM4",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Triceps.jpg",
              sets: "4",
              reps: "8-12",
              target: ["Triceps"],
            },
          ],
        },
      ],
    },
    {
      id: "phpl2",
      day: 2,
      image:
        "https://tse3.mm.bing.net/th?id=OIG1..mLdBOnh3Tncjctc1zgl&w=270&h=270&c=6&r=0&o=5&pid=ImgGn",
      title: "LOWER BODY 1( GLUTES, QUADS, HAMSTRINGS, CALVES )",
      muscle_groups: [
        {
          title: "QUADS 1",
          exercises: [
            {
              title: "Barbell Back Squat",
              video_intro: "R2dMsNhN3DE",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Quads.jpg",
              sets: "3 - 6",
              reps: "6 - 12",
              target: ["Calves", "Glutes", "Hamstrings", "Lower Back"],
            },
          ],
        },
        {
          title: "HAMSTRINGS",
          exercises: [
            {
              title: "Seated Leg Curl",
              video_intro: "3BWiLFc8Dbg",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Hamstrings.jpg",
              sets: "4",
              reps: "10 - 12",
              target: ["Glutes"],
            },
          ],
        },
        {
          title: "QUADS 2",
          exercises: [
            {
              title: "Single Leg Extension",
              video_intro: "ymCvLgI9wlA",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Quads.jpg",
              sets: "4",
              reps: "10 - 12",
              target: ["Quads"],
            },
          ],
        },
        {
          title: "GLUTES",
          exercises: [
            {
              title: "Hyperextension",
              video_intro: "BZMnTSobIAQ",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Glutes.jpg",
              sets: "3 - 4",
              reps: "10-15",
              target: ["Hamstrings", "Lower Back"],
            },
          ],
        },
        {
          title: "CALVES",
          exercises: [
            {
              title: "Standing Machine Calf Raise",
              video_intro: "RBslMmWqzzE",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Calves.jpg",
              sets: "3",
              reps: "20",
              target: ["Calves"],
            },
          ],
        },
      ],
    },
    {
      id: "phul3",
      day: 3,
      image:
        "https://www.bodybuilding.com/images/2021/september/the-science-of-muscle-recovery-how-long-should-you-rest-between-workouts-header-v2-960x540.jpg",
      title: "REST ( TAKE A GOOD REST )",
      muscle_groups: [],
    },
    {
      id: "phpl4",
      day: 4,
      image:
        "https://tse1.mm.bing.net/th?id=OIG1._wTbNOBFBbjweF5HGdgv&w=270&h=270&c=6&r=0&o=5&pid=ImgGn",
      title: "UPPER BODY 2( CHEST, LATS, SHOULDERS, ARMS )",
      muscle_groups: [
        {
          title: "CHEST 1",
          exercises: [
            {
              title: "Dumbbell Bench Press",
              video_intro: "WPpMRmgoe8I",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Chest.jpg",
              sets: "3 - 6",
              reps: "6 - 12",
              target: ["Biceps", "Lats", "Shoulders"],
            },
          ],
        },
        {
          title: "LATS",
          exercises: [
            {
              title: "Pull-up (Wide Grip)",
              video_intro: "5oxviYmdHCY",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Lats.jpg",
              sets: "4",
              reps: "10 - 12",
              target: ["Abs", "Biceps", "Shoulders", "Upper Back"],
            },
          ],
        },
        {
          title: "CHEST 2",
          exercises: [
            {
              title: "Cable Chest Press",
              video_intro: "n4CEULDvATA",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Chest.jpg",
              sets: "3 - 4",
              reps: "8 - 12",
              target: ["Triceps", "Shoulders"],
            },
          ],
        },
        {
          title: "SHOULDERS",
          exercises: [
            {
              title: "Dumbbell Lateral Raises",
              video_intro: "4q-TZNT3eHU",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Shoulders.jpg",
              sets: "4",
              reps: "10-15",
              target: ["Delts"],
            },
          ],
        },
        {
          title: "BICEPS",
          exercises: [
            {
              title: "Incline Dumbbell Curl",
              video_intro: "UeleXjsE-98",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Biceps.jpg",
              sets: "4",
              reps: "8-12",
              target: ["Forearms"],
            },
          ],
        },
        {
          title: "TRICEPS",
          exercises: [
            {
              title: "Close Grip Bench Press",
              video_intro: "j-NhORwJDb4",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Triceps.jpg",
              sets: "4",
              reps: "8-12",
              target: ["Triceps"],
            },
          ],
        },
      ],
    },
    {
      id: "phpl5",
      day: 5,
      image:
        "https://tse3.mm.bing.net/th?id=OIG1..mLdBOnh3Tncjctc1zgl&w=270&h=270&c=6&r=0&o=5&pid=ImgGn",
      title: "LOWER BODY 2 GLUTES, QUADS, HAMSTRINGS, CALVES )",
      muscle_groups: [
        {
          title: "QUADS",
          exercises: [
            {
              title: "Dumbbell Walking Lunge",
              video_intro: "uRSsOoZG9z8",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Quads.jpg",
              sets: "3 - 4",
              reps: "10 - 12",
              target: [
                "Abs",
                "Adductors",
                "Calves",
                "Glutes",
                "Hamstrings",
                "Shoulders",
                "Traps",
                "Upper Back",
              ],
            },
          ],
        },
        {
          title: "HAMSTRINGS",
          exercises: [
            {
              title: "Conventional Deadlift",
              video_intro: "wjsu6ceEkAQ",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Hamstrings.jpg",
              sets: "3 - 5",
              reps: "6 - 12",
              target: [
                "Abs",
                "Adductors",
                "Calves",
                "Forearms",
                "Glutes",
                "Hamstrings",
                "Lats",
                "Lower Back",
                "Middle Back",
                "Quads",
                "Traps",
                "Upper Back",
              ],
            },
          ],
        },
        {
          title: "GLUTES",
          exercises: [
            {
              title: "Barbell Hip Thrust",
              video_intro: "lAnqN0J_p5A",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Glutes.jpg",
              sets: "2 - 3",
              reps: "10 - 15",
              target: ["Abs", "Hamstrings"],
            },
          ],
        },
        {
          title: "CALVES",
          exercises: [
            {
              title: "Standing Machine Calf Raise",
              video_intro: "RBslMmWqzzE",
              muscle_image:
                "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Calves.jpg",
              sets: "3",
              reps: "20",
              target: ["Calves"],
            },
          ],
        },
      ],
    },
    {
      id: "phul6",
      day: 6,
      image:
        "https://www.bodybuilding.com/images/2021/september/the-science-of-muscle-recovery-how-long-should-you-rest-between-workouts-header-v2-960x540.jpg",
      title: "REST ( TAKE A GOOD REST )",
      muscle_groups: [],
    },
    {
      id: "phul7",
      day: 7,
      image:
        "https://www.bodybuilding.com/images/2021/september/the-science-of-muscle-recovery-how-long-should-you-rest-between-workouts-header-v2-960x540.jpg",
      title: "REST ( TAKE A GOOD REST )",
      muscle_groups: [],
    },
  ],
};
