import React from "react";
import useReviews from "../Hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
  //custom hook

  const [reviews] = useReviews();

  return (
    <div>
      <h2 className="text-center sm:text-3xl font-bold text-stock yellow-text mt-8">
        Ours Customers Reviews
      </h2>
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-14 mx-auto">
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((review) => (
              <Review key={review._id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
