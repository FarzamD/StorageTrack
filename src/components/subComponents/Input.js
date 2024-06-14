import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Alert} from 'react-native';
// const styles=StyleSheet.create({...defaultStyles, }) 
export default (props)=> {
    [plchldr, setPlaceholder]=useState(props.placeholder);

    return (
    <View style={{...defaultStyles.container, ...props.style}}
        onLayout={(e) => {
        const {x, y, width, height} = e.nativeEvent.layout;
        const xr= Math.round(x*100)/100;
        const widthr= Math.round(width*100)/100;
        // Alert.alert('Input',JSON.stringify({xr, widthr}))
    }}>
        <Text style={defaultStyles.label}>{props.label}</Text>
        <TextInput style={defaultStyles.inp}
            placeholder={plchldr}
            placeholderTextColor={plchldr? defaultStyles.placeholder.color: '#343A40'}
            value={props.value}
            onChangeText= {props.onChangeText}
            inputMode={props.inputMode}
            onBlur={()=>setPlaceholder(props.placeholder)}
            onFocus={()=>{setPlaceholder('')}}
          />
    </View>
)}
const defaultStyles = StyleSheet.create({
    container:{flexDirection: 'row', margin:5},
    label:{
        color:'#F0F0F0', 
        // alignContent:'center', 
        paddingTop:2},
    placeholder:{color:'#b0b0b0'},
    inp:{
        color:'#F0F0F0',
        backgroundColor: '#343A40',
        borderRadius:10,
        paddingHorizontal:15,
        // minWidth:100,
        flex:1
    },
});
