import axios from "axios";
import ServiceCard from "../components/ServiceCard";
import { useEffect, useState } from "react";

const Services = () => {
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
      <div className="w-11/12 mx-auto pt-5 grid md:grid-cols-3 gap-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
