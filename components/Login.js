import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { globalStyle } from "../global/style";
import CustomButtom from "./CustomButtom";
import { FormInput } from "./FormInput";

export default function Login({navigation}){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //Go to Signup page
    const HandleSubmit = () => {
        navigation.navigate('Signupphone')
    }

    //on Enter submit
    const onSubmit = async () => {
        try {
            await AsyncStorage.setItem('Username', username)
            navigation.navigate('Home')
        } catch (error) {
            console.log(error)
        }
    }

    //Handle username the text input from the form
    const HandleUser = (value) => {
        setUsername(value)
    }
    //Handle password the text input from the form
    const HandlePass = (value) => {
        setPassword(value)
    }
    
    return (
        <View style={[globalStyle.container, style.LoginForm]}>
            <View style={style.Header}>
                <Text style={globalStyle.text}>Português(Brasil)</Text>
                <Image style={style.image} source={require('../assets/instagram48.png')}/>
            </View>

            <View style={style.bodyForm}>
                <FormInput 
                      placeholder="Nome de Usuário"
                      handleChange={HandleUser} 
                />
                <FormInput 
                      placeholder="Senha"
                      handleChange={HandlePass}
                      textType = 'paswd' 
                       
                />
                <CustomButtom
                    text='Entrar'
                    type='standard'
                    onPress={onSubmit}
                />
                    <Text style={[globalStyle.text,style.forgotSenha]}>Esqueceu a Senha?</Text>
            </View>

            <View style={style.Footer}>
                <CustomButtom
                    onPress={HandleSubmit}
                    text='Criar nova conta' 
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    LoginForm: {
        justifyContent: "space-around"
    },
    Header: {
        alignItems: "center",
    },
    image: {
        marginTop: 50
    },
    forgotSenha: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
    }
})