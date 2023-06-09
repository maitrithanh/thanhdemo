import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import Login from './login';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../config/firebase';
import Loading from '../components/loading';
import { useEffect } from 'react';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import {AppProps} from 'next/app'
import { useCookies } from 'react-cookie';

config.autoAddCss = false; 

export default function App({ Component, pageProps }: AppProps) {
  const [loggedInUser, loading, _error] = useAuthState(auth);
  useEffect(() => {
    const setUserInDb = async () => {
       try {
        if(loggedInUser) {
          await setDoc(
            doc(db, 'users', loggedInUser.uid), 
            {
              email: loggedInUser?.email,
              lastSeen: serverTimestamp(),
              photoURL: loggedInUser?.photoURL 
            }, 
            {
              merge: true // chi cap nhat khi thay doi
            }
          )
        }
       } catch (error) {
        console.log("ERROR SETTING USER IN DB", error);
       }
    }
    if(loggedInUser) {
      setUserInDb();
    }
  }, [loggedInUser])

  if(loading) return <Loading />

  if(!loggedInUser) {
    return <Login />
  }

  return <Component {...pageProps} />
}
