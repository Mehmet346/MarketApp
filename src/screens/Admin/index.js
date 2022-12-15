import React from "react";
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";

export default class Admin extends React.Component {

    
    static navigationOptions = () =>  {
        return {
            title:'Admin',
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
                        <View><Text>Admin</Text></View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
