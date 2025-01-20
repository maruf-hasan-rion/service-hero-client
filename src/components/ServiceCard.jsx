/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
// import { format } from "date-fns";
import image from '../assets/logo.png'

const ServiceCard = ({ service }) => {
  const { title, area, price, description,_id } =
    service || {};
  // console.log("service", service);
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="h-64">
          {/* <img src={image} alt="img1" /> */}
          <img src={image} alt="img1" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">SALE!</div>
          </h2>
          <p>{description}</p>
          <p className="badge badge-secondary">{area}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              {/* {bookingAvailability ? "Available" : "N/A"} */}
              wow!
            </div>
            <div className="badge badge-outline">{price}</div>
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
