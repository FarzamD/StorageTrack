// brands Reducer

export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_BRAND':
            return [
            ...state,
            action.brand
            ];
        case 'REMOVE_BRAND':
            return state.filter(({ brand_name }) => brand_name !== action.brand_name);
        case 'EDIT_BRAND':
            return state.map((item) => {
            if (item.brand_name === action.brand_name) {
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
  