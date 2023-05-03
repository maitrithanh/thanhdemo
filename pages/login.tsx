import Head from 'next/head'
import styles from '../styles/login.module.css'
import Image from 'next/image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import {auth} from '../config/firebase'

const Login = () => {
    const [signInWithGoogle, _user, _loading, _error] = useSignInWithGoogle(auth);
    const signIn = () => {
        signInWithGoogle();
    }
  return (
    <div className={`${styles.centerBox}`}>
        <Head>
            <title>Login</title>
        </Head>
        <div className='shadow-2xl p-16 rounded-lg'>
            <Image                 
                priority
                src="/images/tjoblogo.png"
                width={208}
                height={8}
                alt='logo tjob'
                />
            <button className='mt-2 bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded flex" onClick={signIn}'>
                <svg viewBox="0 0 48 48" height='30' >
                    <title>Google Logo</title>
                    <clipPath id="g">
                        <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
                    </clipPath>
                    <g className='colors' clip-path="url(#g)">
                        <path fill="#FBBC05" d="M0 37V11l17 13z"/>
                        <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/>
                        <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/>
                        <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/>
                    </g>
                </svg>    
                <p>Sign in with Google</p>        
            </button>
        </div>
        
    </div>
  )
}

export default Login