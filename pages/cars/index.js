import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { getAllCarsData } from '../../lib/fetch_cars';
import Layout from '../../components/layout'

export async function getStaticProps() {
    const allPopularCars = await getAllCarsData()
    return {
        props: {
            allPopularCars,
        },
    }
}
export default function Home({ allPopularCars }) {
    return (
        <Layout>
            <Head>
                <title>Cars</title>
            </Head>
            <div>
                <p>
                    Cars Home Page
                </p>
                < section >
                    Cars
                    <ul>
                        {allPopularCars.makeList.map((popularCar) => (
                            <li key={popularCar.id}>{popularCar.name}
                                <br />
                                <Image src={popularCar.imageUrl} width={100} height={100} />
                            </li>
                        ))}
                    </ul>
                </section >
            </div>
        </Layout >
    )
}
