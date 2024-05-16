import {View, Text} from "react-native";
import MenuHamburguer from "./MenuHamburguer";

export default function Header({ onPress }) {
    return (
        <View className="h-20 pt-8 bg-black flex flex-row  justify-between px-4 items-center">
            <Text className={`text-white text-2xl`}>PETS</Text>
            <MenuHamburguer onPress={onPress}></MenuHamburguer>
        </View>
    );
}
