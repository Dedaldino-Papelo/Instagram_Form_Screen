import { StyleSheet, Text, View } from "react-native";
import { globalStyle } from "../global/style";
import CustomButtom from "./CustomButtom";
import { FormInput } from "./FormInput";

export default function RegisterEmail({navigation}) {

        const HandleSubmit = () => {
            navigation.goBack()
        }

    return(
        <View style={[globalStyle.container, style.registerForm]}>
            <View>
                <Text style={style.title}>Qual é o número do seu email?</Text>
                <Text style={style.subtitle}>Insira o email do seu Celular para contacto ninguém verá essa informação no seu perfil</Text>

                <View style={style.form}>
                    <FormInput
                        placeholder='email' 
                    />
                </View>
                
                <CustomButtom
                     type='standard'
                     text='Avançar' 
                />
                <CustomButtom 
                     text='Cadastrar-se com o número...' 
                     onPress={HandleSubmit}
                />
            </View>
            <Text style={style.Footer}>Já tem uma conta</Text>
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
        textAlign: "center"
    },
    form: {
        marginVertical: 20
    }
})