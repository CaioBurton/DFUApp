// C:\Users\Caio Burton\Desktop\DFUApp\App.js

import React from 'react';
import { View, Image, Text } from 'react-native';
import { icons, images } from '../constants';
import { styled } from 'nativewind';

const App = () => {
  return (
    <View className="flex-1 justify-center items-center bg-blue-50">
      <Text className="text-2xl font-psemibold text-gray-900 mb-4">
        Welcome to DFUApp
      </Text>
      <Image source={images.logo} className="w-24 h-24 mb-4" />
      <Image source={icons.back} className="w-12 h-12 mb-4" />
      <Text className="text-lg text-gray-700">
        This is an example using images and icons with NativeWind.
      </Text>
    </View>
  );
};

export default styled(App);
