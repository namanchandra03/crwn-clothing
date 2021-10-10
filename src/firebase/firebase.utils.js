import  firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAEFXMB4lcujgPm3D4ZNWHjYNXo8rBm3aE",
    authDomain: "crwn-db-e526f.firebaseapp.com",
    projectId: "crwn-db-e526f",
    storageBucket: "crwn-db-e526f.appspot.com",
    messagingSenderId: "245243225802",
    appId: "1:245243225802:web:a8da60d82e2e8aa5b0b633",
    measurementId: "G-XYZB2YD6DG"
  };

  export const createUserProfileDocument = async (userAuth,otherInfo)=>{
        
    if(!userAuth)return;

     const userRef = await firestore.doc(`users/${userAuth.uid}`);

     const snapShot =  await userRef.get();

     if(!snapShot.exists){

        const{displayName,email} = userAuth;
        const createdAt = new Date();

        try{

            await userRef.set({

               displayName,
               email,
               createdAt,
               ...otherInfo
            })
         }  catch(error){

            console.log('error in creating the user',error.message);
          }
     }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;