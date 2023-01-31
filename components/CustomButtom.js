import { TouchableOpacity,Text, StyleSheet } from "react-native";

export default function CustomButtom({text, type}){
    return(
        <TouchableOpacity style={type == 'standard'? style.Button : style.Button1}>
            <Text 
                style={type === 'standard' ? style.TextButton: style.TextButton1}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
    Button: {
        backgroundColor: "#3144e4",
        padding: 15,
        borderRadius: 5,
        marginBottom: 12
    },
    TextButton: {
        color: "#fff",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 2
    },
    Button1: {
        borderWidth: 1,
        borderColor: "#Adadae",
        padding: 10
    },
    TextButton1: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold"
    }
})