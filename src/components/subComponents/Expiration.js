import { useState } from "react"
import InputTextChoice from "./InputTextChoice";
import Dropdown from "./Dropdown";
import { Dimensions, StyleSheet } from "react-native";
const expTypes=[
    { label: 'no Expiration', value: false },
    { label: 'expires in:', value: true },
]
const expireses=[
    { label: 'days', value: 'd' },
    { label: 'weeks', value: 'w' },
    { label: 'months', value: 'm' },
  ]
const time_scale={'d':1,'w':7,'m':30}

export default (props)=>{
    const [exp_type, setExp_type]=useState(false);
    const [exp_mode, setExp_mode]=useState('d');
    const defaultExpiration=props.expiration ? props.expiration : 0;
    const [expiration, setExpiration]=useState(defaultExpiration);
    
    ch_type=(new_type)=>{
        setExp_type(new_type)
    }
    ch_mode=(new_mode)=>{
        const res= expiration/time_scale[exp_mode];
        const Exp= res* time_scale[new_mode];
        setExp_mode(new_mode);
        setExpiration(Exp);
        props.onChange(exp_type,Exp);
        alert(Exp);
    }
    chExp= (time)=>{
        const Exp= time* time_scale[exp_mode];
        setExpiration(Exp);
        props.onChange(exp_type,Exp);
        alert(Exp);
    }
    return (
        <>
            <Dropdown items={expTypes} 
                style={styles.drop1} containerStyle= {styles.drop1container}
                onChange={ch_type}
                zIndex={1}
                defaultValue={false}
                
            />
            <InputTextChoice label={'Expire in:'} items={expireses}
                onChange={ch_mode}
                defaultValue={'d'}
                inputMode='decimal'
                onChangeText= {chExp}
                zIndex={props.zIndex}
                style={!exp_type && {opacity:0}}
                disabled={!exp_type}
            />
        </>
    )
}
const w= Dimensions.get('window').width*.8;
const styles= StyleSheet.create({
    drop1:{
        color:'#F0F0F0',
        backgroundColor: '#343A40',
        borderRadius:10,
        // marginTop:8
    },
    drop1container:{
        marginTop:8,
        width: parseInt(w)-15
    }
})
// chExp_mode=(exp_mode)=>{
//     this.setState((prevState) => {
//       const expiration= this.calcNewExp(prevState.exp_mode, exp_mode)
//       return ({ expiration,exp_mode })});
//   }
// chExp= (time)=>{
//     const expiration= time* time_scale[this.state.exp_mode];
//     this.setState(() => ({ expiration }));
// }