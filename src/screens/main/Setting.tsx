import { StyleSheet } from "react-native";
import React from "react";
import { Box, HStack, Switch, Text, VStack, useTheme } from "native-base";
import Header from "../../components/Header";
import {
  Component,
  InfoCircle,
  Notification,
  Profile,
} from "iconsax-react-native";
import CustomButton from "../../components/CustomButton";

type Props = {};

type PartProps = {
  type: string;
  handleSwitchBtn?: any;
};
const SettingPart = (props: PartProps) => {
  const { colors } = useTheme();
  const { type, handleSwitchBtn } = props;
  let IconTag, text;
  if (type == "notice") {
    text = "Thông báo";
    IconTag = <Notification size="28" color={colors.muted[500]} />;
  } else if (type == "profile") {
    text = "Cập nhật chỉ số trao đổi chất (BMI)";
    IconTag = <Profile size="28" color={colors.muted[500]} />;
  } else if (type == "reply") {
    text = "Gửi phản hồi";
    IconTag = <Component size="28" color={colors.muted[500]} />;
  } else if (type == "about") {
    text = "Về chúng tôi";
    IconTag = <InfoCircle size="28" color={colors.muted[500]} />;
  }

  return (
    <HStack justifyContent={"space-between"}>
      <HStack alignItems={"center"}>
        {/* <IconTag /> */}
        {IconTag}
        <Text ml={2} fontWeight={400} fontSize={16}>
          {text}
        </Text>
      </HStack>
      {handleSwitchBtn && <Switch size="sm" />}
    </HStack>
  );
};

const Setting = (props: Props) => {
  const handleSetting = () => {};
  return (
    <Box flex={1} bgColor={"muted.900"}>
      <Header.HomeHeader handleSetting={handleSetting} />
      <VStack flex={1} px={6} py={8} justifyContent={"space-between"}>
        <VStack space={3}>
          <SettingPart type="notice" />
          <SettingPart type="profile" />
          <SettingPart type="reply" />
          <SettingPart type="about" />
        </VStack>
        <Box>
          <CustomButton btnText="Đăng xuất" />
        </Box>
      </VStack>
    </Box>
  );
};

export default Setting;

const styles = StyleSheet.create({});
