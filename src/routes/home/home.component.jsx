import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import { useEffect } from "react";
import insertShopDataInDB, {
  getCategoriesAndDocuments,
} from "../../utils/firebase/firebase.transaction";
import { db } from "../../utils/firebase/firebase.utils";
import SHOP_DATA from "../../data/shop-data";

const Home = () => {
  return (
    <div>
      {/* <Outlet /> */}
      <Directory />
    </div>
  );
};

export default Home;
