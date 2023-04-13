import Link from "next/link"
import styles from './navbar.module.css'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config/firebase";
import { signOut } from "firebase/auth";

export default function NavBar({current}) {
    const [loggedInUser, loading, _error] = useAuthState(auth);
    let btnLogin = document.getElementById('btnGetLogin');
    let btnLogout = document.getElementById('btnGetLogOut');

    const Logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.log("ERROR LOGING OUT", error );
        }
    }
    return (
        <div> 
            <nav class="bg-gray-900 fixed w-full z-10 top-0 left-0 border-b border-gray-200 border-gray-600">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" class="flex items-center">
                        <img src="/images/tjoblogo.png" class="h-10 mr-1" alt="TJob Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">TJob</span>
                    </Link>
                    <div class="flex md:order-2">
                        <button id="btnGetLogOut" onClick={Logout} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Logout</button>
                        <button data-collapse-toggle="navbar-sticky" onClick={ToggleNav} type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div class="items-center justify-between block xxs:hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white bg-gray-800 md:bg-gray-900 border-gray-700">
                        <li>
                            {current == "home" ? 
                                (<Link href="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:text-blue-500" aria-current="page">Home</Link>) 
                                : 
                                (<Link href="/" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700" aria-current="page">Home</Link>) 
                            }
                            
                        </li>
                        <li>
                            {current == "about" ? 
                                (<Link href="/about" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:text-blue-500" aria-current="page">About</Link>) 
                                : 
                                <Link href="/about" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">About</Link>
                            }
                        </li>
                        <li> 
                            {current == "blog" ? 
                                (<Link href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:text-blue-500" aria-current="page">Blog</Link>) 
                                : 
                                <Link href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Blog</Link>
                            }
                        </li>
                        {/* <li>
                            {current == "contact" ? 
                                (<Link href="/contact/contact" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:text-blue-500" aria-current="page">Contact</Link>) 
                                : 
                                <Link href="/contact/contact" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Contact</Link>
                            }                        
                        </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

function ToggleNav() {
    let ulNav = document.getElementById('navbar-sticky');
    ulNav.classList.toggle('xxs:hidden');    
}
