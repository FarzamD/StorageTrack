import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PanelText from './subComponents/PanelText';

const ItemPanel = (props) =>{
    const item= props.item;
    return (
        <View style={defaultStyles.container}>
            <PanelText label={item.name}>{item.amount}</PanelText>
        </View>
)};

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};
const defaultStyles = StyleSheet.create({
    container:{
        backgroundColor:'#343A40',
        borderRadius:7,
        marginVertical:10,
    },
});

export default ItemPanel;
