import { ToastContainer } from "react-toastify";
import "../src/styles/app.scss";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Homepage";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Homepage />
      <ToastContainer />
    </div>
  );
}

export default App;
