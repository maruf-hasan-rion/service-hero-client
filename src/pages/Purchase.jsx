import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
// import { compareAsc, format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Purchase = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  //   console.log(user);
  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const [service, setService] = useState({});
  //   console.log(service);
  const { title, image, price, _id, serviceProvider } = service || {};
  useEffect(() => {
    fetchServiceData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchServiceData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/service/${id}`
    );
    setService(data);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const image = form.image.value;
    const instruction = form.instruction.value;
    const price = parseFloat(form.price.value);
    const provider = form.provider.value;
    const providerEmail = form.providerEmail.value;
    const serviceDate = startDate;
    const serviceStatus = "pending";

    if (user?.email === providerEmail)
      return toast.error("Action not permitted!");

    const formData = {
      id,
      title,
      user: {
        email: user?.email,
        name: user?.displayName,
      },
      image,
      price,
      provider,
      providerEmail,
      instruction,
      serviceDate,
      serviceStatus,
    };
    console.log("data", formData);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/add-booking`, formData);
      form.reset();
      toast.success("Booked Successfully!!!");
      navigate("/bookedServices");
    } catch (err) {
      console.log(err);
      //   toast.error(err.message);
      toast.error(err?.response?.data);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-lg ">
        <h2 className="text-lg font-semibold text-gray-700 ">Purchase</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="title">
                Service Id
              </label>
              <input
                id="id"
                name="id"
                defaultValue={_id}
                type="text"
                required
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="title">
                Service Title
              </label>
              <input
                id="title"
                name="title"
                defaultValue={title}
                type="text"
                required
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="image">
                Service Image URL
              </label>
              <input
                id="image"
                name="image"
                defaultValue={image}
                type="text"
                required
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            {/* {service.area && (
              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700 " htmlFor="area">
                  Service Area
                </label>
                <select
                  name="area"
                  defaultValue={area}
                  id="area"
                  className="border p-2 rounded-md"
                >
                  <option value="Gulshan">Gulshan</option>
                  <option value="Banani">Banani</option>
                  <option value="Uttara">Uttara</option>
                </select>
              </div>
            )} */}
            <div>
              <label className="text-gray-700 " htmlFor="price">
                Price
              </label>
              <input
                id="price"
                name="price"
                defaultValue={price}
                type="number"
                required
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div>
            <label className="text-gray-700 " htmlFor="provider">
              Provider Name
            </label>
            <input
              id="provider"
              name="provider"
              defaultValue={serviceProvider?.name}
              type="text"
              required
              disabled
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 " htmlFor="providerEmail">
              Provider Name
            </label>
            <input
              id="providerEmail"
              name="providerEmail"
              defaultValue={serviceProvider?.email}
              type="email"
              required
              disabled
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 " htmlFor="user">
              User Name
            </label>
            <input
              id="user"
              name="user"
              defaultValue={user?.displayName}
              type="text"
              required
              disabled
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 " htmlFor="userEmail">
              User Email
            </label>
            <input
              id="userEmail"
              name="userEmail"
              defaultValue={user?.email}
              type="email"
              required
              disabled
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="text-gray-700">Service Taking Date</label>
            <DatePicker
              className="border p-2 rounded-md"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="instruction">
              Special Instruction
            </label>
            <textarea
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="instruction"
              //   defaultValue={instruction}
              id="instruction"
              required
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button
              /*onClick={()=>handlePurchase}*/ type="submit"
              className="disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Purchase
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Purchase;
