import  Homepage  from "./Components/Homepage";
import  Instructors  from "./Components/Instructors";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Classes from "./Components/Classes";
import Book from './Components/Book'
import Paymentinfo from './Components/Paymentinfo'
import Confirmation from "./Components/Confirmation";
import Myaccount from "./Components/Myaccount";


function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/classes" element={<Classes />}/>
        <Route path="/book" element={<Book />}/>
        <Route path="/paymentinfo" element={<Paymentinfo />}/>
        <Route path="/confirmation" element={<Confirmation />}/>
        <Route path="/myaccount" element={<Myaccount />}/>
      </Routes>
    </>
  )

}

export default App;
