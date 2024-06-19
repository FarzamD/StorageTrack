//default items
import { Alert } from "react-native";
import { fileExists, getStoreFromFile } from "../../components/fs/fileFunctions";
// const exists= await fileExists('store.json');
const getDefault= ()=>{
  
  let defaultItems=[]
  const def= async ()=>{
    const exists= await fileExists('store.json');
    // alert(JSON.stringify(exists))
    if (exists) {
      const fileItems= await getStoreFromFile();
      // Alert.alert('getStoreFromFile', 'getStoreFromFile  succesful')
      const items= fileItems.items;
      const itemNames= items.map(item=>item.name)
      // Alert.alert('getStoreFromFile  succesful',JSON.stringify(itemNames))
      defaultItems=itemNames;
      Alert.alert('setting defaultItems to',JSON.stringify(itemNames))
    }
  }
  def();
  return defaultItems;
}
// alert(JSON.stringify(await getDefault()))
// Items Reducer
const itemNames= getDefault()
alert(JSON.stringify(itemNames))
const itemsReducer=  (state =  [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.item
      ];
    case 'REMOVE_ITEM':
      return state.filter(({ id }) => id !== action.id);
    case 'LOAD_STORE':
      return action.payload.items || state;
    case 'EDIT_ITEM':
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            ...action.updates
          };
        } else {
          return item;
        };
      });
    default:
      return state;
  }
};
export default itemsReducer;