import { useLoaderData, Form } from "react-router-dom"
// import Header from "../components/Header"

function Show(props) {
  
    
    const cheese = useLoaderData()

    return (
      <div className="cheese">    
          <h1>{cheese.name}</h1>
          <h2>Country of Origin: {cheese.countryOfOrigin}</h2>
          <img src={cheese.image} alt={cheese.name} className="show-img-sz" />

          <h2>Update {cheese.name}</h2>
          <Form action ={`/update/${cheese._id}`} method="post">
              <input type="input" name="name" placeholder="cheese name" />
              <input type="input" name="cheese.countryOfOrigin" placeholder="cheese.countryOfOrigin" />
              <input type="input" name="image" placeholder="link for cheese image" />
              <input type="submit" value={`update ${cheese.name}`} />
          </Form>
          
          <br></br>

          <h2>Delete Cheese</h2>
          <Form action={`/delete/${cheese._id}`} method="post">
              <input type="submit" value ={`delete ${cheese.name}`} />
          </Form>
  

      </div>
  )
}



export default Show;