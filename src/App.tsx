import { ToastContainer } from "react-toastify";
import "../src/styles/app.scss";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AllPages from "./Pages/AllPages";
function App() {
  return (
    <div className="container">
      <Navbar />
      <AllPages />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
