import Layout from "../../components/layout";
import Image from "next/image"

export default function About() {
    return (
        <Layout>
            <div className="centered_container" style={{ width: "60vw" }}>
                <div>
                    <div style={{ marginBlock: "30px" }} >
                        <Image src="/images/logo.png" height={35} width={180} />
                    </div>
                    <div className="page_title" style={{ marginBlock: "10px" }}>
                        Bringing you brands
                    </div>
                    <div className="page_text">
                        We are partnering with major car distributors to bring you great and affordable options especially when it comes to brand new cars. Find out what suits your from our wide range or vehicles.
                    </div>
                    <div style={{ bottom: "0", display: "flex", color: "blue" }}>
                        Email : carstudio@mail.com
                    </div>
                </div>
            </div>
        </Layout>
    )
}