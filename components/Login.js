import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
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
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <ScrollView>
                        <View style={style.Header}>
                            <Text style={style.TextHeader}>Português(Brasil)</Text>
                            <Image style={style.image} source={require('../assets/instagram48.png')}/>
                        </View>

                        <View style={style.bodyForm}>
                            <FormInput 
                                placeholder="Nome de Usuário" 
                            />
                            <FormInput 
                                placeholder="Senha"
                                
                            />
                            <CustomButtom
                                text='Entrar'
                                type='standard'
                            />
                                <Text style={style.forgotSenha}>Esqueceu a Senha?</Text>
                        </View>
                        <View style={style.Footer}>
                            <CustomButtom
                                onPress={HandleSubmit}
                                text='Criar nova conta' 
                            />
                        </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

const style = StyleSheet.create({
    LoginForm: {
        justifyContent: "space-between"
    },
    Header: {
        alignItems: "center",
    },
    image: {
        marginVertical: 50
    },
    forgotSenha: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
    },
    Footer: {
        marginTop: 30
    }
})