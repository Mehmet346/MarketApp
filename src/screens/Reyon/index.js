import React from "react";
import {SafeAreaView, ScrollView, Text,FlatList, TouchableOpacity, View} from "react-native";

import firestore from "@react-native-firebase/firestore"

export default class Rayon extends React.Component {

    state = {
        users: '',
    }
    
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
    constructor(props) {
        super(props);
        this.getProduct();
        this.subscriber = firestore().collection('product').get()
        .then(querySnapshot => {
          

            querySnapshot.forEach(documentSnapshot => {
              users.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
            });
      
            this.setState({users: [this.users]});
        })
    }

   getProduct = async () => {
    const userDocument = await firestore().collection("product").get()
    console.log(userDocument)
   }
    render() {
        return(
            <SafeAreaView>
                    <FlatList
                    data={this.state.users}
                    renderItem={({ item }) => (
                        <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>User ID: {item}</Text>
                      
                        </View>
                    )}
    />
            </SafeAreaView>
        )
    }
}
