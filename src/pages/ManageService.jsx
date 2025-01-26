import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
// import useAxiosSecure from '../hooks/useAxiosSecure'
// import useAuth from '../hooks/useAuth'
import AuthContext from "../contexts/AuthContext";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const ManageService = () => {
  //   const axiosSecure = useAxiosSecure()
  // const { user } = useAuth()
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchAllServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const fetchAllServices = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/services/${user?.email}`
    );
    setServices(data);
  };
  console.log(services);

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/service/${id}`
      );
      console.log(data);
      toast.success("Delete Successful");

      //refresh ui
      fetchAllServices();
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };
  // const handleDelete = async (id) => {
  //   try {
  // Swal.fire({
  //      title: "Are you sure?",
  //      text: "You won't be able to revert this!",
  //      icon: "warning",
  //      showCancelButton: true,
  //      confirmButtonColor: "#3085d6",
  //      cancelButtonColor: "#d33",
  //      confirmButtonText: "Yes, delete it!",
  //    })
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
  //  const handleDelete = (id) => {
  //    console.log(id);
  //    Swal.fire({
  //      title: "Are you sure?",
  //      text: "You won't be able to revert this!",
  //      icon: "warning",
  //      showCancelButton: true,
  //      confirmButtonColor: "#3085d6",
  //      cancelButtonColor: "#d33",
  //      confirmButtonText: "Yes, delete it!",
  //    }).then((result) => {
  //      if (result.isConfirmed) {
  //        fetch(`https://movie-portal-server-beta.vercel.app/movies/${id}`, {
  //          method: "DELETE",
  //        })
  //          .then((res) => res.json())
  //          .then((result) => {
  //            console.log(result);
  //            if (result.deletedCount > 0) {
  //              Swal.fire({
  //                title: "Deleted!",
  //                text: "Your Movie has been deleted.",
  //                icon: "success",
  //              });
  //            }
  //            navigate("/");
  //          });
  //      }
  //    });
  //  };
  return (
    <section className="container px-4 mx-auto pt-12">
      <Helmet>
        <title>Manage Services</title>
      </Helmet>
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">
          My Posted Services
        </h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {services.length} Services
        </span>
      </div>
      <div className="w-11/12 mx-auto pt-5 grid md:grid-cols-3 gap-10">
        {services.map((services) => (
          <div key={services._id}>
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure className="h-64">
                <img src={services.image} alt="img1" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {services.title}
                  <div className="badge badge-secondary">10% OFF!</div>
                </h2>
                <p className="h-12">
                  {services.description.substring(0, 70)}...
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 justify-center items-center w-fit">
                    <p className="font-semibold">Area: </p>
                    <div className="badge badge-secondary">{services.area}</div>
                  </div>
                  <div className="flex gap-2 justify-center items-center w-fit">
                    <p className="font-semibold">Price: </p>
                    <div className="badge badge-outline badge-secondary">
                      {services.price} $
                    </div>
                  </div>
                </div>
                <div className="flex justify-evenly items-center py-2">
                  <Link to={`/updateService/${services._id}`}>
                    <button className="btn btn-primary px-10">Update</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(services._id)}
                    className="btn btn-primary px-10"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManageService;
