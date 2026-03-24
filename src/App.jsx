import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Snowfall from "react-snowfall";

function App() {
  return (
    <div>
      <Snowfall color="#82C3D9"/>
      <div className="flex justify-center">
        <h1 className="text-blue-500 text-3xl font-bold underline">
          Basic Login And Registration Practice without Firebase Authentication
        </h1>
      </div>
      <Navbar />
      <Outlet/>
    </div>
  );
}

export default App;
