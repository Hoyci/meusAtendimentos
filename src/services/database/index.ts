import {
  getFirestore,
  addDoc,
  collection,
  query,
  where,
  getDocs,
  getDoc,
} from 'firebase/firestore';
import { app } from '../../../firebaseConfig';

const db = getFirestore(app);

export type UserInfoType = {
  id: string;
  name: string;
  email: string;
};

export async function createUser(userInfos: UserInfoType) {
  try {
    const docRef = await addDoc(collection(db, 'users'), userInfos);
    return docRef;
  } catch (err) {
    console.log('Erro:', err);
  }
}

export async function getUser(uid: string) {
  try {
    const usersRef = collection(db, 'users');
    const user = query(usersRef, where('id', '==', uid));
    const document = await getDocs(user);

    return document.docs[0].data() as UserInfoType;
  } catch (err) {
    console.log('error', err);
  }
}
