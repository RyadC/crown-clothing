import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategoriesMap);

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
