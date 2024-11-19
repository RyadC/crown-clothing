import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.jsx";
import { DIV_DirectoryContainer } from "./directory.styles.jsx";

const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl:
      "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg",
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl:
      "https://images.pexels.com/photos/26585488/pexels-photo-26585488.jpeg",
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl:
      "https://images.pexels.com/photos/233312/pexels-photo-233312.jpeg",
  },
  {
    id: 4,
    title: "Womens",
    imageUrl:
      "https://images.pexels.com/photos/1755674/pexels-photo-1755674.jpeg",
  },
  {
    id: 5,
    title: "Mens",
    imageUrl:
      "https://images.pexels.com/photos/1549004/pexels-photo-1549004.jpeg",
  },
];

const Directory = () => {
  return (
    <DIV_DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </DIV_DirectoryContainer>
  );
};

export default Directory;
