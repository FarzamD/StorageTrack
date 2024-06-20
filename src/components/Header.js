import React, { useState } from 'react';
import { StyleSheet, Text, View,Alert} from 'react-native';
import H1 from './subComponents/H1';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Header = (props) => {
    // const [page, setPage] = useState(props.page);
    openSetting=()=>{
        Alert.alert('setting','comming soon')
    }
    return (
    <View style={styles.container}>
        {/* top: Header + icon */}
        <View style={styles.top}>
            <H1 style={styles.h1}>StorageTrack</H1>
            <FontAwesome size={25} onPress={openSetting} name='gear' style={styles.icon}/>
        </View>
        {/* headers: page headers */}
        <View style={styles.headers}>
            {props.headers.map( (header,i)=>
                <View style={header===props.page && styles.selectedPage} key={i}>
                    <Text 
                        onPress={()=>{props.selectPage(header)}}
                        style={header===props.page?styles.page: styles.txt}
                        key={i}>{header}</Text>
                </View>
            )}
        </View>

    </View>
)};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#1f252e',
        paddingBottom:10,
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
    // styles of selected page header container
    selectedPage:[{
        backgroundColor:'#222831',
        borderBottomColor:'#b3f6ff',
        borderBottomWidth:2,},
        {shadowColor: '#b3f6ff',
        elevation:5,
        shadowOffset:{width: -20, height:50 },
        shadowRadius:10,}
    ],
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