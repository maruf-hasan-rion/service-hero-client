import image from "../assets/pricingPlan.jpg";
export default function PricingPlan() {
  return (
    <div
      className="text-white text-center py-20 w-full bg-center bg-cover h-[38rem]relative bg-blue-900 bg-blend-multiply"
      //   className="w-full bg-center bg-cover h-[38rem]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <p className="badge badge-primary border-none text-white p-4 uppercase">
        Complete Solutions
      </p>
      <h1 className="text-5xl p-10"> Pricing Plans</h1>
      <p className="">
        Choose from flexible, affordable cleaning plans designed to fit your
        needs, from one- <br /> time deep cleans to regular maintenance
        services.
      </p>
      <div className="flex gap-4 justify-center items-center p-10">
        <div className="bg-white text-black px-20 py-10 rounded-xl">
          <p className="text-lg font-medium">one time or monthly</p>
          <h3 className="p-4">
            $ <span className="text-7xl font-bold">49</span>/Hour/Cleaner
          </h3>
          <button className="btn btn-primary">Book Now</button>
        </div>
        <div className="bg-white text-black px-20 py-10 rounded-xl">
          <p className="text-lg font-medium">Recurring (Weekly, Biweekly)</p>
          <h3 className="p-4">
            $ <span className="text-7xl font-bold">49</span>/Hour/Cleaner
          </h3>
          <button className="btn btn-primary">Book Now</button>
        </div>
        <div className="bg-white text-black px-20 py-10 rounded-xl">
          <p className="text-lg font-medium">Office & Commercial</p>
          <h3 className="p-4">
            $ <span className="text-7xl font-bold">49</span>/Hour/Cleaner
          </h3>
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
}
