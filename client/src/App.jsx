import { Route, Routes, useNavigate } from "react-router-dom"
import Home from "./routes/Home"
import Registration from './routes/Registration';
import Login from './routes/Login';
import Create from "./routes/Create";
import Swipping from './routes/Swiping';
import useSessionValidator from './hooks/useSessionValidator';
import Navbar from "./components/Navbar";

function App() {
  const { user } = useSessionValidator();

  return (
    <>
      {user && <Navbar userImg={user.img_url}/>}
        <Routes>
          <Route path="/register" element={<Registration user={user} />} />
          <Route path="/login" element={<Login user={user} />} />
          {user && <>
              <Route path="/" element={<Home user={user}/>}/>
              <Route path="/create" element={<Create />} /> 
              <Route path="/swiping" element={<Swipping />} />
            </>}
        </Routes>
    </>
  );
}

export default App;
