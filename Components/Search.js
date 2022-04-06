import {useState, useCallback} from "react";
import {StyleSheet, View, Keyboard} from "react-native";
import {TextInput, Text} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import {getPokemon} from "../Api/PokeApi";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Search() {
    const [search, onChangeSearch] = useState("");
    const [pokemon, setPokemon] = useState(null);

    useFocusEffect(
        useCallback(() => {
            setPokemon(null);
        }, [])
    );

    function getPokemonSearch() {
        if (search !== "") {
            getPokemon(
                "https://pokeapi.co/api/v2/pokemon/" + search.toLowerCase().trimEnd()
            ).then((response) => {
                if (response && response.status === 200) {
                    const item = {
                        name: response.data.name,
                        url: "https://pokeapi.co/api/v2/pokemon/" + response.data.id,
                    };
                    setPokemon(item);
                    onChangeSearch("");
                } else {
                    setPokemon(null);
                }
            });
            Keyboard.dismiss();
        }
    }


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeSearch}
                value={search}
            />
            <Icon
                name="magnify"
                size={20}
                color='white'
                onPress={() => getPokemonSearch()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#444444',
    },
    input: {
        backgroundColor: '#eaeaea',
        height: 40,
        width: '90%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
})