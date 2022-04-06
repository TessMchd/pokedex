import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Button, ScrollView, FlatList} from 'react-native';
import {useEffect, useState} from "react";
import {getPokemon} from "../Api/PokeApi";
import Pokemon from "../Components/Pokemon";

const color = ['#fa9696', '#ffec9f', '#b7fdc3', '#fabc93', '#a2ffe9']
let indexColor = 0

export default function Home(props) {

    const [listePoke, setListePoke] = useState([]);
    const [nextPage, setNextPage] = useState("https://pokeapi.co/api/v2/pokemon")
    const {navigation} = props

    useEffect( async () => {
        loadPokemon(nextPage)
    }, [])

    const loadPokemon = (url) => {
        getPokemon(url).then((res) => {
            setListePoke([...listePoke, ...res.results])
            setNextPage(res.next)
        })
    }

    function getColor() {
        let background = color[indexColor]
        indexColor += 1
        if(indexColor === 5) {
            indexColor = 0
        }
        return background
    }

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={{ alignItems: "center" }}
                horizontal={false}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                data={listePoke}
                extraData={listePoke}
                renderItem={({item, index})=><Pokemon navigation={navigation} poke={item} index={index}/>}
                keyExtractor={(item) => item.name}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    // Load next page
                    if (nextPage != null) {
                        loadPokemon(nextPage);
                    }
                }}
            />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#444444',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
