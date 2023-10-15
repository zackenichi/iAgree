import { collection, addDoc, getDocs, updateDoc } from 'firebase/firestore';
import { db, auth } from '../firebase/firebase';
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

// get agreements for current user
const getAgreements = async (): Promise<Agreement[] | null> => {
  try {
    const { uid } = auth.currentUser || {};

    if (!uid) return null;

    const agreementsCollectionRef = collection(db, 'agreements');
    const snapshot = await getDocs(agreementsCollectionRef);
    const agreements = snapshot.docs.map((doc) => doc.data() as Agreement);

    const agreementsWithCurrentUser = agreements.filter((agreement) => {
      return agreement.approvals?.some((approval) => approval.id === uid);
    });

    return agreementsWithCurrentUser;
  } catch (error) {
    console.error('Error getting agreements from Firestore:', error);
    return [];
  }
};

// const getAgreementsWithUserId = async (
//   userId: string
// ): Promise<Agreement[]> => {
//   try {
//     const agreementsCollectionRef = collection(db, 'agreements');
//     const snapshot = await getDocs(agreementsCollectionRef);
//     const agreements = snapshot.docs.map((doc) => doc.data() as Agreement);

// const agreementsWithUserId = agreements.filter((agreement) => {
//   return agreement.approvals?.some((approval) => approval.id === userId);
// });

//     return agreementsWithUserId;
//   } catch (error) {
//     console.error('Error getting agreements from Firestore:', error);
//     return [];
//   }
// };

export { createAgreement, getAgreements };
