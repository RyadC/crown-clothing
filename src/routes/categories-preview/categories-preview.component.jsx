import { useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categories.selector";
import { categoriesReducer } from "../../store/categories/categories.reducer";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories);
  console.log("valeur de categories dans CategoriesPreview", categories);
  // const { categories } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categories).map((categoryTitle) => {
        const products = categories[categoryTitle];
        return (
          <CategoryPreview
            key={categoryTitle}
            title={categoryTitle}
            products={products}
          />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
