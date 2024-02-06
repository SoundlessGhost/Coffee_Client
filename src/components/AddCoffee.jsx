import Swal from "sweetalert2";
import "./AddCoffee.css";
const AddCoffee = () => {
  const addHandleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const CoffeeName = form.CoffeeName.value;
    const Price = form.Price.value;
    const SupplierName = form.Supplier.value;
    const TasteName = form.Taste.value;
    const CategoryName = form.Category.value;
    const CoffeeDetails = form.Details.value;
    const PhotoURl = form.PhotoURl.value;
    const NewCoffee = {
      CoffeeName,
      Price,
      SupplierName,
      TasteName,
      CategoryName,
      CoffeeDetails,
      PhotoURl,
    };
    console.log(NewCoffee);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(NewCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="FormStyle">
      <h5 className="formHeader">Add New Coffee</h5>
      <form onSubmit={addHandleSubmit}>
        <div>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Coffee Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="CoffeeName"
                      placeholder="Coffee Name"
                      className="block w-full rounded-md border-0 p-1.5  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Price
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder="Price"
                      name="Price"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Supplier
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="Supplier"
                      placeholder="Coffee Supplier Name"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Taste
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="Taste"
                      placeholder="Coffee Taste"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Category
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="Category"
                      placeholder="Coffee Category"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Details
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="Details"
                      placeholder="Coffee Details"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Photo URl
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="PhotoURl"
                      placeholder="Enter Photo URl"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <input
              type="submit"
              value="Add Coffee"
              className="rounded-md cursor-pointer bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm w-full"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
