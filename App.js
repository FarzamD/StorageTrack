// 1: system theme
// import { Appearance } from 'react-native'
// if (Appearance.getColorScheme() === 'dark') {
//   Alert.alert('system theme is','dark');
// } else {Alert.alert('system theme is',JSON.stringify(Appearance.getColorScheme()));}

// test codes goes above
// TASKs:
// theme (detect, set app theme)
// OS

// Animation libs:
// https://www.youtube.com/watch?v=8CZy6DjDXK0
// react-native-reanimated : modified Animated API
// moti: modified react-native APIs
// marquee:  moving text
// react-native-lotti: AE animations
// react-native-skottie : modified lotti to use GPU instead of CPU(smoother/faster)
// +5 more

// check later: react useTransition hook

// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, StatusBar,View, Alert, SafeAreaView, Platform, Animated  } from 'react-native';
import {useState, useEffect } from 'react'
import AddItem from './src/components/AddItem';
import store from './src/redux/store/configureStore';
import { Provider, useDispatch,useSelector  } from 'react-redux';
import { connect } from 'react-redux';
import Header from './src/components/Header';
import Home from './src/components/Home';
import ThirdPage from './src/components/ThirdPage';
import { getStoreFromFile,listDir,loadStoreFromFile, fileExists } from './src/components/fs/fileFunctions';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const h= StatusBar.currentHeight;
const headers=['Home', 'Add Item', 'Third page'];
const OS= Platform.OS;//"ios","android"
// wrap ios in SafeAreaView
const App = () => {
	const [page, setPage] = useState('Home');
	let storeItems= useSelector(state=> state.items)
	const [items, setItems]= useState([]);
	const dispatch = useDispatch();
	

	//on Component mount
    // useEffect( ()=>{
    //     // Alert.alert('App','App mounted');
	// 	const mountStore= async()=>{
	// 		const exists= await fileExists('store.json');
	// 		if (exists) {
	// 			const fileItems= await getStoreFromFile();
	// 			Alert.alert('fileItems',JSON.stringify(fileItems.items.map(item=>item.name)))
	// 			storeItems= fileItems.items;
	// 			// setItems(store.getState().items? store.getState().items: fileItems)				
	// 		}
	// 	}
	// 	// mountStore()
	// 	// Alert.alert('store',JSON.stringify(items.map(item=>item.name)))

	// },[])
	//on Component mount
	useEffect( ()=>{
		setItems(storeItems)
	},[storeItems])

	const selectPage = (val) => {
		setPage(val);
		if (page==='Home') {
			// Alert.alert('App store',JSON.stringify(items.map(item=>item.name)))			
		}
	};
  
	const pages = {
		'Home': <Home items={storeItems} />,
		'Add Item': <AddItem />,
		// 'Third page': <Text style={{ color: '#f9a090' }}>{'coming soon'}</Text>
		'Third page': <ThirdPage/>
	};
	const pages2=(page) => {
		if (page==='Home') {
			return <Home items={items} />
		} else if (page==='Add Item') {
			return <AddItem/>
		} else if (page==='Third page') {
			return <ThirdPage/>
		}
	};

	swipeLeft=()=>{
		const i = headers.indexOf(page);
		if (i<headers.length-1) {
			selectPage(headers[i+1]);			
		}
	}
	swipeRight=()=>{
		const i = headers.indexOf(page);
		if (i>0) {
			selectPage(headers[i-1]);			
		}
	}
	return (
	  <>
		<View style={{ height: h }}></View>
		<Header selectPage={ selectPage} headers={headers} page={page}/>
		<GestureRecognizer 
			style={styles.container}
			onSwipeLeft={swipeLeft}
			onSwipeRight={swipeRight}>
				{/* {pages[page]} */}
				{pages2(page)}
		</GestureRecognizer>
	  </>
	);
  };
const RootApp = () => (
<Provider store={store}>
	<App />
</Provider>
);

export default RootApp;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#222831',
		color:'#F0F0F0',
		alignItems: 'center',
		justifyContent: 'center',
	},
	children:{color:'#F0F0F0'},
});
//     Night and Teal:
// Primary Background: #222831 (Dark Navy) - Creates a sophisticated and professional feel.
// Primary Text: #F0F0F0 (White) - High contrast for good readability on dark backgrounds.
// Secondary Background: #343A40 (Dark Gray) - Slight variation for subtle separation.
// Accent Color: #00BCD4 (Teal) - A vibrant color for highlights and calls to action.