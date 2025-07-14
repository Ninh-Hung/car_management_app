import { Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { dropdownArrowIconXml } from "../../icons/IconSvgs";

const Dropdown = ({ label, placeholder, value, onPress, required = false }: { label: string; placeholder: string; value: string; onPress: () => void; required?: boolean; }) => (
  <View className="mb-6">
    <Text className="text-gray-700 text-lg font-semibold mb-2">
      {label}
      {required && <Text className="text-red-500 ml-1">{" "}*</Text>} {/* Add asterisk if required */}
    </Text>
    <TouchableOpacity
      className="w-full p-4 bg-white rounded-xl border border-gray-300 flex-row justify-between items-center"
      onPress={onPress}
    >
      <Text className={`text-lg ${value ? 'text-gray-800' : 'text-gray-500'}`}>
        {value || placeholder}
      </Text>
      <SvgXml xml={dropdownArrowIconXml} width="20" height="20" stroke="#9ca3af" />
    </TouchableOpacity>
  </View>
);

export default Dropdown;