import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ErrorOverlay from "../components/ErrorOverlay";
import LoadingOverlay from "../components/LoadingOverlay";
import { RootStackParams } from "./config";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, useTheme } from "native-base";
import { StatusBar } from "expo-status-bar";
import { RootState, useAppDispatch, useAppSelector } from "../store";
import AuthStack from "./AuthStack";
import TabNav from "./TabNav";
import About from "../screens/main/About";
import Feedback from "../screens/main/Feedback";
import BMI from "../screens/main/BMI";
import CreateMenu2 from "../screens/main/CreateMenu2";
import CreateMenu from "../screens/main/CreateMenu";
import DailyMenu from "../screens/main/DailyMenu";
import InfoDetail from "../screens/main/InfoDetail";
import Setting from "../screens/main/Setting";

const Stack = createNativeStackNavigator<RootStackParams>();

const Root = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state: RootState) => state.user.user);
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();

  return (
    <Box
      style={{
        paddingTop: insets.top,
        paddingBottom: 8,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: user ? colors.muted[800] : colors.muted[900],
        flex: 1,
      }}
    >
      <StatusBar style="light" />
      <LoadingOverlay />
      <ErrorOverlay />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {!user && <Stack.Screen name="Auth" component={AuthStack} />}
          {user && <Stack.Screen name="TabNav" component={TabNav} />}
          <Stack.Screen name="InfoDetail" component={InfoDetail} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Feedback" component={Feedback} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="BMI" component={BMI} />
          <Stack.Screen name="CreateMenu2" component={CreateMenu2} />
          <Stack.Screen name="CreateMenu" component={CreateMenu} />
          <Stack.Screen name="DailyMenu" component={DailyMenu} />
        </Stack.Navigator>
      </NavigationContainer>
    </Box>
  );
};

export default Root;

const styles = StyleSheet.create({});
