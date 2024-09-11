import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { icons, images } from '../constants'; // Presumindo que os ícones e imagens estão aqui
import { router } from 'expo-router';

const MedicalInfoScreen = () => {

  const handleBackPress = () => {
    router.push("/listapacientes");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Define a cor da StatusBar */}
      <StatusBar backgroundColor="#f3f4f6" barStyle="dark-content" />

      <ScrollView>
        {/* Header */}
        <View className="flex-row justify-between items-center px-4 py-1 bg-gray-100 shadow h-12">
          <TouchableOpacity onPress={handleBackPress}>
            <Image source={icons.back} resizeMode="contain" className="w-6 h-6" />
          </TouchableOpacity>
          <Text className="text-lg font-pbold text-secondary">Medical Info</Text>
          <TouchableOpacity>
            <Image source={icons.more} resizeMode="contain" className="w-6 h-6" />
          </TouchableOpacity>
        </View>

        {/* Patient Info */}
        <View className="flex-row items-center py-6 justify-center">
          {/* Avatar */}
          <View className="bg-blue-900 rounded-full p-5">
            <Image source={images.avatar} resizeMode="contain" className="w-15 h-15 text-white" />
          </View>

          {/* Alinhamento à esquerda do Nome e Informações */}
          <View className="-ml-2">
            <Text className="text-xl font-pbold text-secondary">John Doe</Text>
            <Text className="text-black-100 font-mregular">Updated on 04/21/2023</Text>
          </View>
        </View>

        {/* About the patient */}
        <View className="px-4 mt-6">
          <Text className="text-lg font-pbold text-secondary">About the patient</Text>
          <Text className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            placerat feugiat sollicitudin. In hac habitasse platea dictumst.
            Vivamus pulvinar iaculis ante, quis congue mi commodo non. Aenean
            porttitor sem et augue pretium mattis.
          </Text>
        </View>

        {/* Icons Section */}
        <View className="mt-6 px-4">
          <View className="flex-row justify-between">
            <TouchableOpacity className="items-center bg-blue-100 w-24 h-24 rounded-lg">
              <View className="bg-teal-500 p-3 rounded-full mt-4">
                <Image source={icons.medical} resizeMode="contain" className="w-5 h-5" />
              </View>
              <Text className="mt-2 text-blue-900 font-semibold">Medical History</Text>
            </TouchableOpacity>

            <TouchableOpacity className="items-center bg-orange-100 w-24 h-24 rounded-lg">
              <View className="bg-orange-500 p-3 rounded-full mt-4">
                <Image source={icons.diagnosis} resizeMode="contain" className="w-5 h-5" />
              </View>
              <Text className="mt-2 text-orange-900 font-semibold">Diagnosis</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-between mt-4">
            <TouchableOpacity className="items-center bg-pink-100 w-24 h-24 rounded-lg">
              <View className="bg-pink-500 p-3 rounded-full mt-4">
                <Image source={icons.medication} resizeMode="contain" className="w-5 h-5" />
              </View>
              <Text className="mt-2 text-pink-900 font-semibold">Medication</Text>
            </TouchableOpacity>

            <TouchableOpacity className="items-center bg-purple-100 w-24 h-24 rounded-lg">
              <View className="bg-purple-500 p-3 rounded-full mt-4">
                <Image source={icons.otherinfo} resizeMode="contain" className="w-5 h-5" />
              </View>
              <Text className="mt-2 text-purple-900 font-semibold">Other Info</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MedicalInfoScreen;
