import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./components/User"
import TodoPage from "./components/TodoPage";


export const App: React.FC = () => {
  // const [user, setUser] = useState<string>('');

  // if (!localStorage.getItem('user')) {
  //   return (
  //     <User />
  //   )
  // }


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
