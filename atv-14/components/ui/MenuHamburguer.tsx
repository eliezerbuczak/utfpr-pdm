import React from 'react';
import {TouchableOpacity} from 'react-native';
import { Ionicons } from "@expo/vector-icons";


export default function MenuHamburguer({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress} className="">
            <Ionicons  name="menu" size={40} color="#ffffff" onPress={onPress} />
        </TouchableOpacity>
    );
}
