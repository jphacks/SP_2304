"use server";

import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import firebaseConfig from "@/components/FirebaseConfig";
import { IndulgenceTypes } from "@/types/Types";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const IndulgenceListFetch = async (uuid: string) => {
  const docRef = doc(db, "user_data", uuid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log(docSnap);
  } else {
    console.log("Indulgences" + " with uuid of " + uuid + " does not exist.");
    return null;
  }

  const data = docSnap.data().indulgences.map((datum: IndulgenceTypes) => {
    datum.time = datum.time.toDate().toLocaleDateString();
    return datum;
  });

  return data;
};

export default IndulgenceListFetch;
