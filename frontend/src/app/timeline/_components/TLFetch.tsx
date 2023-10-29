"use server";

import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import firebaseConfig from "@/components/FirebaseConfig";

import { TodoTypes, IndulgenceTypes } from "./types/Types";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const TLFetch = async (uuid: string, dataType: string) => {
  const docRef = doc(db, "user_data", uuid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log(docSnap.data().todos[0]['time'].toDate());
  } else {
    console.log(dataType + " with uuid of " + uuid + " does not exist.");
    return null;
  }

  const data = docSnap.data()[dataType].map((datum: TodoTypes | IndulgenceTypes) => {
    datum.time = datum.time.toDate().toLocaleDateString();
    return datum;
  });
  // console.log(data);

  return data;
};

export default TLFetch;
