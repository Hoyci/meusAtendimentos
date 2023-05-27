import {
  getFirestore,
  addDoc,
  collection,
  query,
  where,
  setDoc,
  getDocs,
  doc
} from 'firebase/firestore';
import { app } from '../../../firebaseConfig';
import { PatientInfosType } from '../../types';

const db = getFirestore(app);

export type UserInfoType = {
  id: string;
  name: string;
  email: string;
};
// TODO add the rule on database to only access to user documnets
export async function createPatient(patientInfos: PatientInfosType) {
  // debug to understand why show an error on browser console when create a patient 
  try {
    const patientsRef = collection(db, 'patients');
    const docRef = doc(patientsRef);
    await setDoc(docRef,  { id: docRef.id, ...patientInfos })
  } catch (err) {
    console.log('error', err);
  }
}

export async function getPatients(userId: PatientInfosType['userId']) {
  try {
    const patientsRef = collection(db, 'patients');
    const user = query(patientsRef, where('userId', '==', userId));
    const document = await getDocs(user);
    return document.empty ? null : document.docs.map((doc) => doc.data());
  } catch (err) {
    console.log('error', err);
  }
}

export async function getPatientByName(patientName: PatientInfosType['name']) {
  try {
    const patientsRef = collection(db, 'patients');
    const user = query(patientsRef, where('name', '==', patientName));
    const document = await getDocs(user);

    return document.empty ? null : document.docs[0].data();
  } catch (err) {
    console.log('error', err);
  }
}
