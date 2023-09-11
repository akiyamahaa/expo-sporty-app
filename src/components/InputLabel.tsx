import { StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  Box,
  IInputProps,
  Icon,
  Input,
  Pressable,
  Text,
  useTheme,
} from "native-base";
import { Eye, EyeSlash } from "iconsax-react-native";

type Props = {
  label: string;
  showIcon?: boolean;
} & IInputProps;

const InputLabel = (props: Props) => {
  const { label, secureTextEntry, placeholder, showIcon = false } = props;
  const [show, setShow] = useState(false);
  const { colors } = useTheme();
  return (
    <Box width="100%">
      <Text mb={1} color={"text.400"}>
        {label}
      </Text>
      <Input
        width={"100%"}
        color="text.50"
        height={10}
        borderRadius={100}
        borderColor={"muted.700"}
        secureTextEntry={secureTextEntry && show}
        placeholder={placeholder}
        placeholderTextColor={colors.text[600]}
        InputRightElement={
          showIcon ? (
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  show ? (
                    <EyeSlash size="24" color={colors.muted[400]} />
                  ) : (
                    <Eye size="24" color={colors.muted[400]} />
                  )
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          ) : (
            <Box />
          )
        }
      />
    </Box>
  );
};

export default InputLabel;

const styles = StyleSheet.create({});
