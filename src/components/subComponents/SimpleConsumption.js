import { useState } from "react"
import InputTextChoice from "./InputTextChoice";

const rateses=[
    { label: 'per day', value: 'd' },
    { label: 'per week', value: 'w' },
    { label: 'per month', value: 'm' },
]
const time_scale={'d':1,'w':7,'m':30}

export default (props)=>{
    const [cons_mode, setCons_mode]=useState('d');
    const defaultConsumptionRate=props.consumptionRate ? props.consumptionRate : 0;
    const [consumptionRate, setConsumptionRate]=useState(defaultConsumptionRate);
    
    calcTime=(prev_mode,new_mode,t= consumptionRate)=>{
        const res= t/ time_scale[prev_mode];
        return res* time_scale[new_mode];
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
        <InputTextChoice label={'Consumption:'} items={rateses}
          onChange={chCons_mode}
          defaultValue={'d'}
          inputMode='decimal'
          onChangeText= {chCons}
        />)}