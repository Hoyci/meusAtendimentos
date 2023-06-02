import {
  getFirestore,
  collection,
  query,
  where,
  setDoc,
  getDocs,
  doc,
  deleteDoc,
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
    const docRef = doc(patientsRef);
    await setDoc(docRef, { ...patientInfos, id: docRef.id });
  } catch (err) {
    console.log('error', err);
  }
}

export async function getPatients(userId: string) {
  try {
    const patientsRef = collection(db, 'patients');
    const user = query(patientsRef, where('userId', '==', userId));
    const document = await getDocs(user);
    return document.empty
      ? null
      : document.docs.map((doc) => doc.data() as PatientInfosType);
  } catch (err) {
    console.log('error', err);
  }
}

export async function getPatientByName(patientName: string) {
  try {
    const patientsRef = collection(db, 'patients');
    const patient = query(patientsRef, where('name', '==', patientName));
    const document = await getDocs(patient);

    return document.empty ? null : document.docs[0].data();
  } catch (err) {
    console.log('error', err);
  }
}

export async function deletePatientById(patientId: string) {
  try {
    const patientRef = doc(db, 'patients', patientId);
    await deleteDoc(patientRef);
  } catch (err) {
    console.log('error', err);
  }
}
