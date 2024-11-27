import { CATEGORIES_ACTION_TYPES } from "./categories.type";

export const setCategoriesAction = (categories) => ({
  type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
  payload: categories,
});
