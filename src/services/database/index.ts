import {
  getFirestore,
  collection,
  query,
  where,
  setDoc,
  getDocs,
  doc,
  deleteDoc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import { app } from '../../../firebaseConfig';
import { PatientInfosType, updatePatientType } from '../../types';

const db = getFirestore(app);

export async function createPatient(patientInfos: PatientInfosType) {
  const patientsRef = collection(db, 'patients');
  const docRef = doc(patientsRef);
  await setDoc(docRef, { ...patientInfos, id: docRef.id });
}

export async function getPatients(userId: string) {
  const patientsRef = collection(db, 'patients');
  const patientQuery = query(patientsRef, where('userId', '==', userId));
  const document = await getDocs(patientQuery);
  return document.empty
    ? null
    : document.docs.map((doc) => doc.data() as PatientInfosType);
}

export async function getPatientByName(patientName: string) {
  const patientsRef = collection(db, 'patients');
  const patient = query(patientsRef, where('name', '==', patientName));
  const document = await getDocs(patient);

  return document.empty ? null : document.docs[0].data();
}

export async function getPatientById(patientId: string) {
  const patientsRef = doc(db, 'patients', patientId);
  const document = await getDoc(patientsRef);
  return document.exists() ? (document.data() as PatientInfosType) : null;
}

export async function updatePatientById({
  patientId,
  patientObject,
}: updatePatientType) {
  const patientRef = doc(db, 'patients', patientId);
  const document = await getDoc(patientRef);

  if (document.exists()) {
    const newObjectDoc = { ...patientObject, id: document.data().id };
    await updateDoc(patientRef, newObjectDoc);
  }
}

export async function deletePatientById(patientId: string) {
  const patientRef = doc(db, 'patients', patientId);
  await deleteDoc(patientRef);
}
