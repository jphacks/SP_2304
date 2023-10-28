'use server'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { initializeApp } from 'firebase/app'
import { doc, updateDoc, getFirestore, arrayUnion } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyDDMJeRLZobW7M1ZpXJ1aTnUHyu-yFd6rM",
  authDomain: "ramenzaifu.firebaseapp.com",
  projectId: "ramenzaifu",
  storageBucket: "ramenzaifu.appspot.com",
  messagingSenderId: "154053445032",
  appId: "1:154053445032:web:6bcab5a382ecf67fd3899d",
  measurementId: "G-D13XN5V4KL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Push = async (point: number, content: string) => {
  const time = new Date();
  const data = {
    content: content,
    id: uuidv4(),
    is_used: false,
    point: point,
    tags: [],
    time: time,
  }

  const indulgenceRef = doc(db, 'user_data', 'template');
  await updateDoc(indulgenceRef, {
    indulgences: arrayUnion(data),
  });
  // console.log(unionRes);
  console.log('test');
}

export default Push
