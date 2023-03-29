import { Text, View ,StyleSheet} from "react-native"
import {useState} from 'react'
export const Category = ({data,active}) =>{
    const [act,setAct] = useState(active)
    return <View style = {styles.category}>
        {data?.map((elm,i)=>(
            <View style = {{width:80}} key={i}>
                { i === act ?
        <Text style = {{color:'#FA4A0C',textAlign:'center',fontSize:17,fontWeight:400,marginBottom:5,
                }}>{elm.title}</Text>:
                    <Text onPress={()=>setAct(i)} style = {{fontWeight:400 ,fontSize:17,textAlign:'center',marginBottom:5,}}>{elm.title}</Text>
                }
                {
                    i === act &&
                    <View style = {styles.active}></View> 
                }
            </View>
        ))}
    </View>
}
const styles = StyleSheet.create({
    category:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    active:{
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#FA4A0C',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
        borderBottomWidth:2,
        borderBottomColor:'#FA4A0C'
    },

})