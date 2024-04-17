import { Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Login from "./pages/Login"

function App() {

  return (
    <div className="w-full ">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Body/>}/>
      </Routes>
    </div>
  )
}

export default App
