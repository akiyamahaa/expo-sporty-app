import React, { useCallback, useState } from "react";
import { Box, HStack, Image, ScrollView, Text, VStack } from "native-base";
import Header from "../../../components/Header";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../navigations/config";
import { newExercise } from "../../../data/workout";
import { convertTitle } from "../../../utils/forms";
import { Alert, Dimensions, TouchableOpacity } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

type Props = {} & NativeStackScreenProps<RootStackParams, "ExerciseDetail">;

const { width } = Dimensions.get("screen");

const ExerciseDetail = ({ navigation, route }: Props) => {
  const { exerciseId, category } = route.params;
  const [exercise] = useState(
    newExercise[category].filter((item) => item.id === exerciseId)[0]
  );
  const [playing, setPlaying] = useState(false);
  const [hiddenParts, setHiddenParts] = useState<any>({});

  const onStateChange = useCallback((state: string) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  // Function to toggle the visibility of content
  const hideContent = (exerciseId: string, exerciseMuscleTitle: string) => {
    setHiddenParts((prevState: { [key: string]: boolean }) => ({
      ...prevState,
      [`${exerciseId}-${exerciseMuscleTitle}`]:
        !prevState[`${exerciseId}-${exerciseMuscleTitle}`],
    }));
  };

  return (
    <Box flex={1} bgColor={"muted.900"}>
      <Header.BasicHeader
        handleBtnBack={() => navigation.goBack()}
        title={convertTitle(category)}
      />
      <ScrollView>
        <VStack p="4" space={"4"}>
          <Box>
            <Text
              fontWeight={"bold"}
              fontSize={"xl"}
              textAlign={"center"}
              color={"primary.600"}
            >
              {exercise.title}
            </Text>
            {/* <Box mt="2">
              <Image
                w={"full"}
                height={200}
                resizeMode="contain"
                source={{ uri: exercise.image }}
                alt="image-exercise"
              />
            </Box> */}
          </Box>
          <VStack space="md">
            {exercise.muscle_groups.map((muscle, index) => (
              <VStack key={`${exercise.id}-${muscle.title}`} space="2">
                <Text fontWeight={"bold"} fontSize={"xl"}>
                  Group {index + 1} - {muscle.title}
                </Text>
                <VStack space="4">
                  {muscle.exercises.map((exerciseMuscle) => (
                    <VStack
                      key={`${exercise.id}-${exerciseMuscle.title}`}
                      space="md"
                      // alignItems={"flex-start"}
                    >
                      <TouchableOpacity
                        onPress={() =>
                          hideContent(exercise.id, exerciseMuscle.title)
                        }
                      >
                        <Box
                          bg={"primary.600"}
                          py={"1"}
                          px="2"
                          rounded={"md"}
                          width={"1/2"}
                        >
                          <Text color="black">{exerciseMuscle.title}</Text>
                        </Box>
                      </TouchableOpacity>
                      {/* Content */}
                      {!hiddenParts[
                        `${exercise.id}-${exerciseMuscle.title}`
                      ] && (
                        <VStack space="2">
                          <VStack space="2">
                            <Text fontWeight={"bold"} fontSize={"lg"}>
                              Video Tutorial:
                            </Text>
                            <YoutubePlayer
                              height={200}
                              width={width - 32}
                              play={playing}
                              videoId={exerciseMuscle.video_intro}
                              onChangeState={onStateChange}
                            />
                          </VStack>
                          <VStack space="2">
                            <Text fontWeight={"bold"} fontSize={"lg"}>
                              Information:
                            </Text>
                            <HStack
                              p={"4"}
                              borderWidth={0.5}
                              borderColor={"white"}
                              rounded={"md"}
                              space={"md"}
                            >
                              <Box flex={1}>
                                <Image
                                  alt="image"
                                  source={{ uri: exerciseMuscle.muscle_image }}
                                  w="full"
                                  height={160}
                                  resizeMode="stretch"
                                  rounded={"md"}
                                />
                              </Box>
                              <Box
                                height={"full"}
                                width={0.2}
                                bg={"primary.600"}
                              />
                              <VStack
                                space="2"
                                flex={1}
                                justifyContent={"center"}
                              >
                                <Text fontWeight={"semibold"}>
                                  Sets:{" "}
                                  <Text
                                    fontWeight={"bold"}
                                    textTransform={"capitalize"}
                                    color="primary.600"
                                  >
                                    {exerciseMuscle.sets}
                                  </Text>
                                </Text>
                                <Text fontWeight={"semibold"}>
                                  Reps:{" "}
                                  <Text
                                    fontWeight={"bold"}
                                    textTransform={"capitalize"}
                                    color="primary.600"
                                  >
                                    {exerciseMuscle.reps}
                                  </Text>
                                </Text>
                                <Text fontWeight={"semibold"}>
                                  Targets:{" "}
                                  <Text
                                    fontWeight={"bold"}
                                    textTransform={"capitalize"}
                                    color="primary.600"
                                  >
                                    {exerciseMuscle.target.toString()}
                                  </Text>
                                </Text>
                              </VStack>
                            </HStack>
                          </VStack>
                        </VStack>
                      )}
                    </VStack>
                  ))}
                </VStack>
              </VStack>
            ))}
          </VStack>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default ExerciseDetail;
