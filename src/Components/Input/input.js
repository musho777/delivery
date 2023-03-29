import { TextInput,StyleSheet, View } from "react-native"
import Svgs from "../Svg/Svgs"

export const Input = ({placeholder}) => {
    return <View style ={{marginLeft:-5}}>
    <TextInput placeholder={placeholder} style = {styles.input} />
    <View style ={styles.icone}>
        <Svgs  title={'Search'} />

    </View>
    </View>
}

const styles = StyleSheet.create({
    input:{
        position:'relative',
        backgroundColor:'#EFEEEE',
        width: 320,
        height:60,
        borderRadius:30,
        paddingHorizontal:50,
    },
    icone:{
        position:'absolute',
        top:20,
        left:25,
    }
})