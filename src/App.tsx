import { ToastContainer } from "react-toastify";
import "../src/styles/app.scss";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <div className="container">
      <Navbar />
      <ToastContainer />
    </div>
  );
}

export default App;
