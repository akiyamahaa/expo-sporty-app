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
import { ISession } from "../../type/common";
import { useAppDispatch } from "../../store";
import { removeLoading, setLoading } from "../../store/loading.reducer";

type Props = {} & NativeStackScreenProps<RootStackParams>;
const dayGroup = ["0", "1", "2", "3", "4", "5", "6"];
const Menu = (props: Props) => {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const [dayId, setDayId] = useState("1");
  const [listSession, setListSession] = useState<ISession>({});
  const handleBtnAdd = () => {
    navigation.navigate("CreateMenu");
  };
  const handleSearch = () => {};

  const handleGetMenu = async () => {
    try {
      dispatch(setLoading());
      const docRef = doc(firebaseDb, "menus", dayId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setListSession(docSnap.data());
      } else {
        setListSession({});
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(removeLoading());
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
          <VStack flex={1} mt={4}>
            <MenuDayCard objectListMenu={listSession} dayId={dayId} />
          </VStack>
        </ScrollView>
      </VStack>
    </Box>
  );
};

export default Menu;

const styles = StyleSheet.create({});
