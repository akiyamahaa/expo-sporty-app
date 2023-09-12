import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { Box, Center, Text, VStack } from "native-base";
import Header from "../../components/Header";
import InputLabel from "../../components/InputLabel";
import CustomButton from "../../components/CustomButton";
import PopUpNotice from "../../components/PopUpNotice";

type Props = {};

const ChangePassword = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  const handleBtnBack = () => {};

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Box flex={1} bgColor={"muted.900"}>
        <PopUpNotice showModal={showModal} setShowModal={setShowModal} />
        <Header.BasicHeader
          title="Quên mật khẩu"
          handleBtnBack={handleBtnBack}
        />
        <VStack
          flex={1}
          px={6}
          marginTop={116}
          justifyContent={"space-between"}
          py={6}
        >
          <VStack space={4}>
            <InputLabel
              label="Nhập mật khẩu"
              placeholder="Nhập mật khẩu"
              showIcon={true}
              secureTextEntry={true}
            />
            <InputLabel
              label="Nhập lại mật khẩu"
              placeholder="Nhập lại mật khẩu"
              showIcon={true}
              secureTextEntry={true}
            />
          </VStack>
          <Box px={6}>
            <CustomButton btnText="Đổi mật khẩu" />
          </Box>
        </VStack>
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
