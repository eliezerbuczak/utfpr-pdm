import {
    View,
    Text,
    SafeAreaView,
    Alert,
    TextInput,
    TouchableOpacity,
    ActivityIndicator
} from "react-native";
import {router, Stack, useGlobalSearchParams} from "expo-router";
import React, {useEffect, useState} from "react";
import {StatusBar} from "expo-status-bar";
import Header from "../../../components/ui/Header";
import {useActionSheet} from '@expo/react-native-action-sheet';
import useAuth from "../../../firebase/hooks/useAuth";
import Pets from "../../../types/Pets";
import useDocument from "../../../firebase/hooks/useDocument";
import FullScreen from "../../../components/containers/FullScreen";

export default function Edit() {
    const {showActionSheetWithOptions} = useActionSheet();
    const {logout} = useAuth();

    const { id } = useGlobalSearchParams();
    const {
        data: pet,
        loading,
        upsert,
    } = useDocument<Pets>("pets", id as string);

    const options = () => {
        const options = ['Logout'];
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
        type: pet?.type || "",
        name: pet?.name || "",
        age: pet?.age || 0
    });
    useEffect(() => {
        if (pet) {
            setForms({
                type: pet.type || "",
                name: pet.name || "",
                age: pet.age || 0
            });
        }
    }, [pet]);


    if (loading || !pet) return  (<FullScreen>
        <View className="items-center justify-center h-full"><ActivityIndicator size="large" color="#0000ff"/>
        </View>
    </FullScreen>)

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
                        await upsert(forms);
                        Alert.alert("Edit Book", "Editado com sucesso");
                    } catch (error: any) {
                        Alert.alert("Create Book error", error.toString());
                    }
                }} className={`px-8 p-2 bg-black mx-4 rounded`}>
                    <Text className={`text-white text-center`}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{
                    router.replace('/pets')
                }}
                    className={`px-8 p-2 bg-black mx-4 rounded`}
                >
                    <Text className={`text-white text-center`}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}