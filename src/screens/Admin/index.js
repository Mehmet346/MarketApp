import React, {useState, useContext, useEffect} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PracticeContext } from '../Global/PracticeContext';
import auth from '@react-native-firebase/auth';


export default function Admin({navigation}) {
    const {
        kekstraStock,
        cubukKrakerStock,
        sutStock,
        AdminAmount, 
    } = useContext(PracticeContext)

    const [user, setUser] = useState(auth)
    const current = user.currentUser;
    const email = current.email;
    console.log(email)


    Admin.navigationOptions = ({}) => ({
        title: 'Admin',
        headerStyle: {
            backgroundColor: '#d50000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
    });
    useEffect(() => {
        navigation.setParams({ });
   },[]);

   function logout(){
    auth()
    .signOut()
    .then(() => console.log('User signed out!'));
   }

    return (
        <SafeAreaView>
            {(email != 'admin@gmail.com') ?
             <View>
                <Text style={style.user}>Admin değilsiniz!</Text>
             <TouchableOpacity onPress={() => logout()}>
                <Text>Çıkış Yap</Text>
            </TouchableOpacity></View>  
            : 
            <TouchableOpacity onPress={() => logout()}>
                <Text>Çıkış Yap</Text>
            </TouchableOpacity>

            }
                {(email == 'admin@gmail.com') &&
                            <View style={style.page}>
                            <View style={style.button_footer}>
                                <Text style={style.text}>KALAN STOKLAR</Text>
                            </View>
            
                            <View style={style.main}>
                                <View>
                                    <Text style={style.product}>KEKSTRA</Text>
                                    <Text style={style.product}>ÇUBUK KRAKER</Text>
                                    <Text style={style.product}>SÜT</Text>
                                </View>
                                <View>
                                    <Text style={style.product}>{kekstraStock}</Text>
                                    <Text style={style.product}>{cubukKrakerStock}</Text>
                                    <Text style={style.product}>{sutStock}</Text>
                                </View>
                            </View>
            
                            <View style={style.button_borc}>
                                <Text style={style.text}>BORÇLAR</Text>
                            </View>
            
                            <View style={style.main}>
                                <View style={style.product}>
                                    <Text style={style.product}>PERSONEL 1</Text>
                                    <Text style={style.product}>PERSONEL 2</Text>
                                    <Text style={style.product}>PERSONEL 3</Text>
                                </View>
                                <View>
                                    <Text style={style.product}>35 TL</Text>
                                    <Text style={style.product}>150 TL</Text>
                                    <Text style={style.product}>25 TL</Text>
                                </View>
                                <View style={style.borc}>
                                    <Text style={style.state}>ÖDENDİ</Text>
                                    <Text style={style.state}>ÖDENDİ</Text>
                                    <Text style={style.state}>ÖDENDİ</Text>
                                </View>
                            </View>
            
                            <View style={style.button_footer}>
                                <Text style={style.text}>TOPLANAN PARA</Text>
                            </View>
            
                            <View style={style.main}>
                                <View>
                                    <Text>MEVCUT BAKİYE</Text>
                                </View>
                                <View>
                                    <Text>{AdminAmount} TL</Text>
                                </View>
                            </View>
            
                        </View>
                }
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    text: { fontWeight: '400', fontSize: 30, marginLeft: 10 },
    button_footer: { marginVertical: 30, padding: 5, backgroundColor: '#bdbdbd' },
    main: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, },
    page: { marginHorizontal: 30 },
    borc: {},
    state: { backgroundColor: '#bdbdbd', paddingHorizontal: 10, paddingVertical: 3, marginBottom: 15 },
    product: { paddingHorizontal: 10, paddingVertical: 3, marginBottom: 15 , fontWeight:'bold'},
    button_borc: { marginVertical: 30, padding: 5, marginTop:70, backgroundColor: '#bdbdbd' },
    user: {justifyContent: 'center', alignContent: 'center' }
})

