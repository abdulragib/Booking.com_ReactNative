import { initializeApp } from "firebase/app";
import {  initializeAuth,getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDaNhErR7C9tjLlpOtYD6RIPIBQdGRIM9c",
  authDomain: "booking-project-c9a2b.firebaseapp.com",
  projectId: "booking-project-c9a2b",
  storageBucket: "booking-project-c9a2b.appspot.com",
  messagingSenderId: "183659082985",
  appId: "1:183659082985:web:56a68ed526b20b429dec78",
};

const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
const db = getFirestore();

export {auth,db}
