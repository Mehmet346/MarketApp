import React from "react";
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";

export default class AccountStatment extends React.Component {

    
    static navigationOptions = () =>  {
        return {
            title:'Hesap Dökümü',
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
                        <View><Text>Hesap Dokumu</Text></View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
