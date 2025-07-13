import { Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";

export default function VehicleItemScreen ({ iconType, iconBgColor, name, year, plate, status, statusColor, mileage, nextService, hasBorder = true }: { iconType: string; iconBgColor: string; name: string; year: string; plate: string; status: string; statusColor: string; mileage: string; nextService: string; hasBorder?: boolean; }) {
    const carIconXml = `
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_15_86)">
<path d="M5.9375 5.08594L4.91797 8H16.3945L15.375 5.08594C15.1992 4.58594 14.7266 4.25 14.1953 4.25H7.11719C6.58594 4.25 6.11328 4.58594 5.9375 5.08594ZM2.20312 8.1875L3.57813 4.26172C4.10547 2.75781 5.52344 1.75 7.11719 1.75H14.1953C15.7891 1.75 17.207 2.75781 17.7344 4.26172L19.1094 8.1875C20.0156 8.5625 20.6562 9.45703 20.6562 10.5V16.125V18C20.6562 18.6914 20.0977 19.25 19.4062 19.25H18.1562C17.4648 19.25 16.9062 18.6914 16.9062 18V16.125H4.40625V18C4.40625 18.6914 3.84766 19.25 3.15625 19.25H1.90625C1.21484 19.25 0.65625 18.6914 0.65625 18V16.125V10.5C0.65625 9.45703 1.29687 8.5625 2.20312 8.1875ZM5.65625 11.75C5.65625 11.4185 5.52455 11.1005 5.29013 10.8661C5.05571 10.6317 4.73777 10.5 4.40625 10.5C4.07473 10.5 3.75679 10.6317 3.52237 10.8661C3.28795 11.1005 3.15625 11.4185 3.15625 11.75C3.15625 12.0815 3.28795 12.3995 3.52237 12.6339C3.75679 12.8683 4.07473 13 4.40625 13C4.73777 13 5.05571 12.8683 5.29013 12.6339C5.52455 12.3995 5.65625 12.0815 5.65625 11.75ZM16.9062 13C17.2378 13 17.5557 12.8683 17.7901 12.6339C18.0246 12.3995 18.1562 12.0815 18.1562 11.75C18.1562 11.4185 18.0246 11.1005 17.7901 10.8661C17.5557 10.6317 17.2378 10.5 16.9062 10.5C16.5747 10.5 16.2568 10.6317 16.0224 10.8661C15.7879 11.1005 15.6562 11.4185 15.6562 11.75C15.6562 12.0815 15.7879 12.3995 16.0224 12.6339C16.2568 12.8683 16.5747 13 16.9062 13Z" fill="#3B82F6"/>
</g>
<defs>
<clipPath id="clip0_15_86">
<path d="M0.65625 0.5H20.6562V20.5H0.65625V0.5Z" fill="white"/>
</clipPath>
</defs>
</svg>
`;

// Motorcycle icon
const motorcycleIconXml = `
  <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_15_176)">
<path d="M11.4375 1.75C10.918 1.75 10.5 2.16797 10.5 2.6875C10.5 3.20703 10.918 3.625 11.4375 3.625H13.6914L14.332 4.80859L10.5 8L8.73047 6.23047C8.26172 5.76172 7.625 5.5 6.96094 5.5H3C2.30859 5.5 1.75 6.05859 1.75 6.75V8H5.5C8.95313 8 11.75 10.7969 11.75 14.25C11.75 14.6797 11.707 15.0977 11.625 15.5H14.375C14.293 15.0977 14.25 14.6797 14.25 14.25C14.25 12.2109 15.2266 10.3984 16.7383 9.25781L17.3398 10.375C16.2188 11.293 15.5 12.6875 15.5 14.25C15.5 17.0117 17.7383 19.25 20.5 19.25C23.2617 19.25 25.5 17.0117 25.5 14.25C25.5 11.4883 23.2617 9.25 20.5 9.25C19.9727 9.25 19.4648 9.33203 18.9883 9.48438L16.8359 5.5H19.25C19.9414 5.5 20.5 4.94141 20.5 4.25V3C20.5 2.30859 19.9414 1.75 19.25 1.75H18.4531C18.1602 1.75 17.8789 1.85156 17.6523 2.03906L15.8008 3.58203L15.2539 2.56641C14.9805 2.0625 14.4531 1.74609 13.8789 1.74609H11.4375V1.75ZM18.5742 12.6563L19.6758 14.6953C19.9219 15.1523 20.4922 15.3203 20.9453 15.0742C21.3984 14.8281 21.5703 14.2578 21.3242 13.8047L20.2227 11.7656C20.3125 11.7539 20.4062 11.75 20.5 11.75C21.8789 11.75 23 12.8711 23 14.25C23 15.6289 21.8789 16.75 20.5 16.75C19.1211 16.75 18 15.6289 18 14.25C18 13.6445 18.2148 13.0898 18.5742 12.6563ZM7.81641 15.1875C7.44531 16.1055 6.54687 16.75 5.5 16.75C4.12109 16.75 3 15.6289 3 14.25C3 12.8711 4.12109 11.75 5.5 11.75C6.55078 11.75 7.44922 12.3945 7.81641 13.3125H10.4102C9.97266 11 7.94141 9.25 5.5 9.25C2.73828 9.25 0.5 11.4883 0.5 14.25C0.5 17.0117 2.73828 19.25 5.5 19.25C7.94141 19.25 9.97266 17.5 10.4141 15.1875H7.81641ZM5.5 15.5C5.83152 15.5 6.14946 15.3683 6.38388 15.1339C6.6183 14.8995 6.75 14.5815 6.75 14.25C6.75 13.9185 6.6183 13.6005 6.38388 13.3661C6.14946 13.1317 5.83152 13 5.5 13C5.16848 13 4.85054 13.1317 4.61612 13.3661C4.3817 13.6005 4.25 13.9185 4.25 14.25C4.25 14.5815 4.3817 14.8995 4.61612 15.1339C4.85054 15.3683 5.16848 15.5 5.5 15.5Z" fill="#22C55E"/>
</g>
<defs>
<clipPath id="clip0_15_176">
<path d="M0.5 0.5H25.5V20.5H0.5V0.5Z" fill="white"/>
</clipPath>
</defs>
</svg>
`;
    return (
  <TouchableOpacity className={`flex-row items-center p-4 mx-4 mb-3 rounded-xl bg-white shadow-sm ${hasBorder ? 'border-b border-gray-200' : ''}`}>
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