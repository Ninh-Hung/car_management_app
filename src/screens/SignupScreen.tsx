import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  Platform,
  Linking // For opening URLs
} from 'react-native';

// Placeholder images for social icons (replace with your actual local paths)
const googleIcon = require('../../assets/icons/google.png'); // Make sure path is correct
const facebookIcon = require('../../assets/icons/facebook.png'); // Make sure path is correct
const appleIcon = require('../../assets/icons/apple.png'); // Make sure path is correct

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [loading, setLoading] = useState(false); // For button loading state

  const handleCreateAccount = () => {
    setLoading(true);
    // Implement your account creation logic here
    console.log('Creating account with:', { username, email, phone, password, agreeToTerms });
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Add success/error handling
      alert('Account creation attempted!'); // Use a custom modal in a real app
    }, 1500);
  };

  const handleGoogleSignup = () => {
    console.log('Signing up with Google');
    // Implement Google signup logic
  };

  const handleFacebookSignup = () => {
    console.log('Signing up with Facebook');
    // Implement Facebook signup logic
  };

  const handleAppleSignup = () => {
    console.log('Signing up with Apple');
    // Implement Apple signup logic
  };

  const openLink = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        className="p-6"
      >
        <View className="items-center mb-8">
          {/* Car Icon */}
          <View className="w-16 h-16 bg-blue-600 rounded-full items-center justify-center mb-4 shadow-lg">
            <Image
                source={require('../../assets/images/car.png')} 
                className="w-20 h-20 rounded-full mr-4"
                onError={(e) => console.log('Image failed to load:', e.nativeEvent.error)}
                />
          </View>

          {/* Title */}
          <Text className="text-3xl font-bold text-gray-800 mb-2">Create Account</Text>
          {/* Subtitle */}
          <Text className="text-base text-gray-600 text-center px-4">
            Join CarManager to organize your vehicles
          </Text>
        </View>

        {/* Input Fields */}
        <View className="mb-6">
          {/* Username */}
          <Text className="text-gray-700 text-lg font-semibold mb-2">Username</Text>
          <TextInput
            className="w-full p-4 bg-white rounded-xl border border-gray-300 text-lg text-gray-800"
            placeholder="Enter username"
            placeholderTextColor="#9ca3af"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
        </View>

        <View className="mb-6">
          {/* Email Address */}
          <Text className="text-gray-700 text-lg font-semibold mb-2">Email Address</Text>
          <TextInput
            className="w-full p-4 bg-white rounded-xl border border-gray-300 text-lg text-gray-800"
            placeholder="Enter email address"
            placeholderTextColor="#9ca3af"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View className="mb-6">
          {/* Phone Number */}
          <Text className="text-gray-700 text-lg font-semibold mb-2">Phone Number</Text>
          <TextInput
            className="w-full p-4 bg-white rounded-xl border border-gray-300 text-lg text-gray-800"
            placeholder="Enter phone number"
            placeholderTextColor="#9ca3af"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>

        <View className="mb-6">
          {/* Password */}
          <Text className="text-gray-700 text-lg font-semibold mb-2">Password</Text>
          <TextInput
            className="w-full p-4 bg-white rounded-xl border border-gray-300 text-lg text-gray-800"
            placeholder="Create password"
            placeholderTextColor="#9ca3af"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <View className="mb-6">
          {/* Confirm Password */}
          <Text className="text-gray-700 text-lg font-semibold mb-2">Confirm Password</Text>
          <TextInput
            className="w-full p-4 bg-white rounded-xl border border-gray-300 text-lg text-gray-800"
            placeholder="Confirm password"
            placeholderTextColor="#9ca3af"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>

        {/* Terms and Privacy Checkbox */}
        <View className="flex-row items-center mb-6">
          <TouchableOpacity
            onPress={() => setAgreeToTerms(!agreeToTerms)}
            className={`w-6 h-6 rounded-md border-2 ${agreeToTerms ? 'bg-blue-600 border-blue-600' : 'border-gray-400'} items-center justify-center mr-3`}
          >
            {agreeToTerms && (
              <Text className="text-white text-base">✓</Text> // Checkmark
            )}
          </TouchableOpacity>
          <Text className="text-gray-600 text-base flex-1 flex-wrap">
            I agree to the{' '}
            <Text
              className="text-blue-600 font-semibold"
              onPress={() => openLink('https://example.com/terms')} // Replace with actual URL
            >
              Terms of Service
            </Text>
            {' and '}
            <Text
              className="text-blue-600 font-semibold"
              onPress={() => openLink('https://example.com/privacy')} // Replace with actual URL
            >
              Privacy Policy
            </Text>
          </Text>
        </View>

        {/* Create Account Button */}
        <TouchableOpacity
          className={`w-full p-4 rounded-xl items-center justify-center mb-6 shadow-md ${loading ? 'bg-blue-400' : 'bg-blue-600'}`}
          onPress={handleCreateAccount}
          disabled={loading}
        >
          <Text className="text-white text-xl font-semibold">
            {loading ? 'Creating...' : 'Create Account'}
          </Text>
        </TouchableOpacity>

        {/* Or continue with separator */}
        <View className="flex-row items-center justify-center mb-6">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="text-gray-500 text-base mx-4">Or continue with</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        {/* Social Login Buttons */}
        <TouchableOpacity
          className="w-full p-4 rounded-xl items-center mb-3 shadow-md flex-row justify-center bg-white border-b-2 border-gray-300"
          onPress={handleGoogleSignup}
          disabled={loading}
        >
          <Image
            source={googleIcon}
            className="w-8 h-8 rounded-full mr-4"
            onError={(e) => console.log('Google icon failed to load:', e.nativeEvent.error)}
          />
          <Text className="text-gray-800 text-xl font-semibold">Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="w-full p-4 rounded-xl items-center mb-3 shadow-md flex-row justify-center bg-white border-b-2 border-gray-300"
          onPress={handleFacebookSignup}
          disabled={loading}
        >
          <Image
            source={facebookIcon}
            className="w-8 h-8 rounded-full mr-4"
            onError={(e) => console.log('Facebook icon failed to load:', e.nativeEvent.error)}
          />
          <Text className="text-gray-800 text-xl font-semibold">Continue with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="w-full p-4 rounded-xl items-center mb-6 shadow-md flex-row justify-center bg-white border-b-2 border-gray-300"
          onPress={handleAppleSignup}
          disabled={loading}
        >
          <Image
            source={appleIcon}
            className="w-8 h-8 rounded-full mr-4"
            onError={(e) => console.log('Apple icon failed to load:', e.nativeEvent.error)}
          />
          <Text className="text-gray-800 text-xl font-semibold">Continue with Apple</Text>
        </TouchableOpacity>

        {/* Already have an account? Sign in */}
        <View className="flex-row justify-center mb-8">
          <Text className="text-gray-600 text-base">Already have an account?{' '}</Text>
          <TouchableOpacity onPress={() => console.log('Navigate to Sign In')}>
            <Text className="text-blue-600 font-semibold text-base">Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupForm;