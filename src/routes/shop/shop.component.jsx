import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCollectionsAndDocuments } from "../../utils/firebase/firebase.transaction";
import { db } from "../../utils/firebase/firebase.utils";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import { setCategoriesAction } from "../../store/categories/categories.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      const categoriesDocs = await getCollectionsAndDocuments(db, "categories");
      dispatch(setCategoriesAction(categoriesDocs));
    };
    getCategories();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":shopCategory" element={<Category />} />
    </Routes>
  );
};

export default Shop;
