import "./directory-item.styles.jsx";
import {
  DIV_BackgroundImage,
  DIV_DirectoryItemBodyContainer,
  DIV_DirectoryItemContainer,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DIV_DirectoryItemContainer>
      <DIV_BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <DIV_DirectoryItemBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DIV_DirectoryItemBodyContainer>
    </DIV_DirectoryItemContainer>
  );
};

export default DirectoryItem;
