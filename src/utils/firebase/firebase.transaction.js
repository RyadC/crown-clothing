import {
  doc,
  writeBatch,
  collection,
  setDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "./firebase.utils";
import SHOP_DATA from "../../data/shop-data";

async function insertShopDataInDB(db, collectionKey, collectionObjects) {
  console.log(collectionObjects);
  const batch = writeBatch(db);

  // const { title, items } = collectionObject;

  const collectionRef = collection(db, collectionKey);

  collectionObjects.forEach((collection) => {
    const docRef = doc(collectionRef, collection.title.toLowerCase());
    console.log(docRef);

    batch.set(docRef, collection);
  });

  await batch.commit();
}

export async function getCollectionsAndDocuments(db, collectionKey) {
  const collectionRef = collection(db, collectionKey);
  const querySnapshot = await getDocs(collectionRef);

  const categoriesMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoriesMap;
}
