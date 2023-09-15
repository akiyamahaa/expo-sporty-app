import { StyleSheet } from "react-native";
import React from "react";
import { Box, HStack, ScrollView, Text, VStack } from "native-base";
import Header from "../../components/Header";
import CustomButton from "../../components/CustomButton";
import FoodCard from "../../components/FoodCard";

type Props = {};

const Home = (props: Props) => {
  return (
    <Box flex={1} bgColor={"muted.900"}>
      <Header.HomeHeader />
      <VStack flex={1} px={6} pt={8} pb={4}>
        <HStack space={6}>
          <Box flex={1}>
            <CustomButton btnText="Thực phẩm" />
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
            <FoodCard
              foodInfo={{
                image: require("../../../assets/food/image1.png"),
                name: "Cuộn bơ, cá hồi (đồ ăn Nhật Bản)",
                quantity: 100,
                calories: 136.2,
              }}
            />
            <FoodCard
              foodInfo={{
                image: require("../../../assets/food/image1.png"),
                name: "Cuộn bơ, cá hồi (đồ ăn Nhật Bản)",
                quantity: 100,
                calories: 136.2,
              }}
            />
            <FoodCard
              foodInfo={{
                image: require("../../../assets/food/image1.png"),
                name: "Cuộn bơ, cá hồi (đồ ăn Nhật Bản)",
                quantity: 100,
                calories: 136.2,
              }}
            />
            <FoodCard
              foodInfo={{
                image: require("../../../assets/food/image1.png"),
                name: "Cuộn bơ, cá hồi (đồ ăn Nhật Bản)",
                quantity: 100,
                calories: 136.2,
              }}
            />
            <FoodCard
              foodInfo={{
                image: require("../../../assets/food/image1.png"),
                name: "Cuộn bơ, cá hồi (đồ ăn Nhật Bản)",
                quantity: 100,
                calories: 136.2,
              }}
            />
            <FoodCard
              foodInfo={{
                image: require("../../../assets/food/image1.png"),
                name: "Cuộn bơ, cá hồi (đồ ăn Nhật Bản)",
                quantity: 100,
                calories: 136.2,
              }}
            />
          </VStack>
        </ScrollView>
      </VStack>
    </Box>
  );
};

export default Home;

const styles = StyleSheet.create({});
