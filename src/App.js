import { Outlet } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
function App() {
  return (
    <>
      <Header>The Cheese App</Header>
      <div className="App">
        <Outlet />
      </div>
    </>
  )
}

export default App