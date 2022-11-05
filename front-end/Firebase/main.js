import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js';
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBZc_an9CTLj9s_m51hyLxtg_6DHKSqb_Q',
  authDomain: 'the-bridge-7805a.firebaseapp.com',
  projectId: 'the-bridge-7805a',
  storageBucket: 'the-bridge-7805a.appspot.com',
  messagingSenderId: '1053265607873',
  appId: '1:1053265607873:web:7843757d20593334bc2840'
};


async function getDbData(app){
  const db = getFirestore(app);
  const userDetailsCol = collection(db, 'users');
  const userDetailsData = await getDocs(userDetailsCol);
  const userDetailsList = userDetailsData.docs.map(doc => doc.data());
  console.log('userDetails', userDetailsList);
}



function runFirebase(){
  const app = initializeApp(firebaseConfig);
  getDbData(app);
  console.log(app);

}

runFirebase();

const auth = getAuth();
const email = 'albertsg.86@gmail.com';
const password = 'alberto1';
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
