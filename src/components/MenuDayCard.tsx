import { StyleSheet } from "react-native";
import React from "react";
import { Box, Center, HStack, Text, VStack, useTheme } from "native-base";
import FoodMenuCard from "./FoodMenuCard";
import { ISession } from "../type/common";
import { convertSessionToName } from "../utils/forms";

type Props = {
  objectListMenu: ISession;
  dayId: string;
};

interface IEdit {
  [key: string]: boolean;
}

const MenuDayCard = (props: Props) => {
  const { objectListMenu } = props;
  const { colors } = useTheme();

  const sessionKey = Object.keys(objectListMenu);

  return (
    <VStack space={4}>
      {sessionKey.map((session) => {
        const foodKey = Object.keys(objectListMenu[session]);
        const objectFood = objectListMenu[session];
        return (
          <Box>
            <HStack justifyContent={"space-between"} mb={1}>
              <Box>
                <Text fontWeight={400} fontSize={16}>
                  {convertSessionToName(session)}
                </Text>
              </Box>
            </HStack>
            <VStack space={2}>
              {foodKey.map((food) => (
                <Box>
                  <FoodMenuCard
                    foodInfo={objectFood[food].foodInfo}
                    numFood={objectFood[food].quantity}
                  />
                </Box>
              ))}
            </VStack>
          </Box>
        );
      })}
      {/* Show info when not having menu */}
      {sessionKey.length == 0 && (
        <Center mt={8}>
          <Text fontSize={20} fontWeight={500}>
            Chưa xây dựng thực đơn
          </Text>
        </Center>
      )}
    </VStack>
  );
};

export default MenuDayCard;

const styles = StyleSheet.create({});
