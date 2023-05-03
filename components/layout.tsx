import Head from "next/head";
import styles from "./layout.module.css"
import Link from "next/link";
import NavBar from './navbar'

export default function Layout({children}: {children: any},{current}:{current: string}) {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <title>TJob</title>
            </Head>
            <header>
                <NavBar current = {current}/>
            </header>

            <section className="m-2 container mx-auto mt-20">
                {children}
            </section>
            
            <section>

            </section>
        </div>
    )
}