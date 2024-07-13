import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Box, HStack, Icon, Input, Text, useTheme } from "native-base";
import { Add, ArrowLeft2, SearchNormal, Setting2 } from "iconsax-react-native";
import { RootState, useAppSelector } from "../store";
import { useNavigation } from "@react-navigation/native";

const HomeHeader = ({ name = "Jack 5M", handleSetting = null }: any) => {
  const navigation = useNavigation<any>();
  return (
    <Box bgColor={"muted.800"} px={4} py={2}>
      <HStack alignItems={"center"} justifyContent={"space-between"}>
        <TouchableOpacity onPress={() => navigation.navigate("TabNav")}>
          <Text fontSize={16} fontWeight={500}>
            Hi, {name}
          </Text>
        </TouchableOpacity>
        {handleSetting && (
          <Box>
            <TouchableOpacity onPress={handleSetting}>
              <Setting2 size="24" color="#fff" />
            </TouchableOpacity>
          </Box>
        )}
      </HStack>
    </Box>
  );
};

const SearchingBar = () => {
  const { colors } = useTheme();
  return (
    <Box mb={2}>
      <Input
        backgroundColor={"white"}
        borderRadius={100}
        px={1.5}
        py={3}
        placeholder="Tìm kiếm"
        placeholderTextColor={colors.muted[400]}
        InputLeftElement={
          <TouchableOpacity>
            <Icon
              as={<SearchNormal size="16" color={colors.muted[400]} />}
              size={5}
              ml="2"
              color="muted.400"
            />
          </TouchableOpacity>
        }
      />
    </Box>
  );
};

type Props = {
  handleBtnBack?: any;
  handleAdd?: any;
  handleDone?: any;
  handleSearch?: any;
  title: string;
};

const BasicHeader = (props: Props) => {
  // set when have user
  const user = useAppSelector((state: RootState) => state.user.user);
  const {
    title,
    handleBtnBack = null,
    handleAdd = null,
    handleDone = null,
    handleSearch = null,
  } = props;
  return (
    <Box bgColor={user ? "muted.800" : "muted.900"} px={4} py={2}>
      <HStack alignItems={"center"} justifyContent={"space-between"}>
        {handleBtnBack ? (
          <TouchableOpacity onPress={handleBtnBack}>
            <ArrowLeft2 size="32" color="white" />
          </TouchableOpacity>
        ) : (
          <Box size={8} />
        )}
        <Text fontSize={16} fontWeight={500}>
          {title}
        </Text>

        {handleAdd && (
          <TouchableOpacity onPress={handleAdd}>
            <Add size="32" color="white" />
          </TouchableOpacity>
        )}
        {handleDone && (
          <TouchableOpacity onPress={handleDone}>
            <Text fontSize={16} fontWeight={500}>
              Xong
            </Text>
          </TouchableOpacity>
        )}
        {!handleAdd && !handleDone && <Box size={8} />}
      </HStack>
      {handleSearch && <SearchingBar />}
    </Box>
  );
};

export default {
  BasicHeader,
  HomeHeader,
};

const styles = StyleSheet.create({});
