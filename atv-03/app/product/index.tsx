import {Button, Text, View} from 'react-native';
import {Link, Stack, useGlobalSearchParams, useRouter} from "expo-router";
import {useState} from "react";

export default function Page() {
    const router = useRouter()
    const handlePress = () => {
        router.push(`/`)
    }

    return (
        <>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ff0000',
                    },
                    title: 'Products',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <View className="flex-1 items-center justify-center bg-white">
                <Text>Produto Inexistente</Text>
                <Button title={"Ir para index"} onPress={handlePress}/>
            </View>
        </>
    );
}