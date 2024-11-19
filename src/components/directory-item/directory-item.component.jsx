import { useNavigate } from "react-router-dom";
import {
  DIV_BackgroundImage,
  DIV_DirectoryItemBodyContainer,
  DIV_DirectoryItemContainer,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();

  const goToCategoryPageHandler = (category) => {
    navigate(`shop/${category.toLowerCase()}`);
  };

  const { imageUrl, title } = category;

  return (
    <DIV_DirectoryItemContainer onClick={() => goToCategoryPageHandler(title)}>
      <DIV_BackgroundImage imageurl={imageUrl} />
      <DIV_DirectoryItemBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DIV_DirectoryItemBodyContainer>
    </DIV_DirectoryItemContainer>
  );
};

export default DirectoryItem;
