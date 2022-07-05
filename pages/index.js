import Head from "next/head";
import Image from "next/image";
import { getAllCarsData, getPopularCarsData } from "../lib/fetch_cars";
import Layout from "../components/layout";
import LandingPage from "../components/LandingPage";
import Grid from "@mui/material/Grid";
import Footer from "../components/Footer"
import QuickAccess from "../components/QuickAccess";

export async function getStaticProps() {
  const allPopularCars = await getAllCarsData();
  // const popularCarsData = await getPopularCarsData()
  return {
    props: {
      allPopularCars,
      // popularCarsData
    },
  };
}

export default function Home({ allPopularCars }) {
  const priceList = [
    {
      'range': "1,500$ - 2,500$",
      'route': '2000'
    },
    {
      'range': "2,500$ - 3,500$",
      'route': '3000'
    },
    {
      'range': "3,500$ - 4,500$",
      'route': '4000'
    },
    {
      'range': "5,500$ - 6,500$",
      'route': '5000'
    }
  ];
  const transmissionList = [
    {
      "type": "Manual"
    },
    {
      "type": "Automatic"
    }
  ];
  const fuelList = [
    {
      "type": "Hybrid"
    },
    {
      "type": "Petrol"
    },
    {
      "type": "Diesel"
    }
  ];
  const popularBrands = [
    {
      id: 13,
      name: "BMW",
      imageUrl: "https://storage.googleapis.com/img.autochek.africa/brands/bmw.svg"
    },
    {
      id: 45,
      name: "Honda",
      imageUrl: "https://storage.googleapis.com/img.autochek.africa/brands/honda.svg"
    },
    {
      id: 49,
      name: "Isuzu",
      imageUrl: "https://www.flaticon.com/svg/static/icons/svg/741/741407.svg"
    },
    {
      id: 51,
      name: "Jaguar",
      imageUrl: "https://storage.googleapis.com/img.autochek.africa/marketplace/jaguar.jpg"
    },
    {
      id: 68,
      name: "Mazda",
      imageUrl: "https://www.flaticon.com/svg/static/icons/svg/741/741407.svg"
    },
    {
      id: 70,
      name: "Mercedes-Benz",
      imageUrl: "https://storage.googleapis.com/img.autochek.africa/brands/benz.svg"
    },
    {
      id: 74,
      name: "Mitsubishi",
      imageUrl: "https://www.flaticon.com/svg/static/icons/svg/741/741407.svg"
    },
    {
      id: 76,
      name: "Nissan",
      imageUrl: "https://storage.googleapis.com/img.autochek.africa/brands/nissan.svg"
    },
    {
      id: 100,
      name: "Subaru",
      imageUrl: "https://www.flaticon.com/svg/static/icons/svg/741/741407.svg"
    },
    {
      id: 106,
      name: "Toyota",
      imageUrl: "https://storage.googleapis.com/img.autochek.africa/marketplace/toyota.png"
    }
  ]
  return (
    <Layout>
      <Head>
        <title>Cars</title>
      </Head>
      <div>
        <LandingPage />
      </div>
      <div className="row" style={{ marginInline: "55px" }}>
        <div className="col-sm-9 catalogue_container">
          <h1>
            <span style={{ color: "orange" }}>P</span>opular{" "}
            <span style={{ color: "orange" }}>B</span>rands
          </h1>

          <Grid
            direction="rows"
            container
            style={{ height: "120px" }}
            spacing={2}
          >
            {popularBrands.map((popularCar) => {
              return (
                <Grid item xs={12} sm={4}>
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">{popularCar.name}</h5>
                      <br />
                      <Image src={popularCar.imageUrl} width={100} height={100} />
                    </div>
                  </div>
                </Grid>
              );
            })}
            <div style={{ marginTop: "3vw" }}> <QuickAccess /> </div>
            <div> <Footer /> </div>
          </Grid>
        </div>
        <div className="col-sm-3">
          <h1>
            <span style={{ color: "white" }}>Search</span>{" "}
            <span style={{ color: "white" }}>Here</span>
          </h1>
          <div className="card" style={{ padding: "20px" }}>
            <h4>Search Hear</h4>
            <input
              className="styled_input"
              type="text"
              id="myInput"
              style={{ marginInline: "0px" }}
              placeholder="Car name..."
            />
            <div>
              <h5 style={{ marginTop: "20px" }}>Price</h5>
              <ul style={{ listStyle: "none", padding: "0px" }}>
                {priceList.map((price) => (
                  <li>
                    <a className="btn" style={{ padding: "0px" }}>
                      {price.range}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5>Popular Cars</h5>
              <ul style={{ listStyle: "none", padding: "0px" }}>
                {/* {popularCarsData.map((popular) => (
                  <li>
                    <a className="btn" style={{ padding: "0px" }}>
                      {popular.name}
                    </a>
                  </li>
                ))} */}
              </ul>
            </div>
            <div>
              <h5>Transmission</h5>
              <ul style={{ listStyle: "none", padding: "0px" }}>
                {transmissionList.map((transmission) => (
                  <li>
                    <a className="btn" style={{ padding: "0px" }}>
                      {transmission.type}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5>Fuel Type</h5>
              <ul style={{ listStyle: "none", padding: "0px" }}>
                {fuelList.map((fuel) => (
                  <li>
                    <a className="btn" style={{ padding: "0px" }}>
                      {fuel.type}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="">{/* <Footer /> */}</div>
      </section>
    </Layout >
  );
}
