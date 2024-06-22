import React, { useState } from 'react';
import { StyleSheet, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const log=(title, val)=>Alert.alert(title,JSON.stringify(val));

export default (props) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(props.defaultValue? props.defaultValue:null);
    // const [item, setItems] = useState(null);
    selectVal=(val)=>{
        props.onChange(val);
        // log('arg',val);
        // log('open',open);
        // log('value',value);
    }
    // const containerStyle={...s, ...props.containerStyle}
    return (
        <DropDownPicker
            open={open} setOpen={setOpen}
            value={value} setValue={setValue}
            items={props.items}
            onChangeValue={selectVal}
            placeholder={props.placeholder}
            zIndex={props.zIndex || 0}
            //text styles
            textStyle={styles.textStyle}
            placeholderStyle={styles.nullTextStyle}
            //styles
            props={{onBlur:()=>setOpen(false)}}
            style={{...styles.style, ...props.style}}
            containerStyle={props.containerStyle}
            // dropDownContainerStyle={{zIndex:2}}
            disabled={props.disabled}
            theme='DARK'
        />
    );
};
const styles = StyleSheet.create({
  red:{backgroundColor:'red',color:'red'},
  style:{
    backgroundColor:'#343A40',
    // height:10,
    // zIndex:2,
  },
  nullTextStyle:{    
    color:'#a0a0a0',
  },
  textStyle:{    
    color:'#f0f0f0'
  },
  dropdownArrow: {
    color:'red'
    // Style the arrow icon (optional)
  },
});
// const t0= { style: { height: 20 } };
// const t1= { style: { maxHeight: 10 } };
// const s={minHeight:20,maxHeight:40,padding:0,paddingHorizontal:5,paddingVertical:0  }
