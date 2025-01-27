import axios from "axios";
import ServiceCard from "../components/ServiceCard";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  // console.log(search);
  useEffect(() => {
    fetchAllServices();
  }, []);

  const fetchAllServices = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/allServices`
    );
    setServices(data);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/allServices?search=${search}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [search]);
  return (
    <div>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <div className="mx-auto md:w-3/12 p-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          className="input input-bordered w-full"
          placeholder="Search Services by title"
        />
      </div>
      <div className="w-4/12 mx-auto pt-5 grid md:grid-cols-1">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
