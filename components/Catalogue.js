import styles from "./layout.module.css";
import { getAllCarsData } from "../lib/fetch_cars";
import Image from "next/image";

export async function getStaticProps() {
  const allPopularCars = await getAllCarsData();
  return {
    props: {
      allPopularCars,
    },
  };
}
export default function Catalogue({ allPopularCars }) {
  return (
    <>
      <div className={styles.center_align_content}>
        <h1>
          <span style={{ color: "yellow" }}>L</span>atest{" "}
          <span style={{ color: "yellow" }}>C</span>ars
        </h1>

        <section>
          Cars
          <ul>
            {allPopularCars.map((popularCar) => (
              <li key={popularCar.id}>
                {popularCar.name}
                <br />
                <Image src={popularCar.imageUrl} width={100} height={100} />
              </li>
            ))}
          </ul>
        </section>
        {/* <div className="row">
          <div className="col">
            <ul key={allPopularCars.id}>
              {allPopularCars.makeList.map((popularCar) => (
                <li key={popularCar.id}>
                  {popularCar.name}
                  <br />
                  <Image src={popularCar.imageUrl} width={100} height={100} />
                </li>
              ))}
            </ul>
            <div className={styles.catalogue_card}>Car Name</div>
          </div>
        </div> */}
      </div>
    </>
  );
}
