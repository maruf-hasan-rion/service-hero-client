import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import axios from "axios";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetchAllServices();
  }, []);

  const fetchAllServices = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/services`
    );
    setServices(data);
  };
  return (
    <div>
      <Banner></Banner>
      <div className="">
        <h1 className="text-3xl font-bold text-center py-6 mt-20">
          We create unique Service Experiences
        </h1>
        <div className="w-11/12 mx-auto pt-5 grid md:grid-cols-3 gap-3">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="mx-auto my-10 w-1/5">
        <Link to="/services"><button className="btn btn-primary w-40">Show All</button></Link>
        
        </div>
      </div>
    </div>
  );
};

export default Home;
