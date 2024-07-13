import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Box, Text, VStack } from "native-base";
import Header from "../../components/Header";
import InputLabel from "../../components/InputLabel";
import PickGender from "../../components/PickGender";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/config";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { updateDocument } from "../../firebase/api";

type Props = {} & NativeStackScreenProps<RootStackParams, "BMI">;

const BMI = ({ navigation }: Props) => {
  const user = useAppSelector((state: RootState) => state.user.user);
  const [gender, setGender] = useState(user?.gender);
  const [height, setHeight] = useState(user?.height);
  const [weight, setWeight] = useState(user?.weight);
  const [age, setAge] = useState(user?.age);

  const [calo, setCalo] = useState("0");
  const handleBtnBack = () => {
    navigation.goBack();
  };
  const handleDone = async () => {
    if (user) {
      const newUser: any = {
        age: age,
        gender: gender,
        height: height,
        weight: weight,
        calo: calo,
      };
      await updateDocument("users", user.phone, newUser);

      navigation.goBack();
    }
  };

  return (
    <Box flex={1} bgColor={"muted.900"}>
      <Header.BasicHeader
        title="Cập nhật BMI"
        handleBtnBack={handleBtnBack}
        handleDone={handleDone}
      />
      <Box px={6} py={4}>
        <VStack space={4}>
          <InputLabel
            keyboardType="numeric"
            value={calo}
            onChangeText={(text) => setCalo(text)}
            label="Calo ngày"
            placeholder="3000"
          />
          <InputLabel
            value={height}
            onChangeText={(text) => setHeight(text)}
            label="Chiều cao"
            placeholder="180"
          />
          <InputLabel
            value={weight}
            onChangeText={(text) => setWeight(text)}
            label="Cân nặng"
            placeholder="52"
          />
          <InputLabel
            value={age}
            onChangeText={(text) => setAge(text)}
            label="Tuổi"
            placeholder="18"
          />
          <PickGender gender={gender} setGender={setGender} />
        </VStack>
      </Box>
    </Box>
  );
};

export default BMI;

const styles = StyleSheet.create({});
