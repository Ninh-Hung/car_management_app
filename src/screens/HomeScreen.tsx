import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import BottomMenuScreen from "./BottomMenuScreen";
import Header from "./Header";
import SearchBar from "./SearchBar";
import StatCardScreen from "./StatCardScreen";
import VehicleItemScreen from "./VehicleItemScreen";

const HomeScreen = () => {
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
// Wrench (Service) icon
const wrenchIconXml = `
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_15_100)">
<path d="M14.0781 13C17.5313 13 20.3281 10.2031 20.3281 6.75C20.3281 6.15234 20.2422 5.57422 20.0859 5.02344C19.9648 4.60156 19.4453 4.50781 19.1367 4.81641L16.1367 7.81641C16.0195 7.93359 15.8594 8 15.6953 8H13.4531C13.1094 8 12.8281 7.71875 12.8281 7.375V5.13281C12.8281 4.96875 12.8945 4.80859 13.0117 4.69141L16.0117 1.69141C16.3203 1.38281 16.2227 0.863281 15.8047 0.742187C15.2539 0.585937 14.6758 0.5 14.0781 0.5C10.625 0.5 7.82812 3.29687 7.82812 6.75C7.82812 7.49609 7.96094 8.21484 8.19922 8.87891L1.10547 15.9727C0.609375 16.4688 0.328125 17.1445 0.328125 17.8477C0.328125 19.3125 1.51563 20.5 2.98047 20.5C3.68359 20.5 4.35938 20.2188 4.85547 19.7227L11.9492 12.6289C12.6133 12.8711 13.332 13 14.0781 13ZM3.45312 16.4375C3.70177 16.4375 3.94022 16.5363 4.11604 16.7121C4.29185 16.8879 4.39062 17.1264 4.39062 17.375C4.39062 17.6236 4.29185 17.8621 4.11604 18.0379C3.94022 18.2137 3.70177 18.3125 3.45312 18.3125C3.20448 18.3125 2.96603 18.2137 2.79021 18.0379C2.6144 17.8621 2.51562 17.6236 2.51562 17.375C2.51562 17.1264 2.6144 16.8879 2.79021 16.7121C2.96603 16.5363 3.20448 16.4375 3.45312 16.4375Z" fill="#F97316"/>
</g>
<defs>
<clipPath id="clip0_15_100">
<path d="M0.328125 0.5H20.3281V20.5H0.328125V0.5Z" fill="white"/>
</clipPath>
</defs>
</svg>
`;

// Check (Active) icon
const checkIconXml = `
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_15_93)">
<path d="M10.9844 20.5C13.6365 20.5 16.1801 19.4464 18.0554 17.5711C19.9308 15.6957 20.9844 13.1522 20.9844 10.5C20.9844 7.84784 19.9308 5.3043 18.0554 3.42893C16.1801 1.55357 13.6365 0.5 10.9844 0.5C8.33221 0.5 5.78867 1.55357 3.91331 3.42893C2.03794 5.3043 0.984375 7.84784 0.984375 10.5C0.984375 13.1522 2.03794 15.6957 3.91331 17.5711C5.78867 19.4464 8.33221 20.5 10.9844 20.5ZM15.3984 8.66406L10.3984 13.6641C10.0313 14.0312 9.4375 14.0312 9.07422 13.6641L6.57422 11.1641C6.20703 10.7969 6.20703 10.2031 6.57422 9.83984C6.94141 9.47656 7.53516 9.47266 7.89844 9.83984L9.73438 11.6758L14.0703 7.33594C14.4375 6.96875 15.0312 6.96875 15.3945 7.33594C15.7578 7.70312 15.7617 8.29687 15.3945 8.66016L15.3984 8.66406Z" fill="#22C55E"/>
</g>
<defs>
<clipPath id="clip0_15_93">
<path d="M0.984375 0.5H20.9844V20.5H0.984375V0.5Z" fill="white"/>
</clipPath>
</defs>
</svg>
`;

// Plus icon for Add Vehicle
const plusIconXml = `
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.875 0.9375C6.875 0.453516 6.48398 0.0625 6 0.0625C5.51602 0.0625 5.125 0.453516 5.125 0.9375V4.875H1.1875C0.703516 4.875 0.3125 5.26602 0.3125 5.75C0.3125 6.23398 0.703516 6.625 1.1875 6.625H5.125V10.5625C5.125 11.0465 5.51602 11.4375 6 11.4375C6.48398 11.4375 6.875 11.0465 6.875 10.5625V6.625H10.8125C11.2965 6.625 11.6875 6.23398 11.6875 5.75C11.6875 5.26602 11.2965 4.875 10.8125 4.875H6.875V0.9375Z" fill="white"/>
</svg>
`;

// User avatar placeholder (replace with your actual image path)
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Header */}
      <Header />

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
        <TouchableOpacity className="w-10 h-10 rounded-full bg-blue-600 items-center justify-center shadow-md">
          <SvgXml xml={plusIconXml} width="24" height="24" stroke="white" />
        </TouchableOpacity>
      </View>

      {/* Vehicle List */}
      <ScrollView className="flex-1">
        <VehicleItemScreen
          iconType="car"
          iconBgColor="bg-blue-100"
          name="BMW X5"
          year="2022"
          plate="ABC-123"
          status="Active"
          statusColor="bg-green-500"
          mileage="45,230 km"
          nextService="Next service: 2 weeks"
        />
        <VehicleItemScreen
          iconType="car"
          iconBgColor="bg-red-100"
          name="Toyota Camry"
          year="2020"
          plate="XYZ-456"
          status="Service"
          statusColor="bg-red-500"
          mileage="67,890 km"
          nextService="Service due now"
        />
        <VehicleItemScreen
          iconType="motorcycle" // Example for different icon type
          iconBgColor="bg-green-100"
          name="Honda CBR"
          year="2021"
          plate="MNO-789"
          status="Active"
          statusColor="bg-green-500"
          mileage="12,450 km"
          nextService="Next service: 1 month"
        />
        <VehicleItemScreen
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