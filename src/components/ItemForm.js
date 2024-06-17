import React from 'react';
import moment from 'moment';
import { StyleSheet, Text, View , Alert, Dimensions} from 'react-native';
import FormInput from './subComponents/Input';
import Button from './subComponents/Button';
import InputChoice from './subComponents/InputChoice';
import InputTextChoice from './subComponents/InputTextChoice';
import Consumption1 from './subComponents/SimpleConsumption';
import Expiration from './subComponents/Expiration';
import Consumption from './subComponents/Consumption';
const ScreenDims=Dimensions.get('window');
const ScreenWidth= ScreenDims.width * ScreenDims.scale;
const w=parseInt(ScreenDims.width*.8);
const x=parseInt(ScreenDims.width*.1);

const brandsg=[
  { label: 'apple label', value: 'apple value' },
  { label: 'samsung label', value: 'samsung value' },
  { label: 'sony label', value: 'sony value' },
];
export default class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    // Alert.alert('ScreenWidth',JSON.stringify(w))
    this.state = {
      //item props
      name : props.item ? props.item.name : '',
      category : props.item ? props.item.category : '',
      brand : props.item ? props.item.brand : '',
      hasBrand : props.item ? props.item.hasBrand : false,
      amount: props.item ? props.item.amount : 0,//check later
      // amount: JSON.stringify(w),//check later
      unit : props.item ? props.item.unit : '',
      consumptionRate : props.item ? props.item.consumptionRate : 0,
      expiration : props.item ? props.item.expiration : 0,
      createdAt: props.item ? moment(props.item.createdAt) : moment(),
      error: '',
      //form props
    };
  }
  //aux functions
  
  //on-change functions
  chName = (name) => {
    this.setState(() => ({ name }));
  };
  chAmount = (amount) => {
    this.setState(() => ({ amount }));
  };
  chExp= (expiration)=>{
    this.setState(() => ({ expiration }));
  }
  chCons=(consumptionRate)=>{
    this.setState(() => ({ consumptionRate }));
  }
  // Submit form
  onSubmit = () => {

    if (!this.state.name || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide name and amount.' }));
    } else {
      // Alert.alert('title', JSON.stringify(this.state))
      this.setState(() => ({ error: '' }));
      const item={
        name: this.state.name,
        amount: this.state.amount,
        createdAt: this.state.createdAt.valueOf(),
      };
      this.props.onSubmit(item);
    }
  };
  render() {
    return (
      <View style={styles.container} >
        {this.state.error && <Text style={styles.err}>{this.state.error}</Text>}
        <FormInput placeholder='Name' label='Name: '
          value={this.state.name}
          onChangeText= {this.chName}
        />

        <FormInput placeholder='Amount' label='Amount: '
          value={this.state.amount}
          inputMode='decimal'
          onChangeText= {this.chAmount}
        />
        {/* <InputChoice label={'Brand: '} items={brandsg}
          style={styles.inputChoice}
          onChange={(val)=>Alert.alert('title',JSON.stringify(val))}
          placeholder={'select brand'}
        /> */}
        {/* <Expiration zIndex={1} onChange={this.chExp}/> */}
        {/* <Consumption1 onChange={this.chCons}/> */}
        {/* <Consumption/> */}
        <Button style={styles.but} title='Add Item' onPress={this.onSubmit}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    width: w,
    // x,
    padding:5,
    // alignItems:'center',
    // justifyContent:'center'
  },
  inputChoice:{
    position:'relative',
    // left:x-20,
    zIndex:2,
  },
  but:{
    color:'#00bcd4',
    backgroundColor:'#00bcd4', 
    borderRadius:10,
    position:'relative',
    zIndex:-1
  },
  err:{color:'#f0b090',
      backgroundColor:'#262c33',//222831-343A40
      borderRadius:2,
      margin:5,
  }
});
// Accent Color: #00BCD4 (Teal) - A vibrant color for highlights and calls to action.
 

