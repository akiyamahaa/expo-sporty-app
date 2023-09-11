import { StyleSheet } from "react-native";
import React from "react";
import {
  Box,
  Center,
  Divider,
  HStack,
  Text,
  VStack,
  useTheme,
} from "native-base";
import Header from "../components/Header";

type Props = {};
type BoxCaloriesProps = {
  type: "take" | "required";
};

const BoxCalories = (props: BoxCaloriesProps) => {
  const { colors } = useTheme();
  const { type } = props;
  let bgColor, textColor, typeText;
  if (type == "take") {
    bgColor = colors.muted[800];
    textColor = "white";
    typeText = "Đã nạp";
  } else if (type == "required") {
    bgColor = colors.primary[600];
    textColor = "black";
    typeText = "Cần nạp";
  }
  return (
    <Center height={125} flex={1} bgColor={bgColor} borderRadius={16}>
      <Text fontWeight={500} fontSize={30} color={textColor}>
        0
      </Text>
      <Text fontWeight={400} fontSize={16} color={textColor}>
        {typeText}
      </Text>
    </Center>
  );
};

const Profile = (props: Props) => {
  const handleSetting = () => {};
  const { colors } = useTheme();
  return (
    <Box flex={1} bgColor={"muted.900"}>
      <Header.HomeHeader handleSetting={handleSetting} />
      <Box px={4} py={6}>
        <VStack space={4}>
          <Box>
            <Text fontSize={20} fontWeight={500}>
              Hôm nay
            </Text>
          </Box>
          <HStack space={3}>
            <BoxCalories type="take" />
            <BoxCalories type="required" />
          </HStack>
          <Box bgColor={"muted.800"} borderRadius={16}>
            <VStack p={6} space={6}>
              <HStack>
                <Box>
                  <Text fontWeight={400} fontSize={16}>
                    BMI
                  </Text>
                  <Text fontWeight={700} fontSize={30} color="primary.600">
                    1500
                  </Text>
                </Box>
                {/* TODO: update BMI Btn */}
              </HStack>
              <Divider bgColor={"muted.900"} />
              <HStack justifyContent={"space-between"}>
                <Box flex={1}>
                  <Text fontWeight={400} fontSize={16}>
                    180 cm
                  </Text>
                  <Text fontWeight={700} fontSize={12} color="text.500">
                    Chiều cao
                  </Text>
                </Box>
                <Box flex={1}>
                  <Text fontWeight={400} fontSize={16}>
                    50 kg
                  </Text>
                  <Text fontWeight={700} fontSize={12} color="text.500">
                    Thiếu cân
                  </Text>
                </Box>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Profile;

const styles = StyleSheet.create({});
