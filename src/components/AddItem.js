import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import ItemForm from './ItemForm';
import { StyleSheet, Text, View } from 'react-native';
import { addItem } from '../redux/actions/items';
import H1 from './subComponents/H1';
import * as FileSystem from 'expo-file-system';
import { saveFile } from './fs/fileFunctions';

const styles = StyleSheet.create({
  h1:{color:'#FFF'},
})

const AddItemPage = (props) => {
  const storeItems= useSelector(state=> state.items)
  dispatch= useDispatch();

  const onSubmit= (item)=>{
    dispatch(addItem(item));
    saveFile(storeItems, 'storeItems')
    console.log(`AddItem save StoreItems to file after adding ${item.name}`)
    // props.history.push('/');
  }

  return (
  <View>
    <H1 style={styles.h1}>Add Item</H1>
    <ItemForm
      // style={props.style}
      onSubmit={onSubmit}
    />
  </View>
)};
const mapStateToProps = (state) => ({
  store: state
});
export default connect(mapStateToProps)(AddItemPage);
