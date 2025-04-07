import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import axios from "axios";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import hosting from "../assets/hosting.jpg";
import cloud from "../assets/cloud.jpg";
import software from "../assets/register.jpg";
import PricingPlan from "../components/PricingPlan";

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

  // const [theme, setTheme] = useState(
  //   localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  // );
  // const handleToggle = (e) => {
  //   if (e.target.checked) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };
  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  //   const localTheme = localStorage.getItem("theme");
  //   document.querySelector("html").setAttribute("data-theme", localTheme);
  // }, [theme]);

  useEffect(() => {
    AOS.init({
      duration: 3000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <div>
      {/* <div className="p-4 mr-8 flex justify-end items-center mb-10">
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
      </div> */}
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
          Welcome to a New Era of Service!
        </h1>
        <div className="flex flex-col md:flex-row  items-center justify-center gap-5 mt-12">
          <div
            data-aos="zoom-in"
            style={{
              backgroundImage: `url(${hosting})`,
            }}
            className="w-72 h-72 flex items-center justify-center bg-cover text-3xl font-bold"
          >
            Hosting
          </div>
          <div
            data-aos="zoom-in-up"
            style={{
              backgroundImage: `url(${cloud})`,
            }}
            className="w-72 h-72 flex items-center justify-center bg-cover text-3xl font-bold"
          >
            Cloud
          </div>
          <div
            data-aos="zoom-in-down"
            style={{
              backgroundImage: `url(${software})`,
            }}
            className="w-72 h-72 bg-orange-400 flex items-center justify-center bg-cover text-3xl font-bold"
          >
            software
          </div>
        </div>
      </div>
      <PricingPlan></PricingPlan>
      <div className="p-10 w-9/12 mx-auto">
        <h1 className="text-5xl font-semibold text-center p-10">
          Frequently asked questions?
        </h1>
        <div className="collapse collapse-arrow bg-blue-100 m-2">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What types of gadgets do you service?
          </div>
          <div className="collapse-content">
            <p>
              We service a wide range of gadgets including smartphones, tablets,
              laptops, desktops, smartwatches, and gaming consoles.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-blue-100 m-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What brands do you repair?
          </div>
          <div className="collapse-content">
            <p>
              We repair gadgets from major brands such as Apple, Samsung, Sony,
              Microsoft, Dell, HP, and many others.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-blue-100 m-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Do you offer a warranty on your repairs?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we offer a 90-day warranty on all our repairs. This covers
              any issues related to the repair work done by us.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-300 md:h-40 h-full md:px-32 mx-auto my-10 md:flex justify-between items-center">
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
