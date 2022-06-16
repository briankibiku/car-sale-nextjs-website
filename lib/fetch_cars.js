export async function getPopularCarsData() {
  const res = await fetch(
    "https://api.staging.myautochek.com/v1/inventory/make?popular=true"
  );
  const allPopularCars = await res.json();
  return allPopularCars.makeList;
}

export async function getAllCarsData() {
  const res = await fetch(
    "https://api.staging.myautochek.com/v1/inventory/car/search"
  );
  const allCars = await res.json();
  return allCars;
}
