import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Box, HStack, ScrollView, Text, VStack } from "native-base";
import Header from "../../components/Header";
import CustomButton from "../../components/CustomButton";
import FoodCard from "../../components/FoodCard";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { createFood } from "../../data/mockup";
import { collection, getDocs } from "firebase/firestore";
import { IFood } from "../../type/common";
import { firebaseDb } from "../../firebase";

type Props = {};

const Home = (props: Props) => {
  const user = useAppSelector((state: RootState) => state.user.user);
  const [listFood, setListFood] = useState<IFood[]>([]);
  const dispatch = useAppDispatch();

  const fetchAllFood = async () => {
    // TODO: Define type for book
    const queryFood = await getDocs(collection(firebaseDb, "foods"));
    const foods: IFood[] = [];
    queryFood.forEach((doc: any) => {
      foods.push({ ...doc.data() });
    });
    setListFood(foods);
  };

  const handleBtn = async () => {
    // createFood();
  };

  useEffect(() => {
    fetchAllFood();
  }, []);

  return (
    <Box flex={1} bgColor={"muted.900"}>
      <Header.HomeHeader name={user?.fullname} />
      <VStack flex={1} px={6} pt={8} pb={4}>
        <HStack space={6}>
          <Box flex={1}>
            <CustomButton btnText="Thực phẩm" handleBtn={handleBtn} />
          </Box>
          <Box flex={1}>
            <CustomButton btnText="Luyện tập" active={false} />
          </Box>
          <Box flex={1}>
            <CustomButton btnText="Bài viết" active={false} />
          </Box>
        </HStack>
        <Box my={4}>
          <Text fontWeight={400} fontSize={16}>
            Thực phẩm giàu dinh dưỡng
          </Text>
        </Box>
        {/* List Food */}

        <ScrollView>
          <VStack flex={1} space={4}>
            {listFood.map((food) => (
              <Box key={food.id}>
                <FoodCard
                  foodInfo={food}
                />
              </Box>
            ))}
          </VStack>
        </ScrollView>
      </VStack>
    </Box>
  );
};

export default Home;

const styles = StyleSheet.create({});
