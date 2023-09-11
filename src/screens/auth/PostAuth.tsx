import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Box, Center, HStack, Text, VStack } from "native-base";
import InputLabel from "../../components/InputLabel";
import CustomButton from "../../components/CustomButton";
import PickGender from "../../components/PickGender";

type Props = {};

const PostAuth = (props: Props) => {
  const [gender, setGender] = useState("M");
  return (
    <Box flex={1} bgColor={"muted.900"} px={6}>
      <VStack>
        <Text fontSize={16} fontWeight={400}>
          Chào mừng bạn đến với
        </Text>
        <Text fontSize={30} fontWeight={500}>
          Sporty App
        </Text>
      </VStack>
      <VStack flex={1} space={4} mt={8}>
        <InputLabel label="Tên" placeholder="Nhập tên" />
        <InputLabel label="Chiều cao" placeholder="Nhập chiều cao" />
        <InputLabel label="Cân nặng" placeholder="Nhập cân nặng" />
        <InputLabel label="Độ tuổi" placeholder="Nhập độ tuổi" />
        <PickGender gender={gender} setGender={setGender} />
      </VStack>
      <Box mb={6}>
        <CustomButton btnText="Tiếp tục" />
      </Box>
    </Box>
  );
};

export default PostAuth;

const styles = StyleSheet.create({});
