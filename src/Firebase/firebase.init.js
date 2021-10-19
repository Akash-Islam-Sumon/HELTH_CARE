import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';

const firebaseAuthintication = () => {
    initializeApp(firebaseConfig);
}
export default firebaseAuthintication;