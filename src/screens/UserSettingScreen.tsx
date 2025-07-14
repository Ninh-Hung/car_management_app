import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import * as ImagePicker from 'expo-image-picker'; // For profile photo
import { backArrowIconXml, lockIconXml, messageIconXml, phoneIconXml, rightArrowIconXml, trashIconXml } from '../icons/IconSvgs';

const ProfileHeader = ({ onBackPress }) => (
  <View className="flex-row items-center p-4 bg-white border-b border-gray-200">
    <TouchableOpacity onPress={onBackPress} className="p-2">
      <SvgXml xml={backArrowIconXml} width="24" height="24" stroke="#4b5563" />
    </TouchableOpacity>
    <Text className="flex-1 text-center text-xl font-bold text-gray-800 -ml-8">Profile</Text>
    {/* No save icon in the header based on the image */}
  </View>
);

const ProfileInputField = ({ label, value, editable = true, onChangeText, keyboardType = 'default' }) => (
  <View className="mb-4">
    <Text className="text-gray-700 text-base font-semibold mb-2">{label}</Text>
    {editable ? (
      <TextInput
        className="w-full p-3 bg-white rounded-lg border border-gray-300 text-base text-gray-800"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    ) : (
      <View className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200">
        <Text className="text-base text-gray-700">{value}</Text>
      </View>
    )}
  </View>
);

const ProfileActionButton = ({ icon, text, onPress, textColor = 'text-gray-800', bgColor = 'bg-white', borderColor = 'border-gray-200' }) => (
  <TouchableOpacity
    className={`flex-row items-center p-4 rounded-xl border ${borderColor} mb-3 shadow-sm ${bgColor}`}
    onPress={onPress}
  >
    {icon && <SvgXml xml={icon} width="20" height="20" stroke={textColor === 'text-red-600' ? '#dc2626' : '#4b5563'} className="mr-3" />}
    <Text>{"  "}</Text>
    <Text className={`flex-1 text-base font-semibold ${textColor}`}>{text}</Text>
    <SvgXml xml={rightArrowIconXml} width="16" height="16" stroke="#9ca3af" />
  </TouchableOpacity>
);

// --- Main UserSettingScreen Component ---
const UserSettingScreen = ({ navigation }) => {
  const [profilePhotoUri, setProfilePhotoUri] = useState('https://via.placeholder.com/150/6090F8/FFFFFF?text=JP'); // Default image or user's current photo
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('john.doe@example.com'); // Disabled field
  const [phoneNumber, setPhoneNumber] = useState('+84 987 654 321'); // Disabled field

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSavePress = () => {
    console.log('Saving profile changes:', {
      profilePhotoUri,
      firstName,
      lastName,
      email, // These would be read-only if truly disabled
      phoneNumber, // These would be read-only if truly disabled
    });
    Alert.alert('Success', 'Profile changes saved successfully!');
    // Implement API call to save data
  };

  const handleChangePassword = () => {
    Alert.alert('Change Password', 'Navigate to change password screen/modal.');
    // navigation.navigate('ChangePassword'); // Example navigation
  };

  const handleCallSupport = () => {
    Alert.alert('Call Support', 'Initiate a phone call to support.');
    // Linking.openURL('tel:+84123456789'); // Example using Linking
  };

  const handleSendMessage = () => {
    Alert.alert('Send Message', 'Open chat/email client for support.');
    // Linking.openURL('mailto:support@example.com'); // Example using Linking
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => console.log('Account deleted'), style: 'destructive' },
      ],
    );
  };

  const handleProfilePhotoChange = async () => {
    Alert.alert(
      "Change Profile Photo",
      "Choose a method to update your profile photo:",
      [
        {
          text: "Take Photo",
          onPress: async () => {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== 'granted') {
              Alert.alert('Permission Required', 'Please enable camera permissions to take photos.');
              return;
            }
            const result = await ImagePicker.launchCameraAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [1, 1], // Square aspect ratio for profile photo
              quality: 1,
            });
            if (!result.canceled && result.assets && result.assets.length > 0) {
              setProfilePhotoUri(result.assets[0].uri);
            }
          },
        },
        {
          text: "Choose from Gallery",
          onPress: async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              Alert.alert('Permission Required', 'Please enable photo library permissions to select photos.');
              return;
            }
            const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [1, 1], // Square aspect ratio
              quality: 1,
            });
            if (!result.canceled && result.assets && result.assets.length > 0) {
              setProfilePhotoUri(result.assets[0].uri);
            }
          },
        },
        { text: "Cancel", style: "cancel" }
      ]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">

      <ScrollView className="flex-1 p-4">
        {/* Profile Photo Section */}
        <View className="items-center my-4">
          <TouchableOpacity onPress={handleProfilePhotoChange} className="relative">
            <Image
              source={{ uri: profilePhotoUri }}
              className="w-32 h-32 rounded-full border-2 border-blue-500 bg-gray-300"
            />
            <Text className="text-blue-600 text-sm mt-2">Tap to change photo</Text>
          </TouchableOpacity>
        </View>

        {/* Personal Information */}
        <View className="bg-white rounded-xl p-4 mb-4 shadow-sm">
          <Text className="text-xl font-bold text-gray-800 mb-4">Personal Information</Text>

          <ProfileInputField
            label="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <ProfileInputField
            label="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
          <ProfileInputField
            label="Email"
            value={email}
            editable={false} // Disabled field
            keyboardType="email-address"
            onChangeText={setLastName}
          />
          <ProfileInputField
            label="Phone Number"
            value={phoneNumber}
            editable={false} // Disabled field
            keyboardType="phone-pad"
            onChangeText={setLastName}
          />
        </View>

        {/* Security */}
        <View className="bg-white rounded-xl p-4 mb-4 shadow-sm">
          <Text className="text-xl font-bold text-gray-800 mb-4">Security</Text>
          <ProfileActionButton
            icon={lockIconXml}
            text="Change Password"
            onPress={handleChangePassword}
          />
        </View>

        {/* Support */}
        <View className="bg-white rounded-xl p-4 mb-4 shadow-sm">
          <Text className="text-xl font-bold text-gray-800 mb-4">Support</Text>
          <ProfileActionButton
            icon={phoneIconXml}
            text="Call Support"
            onPress={handleCallSupport}
          />
          <ProfileActionButton
            icon={messageIconXml}
            text="Send Message"
            onPress={handleSendMessage}
          />
        </View>

        {/* Danger Zone */}
        <View className="bg-white rounded-xl p-4 mb-4 shadow-sm">
          <Text className="text-xl font-bold text-gray-800 mb-4">Danger Zone</Text>
          <ProfileActionButton
            icon={trashIconXml}
            text="Delete Account"
            onPress={handleDeleteAccount}
            textColor="text-red-600"
            bgColor="bg-red-50"
            borderColor="border-red-200"
          />
        </View>
      </ScrollView>

      {/* Save Changes Button */}
      <View className="p-4 bg-white border-t border-gray-200">
        <TouchableOpacity
          className="p-4 rounded-xl items-center justify-center bg-blue-600 shadow-md"
          onPress={handleSavePress}
        >
          <Text className="text-white text-lg font-semibold">Save Changes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UserSettingScreen;