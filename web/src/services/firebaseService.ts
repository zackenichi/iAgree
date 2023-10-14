import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db, auth } from '../firebase/firebase';
import { User } from '../resources/interfaces/User';

const addUserToFirestore = async (user: User) => {
  try {
    const { uid } = auth.currentUser!;

    const usersCollectionRef = collection(db, 'users');
    const newUser = { id: uid, ...user };
    await addDoc(usersCollectionRef, newUser);
    console.log('User added to Firestore collection');
  } catch (error) {
    console.error('Error adding user to Firestore collection:', error);
  }
};

const getCurrentUser = async () => {
  try {
    const { uid } = auth.currentUser || {};

    if (!uid) return null;

    const usersCollectionRef = collection(db, 'users');

    const userQuery = query(usersCollectionRef, where('id', '==', uid));
    const userQuerySnapshot = await getDocs(userQuery);
    const userDoc = userQuerySnapshot.docs[0];

    const userData = userDoc.data();

    return userData;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};

export { addUserToFirestore, getCurrentUser };
