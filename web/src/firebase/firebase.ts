// This is for firebase services
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  NextOrObserver,
  User,
  createUserWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';
import { getFirebaseConfig } from './firebase-config';

const app = initializeApp(getFirebaseConfig());
export const auth = getAuth(app);
export const db = getFirestore(app);

export const signInUser = async (email: string, password: string) => {
  if (!email && !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signUpUser = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  let user = await createUserWithEmailAndPassword(auth, email, password);

  return user;
};

export const userStateListener = (callback: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback);
};

export const SignOutUser = async () => await signOut(auth);
