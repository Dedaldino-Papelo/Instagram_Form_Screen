import { View, TextInput, StyleSheet } from "react-native"

export const FormInput = ({placeholder}) => {
    return(
        <View>
            <TextInput 
                 style={style.TextInput}
                 placeholder={placeholder}
            />
        </View>
    )
}

const style = StyleSheet.create({
    TextInput: {
        borderWidth: 1,
        borderColor: '#111',
        marginBottom: 12,
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 5,
        fontSize: 18
    },
})
