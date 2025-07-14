import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import BottomMenuScreen from "./BottomMenuScreen";
import Header from "./Header";
import SearchBar from "./SearchBar";
import StatCardScreen from "./StatCardScreen";
import VehicleCard from "./VehicleCard";
import { carIconXml, checkIconXml, plusIconXml, wrenchIconXml } from "../icons/IconSvgs";

const HomeScreen = ({navigation}) => {
// User avatar placeholder (replace with your actual image path)
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Header */}
      <Header navigation={navigation}/>

      {/* Search Bar */}
      <SearchBar />

      {/* Stats Cards */}
      <View className="flex-row justify-around my-4 px-3">
        <StatCardScreen
          icon={<SvgXml xml={carIconXml} width="30" height="30" fill="#ffff" stroke="#ffff" />}
          label="Total"
          value="4"
          bgColor="bg-white"
          textColor="text-blue-700"
        />
        <StatCardScreen
          icon={<SvgXml xml={checkIconXml} width="30" height="30" fill="null" stroke="null" />}
          label="Active"
          value="3"
          bgColor="bg-white"
          textColor="text-green-700"
        />
        <StatCardScreen
          icon={<SvgXml xml={wrenchIconXml} width="30" height="30" fill="none" stroke="none" />}
          label="Service"
          value="1"
          bgColor="bg-white"
          textColor="text-orange-700"
        />
      </View>

      {/* My Vehicles Section */}
      <View className="flex-row items-center justify-between mx-4 mb-4">
        <Text className="text-2xl font-bold text-gray-800">My Vehicles</Text>
        <TouchableOpacity className="w-10 h-10 rounded-full bg-blue-600 items-center justify-center shadow-md" onPress={() => navigation.navigate('AddVehicle')}>
          <SvgXml xml={plusIconXml} width="24" height="24" stroke="white" />
        </TouchableOpacity>
      </View>

      {/* Vehicle List */}
      <ScrollView className="flex-1">
        <VehicleCard
          iconType="car"
          iconBgColor="bg-blue-100"
          name="BMW X5"
          year="2022"
          plate="ABC-123"
          status="Active"
          statusColor="bg-green-500"
          mileage="45,230 km"
          nextService="Next service: 2 weeks"
          onPress={() => navigation.navigate('Vehicle Detail')}
        />
        <VehicleCard
          iconType="car"
          iconBgColor="bg-red-100"
          name="Toyota Camry"
          year="2020"
          plate="XYZ-456"
          status="Service"
          statusColor="bg-red-500"
          mileage="67,890 km"
          nextService="Service due now"
          onPress={() => navigation.navigate('Vehicle Detail')}
        />
        <VehicleCard
          iconType="motorcycle" // Example for different icon type
          iconBgColor="bg-green-100"
          name="Honda CBR"
          year="2021"
          plate="MNO-789"
          status="Active"
          statusColor="bg-green-500"
          mileage="12,450 km"
          nextService="Next service: 1 month"
          onPress={() => navigation.navigate('Vehicle Detail')}
        />
        <VehicleCard
          iconType="car"
          iconBgColor="bg-purple-100"
          name="Ford F-150"
          year="2019"
          plate="DEF-321"
          status="Active"
          statusColor="bg-green-500"
          mileage="89,120 km"
          nextService="Next service: 3 weeks"
          hasBorder={false} // Last item usually doesn't have a bottom border
        />
        {/* Add more VehicleItem components as needed */}
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomMenuScreen />
    </SafeAreaView>
  );
}
export default HomeScreen;