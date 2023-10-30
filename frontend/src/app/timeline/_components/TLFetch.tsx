"use server";

import { initializeApp } from "firebase/app";
import { DocumentData, collection, getDocs, getFirestore, query } from "firebase/firestore";

import firebaseConfig from "@/components/FirebaseConfig";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const TLFetch = async (uuid: string, dataType: string) => {
  const colRef = collection(db, "user_data", uuid, dataType);
  const q = query(colRef);
  const querySnap = await getDocs(q);
  const data: DocumentData[] = [];
  querySnap.forEach((doc) => {
    const datum = doc.data();
    // console.log(datum);
    datum.time = datum.time.toDate().toLocaleDateString();
    data.push(datum);
  });


  return data;
};

export default TLFetch;
