import { useState } from "react"
import InputTextChoice from "./InputTextChoice";

const expireses=[
    { label: 'days', value: 'd' },
    { label: 'weeks', value: 'w' },
    { label: 'months', value: 'm' },
  ]
const time_scale={'d':1,'w':7,'m':30}

export default (props)=>{
    const [exp_mode, setExp_mode]=useState('d');
    const defaultExpiration=props.expiration ? props.expiration : 0;
    const [expiration, setExpiration]=useState(defaultExpiration);
    
    ch_mode=(new_mode)=>{
        const res= expiration/time_scale[exp_mode];
        const Exp= res* time_scale[new_mode];
        setExp_mode(new_mode);
        setExpiration(Exp);
        props.onChange(Exp);
        alert(Exp);
    }
    chExp= (time)=>{
        const Exp= time* time_scale[exp_mode];
        setExpiration(Exp);
        props.onChange(Exp);
        alert(Exp);
    }
    return (
        <InputTextChoice label={'Expire in:'} items={expireses}
          onChange={ch_mode}
          defaultValue={'d'}
          inputMode='decimal'
          onChangeText= {chExp}
          zIndex={props.zIndex}
        />
    )
}
// chExp_mode=(exp_mode)=>{
//     this.setState((prevState) => {
//       const expiration= this.calcNewExp(prevState.exp_mode, exp_mode)
//       return ({ expiration,exp_mode })});
//   }
// chExp= (time)=>{
//     const expiration= time* time_scale[this.state.exp_mode];
//     this.setState(() => ({ expiration }));
// }