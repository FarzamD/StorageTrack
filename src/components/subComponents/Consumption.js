import { useState } from "react"
import InputTextChoice from "./InputTextChoice";
import { View, Dimensions, Text, StyleSheet } from "react-native";
import InputChoice from "./InputChoice";
const ScreenDims=Dimensions.get('window');
const w=parseInt(ScreenDims.width*.9);
const rate_types=[
    { label: 'consumption per day/week/month', value: 'p' },
    { label: 'consuming 1 in x days/weeks/months', value: 'i' },
]
const rateses=[
    { label: 'per day', value: 'd' },
    { label: 'per week', value: 'w' },
    { label: 'per month', value: 'm' },
]
const time_scale={'d':1,'w':7,'m':30}

export default (props)=>{
    const [cons_mode, setCons_mode]=useState('d');
    const [rate_type, setRate_types]=useState('p');
    const defaultConsumptionRate=props.consumptionRate ? props.consumptionRate : 0;
    const [consumptionRate, setConsumptionRate]=useState(defaultConsumptionRate);
    
    calcTime=(prev_mode,new_mode,t= consumptionRate)=>{
        const res= t/ time_scale[prev_mode];
        return res* time_scale[new_mode];
    }
    chRate_types=(new_type)=>{
        setRate_types(new_type);
    }
    chCons_mode=(new_mode)=>{
        const ConsRate= calcTime(cons_mode, new_mode);
        setCons_mode(new_mode);
        setConsumptionRate(ConsRate);
        props.onChange(ConsRate);
        alert(ConsRate);
    }
    chCons= (time)=>{
        const ConsRate= time* time_scale[cons_mode];
        setConsumptionRate(ConsRate);
        props.onChange(ConsRate);
        alert(ConsRate);
    }
    return (
        <View>
            <Text style={defaultStyles.txt}>{'Consumption rate:'}</Text>
            <InputChoice items={rate_types}
                dropdownStyle={defaultStyles.dropdownStyle}
                containerStyle={defaultStyles.containerStyle}
            />
            <InputTextChoice label={'Consumption:'} items={rateses}
            onChange={chCons_mode}
            defaultValue={'d'}
            inputMode='decimal'
            onChangeText= {chCons}
            />
        </View>
    )}
const defaultStyles= StyleSheet.create({
    txt:{
        color:'#F0F0F0', 
        // alignContent:'center', 
        textAlign:'left',
        // alignSelf:'flex-start',
        paddingTop:15,
        fontSize:16,
    },
    drop:{

    },
    containerStyle:{
        width:w,
        // alignSelf:'flex-end',
        // textAlign:'right'
    },
    dropdownStyle:{
        // flex:1
    },
});
