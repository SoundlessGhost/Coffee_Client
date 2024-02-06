/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./CoffeeCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEye, faMarker } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, CoffeeName, Price, SupplierName, CategoryName, PhotoURl } =
    coffee;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((coffee) => coffee._id !== id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side shadow-xl ">
      <figure className="imageStyle">
        <img src={PhotoURl} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> Name: {CoffeeName}</h2>
        <p>SupplierName: {SupplierName}</p>
        <p>Price: {Price}</p>
        <p>CategoryName: {CategoryName}</p>
      </div>
      <div className="iconStyle">
        <FontAwesomeIcon className="iconStyle" icon={faEye} />
        <Link to={`updateCoffee/${_id}`}>
          <FontAwesomeIcon className="iconStyle" icon={faMarker} />
        </Link>
        <FontAwesomeIcon
          onClick={() => handleDelete(_id)}
          className="iconStyle"
          icon={faTrash}
        />
      </div>
    </div>
  );
};

export default CoffeeCard;
