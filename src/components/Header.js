import React, { useState } from 'react';
import { StyleSheet, Text, View,Alert} from 'react-native';
import H1 from './subComponents/H1';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Header = (props) => {
    const [page, setPage] = useState(props.headers[0]);
    openSetting=()=>{
        Alert.alert('setting','comming soon')
    }
    return (
    <View style={defaultStyles.container}>
        <View style={defaultStyles.top}>
            <H1 style={defaultStyles.h1}>StorageTrack</H1>
            <FontAwesome size={25} onPress={openSetting} name='gear' style={defaultStyles.icon}/>
        </View>
        <View style={defaultStyles.headers}>
            {props.headers.map( (header,i)=>
                <View style={header===page && {borderBottomColor:'#b3f6ff',borderBottomWidth:2}} key={i}>
                    <Text 
                        onPress={()=>{props.selectPage(header),setPage(header)}}
                        style={header===page?defaultStyles.page: defaultStyles.txt}
                        key={i}>{header}</Text>
                </View>
            )}
        </View>

    </View>
)};

const defaultStyles = StyleSheet.create({
    container:{
        backgroundColor: '#222831',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    top:{
        flexDirection:'row',
        alignItems:'center',
        padding:5,
        marginBottom:10
    },
    icon:{
        color:'#f0f0f0',
        marginHorizontal:5,
        padding:10
        // alignSelf:'center',
        // alignContent:'flex-end'
    },
    h1:{
        // alignSelf:'center',
        // alignContent:'center'
        flex:1,
        textAlign:'center',
        left:10,
    },
    headers:{
        flexDirection: 'row',
        marginHorizontal:10,
        justifyContent: 'space-around'
    },
    txt:{    
        color:'#F0F0F0',
        padding:4,
    },
    page:{
        color:'#b3f6ff',
        padding:4,
    }

});

export default Header;