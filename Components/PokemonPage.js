import {StyleSheet, View, Text, Image} from 'react-native';
import {TypeColor} from "./TypeColor";
import ProgressBar from 'react-native-progress/Bar';
import {ScrollView} from "react-native";

const backgroundColor = ['#fa9696', '#ff9f51', '#95fcc2', '#8cd0fa', '#fabc93']

export default function PokemonPage(props) {
    const statsPoke = props.route.params.statsPoke
    const poke = props.route.params.poke
    const color = props.route.params.color

    function getBackgroundColor() {
        let index = Math.floor(Math.random() * 5)
        console.log(index)
        return backgroundColor[index]
    }

    return (
        <ScrollView style={{flex:1}} contentContainerStyle={{alignItems: "center"}}>
            <View style={[styles.containerImage, {backgroundColor : color}]}>
                <Image
                    style={styles.stretch}
                    source={{ uri : statsPoke.sprites.front_default}}
                />
            </View>
            <Text style={styles.title}>{poke.name}</Text>
            <Text style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1, width: '91%', marginBottom: 10}}>Number: {statsPoke.order}</Text>
            <View style={{alignItems: "flex-start", flexDirection: "row", width:'100%', paddingLeft: 20, flexWrap: "wrap"}}>
                {
                    statsPoke.types.map((type, index) => {
                        return <Text key={index} style={[styles.type, {backgroundColor: TypeColor(type.type.name)}]}>{type.type.name}</Text>
                    })
                }
            </View>
            <View style={{width: '91%', marginTop: 20}}>
                <Text style={{fontSize: 18, fontWeight: "bold"}}>Abilities</Text>
                <View style={{alignItems: "flex-start", flexDirection: "row", width:'100%', marginTop: 5, flexWrap: "wrap"}}>
                    {
                        statsPoke.abilities.map((ability, index) => {
                            return <Text key={index} style={[styles.type, {backgroundColor: getBackgroundColor()}]}>{ability.ability.name}</Text>
                        })
                    }
                </View>
            </View>
            <View style={{width: '91%', marginTop: 20}}>
                <Text style={{fontSize: 18, fontWeight: "bold"}}>Stats</Text>
                <View style={{alignItems: "flex-start", flexDirection: "row", width:'100%', marginTop: 5, flexWrap: "wrap"}}>
                    {
                        statsPoke.stats.map((stat, index) => {
                            return(
                                <View key={index} style={{display:"flex", flexDirection: "column", alignItems:"stretch", width: "80%", marginBottom:10}}>
                                    <Text style={{color: "black", textTransform: "uppercase",}}>{stat.stat.name} :</Text>
                                    <ProgressBar progress={stat.base_stat/100} width={null} height={14} color={getBackgroundColor()}/>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', paddingTop: 10, paddingBottom: 15}}>
                <View>
                    <Text style={{textAlign: 'center', fontSize: 18, marginBottom: 3}}>Height :</Text>
                    <Text style={{textAlign: 'center'}}>{statsPoke.height} dm</Text>
                </View>
                <View>
                    <Text style={{textAlign: 'center', fontSize: 18, marginBottom: 3}}>Weight :</Text>
                    <Text style={{textAlign: 'center'}}>{statsPoke.weight} hg</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    stretch: {
        width: 200,
        height: 200,
    },
    containerImage: {
        justifyContent: "center",
        alignItems: "center",
        height: 200,
        width: '100%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    title: {
        width: '91%',
        textTransform: "uppercase",
        paddingTop: 20,
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
    type: {
        textAlign: 'center',
        width: 135,
        fontSize: 13,
        fontWeight: "bold",
        marginBottom: 5,
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        marginRight: 5,
        color: 'white',
        textTransform: "uppercase"
    },
})