import {Button, Text, View} from 'react-native';
import {Link, Stack, useGlobalSearchParams, useRouter} from "expo-router";
import {useState} from "react";

export default function Page() {
    const {id} = useGlobalSearchParams()
    const [id_product, setIdProduct] = useState(id)
    const router = useRouter()

    const handlePress = () => {
        router.push(`/`)
    }

    return (
        <>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#0055ff',
                    },
                    title: 'Products',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}/>
            <View className="flex-1 items-center justify-center bg-white">
                <Text>Product ID: {id_product}</Text>
                <Button title={"Ir para Index"} onPress={handlePress}/>
            </View>
        </>
    );
}