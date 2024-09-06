import { View, Text, ScrollView, Dimensions, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

import { icons, images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
import Checkbox from 'expo-checkbox';

const signUp = () => {
  const [isChecked, setChecked] = useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setSubmitting] = useState(false);

  const submit = () => {
    if (isChecked) {
      // Perform submit logic here
    } else {
      Alert.alert("Error", "Please agree to the Terms and Conditions");
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full flex justify-center h-full px-4 my-6 items-center">
            <Image source={images.logo} resizeMode='contain' className="w-[250] h-[250] -mt-20"/>
            <Text className="text-2xl text-secondary -mt-10 font-pbold">
              Sign Up
            </Text>
            <Text className="text-lg text-gray-600 font-pregular">
              Create a new account.
            </Text>

            <FormField
              title="Username"
              value={form.username}
              placeholder={"Enter username"}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles="mt-6"
              keyboardType="email-address"
            />

            <FormField
              title="Email"
              value={form.email}
              placeholder={"Enter email"}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles="mt-3"
              keyboardType="email-address"
            />

            <FormField
              title="Password"
              value={form.password}
              placeholder={"Enter password"}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles="mt-3"
            />

            <View className="w-full pt-4 flex flex-row items-center">
              <Checkbox
                className="ml-4"
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#003A67' : undefined}
              />
              <Text className="text-sm text-gray-300 font-pregular text-left pl-2">
                I agree with the Terms and Conditions
              </Text>
            </View>

            <CustomButton
              title="Sign Up"
              handlePress={submit}
              containerStyles={"mt-6"}
              isLoading={isSubmitting}
            />

            <View className="w-full pt-8">
              <Text className="text-xs text-gray-400 font-mbold text-center">
                OR SIGN UP WITH
              </Text>
            </View>

            <View className="">
              <View className="flex flex-row items-center mt-4 space-x-8">
                <Image source={icons.google} resizeMode='contain' className="w-8 h-8" />
                <Image source={icons.facebook} resizeMode='contain' className="w-8 h-8" />
                <Image source={icons.apple} resizeMode='contain' className="w-8 h-8" />
              </View>
            </View>

            <View className="flex justify-center pt-10 flex-row gap-1 mb-10">
              <Text className="text-base text-black-100 font-mregular">
                Already have an account?
              </Text>
              <Link href="/sign-in" className="text-base font-mbold text-secondary -ml-10">
                Sign In
              </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default signUp