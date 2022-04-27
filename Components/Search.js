import {useState, useCallback} from "react";
import {StyleSheet, View, Keyboard} from "react-native";
import {TextInput, Text} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import {getPokemon} from "../Api/PokeApi";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Pokemon from "./Pokemon";

export default function Search(props) {
    const [search, onChangeSearch] = useState("");
    const [pokemon, setPokemon] = useState(null);
    const {navigation} = props

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
                const item = {
                    name: response.name,
                    url: "https://pokeapi.co/api/v2/pokemon/" + response.id,
                };
                setPokemon(item)
                onChangeSearch("");
            })
            Keyboard.dismiss();
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.searchBAr}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeSearch}
                    value={search}
                />
                <Icon
                    name="magnify"
                    size={30}
                    color='white'
                    onPress={() => getPokemonSearch()}
                />
            </View>
            {pokemon !== null ? (
                <View style={styles.card}>
                    <Pokemon navigation={navigation} poke={pokemon}/>
                </View>
            ) : (
                <View>
                    <Text style={styles.error}>Nothing found</Text>
                </View>
            )}

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
        width: '80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    searchBAr: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 30,
        marginTop: 20
    },
    error: {
        color: 'white',
        marginTop: 20,
    },
    card: {
        width: '90%'
    }
})