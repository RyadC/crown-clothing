import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "../../components/product-card/product-card.component";

import { selectCategories } from "../../store/categories/categories.selector.js";

import { DIV_CategoryContainer, H1_CategoryTitle } from "./category.styles.jsx";

const Category = () => {
  const { shopCategory } = useParams();
  const categories = useSelector(selectCategories);
  const [products, setProducts] = useState(categories[shopCategory]);

  useEffect(() => {
    setProducts(categories[shopCategory]);
  }, [shopCategory, categories]);

  return (
    <>
      {products && (
        <>
          <H1_CategoryTitle>{shopCategory}</H1_CategoryTitle>
          <DIV_CategoryContainer>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </DIV_CategoryContainer>
        </>
      )}
    </>
  );
};

export default Category;
