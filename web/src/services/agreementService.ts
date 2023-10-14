import { collection, addDoc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { Agreement } from '../resources/interfaces/Agreement';

const createAgreement = async (agreementData: Agreement) => {
  try {
    const agreementsCollectionRef = collection(db, 'agreements');
    const docRef = await addDoc(agreementsCollectionRef, {
      ...agreementData,
      id: '',
    });
    const agreementWithId = { ...agreementData, id: docRef.id };
    await updateDoc(docRef, agreementWithId);
    console.log('Agreement added to Firestore collection');
  } catch (error) {
    console.error('Error adding agreement to Firestore collection:', error);
  }
};

const getAgreements = async (): Promise<Agreement[]> => {
  try {
    const agreementsCollectionRef = collection(db, 'agreements');
    const snapshot = await getDocs(agreementsCollectionRef);
    const agreements = snapshot.docs.map((doc) => doc.data() as Agreement);
    return agreements;
  } catch (error) {
    console.error('Error getting agreements from Firestore:', error);
    return [];
  }
};

export { createAgreement, getAgreements };
