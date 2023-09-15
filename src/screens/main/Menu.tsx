import { StyleSheet } from "react-native";
import React from "react";
import { Box, HStack, ScrollView, Text, VStack } from "native-base";
import Header from "../../components/Header";
import CustomButton from "../../components/CustomButton";
import MenuDayCard from "../../components/MenuDayCard";

type Props = {};

const Menu = (props: Props) => {
  const handleBtnAdd = () => {};
  const handleSearch = () => {};

  return (
    <Box flex={1} bgColor={"muted.900"}>
      <Header.BasicHeader
        title="Thực đơn của riêng bạn"
        handleAdd={handleBtnAdd}
        handleSearch={handleSearch}
      />
      <VStack flex={1} px={6} pt={8} pb={4} space={4}>
        <HStack space={2} justifyContent={"space-between"}>
          <Box flex={1}>
            <CustomButton btnText="Bữa sáng" />
          </Box>
          <Box flex={1}>
            <CustomButton btnText="Bữa trưa" active={false} />
          </Box>
          <Box flex={1}>
            <CustomButton btnText="Bữa tối" active={false} />
          </Box>
          <Box flex={1}>
            <CustomButton btnText="Bữa tối" active={false} />
          </Box>
        </HStack>
        <ScrollView>
          <VStack flex={1} space={6}>
            <MenuDayCard />
            <MenuDayCard />
          </VStack>
        </ScrollView>
      </VStack>
    </Box>
  );
};

export default Menu;

const styles = StyleSheet.create({});
