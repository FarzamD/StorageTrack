import React from 'react';
import { connect } from 'react-redux';
import ItemForm from './ItemForm';
import { StyleSheet, Text, View } from 'react-native';
import { addItem } from '../redux/actions/items';
import H1 from './subComponents/H1';
const styles = StyleSheet.create({
  h1:{color:'#FFF'}
})
const AddItemPage = (props) => (
  <View>
    <H1 style={styles.h1}>Add Item</H1>
    <ItemForm
      // style={props.style}
      onSubmit={(item) => {
        props.dispatch(addItem(item));
        // props.history.push('/');
      }}
    />
  </View>
);

export default connect()(AddItemPage);
