import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Box, Text } from "native-base";

type Props = {
  btnText: string;
  active?: boolean;
  handleBtn?: () => {};
};

const CustomButton = (props: Props) => {
  const { btnText, handleBtn, active = true } = props;
  return (
    <TouchableOpacity onPress={handleBtn}>
      <Box
        width="100%"
        borderRadius={100}
        bgColor={active ? "primary.600" : "muted.900"}
        height={10}
        borderColor={"primary.600"}
        borderWidth={1}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text
          fontWeight={500}
          fontSize={14}
          color={active ? "text.900" : "primary.600"}
        >
          {btnText}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
