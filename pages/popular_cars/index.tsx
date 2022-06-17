import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getPopularCarsData } from "../../lib/fetch_cars";
import Layout from "../../components/layout";
import Grid from "@mui/material/Grid";

export async function getStaticProps() {
  const allPopularCars = await getPopularCarsData();
  return {
    props: {
      allPopularCars,
    },
  };
}
interface AllPopularCars {
  name: string,
  imageUrl: string,
}
interface PageProps {
  allPopularCars: AllPopularCars[]
}
export default function Home({ allPopularCars }: PageProps) {
  return (
    <Layout>
      <Head>
        <title>Cars</title>
      </Head>
      <div className="catalogue_container">
        <h1 style={{ marginBlock: "20px" }}>
          <span style={{ color: "orange" }}>P</span>opular{" "}
          <span style={{ color: "orange" }}>C</span>ars
        </h1>
        <Grid
          direction="rows"
          container
          style={{ height: "120px" }}
          spacing={2}
        >
          {allPopularCars.map((popularCar) => {
            return (
              <Grid item xs={12} sm={4}>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{popularCar.name}</h5>
                    <br />
                    <Image src={popularCar.imageUrl} width={100} height={100} />
                    {/* <a className="btn btn-primary">Buy Car</a> */}
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Layout>
  );
}
