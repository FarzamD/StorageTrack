import React from 'react';
import { StyleSheet, Text, Pressable} from 'react-native';
const defaultStyles = StyleSheet.create({
    but:{
      marginTop:15,
      minWidth:150,
      maxWidth: 300,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 5,
      paddingHorizontal: 7,
      elevation: 13,
      backgroundColor:'#00bcd4'},
    txt: {fontSize:16}
})
export default Button=(props)=> {
    const { onPress, title , style } = props;
    const styles_Button={ ...defaultStyles.but,...style};
    // const styles_txt={ ...defaultStyles.txt,...style.txt};
    const styles_txt= defaultStyles.txt;
    return (
        <Pressable style={styles_Button} onPress={onPress}>
          <Text style={styles_txt}>{title}</Text>
        </Pressable>
      );
}
