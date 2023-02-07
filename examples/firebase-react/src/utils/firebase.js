// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  onSnapshot,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const db = getFirestore(app);

export const onSnapshotDataCollection = onSnapshot;

export function getCollection(collectionName) {
  return collection(db, collectionName);
}

export async function getCollectionName(collectionName) {
  const col = collection(db, collectionName);
  const snapshot = await getDocs(col);

  const docList = snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return docList;
}

export async function createDocument(collectionName, data) {
  const col = collection(db, collectionName);
  const docRef = await addDoc(col, data);

  const docSnap = await getDoc(docRef);

  return { id: docSnap.id, ...docSnap.data() };
}

export async function setDocument(collectionName, data) {
  // const docRef = await addDoc(collection(db, collectionName), data);

  const docRef = await setDoc(doc(db, collectionName, data.id), data);
  // const docSnap = await getDoc(docRef);
  // return { id: docRef.id, ...docSnap.data()};
}
