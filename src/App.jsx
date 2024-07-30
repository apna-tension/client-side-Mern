import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";
import Navbar from "./component/Navbar";
import Logout from "./pages/Logout";
import Service from "./pages/Service";
import Footer from "./component/Footer";
import User from "./pages/Admin/User";
import ContactAdmin from "./pages/Admin/Contact";
import AdminPage from "./pages/Admin/AdminPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/user" element={<User />} />
          <Route path="/admin/contact" element={<ContactAdmin />} />
          {/* error 404 page */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
