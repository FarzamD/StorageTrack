import React from 'react';
import FormInput from './subComponents/Input';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Button from './subComponents/Button';
import { saveFile, loadFile, deleteCache } from './fs/fileFunctions';

export default class ThirdPage extends React.Component{ 
    constructor(props) {
        super(props);
        this.state={
            val:'',
            val2:'value loaded from file'
        }
    }
    chVal=(val)=>{
        this.setState(()=>({val}))
    }
    onSubmit=()=>{
        saveFile(this.state.val)
    }
    onSubmit2= async ()=>{
        const val2= await loadFile();
        // alert(JSON.stringify(val2))
        this.setState(()=>{val2})
    }
    onSubmit3= async ()=>{
        deleteCache();
        Alert.alert('Delete','both cache files deleted')
    }
    render(){ return(<>
        <FormInput placeholder='value' label='value to save: '
            value={this.state.val}
            onChangeText= {this.chVal}
        />
        <Button style={styles.but} title='save to file' onPress={this.onSubmit}/>
        <Text style={styles.label}>{this.state.val2}</Text>
        <Button style={styles.but} title='load from file' onPress={this.onSubmit2}/>
        <Button style={styles.but} title='Delete store cache' onPress={this.onSubmit3}/>

    </>)}
};
  
const styles = StyleSheet.create({
    but:{
        color:'#00bcd4',
        backgroundColor:'#00bcd4', 
        borderRadius:10,
        position:'relative',
        zIndex:-1
      },
      h1:{color:'#FFF'},
      label:{
        color:'#F0F0F0', 
        // alignContent:'center', 
        paddingTop:2},

})