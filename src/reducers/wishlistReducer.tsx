const WishlistReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_WISHLIST':
      return {
        ...state,
        wishlist: [action.payload, ...state.wishlist]
      }
    case 'REMOVE_PRODUCT_FROM_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.filter(
          product => product.sku !== action.payload.sku
        )
      }
    case 'KEEP_LOCALSTORAGE':
      return {
        wishlist: [...state.wishlist]
      }
    default:
      return state
  }
}

export default WishlistReducer
