import {Button, Text, TextInput, View} from 'react-native';
import {Link, Stack} from "expo-router";
import {useState} from "react";

export default function Page() {
    const [id_product, setIdProduct] = useState('')
    return <View className="space-y-4 items-center">
        <Stack.Screen
            options={{
                headerStyle: {
                    backgroundColor: '#000000',
                },
                title: 'Index',
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        />
        <Text>Index page</Text>
        <TextInput
            onChangeText={setIdProduct}
            value={id_product}
            placeholder="useless placeholder"
            keyboardType="numeric"
        />
        <Link href={`/product/${id_product}`}>Go to product</Link>
    </View>;
}
