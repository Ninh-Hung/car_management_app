import { useState } from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { plusIconXml, trashIconXml } from "../icons/IconSvgs";

export const SlideImages = ({ images, onAddImage, onRemoveImage, maxImages }: { images: string[]; onAddImage: () => void; onRemoveImage: (index: number) => void; maxImages: number; }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;

  const onScroll = ({ nativeEvent }) => {
    const slide = Math.round(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
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
        scrollEventThrottle={16}
        className="w-full h-full"
      >
        {images.map((img: string, index: number) => (
          <View key={index} style={{ width: screenWidth }} className="relative h-full">
            <Image
              source={{ uri: img }}
              className="w-full h-full"
              style={{ resizeMode: 'cover' }}
            />
            {images.length > 1 && ( // Only show remove button if more than one image
                <TouchableOpacity
                    onPress={() => onRemoveImage(index)}
                    className="absolute top-2 right-2 p-2 bg-black/50 rounded-full"
                >
                    <SvgXml xml={trashIconXml} width="20" height="20" stroke="white" color={"white"} />
                </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
      {images.length > 0 && ( // Show dots only if there are images
        <View className="absolute bottom-4 left-0 right-0 flex-row justify-center items-center">
          {images.map((_: any, index: number) => (
            <View
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${
                index === activeIndex ? 'bg-white' : 'bg-gray-400 opacity-75'
              }`}
            />
          ))}
        </View>
      )}

      {/* Add Image Button */}
      {images.length < maxImages && (
        <TouchableOpacity
          onPress={onAddImage}
          className="absolute top-2 left-2 p-2 bg-blue-600 rounded-full flex-row items-center justify-center shadow-md"
        >
          <SvgXml xml={plusIconXml} width="20" height="20" stroke="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};