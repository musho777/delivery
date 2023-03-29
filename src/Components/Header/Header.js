import { View,StyleSheet } from "react-native"
import Svgs from "../Svg/Svgs"

export const Header = () => {
    return <View style = {styles.Header}>
        <Svgs title='Menu' />
        <Svgs title='shopping-cart' />
    </View>
}

const styles = StyleSheet.create({
    Header:{
    flexDirection:"row",
    justifyContent:'space-between',
    marginTop:40,
    }
})
