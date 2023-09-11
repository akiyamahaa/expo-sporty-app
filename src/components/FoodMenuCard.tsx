import { StyleSheet } from "react-native";
import React from "react";
import { Box, HStack, Text, useTheme } from "native-base";
import { AddCircle, CloseCircle } from "iconsax-react-native";

type Props = {
  handleRemove?: any;
  handleAdd?: any;
};

const FoodMenuCard = (props: Props) => {
  const { colors } = useTheme();
  const { handleRemove, handleAdd } = props;
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
          Bánh mì Sandwich trắng
        </Text>
        <Text fontSize={14} fontWeight={400} color="text.500">
          1 lát (25 gr) - 67.0 Calo
        </Text>
      </Box>
      <Box>
        {handleRemove && <CloseCircle size="20" color={colors.muted[500]} />}
        {handleAdd && <AddCircle size="20" color={colors.muted[500]} />}
      </Box>
    </HStack>
  );
};

export default FoodMenuCard;

const styles = StyleSheet.create({});
