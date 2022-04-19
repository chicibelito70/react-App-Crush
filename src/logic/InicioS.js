import { firestore, auth } from './Firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';

export async function getEmail(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then(async (sess) => {
      return sess.user.email;
    })
    .catch((error) => {
      return error.code;
    });
}

export async function Agreusuario(email, password) {
  debugger;
  return createUserWithEmailAndPassword(auth, email, password)
    .then(async (sess) => {
      return true;
    })
    .catch((error) => {
      return error.code;
    });
}
