import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import "./shop.styles.scss";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const Shop = () => {
  const { categories } = useContext(CategoriesContext);

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

export default Shop;
