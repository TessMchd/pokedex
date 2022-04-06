import {StyleSheet, Text, View, Button, ScrollView, FlatList} from 'react-native';
import Navigation from "./navigation/Navigation";
import {SafeAreaView} from "react-native";


export default function App() {

  return (
    <SafeAreaView style={{flex: 1}}>
        <Navigation/>
    </SafeAreaView>
  );
}

