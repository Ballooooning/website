import "./App.css";
import Home from "./pages/Home";
import {
  createHashRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import Whitepaper from "./pages/Whitepaper";
import Purchase from "./pages/Purchase";
import Dynamic from "./pages/Dynamic";

function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="whitepaper" element={<Whitepaper />} />
        <Route path="purchase" element={<Purchase />} />
        <Route path="dynamic" element={<Dynamic />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router}>
      <header>
        <nav>
          <h1>Balooooning</h1>
          <div>
            <NavLink to="/">Home</NavLink>
          </div>
        </nav>
      </header>
    </RouterProvider>
  );
}

export default App;
