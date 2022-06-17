import Car from "../../components/Car";
import Layout from "../../components/layout";
import Image from "next/image";

export async function getStaticPaths() {
  // Return a list of possible value for id
  const res = await fetch(
    `https://api.staging.myautochek.com/v1/inventory/car/search`
  );
  const data = await res.json();
  const paths = data.result.map((car) => {
    return {
      params: { id: car.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // Fetch necessary data for the blog post using params.id

  const id = context.params.id;
  const res = await fetch(
    `https://api.staging.myautochek.com/v1/inventory/car/` + id
  );
  const result = await fetch(
    `https://api.staging.myautochek.com/v1/inventory/car_media?carId=` + id
  );
  const carMedia = await result.json();
  const data = await res.json();
  return {
    props: { car: data, media: carMedia.carMediaList[0] },
  };
}


interface CarDetails {
  id: string,
  carName: string,
  licensePlate: string, imageUrl: string, transmission: string, marketplacePrice: string,
  city: string, fuelType: string, mileageUnit: string, year: string,
  exteriorColor: string, mileage: string, sellingCondition: string,
}
interface MediaDetiail {
  name: string,
  url: string
}
interface PageProps {
  car: CarDetails,
  media: MediaDetiail[]
}
export default function CarDetail({ car, media }: PageProps) {
  return (
    <Layout>
      <div className="centered_container" style={{ marginTop: "20px" }}>
        <div className="card col-sm-7" key={car.id}>
          <div className="card-body">
            <h5 className="card-title">{car.carName}</h5>
            <div className="col">
              <span className="car_description">Registration : </span>{" "}
              {car.licensePlate}
            </div>
            <br />
            <Image
              src={car.imageUrl}
              className="image_container"
              width={140}
              height={100}
            />
            <br />
            <br />
            <div className="row">
              <div className="col">
                <span className="car_description">Transmission</span>{" "}
                {car.transmission}
              </div>
              <div className="col">
                <span className="car_description">Market Price</span>{" "}
                {car.marketplacePrice} $
              </div>
              <div className="col">
                <span className="car_description">Location</span> {car.city}
              </div>
              <div className="col">
                <span className="car_description">Fuel Type</span>{" "}
                {car.fuelType}
              </div>
              <div className="col">
                <span className="car_description">Mileage</span> {car.mileage}{" "}
                {car.mileageUnit}
              </div>
              <div className="col">
                <span className="car_description">YOM</span> {car.year}
              </div>
              <div className="col">
                <span className="car_description">Color</span>{" "}
                {car.exteriorColor}
              </div>
              <div className="col">
                <span className="car_description">Used</span>{" "}
                {car.sellingCondition}
              </div>
            </div>
            <br />
          </div>
        </div>
        <div className="col-sm-4">
          <h4>Car Media</h4>{" "}
          <div>
            <div>{media.name}</div>
            <Image
              src={media.url}
              className="image_container"
              width={140}
              height={100}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
