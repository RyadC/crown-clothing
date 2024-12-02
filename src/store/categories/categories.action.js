import { getCollectionsAndDocuments } from "../../utils/firebase/firebase.transaction";
import { db } from "../../utils/firebase/firebase.utils";

import { createAction } from "../../utils/reducer/reducer.utils";

import { CATEGORIES_ACTION_TYPES } from "./categories.type";

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesDocs = await getCollectionsAndDocuments(db, "categories");
    console.log("les catégories récupérées:", categoriesDocs);

    dispatch(fetchCategoriesSuccess(categoriesDocs));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
