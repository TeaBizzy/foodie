import { Route, Routes } from "react-router-dom"
import Home from './routes/Home';
import Registration from './routes/Registration';
import Login from './routes/Login';
import Create from "./routes/Create";
import HomePageSessions from './components/HomePageSessions'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
}

export default App;
