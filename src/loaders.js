import URL from "./url"

export async function indexLoader() {
  const response = await fetch( "https://cheese-back.onrender.com/cheese")
  const cheeses = await response.json()
  console.log(response)
  return cheeses
}

export async function showLoader({ params }) {
  const response = await fetch(URL + `/cheese/${params.id}`)
  const cheese = await response.json()
  return cheese
}