import { createContext, useState, useEffect } from "react";
import PRODUCTS from "../data/shop-data.json";
import { getCollectionsAndDocuments } from "../utils/firebase/firebase.transaction";
import { db } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const getCategories = async () => {
      const categoriesDocs = await getCollectionsAndDocuments(db, "categories");
      setCategories(categoriesDocs);
    };
    getCategories();
  }, []);

  const value = { categories, setCategories };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
