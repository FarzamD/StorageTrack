import React from 'react'
import { StyleSheet, Text} from 'react-native';

const defaultStyles=StyleSheet.create({
    color:'#FFF',
    fontSize: 20,
    margin:10,
    fontWeight: 'bold',
})

const H1= (props)=>{
const styles={...defaultStyles, ...props.style};

return    (
    <Text style={styles}>{props.children}</Text>
)}
export default H1;