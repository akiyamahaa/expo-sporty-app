import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Box, HStack, Text, VStack, useTheme } from "native-base";
import { Image } from "expo-image";
import { ArrowCircleRight2 } from "iconsax-react-native";
import { IFood } from "../type/common";

type Props = {
  foodInfo: IFood;
  handleBtnNext?: any;
};

const FoodCard = (props: Props) => {
  const { colors } = useTheme();
  const { foodInfo, handleBtnNext } = props;

  return (
    <Box>
      <HStack alignItems={"center"} justifyContent={"space-between"}>
        <Image
          source={{ uri: foodInfo.image }}
          style={{ width: 96, height: 96, borderRadius: 16 }}
        />
        <VStack mx={4} flex={1}>
          <Box>
            <Text fontWeight={400} fontSize={16}>
              {foodInfo.name}
            </Text>
          </Box>
          <Text fontWeight={400} fontSize={14} color="text.500">
            {foodInfo.quantity}g - {foodInfo.calories} Calo
          </Text>
        </VStack>
        <TouchableOpacity onPress={handleBtnNext}>
          <ArrowCircleRight2 size="32" color={colors.muted[500]} />
        </TouchableOpacity>
      </HStack>
    </Box>
  );
};

export default FoodCard;

const styles = StyleSheet.create({});
