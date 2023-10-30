"use server";

import { initializeApp } from "firebase/app";
import { DocumentData, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

import firebaseConfig from "@/components/FirebaseConfig";
import { IndulgenceTypes } from "@/types/Types";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const IndulgenceListFetch = async (uuid: string) => {
  const colRef = collection(db, "user_data", uuid, 'indulgences');
  const q = query(colRef, where("is_used", "==", false))
  const querySnap = await getDocs(q);
  // const docSnap = await getDoc(colRef);
  const data: DocumentData[] = [];
  querySnap.forEach((doc) => {
    const datum = doc.data();
    datum.time = datum.time.toDate().toLocaleDateString();
    data.push(datum);
  })

  return data;
};

export default IndulgenceListFetch;
