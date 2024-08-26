import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./components/User"
import TodoPage from "./components/TodoPage";


export const App: React.FC = () => {

  return (


    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
      
    </>


  )


}

export default App
