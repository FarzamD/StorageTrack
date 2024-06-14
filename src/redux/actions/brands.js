// ADD_BRAND
export const addBrand = ( brand_name )=>({
    type: 'ADD_BRAND',
    brand: brand_name
})
// REMOVE_BRAND
export const removeBrand = ( brand_name ) => ({
    type: 'REMOVE_BRAND',
    brand_name
});
// EDIT_BRAND
export const editBrand = ( brand_name, updates) => ({
    type: 'EDIT_BRAND',
    brand_name,
    updates
});
// 500t
// 80t 