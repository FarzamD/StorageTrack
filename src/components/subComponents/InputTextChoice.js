import React, { useState } from 'react'
import DropDown from './Dropdown';
import { StyleSheet, Text, View, Alert,Dimensions, TextInput} from 'react-native';

export default (props)=> {
    const [val, setVal] = useState(props.value);

    chText=(value)=>{
        setVal(value);
        props.onChangeText(value);
    }
    return (
    <View style={{...defaultStyles.container, ...props.style}}>
        <Text style={defaultStyles.label}>{props.label}</Text>
        <TextInput style={defaultStyles.inp}
            placeholder={props.placeholder1}
            placeholderTextColor={defaultStyles.placeholder.color}
            value={val}
            onChangeText= {chText}
            inputMode={props.inputMode}
          />
        <DropDown items={props.items}
          onChange={props.onChange}
          placeholder = {props.placeholder2}
          defaultValue={props.defaultValue}
        //   zIndex={props.zIndex||1}
          
          //styles
          style={defaultInpStyles.style}
          containerStyle= {defaultInpStyles.container}

          disabled={props.disabled}
        />
    </View>
)}
const ScreenDims=Dimensions.get('window');
const w=parseInt(ScreenDims.width*.255);

const defaultInpStyles= StyleSheet.create({
    style:{
        color:'#F0F0F0',
        backgroundColor: '#343A40',
        borderRadius:10,
        // position:'relative',
        // zIndex:2,
        },
    container:{
        width:w,
        }
    });
const defaultStyles = StyleSheet.create({
    container:{
        flexDirection: 'row', 
        margin:5,
        alignItems:'center',
        justifyContent:'center',
    },
    label:{
        color:'#F0F0F0', 
        paddingTop:2,
        maxWidth:100,
    },
    placeholder:{color:'#b0b0b0'},
    inp:{
        color:'#F0F0F0',
        backgroundColor: '#343A40',
        borderRadius:10,
        paddingHorizontal:15,
        marginRight:10,
        marginLeft:5,
        flex:1,
    },
});
