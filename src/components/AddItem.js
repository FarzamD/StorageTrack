import React from 'react';
import { connect } from 'react-redux';
import ItemForm from './ItemForm';
import { StyleSheet, Text, View } from 'react-native';
import { addItem } from '../redux/actions/items';
import H1 from './subComponents/H1';
import * as FileSystem from 'expo-file-system';

const saveStoreToFile = async (store) => {
  const fileUri = `${FileSystem.documentDirectory}store.json`;
  try {
    await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(store));
    console.log('Store saved successfully to:', fileUri);
  } catch (error) {
    console.error('Error saving store to file:', error);
  }
};

const styles = StyleSheet.create({
  h1:{color:'#FFF'},
})
const AddItemPage = (props) => (
  <View>
    <H1 style={styles.h1}>Add Item</H1>
    <ItemForm
      // style={props.style}
      onSubmit={(item) => {
        props.dispatch(addItem(item));
        saveStoreToFile(props.store);
        // props.history.push('/');
      }}
    />
  </View>
);
const mapStateToProps = (state) => ({
  store: state
});
export default connect(mapStateToProps)(AddItemPage);
