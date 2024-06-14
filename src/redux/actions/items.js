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
