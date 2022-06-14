export async function getAllCarsData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint

  const res = await fetch(
    "https://api.staging.myautochek.com/v1/inventory/make?popular=true"
  );
  const allPopularCars = await res.json();
  console.log(allPopularCars);

  return allPopularCars.makeList;
}
