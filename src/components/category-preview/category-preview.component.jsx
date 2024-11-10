import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import {
  DIV_CategoryPreview,
  DIV_CategoryPreviewContainer,
  LINK_CategoryTitle,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <DIV_CategoryPreviewContainer>
      <h2>
        <LINK_CategoryTitle to={`/shop/${title}`}>
          {title.toUpperCase()}
        </LINK_CategoryTitle>
      </h2>
      <DIV_CategoryPreview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </DIV_CategoryPreview>
    </DIV_CategoryPreviewContainer>
  );
};

export default CategoryPreview;
