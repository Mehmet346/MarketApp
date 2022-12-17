import React, {useState, useContext} from 'react';
import {SafeAreaView, ScrollView, StyleSheet ,Text, TouchableOpacity, View} from "react-native";
import { PracticeContext } from '../Global/PracticeContext';

export default function Basket({navigation}) {
    const {
        kekstra, 
        kekstraPrice, 
        kekstraStock, 
        setKekstra,
        setkekstraStock, 
        cubukKraker, 
        cubukKrakerStock, 
        cubukKrakerPrice, 
        setCubukKraker, 
        setcubukKrakerStock, 
        sut,
        sutStock, 
        sutPrice, 
        setSut, 
        setsutStock, 
        amount, 
        setAmount
        } = useContext(PracticeContext)


        return(
            <SafeAreaView>
            <View>
                <Text>{amount}</Text>
                    <View >
                        <View style={style.main}>
                            <View style={style.area}>
                                <Text style={style.product}>Kekstra Portakallı</Text>
                                <Text style={style.product}>{kekstraPrice} TL</Text>
                            </View>
                                    
                            <View style= {style.counter}>
                                <Text style={style.product}>ALINAN:</Text>
                                <Text style={style.num}>{kekstra}</Text>
                                <Text style={style.product}>Total: {kekstra * kekstraPrice} TL</Text>  
                            </View>
                        </View>
                    </View>

                    <View >
                        <View style={style.main}>
                            <View style={style.area}>
                                <Text style={style.product}>Çubuk Kraker</Text>
                                <Text style={style.product}>{cubukKrakerPrice} TL</Text>
                            </View>
                                    
                            <View style= {style.counter}>
                                <Text style={style.product}>ALINAN:</Text>
                                <Text style={style.num}>{cubukKraker}</Text>
                                <Text style={style.product}>Total: {cubukKraker * cubukKrakerPrice} TL</Text>  
                            </View>
                        </View>
                    </View>

                    <View >
                        <View style={style.main}>
                            <View style={style.area}>
                                <Text style={style.product}>Süt</Text>
                                <Text style={style.product}>{sutPrice} TL</Text>
                            </View>
                                    
                            <View style= {style.counter}>
                                <Text style={style.product}>ALINAN:</Text>
                                <Text style={style.num}>{sut}</Text>
                                <Text style={style.product}>Total: {sut * sutPrice} TL</Text>  
                            </View>
                        </View>
                    </View>
            </View>
        </SafeAreaView>
        )
    
}


const style = StyleSheet.create({
    main: { backgroundColor: '#64ffda', margin: 15, padding: 15,},
    area: { justifyContent: "space-between", flexDirection: "row", display: "flex" , marginHorizontal: 20},
    counter:{justifyContent: "space-between", flexDirection: "row", display: "flex", marginTop: 15, marginHorizontal: 60},
    button: {padding:5, backgroundColor: 'grey'},
    footer: {alignItems:'center', marginTop: 200 },
    text: {fontWeight: '400', fontSize:30, },
    button_footer: {marginHorizontal:100, alignItems:'center', backgroundColor: 'grey',},
    product: { paddingHorizontal: 5, paddingVertical: 3, marginTop:10 , fontWeight:'bold'},
    num: {fontSize: 30, fontWeight: 'bold',}
})

