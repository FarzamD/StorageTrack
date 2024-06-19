import * as FileSystem from 'expo-file-system';
import { Alert } from 'react-native';

export const listDir= async ()=>{
    const path=`${FileSystem.documentDirectory}`;
    const info = await FileSystem.readDirectoryAsync(path);
    Alert.alert(JSON.stringify(path),JSON.stringify(info))
    return info
}
export const fileExists= async (filePath)=>{
    const path=`${FileSystem.documentDirectory}${filePath}`;
    const info = await FileSystem.getInfoAsync(path);
    return info.exists;
}

export const loadStoreFromFile = () => {
    return async (dispatch) => {
        const fileUri = `${FileSystem.documentDirectory}store.json`;
        try {
            const fileContent = await FileSystem.readAsStringAsync(fileUri);
            const storeState = JSON.parse(fileContent);
            dispatch(loadStore(storeState));
        } catch (error) {
            // console.error('Error loading store from file:', error);
            alert('Error loading store from file:'+ error);
        }
    };
};
// home page functions
export const getStoreFromFile= async ()=>{
    const fileUri = `${FileSystem.documentDirectory}store.json`;
    try {
      const fileContent = await FileSystem.readAsStringAsync(fileUri);
      const storeState = JSON.parse(fileContent);
    //   dispatch(loadStore(storeState));
	  return storeState;
    } catch (error) {
      console.error('Error loading store from file:', error);
      Alert.alert('Error loading store from file:', error)
    }
};
   
// third page funcs
export const saveFile = async (file) => {
    const fileUri = `${FileSystem.documentDirectory}test.json`;
    try {
      await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(file));
      alert('Store saved successfully to:'+ fileUri);
    } catch (error) {
      alert('Error saving store to file:'+ error);
    }
};
export const loadFile = async () => {
    const fileUri1 = `${FileSystem.documentDirectory}store.json`;
    const fileUri = `${FileSystem.documentDirectory}test.json`;
    try {
        const storeState = await FileSystem.readAsStringAsync(fileUri1);
        Alert.alert('Store state',storeState)
    // const storeState = JSON.parse(fileContent);
    // dispatch(loadStore(storeState));
        const loadedFile = await FileSystem.readAsStringAsync(fileUri);
        Alert.alert('loadedFile',loadedFile)
        return loadedFile;
    } catch (error) {
        Alert.alert('Error loading store from file:', error);
    }
};
export const deleteCache= async()=>{
    const fileUri1 = `${FileSystem.documentDirectory}store.json`;
    const fileUri = `${FileSystem.documentDirectory}test.json`;
    await FileSystem.deleteAsync(fileUri1);
    await FileSystem.deleteAsync(fileUri);
}
