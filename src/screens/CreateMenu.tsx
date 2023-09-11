import { StyleSheet } from "react-native";
import React from "react";
import { Box, Center, Text, VStack } from "native-base";
import Header from "../components/Header";
import InputLabel from "../components/InputLabel";
import CustomButton from "../components/CustomButton";

type Props = {};

const CreateMenu = (props: Props) => {
  const handleBack = () => {};
  return (
    <Box flex={1} bgColor={"muted.900"}>
      <Header.BasicHeader title="Tạo thực đơn mới" handleBtnBack={handleBack} />
      <Center flex={1} px={6}>
        <VStack space={4}>
          <InputLabel label="Ngày" placeholder="Ngày" />
          <InputLabel label="Bữa ăn" placeholder="Nhập tên" />
          <Box mt={4}>
            <CustomButton btnText="Tiếp tục" />
          </Box>
        </VStack>
      </Center>
    </Box>
  );
};

export default CreateMenu;

const styles = StyleSheet.create({});
