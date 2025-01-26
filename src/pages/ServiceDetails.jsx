import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ServiceDetails = () => {
  const { id } = useParams();
  const [services, setServices] = useState({});
  useEffect(() => {
    fetchServiceData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchServiceData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/service/${id}`
    );
    setServices(data);
  };
  //   console.log(services);
  const { title, description, image, price, _id, area, serviceProvider } =
    services || {};
  return (
    <section className="container px-4 mx-auto pt-12">
      <div className="flex items-center gap-x-3">
        {/* <h2 className="text-lg font-medium text-gray-800 ">Service Details</h2> */}
      </div>
      <div className="flex justify-center">
        <div className="card bg-base-100 w-3/5 shadow-xl">
          <figure className="h-64">
            <img src={image} alt="img1" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {title}
              <div className="badge badge-secondary">10% OFF!</div>
            </h2>
            <p className="">{description}</p>
            <p className="font-semibold">Service By:</p>
            <div className="card-actions justify-between items-center">
              <div className="flex justify-center items-center">
                <img className="w-12" src={serviceProvider?.photo} alt="" />
                <p className="badge badge-accent p-4">
                  {serviceProvider?.name}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 justify-center items-center">
                  <p className="font-semibold">Area: </p>
                  <div className="badge badge-secondary">{area}</div>
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <p className="font-semibold">Price: </p>
                  <div className="badge badge-outline badge-secondary">
                    {price} $
                  </div>
                </div>
              </div>
            </div>

            <Link className=" w-2/5 mx-auto" to={`/purchase/${_id}`}>
              <button className="btn btn-primary px-10 w-full">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
