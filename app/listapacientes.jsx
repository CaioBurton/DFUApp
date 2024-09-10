import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { icons, images } from '../constants';
import { router } from 'expo-router';

const PatientList = () => {
  const patients = [
    { id: 1, name: 'John Doe', age: 60, lastFollowUp: '1 day ago' },
    { id: 2, name: 'Benjamin Button', age: 46, lastFollowUp: '1 month ago' },
    { id: 3, name: 'Justin Case', age: 38, lastFollowUp: '06/20/24' },
    { id: 4, name: 'Eric Widget', age: 46, lastFollowUp: '06/12/24' },
  ];

  const handlePatientPress = (patientId) => {
    router.push("/detalhesdopaciente");
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full h-full px-4 my-3">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-6">
            <Image source={icons.logout} resizeMode='contain' className="w-6 h-6" />
            <Image source={icons.notifications} resizeMode='contain' className="w-6 h-6" />
            <Image source={icons.drawer} resizeMode='contain' className="w-6 h-6 -ml-64" />
          </View>

          {/* Welcome Message */}
          <Text className="text-3xl font-pbold text-blue-900 mt-5 text-secondary">Welcome,</Text>
          <Text className="text-xl font-mregular text-black-100 mb-10">Dr. Smith.</Text>

          {/* Centralized Patients Title */}
          <View className="h-20 justify-center items-center mb-2">
            <Text className="text-xl font-pbold text-secondary">Patients</Text>
          </View>

          {/* Search Bar */}
          <View className="flex-row items-center bg-gray-100 rounded-lg mb-6 px-4 py-3 w-11/12 mx-auto">
            <Image source={icons.search} resizeMode='contain' className="w-5 h-5 text-gray-500" />
            <Text className="ml-3 flex-1 text-gray-200">Search</Text>
          </View>

          {/* Patient List */}
          <ScrollView className="space-y-2 rounded-md px-2">
            {patients.map((patient) => (
              <TouchableOpacity
                key={patient.id}
                onPress={() => handlePatientPress(patient.id)}
                className="flex-row items-center bg-gray-50 rounded-lg p-4 shadow-sm"
              >
                {/* Avatar */}
                <View className="bg-blue-800 p-1 rounded-full">
                  <Image source={images.avatar} resizeMode='contain' className="w-12 h-12 text-white" />
                </View>

                {/* Informações do Paciente */}
                <View className="ml-4 flex-1">
                  <Text className="text-lg font-pbold text-secondary">{patient.name}</Text>
                  <Text className="text-sm text-gray-500 font-mregular">{patient.age} years old</Text>

                  {/* Status de Acompanhamento */}
                  <View className="flex-row items-center mt-2">
                    <Image source={icons.calendar} resizeMode='contain' className="w-4 h-4 text-gray-500 mr-1" />
                    <Text className="text-xs text-gray-500 font-mregular">Last follow-up {patient.lastFollowUp}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PatientList;
