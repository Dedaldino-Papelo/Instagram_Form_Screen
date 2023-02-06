import { Text, View } from "react-native";
import { globalStyle } from "../global/style";

export default function Home(){

    return(
        <View style={globalStyle.container}>
            <Text>Welcome</Text>
        </View>
    )
}