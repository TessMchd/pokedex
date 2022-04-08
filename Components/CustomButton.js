import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function CustomButton(props) {

    const {text, color, setTextParent} = props

    return (
        <Button
            onPress={() => setTextParent(text)}
            title={text}
            color={color}
            accessibilityLabel="Learn more about this purple button"
        />
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d48c8c',
    },
});