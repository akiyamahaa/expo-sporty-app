import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import { AuthStackParams } from "./config";
import PhoneScreen from "../screens/auth/PhoneScreen";
import OTPScreen from "../screens/auth/OTPScreen";
import ChangePassword from "../screens/auth/ChangePassword";
import PostAuth from "../screens/auth/PostAuth";

const Stack = createNativeStackNavigator<AuthStackParams>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      // initialRouteName="Login"
    >
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Phone" component={PhoneScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="PostAuth" component={PostAuth} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
