import { Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { carIconXml, motorcycleIconXml } from "../icons/IconSvgs";

export default function VehicleCard ({ iconType, iconBgColor, name, year, plate, status, statusColor, mileage, nextService, hasBorder = true, onPress }: { iconType: string; iconBgColor: string; name: string; year: string; plate: string; status: string; statusColor: string; mileage: string; nextService: string; hasBorder?: boolean; onPress?: () => void; }) {
    
    return (
  <TouchableOpacity className={`flex-row items-center p-4 mx-4 mb-3 rounded-xl bg-white shadow-sm ${hasBorder ? 'border-b border-gray-200' : ''}`} onPress={onPress}>
    <View className={`w-14 h-14 rounded-full items-center justify-center mr-4 ${iconBgColor}`}>
      {iconType === 'car' ? (
        <SvgXml xml={carIconXml} width="30" height="30" fill="white" stroke="white" />
      ) : ( // Assuming 'motorcycle' or other types
        <SvgXml xml={motorcycleIconXml} width="30" height="30" fill="white" stroke="white" />
      )}
    </View>
    <View className="flex-1">
      <View className="flex-row items-center justify-between mb-1">
        <Text className="text-lg font-bold text-gray-800">{name}</Text>
        <View className={`w-3 h-3 rounded-full ${statusColor}`} />
      </View>
      <Text className="text-sm text-gray-500 mb-2">{year} • {plate}</Text>
      <View className="flex-row justify-between items-center mt-2">
        <Text className="text-base text-gray-700">{mileage}</Text>
        <Text className={`text-base font-semibold ${statusColor === 'bg-red-500' ? 'text-red-500' : 'text-gray-700'}`}>
          {nextService}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
    )
};