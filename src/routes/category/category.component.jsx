import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import "./category.styles.scss";
import ProductCard from "../../components/product-card/product-card.component";
import { useContext, useEffect, useState } from "react";

const Category = () => {
  const { shopCategory } = useParams();
  const { categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categories[shopCategory]);

  useEffect(() => {
    setProducts(categories[shopCategory]);
  }, [shopCategory, categories]);

  return (
    <>
      {products && (
        <>
          <h1 className="category-title">{shopCategory}</h1>
          <div className="category-container">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
              // return product;
            ))}
          </div>
        </>
      )}
      {/* {products ? (
        <>
          <h1>{shopCategory}</h1>
          <div className="products-item">
            {products.map((product) => {
              <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </>
      ) : (
        "Products not founds"
      )} */}
    </>
  );
};

export default Category;
