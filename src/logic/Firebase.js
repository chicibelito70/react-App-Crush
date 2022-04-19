import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAVTbO436V09TGN7i1c4W58VNXvEx-_mys',
  authDomain: 'crushitla-4dff4.firebaseapp.com',
  projectId: 'crushitla-4dff4',
  storageBucket: 'crushitla-4dff4.appspot.com',
  messagingSenderId: '616692932933',
  appId: '1:616692932933:web:6180173440039c50fe9e2c',
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
