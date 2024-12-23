import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="h-screen mx-auto grid place-items-center text-center px-8">
        <div>
          <h1
            color="blue-gray"
            className="mt-10 !text-3xl !leading-snug md:!text-4xl"
          >
            Error 404 <br /> It looks like something went wrong.
          </h1>
          <p className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
            Don&apos;t worry, our team is already on it.Please try refreshing
            the page or come back later.
          </p>
          <Link to="/"><button className="bg-gradient-to-r from-[#a044ff] to-[#6a11cb] text-white rounded-full px-10 py-4 text-sm font-bold" >
                        Back to Home
                    </button></Link>
        </div>
    </div>
    );
};

export default Error;
