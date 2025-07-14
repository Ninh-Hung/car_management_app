import { Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { calendarIconXml, chartIconXml, homeIconXml, settingIconXml } from "../icons/IconSvgs";

const BottomMenuScreen = () => {

    return (
        <View className="flex-row justify-around py-3 bg-white border-t border-gray-200">
          <TouchableOpacity className="items-center">
            <SvgXml xml={homeIconXml} width="30" height="30" fill="#ffff" stroke="#ffff" />
            <Text className="text-blue-600 text-xs">Home</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center">
            <SvgXml xml={calendarIconXml} width="30" height="30" fill="#ffff" stroke="#ffff" />
            <Text className="text-gray-500 text-xs">Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center">
            <SvgXml xml={chartIconXml} width="30" height="30" fill="#ffff" stroke="#ffff" />
            <Text className="text-gray-500 text-xs">Reports</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center">
            <SvgXml xml={settingIconXml} width="30" height="30" fill="#ffff" stroke="#ffff" />
            <Text className="text-gray-500 text-xs">Settings</Text>
          </TouchableOpacity>
        </View>
    )
};

export default BottomMenuScreen;