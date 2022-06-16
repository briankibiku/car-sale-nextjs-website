import Head from "next/head";
import Image from "next/image";
import { getAllCarsData } from "../../lib/fetch_cars";
import Layout from "../../components/layout";
import Pagination from "@material-ui/lab/Pagination";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Link from "next/link"

export async function getStaticProps() {
  const allPopularCars = await getAllCarsData();
  return {
    props: {
      allPopularCars,
    },
  };
}
export default function Home({ allPopularCars }) {
  const [page, setPage] = useState(1);
  function handlePaginationChange(e, value) {
    setPage(value);
    // router.push(`pagination/?page=${value}`, undefined, { shallow: true });
  }

  return (
    <Layout>
      <Head>
        <title>Cars</title>
      </Head>
      <p className="center_align_item" style={{ marginTop: "20px" }}>You are viewing page {page}</p>
      <Pagination
        count={allPopularCars.pagination.pageSize}
        rowsPerPage={6}
        variant='outlined'
        color='primary'
        className='pagination center_align_item'
        style={{ marginTop: "20px" }}
        page={page}
        onChange={handlePaginationChange}
      />
      <div className="container">
        <div>
          <h1 style={{ marginBlock: "20px" }}>
            <span style={{ color: "orange" }}>A</span>ll{" "}
            <span style={{ color: "orange" }}>C</span>ars
          </h1>
        </div>
        <Grid
          direction="rows"
          container
          style={{ height: "120px" }}
          spacing={2}
        >
          {allPopularCars.result.map((popularCar) => {
            return (
              <Grid p xs={12} sm={4}>
                <div class="card" key={popularCar.id}>
                  <div class="card-body">
                    <h5 class="card-title">{popularCar.title}</h5>
                    <div className="col">
                      <span className="car_description">Registration : </span>{" "}
                      {popularCar.licensePlate}
                    </div>
                    <br />
                    <Image
                      src={popularCar.imageUrl}
                      className="image_container"
                      width={140}
                      height={100}
                    />
                    <br />
                    <br />
                    <div className="row">
                      <div className="col">
                        <span className="car_description">Transmission</span>{" "}
                        {popularCar.transmission}
                      </div>
                      <div className="col">
                        <span className="car_description">Market Price</span>{" "}
                        {popularCar.marketplacePrice} $
                      </div>
                      <div className="col">
                        <span className="car_description">Location</span>{" "}
                        {popularCar.city}
                      </div>
                      <div className="col">
                        <span className="car_description">Fuel Type</span>{" "}
                        {popularCar.fuelType}
                      </div>
                    </div>
                    <br />
                    <a className="btn btn-primary" href={'/cars/' + popularCar.id} style={{ width: "220px" }} >
                      View Car
                    </a >
                  </div>
                </div>
              </Grid>
            );
          })}
          <Pagination
            count={allPopularCars.pagination.pageSize}
            variant='outlined'
            color='primary'
            className='pagination center_align_item'
            style={{ marginTop: "20px" }}
            page={page}
            onChange={handlePaginationChange}
          />
        </Grid>
      </div>

    </Layout >
  );
}
