export const selectAll = state => state.user;
export const selectUser = state => state.user.user;
export const selectError = state => state.user.error;
export const selectAuthError = state => state.user.authError;
export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const selectIsRefreshing = state => state.user.isRefreshing;
export const selectIsLoading = state => state.user.isLoading;
export const selectShoppingList = state => state.user.user.shoppingList;
export const selectFavoriteRecipeIds = state =>
  state.user.user.favoriteRecipeIds;
export const selectSearch = state => state.user.search;
