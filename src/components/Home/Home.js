import { Link } from "react-router-dom";
import useReviews from "../Hooks/useReviews";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
  const [reviews] = useReviews();
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container flex flex-wrap px-5 py-14 mx-auto items-center">
          <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 yellow-text">
              Newmind USB Handheld Desk Fan !!
            </h1>
            <p className="leading-relaxed text-base">
              Improved aerodynamics, feel the comfort of natural wind, larger
              than ordinary fans on the market, softer air, larger blowing
              range, and higher comfort feelings.
            </p>
            <a
              target="_blank"
              href="https://www.amazon.com/ Newmind-Handheld-Convenient-Cooling-Household/dp/B09WZBXMBP/ref=sr_1_3?keywords=Newmind%2BUSB%2BHandheld%2BFan%2BDesk&qid=1649006825&s=home-garden&sr=1-3&th=1"
              className="yellow-bg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-4 py-2 inline-flex items-center mt-4"
              rel="noreferrer"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="flex flex-col md:w-1/2 md:pl-12">
            <img
              className="w-72 mx-auto transition ease-in-out delay-150 hover:-translate-2 hover:scale-110 duration-300"
              src="https://m.media-amazon.com/images/I/61cUmldhr4L._AC_SY355_.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-center text-3xl font-bold">
          Ours Customers Reviews
        </h2>
        <div className="text-gray-600 body-font">
          <div className="container px-5 py-14 mx-auto">
            <div className="grid grid-cols-3 gap-3 -m-4">
              {reviews.slice(0, 3).map((review) => (
                <Review key={review._id} review={review} />
              ))}
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
        <Link to="/reviews" className="yellow-bg rounded-lg  px-3 py-2">Veiw All Comments</Link>
        </div>
      </section>
      <br /><br />
    </div>
  );
};

export default Home;
