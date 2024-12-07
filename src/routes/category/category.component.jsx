import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "../../components/product-card/product-card.component";

import {
  selectCategories,
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/categories.selector.js";

import { DIV_CategoryContainer, H1_CategoryTitle } from "./category.styles.jsx";
import Spinner from "../../components/spinner/spinner.component.jsx";

const Category = () => {
  const { shopCategory } = useParams();
  const categories = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categories[shopCategory]);

  useEffect(() => {
    setProducts(categories[shopCategory]);
  }, [shopCategory, categories]);

  console.log(isLoading);

  return (
    <>
      <H1_CategoryTitle>{shopCategory}</H1_CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <DIV_CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </DIV_CategoryContainer>
      )}
    </>
  );
};

export default Category;
