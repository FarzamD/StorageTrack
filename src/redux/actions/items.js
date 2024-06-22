import uuid from 'uuid';

// ADD_ITEM
export const addItem = (
  {
    name = '',
    category = '',
    brand = '',
    hasBrand = false,
    amount = 0,
    unit = '',
    consumptionRate = 0,
    hasExp = false,
    expiration = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_ITEM',
  item: {
    id: uuid(),
    name,
    category,
    brand,
    hasBrand,
    amount,
    unit,
    consumptionRate,
    hasExp,
    expiration,
    createdAt
  }
});

// REMOVE_ITEM
export const removeItem = ({ id } = {}) => ({
  type: 'REMOVE_ITEM',
  id
});

// EDIT_ITEM
export const editItem = (id, updates) => ({
  type: 'EDIT_ITEM',
  id,
  updates
});

// saving the loaded store from saved file into store
// Action creator:
export const loadStore = (state) => ({
  type: 'LOAD_STORE',
  items: state.items
});

// SET_ITEMS
export const setStoreItems = (items) => ({
  type: 'SET_ITEMS',
  items
});

// SAVE_ITEMS
export const saveStoreItems= (fileUri)=>({
  type: 'SAVE_ITEMS',
  fileUri
});