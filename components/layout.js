import Head from "next/head";
import styles from "./layout.module.css"
import Link from "next/link";
import NavBar from './navbar'

export default function Layout({children, current}) {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <title>TJob</title>
            </Head>
            <header>
                <NavBar current = {current}/>
            </header>

            <section class="m-2 container mx-auto mt-20">
                {children}
            </section>
            
            <section>

            </section>
        </div>
    )
}