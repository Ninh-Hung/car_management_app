import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  Switch,
  FlatList,
  Alert, // For repair history
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import moment from 'moment';
import { expridedCalendarIconXml, expridedInsuranceIconXml, plusIconXml } from '../icons/IconSvgs';
import * as ImagePicker from 'expo-image-picker';
import { SlideImages } from './SlideImages';


// Image Slider Component
const ImageSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onScroll = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== activeIndex) {
      setActiveIndex(slide);
    }
  };

  return (
    <View className="w-full h-60 bg-gray-200 relative">
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16} // Adjust for smoother updates
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <Image
            key={index}
            source={{ uri: img }}
            className="w-screen h-full resize-cover" // w-screen uses full width of parent
          />
        ))}
      </ScrollView>
      {images.length > 1 && (
        <View className="absolute bottom-4 left-0 right-0 flex-row justify-center items-center">
          {images.map((_, index) => (
            <View
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${
                index === activeIndex ? 'bg-white' : 'bg-gray-400 opacity-75'
              }`}
            />
          ))}
        </View>
      )}
    </View>
  );
};

// Basic Info Field Component
const BasicInfoField = ({ label, value, editable = true, onChangeText }) => (
  <View className="mb-4">
    <Text className="text-gray-700 text-base font-semibold mb-2">{label}</Text>
    {editable ? (
      <TextInput
        className="w-full p-3 bg-white rounded-lg border border-gray-300 text-base text-gray-800"
        value={value}
        onChangeText={onChangeText}
      />
    ) : (
      <View className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200">
        <Text className="text-base text-gray-700">{value}</Text>
      </View>
    )}
  </View>
);

// Basic Info Dropdown Field Component (Simulated)
const BasicInfoDropdown = ({ label, value, onPress }) => (
  <View className="mb-4">
    <Text className="text-gray-700 text-base font-semibold mb-2">{label}</Text>
    <TouchableOpacity
      className="w-full p-3 bg-white rounded-lg border border-gray-300 flex-row justify-between items-center"
      onPress={onPress}
    >
      <Text className={`text-base ${value ? 'text-gray-800' : 'text-gray-500'}`}>
        {value || 'Select'}
      </Text>
      <Text className="text-gray-500 text-lg">▼</Text>
    </TouchableOpacity>
  </View>
);

// Expiration Card Component
const ExpirationCard = ({ icon, label, date, remainingTime, bgColor, textColor }) => (
  <View className={`flex-row items-center p-3 rounded-lg mb-3 ${bgColor}`}>
    <SvgXml xml={icon} width="24" height="24" stroke={textColor} className="mr-4" />
    <View className="flex-1">
      <Text className={`text-base font-semibold ${textColor}`}>{label}</Text>
      <Text className={`text-sm ${textColor} opacity-80`}>{date}</Text>
    </View>
    {remainingTime && (
      <View className={`px-2 py-1 rounded-full ${textColor === 'text-red-600' ? 'bg-red-200' : 'bg-gray-100'} items-center justify-center`}>
         <Text className={`text-sm font-semibold ${textColor}`}>{remainingTime}</Text>
      </View>
    )}
  </View>
);

// Repair Item Component
const RepairItem = ({ serviceType, provider, address, date, cost, notes }) => (
  <TouchableOpacity className="p-4 bg-white rounded-lg mb-3 border border-gray-200">
    <View className="flex-row justify-between items-start mb-2">
      <View className="flex-1">
        <Text className="text-lg font-bold text-gray-800 mb-1">{serviceType}</Text>
        <Text className="text-sm text-gray-600">{provider}</Text>
        {address && <Text className="text-xs text-gray-500">{address}</Text>}
      </View>
      <Text className="text-xl font-bold text-blue-600">{cost}</Text>
    </View>
    <Text className="text-gray-500 text-sm mb-2">{moment(date).format('DD/MM/YYYY')}</Text>
    {notes && <Text className="text-sm text-gray-600 italic mt-1">Notes: {notes}</Text>}
  </TouchableOpacity>
);

// --- Main DetailVehicleScreen Component ---
const DetailVehicleScreen = ({ navigation }) => {
  // Sample Data (replace with actual data fetched from API or passed via navigation params)
  const [vehicleData, setVehicleData] = useState({
    images: [
      'https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=BMW+X5',
      'https://via.placeholder.com/600x400/9CA3AF/FFFFFF?text=Interior',
      'https://via.placeholder.com/600x400/10B981/FFFFFF?text=Engine',
      'https://via.placeholder.com/600x400/EF4444/FFFFFF?text=Wheel',
    ],
    licensePlate: '30A-12345',
    brand: 'BMW',
    model: 'X5',
    manufactureYear: '2022',
    vinNumber: 'JTDBT403XE7123456',
    engineNumber: '2GR-FE7890123',
    mileage: '45,000 km',
    color: 'Pearl White',
    isActive: true, // Operating status
    registrationExpiry: '2025-03-15',
    insuranceExpiry: '2025-08-28',
    repairHistory: [
      {
        id: '1',
        date: '2024-12-15',
        serviceType: 'Oil & Filter Change',
        provider: 'Garage Toyota Ha Noi',
        address: '123 Nguyen Trai, Thanh Xuan',
        cost: '850.000₫',
        notes: 'Basic maintenance. Replaced all fluids.'
      },
      {
        id: '2',
        date: '2024-11-03',
        serviceType: 'Tire Replacement (2 tires)',
        provider: 'Lop Xe Minh Phat',
        address: '456 Le Van Luong, Cau Giay',
        cost: '2.400.000₫',
        notes: 'Replaced front tires with new ones.'
      },
      {
        id: '3',
        date: '2024-09-20',
        serviceType: 'AC System Repair',
        provider: 'Garage ABC Auto',
        address: '789 Giai Phong, Hoang Mai',
        cost: '1.200.000₫',
        notes: 'Repaired AC compressor.'
      },
      {
        id: '4',
        date: '2024-09-20', // Same date to test grouping
        serviceType: 'Brake Check',
        provider: 'Garage ABC Auto',
        address: '789 Giai Phong, Hoang Mai',
        cost: '300.000₫',
        notes: 'Checked brake pads and fluid levels.'
      },
      {
        id: '5',
        date: '2024-07-01',
        serviceType: 'Wheel Alignment',
        provider: 'Garage XYZ',
        address: '10 Hai Ba Trung',
        cost: '500.000₫',
        notes: null
      },
    ].sort((a, b) => moment(b.date).valueOf() - moment(a.date).valueOf()), // Sort by date descending
  });

  const [activeStatus, setActiveStatus] = useState(vehicleData.isActive);

  // Function to calculate remaining time
  const getRemainingTime = (expiryDate) => {
    const today = moment();
    const expiry = moment(expiryDate);
    if (expiry.isBefore(today, 'day')) {
      return 'Expired';
    }
    const diffDays = expiry.diff(today, 'days');
    if (diffDays < 30) {
      return `${diffDays} days`;
    }
    const diffMonths = expiry.diff(today, 'months');
    return `${diffMonths} months`;
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSavePress = () => {
    console.log('Saving vehicle details:', { ...vehicleData, isActive: activeStatus });
    alert('Vehicle details saved!');
    // Implement save logic (e.g., API call)
  };

  const handleFieldChange = (field, value) => {
    setVehicleData(prev => ({ ...prev, [field]: value }));
  };

  // Group repair history by date
  const groupedRepairs = vehicleData.repairHistory.reduce((acc, repair) => {
    const dateKey = moment(repair.date).format('DD/MM/YYYY');
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(repair);
    return acc;
  }, {});

  const sortedRepairDates = Object.keys(groupedRepairs).sort((a, b) => moment(b, 'DD/MM/YYYY').valueOf() - moment(a, 'DD/MM/YYYY').valueOf());
  const handleRemoveImage = (indexToRemove: number) => {
    Alert.alert(
      "Remove Image",
      "Are you sure you want to remove this image?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Remove",
          onPress: () => {
            setVehicleData(prev => ({
              ...prev,
              images: prev.images.filter((_, index) => index !== indexToRemove)
            }));
          },
          style: "destructive"
        }
      ]
    );
  };

  const pickImage = async (fromCamera) => {
    let result;
    if (fromCamera) {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Required', 'Please enable camera permissions to take photos.');
        return;
      }
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    } else {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Required', 'Please enable photo library permissions to select photos.');
        return;
      }
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: false, // We pick one at a time for simplicity of adding to existing
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    }

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const newUri = result.assets[0].uri;
      setVehicleData(prev => {
        if (prev.images.length < 6) {
          return { ...prev, images: [...prev.images, newUri] };
        } else {
          Alert.alert('Image Limit Reached', `You can only add up to ${6} images.`);
          return prev;
        }
      });
    } else {
      console.log('Image pick cancelled or failed.');
    }
  };

  const handleAddImage = () => {
    Alert.alert(
      "Add Image",
      "Choose a method to add a new image:",
      [
        {
          text: "Take Photo",
          onPress: () => pickImage(true),
        },
        {
          text: "Choose from Gallery",
          onPress: () => pickImage(false),
        },
        {
          text: "Cancel",
          style: "cancel"
        }
      ]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* <DetailHeader onBackPress={handleBackPress} onSavePress={handleSavePress} /> */}

      <ScrollView className="flex-1">
        {/* Image Slider */}
        <SlideImages
          images={vehicleData.images}
          onAddImage={handleAddImage}
          onRemoveImage={handleRemoveImage}
          maxImages={6}
        />

        {/* Expiration Dates */}
        <View className="bg-white rounded-xl p-4 mx-4 my-4 shadow-sm">
          <Text className="text-xl font-bold text-gray-800 mb-4">Expiration Dates</Text>
          <ExpirationCard
            icon={expridedCalendarIconXml}
            label="Registration Expiry"
            date={moment(vehicleData.registrationExpiry).format('DD/MM/YYYY')}
            remainingTime={getRemainingTime(vehicleData.registrationExpiry)}
            bgColor={moment(vehicleData.registrationExpiry).diff(moment(), 'months') <= 3 ? 'bg-red-50' : 'bg-gray-50'}
            textColor={moment(vehicleData.registrationExpiry).diff(moment(), 'months') <= 3 ? 'text-red-600' : 'text-gray-700'}
          />
          <ExpirationCard
            icon={expridedInsuranceIconXml}
            label="Insurance Expiry"
            date={moment(vehicleData.insuranceExpiry).format('DD/MM/YYYY')}
            remainingTime={getRemainingTime(vehicleData.insuranceExpiry)}
            bgColor={moment(vehicleData.insuranceExpiry).diff(moment(), 'months') <= 3 ? 'bg-red-50' : 'bg-gray-50'}
            textColor={moment(vehicleData.insuranceExpiry).diff(moment(), 'months') <= 3 ? 'text-red-600' : 'text-gray-700'}
          />
        </View>
        {/* Basic Information */}
        <View className="bg-white rounded-xl p-4 mx-4 my-4 shadow-sm">
          <Text className="text-xl font-bold text-gray-800 mb-4">Basic Information</Text>
          <BasicInfoField
            label="License Plate"
            value={vehicleData.licensePlate}
            onChangeText={(text) => handleFieldChange('licensePlate', text)}
          />
          <BasicInfoDropdown
            label="Brand"
            value={vehicleData.brand}
            onPress={() => console.log('Open Brand Picker')}
          />
          <BasicInfoDropdown
            label="Model"
            value={vehicleData.model}
            onPress={() => console.log('Open Model Picker')}
          />
          <BasicInfoField
            label="Manufacture Year"
            value={vehicleData.manufactureYear}
            onChangeText={(text) => handleFieldChange('manufactureYear', text)}
            keyboardType="numeric"
          />
          <BasicInfoField
            label="VIN Number"
            value={vehicleData.vinNumber}
            onChangeText={(text) => handleFieldChange('vinNumber', text)}
          />
          <BasicInfoField
            label="Engine Number"
            value={vehicleData.engineNumber}
            onChangeText={(text) => handleFieldChange('engineNumber', text)}
          />
          <BasicInfoField
            label="Current Mileage"
            value={vehicleData.mileage}
            onChangeText={(text) => handleFieldChange('mileage', text)}
            keyboardType="numeric"
          />
          <BasicInfoField
            label="Color"
            value={vehicleData.color}
            onChangeText={(text) => handleFieldChange('color', text)}
          />

          <View className="flex-row justify-between items-center mb-2 mt-2">
            <Text className="text-gray-700 text-base font-semibold">Operating Status</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={activeStatus ? '#2563eb' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={(value) => setActiveStatus(value)}
              value={activeStatus}
            />
          </View>

          <View className="flex-row justify-between items-center mb-2 mt-2">
            <TouchableOpacity
              className="flex-1 p-4 rounded-xl items-center justify-center ml-2 bg-blue-600 shadow-md"
              // onPress={handleAddVehicle}
            >
              <Text className="text-white text-lg font-semibold">Save</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Repair History */}
        <View className="bg-white rounded-xl p-4 mx-4 my-4 shadow-sm">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-bold text-gray-800">Repair History</Text>
            <TouchableOpacity className="flex-row items-center bg-blue-600 px-4 py-2 rounded-full shadow-md">
              <SvgXml xml={plusIconXml} width="18" height="18" stroke="white" />
            </TouchableOpacity>
          </View>

          {sortedRepairDates.map(dateKey => (
            <View key={dateKey} className="mb-6">
              <Text className="text-lg font-bold text-gray-700 mb-3">{dateKey}</Text>
              {groupedRepairs[dateKey].map(repair => (
                <RepairItem
                  key={repair.id}
                  serviceType={repair.serviceType}
                  provider={repair.provider}
                  address={repair.address}
                  date={repair.date}
                  cost={repair.cost}
                  notes={repair.notes}
                />
              ))}
            </View>
          ))}

          {Object.keys(groupedRepairs).length === 0 && (
            <Text className="text-gray-500 text-center py-4">No repair history available.</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailVehicleScreen;