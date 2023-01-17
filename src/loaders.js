import URL from "./url"

export async function indexLoader() {
  const response = await fetch(URL + "/cheese")
  const cheeses = await response.json()
  return cheeses
}

export async function showLoader({ params }) {
  const response = await fetch(URL + `/cheese/${params.id}`)
  const cheese = await response.json()
  return cheese
}