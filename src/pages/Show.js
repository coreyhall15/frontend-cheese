import { useLoaderData, Form } from "react-router-dom"
import { Heading } from "../styles"

export default function Show(props) {
  const cheese = useLoaderData()
  return (
    <section
      style={{
        width: "70%",
        margin: "auto",
        backgroundColor: "#fae8cf",
        borderRadius: "10px",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <Heading>{cheese.name}</Heading>
      <h1>{cheese.countryOfOrigin}</h1>
      <img src={cheese.image} alt={cheese.name} />

      <Form action={`/update/${cheese._id}`} method="post">
        <input type="text" name="name" defaultValue={cheese.name} placeholder="Cheese name" />
        <input
          type="text"
          name="countryOfOrigin"
          defaultValue={cheese.countryOfOrigin}
          placeholder="Cheese country of origin"
        />
        <input
          type="input"
          name="image"
          defaultValue={cheese.image}
          placeholder="Cheese image URL"
        />
        <button>Update Cheese</button>
      </Form>

      <Form action={`/delete/${cheese._id}`} method="post">
        <button>Delete Cheese</button>
      </Form>
    </section>
  )
}