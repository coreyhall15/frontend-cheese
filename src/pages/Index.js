import { useLoaderData, Form, Link } from "react-router-dom"
import { Flex, Card } from "../styles"

export default function Index(props) {
  const cheeses = useLoaderData()

  return (
    <div>
      <Form action="/create" method="post">
        <input type="text" name="name" placeholder="Cheese name" />
        <input type="text" name="countryOfOrigin" placeholder="Cheese country of origin" />
        <input type="text" name="image" placeholder="Cheese image URL" />
        <button>Create New Cheese</button>
      </Form>
      <Flex>
        {cheeses.map((cheese) => (
          <Card key={cheese._id}>
            <Link to={`/${cheese._id}`}>
              <h1>{cheese.name}</h1>
            </Link>
            <h2>{cheese.countryOfOrigin}</h2>
            <img src={cheese.image} alt={cheese.name} />
          </Card>
        ))}
      </Flex>
    </div>
  )
}