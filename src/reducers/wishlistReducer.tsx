export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.sku]
    case 'REMOVE_PRODUCT':
      return state.filter(sku => sku !== action.sku)
    default:
      return state
  }
}
