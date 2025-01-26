import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import axios from "axios";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

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

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div>
      <div className="p-4 mr-8 flex justify-end items-center">
        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            onChange={handleToggle}
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
      <Banner></Banner>
      <div className="">
        <h1 className="text-3xl font-bold text-center py-6 mt-20">
          We create unique Service Experiences
        </h1>
        <div className="w-9/12 mx-auto pt-5 grid md:grid-cols-2 gap-10">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="mx-auto my-10 w-1/5">
          <Link to="/services">
            <button className="btn btn-primary w-40">Show All</button>
          </Link>
        </div>
      </div>
      <div className="my-16">
        <h1 data-aos="fade-up" className="text-center my-6 font-bold text-3xl">
          Welcome to a New Era of Movie!
        </h1>
        <div className="flex flex-col md:flex-row  items-center justify-center gap-5 mt-12">
          <div
            data-aos="zoom-in"
            className="w-72 h-72 flex items-center justify-center text-white bg-[url('https://img.freepik.com/free-photo/senior-police-agent-with-gun_155003-4445.jpg?t=st=1737007353~exp=1737010953~hmac=ce6d8af796dc4d17ec2dc2fbf4bbb0d533d51f4c7244471fcb833b50189faaa7&w=740')] bg-cover"
          >
            Horror
          </div>
          <div
            data-aos="zoom-in-up"
            className="w-72 h-72 flex items-center justify-center text-white bg-[url('https://img.freepik.com/free-photo/flying-men-outdoors-cyberpunk-portrait_23-2150006863.jpg?t=st=1737007486~exp=1737011086~hmac=21b788c19b5cad70f852ebd45478027c94cd26e1f1a0aa692dafd2c916c76630&w=900')] bg-cover"
          >
            Action
          </div>
          <div
            data-aos="zoom-in-down"
            className="w-72 h-72 bg-orange-400 flex items-center justify-center  text-white bg-[url('https://img.freepik.com/free-photo/3d-dogs-cinema-watching-movie_23-2151024831.jpg?t=st=1737007551~exp=1737011151~hmac=26963cc1884b1eac4ab36c5d9943815cfc4b199f4ee0611f5f4687ea8fd4875c&w=360')] bg-cover"
          >
            Animation
          </div>
        </div>
      </div>
      <div className="bg-blue-300 md:w-11/12 md:h-40 h-full md:px-32 mx-auto my-10 md:flex justify-between items-center">
        <div className="md:w-6/12 p-6">
          <h2 className="text-3xl font-bold">Trial Start First 30 Days.</h2>
          <p className="font-medium">
            Enter your email to create or restart your membership.
          </p>
        </div>
        <div className="md:w-6/12 md:ml-40 p-10">
          <div className="join">
            <input
              className="input input-bordered join-item"
              placeholder="Email"
            />
            <button className="btn join-item rounded-r-full btn-neutral">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
