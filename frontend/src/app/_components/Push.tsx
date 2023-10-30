"use server";
import { initializeApp } from "firebase/app";
import { doc, updateDoc, getFirestore, arrayUnion, setDoc, collection, addDoc } from "firebase/firestore";
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

const Push = async (point: number, content: string, tags: string[]) => {
  const time = new Date();
  const uuid = uuidv4();
  const data = {
    content: content,
    id: uuid,
    is_used: false,
    point: point,
    tags: tags,
    time: time,
  };

  const indulgenceRef = doc(db, "user_data", "template", "indulgences", uuid);
  console.log(data);
  await setDoc(indulgenceRef, data);
};

export default Push;
