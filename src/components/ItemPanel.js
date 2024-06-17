import React from 'react';
import { StyleSheet, Text, View , Dimensions, Alert} from 'react-native';
import PanelAmount from './subComponents/PanelAmount';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import H1 from './subComponents/H1';

const screenWidth = Dimensions.get('screen').width 
const w= parseInt(screenWidth* .6)

const ItemPanel = (props) =>{
    const item= props.item;
    const {name, amount}= item;
    remove=()=>{
        Alert.alert(`Delete ${name}?`,'are you sure you want to delete '+name+' ?',[
            { text: 'Yes', onPress: ()=> console.log('delete '+name)},
            { text: 'No', onPress: ()=> console.log("don't delete "+name)},
        ]
    
        )
    }
    return (
        <View style={defaultStyles.container}>
            <View style={defaultStyles.top}>
                <H1 style={defaultStyles.h1}>{name}</H1>
                <FontAwesome name='trash-o' size={16} onPress={remove} style={defaultStyles.icon} />
            </View>
            <View style={defaultStyles.row}>
                <Text style={defaultStyles.exp}>expires in 5 days</Text>
                <PanelAmount label={name}>{amount}</PanelAmount>
            </View>
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
        borderRadius:8,
        marginVertical:7,
        paddingLeft:3,
        width:w,
    },
    h1:{
        marginLeft:18
    },
    exp:{
        color:'#e0e0e0',
        paddingTop:4,
        marginLeft:7,
        flex:1,
        // paddingHorizontal:5
        // alignItems:'center'
    },
    row:{
        flexDirection:'row'
    },
    top:{
        flexDirection:'row',
        // alignItems:'center',
        // padding:5,
        // marginBottom:10
    },
    icon:{
        color:'#ffeeee',
        // marginHorizontal:5,
        // padding:10,
        paddingTop:5,

        flex:1,
        // alignSelf:'flex-end',
        // alignContent:'flex-end',
        textAlign:'right',
        right:10
    },
});

export default ItemPanel;
