import Head from "next/head";
import styles from "./layout.module.css"
import Link from "next/link";
import NavBar from './navbar'

type LayoutProps = {
    children: any;
    current: string;
}

export default function Layout({children, current}: LayoutProps) {
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