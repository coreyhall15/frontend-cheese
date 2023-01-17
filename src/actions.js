import { redirect } from "react-router-dom"
import URL from "./url"

//Create action
export async function createAction({ request }) {
  const formData = await request.formData()

  const newCheese = {
    name: formData.get("name"),
    countryOfOrigin: formData.get("countryOfOrigin"),
    image: formData.get("image"),
  }

  await fetch(URL + "/cheese", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCheese),
  })

  return redirect("/")
}

//Update action
export async function updateAction({ request, params }) {
  const formData = await request.formData()

  const updatedCheese = {
    name: formData.get("name"),
    countryOfOrigin: formData.get("countryOfOrigin"),
    image: formData.get("image"),
  }

  await fetch(URL + `/cheese/${params.id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCheese),
  })

  return redirect("/")
}

//Delete action
export async function deleteAction({ params }) {
  await fetch(URL + `/cheese/${params.id}`, {
    method: "delete",
  })

  return redirect("/")
}        
      