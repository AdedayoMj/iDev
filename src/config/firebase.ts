import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';
import 'firebase/firestore';
import config from '../config/config';

const Firebase = firebase.initializeApp(config.firebase);
//get auth from firebase
export const auth = getAuth();
export default Firebase;
