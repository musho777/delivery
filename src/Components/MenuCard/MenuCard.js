import { Image, StyleSheet, Text, View } from "react-native"

export const MenuCard = ({img,title,price,style}) =>{
    return <View style = {[styles.MenuCard,style === 'margin' && styles.margin]}>
        <View style ={styles.imgWrapper}>
            <Image style ={styles.img} source={img}></Image>
        </View>
        <View style = {styles.textWrapper}>
            <Text style = {styles.title}>{title}</Text>
            <Text style = {styles.price}>{price}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    MenuCard:{
        marginBottom:10,
        width:'32%',
        height:185,
        backgroundColor:'#FFFFFF',
        borderRadius:30,
        alignItems:'center',
        shadowColor: '#393939',
        shadowOffset: {
          width: 3,
          height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.05,
        elevation: 7,
    },
    imgWrapper:{
        paddingVertical:10,
    },
    textWrapper:{
        alignItems:'center'
    },
    img:{
        borderRadius:50,
    },
    title :{
        color:'#000000',
        fontSize:16,
        paddingHorizontal:10,
        fontWeight:600,
        textAlign:'center',
    },
    price:{
        color:'#FA4A0C',
        fontSize:18,
        fontWeight:700,
    },
    margin:{
        marginHorizontal:'2%',
    }
})