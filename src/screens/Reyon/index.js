import React from "react";
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";

export default class Rayon extends React.Component {

    
    static navigationOptions = ( { navigation }) =>  {
        return {
            title:'Market',
            headerRight:<Text>150 TL</Text>,
            
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
                        <View><Text>Reyon</Text></View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
