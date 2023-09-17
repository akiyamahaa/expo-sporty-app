import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Box, HStack, ScrollView, Text, VStack } from "native-base";
import Header from "../../components/Header";
import CustomButton from "../../components/CustomButton";
import MenuDayCard from "../../components/MenuDayCard";
import { RootStackParams } from "../../navigations/config";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { doc, getDoc } from "firebase/firestore";
import { firebaseDb } from "../../firebase";
import { convertDaytoName } from "../../utils/forms";
import { IMenu } from "../../type/common";

type Props = {} & NativeStackScreenProps<RootStackParams>;
const dayGroup = ["0", "1", "2", "3", "4", "5", "6"];
const Menu = (props: Props) => {
  const { navigation } = props;
  const [dayId, setDayId] = useState("1");
  const [listMenu, setListMenu] = useState<IMenu>({});
  const handleBtnAdd = () => {
    navigation.navigate("CreateMenu");
  };
  const handleSearch = () => {};

  const handleGetMenu = async () => {
    const docRef = doc(firebaseDb, "menus", dayId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setListMenu(docSnap.data());
    }
  };

  useEffect(() => {
    handleGetMenu();
  }, [dayId]);

  return (
    <Box flex={1} bgColor={"muted.900"}>
      <Header.BasicHeader
        title="Thực đơn của riêng bạn"
        handleAdd={handleBtnAdd}
        handleSearch={handleSearch}
      />
      <VStack px={6} pt={8} pb={4} space={4}>
        <ScrollView horizontal>
          <HStack space={2}>
            {dayGroup.map((valueId) => (
              <Box width={20} key={valueId}>
                <CustomButton
                  btnText={convertDaytoName(valueId)}
                  active={valueId == dayId}
                  handleBtn={() => setDayId(valueId)}
                />
              </Box>
            ))}
          </HStack>
        </ScrollView>
        <ScrollView>
          <VStack flex={1} space={6}>
            <MenuDayCard objectListMenu={listMenu} />
          </VStack>
        </ScrollView>
      </VStack>
    </Box>
  );
};

export default Menu;

const styles = StyleSheet.create({});
