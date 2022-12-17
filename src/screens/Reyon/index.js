import React, {useState, useContext} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import firestore from "@react-native-firebase/firestore"
import { PracticeContext } from '../Global/PracticeContext';


 function Product({navigation}) {
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

    return (
        <SafeAreaView>
            <View>
                <Text>{amount}</Text>
                    <View >
                        <View style={style.main}>
                            <View style={style.area}>
                                <Text>Kekstra Portakallı</Text>
                                <Text>Kalan {kekstraStock}</Text>
                                <Text>{kekstraPrice} TL</Text>
                            </View>
                                    
                            <View style= {style.counter}>
                                <TouchableOpacity style={style.button} onPress={()=>{if(kekstra != 0) setKekstra(kekstra-1); if(kekstra != 0 ) setkekstraStock(kekstraStock+1); if(kekstra != 25 && (amount>kekstraPrice) && (kekstra != 0)) setAmount(amount + kekstraPrice)}}><Text style={style.count}>-</Text></TouchableOpacity>
                                <Text style={style.count_weight}> {kekstra}</Text>
                                <TouchableOpacity style={style.button} onPress={()=>{if(kekstra != 25 && (amount>kekstraPrice)) setKekstra(kekstra+1); if(kekstra != 25 && (amount>kekstraPrice)) setkekstraStock(kekstraStock-1); if(kekstra != 25 && (amount>kekstraPrice)) setAmount(amount - kekstraPrice)}}><Text style={style.count}>+</Text></TouchableOpacity>
                        </View>
                        </View>
                    </View>

                    <View >
                        <View style={style.main}>
                            <View style={style.area}>
                                <Text>Çubuk Kraker</Text>
                                <Text>Kalan {cubukKrakerStock}</Text>
                                <Text>{cubukKrakerPrice} TL</Text>
                            </View>
                                    
                            <View style= {style.counter}>
                                <TouchableOpacity style={style.button} onPress={()=>{if(cubukKraker != 0) setCubukKraker(cubukKraker-1); if(cubukKraker != 0) setcubukKrakerStock(cubukKrakerStock+1);if(cubukKraker != 25 && (amount>cubukKrakerPrice) && (cubukKraker != 0)) setAmount(amount + cubukKrakerPrice)}}><Text style={style.count}>-</Text></TouchableOpacity>
                                <Text style={style.count_weight}> {cubukKraker}</Text>
                                <TouchableOpacity style={style.button} onPress={()=>{if(cubukKraker != 25 && (amount>cubukKrakerPrice)) setCubukKraker(cubukKraker+1); if(cubukKraker != 25 && (amount>cubukKrakerPrice)) setcubukKrakerStock(cubukKrakerStock-1); if(cubukKraker != 25 && (amount>cubukKrakerPrice)) setAmount(amount - cubukKrakerPrice)}}><Text style={style.count}>+</Text></TouchableOpacity>
                        </View>
                        </View>
                    </View>

                    <View >
                        <View style={style.main}>
                            <View style={style.area}>
                                <Text>Süt</Text>
                                <Text>Kalan {sutStock}</Text>
                                <Text>{sutPrice} TL</Text>
                            </View>
                                    
                            <View style= {style.counter}>
                                <TouchableOpacity style={style.button} onPress={()=>{if(sut != 0 ) setSut(sut-1); if(sut != 0) setsutStock(sutStock+1); if(sut != 0 ) setkekstraStock(sutStock+1); if(sut != 25 && (amount>sutPrice) && (sut != 0)) setAmount(amount + sutPrice)}}><Text style={style.count}>-</Text></TouchableOpacity>
                                <Text style={style.count_weight}> {sut}</Text>
                                <TouchableOpacity style={style.button} onPress={()=>{if(sut != 25 && (amount>sutPrice)) setSut(sut+1); if(sut != 25 && (amount>sutPrice)) setsutStock(sutStock-1); if(sut != 25 && (amount>sutPrice)) setAmount(amount - sutPrice)}}><Text style={style.count}>+</Text></TouchableOpacity>
                        </View>
                        </View>
                    </View>
            </View>
        </SafeAreaView>
    );

}

const style = StyleSheet.create({
    main: { backgroundColor: '#64ffda', margin: 15, padding: 15,},
    area: { justifyContent: "space-between", flexDirection: "row", display: "flex" , marginHorizontal: 20},
    counter:{justifyContent: "space-between", flexDirection: "row", display: "flex", marginTop: 15, marginHorizontal: 60},
    button: {padding:5, backgroundColor: 'grey'},
    count: {fontWeight: "600", paddingHorizontal: 5},
    count_weight: {fontWeight: "700", fontSize:20}
})



export default Product;