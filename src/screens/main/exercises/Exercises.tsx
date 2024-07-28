import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Box, HStack, ScrollView, Text, VStack } from "native-base";
import Header from "../../../components/Header";
import CustomButton from "../../../components/CustomButton";
import { useAppDispatch } from "../../../store";
import { IInfo } from "../../../type/common";
import { convertTitle } from "../../../utils/forms";
import { BottomTabsParams, RootStackParams } from "../../../navigations/config";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ExerciseCard from "./ExerciseCard";
import { newExercise } from "../../../data/workout";

type Props = {} & NativeStackScreenProps<
  BottomTabsParams & RootStackParams,
  "Exercises"
>;

const Exercises = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  const [list, setList] = useState<IInfo>([]);
  const [category, setCategory] = useState("ppl");
  const btnArr = ["ppl", "phul"];

  const handleBtn = async (category: string) => {
    setCategory(category);
  };

  const exerciseDemo = newExercise["ppl"][0];

  return (
    <Box flex={1} bgColor={"background.primary"}>
      <Header.BasicHeader title="Chế độ tập" />
      <VStack flex={1} px={6} pt={8} pb={4}>
        <HStack space={6}>
          {btnArr.map((cate) => (
            <Box flex={1} key={cate}>
              <CustomButton
                btnText={convertTitle(cate)}
                handleBtn={() => handleBtn(cate)}
                active={cate == category}
              />
            </Box>
          ))}
        </HStack>
        {/* List */}
        <ScrollView>
          <VStack flex={1} space={4} py="4">
            {newExercise[category].map((exerciseData) => (
              <TouchableOpacity
                key={exerciseData.id}
                onPress={() => {
                  navigation.navigate("ExerciseDetail", {
                    category: category,
                    exerciseId: exerciseData.id,
                  });
                }}
                disabled={exerciseData.muscle_groups.length <= 0}
              >
                <ExerciseCard data={exerciseData} />
              </TouchableOpacity>
            ))}
          </VStack>
        </ScrollView>
      </VStack>
    </Box>
  );
};

export default Exercises;

const styles = StyleSheet.create({});
