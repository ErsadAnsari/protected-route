//import Register from "./Register";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Layout from "./Layout";
import Login from "./Login";
import RequireAuth from "./RequireAuth";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Login />} />
          {/* <Route path="login" element={<Login />} /> */}
          <Route element={<RequireAuth />}>
            <Route path="home" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<h3>Page not found</h3>} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
