import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Box, ScrollView, VStack } from "native-base";
import Header from "../../components/Header";
import FoodMenuCard from "../../components/FoodMenuCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { firebaseDb } from "../../firebase";
import { IFood, IMenu } from "../../type/common";

type Props = {} & NativeStackScreenProps<RootStackParams, "CreateMenu2">;

interface IFoodMenu {
  [foodId: string]: number;
}

const CreateMenu2 = (props: Props) => {
  const { navigation, route } = props;
  const { dayId, sessionId } = route.params;
  console.log("🚀 ~  dayId:", dayId, sessionId);
  const [listFood, setListFood] = useState<IFood[]>([]);
  const [foodMenu, setFoodMenu] = useState<IFoodMenu[] | null | any>(null);
  // TODO: Get history menu to apply value to food quantity

  const fetchAllFood = async () => {
    const queryFood = await getDocs(collection(firebaseDb, "foods"));
    const foods: IFood[] = [];
    queryFood.forEach((doc: any) => {
      foods.push({ ...doc.data() });
    });
    setListFood(foods);
  };

  useEffect(() => {
    fetchAllFood();
  }, []);

  const handleFoodToMenu = (foodId: string, quantity: number, foodInfo: IFood) => {
    let newListFood: any = {};
    // TODO: remove food data, just save food Id
    newListFood = {
      ...foodMenu,
      [foodId]: {
        foodInfo,
        quantity
      },
    };
    if (newListFood[foodId].quantity == 0) {
      delete newListFood[foodId];
    }
    setFoodMenu(newListFood);
  };

  const handleBack = () => {
    navigation.goBack();
  };
  const handleSearch = () => {};
  const handleDone = async () => {
    try {
      const menuDocRef = doc(firebaseDb, "menus", dayId);

      // check exist before create
      const docRef = doc(firebaseDb, "menus", dayId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // update menu
        await updateDoc(docRef, {
          [sessionId]: foodMenu,
        });
      } else {
        const menuData: IMenu = {
          [sessionId]: foodMenu,
        };
        await setDoc(menuDocRef, menuData);
      }
      navigation.navigate("TabNav");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box flex={1} bgColor={"muted.900"}>
      <Header.BasicHeader
        title="Tạo thực đơn mới"
        handleBtnBack={handleBack}
        handleSearch={handleSearch}
        handleDone={handleDone}
      />
      <ScrollView>
        <VStack space={4} py={4} px={6}>
          {listFood.map((food) => (
            <Box key={food.id}>
              <FoodMenuCard foodInfo={food} handleAdd={handleFoodToMenu} />
            </Box>
          ))}
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default CreateMenu2;

const styles = StyleSheet.create({});
