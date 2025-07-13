import { Text, View } from "react-native";

export default function StatCardScreen ({ icon, label, value, bgColor, textColor }: { icon: React.ReactNode; label: string; value: string; bgColor: string; textColor: string; }) {
    return (
    <View className={`flex-1 p-4 rounded-xl items-center justify-center mx-1 ${bgColor}`}>
        <View className="mb-2">
        {icon}
        </View>
        <Text className={`text-base font-semibold ${textColor}`}>{label}</Text>
        <Text className={`text-3xl font-bold ${textColor}`}>{value}</Text>
    </View>
    )
};
