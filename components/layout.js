import Head from "next/head";
import styles from "./layout.module.css"
import Link from "next/link";
import NavBar from './navbar'
export default function Layout({children}) {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <title>TJob</title>
            </Head>
            <header>
                <NavBar />
            </header>

            <section class="m-2 container mx-auto">
                {children}
            </section>
            
            <section>

            </section>
        </div>
    )
}