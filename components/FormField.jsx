import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

return (
    <View className={`space-y-1 ${otherStyles}`}>
        <Text className="text-base text-gray-500 font-mbold">{title}</Text>
        <View className="w-11/12 h-12 px-10 bg-gray-100 border-black-200 flex flex-row items-center rounded-md">
            {title === "Email" && (
                <Image
                    source={icons.email}
                    className="w-5 h-5 -ml-6 mr-2"
                    resizeMode="contain"
                />
            )}

            {title === "Password" && (
                <Image
                    source={icons.senha}
                    className="w-5 h-5 -ml-6 mr-2"
                    resizeMode="contain"
                />
            )}

            <TextInput
                className="flex-1 text-gray-700 font-psemibold text-base"
                value={value}
                placeholder={placeholder}
                placeholderTextColor="#BCC1CA"
                selectionColor={"#003A67"}
                onChangeText={handleChangeText}
                secureTextEntry={title === "Password" && !showPassword}
                style={{ fontFamily: "Montserrat-Regular" }}
                {...props}
            />

            {title === "Password" && (
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Image
                        source={!showPassword ? icons.eye : icons.eyeHide}
                        className="w-5 h-5 -mr-5"
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            )}
        </View>
    </View>
);
};

export default FormField;