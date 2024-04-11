import {View, Image, Text, StyleSheet, TouchableOpacityProps} from "react-native";
import {PropsWithChildren, useState} from "react";
//props title ans children
type Props = {
    option: {
        title: string | '';
        image: string | '';
    };
}

export default function CardOptions({option}: Props) {
    const [categorie, setCategories] = useState(option);

    return <View style={styles.width_options}>
        <View
            style={styles.container_image}
        >
            <View
                style={styles.rounded}
            >
                <Image
                    style={styles.image}
                    source={{
                        uri: categorie.image,
                    }}
                />
            </View>

        </View>
        <View>
            <Text style={styles.text_category}>{categorie.title}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    width_options: {
        width: "20%",
        alignItems: "center",
    },
    image: {
        width: '100%',
        height: '100%',
    },
    container_image: {
        width: 60,
        height: 60,
    },
    rounded: {
        backgroundColor: "#fff",
        width: '100%',
        height: '100%',
        borderRadius: 100,
        overflow: "hidden",
        padding: 10
    },
    title: {
        paddingTop: 14,
        paddingLeft: 20,
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#756f6f",
    },
    text_category: {
        paddingTop: 8,
        fontSize: 12,
        color: "#756f6f",
    }

});
