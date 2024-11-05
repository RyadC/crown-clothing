import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.jsx";
import { DIV_DirectoryContainer } from "./directory.styles.jsx";

const Directory = ({ categories }) => {
  return (
    <DIV_DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </DIV_DirectoryContainer>
  );
};

export default Directory;
