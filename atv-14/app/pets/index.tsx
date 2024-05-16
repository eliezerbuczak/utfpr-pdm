import {
    SectionList,
    View,
    Text,
    SafeAreaView,
    Alert,
    TextInput,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from "react-native";
import data from "../../services/data";
import {router, Stack} from "expo-router";
import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import Header from "../../components/ui/Header";
import {useActionSheet} from '@expo/react-native-action-sheet';
import useAuth from "../../firebase/hooks/useAuth";
import Pets from "../../types/Pets";
import useCollection from "../../firebase/hooks/useCollection";
import {Ionicons} from "@expo/vector-icons";

export default function Cars() {
    const {showActionSheetWithOptions} = useActionSheet();
    const {logout} = useAuth();
    const {data, create, remove, refreshData, loading} =
        useCollection<Pets>("pets");

    const options = () => {
        const options = [ 'Logout'];
        const destructiveButtonIndex = 0;

        showActionSheetWithOptions(
            {
                options,
                destructiveButtonIndex
            },
            async (selectedIndex?: number) => {
                if (selectedIndex !== undefined) { // Verifica se selectedIndex não é undefined
                    switch (selectedIndex) {
                        case destructiveButtonIndex:
                            try {
                                await logout();
                                router.replace('/');
                            } catch (e: any) {
                                console.error(e);
                                Alert.alert("Logout Error", e.toString());
                            }
                            break;
                    }
                }
            }
        );

    }

    const [forms, setForms] = useState<Pets>({
        type: "",
        name: "",
        age: 0
    });


    return (

        <SafeAreaView>
            <StatusBar/>
            <Header onPress={options}/>
            <Stack.Screen options={{headerShown: false}}/>
            <View className="my-4 space-y-4 p-4">
                <TextInput className="border-2 border-black p-2 w-full rounded-lg"
                           value={forms.type}
                           placeholder="Digite o tipo do animal"
                           onChangeText={(text) => setForms({...forms, type: text})}
                />
                <TextInput className="border-2 border-black p-2 w-full rounded-lg"
                           value={forms.name}
                           placeholder="Digite o nome do animal"
                           onChangeText={(text) => setForms({...forms, name: text})}
                />
                <TextInput className="border-2 border-black p-2 w-full rounded-lg"
                           value={forms.age.toString()}
                           keyboardType="numeric"
                           placeholder="Digite a idade do animal"
                           onChangeText={(text) => setForms({...forms, age: Number(text)})}
                />
                <TouchableOpacity onPress={async () => {
                    try {
                        await create(forms);
                        refreshData();
                    } catch (error: any) {
                        Alert.alert("Create Book error", error.toString());
                    }
                }} className={`px-8 p-2 bg-black mx-4 rounded`}>
                    <Text className={`text-white text-center`}>Salvar</Text>
                </TouchableOpacity>

            </View>

            {loading ? (
                <ActivityIndicator size="large" color="#0000ff"/>
            ) : (
                <FlatList
                    data={data}
                    renderItem={({item}) => (
                        <View className={`flex flex-row justify-between p-4 bg-gray-200 mb-4`}>
                            <Text>{item.type}</Text>
                            <Text>{item.name}</Text>
                            <Text>{item.age}</Text>
                            <View className={`flex flex-row space-x-4`}>
                                <TouchableOpacity
                                    onPress={() => {
                                        if (item.id) {
                                            router.push(`/pets/${item.id}/`);
                                        } else {
                                            Alert.alert(
                                                "View error",
                                                "cannot access book details because it does not have an id!"
                                            );
                                        }
                                    }}>
                                    <Ionicons name="pencil" size={20} color="#0000ff"/>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={async () => {
                                        await remove(item.id!);
                                        refreshData();
                                    }}>
                                    <Ionicons name="trash" size={20} color="#ff0000"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            )}

        </SafeAreaView>
    )
}