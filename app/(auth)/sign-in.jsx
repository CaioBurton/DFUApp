import { View, Text, ScrollView, Dimensions, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../../constants';

const signIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full flex justify-center h-full px-4 my-6 items-center">
            <Image source={images.logo} className="w-60 h-60"/>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default signIn