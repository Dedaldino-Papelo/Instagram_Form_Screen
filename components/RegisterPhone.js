import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView,Platform } from "react-native";
import { globalStyle } from "../global/style";
import CustomButtom from "./CustomButtom";
import { FormInput } from "./FormInput";

export default function RegisterPhone({navigation}){
    
    const HandleSubmit = () => {
        navigation.navigate("Signupemail")
    }

    return(
            <View style={[globalStyle.container, style.registerForm]}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView>
                    <View>
                        <Text style={style.title}>Qual é o número do seu Celular?</Text>
                        <Text style={style.subtitle}>Insira o Número do seu Celular para contacto ninguém verá essa informação no seu perfil</Text>

                        <View style={style.form}>
                            <FormInput
                                placeholder='Número do Celular' 
                            />
                            <Text>Você poderá receber notificações por SMS para fins de segurança e login</Text>
                        </View>
                        
                        <CustomButtom
                            type='standard'
                            text='Avançar' 
                        />
                        <CustomButtom 
                            text='Cadastrar-se com email'
                            onPress={HandleSubmit} 
                        />
                    </View>
                    <Text style={style.Footer}>Já tem uma conta</Text>
            </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}


const style = StyleSheet.create({
    registerForm: {
        justifyContent: "space-around"
    },
    title: {
        fontSize: 28,
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 16,
        marginTop: 10
    },
    Footer: {
        textAlign: "center",
        marginTop: 30
    },
    form: {
        marginVertical: 20
    }
})