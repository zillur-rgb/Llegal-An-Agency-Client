import { ToastContainer } from "react-toastify";
import NavBar from "./Components/NavBar/NavBar";
import Pages from "./pages/Pages";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Pages />
      <NavBar />
      <ToastContainer />
    </div>
  );
}

export default App;
