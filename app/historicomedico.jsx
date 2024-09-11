import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { icons, images } from '../constants'; // Presumindo que os ícones e imagens estão aqui
import { router } from 'expo-router';

const MedicalInfoScreen = () => {

  const handleBackPress = () => {
    router.push("/detalhesdopaciente");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Define a cor da StatusBar */}
      <StatusBar backgroundColor="#f3f4f6" barStyle="dark-content" />

      <ScrollView>
        {/* Header */}
        <View className="flex-row justify-between items-center px-4 py-3 bg-gray-100 shadow-md">
          <TouchableOpacity onPress={handleBackPress}>
            <Image source={icons.back} resizeMode="contain" className="w-6 h-6" />
          </TouchableOpacity>
          <Text className="text-lg font-pbold text-secondary">Medical Info</Text>
          <TouchableOpacity>
            <Image source={icons.more} resizeMode="contain" className="w-6 h-6" />
          </TouchableOpacity>
        </View>

        {/* Patient Info */}
        <View className="items-center py-6 mt-8">
          {/* Avatar */}
          <View className="bg-blue rounded-full">
            <Image source={images.avatar} resizeMode="contain" className="w-20 h-20" />
          </View>

          {/* Nome e Informações debaixo do Avatar */}
          <View className="mt-4 items-center">
            <Text className="text-xl font-pbold text-secondary">John Doe</Text>
            <Text className="text-gray-300 text-sm font-mregular">Updated on 04/21/2023</Text>
          </View>
        </View>

        {/* About the patient */}
        <View className="px-4 mt-6">
        <View className="flex-row items-center">
            <Image source={icons.profile} resizeMode="contain" className="w-6 h-6 mr-2" />
            <Text className="text-xl font-pregular text-secondary">About the patient</Text>
          </View>
          <Text className="text-black-100 font-mregular mt-2 bg-gray-100 p-4 rounded-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            placerat feugiat sollicitudin. In hac habitasse platea dictumst.
            Vivamus pulvinar iaculis ante, quis congue mi commodo non. Aenean
            porttitor sem et augue pretium mattis.
          </Text>
        </View>

{/* Icons Section with Gray Background */}
<View className="mt-6 px-4 h-80">
  <View className="bg-gray-100 p-4 rounded-lg h-72">
    <View className="flex-row justify-between">
      <TouchableOpacity className="items-center bg-blue-100 w-32 h-32 rounded-lg">
        <View className="p-1 rounded-full mt-4">
          <Image source={icons.medicalHistory} resizeMode="contain" className="w-17 h-27" />
        </View>
        <Text className="text-secondary font-pbold text-sm text-center">Medical History</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center w-32 h-32 rounded-lg">
        <View className="p-1 rounded-full mt-4">
          <Image source={icons.diagnosis} resizeMode="contain" className="w-17 h-27" />
        </View>
        <Text className="text-secondary font-pbold text-sm text-center">Diagnosis</Text>
      </TouchableOpacity>
    </View>

    <View className="flex-row justify-between mt-4">
      <TouchableOpacity className="items-center w-32 h-32 rounded-lg">
        <View className="p-1 rounded-full mt-4">
          <Image source={icons.medication} resizeMode="contain" className="w-17 h-27" />
        </View>
        <Text className="text-secondary font-pbold text-sm text-center">Medication</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center w-32 h-32 rounded-lg">
        <View className="p-1 rounded-full mt-4">
          <Image source={icons.info} resizeMode="contain" className="w-17 h-27" />
        </View>
        <Text className="text-secondary font-pbold text-sm text-center">Other Info</Text>
      </TouchableOpacity>
    </View>
  </View>
</View>


      </ScrollView>
    </SafeAreaView>
  );
};

export default MedicalInfoScreen;
