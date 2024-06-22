import React, { useState } from 'react'
import DropDown from './Dropdown';
import { StyleSheet, Text, View, Alert,Dimensions, TextInput} from 'react-native';
import InputTextChoice from './InputTextChoice';

export default (props)=> {
    const [val, setVal] = useState(props.value);
    // const [val2, setVal2] = useState(props.defaultValue);
    chText=(value)=>{
        setVal(value);
        props.onChangeText(value);
    }
    return (
    <View style={{...defaultStyles.container, ...props.style}}>
        <DropDown items={props.items1}
          onChange={props.onChange1}
          placeholder = {props.placeholder0}
          //styles
          style={defaultInpStyles.style}
          containerStyle= {defaultInpStyles.container1}
          defaultValue={props.defaultValue1}
        />
        <InputTextChoice label={props.label} items={props.items}
          onChange={props.onChange2}
          defaultValue={props.defaultValue2}
          value={val}
          placeholder1 = {props.placeholder1}
          placeholder2 = {props.placeholder2}
          inputMode={props.inputMode}
          onChangeText= {chText}
        //   style
        />
    </View>
)}
const ScreenDims=Dimensions.get('window');
const w=parseInt(ScreenDims.width*.255);
// const x=parseInt(ScreenDims.width*.1);

const defaultInpStyles= StyleSheet.create({
    style:{
        color:'#F0F0F0',
        backgroundColor: '#343A40',
        borderRadius:10,

        textAlign:'right'
        },
    container:{
        width:parseInt(w*2.5),
        // zIndex:1,
    },
    container:{
        width:w,
        // zIndex:1,
        }
    });
const defaultStyles = StyleSheet.create({
    container:{
        flexDirection: 'row', 
        margin:5,
        alignItems:'center',
        justifyContent:'center',
        // maxHeight:20
    },
    label:{
        color:'#F0F0F0', 
        // alignContent:'center', 
        // flex:1,
        // textAlign:'left',
        // alignSelf:'flex-start',
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
        // minWidth:100,
        flex:1,
    },
});
