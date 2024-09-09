import { View, Text, ScrollView, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

import { icons, images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';

const signIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setSubmitting] = useState(false);

  const submit = () => {
    router.replace('/listapacientes')
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full flex justify-center h-full px-4 my-6 items-center">
            <Image source={images.logo} resizeMode='contain' className="w-[280] h-[280] -mt-20"/>
            <Text className="text-3xl text-secondary -mt-10 font-pbold">
              Hello!
            </Text>
            <Text className="text-xl text-gray-600 font-pregular">
              Welcome back.
            </Text>
            <FormField
              title="Email"
              value={form.email}
              placeholder={"Enter email"}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles="mt-8"
              keyboardType="email-address"
            />

            <FormField
              title="Password"
              value={form.password}
              placeholder={"Enter password"}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles="mt-4"
            />

            <View className="w-full pt-2">
              <Text className="text-sm text-gray-300 font-pregular text-right mr-4">
                Forgot password?
              </Text>
            </View>

            <CustomButton
              title="Login"
              handlePress={submit}
              containerStyles={"mt-6"}
              isLoading={isSubmitting}
            />

            <View className="w-full pt-10">
              <Text className="text-xs text-gray-400 font-mbold text-center">
                OR LOGIN WITH
              </Text>
            </View>

            <View className="">
              <View className="flex flex-row items-center mt-4 space-x-8">
                <Image source={icons.google} resizeMode='contain' className="w-8 h-8" />
                <Image source={icons.facebook} resizeMode='contain' className="w-8 h-8" />
                <Image source={icons.apple} resizeMode='contain' className="w-8 h-8" />
              </View>
            </View>

            <View className="flex justify-center pt-10 flex-row gap-1">
              <Text className="text-base text-black-100 font-mregular">
                Don't have an account?
              </Text>
              <Link href="/sign-up" className="text-base font-mbold text-secondary -ml-10">
                Sign Up
              </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default signIn