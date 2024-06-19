import React from 'react'
import { Alert, StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default (props)=> {
    decrease=()=>{
        props.onChange(-1)
    }
    increase=()=>{
        props.onChange(+1)
    }
    return (
    <View style={{...defaultStyles.container, ...props.styles}}>
        <FontAwesome name='plus' onPress={increase} style={defaultStyles.iconPlus}/>
        <Text style={defaultStyles.num}>
            {props.children}
        </Text>
        <FontAwesome name='minus' onPress={decrease} style={defaultStyles.iconMinus}/>
    </View>
)}
const p =7;//p>10
const defaultStyles = StyleSheet.create({
    container:{
        flexDirection: 'row', 
        margin:5,
        justifyContent: 'flex-end',
        paddingRight:15
        // flex:1,
        // textAlign: 'right',
    },
    num:{
        color:'#F0F0F0',
        borderRadius:10,
        paddingHorizontal:10-p,
        paddingBottom:4
    },
    iconPlus:{
        // color:'#87cf74',
        color:'#f0f0f0',
        alignSelf:'center',
        padding:p
    },
    iconMinus:{
        // color:'#ff8f91',
        color:'#f0f0f0',
        alignSelf:'center',
        padding:p,
        paddingBottom:p+2
    },
});