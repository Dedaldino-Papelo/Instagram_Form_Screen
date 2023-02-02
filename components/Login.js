import { Image, StyleSheet, Text, View } from "react-native";
import { globalStyle } from "../global/style";
import CustomButtom from "./CustomButtom";
import { FormInput } from "./FormInput";

export default function Login({navigation}){

    const HandleSubmit = () => {
        navigation.navigate('Signupphone')
    }
    
    return (
        <View style={[globalStyle.container, style.LoginForm]}>
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
    },
})