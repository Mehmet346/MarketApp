import React from "react";
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";

export default class Basket extends React.Component {
    static navigationOptions = ( { navigation }) =>  {
        return {
            title:'Sepet',
            headerRight:<Text>Tutar</Text>,

            headerStyle: {
                backgroundColor: '#d50000',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
        }
    };

    constructor() {
        super();
    }


    render() {
        return(
            <SafeAreaView>
                <ScrollView>
                        <View><Text>Sepet</Text></View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
