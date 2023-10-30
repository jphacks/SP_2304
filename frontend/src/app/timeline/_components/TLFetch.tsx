"use server";

import { initializeApp } from "firebase/app";
import { DocumentData, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

import firebaseConfig from "@/components/FirebaseConfig";

import { TodoTypes, IndulgenceTypes } from "../../../types/Types";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const TLFetch = async (uuid: string, dataType: string) => {
  const colRef = collection(db, "user_data", uuid, 'todos');
  const q = query(colRef);
  const querySnap = await getDocs(q);
  const data: DocumentData[] = [];
  querySnap.forEach((doc) => {
    const datum = doc.data();
    datum.time = datum.time.toDate().toLocaleDateString();
    data.push(datum);
  });


  return data;
};

export default TLFetch;
