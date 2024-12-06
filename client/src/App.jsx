import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import UsersForm from "./pages/UsersForm"
import ListUsers  from "./pages/ListUsers"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/ListUsers" element={<ListUsers/>}></Route>
        <Route path="/UsersForm/new" element={<UsersForm/>}></Route>
        <Route path="/UsersForm/:id" element={<UsersForm/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
