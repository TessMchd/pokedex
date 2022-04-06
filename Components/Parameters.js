import {StyleSheet, Text, View} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Parameters() {
    return (
        <View style={styles.container}>
            <View style={styles.group}>
                <View style={styles.flex}>
                    <Icon name='translate' size={20} color='black' />
                    <Text>Language</Text>
                </View>
                <Text style={{color : '#fabc93'}}>English</Text>
            </View>
            <View style={styles.group}>
                <View style={styles.flex}>
                    <Icon name='map-marker' size={20} color='black' />
                    <Text>Country</Text>
                </View>
                <Text style={{color : '#fabc93'}}>France</Text>
            </View>
            <View style={styles.group}>
                <View style={styles.flex}>
                    <Icon name='bell' size={20} color='black' />
                    <Text>Notifications</Text>
                </View>
                <Text style={{color : '#75d765'}}>ON</Text>
            </View>
            <View style={styles.group}>
                <View style={styles.flex}>
                    <Icon name='logout' size={20} color='red' />
                    <Text style={{color : '#fa9696'}}>Leave</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    group: {
        backgroundColor: 'white',
        width: '95%',
        height: 60,
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "space-between",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        marginTop: 8,
    },
    flex: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
    },
    container: {
        flex: 1,
        backgroundColor: '#444444',
        padding: 5,
        alignItems: 'center',
    },
});