"use server";
import { initializeApp } from "firebase/app";
import { doc, updateDoc, getFirestore, arrayUnion } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyDDMJeRLZobW7M1ZpXJ1aTnUHyu-yFd6rM",
  appId: "1:154053445032:web:6bcab5a382ecf67fd3899d",
  authDomain: "ramenzaifu.firebaseapp.com",
  measurementId: "G-D13XN5V4KL",
  messagingSenderId: "154053445032",
  projectId: "ramenzaifu",
  storageBucket: "ramenzaifu.appspot.com",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Push = async (content: string, excuse: string, indulgences: string[] = []) => {
  const time = new Date();
  const data = {
    content: content,
    excuse: excuse,
    id: uuidv4(),
    indulgences: indulgences,
    is_done: true,
    time: time,
  };

  const indulgenceRef = doc(db, "user_data", "template");
  await updateDoc(indulgenceRef, {
    todos: arrayUnion(data),
  });
  // console.log(unionRes);
  console.log("test");
};

export default Push;
