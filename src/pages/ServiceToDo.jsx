import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ServiceToDo = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [booked, setBooked] = useState([]);

  useEffect(() => {
    fetchAllServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const fetchAllServices = async () => {
    const { data } = await axiosSecure.get(`/booking/service/${user?.email}`);
    setBooked(data);
  };
  console.log(booked);

  const handleStatusUpdate = (e, id) => {
    console.log(e.target.value, id);
    const data = {
      serviceStatus: e.target.value,
    };
    fetch(`${import.meta.env.VITE_API_URL}/booking/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Status Has been updated.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <section className="container px-4 mx-auto pt-12">
      <Helmet>
        <title>Service To Do</title>
      </Helmet>
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">Service To Do</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {booked.length} Services
        </span>
      </div>
      {booked.length > 0 && (
        <div className="w-11/12 mx-auto pt-5 grid md:grid-cols-3 gap-24">
          {booked.map((services) => (
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
                  {/* <p className="h-12">
                  {services.description.substring(0, 70)}...
                </p> */}
                  <p className="font-semibold">Service To:</p>
                  <div className="card-actions justify-between items-center">
                    <div className="flex flex-col justify-center gap-3">
                      {/* <img
                        className="w-12"
                        src={services?.user?.email}
                        alt=""
                      /> */}
                      <p className="badge badge-accent p-4">
                        {services?.user?.email}
                      </p>
                      <p className="badge badge-accent p-4">
                        {services?.user?.name}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Price:</p>
                      <div className="badge badge-outline badge-secondary">
                        {services.price} $
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">Status:</p>
                      <select
                        onChange={(e) => handleStatusUpdate(e, services._id)}
                        defaultValue={services.serviceStatus || "Change Status"}
                        className="select select-bordered select-sm w-full max-w-xs bg-red-700 text-white font-bold"
                      >
                        <option disabled selected>
                          pending
                        </option>
                        <option>working</option>
                        <option>completed</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {booked.length == 0 && (
        <div className=" flex flex-col justify-center items-center gap-32">
          <h2 className="text-5xl font-semibold text-blue-600 ">
            No booked service
          </h2>
          <Link to="/services">
            <button className="btn btn-primary px-10">Book A service</button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default ServiceToDo;
