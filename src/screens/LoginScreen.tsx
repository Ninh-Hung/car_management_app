import React, { useState } from 'react';
import {
    Image,
    Linking,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

// Placeholder images for social icons (replace with your actual local paths)
const appleIcon = require('../../assets/icons/apple.png');
const googleIcon = require('../../assets/icons/google.png'); // Ensure path is correct
const facebookIcon = require('../../assets/icons/facebook.png'); // Ensure path is correct

const LoginScreen = ({ navigation }) => { // Assuming navigation prop for linking to other screens
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false); // For button loading state

  const handleSignIn = () => {
    setLoading(true);
    // Implement your authentication logic here (e.g., API call)
    console.log('Signing in with:', { email, password, rememberMe });
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Navigate to dashboard or show error
    //   alert('Login attempted!'); // Use a custom modal in a real app
      navigation.navigate('HomeScreen'); // Example navigation
    }, 1500);
  };

  const handleGoogleSignIn = () => {
    console.log('Signing in with Google');
    // Implement Google sign-in logic
  };

  const handleFacebookSignIn = () => {
    console.log('Signing in with Facebook');
    // Implement Facebook sign-in logic
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
        <View className="items-center mb-10">
          {/* Car Icon */}
          <View className="w-16 h-16 bg-blue-600 rounded-full items-center justify-center mb-4 shadow-lg">
                      <Image
                          source={require('../../assets/images/car.png')} 
                          className="w-20 h-20 rounded-full mr-4"
                          onError={(e) => console.log('Image failed to load:', e.nativeEvent.error)}
                          />
                    </View>

          {/* App Name */}
          <Text className="text-3xl font-bold text-gray-800 mb-2">CarManager</Text>
          {/* Tagline */}
          <Text className="text-base text-gray-600 text-center px-4">
            Manage your vehicles with ease
          </Text>
        </View>

        {/* Email Input */}
        <View className="mb-6">
          <Text className="text-gray-700 text-lg font-semibold mb-2">Email</Text>
          <TextInput
            className="w-full p-4 bg-white rounded-xl border border-gray-300 text-lg text-gray-800"
            placeholder="Enter your email"
            placeholderTextColor="#9ca3af"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <View className="mb-6">
          <Text className="text-gray-700 text-lg font-semibold mb-2">Password</Text>
          <TextInput
            className="w-full p-4 bg-white rounded-xl border border-gray-300 text-lg text-gray-800"
            placeholder="Enter your password"
            placeholderTextColor="#9ca3af"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* Remember Me & Forgot Password */}
        <View className="flex-row justify-between items-center mb-6">
          <TouchableOpacity
            onPress={() => setRememberMe(!rememberMe)}
            className="flex-row items-center"
          >
            <View
              className={`w-5 h-5 rounded border-2 ${rememberMe ? 'bg-blue-600 border-blue-600' : 'border-gray-400'} items-center justify-center mr-2`}
            >
              {rememberMe && (
                <Text className="text-white text-sm">✓</Text>
              )}
            </View>
            <Text className="text-gray-600 text-base">Remember me</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('https://example.com/forgot-password')}> {/* Replace with actual URL */}
            <Text className="text-blue-600 font-semibold text-base">Forgot password?</Text>
          </TouchableOpacity>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity
          className={`w-full p-4 rounded-xl items-center justify-center mb-8 shadow-md ${loading ? 'bg-blue-400' : 'bg-blue-600'}`}
          onPress={handleSignIn}
          disabled={loading}
        >
          <Text className="text-white text-xl font-semibold">
            {loading ? 'Signing In...' : 'Sign In'}
          </Text>
        </TouchableOpacity>

        {/* Or continue with separator */}
        <View className="flex-row items-center justify-center mb-8">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="text-gray-500 text-base mx-4">Or continue with</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        {/* Social Login Buttons */}
        <TouchableOpacity
          className="w-full p-4 rounded-xl items-center mb-4 shadow-md flex-row justify-center bg-white border-b-2 border-gray-300"
          onPress={handleGoogleSignIn}
          disabled={loading}
        >
          <Image
            source={appleIcon}
            className="w-8 h-8 rounded-full mr-4"
            onError={(e) => console.log('Google icon failed to load:', e.nativeEvent.error)}
          />
          <Text className="text-gray-800 text-xl font-semibold">Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="w-full p-4 rounded-xl items-center mb-4 shadow-md flex-row justify-center bg-white border-b-2 border-gray-300"
          onPress={handleGoogleSignIn}
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
          className="w-full p-4 rounded-xl items-center mb-10 shadow-md flex-row justify-center bg-white border-b-2 border-gray-300"
          onPress={handleFacebookSignIn}
          disabled={loading}
        >
          <Image
            source={facebookIcon}
            className="w-8 h-8 rounded-full mr-4"
            onError={(e) => console.log('Facebook icon failed to load:', e.nativeEvent.error)}
          />
          <Text className="text-gray-800 text-xl font-semibold">Continue with Facebook</Text>
        </TouchableOpacity>

        {/* Don't have an account? Sign up */}
        <View className="flex-row justify-center mb-4">
          <Text className="text-gray-600 text-base">Don't have an account?{' '}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}> {/* Navigate to your signup screen */}
            <Text className="text-blue-600 font-semibold text-base">Sign up</Text>
          </TouchableOpacity>
        </View>

        {/* Terms and Privacy Footer */}
        <View className="flex-row justify-center text-center">
          <Text className="text-gray-500 text-sm text-center">
            By signing in, you agree to our{' '}
            <Text
              className="text-blue-600 font-semibold"
              onPress={() => openLink('https://example.com/terms')}
            >
              Terms of Service
            </Text>
            {' and '}
            <Text
              className="text-blue-600 font-semibold"
              onPress={() => openLink('https://example.com/privacy')}
            >
              Privacy Policy
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;