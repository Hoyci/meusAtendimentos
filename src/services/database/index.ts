import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { app } from '../../../firebaseConfig';

const db = getFirestore(app);

type UserInfoType = {
  id: string;
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
