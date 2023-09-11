import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Box, HStack, Text, VStack, useTheme } from "native-base";
import { Edit2 } from "iconsax-react-native";
import FoodMenuCard from "./FoodMenuCard";

type Props = {};

const MenuDayCard = (props: Props) => {
  const { colors } = useTheme();
  return (
    <VStack>
      <HStack justifyContent={"space-between"} mb={1}>
        <Box>
          <Text fontWeight={400} fontSize={16}>
            Thứ 2
          </Text>
        </Box>
        <TouchableOpacity>
          <Edit2 size="20" color={colors.muted[500]} />
        </TouchableOpacity>
      </HStack>
      <VStack space={2}>
        <FoodMenuCard handleRemove={() => {}} />
        <FoodMenuCard handleRemove={() => {}} />
        <FoodMenuCard handleRemove={() => {}} />
      </VStack>
    </VStack>
  );
};

export default MenuDayCard;

const styles = StyleSheet.create({});
