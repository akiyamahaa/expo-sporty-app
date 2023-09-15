import { StyleSheet } from "react-native";
import React from "react";
import { Box, ScrollView, VStack } from "native-base";
import Header from "../../components/Header";
import FoodMenuCard from "../../components/FoodMenuCard";

type Props = {};

const CreateMenu2 = (props: Props) => {
  const handleBack = () => {};
  const handleSearch = () => {};
  const handleDone = () => {};

  return (
    <Box flex={1} bgColor={"muted.900"}>
      <Header.BasicHeader
        title="Tạo thực đơn mới"
        handleBtnBack={handleBack}
        handleSearch={handleSearch}
        handleDone={handleDone}
      />
      <ScrollView>
        <VStack space={4} py={4} px={6}>
          <FoodMenuCard handleAdd={() => {}} />
          <FoodMenuCard handleAdd={() => {}} />
          <FoodMenuCard handleAdd={() => {}} />
          <FoodMenuCard handleAdd={() => {}} />
          <FoodMenuCard handleAdd={() => {}} />
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default CreateMenu2;

const styles = StyleSheet.create({});
