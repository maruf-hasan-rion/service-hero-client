import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";

const BookedServices = () => {
  const { user } = useContext(AuthContext);
  const [booked, setBooked] = useState([]);
  //   const { title, price, image } = booked || {};

  useEffect(() => {
    fetchAllServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const fetchAllServices = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/booking/${user?.email}`
    );
    setBooked(data);
  };
  console.log(booked);
  return (
    <section className="container px-4 mx-auto pt-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">
          My Booked Services
        </h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {booked.length} Services
        </span>
      </div>
      {booked.length > 0 && (
        <div className="w-11/12 mx-auto pt-5 grid md:grid-cols-3 gap-3">
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
                  <p className="font-semibold">Service By:</p>
                  <div className="card-actions justify-between items-center">
                    <div className="flex justify-center items-center">
                      <img className="w-12" src={user?.photoURL} alt="" />
                      <p className="badge badge-accent p-4">
                        {user?.displayName}
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
                      <div className="badge badge-outline badge-accent">
                        {services.serviceStatus}
                      </div>
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

export default BookedServices;
