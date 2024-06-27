import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Box, HStack, Text, VStack, useTheme } from "native-base";
import { Image } from "expo-image";
import { ArrowCircleRight2 } from "iconsax-react-native";
import { IExerciseCard } from "../../../data/workout";

type Props = {
  data: IExerciseCard;
};

const ExerciseCard = ({ data }: Props) => {
  const { colors } = useTheme();

  const onPressCard = () => {};

  return (
    <Box>
      <HStack alignItems={"center"} justifyContent={"space-between"}>
        <Image
          source={{ uri: data.image }}
          style={{ width: 96, height: 96, borderRadius: 8 }}
        />
        <VStack mx={4} flex={1}>
          <Box>
            <Text fontWeight={"bold"} fontSize={18}>
              Day {data.day}
            </Text>
            <Text fontWeight={400} fontSize={16}>
              {data.title}
            </Text>
          </Box>
        </VStack>
        <Box>
          <ArrowCircleRight2 size="32" color={colors.muted[500]} />
        </Box>
      </HStack>
    </Box>
  );
};

export default ExerciseCard;

const styles = StyleSheet.create({});
