import { useLoaderData, Form, Link } from "react-router-dom"


 function Index(props) {
  const cheeses = useLoaderData()
  
  //  return <h1>Hello world</h1>
  return (
    <div>
        <h2>Create a Cheese</h2>
        <Form action="/create" method="post">
            <input type="input" name="name" placeholder="cheese name" />
            <input type="input" name="countryOfOrigin" placeholder="country of origin" />
            <input type="input" name="image" placeholder="picture of cheese" />
            <input type="submit" value="create cheese" />
        </Form>

        <h2>Cheeses</h2>
            {cheeses.map(cheese => (
            <div key={cheese._id} className="cheese">
                <Link to={`/${cheese._id}`}>
                    <h1>{cheese.name}</h1>
                </Link>
                <h3>Country of Origin: {cheese.countryOfOrigin}</h3>
                <img src={cheese.image} alt={cheese.name} className="index-img-sz"/>
                <br></br>
                <br></br>
                <br></br>
            </div>
            ))}
    </div>
)
}


export default Index