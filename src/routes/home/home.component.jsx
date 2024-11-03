import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import { useEffect } from "react";
import insertShopDataInDB, {
  getCategoriesAndDocuments,
} from "../../utils/firebase/firebase.transaction";
import { db } from "../../utils/firebase/firebase.utils";
import SHOP_DATA from "../../data/shop-data";

const Home = () => {
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
      title: "Snickers",
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

  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
