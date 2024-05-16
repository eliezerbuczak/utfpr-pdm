import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

export default function ButtonEntrar({ onPress }) {
    return (
        <TouchableOpacity className="items-center" onPress={onPress}>
            <Image className=" " source={require("../../assets/images/BUTTON_ENTRAR.png")} />
        </TouchableOpacity>
    );
}
