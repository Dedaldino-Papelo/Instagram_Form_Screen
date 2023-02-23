import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyle } from "../global/style";

export default function Home(){
    const [name, setName] = useState('')

    useEffect(() => {
        getData()
    },[])

    const getData = async() => {
       try {
        
        const Username = await AsyncStorage.getItem('Username')
        
        if(Username !== null){
            setName(Username)
        }

       } catch (error) {
        console.log(error)
       }
    }

    return(
        <View style={globalStyle.container}>
            <Text style={style.text}>Welcome {name}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    text:{
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center'
    }
})