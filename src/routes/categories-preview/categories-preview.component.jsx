import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categories.selector";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categories).map((categoryTitle) => {
          const products = categories[categoryTitle];
          return (
            <CategoryPreview
              key={categoryTitle}
              title={categoryTitle}
              products={products}
            />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
