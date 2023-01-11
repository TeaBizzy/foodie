import { Route, Routes } from "react-router-dom"
import LocationDetails from './components/LocationDetails';
import Registration from './routes/Registration';
import Login from './routes/Login';
import Create from "./routes/Create";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LocationDetails />}/>
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
}

export default App;
