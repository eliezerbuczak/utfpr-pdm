import {Alert, Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import {useEffect, useState} from "react";
import MOCK_DATA from "./MOCK_DATA.json";

export default function App() {
    const [inputText, setInputText] = useState('');
    const [list, setList] = useState(MOCK_DATA);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        filterData();
    }, [inputText]); // Observa a mudança em inputText

    const filterData = () => {
        const filteredData = list.filter((item) => item.nome.toLowerCase().includes(inputText.toLowerCase()));
        setFilteredData(filteredData);
    };



  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding:80}}>
        <TextInput
            style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
            placeholder="Digite aqui"
            onChangeText={setInputText}
            value={inputText}
        />

        <FlatList
            data={filteredData} // Renderiza a lista filtrada
            renderItem={({ item }) => (
                <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                    <Text>{item.nome}</Text>
                </View>
            )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
