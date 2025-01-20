/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// import image from '../assets/logo.png'

const ServiceCard = ({ service }) => {
  const { title, price, description, _id, image, serviceProvider } =
    service || {};
  // console.log("service", service);
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="h-64">
          <img src={image} alt="img1" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">10% OFF!</div>
          </h2>
          <p>{description.substring(0, 70)}...</p>
          <p className="font-semibold">Service By:</p>
          <div className="card-actions justify-between items-center">
            <div className="flex justify-center items-center">
              <img className="w-12" src={serviceProvider.photo} alt="" />
              <p className="badge badge-accent p-4">{serviceProvider.name}</p>
            </div>
            <div>
              <p className="font-semibold">Price:</p>
              <div className="badge badge-outline badge-secondary">
                {price} $
              </div>
            </div>
          </div>
          <Link to={`/details/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
