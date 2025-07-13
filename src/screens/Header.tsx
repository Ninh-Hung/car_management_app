import { Image, Text, View } from "react-native";

export default function Header() {
    const userAvatar = require('../../assets/icons/user.png');
    return (
    <View className="flex-row items-center justify-between p-4 bg-white">
        <View>
        <Text className="text-3xl font-bold text-gray-800">Ninh Hưng</Text>
        <Text className="text-base text-gray-600">hoaphongba59@gmail.com</Text>
        </View>
        <Image
        source={userAvatar}
        className="w-14 h-14 rounded-full rounded-yellow-500 solid border-2 border-yellow-500"
        />
    </View>
    )
};
