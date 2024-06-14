import React from 'react'
import { StyleSheet, Text, View} from 'react-native';
const defaultStyles = StyleSheet.create({
    container:{flexDirection: 'row', margin:5},
    label:{color:'#F0F0F0', alignContent:'center', paddingTop:2},
    placeholder:{color:'#b0b0b0'},
    inp:{
        color:'#F0F0F0',
        borderRadius:10,
        paddingHorizontal:15,
        // minWidth:100,
        // flex:1
    }

});
// const styles=StyleSheet.create({...defaultStyles, }) 
export default (props)=> (
    <View style={{...defaultStyles.container, ...props.styles}}>
        <Text style={defaultStyles.label}>
            {props.label}
        </Text>
        <Text style={defaultStyles.inp}>
            {props.children}
        </Text>
    </View>
)