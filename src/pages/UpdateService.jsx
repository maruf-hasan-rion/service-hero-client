import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";

const UpdateService = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [service, setService] = useState({});
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
    const title = form.title.value;
    const image = form.image.value;
    const area = form.area.value;
    const price = parseFloat(form.price.value);
    const description = form.description.value;

    const formData = {
      title,
      serviceProvider: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      image,
      area,
      price,
      description,
    };
    // console.log("data",formData);

    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/update-service/${id}`,
        formData
      );
      console.log(data);
      toast.success("Service Data Updated Successfully!");
      navigate("/manageService");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  // const handleUpdate = async (id) => {
  //   try {
  //     const { data } = await axios.delete(
  //       `${import.meta.env.VITE_API_URL}/service/${id}`
  //     );
  //     console.log(data);
  //     toast.success("Delete Successful");

  //     //refresh ui
  //     fetchAllServices();
  //   } catch (err) {
  //     console.log(err.message);
  //     toast.error(err.message);
  //   }
  // };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-lg ">
        <h2 className="text-lg font-semibold text-gray-700 ">
          Update a Service
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="title">
                Service Title
              </label>
              <input
                id="title"
                name="title"
                defaultValue={service.title}
                type="text"
                required
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
                defaultValue={service.image}
                type="text"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            {service.area && (
              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700 " htmlFor="area">
                  Service Area
                </label>
                <select
                  name="area"
                  defaultValue={service.area}
                  id="area"
                  className="border p-2 rounded-md"
                >
                  <option value="Gulshan">Gulshan</option>
                  <option value="Banani">Banani</option>
                  <option value="Uttara">Uttara</option>
                </select>
              </div>
            )}
            <div>
              <label className="text-gray-700 " htmlFor="price">
                Price
              </label>
              <input
                id="price"
                name="price"
                defaultValue={service.price}
                type="number"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="description">
              Description
            </label>
            <textarea
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="description"
              defaultValue={service.description}
              id="description"
              required
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button className="disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Update Service
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateService;
