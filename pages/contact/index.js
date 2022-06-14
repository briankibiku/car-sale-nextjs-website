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
                        Get in touch
                    </div>
                    <div className="page_text">
                        Call us : +254 712 345 678
                    </div>
                    <div>
                        Email : carstudio@mail.com
                    </div>
                </div>
            </div>
        </Layout>
    )
}