import Head from "next/head";
import Image from "next/image";
import { getAllCarsData } from "../lib/fetch_cars";
import Layout from "../components/layout";
import LandingPage from "../components/LandingPage";
import Grid from "@mui/material/Grid";
import Footer from "../components/Footer";

export async function getStaticProps() {
  const allPopularCars = await getAllCarsData();
  return {
    props: {
      allPopularCars,
    },
  };
}

export default function Home({ allPopularCars }) {
  return (
    <Layout>
      <Head>
        <title>Cars</title>
      </Head>
      <div>
        <LandingPage />
      </div>
      <section>
        <div className="catalogue_container">
          <h1>
            <span style={{ color: "yellow" }}>L</span>atest{" "}
            <span style={{ color: "yellow" }}>C</span>ars
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
                      <h5 class="card-title">{popularCar.title}</h5>
                      <div className="col"><span className="car_description">Registration : </span> {popularCar.licensePlate}</div>
                      <br />
                      <Image src={popularCar.imageUrl} className="image_container" width={140} height={100} />
                      <br />
                      <br />
                      <div className="row">
                        <div className="col"><span className="car_description">Transmission</span> {popularCar.transmission}</div>
                        <div className="col"><span className="car_description">Market Price</span> {popularCar.marketplacePrice} $</div>
                        <div className="col"><span className="car_description">Location</span> {popularCar.city}</div>
                        <div className="col"><span className="car_description">Fuel Type</span> {popularCar.fuelType}</div>

                      </div>
                      <br />
                      <a className="btn btn-primary" style={{ width: "220px" }}>Buy Car</a>
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </section>
      <section>
        <div className="">
          <Footer />
        </div>
      </section>
    </Layout>
  );
}
