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
import { IFood, IFoodSession, ISession } from "../../type/common";
import { useAppDispatch } from "../../store";
import { removeLoading, setLoading } from "../../store/loading.reducer";

type Props = {} & NativeStackScreenProps<RootStackParams, "CreateMenu2">;

const CreateMenu2 = (props: Props) => {
  const { navigation, route } = props;
  const { dayId, sessionId } = route.params;
  const dispatch = useAppDispatch();
  const [listFood, setListFood] = useState<IFood[]>([]);
  const [foodMenu, setFoodMenu] = useState<IFoodSession>({});
  // TODO: Get history menu to apply value to food quantity

  const fetchAllFood = async () => {
    try {
      dispatch(setLoading());
      const queryFood = await getDocs(collection(firebaseDb, "foods"));
      const foods: IFood[] = [];
      queryFood.forEach((doc: any) => {
        foods.push({ ...doc.data() });
      });
      setListFood(foods);
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(removeLoading());
    }
  };

  const handleGetFoodSession = async () => {
    try {
      dispatch(setLoading());
      const docRef = doc(firebaseDb, "menus", dayId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const objSession = docSnap.data();
        const objFood = objSession[sessionId];
        console.log(
          "🚀 ~ file: CreateMenu2.tsx:55 ~ handleGetFoodSession ~ objFood:",
          objFood
        );
        setFoodMenu(objFood);
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(removeLoading());
    }
  };

  useEffect(() => {
    handleGetFoodSession();
    fetchAllFood();
  }, []);

  const handleFoodToMenu = (
    foodId: string,
    quantity: number,
    foodInfo: IFood
  ) => {
    let newListFood: any = {};
    // TODO: remove food data, just save food Id
    newListFood = {
      ...foodMenu,
      [foodId]: {
        foodInfo,
        quantity,
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
        const menuData: ISession = {
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
              <FoodMenuCard
                foodInfo={food}
                handleAdd={handleFoodToMenu}
                isEdit={true}
                numFood={
                  foodMenu[food.id as any] && foodMenu[food.id as any].quantity
                }
              />
            </Box>
          ))}
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default CreateMenu2;

const styles = StyleSheet.create({});
