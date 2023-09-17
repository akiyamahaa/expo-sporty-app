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
  handleRemove?: any;
  handleAdd?: any;
  foodInfo: IFood;
};

const FoodMenuCard = (props: Props) => {
  const { colors } = useTheme();
  const { handleRemove, handleAdd, foodInfo } = props;
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    handleAdd(foodInfo.id, quantity, foodInfo);
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
        {handleRemove && <CloseCircle size="20" color={colors.muted[500]} />}
        {handleAdd && (
          <HStack space={2} alignItems={"center"}>
            <TouchableOpacity
              onPress={() => setQuantity(quantity - 1)}
              disabled={quantity == 0}
            >
              <ArrowCircleLeft2 size="24" color={colors.muted[500]} />
            </TouchableOpacity>
            <Text fontSize={18}>{quantity}</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
              <ArrowCircleRight2 size="24" color={colors.muted[500]} />
            </TouchableOpacity>
          </HStack>
        )}
      </Box>
    </HStack>
  );
};

export default FoodMenuCard;

const styles = StyleSheet.create({});
