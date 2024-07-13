import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Box, ScrollView, Text, VStack } from "native-base";
import Header from "../../components/Header";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/config";
import { useDispatch } from "react-redux";
import { removeLoading, setLoading } from "../../store/loading.reducer";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { firebaseDb } from "../../firebase";
import { IFood, ISession } from "../../type/common";
import MenuDayCard from "../../components/MenuDayCard";
import { getCurrentDate } from "../../utils/forms";
import { getOneDocument } from "../../firebase/api";

type Props = {} & NativeStackScreenProps<RootStackParams, "DailyMenu">;

const date = new Date();

const DailyMenu = (props: Props) => {
  const { navigation, route } = props;
  const dispatch = useDispatch();
  const date = getCurrentDate();
  const [listSession, setListSession] = useState<ISession>({});

  const handleGetDailyMenu = async () => {
    try {
      dispatch(setLoading());
      const dailyMeunu = await getOneDocument("daily", date);
      if (dailyMeunu) {
        setListSession(dailyMeunu);
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(removeLoading());
    }
  };

  useEffect(() => {
    handleGetDailyMenu();
  }, []);

  return (
    <Box flex={1} bgColor={"muted.900"}>
      <Header.BasicHeader
        title="Thực đơn trong ngày"
        handleBtnBack={() => navigation.goBack()}
      />
      <ScrollView>
        <VStack
          flex={1}
          px={6}
          pt={8}
          pb={20}
          space={4}
          justifyContent={"space-between"}
        >
          <MenuDayCard listSession={listSession} isUpdateDaily={true} />
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default DailyMenu;

const styles = StyleSheet.create({});
