import {Button, TextInput, View} from 'react-native';
import {useState} from 'react';
export default function Login() {

    const [username, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    const onConsoleData = () => {
        console.log(username, password);
    }

    return (
        <View style={{borderBottomColor: 'black', borderBottomWidth: 1}}>
            <TextInput
                onChangeText={onChangeEmail}
                value={username}
                placeholder={"Email"}
                style={{borderBottomColor: 'black', borderBottomWidth: 1,marginBottom: 20}}
            />
            <TextInput
                onChangeText={onChangePassword}
                value={password}
                secureTextEntry={true}
                placeholder={"Password"}
                style={{borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 20}}
            />
            <Button
                onPress={onConsoleData}
                title="Submit"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
}