import {useEffect, useState} from "react";
import {getStats} from "../Api/getStats";
import {Text, View, Image, StyleSheet, Pressable} from 'react-native';
import {getBackgroundColor} from "react-native/Libraries/LogBox/UI/LogBoxStyle";
import {TypeColor} from "./TypeColor";

const color = ['#f16e6e', '#FFAB76', '#BAFFB4', '#a2ffe9', '#FFFDA2']

export default function Pokemon(props) {

    const [statsPoke, setStatsPoke] =  useState([]);
    const {poke, color, navigation} = props
    useEffect( async () => {
        await getStats(poke.url).then((res) => {
            setStatsPoke(res)
        })
    }, [])

    function getBackgroundColor() {
        if(statsPoke.length !== 0) {
            console.log(statsPoke.types[0].type.name)
            return TypeColor(statsPoke.types[0].type.name)
        }
        return "white"
    }

    return(
        <Pressable onPress={()=> {navigation.navigate('Details', {statsPoke: statsPoke, poke: poke, color: getBackgroundColor()})}} style={[styles.container, {backgroundColor : getBackgroundColor()}]}>
            { statsPoke.sprites ?
                <Image
                    style={styles.stretch}
                    source={{ uri : statsPoke.sprites.front_default}}
                />
                : null
            }
            <Text style={styles.text}>{poke.name}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    stretch: {
        width: 80,
        height: 110,
        resizeMode: 'stretch'
    },

    container: {
        padding : 10,
        width : '49%',
        margin : 2,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },

    text : {
        textTransform: "uppercase",
        fontWeight: "bold"
    }
});
