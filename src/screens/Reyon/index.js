import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import firestore from "@react-native-firebase/firestore"

function Product() {
    const [product, setProduct] = useState([]);


    useEffect(() => {
        getProduct();
    }, []);

    function getProduct() {
        firestore().collection('product')
            .get()
            .then((res) => {
                const product = res.docs.map(doc => ({
                    data: doc.data(),
                    id: doc.id,
                }))
                setProduct(product)
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <SafeAreaView>
            <View>
                {product.map(product => (
                    <View key={product.id}>
                        <View style={style.main}>
                            <View style={style.area}>
                                <Text>{product.data.ProductName}</Text>
                                <Text>Kalan: {product.data.ProductStock}</Text>
                                <Text>{product.data.ProductPrice} TL</Text>
                            </View>
                                    
                            <View style= {style.counter}>
                                    <TouchableOpacity style={style.button}><Text>Button</Text></TouchableOpacity>
                                    <Text>0</Text>
                                    <TouchableOpacity style={style.button}><Text>Button</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
}

export default Product;


const style = StyleSheet.create({
    main: { backgroundColor: 'powderblue', margin: 15, padding: 15,},
    area: { justifyContent: "space-between", flexDirection: "row", display: "flex" , marginHorizontal: 20},
    counter:{justifyContent: "space-between", flexDirection: "row", display: "flex", marginTop: 15, marginHorizontal: 60},
    
})