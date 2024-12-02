import { createSelector } from "reselect";

// We recover the categories reducer
const selectCategoriesReducer = (state) => state.categories;

export const selectIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesReducer) => categoriesReducer.isLoading
);

// If the category reducer (this is an object) change, we recover the category datas
export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesReducer) => categoriesReducer.categoriesArray // categoriesReducer is the value was returned by selectCategoriesReducer
);

// If the category datas change, we rerun the reduce function to create a new categories map object
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
