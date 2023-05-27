import {
  getFirestore,
  addDoc,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { app } from '../../../firebaseConfig';
import { PatientInfosType } from '../../types';

const db = getFirestore(app);

export type UserInfoType = {
  id: string;
  name: string;
  email: string;
};


export async function createPatient(patientInfos: PatientInfosType) {
  try {
    const patientsRef = collection(db, 'patients');
    const docRef = await addDoc(patientsRef, patientInfos);
    return docRef;
  } catch (err) {
    console.log('error', err);
  }
}

export async function getPatientByName(patientName: PatientInfosType['name']) {
  try {
    const usersRef = collection(db, 'patients');
    const user = query(usersRef, where('name', '==', patientName));
    const document = await getDocs(user);

    return document.empty ? null : document.docs[0].data();
  } catch (err) {
    console.log('error', err);
  }
}
