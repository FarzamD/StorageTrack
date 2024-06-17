import React from 'react'
import { Alert, StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default (props)=> {
    decrease=()=>{
        Alert.alert()
    }
    increase=()=>{
        Alert.alert()
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
        paddingHorizontal:15,
        paddingBottom:4
    },
    iconPlus:{
        // color:'#87cf74',
        color:'#f0f0f0',
        alignSelf:'center'
    },
    iconMinus:{
        // color:'#ff8f91',
        color:'#f0f0f0',
        alignSelf:'center',
        paddingBottom:2
    },
});