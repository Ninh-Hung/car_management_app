import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';

/**
 * Utility function to launch the device camera and get an image.
 * @returns {Promise<string|null>} A promise that resolves with the URI of the captured image, or null if cancelled/failed.
 */
export const launchCameraAndGetUri = async () => {
  // Request camera permissions
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  if (status !== 'granted') {
    Alert.alert(
      'Permission Required',
      'Please enable camera permissions in your settings to take photos.'
    );
    return null; // Return null if permission not granted
  }

  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true, // Optional: allows cropping
    aspect: [4, 3], // Optional: aspect ratio for cropping
    quality: 1, // High quality
  });

  if (!result.canceled && result.assets && result.assets.length > 0) {
    return result.assets[0].uri;
  } else {
    console.log('User cancelled camera or no image selected.');
    return null; // Return null if cancelled or no image
  }
};

/**
 * Utility function to launch the device image library and get an image.
 * @returns {Promise<string|null>} A promise that resolves with the URI of the selected image, or null if cancelled/failed.
 */
export const launchImageLibraryAndGetUri = async () => {
  // Request media library permissions
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== 'granted') {
    Alert.alert(
      'Permission Required',
      'Please enable photo library permissions in your settings to select photos.'
    );
    return null; // Return null if permission not granted
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.canceled && result.assets && result.assets.length > 0) {
    return result.assets[0].uri;
  } else {
    console.log('User cancelled gallery or no image selected.');
    return null; // Return null if cancelled or no image
  }
};