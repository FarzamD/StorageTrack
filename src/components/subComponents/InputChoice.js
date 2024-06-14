import React from 'react'
import DropDown from './Dropdown';
import { StyleSheet, Text, View, Alert,Dimensions} from 'react-native';

export default (props)=> (
    <View 
        style={{...defaultStyles.container, ...props.style}}
        // style={defaultStyles.container}
        onLayout={(e) => {
        const {x, y, width, height} = e.nativeEvent.layout;
        const xr= Math.round(x*100)/100;
        const widthr= Math.round(width*100)/100;
        // Alert.alert(JSON.stringify(props.label),JSON.stringify({xr,  widthr}))
    }}
    >
        <Text style={{...defaultStyles.label,...props.labelStyle}}>{props.label}</Text>
        
        <DropDown items={props.items}
            onChange={props.onChange}
            placeholder = {props.placeholder}
            //styles
            // style={defaultInpStyles.style}
            // containerStyle= {defaultInpStyles.container}
            //test styles
            style={{...defaultInpStyles.style, ...props.dropdownStyle}}
            containerStyle= {{...defaultInpStyles.container,...props.containerStyle}}
        />
    </View>
)
const ScreenDims=Dimensions.get('window');
const w=parseInt(ScreenDims.width*.6);
// const x=parseInt(ScreenDims.width*.1);

const defaultInpStyles= StyleSheet.create({
    style:{
        color:'#F0F0F0',
        backgroundColor: '#343A40',
        borderRadius:10,
        
        maxWidth:w,
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
        // maxHeight:20
    },
    label:{
        color:'#F0F0F0', 
        // alignContent:'center', 
        flex:1,
        textAlign:'left',
        // alignSelf:'flex-start',
        paddingTop:2,
        width:50,
    },
    placeholder:{color:'#b0b0b0'},
});
