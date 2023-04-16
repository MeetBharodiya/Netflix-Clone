import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyB1EPtEUGHYaVqcNBTIWPR8i1zjtRrGlNU",
  authDomain: "netflix-a563a.firebaseapp.com",
  projectId: "netflix-a563a",
  storageBucket: "netflix-a563a.appspot.com",
  messagingSenderId: "1009603367748",
  appId: "1:1009603367748:web:c449b8f530dbcba33efd11",
  measurementId: "G-RM139KV248"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage();

export default storage;

