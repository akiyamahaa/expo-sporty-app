import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Box, HStack, Text, useTheme } from "native-base";
import {
  AddCircle,
  ArrowCircleLeft2,
  ArrowCircleRight2,
  CloseCircle,
} from "iconsax-react-native";
import { IFood } from "../type/common";

type Props = {
  handleAdd?: any;
  foodInfo: IFood;
  numFood?: number;
  isEdit?: boolean;
};

const FoodMenuCard = (props: Props) => {
  const { colors } = useTheme();
  const { handleAdd, foodInfo, numFood, isEdit = false } = props;
  const [quantity, setQuantity] = useState(numFood || 0);

  const isDisabledLeft = quantity == 0 || !isEdit;
  const isDisabledRight = !isEdit;

  useEffect(() => {
    if (handleAdd) {
      handleAdd(foodInfo.id, quantity, foodInfo);
    }
  }, [quantity]);

  return (
    <HStack
      justifyContent={"space-between"}
      alignItems={"center"}
      bgColor={"muted.800"}
      px={4}
      py={3}
      borderRadius={16}
    >
      <Box>
        <Text fontSize={16} fontWeight={400}>
          {foodInfo.name}
        </Text>
        <Text fontSize={14} fontWeight={400} color="text.500">
          {foodInfo.quantity}g - {foodInfo.calories} Calories
        </Text>
      </Box>
      <Box>
        <HStack space={2} alignItems={"center"}>
          <TouchableOpacity
            onPress={() => setQuantity(quantity - 1)}
            disabled={isDisabledLeft}
          >
            <ArrowCircleLeft2
              size="24"
              color={isDisabledLeft ? colors.muted[500] : colors.primary[600]}
            />
          </TouchableOpacity>
          <Text fontSize={18}>{quantity}</Text>
          <TouchableOpacity
            onPress={() => setQuantity(quantity + 1)}
            disabled={isDisabledRight}
          >
            <ArrowCircleRight2
              size="24"
              color={isDisabledRight ? colors.muted[500] : colors.primary[600]}
            />
          </TouchableOpacity>
        </HStack>
      </Box>
    </HStack>
  );
};

export default FoodMenuCard;

const styles = StyleSheet.create({});
