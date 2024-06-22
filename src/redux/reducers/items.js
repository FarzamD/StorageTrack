// Items Reducer
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
      return action.items || state;
    case 'SET_ITEMS':
      return action.items || state;
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