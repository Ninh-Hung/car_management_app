import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  Modal,
  Platform, // For platform-specific date picker
} from 'react-native';
import { SvgXml } from 'react-native-svg'; // For camera and gallery icons

// Using an external date picker library for year selection
import DateTimePicker from '@react-native-community/datetimepicker';
import UploadPhoto from './common/UploadPhoto';
import { backArrowIconXml } from '../icons/IconSvgs';
import Dropdown from './common/Dropdown';
import InputCustom from './common/InputCustom';
import { launchCameraAndGetUri, launchImageLibraryAndGetUri } from '../utils/Utils';

// Header Component
const AddVehicleHeader = ({ onBackPress }: { onBackPress: () => void; }) => (
  <View className="flex-row items-center p-4 bg-white border-b border-gray-200">
    <TouchableOpacity onPress={onBackPress} className="p-2">
      <SvgXml xml={backArrowIconXml} width="24" height="24" stroke="#4b5563" />
    </TouchableOpacity>
    <Text className="flex-1 text-center text-xl font-bold text-gray-800 -ml-8">Add Vehicle</Text>
  </View>
);

// --- Main AddVehicleScreen Component ---
const AddVehicleScreen = ({ navigation }: { navigation: any; }) => {
  const [vehiclePhotoUri, setVehiclePhotoUri] = useState("");
  const [vehicleType, setVehicleType] = useState('');
  const [brand, setBrand] = useState('');
  const [yearOfManufacture, setYearOfManufacture] = useState('');
  const [vinNumber, setVinNumber] = useState('');
  const [engineNumber, setEngineNumber] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [color, setColor] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [mileage, setMileage] = useState('');

  // State for Year Picker Modal
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleBackPress = () => {
    navigation.goBack(); // Example navigation
  };

  const handleCameraPress = async () => {
    const uri = await launchCameraAndGetUri();
    if (uri) {
      setVehiclePhotoUri(uri);
    }
  };

  const handleGalleryPress = async () => {
    const uri = await launchImageLibraryAndGetUri();
    if (uri) {
      setVehiclePhotoUri(uri);
    }
  };

  const handleChooseYear = (event: Event, date: Date) => {
    setShowYearPicker(Platform.OS === 'ios'); // Keep picker open on Android, close on iOS
    if (date) {
      setSelectedDate(date);
      setYearOfManufacture(date.getFullYear().toString());
    }
  };

  const handleAddVehicle = () => {
    // Implement vehicle addition logic
    console.log('Add Vehicle:', {
      vehiclePhotoUri,
      vehicleType,
      brand,
      yearOfManufacture,
      vinNumber,
      color,
      fuelType,
      mileage,
    });
    alert('Vehicle added successfully!'); // Placeholder alert
    // navigation.goBack(); // Navigate back after adding
  };

  const handleCancel = () => {
    console.log('Add Vehicle cancelled');
    navigation.goBack(); // Go back to the previous screen
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="flex-1 p-4">
        <UploadPhoto
          photoUri={vehiclePhotoUri}
          onCameraPress={handleCameraPress}
          onGalleryPress={handleGalleryPress}
        />

        <View className="bg-white rounded-xl p-4 mx-4 mb-4 shadow-sm">
          {/* Vehicle Type Dropdown */}
          <Dropdown
            label="Vehicle Type"
            placeholder="Select vehicle type"
            value={vehicleType}
            onPress={() => console.log('Open Vehicle Type Picker')}
            required={true}
          />

          {/* Brand Dropdown */}
          <Dropdown
            label="Brand"
            placeholder="Select brand"
            value={brand}
            onPress={() => console.log('Open Brand Picker')}
            required={true}
          />

          {/* Year of Manufacture (Date/Year Picker) */}
          <Dropdown
            label="Year of Manufacture"
            placeholder="Select year"
            value={yearOfManufacture}
            onPress={() => setShowYearPicker(true)}
          />
          {showYearPicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date" // Use 'date' mode
              display={Platform.OS === 'ios' ? 'spinner' : 'default'} // 'spinner' for iOS, 'default' for Android
              // onChange={handleChooseYear}
              // Set maximum date to current year
              maximumDate={new Date(new Date().getFullYear(), 11, 31)}
              // Set minimum date to a reasonable past year, e.g., 1900
              minimumDate={new Date(1900, 0, 1)}
            />
          )}

          <InputCustom
            label="Registration Number"
            placeholder="Enter registration number"
            value={registrationNumber}
            onChangeText={setRegistrationNumber}
            keyboardType="default"
            required={true}
          />

          {/* VIN Number */}
          <InputCustom
            label="VIN Number"
            placeholder="Enter VIN number"
            value={vinNumber}
            onChangeText={setVinNumber}
            keyboardType="default"
            required={true}
          />
          <InputCustom
            label="Engine Number"
            placeholder="Enter engine number"
            value={engineNumber}
            onChangeText={setEngineNumber}
            keyboardType="default"
            required={true}
          />

          {/* Color */}
          <InputCustom
            label="Color"
            placeholder="Enter vehicle color"
            value={color}
            onChangeText={setColor}
            keyboardType="default"
          />

          {/* Fuel Type Dropdown */}
          <Dropdown
            label="Fuel Type"
            placeholder="Select fuel type"
            value={fuelType}
            onPress={() => console.log('Open Fuel Type Picker')}
            required={true}
          />

          {/* Mileage (km) */}
          <InputCustom
            label="Mileage (km)"
            placeholder="Enter current mileage"
            value={mileage}
            onChangeText={setMileage}
            keyboardType="numeric"
          />
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View className="flex-row justify-around p-4 bg-white border-t border-gray-200">
        <TouchableOpacity
          className="flex-1 p-4 rounded-xl items-center justify-center mr-2 border border-gray-300"
          onPress={handleCancel}
        >
          <Text className="text-gray-800 text-lg font-semibold">Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-1 p-4 rounded-xl items-center justify-center ml-2 bg-blue-600 shadow-md"
          onPress={handleAddVehicle}
        >
          <Text className="text-white text-lg font-semibold">Add Vehicle</Text>
        </TouchableOpacity>
      </View>

      {/* Note for dropdowns: For actual selection, you'd typically use a Modal with a FlatList,
          or a library like react-native-picker-select for native-looking pickers. */}
    </SafeAreaView>
  );
};

export default AddVehicleScreen;