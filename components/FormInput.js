import { View, TextInput, StyleSheet } from "react-native"

export const FormInput = ({placeholder,handleChange, textType}) => {
    return(
        <View>
            <TextInput 
                 style={style.TextInput}
                 placeholder={placeholder}
                 onChangeText={handleChange}
                 secureTextEntry={textType === 'paswd' ? true : false}
            />
        </View>
    )
}

const style = StyleSheet.create({
    TextInput: {
        borderWidth: 1,
        borderColor: '#aaa',
        marginBottom: 12,
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 5,
        fontSize: 18
    },
})
