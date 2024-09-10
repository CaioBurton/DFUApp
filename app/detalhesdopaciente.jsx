import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { icons, images } from '../constants'; // Presumindo que os ícones e imagens estão aqui

const PatientDetails = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        {/* Header */}
        <View className="flex-row justify-between items-center px-4 py-1 bg-gray-100 shadow h-12">
          <TouchableOpacity>
            <Image source={icons.back} resizeMode="contain" className="w-6 h-6" />
          </TouchableOpacity>
          <Text className="text-lg font-pbold text-secondary">Patient Details</Text>
          <TouchableOpacity>
            <Image source={icons.more} resizeMode="contain" className="w-6 h-6" />
          </TouchableOpacity>
        </View>

        {/* Patient Info */}
        <View className="items-center py-6">
          <View className="bg-blue-900 rounded-full p-5 mb-4">
            <Image source={icons.user} resizeMode="contain" className="w-10 h-10 text-white" />
          </View>
          <Text className="text-xl font-bold text-blue-900">John Doe</Text>
          <Text className="text-gray-500">Type 2 Diabetes</Text>
        </View>

        {/* Patient Details */}
        <View className="bg-gray-100 mx-6 p-4 rounded-lg">
          <View className="flex-row items-center mb-3">
            <Image source={icons.birthday} resizeMode="contain" className="w-5 h-5" />
            <Text className="ml-3 text-gray-700">06/19/1963</Text>
          </View>
          <View className="flex-row items-center mb-3">
            <Image source={icons.gender} resizeMode="contain" className="w-5 h-5" />
            <Text className="ml-3 text-gray-700">Male</Text>
          </View>
          <View className="flex-row items-center mb-3">
            <Image source={icons.phone} resizeMode="contain" className="w-5 h-5" />
            <Text className="ml-3 text-gray-700">(123) 456-7890</Text>
          </View>
          <View className="flex-row items-center mb-3">
            <Image source={icons.email} resizeMode="contain" className="w-5 h-5" />
            <Text className="ml-3 text-gray-700">johndoe@example.com</Text>
          </View>
          <View className="flex-row items-center">
            <Image source={icons.location} resizeMode="contain" className="w-5 h-5" />
            <Text className="ml-3 text-gray-700">33 Dale Avenue, Tacoma - WA</Text>
          </View>
        </View>

        {/* Information Section */}
        <View className="mt-6 px-6">
          <Text className="text-lg font-bold text-gray-700 mb-4">Information</Text>

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
