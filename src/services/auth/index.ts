import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as signOutFirebase,
} from 'firebase/auth';
import 'firebase/database';
import { createUser } from '../database';
import { auth } from '..';

export async function signUp(email: string, password: string) {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  await createUser({ id: user.user.uid, email });

  return user;
}

export async function signIn(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function signOut() {
  await signOutFirebase(auth);
}
