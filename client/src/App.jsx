import { Route, Routes } from "react-router-dom"
import Registration from './routes/Registration';
import Login from './routes/Login';

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
