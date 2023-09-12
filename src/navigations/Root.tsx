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
import CreateMenu from "../screens/CreateMenu";
import CreateMenu2 from "../screens/CreateMenu2";
import BMI from "../screens/BMI";
import Setting from "../screens/Setting";
import Feedback from "../screens/Feedback";
import About from "../screens/About";

const Stack = createNativeStackNavigator<any>();

const Root = () => {
  // const user = useAppSelector((state: RootState) => state.user.user);
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();

  const user = true;

  return (
    <Box
      style={{
        paddingTop: insets.top,
        paddingBottom: 8,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor:  false ? colors.muted[800] : colors.muted[900],
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
          {true && <Stack.Screen name="Auth" component={AuthStack} />}
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Feedback" component={Feedback} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="BMI" component={BMI} />
          <Stack.Screen name="CreateMenu2" component={CreateMenu2} />
          {user && <Stack.Screen name="TabNav" component={TabNav} />}
          <Stack.Screen name="CreateMenu" component={CreateMenu} />
        </Stack.Navigator>
      </NavigationContainer>
    </Box>
  );
};

export default Root;

const styles = StyleSheet.create({});
