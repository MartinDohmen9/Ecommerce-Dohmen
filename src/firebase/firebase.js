import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoDpPIc4-WlVv5wXz9pJzuOqZQLMG_DLU",
  authDomain: "ecommerce-dohmen.firebaseapp.com",
  projectId: "ecommerce-dohmen",
  storageBucket: "ecommerce-dohmen.appspot.com",
  messagingSenderId: "997741422528",
  appId: "1:997741422528:web:621878bcb1549820710a25",
  measurementId: "G-V8WMC76SV6"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);