import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { icons, images } from '../constants'; // Presumindo que os ícones e imagens estão aqui
import { router } from 'expo-router';

const PatientDetails = () => {

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
          <Text className="text-lg font-pbold text-secondary">Patient Details</Text>
          <TouchableOpacity>
            <Image source={icons.more} resizeMode="contain" className="w-6 h-6" />
          </TouchableOpacity>
        </View>

        {/* Patient Info */}
        <View className="flex-row items-center py-6">
          {/* Avatar */}
          <View className="bg-blue-900 rounded-full p-5">
            <Image source={images.avatar} resizeMode="contain" className="w-15 h-15 text-white" />
          </View>

          {/* Alinhamento à esquerda do Nome e Informações */}
          <View className="-ml-2">
            <Text className="text-xl font-pbold text-secondary">John Doe</Text>
            <Text className="text-black-100 font-mregular">Type 2 Diabetes</Text>
          </View>
        </View>

        {/* Patient Details */}
        <View className="bg-gray-100 mx-6 p-4 rounded-xl">
          <View className="flex-row items-center mb-7">
            <Image source={icons.aniversary} resizeMode="contain" className="w-5 h-5" />
            <Text className="ml-3 text-gray-700 font-mregular">06/19/1963</Text>
          </View>
          <View className="flex-row items-center mb-7">
            <Image source={icons.genre} resizeMode="contain" className="w-5 h-5" />
            <Text className="ml-3 text-gray-700 font-mregular">Male</Text>
          </View>
          <View className="flex-row items-center mb-7">
            <Image source={icons.telephone} resizeMode="contain" className="w-5 h-5" />
            <Text className="ml-3 text-gray-700 font-mregular">(123) 456-7890</Text>
          </View>
          <View className="flex-row items-center mb-7">
            <Image source={icons.email2} resizeMode="contain" className="w-5 h-5" />
            <Text className="ml-3 text-gray-700">johndoe@example.com</Text>
          </View>
          <View className="flex-row items-center">
            <Image source={icons.addres} resizeMode="contain" className="w-5 h-5" />
            <Text className="ml-3 text-gray-700">33 Dale Avenue, Tacoma - WA</Text>
          </View>
        </View>

        {/* Information Section */}
        <View className="mt-6 px-6">
          <Text className="text-lg font-pbold text-secondary mb-10">Information</Text>

          <TouchableOpacity className="bg-gray-200 p-4 rounded-full flex-row items-center justify-center mb-3">
            <Image source={icons.medicalInfo} resizeMode="contain" className="w-5 h-5" />
            <Text className="ml-2 text-gray-700">Medical Info</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-gray-200 p-4 rounded-full flex-row items-center justify-center mb-3">
            <Image source={icons.lesion} resizeMode="contain" className="w-5 h-5" />
            <Text className="ml-2 text-gray-700">Lesion evolution</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-blue-900 p-4 rounded-full flex-row items-center justify-center">
            <Image source={icons.followUp} resizeMode="contain" className="w-5 h-5 text-white" />
            <Text className="ml-2 text-white">Follow Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PatientDetails;
