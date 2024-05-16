import {View, Image, Text, StyleSheet, TouchableOpacityProps} from "react-native";
import {useState} from "react";
import OptionWithImage from "@/components/ui/OptionWithImage";

type Props = {
    title: string;

}

export default function CardOptions({title}: Props) {
    const [categories, setCategories] = useState([
        {
            id: 'category',
            title: "Categorias",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTwj6wH8kGkolJhCnUhv3AxXyhPxSGrrN4MaV2Rb3pig&s",
        },
        {
            id: "smartphones",
            title: "Celulares",
            image: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-s901elvyzto/gallery/br-galaxy-s22-s901-410380-sm-s901elvyzto-thumb-539688841"
        },
        {
            id: "tvs",
            title: "TVs",
            image: "https://www.pngall.com/wp-content/uploads/5/Full-HD-LED-TV-PNG-Image.png"
        },
        {
            id: "computers",
            title: "Informática",
            image: "https://www.voke.shop/media/catalog/product/l/3/l340_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
        },
        {
            id: "beauty",
            title: "Beleza",
            image: "https://img.lovepik.com/free-png/20211214/lovepik-beauty-lipstick-png-image_401623972_wh1200.png"
        },
        {
            id: "fashion",
            title: "Moda",
            image: "https://d21r59uixrp2d9.cloudfront.net/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/e/0/e06_22_11_254781.jpg"
        },
        {
            id: "sports",
            title: "Esportes",
            image: "https://png.pngtree.com/png-clipart/20230621/original/pngtree-soccer-ball-vector-png-image_9194292.png"
        },
        {
            id: "home",
            title: "Casa",
            image: "https://castelodosmoveis.com.br/wp-content/uploads/2022/06/Sofa-Retratil-e-Reclinavel-Sao-Jose-Cobre.png"
        },
        {
            id: "market",
            title: "Mercado",
            image: "https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/37004/medium/amaciante-ype-conc5l-gts-500ml_87494.png"
        },
        {
            id: "utilities",
            title: "Utilidades",
            image: "https://images.tcdn.com.br/img/img_prod/862600/panela_tramontina_turim_em_aluminio_com_revestimento_interno_e_externo_em_antiaderente_starflon_max__7099_3_0525e4e11fd07140fcf4487e6701fdd6.png"
        }
    ])

    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.container_display}>
            {categories.map((category, index) => {
                return <OptionWithImage key={index} option={category}/>
            })}
        </View>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    container_display: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        rowGap: 10


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
