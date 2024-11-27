import { CATEGORIES_ACTION_TYPES } from "./categories.type";

const INITIAL_STATE = {
  categoriesArray: [],
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return {
        categoriesArray: payload,
      };

    default:
      return state;
  }
};
