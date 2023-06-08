import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as signOutFirebase,
} from 'firebase/auth';
import 'firebase/database';
import { auth } from '..';

interface SignProps {
  email: string;
  password: string;
}

export async function signUp({ email, password }: SignProps) {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  return user;
}

export async function signIn({ email, password }: SignProps) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function signOut() {
  await signOutFirebase(auth);
}
