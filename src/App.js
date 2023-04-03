import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar";
import Home from "./components/home";
import AddVideo from "./components/AddVideo";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        < Navbar />
        <Routes>
          <Route path="/" element={
            <div className="homepage">
              <Sidebar />
              <Home />
            </div>
          } />
          <Route path="/addVideo" element={<AddVideo />} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}
export default App;