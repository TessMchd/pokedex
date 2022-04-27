import {AsyncStorage, FlatList, StyleSheet, View} from 'react-native';
import {useEffect, useState} from "react";
import Pokemon from "./Pokemon";
import {StatusBar} from "expo-status-bar";

export default function Team(props) {
    const [listPoke, setLisPoke] =  useState([]);
    const {navigation} = props

    useEffect(async () => {
        let team = []
        try {
            const value = await AsyncStorage.getItem('team');
            if (value !== null) {
                team = JSON.parse(value)
                setLisPoke(team)
            }
        } catch (error) {
            // Error retrieving data
        }
    })

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={{ alignItems: "center" }}
                horizontal={false}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                data={listPoke}
                extraData={listPoke}
                renderItem={({item, index})=><Pokemon navigation={navigation} poke={item} index={index}/>}
                keyExtractor={(item) => item.name}
            />

            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#444444',
        padding: 5,
        alignItems: 'center',
    },
})