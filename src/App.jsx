import { useLoaderData } from "react-router";
import CoffeeCard from "./components/CoffeeCard";
import "./App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="bg-slate-50 text-black  h-full font-sans ">
      <div className="text-center">
        <p className="ProductTitle">Our Popular Product</p>
        <Link to="/addCoffee">
          <button className="btn text-white border-stone-100 hover:bg-slate-500 bg-slate-500">
            Add Product
          </button>
        </Link>
      </div>
      <div className="cardStyle grid grid-cols-2 gap-4 p-4 ">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
