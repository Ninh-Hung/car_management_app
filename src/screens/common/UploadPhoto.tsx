import { Image, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { cameraIconXml, galleryIconXml } from "../../icons/IconSvgs";

const UploadPhoto = ({ photoUri, onCameraPress, onGalleryPress }: { photoUri: string; onCameraPress: () => void; onGalleryPress: () => void; }) => (
  <View className="bg-white rounded-xl p-4 mx-4 my-4 shadow-sm">
    <Text className="text-gray-700 text-lg font-semibold mb-3">Vehicle Photo</Text>
    <View className="border-2 border-dashed border-gray-300 rounded-xl p-6 items-center justify-center min-h-[150px]">
      {photoUri ? (
        <Image source={{ uri: photoUri }} className="w-full h-full rounded-xl resize-cover" />
      ) : (
        <View className="items-center">
          <View className="w-16 h-16 bg-gray-200 rounded-full items-center justify-center mb-3">
            <SvgXml xml={cameraIconXml} width="32" height="32" stroke="#6b7280" />
          </View>
          <Text className="text-gray-500 text-base mb-4">Upload photo or take a picture</Text>
          <View className="flex-row w-full justify-around">
            <TouchableOpacity onPress={onCameraPress} className="flex-row items-center bg-blue-600 px-5 py-3 rounded-full shadow-sm">
              <SvgXml xml={cameraIconXml} width="20" height="20" stroke="white" />
              <Text className="text-white text-base ml-2">Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onGalleryPress} className="flex-row items-center bg-gray-200 px-5 py-3 rounded-full shadow-sm">
              <SvgXml xml={galleryIconXml} width="20" height="20" stroke="#4b5563" />
              <Text className="text-gray-800 text-base ml-2">Gallery</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  </View>
);

export default UploadPhoto;