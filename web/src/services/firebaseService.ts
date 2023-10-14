import { collection, addDoc, getDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebase/firebase';
import { User } from '../resources/interfaces/User';

const addUserToFirestore = async (user: User) => {
  try {
    const usersCollectionRef = collection(db, 'users'); // Replace 'db' with your Firestore instance
    await addDoc(usersCollectionRef, user);
    console.log('User added to Firestore collection');
  } catch (error) {
    console.error('Error adding user to Firestore collection:', error);
  }
};

const findUserById = async (userId: string): Promise<User | null> => {
  try {
    const userDocRef = doc(db, 'users', userId);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      // Assuming your User interface has an 'id' property
      return { id: userId, ...userData } as User;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error finding user:', error);
    return null;
  }
};

const getCurrentUser = () => {
  const user = auth.currentUser;
  if (user) {
    // User is signed in
    console.log(user);
    return user;
  } else {
    // No user is signed in
    return null;
  }
};

export { addUserToFirestore, findUserById, getCurrentUser };
