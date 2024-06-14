// 1: system theme
// import { Appearance } from 'react-native'
// if (Appearance.getColorScheme() === 'dark') {
//   Alert.alert('system theme is','dark');
// } else {Alert.alert('system theme is',JSON.stringify(Appearance.getColorScheme()));}

// test codes goes above


// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, StatusBar, Text,View, Alert, SafeAreaView, Platform } from 'react-native';
import {useState} from 'react'
import AddItem from './src/components/AddItem';
import store from './src/redux/store/configureStore';
import { Provider } from 'react-redux';
import Header from './src/components/Header';
import Home from './src/components/Home';

const h= StatusBar.currentHeight;
const headers=['Home', 'Add Item', 'Third page'];
const OS= Platform.OS;//"ios","android"
// wrap ios in SafeAreaView
export default function App() {
  const [page, setPage] = useState('Home');
    selectPage=(val)=>{
        setPage(val);
        // if (val==='Home') {Alert.alert('store state:',JSON.stringify(store.getState()))}
    }
    const pages={
        'Home':<Home items={store.getState().items}/>, 
        'Add Item':<AddItem/>, 
        'Third page':<Text style={{color:'#f9a090'}}>{'comming soon'}</Text>
    }
    return (
    <Provider store={store}>
        <View style={{height:h}}></View>
        <Header selectPage={selectPage} headers={headers}/>
        <View style={styles.container}>
            {/* <Text>Open up App.js to start working on your app!</Text> */}
            {/* <StatusBar style="auto" /> */}
            {pages[page]}
        </View>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    color:'#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  children:{color:'#F0F0F0'}
});
//     Night and Teal:
// Primary Background: #222831 (Dark Navy) - Creates a sophisticated and professional feel.
// Primary Text: #F0F0F0 (White) - High contrast for good readability on dark backgrounds.
// Secondary Background: #343A40 (Dark Gray) - Slight variation for subtle separation.
// Accent Color: #00BCD4 (Teal) - A vibrant color for highlights and calls to action.