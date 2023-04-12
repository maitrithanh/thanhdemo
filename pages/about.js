import Layout from "@/components/layout"
import Head from "next/head"
import Image from "next/image"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot, faMobileScreenButton, faAt} from '@fortawesome/free-solid-svg-icons'

export default function About() {
    return (
        <Layout current="about">
            <Head>
                <title>About</title>
            </Head>
            <section className="grid justify-center place-items-center h-screen">
                <div className="mb-28">
                    <h2 className="flex justify-center uppercase text-gray-700 text-3xl font-bold italic">Nice to meet you.</h2>
                    <div className={`flex p-4 rounded-full shadow-2xl w-96`}>
                        <Image priority src="/images/Thanh.jpg" width={108} height={108} className={`rounded-full`}/>
                        <div className={`ml-2`}>
                            <h4 className="text-gray-600 text-xl font-bold">Mai Tri Thanh</h4>
                            <p className="text-gray-700 text-md">
                                <FontAwesomeIcon 
                                    icon={faLocationDot}
                                    style={{fontSize: 14, padding: 2}}
                                />
                                HCMC
                            </p>
                            <p className="text-gray-700 text-md">
                                <FontAwesomeIcon 
                                    icon={faMobileScreenButton}
                                    style={{fontSize: 14, padding: 2}}
                                />
                                0325575029
                            </p>
                            <p className="text-gray-700 text-md">
                                <FontAwesomeIcon 
                                    icon={faAt}
                                    style={{fontSize: 14, padding: 2}}
                                />
                                maitrithanh06@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}